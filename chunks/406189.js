function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("913144"),
        s = {
            updateChannelDimensions(e, t, n, s, l) {
                i.default.wait(() => {
                    i.default.dispatch({
                        type: "UPDATE_CHANNEL_DIMENSIONS",
                        channelId: e,
                        scrollTop: t,
                        scrollHeight: n,
                        offsetHeight: s
                    }), null != l && l()
                })
            },
            updateChannelListScroll(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                i.default.dispatch({
                    type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
                    guildId: e,
                    scrollTop: t,
                    channelIds: n
                })
            },
            channelListScrollTo(e, t) {
                i.default.dispatch({
                    type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
                    guildId: e,
                    scrollTo: t,
                    channelIds: []
                })
            },
            clearChannelListScrollTo(e) {
                i.default.dispatch({
                    type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
                    guildId: e,
                    scrollTo: null,
                    channelIds: []
                })
            },
            clearChannelDimensions(e, t) {
                this.updateChannelDimensions(e, null, null, null, t)
            },
            updateGuildListScrollTo(e) {
                i.default.dispatch({
                    type: "UPDATE_GUILD_LIST_DIMENSIONS",
                    scrollTop: e
                })
            }
        }
}