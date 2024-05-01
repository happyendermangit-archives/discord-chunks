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
        s = n("496675"),
        a = n("594174"),
        o = n("700785"),
        l = n("981631");

    function u(e, t) {
        let [n, i, u] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.default, r.default, s.default], d = i.getGuild(e), _ = n.getUser(t);
        return !(null == d || null == _ || _.isNonUserBot() || d.isOwner(_) || o.can({
            permission: l.Permissions.ADMINISTRATOR,
            user: _,
            context: d
        })) && u.canManageUser(l.Permissions.MODERATE_MEMBERS, _, d)
    }

    function d(e, t) {
        return (0, i.useStateFromStores)([a.default, r.default, s.default], () => u(e, t, [a.default, r.default, s.default]), [e, t])
    }
}