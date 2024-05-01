function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        applyBackgroundOptionLive: function() {
            return A
        },
        applyBackgroundOptionPreview: function() {
            return m
        },
        applyInitialVideoBackgroundOption: function() {
            return N
        }
    }), n("66153"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817");
    var i = n("512722"),
        r = n.n(i),
        a = n("46973"),
        s = n("594174"),
        o = n("768581"),
        l = n("932724"),
        u = n("716161"),
        d = n("634041"),
        _ = n("647177"),
        c = n("63985"),
        E = n("638457"),
        I = n("678916"),
        T = n("981631");
    async function f(e) {
        let t = await fetch(e),
            n = await t.blob();
        return new Uint8ClampedArray(await n.arrayBuffer())
    }

    function S(e, t, n, i, r) {
        (0, u.applyMediaFilterSettings)({
            [e]: {
                graph: n,
                target: t,
                image: i,
                blob: r
            }
        })
    }
    async function h(e, t, n) {
        var i, s;
        let l, d = !1;
        if (null == n) return S(e, t, a.FilterSettingsGraph.NONE);
        if (n === I.BLUR_BACKGROUND_OPTION) return S(e, t, a.FilterSettingsGraph.BACKGROUND_BLUR);
        if ("string" == typeof n || "number" == typeof n) {
            ;
            let e = (0, c.default)()[n];
            d = null !== (i = e.isVideo) && void 0 !== i && i, l = e.source
        } else {
            let e = n.asset;
            d = (0, o.isAnimatedIconHash)(e) || (0, o.isVideoAssetHash)(e), l = (0, o.getVideoFilterAssetURL)({
                userId: n.user_id,
                assetId: n.id,
                assetHash: e,
                size: I.BACKGROUND_REPLACEMENT_SIZE.width
            })
        }
        if (null != l) try {
            ;
            let n = d ? void 0 : await (s = l, new Promise((e, t) => {
                    let n = new Image;
                    n.crossOrigin = "anonymous", n.onload = () => {
                        let t = document.createElement("canvas");
                        t.width = I.BACKGROUND_REPLACEMENT_SIZE.width, t.height = I.BACKGROUND_REPLACEMENT_SIZE.height;
                        let i = t.getContext("2d");
                        r()(null != i, "Canvas context is missing");
                        let a = n.height / n.width,
                            s = I.BACKGROUND_REPLACEMENT_SIZE.height,
                            o = I.BACKGROUND_REPLACEMENT_SIZE.height / a,
                            l = (t.width - o) / 2,
                            u = (t.height - s) / 2;
                        i.drawImage(n, l, u, o, s);
                        let d = i.getImageData(0, 0, t.width, t.height);
                        e({
                            data: d.data,
                            width: d.width,
                            height: d.height,
                            pixelFormat: "rgba"
                        })
                    }, n.onerror = e => t(e), n.src = s
                })),
                i = d ? await f(l) : void 0;
            S(e, t, a.FilterSettingsGraph.BACKGROUND_REPLACEMENT, n, i)
        } catch (e) {
            (0, u.errorApplyingMediaFilterSettings)()
        }
    }
    async function A(e, t) {
        let {
            track: n = !0,
            location: i
        } = t;
        await h(a.FilterSettingsKey.CAMERA_BACKGROUND_LIVE, {
            type: a.FilterTargetType.INPUT_DEVICE
        }, e), n && (0, _.trackBackgroundOptionUpdated)(e, i, "Enabled")
    }
    async function m(e, t, n) {
        let {
            track: i = !0,
            location: r
        } = n;
        (0, u.startApplyMediaFilterSettings)(), await h(a.FilterSettingsKey.CAMERA_BACKGROUND_PREVIEW, {
            type: a.FilterTargetType.STREAM,
            streamId: t
        }, e), i && (0, _.trackBackgroundOptionUpdated)(e, r, "Preview")
    }

    function N() {
        let e = s.default.getCurrentUser();
        if (null == e) return;
        let t = (0, l.getLastUsedVideoBackgroundOption)(e);
        (0, E.default)() && !d.default.hasBeenApplied && null != t && A(t, {
            track: !1
        }).catch(T.NOOP)
    }
}