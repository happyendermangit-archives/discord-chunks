function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useScreenshareLottie: function() {
            return l
        }
    });
    var a = n("37983"),
        r = n("884691"),
        s = n("414235");
    let l = e => {
        let t = r.useRef(null),
            l = r.useRef(e),
            i = r.useMemo(() => () => {
                null != t.current && t.current.play(e)
            }, [e]),
            u = r.useCallback(() => {
                if (null == t.current) return;
                let n = "on" === e ? "hover_off" : "hover_on";
                t.current.play(n)
            }, [e]),
            o = r.useCallback(() => {
                if (null == t.current) return;
                let n = "on" === e ? "hover_off" : "hover_on";
                t.current.stopIfPlaying(n)
            }, [e]),
            d = r.useCallback(e => (0, a.jsx)(s.LottieIcon, {
                ...e,
                src: n("81808"),
                ref: t,
                initialAnimation: l.current
            }), []);
        return {
            events: {
                onClick: i,
                onMouseEnter: u,
                onMouseLeave: o
            },
            play: i,
            Component: d
        }
    }
}