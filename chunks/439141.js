function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        applyBackgroundOptionLive: function() {
            return p
        },
        applyBackgroundOptionPreview: function() {
            return y
        },
        applyInitialVideoBackgroundOption: function() {
            return T
        }
    }), n("332822"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
    var s = n("627445"),
        i = n.n(s),
        r = n("773364"),
        a = n("697218"),
        o = n("315102"),
        d = n("659558"),
        u = n("154867"),
        l = n("870879"),
        f = n("239448"),
        _ = n("977801"),
        c = n("512244"),
        g = n("917219"),
        m = n("49111");
    async function h(e) {
        let t = await fetch(e),
            n = await t.blob();
        return new Uint8ClampedArray(await n.arrayBuffer())
    }

    function v(e, t, n, s, i) {
        (0, u.applyMediaFilterSettings)({
            [e]: {
                graph: n,
                target: t,
                image: s,
                blob: i
            }
        })
    }
    async function E(e, t, n) {
        var s, a;
        let d, l = !1;
        if (null == n) return v(e, t, r.FilterSettingsGraph.NONE);
        if (n === g.BLUR_BACKGROUND_OPTION) return v(e, t, r.FilterSettingsGraph.BACKGROUND_BLUR);
        if ("string" == typeof n || "number" == typeof n) {
            ;
            let e = (0, _.default)()[n];
            l = null !== (s = e.isVideo) && void 0 !== s && s, d = e.source
        } else {
            let e = n.asset;
            l = (0, o.isAnimatedIconHash)(e) || (0, o.isVideoAssetHash)(e), d = (0, o.getVideoFilterAssetURL)({
                userId: n.user_id,
                assetId: n.id,
                assetHash: e,
                size: g.BACKGROUND_REPLACEMENT_SIZE.width
            })
        }
        if (null != d) try {
            ;
            let n = l ? void 0 : await (a = d, new Promise((e, t) => {
                    let n = new Image;
                    n.crossOrigin = "anonymous", n.onload = () => {
                        let t = document.createElement("canvas");
                        t.width = g.BACKGROUND_REPLACEMENT_SIZE.width, t.height = g.BACKGROUND_REPLACEMENT_SIZE.height;
                        let s = t.getContext("2d");
                        i(null != s, "Canvas context is missing");
                        let r = n.height / n.width,
                            a = g.BACKGROUND_REPLACEMENT_SIZE.height,
                            o = g.BACKGROUND_REPLACEMENT_SIZE.height / r,
                            d = (t.width - o) / 2,
                            u = (t.height - a) / 2;
                        s.drawImage(n, d, u, o, a);
                        let l = s.getImageData(0, 0, t.width, t.height);
                        e({
                            data: l.data,
                            width: l.width,
                            height: l.height,
                            pixelFormat: "rgba"
                        })
                    }, n.onerror = e => t(e), n.src = a
                })),
                s = l ? await h(d) : void 0;
            v(e, t, r.FilterSettingsGraph.BACKGROUND_REPLACEMENT, n, s)
        } catch (e) {
            (0, u.errorApplyingMediaFilterSettings)()
        }
    }
    async function p(e, t) {
        let {
            track: n = !0,
            location: s
        } = t;
        await E(r.FilterSettingsKey.CAMERA_BACKGROUND_LIVE, {
            type: r.FilterTargetType.INPUT_DEVICE
        }, e), n && (0, f.trackBackgroundOptionUpdated)(e, s, "Enabled")
    }
    async function y(e, t, n) {
        let {
            track: s = !0,
            location: i
        } = n;
        (0, u.startApplyMediaFilterSettings)(), await E(r.FilterSettingsKey.CAMERA_BACKGROUND_PREVIEW, {
            type: r.FilterTargetType.STREAM,
            streamId: t
        }, e), s && (0, f.trackBackgroundOptionUpdated)(e, i, "Preview")
    }

    function T() {
        let e = a.default.getCurrentUser();
        if (null == e) return;
        let t = (0, d.getLastUsedVideoBackgroundOption)(e);
        (0, c.default)() && !l.default.hasBeenApplied && null != t && p(t, {
            track: !1
        }).catch(m.NOOP)
    }
}