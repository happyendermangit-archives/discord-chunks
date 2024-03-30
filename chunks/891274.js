function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("411104"), n("570140");
    var i = n("147913");
    n("674588");
    var r = n("900489"),
        s = n("751189"),
        a = n("409059");
    n("652898"), n("701190");
    var o = n("960904"),
        l = n("830121");
    let u = new Set;

    function d(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t && !u.has(e.channel_id)) return;
        let n = (0, l.default)(e.content);
        null != n && 0 !== n.length && n.forEach(e => {
            let {
                type: t,
                code: n
            } = e;
            if (t === o.CodedLinkType.INVITE);
            else if (t === o.CodedLinkType.TEMPLATE) null == a.default.getGuildTemplate(n) && s.default.resolveGuildTemplate(n);
            else if (t === o.CodedLinkType.BUILD_OVERRIDE || t === o.CodedLinkType.MANUAL_BUILD_OVERRIDE);
            else if (t === o.CodedLinkType.EVENT);
            else if (t === o.CodedLinkType.CHANNEL_LINK);
            else if (t === o.CodedLinkType.APP_DIRECTORY_PROFILE);
            else if (t === o.CodedLinkType.ACTIVITY_BOOKMARK);
            else if (t === o.CodedLinkType.EMBEDDED_ACTIVITY_INVITE);
            else if (t === o.CodedLinkType.GUILD_PRODUCT);
            else if (t === o.CodedLinkType.SERVER_SHOP);
            else if (t === o.CodedLinkType.CLYDE_PROFILE);
            else if (t === o.CodedLinkType.QUESTS_EMBED);
            else throw Error("Unknown coded link type: ".concat(t))
        })
    }
    class _ extends i.default {
        handleConnectionOpen() {
            u.clear()
        }
        handleChannelSelect(e) {
            let {
                channelId: t
            } = e;
            null != t && u.add(t)
        }
        handleMessage(e) {
            let {
                message: t
            } = e;
            return d(t, !0)
        }
        handleLoadMessages(e) {
            let {
                channelId: t,
                messages: n
            } = e;
            u.add(t), n.forEach(e => d(e, !0))
        }
        handleLoadRecentMentions(e) {
            let {
                messages: t
            } = e;
            t.forEach(e => d(e))
        }
        handleLoadPinnedMessages(e) {
            let {
                messages: t
            } = e;
            t.forEach(e => d(e))
        }
        handleSearchFinish(e) {
            e.messages.forEach(e => {
                e.forEach(e => d(e))
            })
        }
        handleGuildFeedFetchSuccess(e) {
            let {
                data: t
            } = e;
            (0, r.getMessagesFromGuildFeedFetch)(t).forEach(e => d(e))
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
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
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new _
}