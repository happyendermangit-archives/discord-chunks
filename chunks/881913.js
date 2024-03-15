function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useVideoLottie: function() {
            return l
        }
    });
    var a = n("37983"),
        r = n("884691"),
        s = n("414235");
    let i = {
            mute: {
                name: "mute",
                start: 0,
                duration: 70
            },
            unmute: {
                name: "unmute",
                start: 100,
                duration: 70
            },
            hover_unmuted: {
                name: "hover_unmuted",
                start: 180,
                duration: 70
            },
            hover_muted: {
                name: "hover_muted",
                start: 280,
                duration: 70
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
                    let n = "mute" === e ? "hover_unmuted" : "hover_muted";
                    t.current.play(n)
                }, [e]),
                d = r.useCallback(() => {
                    if (null == t.current) return;
                    let n = "mute" === e ? "hover_unmuted" : "hover_muted";
                    t.current.stopIfPlaying(n)
                }, [e]),
                c = r.useCallback(e => (0, a.jsx)(s.LottieIcon, {
                    ...e,
                    src: () => n.el("326773").then(n.t.bind(n, "326773", 19)),
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