function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("22287"),
        o = n("569492"),
        i = n("359017"),
        a = n("563090");

    function u(e) {
        if (null == e) return !1;
        var t = e.type;
        if (null == e.guild_id || !o.GUILD_NON_CATEGORY_CHANNEL_TYPES.has(t)) return !1;
        if (e.isGuildVocal() && !i.canEveryoneRole(a.Permissions.CONNECT, e)) return !0;
        var n = e.permissionOverwrites[e.guild_id];
        return null != n && r.has(n.deny, a.Permissions.VIEW_CHANNEL)
    }
}