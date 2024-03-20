function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return i
        }
    });
    var d = t("803182"),
        s = t("308503"),
        n = t("49111");

    function c(e) {
        let a = (0, d.matchPath)(null != e ? e : "", {
            path: n.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
        });
        if (null != a) {
            let {
                guildId: e,
                channelId: t
            } = a.params;
            return {
                guildId: e === n.ME ? null : e,
                channelId: null != t ? t : null
            }
        }
        let t = (0, d.matchPath)(null != e ? e : "", {
            path: n.Routes.GUILD_BOOSTING_MARKETING(":guildId")
        });
        return null != t ? {
            guildId: t.params.guildId,
            channelId: null
        } : {
            guildId: null,
            channelId: null
        }
    }
    var i = (0, s.default)(e => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(a) {
            let {
                guildId: t,
                channelId: d
            } = c(a);
            e({
                path: a,
                guildId: t,
                channelId: d
            })
        },
        resetPath(a) {
            let {
                guildId: t,
                channelId: d
            } = c(a);
            e({
                path: null,
                guildId: t,
                channelId: d,
                basePath: a
            })
        }
    }))
}