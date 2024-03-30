function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        },
        getChannelVideoLimit: function() {
            return f
        }
    });
    var a = n("898511"),
        r = n("306912"),
        c = n("473702"),
        o = n("281767");

    function i(e) {
        return (0, a.useStateFromStoresObject)([c.default, r.default], function() {
            var t = c.default.countVoiceStatesForChannel(e.id),
                n = r.default.getGuild(e.getGuildId());
            return null == n ? {
                reachedLimit: !1,
                limit: -1
            } : e.type === o.ChannelTypes.GUILD_STAGE_VOICE ? {
                reachedLimit: t > n.maxStageVideoChannelUsers,
                limit: n.maxStageVideoChannelUsers
            } : {
                reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                limit: n.maxVideoChannelUsers
            }
        }, [e])
    }

    function f(e) {
        var t = c.default.countVoiceStatesForChannel(e.id),
            n = r.default.getGuild(e.getGuildId());
        return null == n ? {
            reachedLimit: !1,
            limit: -1
        } : e.type === o.ChannelTypes.GUILD_STAGE_VOICE ? {
            reachedLimit: t > n.maxStageVideoChannelUsers,
            limit: n.maxStageVideoChannelUsers
        } : {
            reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
            limit: n.maxVideoChannelUsers
        }
    }
}