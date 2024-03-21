function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        applyBackgroundOptionLive: function() {
            return S
        },
        applyBackgroundOptionPreview: function() {
            return T
        },
        applyInitialVideoBackgroundOption: function() {
            return v
        }
    }), n("332822"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
    var i = n("627445"),
        s = n.n(i),
        r = n("773364"),
        a = n("697218"),
        o = n("315102"),
        l = n("659558"),
        u = n("154867"),
        d = n("870879"),
        c = n("239448"),
        _ = n("977801"),
        f = n("512244"),
        E = n("917219"),
        h = n("49111");
    async function g(e) {
        let t = await fetch(e),
            n = await t.blob();
        return new Uint8ClampedArray(await n.arrayBuffer())
    }

    function m(e, t, n, i, s) {
        (0, u.applyMediaFilterSettings)({
            [e]: {
                graph: n,
                target: t,
                image: i,
                blob: s
            }
        })
    }
    async function p(e, t, n) {
        var i, a;
        let l, d = !1;
        if (null == n) return m(e, t, r.FilterSettingsGraph.NONE);
        if (n === E.BLUR_BACKGROUND_OPTION) return m(e, t, r.FilterSettingsGraph.BACKGROUND_BLUR);
        if ("string" == typeof n || "number" == typeof n) {
            ;
            let e = (0, _.default)()[n];
            d = null !== (i = e.isVideo) && void 0 !== i && i, l = e.source
        } else {
            let e = n.asset;
            d = (0, o.isAnimatedIconHash)(e) || (0, o.isVideoAssetHash)(e), l = (0, o.getVideoFilterAssetURL)({
                userId: n.user_id,
                assetId: n.id,
                assetHash: e,
                size: E.BACKGROUND_REPLACEMENT_SIZE.width
            })
        }
        if (null != l) try {
            ;
            let n = d ? void 0 : await (a = l, new Promise((e, t) => {
                    let n = new Image;
                    n.crossOrigin = "anonymous", n.onload = () => {
                        let t = document.createElement("canvas");
                        t.width = E.BACKGROUND_REPLACEMENT_SIZE.width, t.height = E.BACKGROUND_REPLACEMENT_SIZE.height;
                        let i = t.getContext("2d");
                        s(null != i, "Canvas context is missing");
                        let r = n.height / n.width,
                            a = E.BACKGROUND_REPLACEMENT_SIZE.height,
                            o = E.BACKGROUND_REPLACEMENT_SIZE.height / r,
                            l = (t.width - o) / 2,
                            u = (t.height - a) / 2;
                        i.drawImage(n, l, u, o, a);
                        let d = i.getImageData(0, 0, t.width, t.height);
                        e({
                            data: d.data,
                            width: d.width,
                            height: d.height,
                            pixelFormat: "rgba"
                        })
                    }, n.onerror = e => t(e), n.src = a
                })),
                i = d ? await g(l) : void 0;
            m(e, t, r.FilterSettingsGraph.BACKGROUND_REPLACEMENT, n, i)
        } catch (e) {
            (0, u.errorApplyingMediaFilterSettings)()
        }
    }
    async function S(e, t) {
        let {
            track: n = !0,
            location: i
        } = t;
        await p(r.FilterSettingsKey.CAMERA_BACKGROUND_LIVE, {
            type: r.FilterTargetType.INPUT_DEVICE
        }, e), n && (0, c.trackBackgroundOptionUpdated)(e, i, "Enabled")
    }
    async function T(e, t, n) {
        let {
            track: i = !0,
            location: s
        } = n;
        (0, u.startApplyMediaFilterSettings)(), await p(r.FilterSettingsKey.CAMERA_BACKGROUND_PREVIEW, {
            type: r.FilterTargetType.STREAM,
            streamId: t
        }, e), i && (0, c.trackBackgroundOptionUpdated)(e, s, "Preview")
    }

    function v() {
        let e = a.default.getCurrentUser();
        if (null == e) return;
        let t = (0, l.getLastUsedVideoBackgroundOption)(e);
        (0, f.default)() && !d.default.hasBeenApplied && null != t && S(t, {
            track: !1
        }).catch(h.NOOP)
    }
}