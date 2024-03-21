function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("222007");
    var i = n("446674"),
        s = n("913144"),
        r = n("692038"),
        a = n("10802"),
        o = n("697218"),
        l = n("299039");
    let u = {};

    function d(e) {
        let {
            threads: t,
            firstMessages: n
        } = e;
        if (null == n) return !1;
        for (let e of t) u[e.id] = {
            loaded: !0,
            firstMessage: null
        };
        for (let e of n) c(e.channel_id, e)
    }

    function c(e, t) {
        let n = null == t ? null : (0, r.createMessageRecord)(t);
        u[e] = {
            loaded: !0,
            firstMessage: n
        }
    }

    function _(e) {
        let {
            type: t,
            channelId: n,
            messageId: i,
            userId: s,
            emoji: r,
            optimistic: a,
            reactionType: l
        } = e, d = u[n];
        if (null == d || null == d.firstMessage || i !== d.firstMessage.id) return !1;
        let c = o.default.getCurrentUser(),
            _ = null != c && c.id === s;
        if (a && !_) return !1;
        u[n] = {
            ...d
        }, "MESSAGE_REACTION_ADD" === t ? u[n].firstMessage = d.firstMessage.addReaction(r, _, e.colors, l) : u[n].firstMessage = d.firstMessage.removeReaction(r, _, l)
    }
    class f extends i.default.Store {
        initialize() {
            this.waitFor(a.default, o.default)
        }
        isLoading(e) {
            var t;
            return (null === (t = u[e]) || void 0 === t ? void 0 : t.loaded) !== !0
        }
        getMessage(e) {
            return !(e in u) && (u[e] = {
                loaded: !1,
                firstMessage: null
            }), u[e]
        }
    }
    f.displayName = "ForumPostMessagesStore";
    var E = new f(s.default, {
        CONNECTION_OPEN: function() {
            u = {}
        },
        MESSAGE_CREATE: function(e) {
            if (e.isPushNotification || e.message.id !== l.default.castChannelIdAsMessageId(e.message.channel_id)) return !1;
            c(e.message.channel_id, e.message)
        },
        MESSAGE_UPDATE: function(e) {
            if (e.message.id !== e.message.channel_id) return !1;
            let t = u[l.default.castMessageIdAsChannelId(e.message.id)];
            if (null == t || null == t.firstMessage) return !1;
            u[l.default.castMessageIdAsChannelId(e.message.id)] = {
                ...t,
                firstMessage: (0, r.updateMessageRecord)(t.firstMessage, e.message)
            }
        },
        MESSAGE_DELETE: function(e) {
            if (e.id !== l.default.castChannelIdAsMessageId(e.channelId)) return !1;
            u[e.channelId] = {
                loaded: !0,
                firstMessage: null
            }
        },
        THREAD_CREATE: function(e) {
            let t = u[e.channel.id];
            if (null != t || !a.default.isSubscribedToThreads(e.channel.guild_id)) return !1;
            u[e.channel.id] = {
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
            } = e, i = u[t];
            if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
            u[t] = {
                ...i,
                firstMessage: i.firstMessage.set("reactions", [])
            }
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
            let {
                channelId: t,
                messageId: n,
                emoji: i
            } = e, s = u[t];
            if (null == s || null == s.firstMessage || n !== s.firstMessage.id) return !1;
            u[t] = {
                ...s,
                firstMessage: s.firstMessage.removeReactionsForEmoji(i)
            }
        },
        MESSAGE_REACTION_ADD_MANY: function(e) {
            let {
                channelId: t,
                messageId: n,
                reactions: i
            } = e, s = u[t];
            if (null == s || null == s.firstMessage || n !== s.firstMessage.id) return !1;
            let r = o.default.getCurrentUser(),
                a = s.firstMessage.addReactionBatch(i, null == r ? void 0 : r.id);
            u[t] = {
                ...s,
                firstMessage: a
            }
        },
        LOAD_FORUM_POSTS: function(e) {
            let {
                threads: t
            } = e;
            for (let e in t) c(e, t[e].first_message)
        },
        LOAD_THREADS_SUCCESS: d,
        LOAD_ARCHIVED_THREADS_SUCCESS: d,
        LOAD_MESSAGES_SUCCESS: function(e) {
            let {
                channelId: t,
                messages: n
            } = e, i = n[n.length - 1];
            null != i && i.id === l.default.castChannelIdAsMessageId(t) && (u[t] = {
                loaded: !0,
                firstMessage: (0, r.createMessageRecord)(i)
            })
        }
    })
}