function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hasPendingMemberAction: function() {
            return f
        }
    }), n("702976");
    var i = n("42203"),
        s = n("26989"),
        r = n("305961"),
        a = n("568734"),
        o = n("698882"),
        l = n("675305"),
        u = n("284683"),
        d = n("49111"),
        c = n("657944");

    function f(e, t) {
        var n, f;
        let _ = r.default.getGuild(e),
            E = i.default.getChannel(t);
        return null != _ && null != E && (0, u.default)(_) && _.hasFeature(d.GuildFeatures.GUILD_SERVER_GUIDE) && !a.hasFlag(null !== (f = null === (n = s.default.getSelfMember(_.id)) || void 0 === n ? void 0 : n.flags) && void 0 !== f ? f : 0, c.GuildMemberFlags.COMPLETED_HOME_ACTIONS) && o.default.hasMemberAction(_.id, E.id) && !l.default.hasCompletedActionForChannel(_.id, E.id)
    }
}