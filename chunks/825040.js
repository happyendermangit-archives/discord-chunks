function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("665443"),
        a = n.n(s),
        o = n("970838"),
        l = n("376398");

    function u(e) {
        let {
            streamId: t,
            paused: n,
            onReady: s,
            onResize: u,
            className: d,
            ..._
        } = e, c = r.useRef(null), E = r.useRef({
            width: 0,
            height: 0
        });
        r.useLayoutEffect(() => {
            let e = c.current;
            if (null != e) return (0, o.registerActiveSink)(t), e.srcObject = (0, l.getVideoStream)(t), () => {
                (0, o.unregisterActiveSink)(t), e.srcObject = null, e.load()
            }
        }, [t]), r.useEffect(() => {
            var e, i;
            return n ? (null === (e = c.current) || void 0 === e || e.pause(), (0, o.unregisterActiveSink)(t)) : null === (i = c.current) || void 0 === i || i.play().catch(() => {}), () => {
                n && (0, o.registerActiveSink)(t)
            }
        }, [n]);
        let I = r.useCallback(() => {
            var e, t, n, i;
            let {
                width: r,
                height: s
            } = E.current, a = null !== (n = null === (e = c.current) || void 0 === e ? void 0 : e.videoWidth) && void 0 !== n ? n : 0, o = null !== (i = null === (t = c.current) || void 0 === t ? void 0 : t.videoHeight) && void 0 !== i ? i : 0;
            if (r !== a || s !== o) {
                let e = {
                    width: a,
                    height: o
                };
                null == u || u(e), E.current = e
            }
        }, [u]);
        r.useLayoutEffect(() => {
            let e = c.current;
            if (null != e) return e.addEventListener("resize", I), () => e.removeEventListener("resize", I)
        }, [I]);
        let T = r.useCallback(() => {
                null == s || s()
            }, [s]),
            f = r.useCallback(e => {
                !n && e.currentTarget.play()
            }, [n]);
        return (0, i.jsx)("video", {
            className: a()("media-engine-video", d),
            ref: c,
            autoPlay: !0,
            onPause: f,
            onCanPlayThrough: T,
            muted: !0,
            ..._
        })
    }
    u.defaultProps = {
        paused: !1
    }
}