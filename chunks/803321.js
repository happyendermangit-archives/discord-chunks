function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("870331"),
        a = n("822853"),
        u = n("210320"),
        s = n("42969"),
        l = n("281767");
    (r = o || (o = {})).MESSAGE = "Discord Message Link", r.CHANNEL = "Discord Channel Link", r.SERVER_INVITE = "Discord Server Invite", r.GIFT = "Discord Gift Link", r.UNKNOWN = "Unknown";
    var c = [function(e) {
        return u.default.isInvite(e) ? "Discord Server Invite" : null
    }, function(e) {
        var t = a.default.safeParseWithQuery(e);
        if (null == t) return null;
        var n = (0, s.tryParseChannelPath)(t.path);
        return null == n ? null : f({
            guildId: n.guildId,
            channelId: n.channelId,
            messageId: n.messageId
        })
    }];

    function f(e) {
        return null != e.guildId && null != e.channelId && null != e.messageId ? "Discord Message Link" : null != e.guildId && null != e.channelId ? "Discord Channel Link" : "Unknown"
    }
    t.default = {
        trackDiscordLinkClicked: function(e) {
            i.default.track(l.AnalyticEvents.LINK_CLICKED, {
                is_discord_link: !0,
                discord_link_type: f(e)
            })
        },
        trackLinkClicked: function(e, t) {
            if (null != e || null != t) {
                var n, r, o = a.default.isDiscordUrl(e, !0) || null != t;
                i.default.track(l.AnalyticEvents.LINK_CLICKED, {
                    is_discord_link: o,
                    discord_link_type: o ? (n = e, null == (r = t) && null == n ? "Unknown" : null == r ? function(e) {
                        var t = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var o, i = c[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                                var a = (0, o.value)(e);
                                if (null != a) return a
                            }
                        } catch (e) {
                            n = !0, r = e
                        } finally {
                            try {
                                !t && null != i.return && i.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                        return "Unknown"
                    }(n) : f(r)) : null
                })
            }
        },
        trackAnnouncementMessageLinkClicked: function(e) {
            var t = e.messageId,
                n = e.channelId,
                r = e.guildId,
                o = e.sourceChannelId,
                a = e.sourceGuildId;
            i.default.track(l.AnalyticEvents.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, {
                message_id: t,
                channel_id: n,
                guild_id: r,
                source_channel_id: o,
                source_guild_id: a
            })
        }
    }
}