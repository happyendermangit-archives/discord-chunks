function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        channelEligibleForSummaries: function() {
            return s
        },
        canSeeChannelSummaries: function() {
            return r
        },
        canGuildUseConversationSummaries: function() {
            return o
        },
        useChannelSummariesExperiment: function() {
            return u
        }
    }), n("65597");
    var i = n("305961"),
        l = n("49111"),
        a = n("724210");

    function s(e) {
        return r(e, !0, !1)
    }

    function r(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (null == e || ! function(e) {
                var t;
                if (null == e) return !1;
                let n = i.default.getGuild(null !== (t = null == e ? void 0 : e.guild_id) && void 0 !== t ? t : ""),
                    a = null != n && n.rulesChannelId === e.id;
                return l.ChannelTypesSets.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !a
            }(e) || !1 === t && e.hasFlag(a.ChannelFlags.SUMMARIES_DISABLED)) return !1;
        let s = i.default.getGuild(e.guild_id);
        return o(s, n)
    }

    function o(e) {
        var t;
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (null == e) return !1;
        return !!((null == (t = e.id) || t !== l.ME && t !== l.FAVORITES) && e.hasFeature(l.GuildFeatures.SUMMARIES_ENABLED_GA)) && (!n || e.hasFeature(l.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
    }

    function u(e) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return r(e, t)
    }
}