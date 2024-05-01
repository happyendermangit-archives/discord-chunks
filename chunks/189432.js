function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openGuildMemberModViewSidebar: function() {
            return u
        }
    });
    var i = n("100527"),
        r = n("6025"),
        a = n("897473"),
        s = n("545408"),
        o = n("189357"),
        l = n("50493");

    function u(e, t, n) {
        var u, d, _;
        let c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
            modViewPanel: l.ModViewPanel.INFO
        };
        if (!(0, o.canAccessGuildMemberModViewWithExperiment)(e)) return Promise.resolve();
        let E = null !== (u = c.modViewPanel) && void 0 !== u ? u : l.ModViewPanel.INFO,
            I = null !== (d = c.sourceLocation) && void 0 !== d ? d : i.default.MEMBER_SAFETY_PAGE;
        return (0, s.trackModViewOpened)(e, t, E, I), r.default.openGuildSidebar({
            guildId: e,
            baseChannelId: n,
            sidebarType: a.GuildSidebarType.GUILD_MEMBER_MOD_VIEW,
            details: {
                type: a.SidebarOpenDetailsType.GUILD_MEMBER_MOD_VIEW,
                userId: t,
                guildId: e,
                ...c,
                modViewPanel: null !== (_ = c.modViewPanel) && void 0 !== _ ? _ : l.ModViewPanel.INFO
            }
        })
    }
}