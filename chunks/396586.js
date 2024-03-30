function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnalyticsLocationProvider: function() {
            return d
        },
        default: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("348327"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a);

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function l(e) {
        return function(e) {
            if (Array.isArray(e)) return s(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || c(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function c(e, t) {
        if (e) {
            if ("string" == typeof e) return s(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
        }
    }
    var f = r.createContext([]);

    function d(e) {
        var t = e.children,
            n = e.value;
        return r.createElement(f.Provider, {
            value: n
        }, t)
    }

    function _(e, t) {
        if (0 === t.length) return e;
        var n = u().flatten(t);
        return l(e).concat(l(n))
    }

    function E() {
        for (var e, t, n, o = arguments.length, a = Array(o), u = 0; u < o; u++) a[u] = arguments[u];
        var s = (e = r.useState(a), t = 2, function(e) {
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
            }(e, t) || c(e, t) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            l = s[0],
            d = s[1],
            E = r.useContext(f),
            p = r.useMemo(function() {
                return _(E, l)
            }, [l, E]),
            m = r.useMemo(function() {
                return _(E, l.slice(0, l.length - 1))
            }, [l, E]);
        return r.useEffect(function() {
            !i()(a, l) && d(a)
        }, [a]), {
            analyticsLocations: p,
            sourceAnalyticsLocations: m,
            newestAnalyticsLocation: null !== (n = p[p.length - 1]) && void 0 !== n ? n : null
        }
    }
}