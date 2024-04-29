function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DndProvider: function() {
            return l
        },
        PreviewPortalContext: function() {
            return c
        }
    });
    var r = n("470079"),
        i = n.n(r),
        a = n("942389"),
        o = n("518648");

    function s() {
        return (s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var c = (0, r.createContext)(null),
        l = function(e) {
            var t, n, l = e.portal,
                d = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = function(e, t) {
                        if (null == e) return {};
                        var n, r, i = {},
                            a = Object.keys(e);
                        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && (i[n] = e[n]);
                        return i
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < a.length; r++) {
                            if (n = a[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                        }
                    }
                    return i
                }(e, ["portal"]);
            var f = (n = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(t = (0, r.useState)(null)) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [],
                            r = !0,
                            i = !1,
                            a = void 0;
                        try {
                            for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, a = e
                        } finally {
                            try {
                                !r && null != s.return && s.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return n
                    }
                }(t, n) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return u(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                p = f[0],
                h = f[1];
            return i().createElement(c.Provider, {
                value: null != l ? l : p
            }, i().createElement(a.DndProvider, s({
                backend: o.MultiBackend
            }, d)), l ? null : i().createElement("div", {
                ref: h
            }))
        }
}