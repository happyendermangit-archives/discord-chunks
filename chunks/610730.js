function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return D
        }
    }), n("222007");
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("913144"),
        o = n("560208"),
        l = n("692038"),
        u = n("233069"),
        d = n("719926"),
        c = n("766274"),
        _ = n("42203"),
        f = n("377253"),
        E = n("299039"),
        h = n("648564"),
        g = n("49111");
    let m = new Set,
        p = {},
        S = {};

    function T(e, t) {
        u.ALL_CHANNEL_TYPES.has(e.type) && v(function(e) {
            if (!(e.id in p)) {
                var t;
                p[e.id] = {
                    guildId: e.guild_id,
                    parentId: e.parent_id,
                    count: null !== (t = e.messageCount) && void 0 !== t ? t : 0,
                    mostRecentRawMessage: null,
                    mostRecentMessage: null
                }
            }
            return p[e.id]
        }(e), t)
    }

    function v(e, t) {
        var n;
        let i = (null !== (n = S[e.parentId]) && void 0 !== n ? n : 0) + 1;
        S[e.parentId] = i, t(e)
    }

    function I(e) {
        var t;
        null === (t = e.threads) || void 0 === t || t.forEach(A)
    }

    function A(e) {
        T(e, t => {
            var n;
            null != e.messageCount && (t.count = e.messageCount);
            let i = null !== (n = t.mostRecentRawMessage) && void 0 !== n ? n : t.mostRecentMessage;
            null != e.lastMessageId && (null == i ? void 0 : i.id) !== e.lastMessageId && (t.mostRecentRawMessage = null, t.mostRecentMessage = null)
        })
    }

    function C(e) {
        if (null != e && !(e.id in p)) {
            let t = _.default.getChannel(e.id);
            if (null != t) return A(t), !0
        }
        return !1
    }

    function y(e) {
        let {
            channel: t
        } = e;
        A(t)
    }

    function N(e) {
        let {
            threads: t
        } = e;
        t.forEach(C)
    }

    function R(e) {
        let {
            messages: t,
            threads: n
        } = e;
        for (let e of t)
            for (let t of e) C(t.thread);
        n.forEach(C)
    }
    class O extends r.default.Store {
        initialize() {
            this.waitFor(_.default, f.default)
        }
        getCount(e) {
            var t, n;
            return null !== (n = null === (t = p[e]) || void 0 === t ? void 0 : t.count) && void 0 !== n ? n : null
        }
        getMostRecentMessage(e) {
            var t, n;
            let i = p[e];
            return null == i ? null : (null == i.mostRecentMessage && null != i.mostRecentRawMessage && (i.mostRecentMessage = null !== (t = f.default.getMessage(e, i.mostRecentRawMessage.id)) && void 0 !== t ? t : (0, l.createMessageRecord)(i.mostRecentRawMessage), i.mostRecentRawMessage = null), null !== (n = i.mostRecentMessage) && void 0 !== n ? n : null)
        }
        getChannelThreadsVersion(e) {
            return S[e]
        }
        getInitialOverlayState() {
            return p
        }
    }
    O.displayName = "ThreadMessageStore";
    var D = new O(a.default, {
        CONNECTION_OPEN: function(e) {
            S = {}, m.clear(), e.guilds.forEach(I)
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                threadMessages: t
            } = e;
            for (let e in p = {
                    ...t
                }) {
                let n = t[e].mostRecentMessage;
                null != n && (t[e].mostRecentMessage = new d.default({
                    ...n,
                    author: new c.default(n.author)
                }))
            }
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            I(t)
        },
        GUILD_DELETE: function(e) {
            var t;
            let {
                guild: n
            } = e;
            t = n.id, p = s.omitBy(p, e => {
                let n = e.guildId === t;
                return n && delete S[e.parentId], n
            })
        },
        THREAD_CREATE: y,
        THREAD_UPDATE: y,
        THREAD_LIST_SYNC: function(e) {
            let {
                threads: t,
                mostRecentMessages: n
            } = e;
            t.forEach(A), null == n || n.forEach(e => {
                let t = _.default.getChannel(e.channel_id);
                null != t && e.type !== g.MessageTypes.THREAD_STARTER_MESSAGE && T(t, t => {
                    t.mostRecentRawMessage = e, t.mostRecentMessage = null
                })
            })
        },
        LOAD_THREADS_SUCCESS: N,
        LOAD_ARCHIVED_THREADS_SUCCESS: N,
        SEARCH_FINISH: R,
        MOD_VIEW_SEARCH_FINISH: R,
        THREAD_DELETE: function(e) {
            let {
                channel: t
            } = e;
            delete p[t.id]
        },
        CHANNEL_DELETE: function(e) {
            var t;
            let {
                channel: n
            } = e;
            t = n.id, p = s.omitBy(p, e => e.parentId === t), delete S[t]
        },
        MESSAGE_CREATE: function(e) {
            let {
                message: t,
                optimistic: n,
                isPushNotification: i,
                sendMessageOptions: s
            } = e;
            if (n || i || null != s) return !1;
            let r = _.default.getChannel(t.channel_id);
            if (null == r || !u.THREAD_CHANNEL_TYPES.has(r.type) || ! function(e, t) {
                    return !(t.type === g.MessageTypes.THREAD_STARTER_MESSAGE || e.isForumPost() && t.id === E.default.castChannelIdAsMessageId(e.id)) && !0
                }(r, t)) return !1;
            T(r, e => {
                e.count = Math.min(e.count + 1, h.MAX_THREAD_MESSAGE_COUNT), e.mostRecentRawMessage = t, e.mostRecentMessage = null
            })
        },
        MESSAGE_UPDATE: function(e) {
            var t;
            let {
                message: n
            } = e, i = p[n.channel_id], s = null !== (t = null == i ? void 0 : i.mostRecentRawMessage) && void 0 !== t ? t : null == i ? void 0 : i.mostRecentMessage;
            if (null == i || null == s || s.id !== n.id) return !1;
            v(i, e => {
                null != e.mostRecentMessage && (e.mostRecentMessage = (0, l.updateMessageRecord)(e.mostRecentMessage, n)), null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, l.updateServerMessage)(e.mostRecentRawMessage, n))
            })
        },
        MESSAGE_DELETE: function(e) {
            let {
                id: t,
                channelId: n
            } = e, i = p[n];
            if (null == i) return !1;
            let s = E.default.castChannelIdAsMessageId(n) !== t,
                r = !m.has(t);
            v(i, e => {
                var n;
                let i = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
                null != i && i.id === t && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count = s && r ? Math.max(e.count - 1, 0) : e.count, m.add(t)
            })
        },
        MESSAGE_DELETE_BULK: function(e) {
            let {
                ids: t,
                channelId: n
            } = e, i = p[n];
            if (null == i) return !1;
            let s = t.filter(e => {
                let t = E.default.castChannelIdAsMessageId(n) !== e,
                    i = !m.has(e);
                return t && i
            }).length;
            s > 0 && v(i, e => {
                var n;
                let i = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
                null != i && t.includes(i.id) && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count -= s, t.forEach(e => m.add(e))
            })
        },
        LOAD_MESSAGES_SUCCESS: function(e) {
            let t = !1;
            for (let n of e.messages) t = C(n.thread) || t;
            if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
            let n = _.default.getChannel(e.channelId);
            if (null == n || !u.THREAD_CHANNEL_TYPES.has(n.type)) return t;
            T(n, t => {
                if (0 === e.messages.length) t.mostRecentRawMessage = null, t.mostRecentMessage = null, t.count = 0;
                else {
                    var n;
                    let i = null !== (n = e.messages[0]) && void 0 !== n ? n : null;
                    t.count = e.messages.length >= h.MAX_THREAD_MESSAGE_COUNT ? h.MAX_THREAD_MESSAGE_COUNT : t.count, (null == i ? void 0 : i.type) !== g.MessageTypes.THREAD_STARTER_MESSAGE && (t.mostRecentRawMessage = i, t.mostRecentMessage = null)
                }
            })
        },
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            let {
                data: t
            } = e, n = !1;
            for (let e of (0, o.getThreadsFromGuildFeedFetch)(t)) n = C(e) || n;
            return n
        }
    })
}