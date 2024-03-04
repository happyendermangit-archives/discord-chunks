function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("677935"),
        a = n.n(r),
        o = n("773179"),
        l = n.n(o),
        u = n("784063"),
        d = n("104240"),
        c = n("340346"),
        f = n("625454");

    function _(e) {
        let {
            streamId: t,
            paused: n,
            onReady: r,
            onResize: o,
            className: _,
            ...h
        } = e, E = s.useRef(null), {
            current: g
        } = s.useRef(l.uniqueId("media-engine-video-"));
        return s.useEffect(() => {
            let e = E.current;
            if (!n && null != e) {
                let n = !1,
                    i = (t, i) => {
                        !n && (null == r || r(), n = !0), (e.width !== t || e.height !== i) && (e.width = t, e.height = i, null == o || o({
                            width: t,
                            height: i
                        }))
                    },
                    s = (0, u.getVoiceEngine)();
                if (null != s.addVideoOutputSink) return s.addVideoOutputSink(g, t, i), () => {
                    s.removeVideoOutputSink(g, t)
                };
                {
                    let n = function(e) {
                        var t, n, i, s;
                        let r = null === (s = window) || void 0 === s ? void 0 : null === (i = s.DiscordNative) || void 0 === i ? void 0 : null === (n = i.app) || void 0 === n ? void 0 : null === (t = n.getReleaseChannel) || void 0 === t ? void 0 : t.call(n);
                        return "canary" === r || "development" === r ? (0, c.initRenderingContextWebGL)(e) : (0, d.initRenderingContext2D)(e)
                    }(e);
                    if (null == n) return;
                    return f.default.addSink(t, E, e => {
                        i(e.width, e.height), n.render(e)
                    }), () => {
                        f.default.removeSink(t, E)
                    }
                }
            }
        }, [t, n, o, r, g]), (0, i.jsx)("canvas", {
            id: g,
            className: a("media-engine-video", _),
            ref: E,
            ...h
        })
    }
    _.defaultProps = {
        paused: !1
    }
}