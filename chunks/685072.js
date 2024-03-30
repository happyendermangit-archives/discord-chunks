function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useEndCallLottie: function() {
            return o
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("709014");
    let a = {
            all: {
                name: "all",
                start: 0,
                duration: 90
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
                Component: r.useCallback(t => (0, i.jsx)(s.LottieIcon, {
                    ...t,
                    src: () => n.e("52680").then(n.t.bind(n, "728913", 19)),
                    ref: e,
                    markers: a
                }), [])
            }
        }
}