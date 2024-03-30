function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canAccessMemberSafetyPage: function() {
            return c
        },
        canBulkBanUser: function() {
            return h
        },
        useCanAccessBulkBanningFeature: function() {
            return T
        },
        useCanAccessInviteCodeFeature: function() {
            return f
        },
        useCanAccessMemberSafetyPage: function() {
            return I
        },
        useCanBulkBanUser: function() {
            return S
        }
    }), n("47120");
    var i = n("149765"),
        r = n("442837"),
        s = n("430824"),
        a = n("496675"),
        o = n("594174"),
        l = n("700785"),
        u = n("478743"),
        d = n("981631");
    let _ = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.default, o.default],
                [n, i] = t,
                r = n.getGuild(e);
            return {
                user: i.getCurrentUser(),
                guild: r
            }
        },
        c = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.default, o.default],
                n = _(e, t);
            return null != n && i.hasAny(l.computePermissions({
                user: n.user,
                context: n.guild,
                checkElevated: !1
            }), u.MemberSafetyPagePermissions)
        },
        E = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.default, o.default],
                n = _(e, t);
            return null != n && a.default.can(d.Permissions.MANAGE_GUILD, n.guild) && a.default.can(d.Permissions.BAN_MEMBERS, n.guild)
        };

    function I(e) {
        return (0, r.useStateFromStores)([s.default, o.default], () => c(e, [s.default, o.default]), [e])
    }

    function T(e) {
        let t = I(e),
            n = (0, r.useStateFromStores)([s.default, o.default], () => E(e, [s.default, o.default]), [e]);
        return t && n
    }

    function f(e) {
        return (0, r.useStateFromStores)([s.default, a.default], () => {
            let t = s.default.getGuild(e);
            return null != t && a.default.can(d.Permissions.MANAGE_GUILD, t)
        }, [e])
    }

    function S(e, t, n) {
        return (0, r.useStateFromStores)([a.default, s.default], () => {
            let i = s.default.getGuild(e);
            return null != i && t && a.default.canManageUser(d.Permissions.BAN_MEMBERS, n, i)
        }, [t, e, n])
    }

    function h(e, t, n) {
        let i = s.default.getGuild(e);
        return null != i && t && a.default.canManageUser(d.Permissions.BAN_MEMBERS, n, i)
    }
}