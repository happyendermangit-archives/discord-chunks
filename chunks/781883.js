function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canAccessMemberSafetyPage: function() {
            return _
        },
        canBulkBanUser: function() {
            return h
        },
        useCanAccessBulkBanningFeature: function() {
            return m
        },
        useCanAccessInviteCodeFeature: function() {
            return y
        },
        useCanAccessMemberSafetyPage: function() {
            return p
        },
        useCanBulkBanUser: function() {
            return I
        }
    });
    var r = n("22287"),
        o = n("898511"),
        i = n("306912"),
        a = n("29884"),
        u = n("208454"),
        s = n("359017"),
        l = n("964115"),
        c = n("281767");

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var d = function(e) {
            var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, u.default];
            var o = (n = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(t = r) || function(e, t) {
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
                        if ("string" == typeof e) return f(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                a = o[0],
                s = o[1],
                l = a.getGuild(e);
            return {
                user: s.getCurrentUser(),
                guild: l
            }
        },
        _ = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, u.default],
                n = d(e, t);
            return null != n && r.hasAny(s.computePermissions({
                user: n.user,
                context: n.guild,
                checkElevated: !1
            }), l.MemberSafetyPagePermissions)
        },
        E = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, u.default],
                n = d(e, t);
            return null != n && a.default.can(c.Permissions.MANAGE_GUILD, n.guild) && a.default.can(c.Permissions.BAN_MEMBERS, n.guild)
        };

    function p(e) {
        return (0, o.useStateFromStores)([i.default, u.default], function() {
            return _(e, [i.default, u.default])
        }, [e])
    }

    function m(e) {
        var t = p(e),
            n = (0, o.useStateFromStores)([i.default, u.default], function() {
                return E(e, [i.default, u.default])
            }, [e]);
        return t && n
    }

    function y(e) {
        return (0, o.useStateFromStores)([i.default, a.default], function() {
            var t = i.default.getGuild(e);
            return null != t && a.default.can(c.Permissions.MANAGE_GUILD, t)
        }, [e])
    }

    function I(e, t, n) {
        return (0, o.useStateFromStores)([a.default, i.default], function() {
            var r = i.default.getGuild(e);
            return null != r && t && a.default.canManageUser(c.Permissions.BAN_MEMBERS, n, r)
        }, [t, e, n])
    }

    function h(e, t, n) {
        var r = i.default.getGuild(e);
        return null != r && t && a.default.canManageUser(c.Permissions.BAN_MEMBERS, n, r)
    }
}