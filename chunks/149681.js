function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return S
        }
    }), E("222007"), E("70102"), E("913144");
    var t = E("689988");
    E("721698");
    var o = E("560208"),
        n = E("883069"),
        r = E("569808");
    E("487946"), E("337543");
    var i = E("139514"),
        a = E("312016");
    let I = new Set;

    function s(e) {
        let _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (_ && !I.has(e.channel_id)) return;
        let E = (0, a.default)(e.content);
        null != E && 0 !== E.length && E.forEach(e => {
            let {
                type: _,
                code: E
            } = e;
            if (_ === i.CodedLinkType.INVITE);
            else if (_ === i.CodedLinkType.TEMPLATE) null == r.default.getGuildTemplate(E) && n.default.resolveGuildTemplate(E);
            else if (_ === i.CodedLinkType.BUILD_OVERRIDE || _ === i.CodedLinkType.MANUAL_BUILD_OVERRIDE);
            else if (_ === i.CodedLinkType.EVENT);
            else if (_ === i.CodedLinkType.CHANNEL_LINK);
            else if (_ === i.CodedLinkType.APP_DIRECTORY_PROFILE);
            else if (_ === i.CodedLinkType.ACTIVITY_BOOKMARK);
            else if (_ === i.CodedLinkType.EMBEDDED_ACTIVITY_INVITE);
            else if (_ === i.CodedLinkType.GUILD_PRODUCT);
            else if (_ === i.CodedLinkType.SERVER_SHOP);
            else if (_ === i.CodedLinkType.CLYDE_PROFILE);
            else if (_ === i.CodedLinkType.QUESTS_EMBED);
            else throw Error("Unknown coded link type: ".concat(_))
        })
    }
    class T extends t.default {
        handleConnectionOpen() {
            I.clear()
        }
        handleChannelSelect(e) {
            let {
                channelId: _
            } = e;
            null != _ && I.add(_)
        }
        handleMessage(e) {
            let {
                message: _
            } = e;
            return s(_, !0)
        }
        handleLoadMessages(e) {
            let {
                channelId: _,
                messages: E
            } = e;
            I.add(_), E.forEach(e => s(e, !0))
        }
        handleLoadRecentMentions(e) {
            let {
                messages: _
            } = e;
            _.forEach(e => s(e))
        }
        handleLoadPinnedMessages(e) {
            let {
                messages: _
            } = e;
            _.forEach(e => s(e))
        }
        handleSearchFinish(e) {
            e.messages.forEach(e => {
                e.forEach(e => s(e))
            })
        }
        handleGuildFeedFetchSuccess(e) {
            let {
                data: _
            } = e;
            (0, o.getMessagesFromGuildFeedFetch)(_).forEach(e => s(e))
        }
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: this.handleConnectionOpen,
                MESSAGE_CREATE: {
                    callback: this.handleMessage,
                    autoSubscribe: !1
                },
                MESSAGE_UPDATE: this.handleMessage,
                LOAD_MESSAGES_SUCCESS: this.handleLoadMessages,
                LOAD_MESSAGES_AROUND_SUCCESS: this.handleLoadMessages,
                LOAD_RECENT_MENTIONS_SUCCESS: this.handleLoadRecentMentions,
                LOAD_PINNED_MESSAGES_SUCCESS: this.handleLoadPinnedMessages,
                SEARCH_FINISH: this.handleSearchFinish,
                MOD_VIEW_SEARCH_FINISH: this.handleSearchFinish,
                GUILD_FEED_FETCH_SUCCESS: this.handleGuildFeedFetchSuccess,
                CHANNEL_SELECT: {
                    callback: this.handleChannelSelect,
                    autoSubscribe: !1
                }
            }
        }
    }
    var S = new T
}