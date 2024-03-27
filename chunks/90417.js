function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMonitorOutput: function() {
            return o
        }
    });
    var r = n("174787"),
        i = n("342482");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function o(e, t, n) {
        var o, s, u = (s = 2, function(e) {
                if (Array.isArray(e)) return e
            }(o = (0, i.useCollector)(e, t, n)) || function(e, t) {
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
            }(o, s) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }
            }(o, s) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            c = u[0],
            l = u[1];
        return (0, r.useIsomorphicLayoutEffect)(function() {
            var t = e.getHandlerId();
            if (null != t) return e.subscribeToStateChange(l, {
                handlerIds: [t]
            })
        }, [e, l]), c
    }
}