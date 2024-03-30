function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("913527"),
        i = n.n(o),
        a = n("207561"),
        u = n("388990"),
        s = n("591234");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var c = [
            [2 * u.default.Seconds.MINUTE, u.default.Seconds.SECOND],
            [5 * u.default.Seconds.MINUTE, u.default.Seconds.MINUTE],
            [45 * u.default.Seconds.MINUTE, 2 * u.default.Seconds.MINUTE],
            [21 * u.default.Seconds.HOUR, 5 * u.default.Seconds.MINUTE]
        ],
        f = 2 * u.default.Seconds.HOUR;

    function d(e) {
        var t = (0, a.useForceUpdate)();
        return (r.useEffect(function() {
            if ("R" === e.format) {
                var n = 1e3 * f,
                    r = Math.abs(e.parsed.diff(i()())),
                    o = !0,
                    a = !1,
                    u = void 0;
                try {
                    for (var s, d = c[Symbol.iterator](); !(o = (s = d.next()).done); o = !0) {
                        var _, E, p = (_ = s.value, E = 2, function(e) {
                                if (Array.isArray(e)) return e
                            }(_) || function(e, t) {
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
                            }(_, E) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return l(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                                }
                            }(_, E) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()),
                            m = p[0],
                            y = p[1];
                        if (r < 1e3 * m) {
                            n = 1e3 * y;
                            break
                        }
                    }
                } catch (e) {
                    a = !0, u = e
                } finally {
                    try {
                        !o && null != d.return && d.return()
                    } finally {
                        if (a) throw u
                    }
                }
                var I = setInterval(function() {
                    t()
                }, n);
                return function() {
                    return clearInterval(I)
                }
            }
        }, [t, e.format, e.parsed]), "R" === e.format) ? s.TIMESTAMP_FORMATS.R(e.parsed) : e.formatted
    }
}