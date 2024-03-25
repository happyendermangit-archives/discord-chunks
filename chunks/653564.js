function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useEndCallLottie: function() {
            return i
        }
    });
    var a = n("37983"),
        r = n("884691"),
        s = n("414235");
    let l = {
            all: {
                name: "all",
                start: 0,
                duration: 90
            }
        },
        i = () => {
            let e = r.useRef(null),
                t = r.useCallback(() => {
                    null != e.current && e.current.play("all")
                }, []),
                i = r.useCallback(() => {
                    null != e.current && e.current.play("all")
                }, []),
                u = r.useCallback(() => {
                    null != e.current && e.current.stopIfPlaying("all")
                }, []),
                o = r.useCallback(t => (0, a.jsx)(s.LottieIcon, {
                    ...t,
                    src: () => n.el("536759").then(n.t.bind(n, "536759", 19)),
                    ref: e,
                    markers: l
                }), []);
            return {
                events: {
                    onMouseEnter: i,
                    onMouseLeave: u
                },
                play: t,
                Component: o
            }
        }
}