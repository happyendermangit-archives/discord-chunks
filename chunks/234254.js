function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCollector: function() {
            return c
        }
    }), n("70102"), n("222007"), n("424973");
    var r = n("598419"),
        i = n.n(r),
        o = n("884691"),
        s = n("634115");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e, t, n) {
        var r, c, u = (c = 2, function(e) {
                if (Array.isArray(e)) return e
            }(r = (0, o.useState)(function() {
                return t(e)
            })) || function(e, t) {
                var n, r, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != i) {
                    var o = [],
                        s = !0,
                        a = !1;
                    try {
                        for (i = i.call(e); !(s = (n = i.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
                    } catch (e) {
                        a = !0, r = e
                    } finally {
                        try {
                            !s && null != i.return && i.return()
                        } finally {
                            if (a) throw r
                        }
                    }
                    return o
                }
            }(r, c) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }
            }(r, c) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            d = u[0],
            l = u[1],
            f = (0, o.useCallback)(function() {
                var r = t(e);
                !i(d, r) && (l(r), n && n())
            }, [d, e, n]);
        return (0, s.useIsomorphicLayoutEffect)(f), [d, f]
    }
}