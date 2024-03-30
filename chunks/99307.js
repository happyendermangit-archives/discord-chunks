function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hasPendingMemberAction: function() {
            return d
        }
    });
    var r = n("935741"),
        o = n("957808"),
        i = n("306912"),
        a = n("947248"),
        u = n("163868"),
        s = n("416181"),
        l = n("81571"),
        c = n("281767"),
        f = n("844659");

    function d(e, t) {
        var n, d, _ = i.default.getGuild(e),
            E = r.default.getChannel(t);
        return null != _ && null != E && (0, l.default)(_) && _.hasFeature(c.GuildFeatures.GUILD_SERVER_GUIDE) && !a.hasFlag(null !== (d = null === (n = o.default.getSelfMember(_.id)) || void 0 === n ? void 0 : n.flags) && void 0 !== d ? d : 0, f.GuildMemberFlags.COMPLETED_HOME_ACTIONS) && u.default.hasMemberAction(_.id, E.id) && !s.default.hasCompletedActionForChannel(_.id, E.id)
    }
}