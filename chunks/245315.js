function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPublicSystemMessageAvatar: function() {
            return c
        },
        isPublicSystemMessage: function() {
            return u
        },
        trackEnableCommunityFlow: function() {
            return d
        }
    });
    var a = n("367907"),
        i = n("368859"),
        r = n("626135"),
        s = n("135899"),
        l = n("981631"),
        o = n("943702");

    function u(e) {
        return (0, i.default)(e) && e.messageReference.guild_id === s.PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID || null != e.author && e.author.id === s.PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID
    }

    function c() {
        return o
    }
    let d = e => {
        r.default.track(l.AnalyticEvents.USER_FLOW_TRANSITION, {
            flow_type: s.ENABLE_COMMUNITY_FLOW_MODAL_KEY,
            from_step: e.fromStep,
            to_step: e.toStep,
            ...(0, a.collectGuildAnalyticsMetadata)(e.guildId)
        })
    }
}