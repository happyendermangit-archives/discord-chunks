function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("813970"),
        i = n("281767");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var s = ["Shift", "Alt", "Meta", "Control"];

    function l(e, t) {
        var n = u(r.useState(0), 2),
            a = n[0],
            l = n[1],
            c = (0, o.useWindowDispatch)();
        r.useEffect(function() {
            var e = function() {
                    return l(function(e) {
                        return e + 1
                    })
                },
                t = function() {
                    return l(function(e) {
                        return Math.max(0, e - 1)
                    })
                };
            return c.subscribe(i.ComponentActions.POPOUT_SHOW, e), c.subscribe(i.ComponentActions.POPOUT_HIDE, t),
                function() {
                    c.unsubscribe(i.ComponentActions.POPOUT_SHOW, e), c.unsubscribe(i.ComponentActions.POPOUT_HIDE, t)
                }
        }, [c]);
        var f = u(r.useState(!1), 2),
            d = f[0],
            _ = f[1];
        return r.useLayoutEffect(function() {
            var n = function(e) {
                    var n, r;
                    if ((!t || a > 0) && d) {
                        _(!1);
                        return
                    }
                    if (!(!d && a > 0 || (n = e, (null != (r = KeyboardEvent) && "undefined" != typeof Symbol && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](n) : n instanceof r) && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || s.indexOf(e.key) >= 0)))) _(function(e) {
                        return !e
                    })
                },
                r = d ? "keyup" : "mousemove";
            return t && e.addEventListener(r, n),
                function() {
                    return null == e ? void 0 : e.removeEventListener(r, n)
                }
        }, [e, d, a, t]), t && 0 === a && d
    }
}