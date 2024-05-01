function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("149765"),
        r = n("131704"),
        a = n("700785"),
        s = n("231338");

    function o(e) {
        if (null == e) return !1;
        let {
            type: t
        } = e;
        if (null == e.guild_id || !r.GUILD_NON_CATEGORY_CHANNEL_TYPES.has(t)) return !1;
        if (e.isGuildVocal() && !a.canEveryoneRole(s.Permissions.CONNECT, e)) return !0;
        let n = e.permissionOverwrites[e.guild_id];
        return null != n && i.has(n.deny, s.Permissions.VIEW_CHANNEL)
    }
}