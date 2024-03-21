function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ToastContainer: function() {
            return E
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("146606"),
        a = n("446674"),
        o = n("206230"),
        l = n("35672"),
        u = n("325236"),
        d = n("159350"),
        c = n("354149");
    let _ = {
            duration: 300,
            friction: 24,
            tension: 280
        },
        f = {
            [d.ToastPosition.TOP]: {
                styles: c.containerTop,
                transition: {
                    trail: 400,
                    from: {
                        transform: "translate3d(0, -100%, 0)",
                        opacity: 0,
                        config: _
                    },
                    enter: {
                        transform: "translate3d(0, -0px, 0)",
                        opacity: 1,
                        config: _
                    },
                    leave: {
                        transform: "translate3d(0, -100%, 0)",
                        opacity: 0,
                        config: {
                            ..._,
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
                        config: _
                    },
                    enter: {
                        transform: "translate3d(0, 0px, 0)",
                        opacity: 1,
                        config: _
                    },
                    leave: {
                        transform: "translate3d(0, 100%, 0)",
                        opacity: 0,
                        config: {
                            ..._,
                            friction: 40,
                            clamp: !0
                        }
                    }
                }
            }
        };

    function E() {
        var e, t, n, c;
        let _ = (0, u.useToastStore)(e => e.currentToast),
            E = s.useRef(null !== (n = null == _ ? void 0 : null === (e = _.options) || void 0 === e ? void 0 : e.position) && void 0 !== n ? n : d.TOAST_DEFAULT_OPTIONS.position),
            h = s.useRef(null !== (c = null == _ ? void 0 : null === (t = _.options) || void 0 === t ? void 0 : t.duration) && void 0 !== c ? c : d.TOAST_DEFAULT_OPTIONS.duration),
            g = (0, a.useStateFromStores)([o.default], () => o.default.useReducedMotion);
        s.useEffect(() => {
            if (null != _) {
                var e, t, n, i;
                E.current = null !== (n = null === (e = _.options) || void 0 === e ? void 0 : e.position) && void 0 !== n ? n : d.TOAST_DEFAULT_OPTIONS.position, h.current = null !== (i = null === (t = _.options) || void 0 === t ? void 0 : t.duration) && void 0 !== i ? i : d.TOAST_DEFAULT_OPTIONS.duration
            }
        }, [_]);
        let m = s.useMemo(() => {
                var e, t;
                return f[null !== (t = null == _ ? void 0 : null === (e = _.options) || void 0 === e ? void 0 : e.position) && void 0 !== t ? t : E.current]
            }, [_]),
            p = (0, r.useTransition)(_, {
                keys: e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : ""
                },
                immediate: g,
                ...m.transition
            });
        return s.useEffect(() => {
            null != _ && setTimeout(() => {
                (0, u.popToast)()
            }, h.current)
        }, [_]), (0, i.jsx)("div", {
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