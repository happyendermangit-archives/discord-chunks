function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("392711"),
        i = n.n(o),
        a = n("898511"),
        u = n("629815"),
        s = n("569492"),
        l = n("935741"),
        c = n("306912"),
        f = n("879547"),
        d = n("894288"),
        _ = n("523018"),
        E = n("147071"),
        p = n("956774"),
        m = n("582890"),
        y = n("928204");

    function I(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function O(e) {
        return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function T(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                h(e, t, n[t])
            })
        }
        return e
    }

    function S(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function v(e, t) {
        return (v = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var g = {},
        A = {},
        b = {},
        N = {},
        R = {},
        C = {},
        P = null,
        D = {};

    function L() {
        for (var e in g = {}, R = {}, A = {}, b = {}, N = {}, P = d.default.getChannelId(), D) clearTimeout(D[e]);
        D = {}, E.default.forEachGuild(function(e) {
            U(e)
        }), w()
    }

    function M(e) {
        for (var t in delete g[e], delete R[e], delete A[e], delete b[e], delete N[e], U(e), b[e]) G(e, t)
    }

    function U(e) {
        var t = E.default.getThreadsForGuild(e);
        for (var n in t)
            for (var r in t[n]) {
                K(r);
                var o = l.default.getChannel(r);
                if (null != o) {
                    var i = p.default.joinTimestamp(r);
                    if (null != i) {
                        var a = {
                                channel: o,
                                joinTimestamp: i.getTime()
                            },
                            u = Y(o),
                            s = u.isUnread,
                            c = u.isRelevant,
                            d = u.isTimedRelevant;
                        z(g, o, a, !1), z(R, o, c ? a : null, !1), z(A, o, s ? a : null, !1), d && W(o, !0)
                    } else {
                        z(b, o, o, !1);
                        var _ = f.default.isForumPostUnread(o.id);
                        z(N, o, _ ? o : null, !1)
                    }
                }
            }
    }

    function w() {
        for (var e in C = {}, b)
            for (var t in b[e]) G(e, t)
    }

    function k(e) {
        var t = l.default.getBasicChannel(e);
        null != t && s.THREADED_CHANNEL_TYPES.has(t.type) && G(t.guild_id, t.id)
    }

    function G(e, t) {
        var n = l.default.getChannel(t);
        if (null == n || !n.isForumLikeChannel()) return;
        if (null == C[e] && (C[e] = {}), C[e][t] = 0, null != b[e] && null != b[e][t]) {
            var r = c.default.getGuild(e);
            if (null != r) {
                var o = f.default.getTrackedAckMessageId(t);
                if (null == o) {
                    var i, a, u = Date.now();
                    if (null != r.joinedAt) {
                        ;
                        if (i = r.joinedAt, null != (a = Date) && "undefined" != typeof Symbol && a[Symbol.hasInstance] ? !!a[Symbol.hasInstance](i) : i instanceof a) u = r.joinedAt.getTime();
                        else "string" == typeof r.joinedAt && (u = new Date(r.joinedAt).getTime())
                    }
                    o = _.default.fromTimestamp(u)
                }
                for (var s in b[e][t]) t === P ? f.default.isNewForumThread(s, t, r) && C[e][t]++ : _.default.compare(s, o) > 0 && !f.default.hasOpenedThread(s) && C[e][t]++
            }
        }
    }

    function B(e, t, n) {
        if (null == t) return !1;
        var r = l.default.getChannel(n),
            o = p.default.joinTimestamp(n);
        if (null != r && E.default.isActive(e, t, n)) {
            if (null != o) {
                var i = {
                        channel: r,
                        joinTimestamp: o.getTime()
                    },
                    a = Y(r),
                    u = a.isUnread,
                    s = a.isRelevant,
                    c = a.isTimedRelevant;
                z(g, r, i, !0), z(R, r, s ? i : null, !0), z(A, r, u ? i : null, !0), z(b, r, null, !0), z(N, r, null, !0), W(r, c)
            } else {
                var d = f.default.isForumPostUnread(r.id);
                z(g, r, null, !0), z(A, r, null, !0), z(R, r, null, !0), z(b, r, r, !0), z(N, r, d ? r : null, !0), K(r.id)
            }
            G(e, t)
        } else X(g, e, t, n), X(R, e, t, n), X(A, e, t, n), X(b, e, t, n), X(N, e, t, n), K(n), G(e, t)
    }

    function j(e) {
        return B(e.channel.guild_id, e.channel.parent_id, e.channel.id)
    }

    function F(e) {
        var t = l.default.getChannel(e.id);
        return !!(null != t && E.default.isActive(e.guildId, t.parent_id, e.id)) && B(t.guild_id, t.parent_id, t.id)
    }

    function V(e) {
        var t = l.default.getChannel(e.channelId);
        if (null == t) H();
        else {
            var n, r = t.guild_id,
                o = t.parent_id;
            if (!s.THREAD_CHANNEL_TYPES.has(t.type)) return !!(Number(null === (n = C[r]) || void 0 === n ? void 0 : n[t.id]) > 0) && (G(r, t.id), !0);
            if (null == o) return !1;
            if (q(g, t)) {
                var i = Y(t),
                    a = i.isUnread,
                    u = i.isRelevant;
                W(t, i.isTimedRelevant);
                var c = q(A, t),
                    d = q(R, t);
                if (a === c && u === d) return !1;
                var _ = g[r][o][t.id],
                    E = a ? _ : null,
                    p = u ? _ : null;
                z(A, t, E, !0), z(R, t, p, !0), G(r, o)
            } else {
                var m = q(N, t),
                    y = f.default.isForumPostUnread(t.id);
                if (y === m) return !1;
                z(N, t, y ? t : null, !0)
            }
        }
    }

    function H() {
        for (var e in A = {}, R = {}, g)
            for (var t in g[e])
                for (var n in g[e][t]) {
                    var r = g[e][t][n],
                        o = Y(r.channel),
                        i = o.isUnread,
                        a = o.isRelevant,
                        u = o.isTimedRelevant;
                    i && z(A, r.channel, r, !1), a && z(R, r.channel, r, !1), W(r.channel, u)
                }
        for (var s in N = {}, b)
            for (var l in b[s])
                for (var c in b[s][l]) {
                    var d = b[s][l][c];
                    f.default.isForumPostUnread(c) && z(N, d, d, !1)
                }
        w()
    }

    function x() {
        var e = P;
        if ((P = d.default.getChannelId()) === e) return !1;
        k(e), k(P)
    }

    function Y(e) {
        var t = f.default.getMentionCount(e.id) > 0,
            n = f.default.hasUnread(e.id) && (!p.default.isMuted(e.id) || t),
            r = e.hasFlag(y.ChannelFlags.PINNED),
            o = e.isActiveThread(),
            i = o && (0, m.default)(e) > Date.now();
        return {
            isUnread: (o || r) && n,
            isRelevant: i || r || n,
            isTimedRelevant: i
        }
    }

    function W(e, t) {
        K(e.id), t && function(e) {
            D[e.id] = setTimeout(function() {
                var t = l.default.getChannel(e.id);
                null != t && u.default.dispatch({
                    type: "THREAD_UPDATE",
                    channel: t
                })
            }, (0, m.default)(e) - Date.now() + 1)
        }(e)
    }

    function K(e) {
        e in D && (clearTimeout(D[e]), delete D[e])
    }

    function z(e, t, n, r) {
        var o = t.guild_id,
            a = t.parent_id,
            u = t.id;
        null != o && null != a && null != u && (!(o in e) && (e[o] = {}), !(a in e[o]) && (e[o][a] = {}), r && (e[o] = S(T({}, e[o]), h({}, a, T({}, e[o][a])))), null === n ? (delete e[o][a][u], i().isEmpty(e[o][a]) && delete e[o][a]) : e[o][a][u] = n)
    }

    function X(e, t, n, r) {
        if (null != t && null != n && null != r) Q(e, t, n, r) && (e[t] = S(T({}, e[t]), h({}, n, T({}, e[t][n]))), delete e[t][n][r], i().isEmpty(e[t][n]) && delete e[t][n])
    }

    function q(e, t) {
        return Q(e, t.guild_id, t.parent_id, t.id)
    }

    function Q(e, t, n, r) {
        return t in e && n in e[t] && r in e[t][n]
    }
    var J = {},
        Z = {},
        $ = {},
        ee = {},
        et = {},
        en = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && v(e, t)
            }(s, e);
            var t, n, r, o, a, u = (t = s, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = O(t);
                if (n) {
                    var a = O(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function s() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, s), u.apply(this, arguments)
            }
            return r = s, o = [{
                key: "initialize",
                value: function() {
                    this.waitFor(E.default, l.default, p.default, f.default), this.syncWith([d.default], x)
                }
            }, {
                key: "hasActiveJoinedUnreadThreads",
                value: function(e, t) {
                    return e in A && t in A[e]
                }
            }, {
                key: "getActiveUnjoinedThreadsForParent",
                value: function(e, t) {
                    var n;
                    return e in b && null !== (n = b[e][t]) && void 0 !== n ? n : ee
                }
            }, {
                key: "getActiveJoinedThreadsForParent",
                value: function(e, t) {
                    var n;
                    return e in g && null !== (n = g[e][t]) && void 0 !== n ? n : $
                }
            }, {
                key: "getActiveJoinedThreadsForGuild",
                value: function(e) {
                    var t;
                    return null !== (t = g[e]) && void 0 !== t ? t : J
                }
            }, {
                key: "getActiveJoinedUnreadThreadsForGuild",
                value: function(e) {
                    var t;
                    return null !== (t = A[e]) && void 0 !== t ? t : J
                }
            }, {
                key: "getActiveJoinedUnreadThreadsForParent",
                value: function(e, t) {
                    var n;
                    return null !== (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : $
                }
            }, {
                key: "getActiveJoinedRelevantThreadsForGuild",
                value: function(e) {
                    var t;
                    return null !== (t = R[e]) && void 0 !== t ? t : J
                }
            }, {
                key: "getActiveJoinedRelevantThreadsForParent",
                value: function(e, t) {
                    var n;
                    return null !== (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) && void 0 !== n ? n : $
                }
            }, {
                key: "getActiveUnjoinedThreadsForGuild",
                value: function(e) {
                    var t;
                    return null !== (t = b[e]) && void 0 !== t ? t : Z
                }
            }, {
                key: "getActiveUnjoinedUnreadThreadsForGuild",
                value: function(e) {
                    var t;
                    return null !== (t = N[e]) && void 0 !== t ? t : J
                }
            }, {
                key: "getActiveUnjoinedUnreadThreadsForParent",
                value: function(e, t) {
                    var n;
                    return null !== (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : $
                }
            }, {
                key: "getNewThreadCountsForGuild",
                value: function(e) {
                    var t;
                    return null !== (t = C[e]) && void 0 !== t ? t : et
                }
            }, {
                key: "computeAllActiveJoinedThreads",
                value: function(e) {
                    var t = [];
                    for (var n in g)
                        if (n === e || null == e)
                            for (var r in g[n])
                                for (var o in g[n][r]) t.push(g[n][r][o].channel);
                    return t
                }
            }, {
                key: "getNewThreadCount",
                value: function(e, t) {
                    var n, r;
                    return null !== (r = null === (n = C[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : 0
                }
            }, {
                key: "getActiveThreadCount",
                value: function(e, t) {
                    var n, r, o, a;
                    return i().size(null !== (o = null === (n = g[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== o ? o : {}) + i().size(null !== (a = null === (r = b[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== a ? a : {})
                }
            }], I(r.prototype, o), a && I(r, a), s
        }(a.default.Store);
    h(en, "displayName", "ActiveJoinedThreadsStore"), t.default = new en(u.default, {
        CONNECTION_OPEN: L,
        OVERLAY_INITIALIZE: L,
        THREAD_LIST_SYNC: function(e) {
            return M(e.guildId)
        },
        LOAD_THREADS_SUCCESS: L,
        LOAD_ARCHIVED_THREADS_SUCCESS: L,
        SEARCH_FINISH: L,
        MOD_VIEW_SEARCH_FINISH: L,
        GUILD_CREATE: function(e) {
            return M(e.guild.id)
        },
        GUILD_DELETE: L,
        CURRENT_USER_UPDATE: L,
        THREAD_CREATE: j,
        THREAD_UPDATE: j,
        THREAD_DELETE: j,
        CHANNEL_UPDATES: function(e) {
            var t = e.channels,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    if (u.isNSFW() !== function(e, t) {
                            if (null == t) return !1;
                            var n = g[e],
                                r = null == n ? null : n[t];
                            if (null != r) {
                                for (var o in r)
                                    if (r[o].channel.isNSFW()) return !0
                            }
                            var i = b[e],
                                a = null == i ? null : i[t];
                            if (null != a) {
                                for (var u in a)
                                    if (a[u].isNSFW()) return !0
                            }
                            return !1
                        }(u.guild_id, u.parent_id)) {
                        L();
                        return
                    }
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != a.return && a.return()
                } finally {
                    if (r) throw o
                }
            }
            return !1
        },
        CHANNEL_DELETE: function(e) {
            var t = e.channel,
                n = !1;
            return null != t.guild_id && null != t.parent_id && (t.guild_id in g && t.parent_id in g[t.guild_id] && (delete g[t.guild_id][t.parent_id], n = !0), t.guild_id in A && t.parent_id in A[t.guild_id] && (delete A[t.guild_id][t.parent_id], n = !0), t.guild_id in R && t.parent_id in R[t.guild_id] && (_.default.keys(R[t.guild_id][t.parent_id]).forEach(K), delete R[t.guild_id][t.parent_id], n = !0), t.guild_id in b && t.parent_id in b[t.guild_id] && (delete b[t.guild_id][t.parent_id], n = !0), t.guild_id in N && t.parent_id in N[t.guild_id] && (delete N[t.guild_id][t.parent_id], n = !0), n && G(t.guild_id, t.parent_id)), n
        },
        THREAD_MEMBER_UPDATE: F,
        THREAD_MEMBERS_UPDATE: F,
        LOAD_MESSAGES_SUCCESS: V,
        MESSAGE_CREATE: V,
        MESSAGE_DELETE: V,
        MESSAGE_DELETE_BULK: V,
        MESSAGE_ACK: V,
        CHANNEL_ACK: V,
        CHANNEL_LOCAL_ACK: V,
        CHANNEL_SELECT: function(e) {
            V(e), x()
        },
        PASSIVE_UPDATE_V1: function(e) {
            null != e.channels && H()
        },
        WINDOW_FOCUS: H,
        UPDATE_CHANNEL_DIMENSIONS: H,
        DRAWER_OPEN: H,
        DRAWER_CLOSE: H,
        BULK_ACK: H
    })
}