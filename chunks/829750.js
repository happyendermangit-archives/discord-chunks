function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        default: function() {
            return o
        },
        getChannelVideoLimit: function() {
            return r
        }
    });
    var d = a("442837"),
        n = a("430824"),
        c = a("938475"),
        i = a("981631");

    function o(e) {
        return (0, d.useStateFromStoresObject)([c.default, n.default], () => {
            let t = c.default.countVoiceStatesForChannel(e.id),
                a = n.default.getGuild(e.getGuildId());
            return null == a ? {
                reachedLimit: !1,
                limit: -1
            } : e.type === i.ChannelTypes.GUILD_STAGE_VOICE ? {
                reachedLimit: t > a.maxStageVideoChannelUsers,
                limit: a.maxStageVideoChannelUsers
            } : {
                reachedLimit: a.maxVideoChannelUsers > 0 && t > a.maxVideoChannelUsers,
                limit: a.maxVideoChannelUsers
            }
        }, [e])
    }

    function r(e) {
        let t = c.default.countVoiceStatesForChannel(e.id),
            a = n.default.getGuild(e.getGuildId());
        return null == a ? {
            reachedLimit: !1,
            limit: -1
        } : e.type === i.ChannelTypes.GUILD_STAGE_VOICE ? {
            reachedLimit: t > a.maxStageVideoChannelUsers,
            limit: a.maxStageVideoChannelUsers
        } : {
            reachedLimit: a.maxVideoChannelUsers > 0 && t > a.maxVideoChannelUsers,
            limit: a.maxVideoChannelUsers
        }
    }
}