function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useEndCallLottie: function() {
            return l
        }
    });
    var a = n("37983"),
        r = n("884691"),
        s = n("414235");
    let i = {
            all: {
                name: "all",
                start: 0,
                duration: 90
            }
        },
        l = () => {
            let e = r.useRef(null),
                t = r.useCallback(() => {
                    null != e.current && e.current.play("all")
                }, []),
                l = r.useCallback(() => {
                    null != e.current && e.current.play("hover")
                }, []),
                u = r.useCallback(() => {
                    null != e.current && e.current.stopIfPlaying("hover")
                }, []),
                o = r.useCallback(t => (0, a.jsx)(s.LottieIcon, {
                    ...t,
                    src: () => n.el("536759").then(n.t.bind(n, "536759", 19)),
                    ref: e,
                    markers: i
                }), []);
            return {
                events: {
                    onMouseEnter: l,
                    onMouseLeave: u
                },
                play: t,
                Component: o
            }
        }
}