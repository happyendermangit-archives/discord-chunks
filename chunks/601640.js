function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCollector: function() {
            return u
        }
    });
    var r = n("595490"),
        i = n.n(r),
        a = n("470079"),
        o = n("175806");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e, t, n) {
        var r, u, c = (u = 2, function(e) {
                if (Array.isArray(e)) return e
            }(r = (0, a.useState)(function() {
                return t(e)
            })) || function(e, t) {
                var n, r, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != i) {
                    var a = [],
                        o = !0,
                        s = !1;
                    try {
                        for (i = i.call(e); !(o = (n = i.next()).done) && (a.push(n.value), !t || a.length !== t); o = !0);
                    } catch (e) {
                        s = !0, r = e
                    } finally {
                        try {
                            !o && null != i.return && i.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                    return a
                }
            }(r, u) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                }
            }(r, u) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            l = c[0],
            d = c[1],
            f = (0, a.useCallback)(function() {
                var r = t(e);
                !i()(l, r) && (d(r), n && n())
            }, [l, e, n]);
        return (0, o.useIsomorphicLayoutEffect)(f), [l, f]
    }
}