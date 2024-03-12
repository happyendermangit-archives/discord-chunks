function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var s = n("913144"),
        i = {
            updateChannelDimensions(e, t, n, i, r) {
                s.default.wait(() => {
                    s.default.dispatch({
                        type: "UPDATE_CHANNEL_DIMENSIONS",
                        channelId: e,
                        scrollTop: t,
                        scrollHeight: n,
                        offsetHeight: i
                    }), null != r && r()
                })
            },
            updateChannelListScroll(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                s.default.dispatch({
                    type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
                    guildId: e,
                    scrollTop: t,
                    channelIds: n
                })
            },
            channelListScrollTo(e, t) {
                s.default.dispatch({
                    type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
                    guildId: e,
                    scrollTo: t,
                    channelIds: []
                })
            },
            clearChannelListScrollTo(e) {
                s.default.dispatch({
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
                s.default.dispatch({
                    type: "UPDATE_GUILD_LIST_DIMENSIONS",
                    scrollTop: e
                })
            }
        }
}