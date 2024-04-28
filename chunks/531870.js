function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useRegisteredDragSource: function() {
            return c
        }
    });
    var r = n("805518"),
        i = n("175806"),
        a = n("497305"),
        o = n("209851"),
        s = n("620964");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e, t, n) {
        var c = (0, o.useDragDropManager)(),
            l = (0, a.useDragSource)(e, t, n),
            d = (0, s.useDragType)(e);
        (0, i.useIsomorphicLayoutEffect)(function() {
            if (null != d) {
                var e, i, a = (i = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(e = (0, r.registerSource)(d, l, c)) || function(e, t) {
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
                    }(e, i) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return u(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                        }
                    }(e, i) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    o = a[0],
                    s = a[1];
                return t.receiveHandlerId(o), n.receiveHandlerId(o), s
            }
        }, [c, t, n, l, d])
    }
}