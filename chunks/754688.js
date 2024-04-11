function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CHANNEL_OR_MESSAGES_URL_RE: function() {
            return I
        },
        MEDIA_POST_URL_RE: function() {
            return T
        },
        canViewChannel: function() {
            return A
        },
        isAccessibleChannelPath: function() {
            return h
        },
        tryParseChannelPath: function() {
            return f
        },
        tryParseEventDetailsPath: function() {
            return S
        }
    });
    var i = n("592125"),
        r = n("430824"),
        s = n("496675"),
        a = n("226951"),
        o = n("981631");
    let l = Array.from(n("176505").StaticChannelRoutes).map(e => a.default.escape(e)).join("|"),
        u = new RegExp("^/channels/(\\d+|".concat(o.ME, ")(?:/)?(\\d+|").concat(l, ")?")),
        d = new RegExp("^/channels/(\\d+|".concat(o.ME, ")(?:/)(\\d+|").concat(l, ")(?:/)(\\d+)")),
        _ = RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
        c = RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
        E = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
        I = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(o.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
        T = RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

    function f(e) {
        if (null == e) return null;
        let t = e.match(d);
        if (null != t && t.length > 3) return {
            guildId: t[1],
            channelId: t[2],
            messageId: t[3]
        };
        let n = e.match(_);
        if (null != n && n.length > 4) return {
            guildId: n[1],
            channelId: n[2],
            threadId: n[3],
            messageId: n[4]
        };
        let i = e.match(u);
        if (null != i && i.length > 1) {
            var r;
            return {
                guildId: i[1],
                channelId: null !== (r = i[2]) && void 0 !== r ? r : void 0
            }
        }
        let s = e.match(c);
        return null != s && s.length > 1 ? {
            guildId: s[1]
        } : null
    }

    function S(e) {
        if (null == e) return null;
        let t = e.match(E);
        return null != t && t.length > 1 ? {
            guildId: t[1],
            guildEventId: t[2],
            recurrenceId: t[3]
        } : null
    }

    function A(e) {
        return !!e.isPrivate() || s.default.can(o.Permissions.VIEW_CHANNEL, e)
    }

    function h(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        if (null == r.default.getGuild(t) && t !== o.ME) return !1;
        if (null == n) return !0;
        let s = i.default.getChannel(n);
        return null != s && A(s)
    }
}