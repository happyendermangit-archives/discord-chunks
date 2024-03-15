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
    let i = {
            on: {
                name: "on",
                start: 0,
                duration: 70
            },
            off: {
                name: "off",
                start: 90,
                duration: 70
            },
            hover_on: {
                name: "hover_on",
                start: 180,
                duration: 40
            },
            hover_off: {
                name: "hover_off",
                start: 240,
                duration: 40
            }
        },
        l = e => {
            let t = r.useRef(null),
                l = r.useRef(e),
                u = r.useMemo(() => () => {
                    null != t.current && t.current.play(e)
                }, [e]),
                o = r.useCallback(() => {
                    if (null == t.current) return;
                    let n = "on" === e ? "hover_off" : "hover_on";
                    t.current.play(n)
                }, [e]),
                d = r.useCallback(() => {
                    if (null == t.current) return;
                    let n = "on" === e ? "hover_off" : "hover_on";
                    t.current.stopIfPlaying(n)
                }, [e]),
                c = r.useCallback(e => (0, a.jsx)(s.LottieIcon, {
                    ...e,
                    src: () => n.el("787188").then(n.t.bind(n, "787188", 19)),
                    ref: t,
                    initialAnimation: l.current,
                    markers: i
                }), []);
            return {
                events: {
                    onClick: u,
                    onMouseEnter: o,
                    onMouseLeave: d
                },
                play: u,
                Component: c
            }
        }
}