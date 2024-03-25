function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGifLottie: function() {
            return r
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414235");
    let s = {
            click: {
                name: "click",
                start: 0,
                duration: 66
            },
            hover: {
                name: "hover",
                start: 90,
                duration: 40
            }
        },
        r = () => {
            let e = l.useRef(null),
                t = l.useCallback(() => {
                    null != e.current && e.current.play("click")
                }, []),
                r = l.useCallback(() => {
                    null != e.current && e.current.play("hover")
                }, []),
                o = l.useCallback(() => {
                    null != e.current && e.current.stopIfPlaying("hover")
                }, []),
                u = l.useCallback(t => (0, i.jsx)(a.LottieIcon, {
                    ...t,
                    src: () => n.el("431452").then(n.t.bind(n, "431452", 19)),
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