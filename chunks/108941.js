function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useObservePreviews: function() {
            return s
        }
    }), n("70102"), n("222007"), n("424973");
    var r = n("884691"),
        i = n("476042");

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var s = function() {
        var e, t, n = (t = 2, function(e) {
                if (Array.isArray(e)) return e
            }(e = (0, r.useState)(!1)) || function(e, t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && null != a.return && a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                }
            }(e, t) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            s = n[0],
            a = n[1],
            c = (0, r.useContext)(i.DndContext);
        return (0, r.useEffect)(function() {
            var e, t = null == c ? void 0 : null === (e = c.dragDropManager) || void 0 === e ? void 0 : e.getBackend(),
                n = {
                    backendChanged: function(e) {
                        a(e.previewEnabled())
                    }
                };
            return a(t.previewEnabled()), t.previewsList().register(n),
                function() {
                    t.previewsList().unregister(n)
                }
        }, [c, c.dragDropManager]), s
    }
}