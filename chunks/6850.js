function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CopiableField: function() {
            return I
        }
    });
    var r, o, i = n("470079"),
        a = n("803997"),
        u = n.n(a),
        s = n("945816"),
        l = n("784184"),
        c = n("870331"),
        f = n("53053"),
        d = n("547887"),
        _ = n("281767"),
        E = n("941504"),
        p = n("323607");

    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function y(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return m(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function I(e) {
        var t, n = e.className,
            a = e.copyValue,
            m = e.copyMetaData,
            I = e.copyTooltip,
            h = e.children,
            O = e.disableCopy,
            T = e.showCopyIcon,
            S = y(i.useState(0), 2),
            v = S[0],
            g = S[1],
            A = y(i.useState(!1), 2),
            b = A[0],
            N = A[1],
            R = y(i.useState(!1), 2),
            C = R[0],
            P = R[1];
        if (i.useEffect(function() {
                return r = new s.Timeout, o = new s.Timeout,
                    function() {
                        r.stop(), o.stop()
                    }
            }, []), !f.SUPPORTS_COPY || O) return i.createElement(i.Fragment, null, h);
        var D = [E.default.Messages.COPY_SUCCESS_1, E.default.Messages.COPY_SUCCESS_2, E.default.Messages.COPY_SUCCESS_3, E.default.Messages.COPY_SUCCESS_4, E.default.Messages.COPY_SUCCESS_5, E.default.Messages.COPY_SUCCESS_6, E.default.Messages.COPY_SUCCESS_7, E.default.Messages.COPY_SUCCESS_8, E.default.Messages.COPY_SUCCESS_9, E.default.Messages.COPY_SUCCESS_10, E.default.Messages.COPY_SUCCESS_11],
            L = Math.min(Math.max(v - 1, 0), D.length - 1),
            M = null !== (t = D[L]) && void 0 !== t ? t : D[0],
            U = v >= D.length - 1,
            w = U ? l.TooltipColors.RED : l.TooltipColors.GREEN,
            k = b ? w : l.TooltipColors.PRIMARY,
            G = function() {
                r.stop(), P(!1)
            },
            B = function(e) {
                (0, f.copy)(a), c.default.track(_.AnalyticEvents.TEXT_COPIED, {
                    type: m
                }), "function" == typeof e && e(), !C && g(v + 1), P(!0), N(!0), r.start(1e3, function() {
                    return P(!1)
                }), o.start(2e3, function() {
                    return g(0)
                })
            };
        return i.createElement(l.Tooltip, {
            delay: 500,
            color: k,
            forceOpen: C,
            text: b ? i.createElement(l.Shaker, {
                isShaking: U
            }, M) : I,
            onAnimationRest: function(e, t) {
                !C && b && t.phase === _.SpringTransitionPhases.LEAVE && N(!1)
            },
            "aria-label": I
        }, function(e) {
            var t, r, o = e.onClick,
                a = e.onMouseEnter,
                s = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                        return o
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) {
                            if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                    }
                    return o
                }(e, ["onClick", "onMouseEnter"]);
            return i.createElement(l.Clickable, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })
                }
                return e
            }({}, s), r = (r = {
                className: p.clickTarget,
                onMouseEnter: function() {
                    b ? G() : "function" == typeof a && a()
                },
                onClick: function() {
                    B(o)
                }
            }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }), t), i.createElement("div", {
                className: u()(n, p.copiableWrapper)
            }, i.createElement("div", {
                className: p.childWrapper
            }, h), T ? i.createElement("div", {
                className: p.__invalid_copyIconWrapper
            }, i.createElement(d.default, {
                width: 18,
                height: 18,
                className: p.copyIcon
            })) : null))
        })
    }
}