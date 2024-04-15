function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ToastContainer: function() {
            return I
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("718017"),
        a = n("442837"),
        o = n("607070"),
        l = n("345332"),
        u = n("417153"),
        d = n("561466"),
        _ = n("698970");
    let c = {
            duration: 300,
            friction: 24,
            tension: 280
        },
        E = {
            [d.ToastPosition.TOP]: {
                styles: _.containerTop,
                transition: {
                    trail: 400,
                    from: {
                        transform: "translate3d(0, -100%, 0)",
                        opacity: 0,
                        config: c
                    },
                    enter: {
                        transform: "translate3d(0, -0px, 0)",
                        opacity: 1,
                        config: c
                    },
                    leave: {
                        transform: "translate3d(0, -100%, 0)",
                        opacity: 0,
                        config: {
                            ...c,
                            friction: 40,
                            clamp: !0
                        }
                    }
                }
            },
            [d.ToastPosition.BOTTOM]: {
                styles: _.containerBottom,
                transition: {
                    trail: 400,
                    from: {
                        transform: "translate3d(0, 100%, 0)",
                        opacity: 0,
                        config: c
                    },
                    enter: {
                        transform: "translate3d(0, 0px, 0)",
                        opacity: 1,
                        config: c
                    },
                    leave: {
                        transform: "translate3d(0, 100%, 0)",
                        opacity: 0,
                        config: {
                            ...c,
                            friction: 40,
                            clamp: !0
                        }
                    }
                }
            }
        };

    function I() {
        var e, t, n, _;
        let c = (0, u.useToastStore)(e => e.currentToast),
            I = r.useRef(null !== (n = null == c ? void 0 : null === (e = c.options) || void 0 === e ? void 0 : e.position) && void 0 !== n ? n : d.TOAST_DEFAULT_OPTIONS.position),
            T = r.useRef(null !== (_ = null == c ? void 0 : null === (t = c.options) || void 0 === t ? void 0 : t.duration) && void 0 !== _ ? _ : d.TOAST_DEFAULT_OPTIONS.duration),
            f = (0, a.useStateFromStores)([o.default], () => o.default.useReducedMotion);
        r.useEffect(() => {
            if (null != c) {
                var e, t, n, i;
                I.current = null !== (n = null === (e = c.options) || void 0 === e ? void 0 : e.position) && void 0 !== n ? n : d.TOAST_DEFAULT_OPTIONS.position, T.current = null !== (i = null === (t = c.options) || void 0 === t ? void 0 : t.duration) && void 0 !== i ? i : d.TOAST_DEFAULT_OPTIONS.duration
            }
        }, [c]);
        let S = r.useMemo(() => {
                var e, t;
                return E[null !== (t = null == c ? void 0 : null === (e = c.options) || void 0 === e ? void 0 : e.position) && void 0 !== t ? t : I.current]
            }, [c]),
            h = (0, s.useTransition)(c, {
                keys: e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : ""
                },
                immediate: f,
                ...S.transition
            });
        return r.useEffect(() => {
            null != c && setTimeout(() => {
                (0, u.popToast)()
            }, T.current)
        }, [c]), (0, i.jsx)("div", {
            className: S.styles,
            children: h((e, t) => null === t ? null : (0, i.jsx)(s.animated.div, {
                style: e,
                children: (0, i.jsx)(l.Toast, {
                    ...t
                })
            }, t.id))
        })
    }
}