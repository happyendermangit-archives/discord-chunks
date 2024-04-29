function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useObservePreviews: function() {
            return o
        }
    });
    var r = n("470079"),
        i = n("942389");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var o = function() {
        var e, t, n = (t = 2, function(e) {
                if (Array.isArray(e)) return e
            }(e = (0, r.useState)(!1)) || function(e, t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                    var n = [],
                        r = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            !r && null != s.return && s.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return n
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }
            }(e, t) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            o = n[0],
            s = n[1],
            u = (0, r.useContext)(i.DndContext);
        return (0, r.useEffect)(function() {
            var e, t = null == u ? void 0 : null === (e = u.dragDropManager) || void 0 === e ? void 0 : e.getBackend(),
                n = {
                    backendChanged: function(e) {
                        s(e.previewEnabled())
                    }
                };
            return s(t.previewEnabled()), t.previewsList().register(n),
                function() {
                    t.previewsList().unregister(n)
                }
        }, [u, u.dragDropManager]), o
    }
}