function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        },
        getDisplayProfile: function() {
            return f
        }
    });
    var r = n("898511"),
        o = n("208454"),
        i = n("943959"),
        a = n("297866"),
        u = n("903716");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function l(e, t) {
        return (0, r.useStateFromStores)([o.default, u.default], function() {
            return f(e, t, [o.default, u.default])
        })
    }
    var c = (0, i.cachedFunction)(function(e, t) {
        return new a.default(e, t)
    });

    function f(e, t) {
        var n, r, i = (n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.default, u.default], r = 2, function(e) {
                if (Array.isArray(e)) return e
            }(n) || function(e, t) {
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
            }(n, r) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                }
            }(n, r) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            a = i[0],
            l = i[1],
            f = a.getUser(e),
            d = l.getUserProfile(e),
            _ = l.getGuildMemberProfile(e, t);
        return null == f || null == d ? null : c(d, _)
    }
}