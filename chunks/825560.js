function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("898511"),
        i = n("412471"),
        a = n("244801");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function s(e, t) {
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
                if ("string" == typeof e) return u(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    t.default = function(e) {
        var t = s(r.useState(e), 2),
            n = t[0],
            u = t[1],
            l = s(r.useState(i.default.getProfileEffectById(e)), 2),
            c = l[0],
            f = l[1];
        (0, a.useProfileEffectPreset)(e);
        var d = (0, o.useStateFromStores)([i.default], function() {
                return i.default.profileEffects
            }),
            _ = d.reduce(function(t, n, r) {
                return n.id === e && (t = r), t
            }, 0),
            E = s(r.useState(_), 2)[1],
            p = r.useRef(_);
        return r.useEffect(function() {
            u(e), f(i.default.getProfileEffectById(e))
        }, [e, d]), {
            increment: function() {
                var e = (p.current + 1) % d.length;
                p.current = e, E(e), u(d[e].id), f(d[e])
            },
            decrement: function() {
                var e = 0 === p.current ? d.length - 1 : p.current - 1;
                p.current = e, E(e), u(d[e].id), f(d[e])
            },
            id: n,
            preset: c
        }
    }
}