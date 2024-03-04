function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var i, s, r = n("599110"),
        a = n("253981"),
        o = n("340454"),
        l = n("361572"),
        u = n("49111");
    (s = i || (i = {})).MESSAGE = "Discord Message Link", s.CHANNEL = "Discord Channel Link", s.SERVER_INVITE = "Discord Server Invite", s.GIFT = "Discord Gift Link", s.UNKNOWN = "Unknown";
    let d = [e => o.default.isInvite(e) ? "Discord Server Invite" : null, e => {
        let t = a.default.safeParseWithQuery(e);
        if (null == t) return null;
        let n = (0, l.tryParseChannelPath)(t.path);
        return null == n ? null : c({
            guildId: n.guildId,
            channelId: n.channelId,
            messageId: n.messageId
        })
    }];

    function c(e) {
        return null != e.guildId && null != e.channelId && null != e.messageId ? "Discord Message Link" : null != e.guildId && null != e.channelId ? "Discord Channel Link" : "Unknown"
    }
    var f = {
        trackDiscordLinkClicked: function(e) {
            r.default.track(u.AnalyticEvents.LINK_CLICKED, {
                is_discord_link: !0,
                discord_link_type: c(e)
            })
        },
        trackLinkClicked: function(e, t) {
            var n, i;
            if (null == e && null == t) return;
            let s = a.default.isDiscordUrl(e, !0) || null != t;
            r.default.track(u.AnalyticEvents.LINK_CLICKED, {
                is_discord_link: s,
                discord_link_type: s ? (n = e, null == (i = t) && null == n ? "Unknown" : null == i ? function(e) {
                    for (let t of d) {
                        let n = t(e);
                        if (null != n) return n
                    }
                    return "Unknown"
                }(n) : c(i)) : null
            })
        },
        trackAnnouncementMessageLinkClicked: function(e) {
            let {
                messageId: t,
                channelId: n,
                guildId: i,
                sourceChannelId: s,
                sourceGuildId: a
            } = e;
            r.default.track(u.AnalyticEvents.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, {
                message_id: t,
                channel_id: n,
                guild_id: i,
                source_channel_id: s,
                source_guild_id: a
            })
        }
    }
}