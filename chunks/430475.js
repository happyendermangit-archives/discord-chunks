function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("222007");
    var i = n("446674"),
        a = n("913144"),
        l = n("692038"),
        s = n("10802"),
        r = n("697218"),
        u = n("299039");
    let d = {};

    function o(e) {
        let {
            threads: t,
            firstMessages: n
        } = e;
        if (null == n) return !1;
        for (let e of t) d[e.id] = {
            loaded: !0,
            firstMessage: null
        };
        for (let e of n) c(e.channel_id, e)
    }

    function c(e, t) {
        let n = null == t ? null : (0, l.createMessageRecord)(t);
        d[e] = {
            loaded: !0,
            firstMessage: n
        }
    }

    function _(e) {
        let {
            type: t,
            channelId: n,
            messageId: i,
            userId: a,
            emoji: l,
            optimistic: s,
            reactionType: u
        } = e, o = d[n];
        if (null == o || null == o.firstMessage || i !== o.firstMessage.id) return !1;
        let c = r.default.getCurrentUser(),
            _ = null != c && c.id === a;
        if (s && !_) return !1;
        d[n] = {
            ...o
        }, "MESSAGE_REACTION_ADD" === t ? d[n].firstMessage = o.firstMessage.addReaction(l, _, e.colors, u) : d[n].firstMessage = o.firstMessage.removeReaction(l, _, u)
    }
    class f extends i.default.Store {
        initialize() {
            this.waitFor(s.default, r.default)
        }
        isLoading(e) {
            var t;
            return (null === (t = d[e]) || void 0 === t ? void 0 : t.loaded) !== !0
        }
        getMessage(e) {
            return !(e in d) && (d[e] = {
                loaded: !1,
                firstMessage: null
            }), d[e]
        }
    }
    f.displayName = "ForumPostMessagesStore";
    var h = new f(a.default, {
        CONNECTION_OPEN: function() {
            d = {}
        },
        MESSAGE_CREATE: function(e) {
            if (e.isPushNotification || e.message.id !== u.default.castChannelIdAsMessageId(e.message.channel_id)) return !1;
            c(e.message.channel_id, e.message)
        },
        MESSAGE_UPDATE: function(e) {
            if (e.message.id !== e.message.channel_id) return !1;
            let t = d[u.default.castMessageIdAsChannelId(e.message.id)];
            if (null == t || null == t.firstMessage) return !1;
            d[u.default.castMessageIdAsChannelId(e.message.id)] = {
                ...t,
                firstMessage: (0, l.updateMessageRecord)(t.firstMessage, e.message)
            }
        },
        MESSAGE_DELETE: function(e) {
            if (e.id !== u.default.castChannelIdAsMessageId(e.channelId)) return !1;
            d[e.channelId] = {
                loaded: !0,
                firstMessage: null
            }
        },
        THREAD_CREATE: function(e) {
            let t = d[e.channel.id];
            if (null != t || !s.default.isSubscribedToThreads(e.channel.guild_id)) return !1;
            d[e.channel.id] = {
                loaded: !0,
                firstMessage: null
            }
        },
        MESSAGE_REACTION_ADD: _,
        MESSAGE_REACTION_REMOVE: _,
        MESSAGE_REACTION_REMOVE_ALL: function(e) {
            let {
                channelId: t,
                messageId: n
            } = e, i = d[t];
            if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
            d[t] = {
                ...i,
                firstMessage: i.firstMessage.set("reactions", [])
            }
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
            let {
                channelId: t,
                messageId: n,
                emoji: i
            } = e, a = d[t];
            if (null == a || null == a.firstMessage || n !== a.firstMessage.id) return !1;
            d[t] = {
                ...a,
                firstMessage: a.firstMessage.removeReactionsForEmoji(i)
            }
        },
        MESSAGE_REACTION_ADD_MANY: function(e) {
            let {
                channelId: t,
                messageId: n,
                reactions: i
            } = e, a = d[t];
            if (null == a || null == a.firstMessage || n !== a.firstMessage.id) return !1;
            let l = r.default.getCurrentUser(),
                s = a.firstMessage.addReactionBatch(i, null == l ? void 0 : l.id);
            d[t] = {
                ...a,
                firstMessage: s
            }
        },
        LOAD_FORUM_POSTS: function(e) {
            let {
                threads: t
            } = e;
            for (let e in t) c(e, t[e].first_message)
        },
        LOAD_THREADS_SUCCESS: o,
        LOAD_ARCHIVED_THREADS_SUCCESS: o,
        LOAD_MESSAGES_SUCCESS: function(e) {
            let {
                channelId: t,
                messages: n
            } = e, i = n[n.length - 1];
            null != i && i.id === u.default.castChannelIdAsMessageId(t) && (d[t] = {
                loaded: !0,
                firstMessage: (0, l.createMessageRecord)(i)
            })
        }
    })
}