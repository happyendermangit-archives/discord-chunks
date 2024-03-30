function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canGuildUseConversationSummaries: function() {
            return s
        },
        canSeeChannelSummaries: function() {
            return u
        },
        channelEligibleForSummaries: function() {
            return a
        },
        useChannelSummariesExperiment: function() {
            return l
        }
    }), n("37295");
    var r = n("306912"),
        o = n("281767"),
        i = n("928204");

    function a(e) {
        return u(e, !0, !1)
    }

    function u(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return !(null == e || ! function(e) {
            if (null == e) return !1;
            var t, n = r.default.getGuild(null !== (t = null == e ? void 0 : e.guild_id) && void 0 !== t ? t : ""),
                i = null != n && n.rulesChannelId === e.id;
            return o.ChannelTypesSets.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !i
        }(e) || !1 === t && e.hasFlag(i.ChannelFlags.SUMMARIES_DISABLED)) && s(r.default.getGuild(e.guild_id), n)
    }

    function s(e) {
        var t, n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (null == e) return !1;
        return !!((null == (t = e.id) || t !== o.ME && t !== o.FAVORITES) && e.hasFeature(o.GuildFeatures.SUMMARIES_ENABLED_GA)) && (!n || e.hasFeature(o.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
    }

    function l(e) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return u(e, t)
    }
}