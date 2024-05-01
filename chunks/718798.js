function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("665443"),
        s = n.n(a),
        o = n("39383"),
        l = n.n(o),
        u = n("992774"),
        d = n("672784"),
        _ = n("369711"),
        c = n("649754");

    function E(e) {
        let {
            streamId: t,
            paused: n,
            onReady: a,
            onResize: o,
            className: E,
            ...I
        } = e, T = r.useRef(null), {
            current: f
        } = r.useRef(l()("media-engine-video-"));
        return r.useEffect(() => {
            let e = T.current;
            if (!n && null != e) {
                let n = !1,
                    i = (t, i) => {
                        !n && (null == a || a(), n = !0), (e.width !== t || e.height !== i) && (e.width = t, e.height = i, null == o || o({
                            width: t,
                            height: i
                        }))
                    },
                    r = (0, u.getVoiceEngine)();
                if (null != r.addVideoOutputSink) return r.addVideoOutputSink(f, t, i), () => {
                    r.removeVideoOutputSink(f, t)
                };
                {
                    let n = function(e) {
                        var t, n, i, r;
                        let a = null === (r = window) || void 0 === r ? void 0 : null === (i = r.DiscordNative) || void 0 === i ? void 0 : null === (n = i.app) || void 0 === n ? void 0 : null === (t = n.getReleaseChannel) || void 0 === t ? void 0 : t.call(n);
                        return "canary" === a || "development" === a ? (0, _.initRenderingContextWebGL)(e) : (0, d.initRenderingContext2D)(e)
                    }(e);
                    if (null == n) return;
                    return c.default.addSink(t, T, e => {
                        i(e.width, e.height), n.render(e)
                    }), () => {
                        c.default.removeSink(t, T)
                    }
                }
            }
        }, [t, n, o, a, f]), (0, i.jsx)("canvas", {
            id: f,
            className: s()("media-engine-video", E),
            ref: T,
            ...I
        })
    }
    E.defaultProps = {
        paused: !1
    }
}