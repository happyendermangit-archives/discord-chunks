function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useVideoLottie: function() {
            return o
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("709014");
    let s = {
            disable: {
                name: "disable",
                start: 0,
                duration: 70
            },
            enable: {
                name: "enable",
                start: 100,
                duration: 70
            },
            hover_enabled: {
                name: "hover_enabled",
                start: 180,
                duration: 70
            },
            hover_disabled: {
                name: "hover_disabled",
                start: 280,
                duration: 70
            }
        },
        o = e => {
            let t = r.useRef(null),
                o = r.useRef(e),
                l = r.useMemo(() => () => {
                    null != t.current && t.current.play(e)
                }, [e]),
                u = r.useCallback(() => {
                    if (null == t.current) return;
                    let n = "enable" === e ? "hover_disabled" : "hover_enabled";
                    t.current.play(n)
                }, [e]),
                d = r.useCallback(() => {
                    if (null == t.current) return;
                    let n = "enable" === e ? "hover_disabled" : "hover_enabled";
                    t.current.stopIfPlaying(n)
                }, [e]);
            return {
                events: {
                    onClick: l,
                    onMouseEnter: u,
                    onMouseLeave: d
                },
                play: l,
                Component: r.useCallback(e => (0, i.jsx)(a.LottieIcon, {
                    ...e,
                    src: () => n.e("8366").then(n.t.bind(n, "553427", 19)),
                    ref: t,
                    initialAnimation: o.current,
                    markers: s
                }), [])
            }
        }
}