function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hasPendingMemberAction: function() {
            return c
        }
    }), n("789020");
    var i = n("592125"),
        r = n("271383"),
        s = n("430824"),
        a = n("630388"),
        o = n("563534"),
        l = n("846121"),
        u = n("199689"),
        d = n("981631"),
        _ = n("372897");

    function c(e, t) {
        var n, c;
        let E = s.default.getGuild(e),
            I = i.default.getChannel(t);
        return null != E && null != I && (0, u.default)(E) && E.hasFeature(d.GuildFeatures.GUILD_SERVER_GUIDE) && !a.hasFlag(null !== (c = null === (n = r.default.getSelfMember(E.id)) || void 0 === n ? void 0 : n.flags) && void 0 !== c ? c : 0, _.GuildMemberFlags.COMPLETED_HOME_ACTIONS) && o.default.hasMemberAction(E.id, I.id) && !l.default.hasCompletedActionForChannel(E.id, I.id)
    }
}