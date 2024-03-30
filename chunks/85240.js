function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("845265"),
        u = n("299529"),
        s = n("861272"),
        l = n("669256"),
        c = n("970952");

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        var t, n, o, _, E, p = e.section,
            m = e.isSelected,
            y = e.width,
            I = e.height,
            h = e.className,
            O = e.selectable,
            T = void 0 !== O && O,
            S = e.onFocus,
            v = e.onBlur,
            g = e.onMouseOver,
            A = e.onMouseLeave,
            b = function(e, t) {
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
            }(e, ["section", "isSelected", "width", "height", "className", "selectable", "onFocus", "onBlur", "onMouseOver", "onMouseLeave"]);
        var N = (t = r.useState(!1), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            R = N[0],
            C = N[1],
            P = r.useCallback(function() {
                C(!0), null == S || S()
            }, [S]),
            D = r.useCallback(function() {
                C(!1), null == v || v()
            }, [v]),
            L = r.useCallback(function() {
                C(!0), null == g || g()
            }, [g]),
            M = r.useCallback(function() {
                C(!1), null == A || A()
            }, [A]),
            U = r.useMemo(function() {
                if (p.type === s.ApplicationCommandSectionType.APPLICATION) {
                    var e;
                    return u.default.getApplicationIconURL({
                        id: p.id,
                        icon: p.icon,
                        bot: null === (e = p.application) || void 0 === e ? void 0 : e.bot,
                        botIconFirst: !0,
                        size: y
                    })
                }
                return c
            }, [p, y]);
        return r.createElement("div", (o = function(e) {
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
        }({}, b), _ = (_ = {
            className: i()(l.wrapper, h, (d(E = {}, l.selectable, T), d(E, l.selected, T && m), E)),
            onFocus: P,
            onBlur: D,
            onMouseOver: L,
            onMouseLeave: M
        }, _), Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(_)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(_)).forEach(function(e) {
            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(_, e))
        }), o), r.createElement(a.default, {
            className: l.mask,
            mask: T && (m || R) ? a.MaskIDs.SQUIRCLE : a.MaskIDs.AVATAR_DEFAULT,
            width: y,
            height: I
        }, r.createElement("img", {
            alt: "",
            className: l.icon,
            style: {
                width: y,
                height: I
            },
            src: U
        })))
    }
}