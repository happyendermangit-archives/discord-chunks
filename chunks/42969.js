function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CHANNEL_OR_MESSAGES_URL_RE: function() {
            return E
        },
        MEDIA_POST_URL_RE: function() {
            return p
        },
        canViewChannel: function() {
            return I
        },
        isAccessibleChannelPath: function() {
            return h
        },
        tryParseChannelPath: function() {
            return m
        },
        tryParseEventDetailsPath: function() {
            return y
        }
    });
    var r = n("935741"),
        o = n("306912"),
        i = n("29884"),
        a = n("949011"),
        u = n("281767"),
        s = Array.from(n("928204").StaticChannelRoutes).map(function(e) {
            return a.default.escape(e)
        }).join("|"),
        l = new RegExp("^/channels/(\\d+|".concat(u.ME, ")(?:/)?(\\d+|").concat(s, ")?")),
        c = new RegExp("^/channels/(\\d+|".concat(u.ME, ")(?:/)(\\d+|").concat(s, ")(?:/)(\\d+)")),
        f = RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
        d = RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
        _ = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
        E = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(u.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
        p = RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

    function m(e) {
        if (null == e) return null;
        var t, n = e.match(c);
        if (null != n && n.length > 3) return {
            guildId: n[1],
            channelId: n[2],
            messageId: n[3]
        };
        var r = e.match(f);
        if (null != r && r.length > 4) return {
            guildId: r[1],
            channelId: r[2],
            threadId: r[3],
            messageId: r[4]
        };
        var o = e.match(l);
        if (null != o && o.length > 1) return {
            guildId: o[1],
            channelId: null !== (t = o[2]) && void 0 !== t ? t : void 0
        };
        var i = e.match(d);
        return null != i && i.length > 1 ? {
            guildId: i[1]
        } : null
    }

    function y(e) {
        if (null == e) return null;
        var t = e.match(_);
        return null != t && t.length > 1 ? {
            guildId: t[1],
            guildEventId: t[2],
            recurrenceId: t[3]
        } : null
    }

    function I(e) {
        return !!e.isPrivate() || i.default.can(u.Permissions.VIEW_CHANNEL, e)
    }

    function h(e) {
        var t = e.guildId,
            n = e.channelId;
        if (null == o.default.getGuild(t) && t !== u.ME) return !1;
        if (null == n) return !0;
        var i = r.default.getChannel(n);
        return null != i && I(i)
    }
}