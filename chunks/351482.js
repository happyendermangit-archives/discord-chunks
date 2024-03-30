function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        RedesignIconContextProvider: function() {
            return l
        },
        replaceIcon: function() {
            return f
        },
        useRedesignIconContext: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("639018"),
        i = n("794597");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e) {
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
    }
    var s = r.createContext({
        enabled: !1,
        highlight: !1
    });

    function l(e) {
        var t = e.children,
            n = e.overwriteValue,
            a = o.default.useExperiment({
                location: "web redesign icon context"
            }).enabled,
            u = (0, i.default)("highlight_redesigned_icons"),
            l = r.useMemo(function() {
                return {
                    enabled: a,
                    highlight: u
                }
            }, [a, u]);
        return r.createElement(s.Provider, {
            value: null != n ? n : l
        }, t)
    }

    function c() {
        return r.useContext(s)
    }

    function f(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                size: 24
            };
        return function(i) {
            var s = c(),
                l = s.enabled,
                f = s.highlight;
            if (!l) return r.createElement(e, i);
            var d, _, E = u({}, i);
            n = u({
                foreground: "colorClass",
                color: "color"
            }, null != n ? n : {});
            var p = !0,
                m = !1,
                y = void 0;
            try {
                for (var I, h = Object.entries(n)[Symbol.iterator](); !(p = (I = h.next()).done); p = !0) {
                    var O, T, S = (O = I.value, T = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(O) || function(e, t) {
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
                        }(O, T) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return a(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                            }
                        }(O, T) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        v = S[0],
                        g = S[1],
                        A = i[v];
                    if (null == A && "color" === v && (A = f ? "yellow" : "currentColor"), "remove" === g) {
                        delete E[v];
                        continue
                    }
                    E[g] = A
                }
            } catch (e) {
                m = !0, y = e
            } finally {
                try {
                    !p && null != h.return && h.return()
                } finally {
                    if (m) throw y
                }
            }
            return null !== (d = E.width) && void 0 !== d || (E.width = o.size), null !== (_ = E.height) && void 0 !== _ || (E.height = o.size), r.createElement(t, E)
        }
    }
}