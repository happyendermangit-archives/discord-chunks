function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return c
        },
        getChannelVideoLimit: function() {
            return r
        }
    });
    var d = t("446674"),
        s = t("305961"),
        n = t("316133"),
        i = t("49111");

    function c(e) {
        return (0, d.useStateFromStoresObject)([n.default, s.default], () => {
            let a = n.default.countVoiceStatesForChannel(e.id),
                t = s.default.getGuild(e.getGuildId());
            return null == t ? {
                reachedLimit: !1,
                limit: -1
            } : e.type === i.ChannelTypes.GUILD_STAGE_VOICE ? {
                reachedLimit: a > t.maxStageVideoChannelUsers,
                limit: t.maxStageVideoChannelUsers
            } : {
                reachedLimit: t.maxVideoChannelUsers > 0 && a > t.maxVideoChannelUsers,
                limit: t.maxVideoChannelUsers
            }
        }, [e])
    }

    function r(e) {
        let a = n.default.countVoiceStatesForChannel(e.id),
            t = s.default.getGuild(e.getGuildId());
        return null == t ? {
            reachedLimit: !1,
            limit: -1
        } : e.type === i.ChannelTypes.GUILD_STAGE_VOICE ? {
            reachedLimit: a > t.maxStageVideoChannelUsers,
            limit: t.maxStageVideoChannelUsers
        } : {
            reachedLimit: t.maxVideoChannelUsers > 0 && a > t.maxVideoChannelUsers,
            limit: t.maxVideoChannelUsers
        }
    }
}