function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("629815");
    t.default = {
        updateChannelDimensions: function(e, t, n, o, i) {
            r.default.wait(function() {
                r.default.dispatch({
                    type: "UPDATE_CHANNEL_DIMENSIONS",
                    channelId: e,
                    scrollTop: t,
                    scrollHeight: n,
                    offsetHeight: o
                }), null != i && i()
            })
        },
        updateChannelListScroll: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            r.default.dispatch({
                type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
                guildId: e,
                scrollTop: t,
                channelIds: n
            })
        },
        channelListScrollTo: function(e, t) {
            r.default.dispatch({
                type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
                guildId: e,
                scrollTo: t,
                channelIds: []
            })
        },
        clearChannelListScrollTo: function(e) {
            r.default.dispatch({
                type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
                guildId: e,
                scrollTo: null,
                channelIds: []
            })
        },
        clearChannelDimensions: function(e, t) {
            this.updateChannelDimensions(e, null, null, null, t)
        },
        updateGuildListScrollTo: function(e) {
            r.default.dispatch({
                type: "UPDATE_GUILD_LIST_DIMENSIONS",
                scrollTop: e
            })
        }
    }
}