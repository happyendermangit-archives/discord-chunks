function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648");
    var i = n("628735"),
        r = n.n(i),
        a = n("392711"),
        s = n.n(a),
        o = n("729594"),
        l = n("981631");
    let u = /(?:^|\.)(?:discordapp|discord)\.com$/i,
        d = r().v4().source,
        _ = RegExp("(?:".concat("(?:(?:[a-z]+:)?//)", "|www\\.)").concat("(?:\\S+(?::\\S*)?@)?", "(?:localhost|").concat(d, "|").concat("(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+").concat("(?:(?:[a-z\\u00a1-\\uffff]{2,}))", ")").concat("(?::\\d{2,5})?").concat('(?:[/?#][^\\s"]*)?'), "ig"),
        c = new Set([window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.INVITE_HOST, window.GLOBAL_ENV.GIFT_CODE_HOST, window.GLOBAL_ENV.GUILD_TEMPLATE_HOST]);

    function E(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == e) return !1;
        return u.test(e) || n && (t = e, c.has(t.toLowerCase()))
    }

    function I(e) {
        return null != e && "discord:" === e
    }

    function T(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != e && E(o.parse(e).hostname, t)
    }

    function f(e) {
        return null != e && I(o.parse(e).protocol)
    }
    t.default = {
        URL_REGEX: _,
        isDiscordHostname: E,
        isDiscordLocalhost: function(e, t) {
            return null != e && null != t && (window.location.host === e || !1)
        },
        isDiscordProtocol: I,
        isDiscordUrl: T,
        isDiscordUri: f,
        isDiscordCdnUrl: function(e) {
            return null != e && o.parse(e).hostname === window.GLOBAL_ENV.CDN_HOST
        },
        isDiscordUrlOrUri: e => T(e) || f(e),
        isAppRoute: e => {
            let t = e.toLowerCase();
            return t.startsWith("/channels/") || t.startsWith(l.Routes.APPLICATION_STORE) || t.startsWith(l.Routes.APPLICATION_LIBRARY) || t.startsWith(l.Routes.MESSAGE_REQUESTS) || t.startsWith(l.Routes.ACTIVITIES) || t.startsWith(l.Routes.COLLECTIBLES_SHOP) || t.startsWith(l.Routes.ACTIVITY)
        },
        format: e => o.format(e),
        formatPathWithQuery: (e, t) => o.format({
            pathname: e,
            query: s().pickBy(t)
        }),
        formatSearch: e => o.format({
            query: s().pickBy(e)
        }),
        safeParseWithQuery(e) {
            try {
                return o.parse(e, !0)
            } catch (e) {
                return null
            }
        },
        toURLSafe(e, t) {
            try {
                return new URL(e, t)
            } catch (e) {
                return null
            }
        },
        makeUrl: function(e) {
            let t = (0, location.host);
            return "".concat(location.protocol, "//").concat(t).concat(e)
        }
    }
}