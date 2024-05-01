function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useStickerLottie: function() {
            return o
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("709014");
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
        o = () => {
            let e = r.useRef(null),
                t = r.useCallback(() => {
                    null != e.current && e.current.play("click")
                }, []),
                o = r.useCallback(() => {
                    null != e.current && e.current.play("hover")
                }, []),
                l = r.useCallback(() => {
                    null != e.current && e.current.stopIfPlaying("hover")
                }, []);
            return {
                events: {
                    onMouseEnter: o,
                    onMouseLeave: l
                },
                play: t,
                Component: r.useCallback(t => (0, i.jsx)(a.LottieIcon, {
                    ...t,
                    src: () => n.e("36995").then(n.t.bind(n, "737962", 19)),
                    ref: e,
                    markers: s
                }), [])
            }
        }
}