function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useHereMentionCallback: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("392711"),
        i = n.n(o),
        a = n("128243"),
        u = n("127926"),
        s = n("197351"),
        l = n("794820");

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var f = "@here";

    function d(e) {
        return !!(e.length > 1) || !(1 === e.length && "GROUP" === e[0].type && "unknown" === e[0].id)
    }

    function _(e, t, n) {
        var o, _, E = (0, s.default)();
        var p = (o = r.useState(!1), _ = 2, function(e) {
                if (Array.isArray(e)) return e
            }(o) || function(e, t) {
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
            }(o, _) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }
            }(o, _) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            m = p[0],
            y = p[1],
            I = r.useMemo(function() {
                return i().debounce(function(e) {
                    var r, o, i, s;
                    if (r = e, o = E, i = t, s = n, d(l.default.getProps(i, s).groups) || !(r.length < f.length) && !(r.length > o) && -1 !== r.indexOf(f) && ((0, a.subscribeChannel)(i, s, u.DEFAULT_RANGES), 1)) y(!0)
                }, 200, {
                    maxWait: 500
                })
            }, [E, t, n]);
        r.useEffect(function() {
            var r = l.default.getProps(t, n).groups;
            if (null != t && !d(r) && !m) return e.addListener("text-changed", I),
                function() {
                    e.removeListener("text-changed", I), I.cancel()
                }
        }, [m, I, e, t, n])
    }
}