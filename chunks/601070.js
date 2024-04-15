function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("653041");
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("570140"),
        _ = n("131704"),
        c = n("592125"),
        E = n("430824"),
        I = n("306680"),
        T = n("944486"),
        f = n("709054"),
        S = n("344185"),
        A = n("569471"),
        h = n("819168"),
        m = n("176505");
    let N = {},
        O = {},
        p = {},
        R = {},
        C = {},
        g = {},
        L = null,
        D = {};

    function v() {
        for (let e in N = {}, C = {}, O = {}, p = {}, R = {}, L = T.default.getChannelId(), D) clearTimeout(D[e]);
        D = {}, S.default.forEachGuild(e => {
            y(e)
        }), P()
    }

    function M(e) {
        for (let t in delete N[e], delete C[e], delete O[e], delete p[e], delete R[e], y(e), p[e]) b(e, t)
    }

    function y(e) {
        let t = S.default.getThreadsForGuild(e);
        for (let e in t)
            for (let n in t[e]) {
                Y(n);
                let e = c.default.getChannel(n);
                if (null == e) continue;
                let t = A.default.joinTimestamp(n);
                if (null != t) {
                    let n = {
                            channel: e,
                            joinTimestamp: t.getTime()
                        },
                        {
                            isUnread: i,
                            isRelevant: r,
                            isTimedRelevant: s
                        } = x(e);
                    j(N, e, n, !1), j(C, e, r ? n : null, !1), j(O, e, i ? n : null, !1), s && H(e, !0)
                } else {
                    j(p, e, e, !1);
                    let t = I.default.isForumPostUnread(e.id);
                    j(R, e, t ? e : null, !1)
                }
            }
    }

    function P() {
        for (let e in g = {}, p)
            for (let t in p[e]) b(e, t)
    }

    function U(e) {
        let t = c.default.getBasicChannel(e);
        null != t && _.THREADED_CHANNEL_TYPES.has(t.type) && b(t.guild_id, t.id)
    }

    function b(e, t) {
        let n = c.default.getChannel(t);
        if (null == n || !n.isForumLikeChannel()) return;
        if (null == g[e] && (g[e] = {}), g[e][t] = 0, null == p[e] || null == p[e][t]) return;
        let i = E.default.getGuild(e);
        if (null == i) return;
        let r = I.default.getTrackedAckMessageId(t);
        if (null == r) {
            let e = Date.now();
            null != i.joinedAt && (i.joinedAt instanceof Date ? e = i.joinedAt.getTime() : "string" == typeof i.joinedAt && (e = new Date(i.joinedAt).getTime())), r = f.default.fromTimestamp(e)
        }
        for (let n in p[e][t]) t === L ? I.default.isNewForumThread(n, t, i) && g[e][t]++ : f.default.compare(n, r) > 0 && !I.default.hasOpenedThread(n) && g[e][t]++
    }

    function G(e, t, n) {
        if (null == t) return !1;
        let i = c.default.getChannel(n),
            r = A.default.joinTimestamp(n);
        if (null != i && S.default.isActive(e, t, n)) {
            if (null != r) {
                let e = {
                        channel: i,
                        joinTimestamp: r.getTime()
                    },
                    {
                        isUnread: t,
                        isRelevant: n,
                        isTimedRelevant: s
                    } = x(i);
                j(N, i, e, !0), j(C, i, n ? e : null, !0), j(O, i, t ? e : null, !0), j(p, i, null, !0), j(R, i, null, !0), H(i, s)
            } else {
                let e = I.default.isForumPostUnread(i.id);
                j(N, i, null, !0), j(O, i, null, !0), j(C, i, null, !0), j(p, i, i, !0), j(R, i, e ? i : null, !0), Y(i.id)
            }
            b(e, t)
        } else W(N, e, t, n), W(C, e, t, n), W(O, e, t, n), W(p, e, t, n), W(R, e, t, n), Y(n), b(e, t)
    }

    function w(e) {
        return G(e.channel.guild_id, e.channel.parent_id, e.channel.id)
    }

    function B(e) {
        let t = c.default.getChannel(e.id);
        return !!(null != t && S.default.isActive(e.guildId, t.parent_id, e.id)) && G(t.guild_id, t.parent_id, t.id)
    }

    function k(e) {
        let t = c.default.getChannel(e.channelId);
        if (null == t) F();
        else {
            let {
                guild_id: e,
                parent_id: i
            } = t;
            if (!_.THREAD_CHANNEL_TYPES.has(t.type)) {
                var n;
                return !!(Number(null === (n = g[e]) || void 0 === n ? void 0 : n[t.id]) > 0) && (b(e, t.id), !0)
            }
            if (null == i) return !1;
            if (K(N, t)) {
                let {
                    isUnread: n,
                    isRelevant: r,
                    isTimedRelevant: s
                } = x(t);
                H(t, s);
                let a = K(O, t),
                    o = K(C, t);
                if (n === a && r === o) return !1;
                let l = N[e][i][t.id],
                    u = n ? l : null,
                    d = r ? l : null;
                j(O, t, u, !0), j(C, t, d, !0), b(e, i)
            } else {
                let e = K(R, t),
                    n = I.default.isForumPostUnread(t.id);
                if (n === e) return !1;
                j(R, t, n ? t : null, !0)
            }
        }
    }

    function F() {
        for (let e in O = {}, C = {}, N)
            for (let t in N[e])
                for (let n in N[e][t]) {
                    let i = N[e][t][n],
                        {
                            isUnread: r,
                            isRelevant: s,
                            isTimedRelevant: a
                        } = x(i.channel);
                    r && j(O, i.channel, i, !1), s && j(C, i.channel, i, !1), H(i.channel, a)
                }
        for (let e in R = {}, p)
            for (let t in p[e])
                for (let n in p[e][t]) {
                    let i = p[e][t][n];
                    I.default.isForumPostUnread(n) && j(R, i, i, !1)
                }
        P()
    }

    function V() {
        let e = L;
        if ((L = T.default.getChannelId()) === e) return !1;
        U(e), U(L)
    }

    function x(e) {
        let t = I.default.getMentionCount(e.id) > 0,
            n = I.default.hasUnread(e.id) && (!A.default.isMuted(e.id) || t),
            i = e.hasFlag(m.ChannelFlags.PINNED),
            r = e.isActiveThread(),
            s = r && (0, h.default)(e) > Date.now();
        return {
            isUnread: (r || i) && n,
            isRelevant: s || i || n,
            isTimedRelevant: s
        }
    }

    function H(e, t) {
        Y(e.id), t && function(e) {
            D[e.id] = setTimeout(() => {
                let t = c.default.getChannel(e.id);
                null != t && d.default.dispatch({
                    type: "THREAD_UPDATE",
                    channel: t
                })
            }, (0, h.default)(e) - Date.now() + 1)
        }(e)
    }

    function Y(e) {
        e in D && (clearTimeout(D[e]), delete D[e])
    }

    function j(e, t, n, i) {
        let {
            guild_id: r,
            parent_id: s,
            id: a
        } = t;
        null != r && null != s && null != a && (!(r in e) && (e[r] = {}), !(s in e[r]) && (e[r][s] = {}), i && (e[r] = {
            ...e[r],
            [s]: {
                ...e[r][s]
            }
        }), null === n ? (delete e[r][s][a], l().isEmpty(e[r][s]) && delete e[r][s]) : e[r][s][a] = n)
    }

    function W(e, t, n, i) {
        if (null != t && null != n && null != i) z(e, t, n, i) && (e[t] = {
            ...e[t],
            [n]: {
                ...e[t][n]
            }
        }, delete e[t][n][i], l().isEmpty(e[t][n]) && delete e[t][n])
    }

    function K(e, t) {
        return z(e, t.guild_id, t.parent_id, t.id)
    }

    function z(e, t, n, i) {
        return t in e && n in e[t] && i in e[t][n]
    }
    let X = {},
        Q = {},
        q = {},
        Z = {},
        J = {};
    class $ extends(i = u.default.Store) {
        initialize() {
            this.waitFor(S.default, c.default, A.default, I.default), this.syncWith([T.default], V)
        }
        hasActiveJoinedUnreadThreads(e, t) {
            return e in O && t in O[e]
        }
        getActiveUnjoinedThreadsForParent(e, t) {
            var n;
            return e in p && null !== (n = p[e][t]) && void 0 !== n ? n : Z
        }
        getActiveJoinedThreadsForParent(e, t) {
            var n;
            return e in N && null !== (n = N[e][t]) && void 0 !== n ? n : q
        }
        getActiveJoinedThreadsForGuild(e) {
            var t;
            return null !== (t = N[e]) && void 0 !== t ? t : X
        }
        getActiveJoinedUnreadThreadsForGuild(e) {
            var t;
            return null !== (t = O[e]) && void 0 !== t ? t : X
        }
        getActiveJoinedUnreadThreadsForParent(e, t) {
            var n;
            return null !== (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : q
        }
        getActiveJoinedRelevantThreadsForGuild(e) {
            var t;
            return null !== (t = C[e]) && void 0 !== t ? t : X
        }
        getActiveJoinedRelevantThreadsForParent(e, t) {
            var n;
            return null !== (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) && void 0 !== n ? n : q
        }
        getActiveUnjoinedThreadsForGuild(e) {
            var t;
            return null !== (t = p[e]) && void 0 !== t ? t : Q
        }
        getActiveUnjoinedUnreadThreadsForGuild(e) {
            var t;
            return null !== (t = R[e]) && void 0 !== t ? t : X
        }
        getActiveUnjoinedUnreadThreadsForParent(e, t) {
            var n;
            return null !== (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : q
        }
        getNewThreadCountsForGuild(e) {
            var t;
            return null !== (t = g[e]) && void 0 !== t ? t : J
        }
        computeAllActiveJoinedThreads(e) {
            let t = [];
            for (let n in N)
                if (n === e || null == e)
                    for (let e in N[n])
                        for (let i in N[n][e]) t.push(N[n][e][i].channel);
            return t
        }
        getNewThreadCount(e, t) {
            var n, i;
            return null !== (i = null === (n = g[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== i ? i : 0
        }
        getActiveThreadCount(e, t) {
            var n, i, r, s;
            let a = l().size(null !== (r = null === (n = N[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : {});
            return a + l().size(null !== (s = null === (i = p[e]) || void 0 === i ? void 0 : i[t]) && void 0 !== s ? s : {})
        }
    }
    a = "ActiveJoinedThreadsStore", (s = "displayName") in(r = $) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new $(d.default, {
        CONNECTION_OPEN: v,
        OVERLAY_INITIALIZE: v,
        THREAD_LIST_SYNC: function(e) {
            let {
                guildId: t
            } = e;
            return M(t)
        },
        LOAD_THREADS_SUCCESS: v,
        LOAD_ARCHIVED_THREADS_SUCCESS: v,
        SEARCH_FINISH: v,
        MOD_VIEW_SEARCH_FINISH: v,
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            return M(t.id)
        },
        GUILD_DELETE: v,
        CURRENT_USER_UPDATE: v,
        THREAD_CREATE: w,
        THREAD_UPDATE: w,
        THREAD_DELETE: w,
        CHANNEL_UPDATES: function(e) {
            let {
                channels: t
            } = e;
            for (let e of t)
                if (e.isNSFW() !== function(e, t) {
                        if (null == t) return !1;
                        let n = N[e],
                            i = null == n ? null : n[t];
                        if (null != i) {
                            for (let e in i)
                                if (i[e].channel.isNSFW()) return !0
                        }
                        let r = p[e],
                            s = null == r ? null : r[t];
                        if (null != s) {
                            for (let e in s)
                                if (s[e].isNSFW()) return !0
                        }
                        return !1
                    }(e.guild_id, e.parent_id)) {
                    v();
                    return
                } return !1
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e, n = !1;
            return null != t.guild_id && null != t.parent_id && (t.guild_id in N && t.parent_id in N[t.guild_id] && (delete N[t.guild_id][t.parent_id], n = !0), t.guild_id in O && t.parent_id in O[t.guild_id] && (delete O[t.guild_id][t.parent_id], n = !0), t.guild_id in C && t.parent_id in C[t.guild_id] && (f.default.keys(C[t.guild_id][t.parent_id]).forEach(Y), delete C[t.guild_id][t.parent_id], n = !0), t.guild_id in p && t.parent_id in p[t.guild_id] && (delete p[t.guild_id][t.parent_id], n = !0), t.guild_id in R && t.parent_id in R[t.guild_id] && (delete R[t.guild_id][t.parent_id], n = !0), n && b(t.guild_id, t.parent_id)), n
        },
        THREAD_MEMBER_UPDATE: B,
        THREAD_MEMBERS_UPDATE: B,
        LOAD_MESSAGES_SUCCESS: k,
        MESSAGE_CREATE: k,
        MESSAGE_DELETE: k,
        MESSAGE_DELETE_BULK: k,
        MESSAGE_ACK: k,
        CHANNEL_ACK: k,
        CHANNEL_LOCAL_ACK: k,
        CHANNEL_SELECT: function(e) {
            k(e), V()
        },
        PASSIVE_UPDATE_V1: function(e) {
            null != e.channels && F()
        },
        WINDOW_FOCUS: F,
        UPDATE_CHANNEL_DIMENSIONS: F,
        DRAWER_OPEN: F,
        DRAWER_CLOSE: F,
        BULK_ACK: F
    })
}