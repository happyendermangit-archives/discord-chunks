function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("266067"),
        r = n("652874"),
        c = n("281767");

    function o(e) {
        var t = (0, a.matchPath)(null != e ? e : "", {
            path: c.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
        });
        if (null != t) {
            var n = t.params,
                r = n.guildId,
                o = n.channelId;
            return {
                guildId: r === c.ME ? null : r,
                channelId: null != o ? o : null
            }
        }
        var i = (0, a.matchPath)(null != e ? e : "", {
            path: c.Routes.GUILD_BOOSTING_MARKETING(":guildId")
        });
        return null != i ? {
            guildId: i.params.guildId,
            channelId: null
        } : {
            guildId: null,
            channelId: null
        }
    }
    t.default = (0, r.default)(function(e) {
        return {
            path: null,
            basePath: "/",
            guildId: null,
            channelId: null,
            updatePath: function(t) {
                var n = o(t);
                e({
                    path: t,
                    guildId: n.guildId,
                    channelId: n.channelId
                })
            },
            resetPath: function(t) {
                var n = o(t);
                e({
                    path: null,
                    guildId: n.guildId,
                    channelId: n.channelId,
                    basePath: t
                })
            }
        }
    })
}