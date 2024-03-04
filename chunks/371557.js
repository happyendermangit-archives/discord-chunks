function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ToastContainer: function() {
            return h
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("907002"),
        a = n("446674"),
        o = n("206230"),
        l = n("35672"),
        u = n("325236"),
        d = n("159350"),
        c = n("354149");
    let f = {
            duration: 300,
            friction: 24,
            tension: 280
        },
        _ = {
            [d.ToastPosition.TOP]: {
                styles: c.containerTop,
                transition: {
                    trail: 400,
                    from: {
                        transform: "translate3d(0, -100%, 0)",
                        opacity: 0,
                        config: f
                    },
                    enter: {
                        transform: "translate3d(0, -0px, 0)",
                        opacity: 1,
                        config: f
                    },
                    leave: {
                        transform: "translate3d(0, -100%, 0)",
                        opacity: 0,
                        config: {
                            ...f,
                            friction: 40,
                            clamp: !0
                        }
                    }
                }
            },
            [d.ToastPosition.BOTTOM]: {
                styles: c.containerBottom,
                transition: {
                    trail: 400,
                    from: {
                        transform: "translate3d(0, 100%, 0)",
                        opacity: 0,
                        config: f
                    },
                    enter: {
                        transform: "translate3d(0, 0px, 0)",
                        opacity: 1,
                        config: f
                    },
                    leave: {
                        transform: "translate3d(0, 100%, 0)",
                        opacity: 0,
                        config: {
                            ...f,
                            friction: 40,
                            clamp: !0
                        }
                    }
                }
            }
        };

    function h() {
        var e, t, n, c;
        let f = (0, u.useToastStore)(e => e.currentToast),
            h = s.useRef(null !== (n = null == f ? void 0 : null === (e = f.options) || void 0 === e ? void 0 : e.position) && void 0 !== n ? n : d.TOAST_DEFAULT_OPTIONS.position),
            E = s.useRef(null !== (c = null == f ? void 0 : null === (t = f.options) || void 0 === t ? void 0 : t.duration) && void 0 !== c ? c : d.TOAST_DEFAULT_OPTIONS.duration),
            g = (0, a.useStateFromStores)([o.default], () => o.default.useReducedMotion);
        s.useEffect(() => {
            if (null != f) {
                var e, t, n, i;
                h.current = null !== (n = null === (e = f.options) || void 0 === e ? void 0 : e.position) && void 0 !== n ? n : d.TOAST_DEFAULT_OPTIONS.position, E.current = null !== (i = null === (t = f.options) || void 0 === t ? void 0 : t.duration) && void 0 !== i ? i : d.TOAST_DEFAULT_OPTIONS.duration
            }
        }, [f]);
        let m = s.useMemo(() => {
                var e, t;
                return _[null !== (t = null == f ? void 0 : null === (e = f.options) || void 0 === e ? void 0 : e.position) && void 0 !== t ? t : h.current]
            }, [f]),
            p = (0, r.useTransition)(f, {
                keys: e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : ""
                },
                immediate: g,
                ...m.transition
            });
        return s.useEffect(() => {
            null != f && setTimeout(() => {
                (0, u.popToast)()
            }, E.current)
        }, [f]), (0, i.jsx)("div", {
            className: m.styles,
            children: p((e, t) => null === t ? null : (0, i.jsx)(r.animated.div, {
                style: e,
                children: (0, i.jsx)(l.Toast, {
                    ...t
                })
            }, t.id))
        })
    }
}