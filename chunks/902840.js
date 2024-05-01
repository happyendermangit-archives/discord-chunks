function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canGuildUseConversationSummaries: function() {
            return l
        },
        canSeeChannelSummaries: function() {
            return o
        },
        channelEligibleForSummaries: function() {
            return a
        },
        useChannelSummariesExperiment: function() {
            return u
        }
    }), n("399606");
    var i = n("430824"),
        r = n("981631"),
        s = n("176505");

    function a(e) {
        return o(e, !0, !1)
    }

    function o(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return !(null == e || ! function(e) {
            var t;
            if (null == e) return !1;
            let n = i.default.getGuild(null !== (t = null == e ? void 0 : e.guild_id) && void 0 !== t ? t : ""),
                s = null != n && n.rulesChannelId === e.id;
            return r.ChannelTypesSets.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !s
        }(e) || !1 === t && e.hasFlag(s.ChannelFlags.SUMMARIES_DISABLED)) && l(i.default.getGuild(e.guild_id), n)
    }

    function l(e) {
        var t;
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (null == e) return !1;
        return !!((null == (t = e.id) || t !== r.ME && t !== r.FAVORITES) && e.hasFeature(r.GuildFeatures.SUMMARIES_ENABLED_GA)) && (!n || e.hasFeature(r.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
    }

    function u(e) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return o(e, t)
    }
}