function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("470079");

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function i(e, t) {
        var n = e.getBoundingClientRect();
        return Math.min(1, Math.max(0, (t.clientX - n.left) / n.width))
    }

    function a(e) {
        var t, n, a = e.ref,
            u = e.onDrag,
            s = e.onDragStart,
            l = e.onDragEnd;
        var c = (t = r.useState(!1), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            f = c[0],
            d = c[1];
        return r.useEffect(function() {
            var e = function() {
                    null == l || l(), d(!1)
                },
                t = function(e) {
                    var t = a.current;
                    null != t && (null == u || u(i(t, e)))
                };
            if (f) return window.addEventListener("mouseup", e), window.addEventListener("mousemove", t),
                function() {
                    window.removeEventListener("mouseup", e), window.removeEventListener("mousemove", t)
                }
        }, [a, f, l, u]), [f, r.useCallback(function(e) {
            e.preventDefault();
            var t = a.current;
            null != t && (d(!0), null == s || s(), null == u || u(i(t, e)))
        }, [a, s, u])]
    }
}