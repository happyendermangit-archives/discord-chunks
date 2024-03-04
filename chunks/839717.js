function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PreviewPortalContext: function() {
            return u
        },
        DndProvider: function() {
            return d
        }
    }), n("70102"), n("222007"), n("424973");
    var r = n("884691"),
        i = n.n(r),
        o = n("476042"),
        s = n("688911");

    function a() {
        return (a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var u = (0, r.createContext)(null),
        d = function(e) {
            var t, n, d = e.portal,
                l = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = function(e, t) {
                        if (null == e) return {};
                        var n, r, i = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && (i[n] = e[n]);
                        return i
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < o.length; r++) {
                            if (n = o[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
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
                            o = void 0;
                        try {
                            for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !r && null != a.return && a.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return n
                    }
                }(t, n) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return c(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                p = f[0],
                h = f[1];
            return i.createElement(u.Provider, {
                value: null != d ? d : p
            }, i.createElement(o.DndProvider, a({
                backend: s.MultiBackend
            }, l)), d ? null : i.createElement("div", {
                ref: h
            }))
        }
}