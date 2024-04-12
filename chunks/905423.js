function(e, t, a) {
    "use strict";
    a.r(t);
    var d = a("266067"),
        n = a("652874"),
        i = a("981631");

    function c(e) {
        let t = (0, d.matchPath)(null != e ? e : "", {
            path: i.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
        });
        if (null != t) {
            let {
                guildId: e,
                channelId: a
            } = t.params;
            return {
                guildId: e === i.ME ? null : e,
                channelId: null != a ? a : null
            }
        }
        let a = (0, d.matchPath)(null != e ? e : "", {
            path: i.Routes.GUILD_BOOSTING_MARKETING(":guildId")
        });
        return null != a ? {
            guildId: a.params.guildId,
            channelId: null
        } : {
            guildId: null,
            channelId: null
        }
    }
    t.default = (0, n.default)(e => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(t) {
            let {
                guildId: a,
                channelId: d
            } = c(t);
            e({
                path: t,
                guildId: a,
                channelId: d
            })
        },
        resetPath(t) {
            let {
                guildId: a,
                channelId: d
            } = c(t);
            e({
                path: null,
                guildId: a,
                channelId: d,
                basePath: t
            })
        }
    }))
}