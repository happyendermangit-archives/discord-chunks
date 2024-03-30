function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ToastContainer: function() {
            return y
        }
    });
    var r, o = n("470079"),
        i = n("718017"),
        a = n("898511"),
        u = n("622780"),
        s = n("987888"),
        l = n("663662"),
        c = n("649763"),
        f = n("698970");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                d(e, t, n[t])
            })
        }
        return e
    }

    function E(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }
    var p = {
            duration: 300,
            friction: 24,
            tension: 280
        },
        m = (d(r = {}, c.ToastPosition.TOP, {
            styles: f.containerTop,
            transition: {
                trail: 400,
                from: {
                    transform: "translate3d(0, -100%, 0)",
                    opacity: 0,
                    config: p
                },
                enter: {
                    transform: "translate3d(0, -0px, 0)",
                    opacity: 1,
                    config: p
                },
                leave: {
                    transform: "translate3d(0, -100%, 0)",
                    opacity: 0,
                    config: E(_({}, p), {
                        friction: 40,
                        clamp: !0
                    })
                }
            }
        }), d(r, c.ToastPosition.BOTTOM, {
            styles: f.containerBottom,
            transition: {
                trail: 400,
                from: {
                    transform: "translate3d(0, 100%, 0)",
                    opacity: 0,
                    config: p
                },
                enter: {
                    transform: "translate3d(0, 0px, 0)",
                    opacity: 1,
                    config: p
                },
                leave: {
                    transform: "translate3d(0, 100%, 0)",
                    opacity: 0,
                    config: E(_({}, p), {
                        friction: 40,
                        clamp: !0
                    })
                }
            }
        }), r);

    function y() {
        var e, t, n, r, f = (0, l.useToastStore)(function(e) {
                return e.currentToast
            }),
            d = o.useRef(null !== (n = null == f ? void 0 : null === (e = f.options) || void 0 === e ? void 0 : e.position) && void 0 !== n ? n : c.TOAST_DEFAULT_OPTIONS.position),
            E = o.useRef(null !== (r = null == f ? void 0 : null === (t = f.options) || void 0 === t ? void 0 : t.duration) && void 0 !== r ? r : c.TOAST_DEFAULT_OPTIONS.duration),
            p = (0, a.useStateFromStores)([u.default], function() {
                return u.default.useReducedMotion
            });
        o.useEffect(function() {
            if (null != f) {
                var e, t, n, r;
                d.current = null !== (n = null === (e = f.options) || void 0 === e ? void 0 : e.position) && void 0 !== n ? n : c.TOAST_DEFAULT_OPTIONS.position, E.current = null !== (r = null === (t = f.options) || void 0 === t ? void 0 : t.duration) && void 0 !== r ? r : c.TOAST_DEFAULT_OPTIONS.duration
            }
        }, [f]);
        var y = o.useMemo(function() {
                var e, t;
                return m[null !== (t = null == f ? void 0 : null === (e = f.options) || void 0 === e ? void 0 : e.position) && void 0 !== t ? t : d.current]
            }, [f]),
            I = (0, i.useTransition)(f, _({
                keys: function(e) {
                    var t;
                    return null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : ""
                },
                immediate: p
            }, y.transition));
        return o.useEffect(function() {
            null != f && setTimeout(function() {
                (0, l.popToast)()
            }, E.current)
        }, [f]), o.createElement("div", {
            className: y.styles
        }, I(function(e, t) {
            return null === t ? null : o.createElement(i.animated.div, {
                style: e,
                key: t.id
            }, o.createElement(s.Toast, t))
        }))
    }
}