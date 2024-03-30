function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("194926"),
        u = n("784184"),
        s = n("214354"),
        l = n("138164");

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    t.default = function(e) {
        var t, n, o, d, _, E = e.children,
            p = e.className,
            m = e.color,
            y = e.iconType,
            I = e.onMouseEnter,
            h = e.onMouseLeave,
            O = function(e, t) {
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
            }(e, ["children", "className", "color", "iconType", "onMouseEnter", "onMouseLeave"]);
        var T = (t = r.useState(!1), n = 2, function(e) {
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
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            S = T[0],
            v = T[1],
            g = r.useCallback(function(e) {
                v(!0), null == I || I(e)
            }, [v, I]),
            A = r.useCallback(function(e) {
                v(!1), null == h || h(e)
            }, [v, h]),
            b = {};
        return null != m && (b = {
            color: (0, a.int2hex)(m),
            backgroundColor: S ? (0, a.int2rgba)(m, .3) : (0, a.int2rgba)(m, .1)
        }), r.createElement(u.Clickable, (o = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    f(e, t, n[t])
                })
            }
            return e
        }({}, O), d = (d = {
            tag: "span",
            className: i()(p, (f(_ = {}, l.wrapper, !0), f(_, "interactive", O.onClick), _)),
            onMouseEnter: g,
            onMouseLeave: A,
            style: b,
            tabIndex: null != O.onClick ? 0 : -1
        }, d), Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(d)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(d)).forEach(function(e) {
            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(d, e))
        }), o), null != y ? r.createElement(s.default, {
            iconType: y
        }, E) : E)
    }
}