function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        IdleHandlerContext: function() {
            return a
        },
        IdleStateContext: function() {
            return u
        },
        default: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("945816");

    function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var a = r.createContext({
            onPreventIdle: function() {
                return null
            },
            onAllowIdle: function() {
                return null
            },
            onForceIdle: function() {
                return null
            },
            onActive: function() {
                return null
            }
        }),
        u = r.createContext(!1);

    function s(e) {
        var t, n, s = e.children,
            l = e.timeout;
        var c = (t = r.useState(!1), n = 2, function(e) {
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
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            f = c[0],
            d = c[1],
            _ = r.useRef(new Set),
            E = r.useRef(null);
        r.useEffect(function() {
            return E.current = new o.DelayedCall(l, function() {
                    return d(!0)
                }), E.current.delay(),
                function() {
                    var e;
                    null === (e = E.current) || void 0 === e || e.cancel(), E.current = null
                }
        }, [l]);
        var p = r.useCallback(function(e) {
                var t;
                d(!1), _.current.add(e), null === (t = E.current) || void 0 === t || t.cancel()
            }, [_, E, d]),
            m = r.useCallback(function(e) {
                if (_.current.delete(e), 0 === _.current.size) {
                    var t;
                    null === (t = E.current) || void 0 === t || t.delay()
                }
            }, [_, E]),
            y = r.useCallback(function() {
                if (d(!1), 0 === _.current.size) {
                    var e;
                    null === (e = E.current) || void 0 === e || e.delay()
                }
            }, [_, E, d]),
            I = r.useCallback(function() {
                var e;
                !(_.current.size > 0) && (null === (e = E.current) || void 0 === e || e.cancel(), d(!0))
            }, [E, d]),
            h = r.useMemo(function() {
                return {
                    onAllowIdle: m,
                    onPreventIdle: p,
                    onActive: y,
                    onForceIdle: I
                }
            }, [m, p, y, I]);
        return r.createElement(u.Provider, {
            value: f
        }, r.createElement(a.Provider, {
            value: h
        }, s(function(e) {
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
        }({
            idle: f
        }, h))))
    }
}