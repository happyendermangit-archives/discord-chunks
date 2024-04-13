function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        default: function() {
            return r
        },
        getChannelVideoLimit: function() {
            return o
        }
    });
    var d = a("442837"),
        n = a("430824"),
        i = a("938475"),
        c = a("981631");

    function r(e) {
        return (0, d.useStateFromStoresObject)([i.default, n.default], () => {
            let t = i.default.countVoiceStatesForChannel(e.id),
                a = n.default.getGuild(e.getGuildId());
            return null == a ? {
                reachedLimit: !1,
                limit: -1
            } : e.type === c.ChannelTypes.GUILD_STAGE_VOICE ? {
                reachedLimit: t > a.maxStageVideoChannelUsers,
                limit: a.maxStageVideoChannelUsers
            } : {
                reachedLimit: a.maxVideoChannelUsers > 0 && t > a.maxVideoChannelUsers,
                limit: a.maxVideoChannelUsers
            }
        }, [e])
    }

    function o(e) {
        let t = i.default.countVoiceStatesForChannel(e.id),
            a = n.default.getGuild(e.getGuildId());
        return null == a ? {
            reachedLimit: !1,
            limit: -1
        } : e.type === c.ChannelTypes.GUILD_STAGE_VOICE ? {
            reachedLimit: t > a.maxStageVideoChannelUsers,
            limit: a.maxStageVideoChannelUsers
        } : {
            reachedLimit: a.maxVideoChannelUsers > 0 && t > a.maxVideoChannelUsers,
            limit: a.maxVideoChannelUsers
        }
    }
}