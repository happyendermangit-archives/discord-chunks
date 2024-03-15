function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("677935"),
        a = n.n(r),
        o = n("793722"),
        l = n("441822");

    function u(e) {
        let {
            streamId: t,
            paused: n,
            onReady: r,
            onResize: u,
            className: d,
            ...c
        } = e, f = s.useRef(null), _ = s.useRef({
            width: 0,
            height: 0
        });
        s.useLayoutEffect(() => {
            let e = f.current;
            if (null != e) return (0, o.registerActiveSink)(t), e.srcObject = (0, l.getVideoStream)(t), () => {
                (0, o.unregisterActiveSink)(t), e.srcObject = null, e.load()
            }
        }, [t]), s.useEffect(() => {
            var e, i;
            return n ? (null === (e = f.current) || void 0 === e || e.pause(), (0, o.unregisterActiveSink)(t)) : null === (i = f.current) || void 0 === i || i.play().catch(() => {}), () => {
                n && (0, o.registerActiveSink)(t)
            }
        }, [n]);
        let E = s.useCallback(() => {
            var e, t, n, i;
            let {
                width: s,
                height: r
            } = _.current, a = null !== (n = null === (e = f.current) || void 0 === e ? void 0 : e.videoWidth) && void 0 !== n ? n : 0, o = null !== (i = null === (t = f.current) || void 0 === t ? void 0 : t.videoHeight) && void 0 !== i ? i : 0;
            if (s !== a || r !== o) {
                let e = {
                    width: a,
                    height: o
                };
                null == u || u(e), _.current = e
            }
        }, [u]);
        s.useLayoutEffect(() => {
            let e = f.current;
            if (null != e) return e.addEventListener("resize", E), () => e.removeEventListener("resize", E)
        }, [E]);
        let h = s.useCallback(() => {
                null == r || r()
            }, [r]),
            g = s.useCallback(e => {
                !n && e.currentTarget.play()
            }, [n]);
        return (0, i.jsx)("video", {
            className: a("media-engine-video", d),
            ref: f,
            autoPlay: !0,
            onPause: g,
            onCanPlayThrough: h,
            muted: !0,
            ...c
        })
    }
    u.defaultProps = {
        paused: !1
    }
}