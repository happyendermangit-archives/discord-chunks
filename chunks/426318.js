function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPublicSystemMessageAvatar: function() {
            return u
        },
        isPublicSystemMessage: function() {
            return c
        },
        trackEnableCommunityFlow: function() {
            return d
        }
    });
    var r = n("140817"),
        a = n("652115"),
        o = n("870331"),
        i = n("784145"),
        l = n("281767"),
        s = n("943702");

    function c(e) {
        return (0, a.default)(e) && e.messageReference.guild_id === i.PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID || null != e.author && e.author.id === i.PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID
    }

    function u() {
        return s
    }
    var d = function(e) {
        o.default.track(l.AnalyticEvents.USER_FLOW_TRANSITION, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r, a, o;
                    r = e, a = t, o = n[t], a in r ? Object.defineProperty(r, a, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[a] = o
                })
            }
            return e
        }({
            flow_type: i.ENABLE_COMMUNITY_FLOW_MODAL_KEY,
            from_step: e.fromStep,
            to_step: e.toStep
        }, (0, r.collectGuildAnalyticsMetadata)(e.guildId)))
    }
}