function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDragLayer: function() {
            return a
        }
    }), n("70102"), n("222007"), n("424973");
    var r = n("884691"),
        i = n("119076"),
        o = n("234254");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function a(e) {
        var t, n, a = (0, i.useDragDropManager)().getMonitor();
        var c = (n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t = (0, o.useCollector)(a, e)) || function(e, t) {
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
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            u = c[0],
            d = c[1];
        return (0, r.useEffect)(function() {
            return a.subscribeToOffsetChange(d)
        }), (0, r.useEffect)(function() {
            return a.subscribeToStateChange(d)
        }), u
    }
}