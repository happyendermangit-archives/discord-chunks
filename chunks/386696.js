function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canToggleCommunicationDisableOnUser: function() {
            return u
        },
        default: function() {
            return d
        }
    }), n("47120");
    var i = n("442837"),
        r = n("430824"),
        a = n("496675"),
        s = n("594174"),
        o = n("700785"),
        l = n("981631");

    function u(e, t) {
        let [n, i, u] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default, r.default, a.default], d = i.getGuild(e), _ = n.getUser(t);
        return !(null == d || null == _ || _.isNonUserBot() || d.isOwner(_) || o.can({
            permission: l.Permissions.ADMINISTRATOR,
            user: _,
            context: d
        })) && u.canManageUser(l.Permissions.MODERATE_MEMBERS, _, d)
    }

    function d(e, t) {
        return (0, i.useStateFromStores)([s.default, r.default, a.default], () => u(e, t, [s.default, r.default, a.default]), [e, t])
    }
}