function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canToggleCommunicationDisableOnUser: function() {
            return u
        },
        default: function() {
            return d
        }
    }), n("222007");
    var i = n("446674"),
        l = n("305961"),
        a = n("957255"),
        o = n("697218"),
        s = n("991170"),
        r = n("49111");

    function u(e, t) {
        let [n, i, u] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.default, l.default, a.default], d = i.getGuild(e), c = n.getUser(t);
        if (null == d || null == c || c.isNonUserBot()) return !1;
        let p = d.isOwner(c) || s.default.can({
            permission: r.Permissions.ADMINISTRATOR,
            user: c,
            context: d
        });
        return !p && u.canManageUser(r.Permissions.MODERATE_MEMBERS, c, d)
    }

    function d(e, t) {
        return (0, i.useStateFromStores)([o.default, l.default, a.default], () => u(e, t, [o.default, l.default, a.default]), [e, t])
    }
}