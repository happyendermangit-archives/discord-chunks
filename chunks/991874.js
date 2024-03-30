function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canToggleCommunicationDisableOnUser: function() {
            return c
        },
        default: function() {
            return f
        }
    });
    var r = n("898511"),
        o = n("306912"),
        i = n("29884"),
        a = n("208454"),
        u = n("359017"),
        s = n("281767");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e, t) {
        var n, r, c = (n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.default, o.default, i.default], r = 3, function(e) {
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
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }
            }(n, r) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            f = c[0],
            d = c[1],
            _ = c[2],
            E = d.getGuild(e),
            p = f.getUser(t);
        return !(null == E || null == p || p.isNonUserBot() || E.isOwner(p) || u.can({
            permission: s.Permissions.ADMINISTRATOR,
            user: p,
            context: E
        })) && _.canManageUser(s.Permissions.MODERATE_MEMBERS, p, E)
    }

    function f(e, t) {
        return (0, r.useStateFromStores)([a.default, o.default, i.default], function() {
            return c(e, t, [a.default, o.default, i.default])
        }, [e, t])
    }
}