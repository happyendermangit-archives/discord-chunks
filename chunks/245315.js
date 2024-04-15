function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPublicSystemMessageAvatar: function() {
            return d
        },
        isPublicSystemMessage: function() {
            return u
        },
        trackEnableCommunityFlow: function() {
            return _
        }
    });
    var i = n("367907"),
        r = n("368859"),
        s = n("626135"),
        a = n("135899"),
        o = n("981631"),
        l = n("943702");

    function u(e) {
        return (0, r.default)(e) && e.messageReference.guild_id === a.PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID || null != e.author && e.author.id === a.PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID
    }

    function d() {
        return l
    }
    let _ = e => {
        s.default.track(o.AnalyticEvents.USER_FLOW_TRANSITION, {
            flow_type: a.ENABLE_COMMUNITY_FLOW_MODAL_KEY,
            from_step: e.fromStep,
            to_step: e.toStep,
            ...(0, i.collectGuildAnalyticsMetadata)(e.guildId)
        })
    }
}