function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CHANNEL_OR_MESSAGES_URL_RE: function() {
            return S
        },
        MEDIA_POST_URL_RE: function() {
            return T
        },
        tryParseChannelPath: function() {
            return f
        },
        tryParseEventDetailsPath: function() {
            return p
        },
        canViewChannel: function() {
            return N
        },
        isAccessibleChannelPath: function() {
            return A
        }
    });
    var r = n("42203"),
        i = n("305961"),
        l = n("957255"),
        u = n("655518"),
        a = n("49111"),
        o = n("724210");
    let s = Array.from(o.StaticChannelRoutes).map(e => u.default.escape(e)).join("|"),
        d = new RegExp("^/channels/(\\d+|".concat(a.ME, ")(?:/)?(\\d+|").concat(s, ")?")),
        E = new RegExp("^/channels/(\\d+|".concat(a.ME, ")(?:/)(\\d+|").concat(s, ")(?:/)(\\d+)")),
        _ = RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
        c = RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
        I = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
        S = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(a.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
        T = RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

    function f(e) {
        if (null == e) return null;
        let t = e.match(E);
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
        let r = e.match(d);
        if (null != r && r.length > 1) {
            var i;
            return {
                guildId: r[1],
                channelId: null !== (i = r[2]) && void 0 !== i ? i : void 0
            }
        }
        let l = e.match(c);
        return null != l && l.length > 1 ? {
            guildId: l[1]
        } : null
    }

    function p(e) {
        if (null == e) return null;
        let t = e.match(I);
        return null != t && t.length > 1 ? {
            guildId: t[1],
            guildEventId: t[2],
            recurrenceId: t[3]
        } : null
    }

    function N(e) {
        return !!e.isPrivate() || l.default.can(a.Permissions.VIEW_CHANNEL, e)
    }

    function A(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        if (null == i.default.getGuild(t) && t !== a.ME) return !1;
        if (null == n) return !0;
        let l = r.default.getChannel(n);
        return null != l && N(l)
    }
}