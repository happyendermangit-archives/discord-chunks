function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("271383"),
        a = n("430824"),
        o = n("246866");

    function l(e) {
        let {
            user: t,
            guildId: n,
            onClose: l
        } = e, u = (0, r.useStateFromStores)([a.default], () => null != n ? a.default.getGuild(n) : null), d = (0, r.useStateFromStores)([s.default], () => null != u ? s.default.getMember(u.id, t.id) : null);
        return null == u || null == d || 0 === d.roles.length ? null : (0, i.jsx)("div", {
            children: (0, i.jsx)(o.default, {
                guild: u,
                user: t,
                userRoles: d.roles,
                onClose: l
            })
        })
    }
}