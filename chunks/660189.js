function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("786761"),
        d = n("797316"),
        _ = n("594174"),
        c = n("709054");
    let E = {};

    function I(e) {
        let {
            threads: t,
            firstMessages: n
        } = e;
        if (null == n) return !1;
        for (let e of t) E[e.id] = {
            loaded: !0,
            firstMessage: null
        };
        for (let e of n) T(e.channel_id, e)
    }

    function T(e, t) {
        let n = null == t ? null : (0, u.createMessageRecord)(t);
        E[e] = {
            loaded: !0,
            firstMessage: n
        }
    }

    function f(e) {
        let {
            type: t,
            channelId: n,
            messageId: i,
            userId: r,
            emoji: s,
            optimistic: a,
            reactionType: o
        } = e, l = E[n];
        if (null == l || null == l.firstMessage || i !== l.firstMessage.id) return !1;
        let u = _.default.getCurrentUser(),
            d = null != u && u.id === r;
        if (a && !d) return !1;
        E[n] = {
            ...l
        }, "MESSAGE_REACTION_ADD" === t ? E[n].firstMessage = l.firstMessage.addReaction(s, d, e.colors, o) : E[n].firstMessage = l.firstMessage.removeReaction(s, d, o)
    }
    class S extends(i = o.default.Store) {
        initialize() {
            this.waitFor(d.default, _.default)
        }
        isLoading(e) {
            var t;
            return (null === (t = E[e]) || void 0 === t ? void 0 : t.loaded) !== !0
        }
        getMessage(e) {
            return !(e in E) && (E[e] = {
                loaded: !1,
                firstMessage: null
            }), E[e]
        }
    }
    a = "ForumPostMessagesStore", (s = "displayName") in(r = S) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new S(l.default, {
        CONNECTION_OPEN: function() {
            E = {}
        },
        MESSAGE_CREATE: function(e) {
            if (e.isPushNotification || e.message.id !== c.default.castChannelIdAsMessageId(e.message.channel_id)) return !1;
            T(e.message.channel_id, e.message)
        },
        MESSAGE_UPDATE: function(e) {
            if (e.message.id !== e.message.channel_id) return !1;
            let t = E[c.default.castMessageIdAsChannelId(e.message.id)];
            if (null == t || null == t.firstMessage) return !1;
            E[c.default.castMessageIdAsChannelId(e.message.id)] = {
                ...t,
                firstMessage: (0, u.updateMessageRecord)(t.firstMessage, e.message)
            }
        },
        MESSAGE_DELETE: function(e) {
            if (e.id !== c.default.castChannelIdAsMessageId(e.channelId)) return !1;
            E[e.channelId] = {
                loaded: !0,
                firstMessage: null
            }
        },
        THREAD_CREATE: function(e) {
            if (null != E[e.channel.id] || !d.default.isSubscribedToThreads(e.channel.guild_id)) return !1;
            E[e.channel.id] = {
                loaded: !0,
                firstMessage: null
            }
        },
        MESSAGE_REACTION_ADD: f,
        MESSAGE_REACTION_REMOVE: f,
        MESSAGE_REACTION_REMOVE_ALL: function(e) {
            let {
                channelId: t,
                messageId: n
            } = e, i = E[t];
            if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
            E[t] = {
                ...i,
                firstMessage: i.firstMessage.set("reactions", [])
            }
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
            let {
                channelId: t,
                messageId: n,
                emoji: i
            } = e, r = E[t];
            if (null == r || null == r.firstMessage || n !== r.firstMessage.id) return !1;
            E[t] = {
                ...r,
                firstMessage: r.firstMessage.removeReactionsForEmoji(i)
            }
        },
        MESSAGE_REACTION_ADD_MANY: function(e) {
            let {
                channelId: t,
                messageId: n,
                reactions: i
            } = e, r = E[t];
            if (null == r || null == r.firstMessage || n !== r.firstMessage.id) return !1;
            let s = _.default.getCurrentUser(),
                a = r.firstMessage.addReactionBatch(i, null == s ? void 0 : s.id);
            E[t] = {
                ...r,
                firstMessage: a
            }
        },
        LOAD_FORUM_POSTS: function(e) {
            let {
                threads: t
            } = e;
            for (let e in t) T(e, t[e].first_message)
        },
        LOAD_THREADS_SUCCESS: I,
        LOAD_ARCHIVED_THREADS_SUCCESS: I,
        LOAD_MESSAGES_SUCCESS: function(e) {
            let {
                channelId: t,
                messages: n
            } = e, i = n[n.length - 1];
            null != i && i.id === c.default.castChannelIdAsMessageId(t) && (E[t] = {
                loaded: !0,
                firstMessage: (0, u.createMessageRecord)(i)
            })
        }
    })
}