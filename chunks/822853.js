function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("628735"),
        o = n.n(r),
        i = n("392711"),
        a = n.n(i),
        u = n("729594"),
        s = n("281767"),
        l = /(?:^|\.)(?:discordapp|discord)\.com$/i,
        c = o().v4().source,
        f = RegExp("(?:".concat("(?:(?:[a-z]+:)?//)", "|www\\.)").concat("(?:\\S+(?::\\S*)?@)?", "(?:localhost|").concat(c, "|").concat("(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+").concat("(?:(?:[a-z\\u00a1-\\uffff]{2,}))", ")").concat("(?::\\d{2,5})?").concat('(?:[/?#][^\\s"]*)?'), "ig"),
        d = new Set([window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.INVITE_HOST, window.GLOBAL_ENV.GIFT_CODE_HOST, window.GLOBAL_ENV.GUILD_TEMPLATE_HOST]);

    function _(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == e) return !1;
        return l.test(e) || n && (t = e, d.has(t.toLowerCase()))
    }

    function E(e) {
        return null != e && "discord:" === e
    }

    function p(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != e && _(u.parse(e).hostname, t)
    }

    function m(e) {
        return null != e && E(u.parse(e).protocol)
    }
    t.default = {
        URL_REGEX: f,
        isDiscordHostname: _,
        isDiscordLocalhost: function(e, t) {
            return null != e && null != t && (window.location.host === e || !1)
        },
        isDiscordProtocol: E,
        isDiscordUrl: p,
        isDiscordUri: m,
        isDiscordCdnUrl: function(e) {
            return null != e && u.parse(e).hostname === window.GLOBAL_ENV.CDN_HOST
        },
        isDiscordUrlOrUri: function(e) {
            return p(e) || m(e)
        },
        isAppRoute: function(e) {
            var t = e.toLowerCase();
            return t.startsWith("/channels/") || t.startsWith(s.Routes.APPLICATION_STORE) || t.startsWith(s.Routes.APPLICATION_LIBRARY) || t.startsWith(s.Routes.MESSAGE_REQUESTS) || t.startsWith(s.Routes.ACTIVITIES) || t.startsWith(s.Routes.COLLECTIBLES_SHOP) || t.startsWith(s.Routes.ACTIVITY)
        },
        format: function(e) {
            return u.format(e)
        },
        formatPathWithQuery: function(e, t) {
            return u.format({
                pathname: e,
                query: a().pickBy(t)
            })
        },
        formatSearch: function(e) {
            return u.format({
                query: a().pickBy(e)
            })
        },
        safeParseWithQuery: function(e) {
            try {
                return u.parse(e, !0)
            } catch (e) {
                return null
            }
        },
        toURLSafe: function(e, t) {
            try {
                return new URL(e, t)
            } catch (e) {
                return null
            }
        },
        makeUrl: function(e) {
            var t = __DEV__ ? window.GLOBAL_ENV.INVITE_HOST : location.host;
            return "".concat(location.protocol, "//").concat(t).concat(e)
        }
    }
}