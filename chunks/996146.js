function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGiftLottie: function() {
            return o
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("709014");
    let s = {
            all: {
                name: "all",
                start: 0,
                duration: 66
            }
        },
        o = () => {
            let e = r.useRef(null),
                t = r.useCallback(() => {
                    null != e.current && e.current.play("all")
                }, []),
                o = r.useCallback(() => {
                    null != e.current && e.current.play("all")
                }, []),
                l = r.useCallback(() => {
                    null != e.current && e.current.stopIfPlaying("all")
                }, []);
            return {
                events: {
                    onMouseEnter: o,
                    onMouseLeave: l
                },
                play: t,
                Component: r.useCallback(t => (0, i.jsx)(a.LottieIcon, {
                    ...t,
                    src: () => n.e("8286").then(n.t.bind(n, "893346", 19)),
                    ref: e,
                    markers: s
                }), [])
            }
        }
}