function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isPublicSystemMessage: function() {
            return u
        },
        getPublicSystemMessageAvatar: function() {
            return c
        },
        trackEnableCommunityFlow: function() {
            return d
        }
    });
    var a = n("716241"),
        s = n("25116"),
        r = n("599110"),
        i = n("69741"),
        l = n("49111"),
        o = n("929887");

    function u(e) {
        return (0, s.default)(e) && e.messageReference.guild_id === i.PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID || null != e.author && e.author.id === i.PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID
    }

    function c() {
        return o
    }
    let d = e => {
        r.default.track(l.AnalyticEvents.USER_FLOW_TRANSITION, {
            flow_type: i.ENABLE_COMMUNITY_FLOW_MODAL_KEY,
            from_step: e.fromStep,
            to_step: e.toStep,
            ...(0, a.collectGuildAnalyticsMetadata)(e.guildId)
        })
    }
}