function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCollector: function() {
            return c
        }
    }), n("70102"), n("222007"), n("424973");
    var r = n("598419"),
        a = n.n(r),
        i = n("884691"),
        o = n("634115");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e, t, n) {
        var r, c, l = (c = 2, function(e) {
                if (Array.isArray(e)) return e
            }(r = (0, i.useState)(function() {
                return t(e)
            })) || function(e, t) {
                var n, r, a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != a) {
                    var i = [],
                        o = !0,
                        s = !1;
                    try {
                        for (a = a.call(e); !(o = (n = a.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
                    } catch (e) {
                        s = !0, r = e
                    } finally {
                        try {
                            !o && null != a.return && a.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                    return i
                }
            }(r, c) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                }
            }(r, c) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            u = l[0],
            d = l[1],
            p = (0, i.useCallback)(function() {
                var r = t(e);
                !a(u, r) && (d(r), n && n())
            }, [u, e, n]);
        return (0, o.useIsomorphicLayoutEffect)(p), [u, p]
    }
}