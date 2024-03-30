function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NotificationTypes: function() {
            return o
        }
    });
    var r, o, i = n("470079"),
        a = n("803997"),
        u = n.n(a),
        s = n("718017"),
        l = n("784184"),
        c = n("756800"),
        f = n("647810"),
        d = n("845265"),
        _ = n("116241");

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(r = o || (o = {}))[r.UPDATE = 0] = "UPDATE", r[r.NEW = 1] = "NEW";
    var p = {
        config: {
            friction: 26,
            tension: 700,
            mass: 1
        },
        initial: {
            scale: 1,
            opacity: 1
        },
        from: {
            scale: .6,
            opacity: 0
        },
        enter: {
            scale: 1,
            opacity: 1
        },
        leave: {
            scale: .6,
            opacity: 0
        }
    };
    t.default = i.memo(function(e) {
        var t, n, r = e.className,
            o = e.disabled,
            a = e.innerClassName,
            m = e.childClassName,
            y = e.iconClassName,
            I = e.icon,
            h = e.children,
            O = e.onClick,
            T = e.isActive,
            S = e.onMouseEnter,
            v = e.onMouseLeave,
            g = e.onFocus,
            A = e.onBlur,
            b = e.pulse,
            N = e.sparkle,
            R = e.notification,
            C = e["aria-label"],
            P = e["aria-expanded"],
            D = e["aria-haspopup"],
            L = e["aria-controls"];
        var M = (0, s.useTransition)(null != h, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        E(e, t, n[t])
                    })
                }
                return e
            }({}, p), n = (n = {
                keys: function(e) {
                    return e ? "children" : "icon"
                }
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t)),
            U = function(e) {
                var t = e.component;
                return null != R ? i.createElement("div", {
                    className: _.buttonContent
                }, i.createElement(d.default, {
                    className: _.iconMask,
                    mask: d.MaskIDs.CHAT_INPUT_BUTTON_NOTIFICATION,
                    width: 24,
                    height: 24
                }, t), i.createElement("span", {
                    className: _.notificationDot
                })) : t
            };
        return i.createElement(l.Button, {
            look: l.Button.Looks.BLANK,
            size: l.Button.Sizes.NONE,
            "aria-label": C,
            "aria-expanded": P,
            "aria-haspopup": D,
            "aria-controls": L,
            disabled: void 0 !== o && o,
            className: u()(r, E({}, _.active, T)),
            innerClassName: u()(_.button, a, E({}, _.pulseButton, b)),
            onClick: O,
            onMouseEnter: S,
            onMouseLeave: v,
            onFocus: g,
            onBlur: A,
            focusProps: {
                offset: {
                    top: 4,
                    bottom: 4
                }
            }
        }, M(function(e, t, n) {
            var r = n.key;
            return t ? i.createElement(s.animated.div, {
                style: e,
                className: u()(_.buttonWrapper, m),
                key: r
            }, U({
                component: h
            })) : null != I ? i.createElement(s.animated.div, {
                style: e,
                className: u()(_.buttonWrapper, m),
                key: r
            }, U({
                component: i.createElement(I, {
                    className: u()(_.icon, y, E({}, _.pulseIcon, b))
                })
            })) : void 0
        }), N && i.createElement("div", {
            className: _.sparkleContainer
        }, i.createElement(f.default, {
            className: _.sparkleStar
        }), i.createElement(c.default, {
            className: _.sparklePlus
        })))
    })
}