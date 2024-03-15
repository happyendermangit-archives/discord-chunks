function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGiftLottie: function() {
            return r
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414235");
    let s = {
            all: {
                name: "all",
                start: 0,
                duration: 66
            }
        },
        r = () => {
            let e = l.useRef(null),
                t = l.useCallback(() => {
                    null != e.current && e.current.play("all")
                }, []),
                r = l.useCallback(() => {
                    null != e.current && e.current.play("hover")
                }, []),
                o = l.useCallback(() => {
                    null != e.current && e.current.stopIfPlaying("hover")
                }, []),
                u = l.useCallback(t => (0, i.jsx)(a.LottieIcon, {
                    ...t,
                    src: () => n.el("508846").then(n.t.bind(n, "508846", 19)),
                    ref: e,
                    markers: s
                }), []);
            return {
                events: {
                    onMouseEnter: r,
                    onMouseLeave: o
                },
                play: t,
                Component: u
            }
        }
}