function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CHANNEL_OR_MESSAGES_URL_RE: function() {
            return h
        },
        MEDIA_POST_URL_RE: function() {
            return g
        },
        tryParseChannelPath: function() {
            return m
        },
        tryParseEventDetailsPath: function() {
            return p
        },
        canViewChannel: function() {
            return S
        },
        isAccessibleChannelPath: function() {
            return v
        }
    });
    var i = n("42203"),
        s = n("305961"),
        r = n("957255"),
        a = n("655518"),
        o = n("49111"),
        l = n("724210");
    let u = Array.from(l.StaticChannelRoutes).map(e => a.default.escape(e)).join("|"),
        d = new RegExp("^/channels/(\\d+|".concat(o.ME, ")(?:/)?(\\d+|").concat(u, ")?")),
        c = new RegExp("^/channels/(\\d+|".concat(o.ME, ")(?:/)(\\d+|").concat(u, ")(?:/)(\\d+)")),
        f = RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
        _ = RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
        E = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
        h = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(o.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
        g = RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

    function m(e) {
        if (null == e) return null;
        let t = e.match(c);
        if (null != t && t.length > 3) return {
            guildId: t[1],
            channelId: t[2],
            messageId: t[3]
        };
        let n = e.match(f);
        if (null != n && n.length > 4) return {
            guildId: n[1],
            channelId: n[2],
            threadId: n[3],
            messageId: n[4]
        };
        let i = e.match(d);
        if (null != i && i.length > 1) {
            var s;
            return {
                guildId: i[1],
                channelId: null !== (s = i[2]) && void 0 !== s ? s : void 0
            }
        }
        let r = e.match(_);
        return null != r && r.length > 1 ? {
            guildId: r[1]
        } : null
    }

    function p(e) {
        if (null == e) return null;
        let t = e.match(E);
        return null != t && t.length > 1 ? {
            guildId: t[1],
            guildEventId: t[2],
            recurrenceId: t[3]
        } : null
    }

    function S(e) {
        return !!e.isPrivate() || r.default.can(o.Permissions.VIEW_CHANNEL, e)
    }

    function v(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        if (null == s.default.getGuild(t) && t !== o.ME) return !1;
        if (null == n) return !0;
        let r = i.default.getChannel(n);
        return null != r && S(r)
    }
}