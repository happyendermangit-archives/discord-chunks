function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("570140"),
        _ = n("900489"),
        c = n("786761"),
        E = n("131704"),
        I = n("23750"),
        T = n("598077"),
        f = n("592125"),
        S = n("375954"),
        A = n("709054"),
        h = n("124368"),
        m = n("981631");
    let N = new Set,
        O = {},
        p = {};

    function R(e, t) {
        E.ALL_CHANNEL_TYPES.has(e.type) && C(function(e) {
            if (!(e.id in O)) {
                var t;
                O[e.id] = {
                    guildId: e.guild_id,
                    parentId: e.parent_id,
                    count: null !== (t = e.messageCount) && void 0 !== t ? t : 0,
                    mostRecentRawMessage: null,
                    mostRecentMessage: null
                }
            }
            return O[e.id]
        }(e), t)
    }

    function C(e, t) {
        var n;
        let i = (null !== (n = p[e.parentId]) && void 0 !== n ? n : 0) + 1;
        p[e.parentId] = i, t(e)
    }

    function g(e) {
        var t;
        null === (t = e.threads) || void 0 === t || t.forEach(L)
    }

    function L(e) {
        R(e, t => {
            var n;
            null != e.messageCount && (t.count = e.messageCount);
            let i = null !== (n = t.mostRecentRawMessage) && void 0 !== n ? n : t.mostRecentMessage;
            null != e.lastMessageId && (null == i ? void 0 : i.id) !== e.lastMessageId && (t.mostRecentRawMessage = null, t.mostRecentMessage = null)
        })
    }

    function D(e) {
        if (null != e && !(e.id in O)) {
            let t = f.default.getChannel(e.id);
            if (null != t) return L(t), !0
        }
        return !1
    }

    function v(e) {
        let {
            channel: t
        } = e;
        L(t)
    }

    function M(e) {
        let {
            threads: t
        } = e;
        t.forEach(D)
    }

    function y(e) {
        let {
            messages: t,
            threads: n
        } = e;
        for (let e of t)
            for (let t of e) D(t.thread);
        n.forEach(D)
    }
    class P extends(i = u.default.Store) {
        initialize() {
            this.waitFor(f.default, S.default)
        }
        getCount(e) {
            var t, n;
            return null !== (n = null === (t = O[e]) || void 0 === t ? void 0 : t.count) && void 0 !== n ? n : null
        }
        getMostRecentMessage(e) {
            var t, n;
            let i = O[e];
            return null == i ? null : (null == i.mostRecentMessage && null != i.mostRecentRawMessage && (i.mostRecentMessage = null !== (t = S.default.getMessage(e, i.mostRecentRawMessage.id)) && void 0 !== t ? t : (0, c.createMessageRecord)(i.mostRecentRawMessage), i.mostRecentRawMessage = null), null !== (n = i.mostRecentMessage) && void 0 !== n ? n : null)
        }
        getChannelThreadsVersion(e) {
            return p[e]
        }
        getInitialOverlayState() {
            return O
        }
    }
    a = "ThreadMessageStore", (s = "displayName") in(r = P) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new P(d.default, {
        CONNECTION_OPEN: function(e) {
            p = {}, N.clear(), e.guilds.forEach(g)
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                threadMessages: t
            } = e;
            for (let e in O = {
                    ...t
                }) {
                let n = t[e].mostRecentMessage;
                null != n && (t[e].mostRecentMessage = new I.default({
                    ...n,
                    author: new T.default(n.author)
                }))
            }
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            g(t)
        },
        GUILD_DELETE: function(e) {
            var t;
            let {
                guild: n
            } = e;
            t = n.id, O = l().omitBy(O, e => {
                let n = e.guildId === t;
                return n && delete p[e.parentId], n
            })
        },
        THREAD_CREATE: v,
        THREAD_UPDATE: v,
        THREAD_LIST_SYNC: function(e) {
            let {
                threads: t,
                mostRecentMessages: n
            } = e;
            t.forEach(L), null == n || n.forEach(e => {
                let t = f.default.getChannel(e.channel_id);
                null != t && e.type !== m.MessageTypes.THREAD_STARTER_MESSAGE && R(t, t => {
                    t.mostRecentRawMessage = e, t.mostRecentMessage = null
                })
            })
        },
        LOAD_THREADS_SUCCESS: M,
        LOAD_ARCHIVED_THREADS_SUCCESS: M,
        SEARCH_FINISH: y,
        MOD_VIEW_SEARCH_FINISH: y,
        THREAD_DELETE: function(e) {
            let {
                channel: t
            } = e;
            delete O[t.id]
        },
        CHANNEL_DELETE: function(e) {
            var t;
            let {
                channel: n
            } = e;
            t = n.id, O = l().omitBy(O, e => e.parentId === t), delete p[t]
        },
        MESSAGE_CREATE: function(e) {
            let {
                message: t,
                optimistic: n,
                isPushNotification: i,
                sendMessageOptions: r
            } = e;
            if (n || i || null != r) return !1;
            let s = f.default.getChannel(t.channel_id);
            if (null == s || !E.THREAD_CHANNEL_TYPES.has(s.type) || ! function(e, t) {
                    return !(t.type === m.MessageTypes.THREAD_STARTER_MESSAGE || e.isForumPost() && t.id === A.default.castChannelIdAsMessageId(e.id)) && !0
                }(s, t)) return !1;
            R(s, e => {
                e.count = Math.min(e.count + 1, h.MAX_THREAD_MESSAGE_COUNT), e.mostRecentRawMessage = t, e.mostRecentMessage = null
            })
        },
        MESSAGE_UPDATE: function(e) {
            var t;
            let {
                message: n
            } = e, i = O[n.channel_id], r = null !== (t = null == i ? void 0 : i.mostRecentRawMessage) && void 0 !== t ? t : null == i ? void 0 : i.mostRecentMessage;
            if (null == i || null == r || r.id !== n.id) return !1;
            C(i, e => {
                null != e.mostRecentMessage && (e.mostRecentMessage = (0, c.updateMessageRecord)(e.mostRecentMessage, n)), null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, c.updateServerMessage)(e.mostRecentRawMessage, n))
            })
        },
        MESSAGE_DELETE: function(e) {
            let {
                id: t,
                channelId: n
            } = e, i = O[n];
            if (null == i) return !1;
            let r = A.default.castChannelIdAsMessageId(n) !== t,
                s = !N.has(t);
            C(i, e => {
                var n;
                let i = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
                null != i && i.id === t && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count = r && s ? Math.max(e.count - 1, 0) : e.count, N.add(t)
            })
        },
        MESSAGE_DELETE_BULK: function(e) {
            let {
                ids: t,
                channelId: n
            } = e, i = O[n];
            if (null == i) return !1;
            let r = t.filter(e => {
                let t = A.default.castChannelIdAsMessageId(n) !== e,
                    i = !N.has(e);
                return t && i
            }).length;
            r > 0 && C(i, e => {
                var n;
                let i = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
                null != i && t.includes(i.id) && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count -= r, t.forEach(e => N.add(e))
            })
        },
        LOAD_MESSAGES_SUCCESS: function(e) {
            let t = !1;
            for (let n of e.messages) t = D(n.thread) || t;
            if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
            let n = f.default.getChannel(e.channelId);
            if (null == n || !E.THREAD_CHANNEL_TYPES.has(n.type)) return t;
            R(n, t => {
                if (0 === e.messages.length) t.mostRecentRawMessage = null, t.mostRecentMessage = null, t.count = 0;
                else {
                    var n;
                    let i = null !== (n = e.messages[0]) && void 0 !== n ? n : null;
                    t.count = e.messages.length >= h.MAX_THREAD_MESSAGE_COUNT ? h.MAX_THREAD_MESSAGE_COUNT : t.count, (null == i ? void 0 : i.type) !== m.MessageTypes.THREAD_STARTER_MESSAGE && (t.mostRecentRawMessage = i, t.mostRecentMessage = null)
                }
            })
        },
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            let {
                data: t
            } = e, n = !1;
            for (let e of (0, _.getThreadsFromGuildFeedFetch)(t)) n = D(e) || n;
            return n
        }
    })
}