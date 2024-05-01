function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, a = n("626135"),
        s = n("591759"),
        o = n("777754"),
        l = n("754688"),
        u = n("981631");
    (r = i || (i = {})).MESSAGE = "Discord Message Link", r.CHANNEL = "Discord Channel Link", r.SERVER_INVITE = "Discord Server Invite", r.GIFT = "Discord Gift Link", r.UNKNOWN = "Unknown";
    let d = [e => o.default.isInvite(e) ? "Discord Server Invite" : null, e => {
        let t = s.default.safeParseWithQuery(e);
        if (null == t) return null;
        let n = (0, l.tryParseChannelPath)(t.path);
        return null == n ? null : _({
            guildId: n.guildId,
            channelId: n.channelId,
            messageId: n.messageId
        })
    }];

    function _(e) {
        return null != e.guildId && null != e.channelId && null != e.messageId ? "Discord Message Link" : null != e.guildId && null != e.channelId ? "Discord Channel Link" : "Unknown"
    }
    t.default = {
        trackDiscordLinkClicked: function(e) {
            a.default.track(u.AnalyticEvents.LINK_CLICKED, {
                is_discord_link: !0,
                discord_link_type: _(e)
            })
        },
        trackLinkClicked: function(e, t) {
            var n, i;
            if (null == e && null == t) return;
            let r = s.default.isDiscordUrl(e, !0) || null != t;
            a.default.track(u.AnalyticEvents.LINK_CLICKED, {
                is_discord_link: r,
                discord_link_type: r ? (n = e, null == (i = t) && null == n ? "Unknown" : null == i ? function(e) {
                    for (let t of d) {
                        let n = t(e);
                        if (null != n) return n
                    }
                    return "Unknown"
                }(n) : _(i)) : null
            })
        },
        trackAnnouncementMessageLinkClicked: function(e) {
            let {
                messageId: t,
                channelId: n,
                guildId: i,
                sourceChannelId: r,
                sourceGuildId: s
            } = e;
            a.default.track(u.AnalyticEvents.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, {
                message_id: t,
                channel_id: n,
                guild_id: i,
                source_channel_id: r,
                source_guild_id: s
            })
        }
    }
}