function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("392711"),
        o = n.n(r);
    n("895517"), n("735579");
    var i = n("656719"),
        a = n("914535"),
        u = n("956774"),
        s = n("526514"),
        l = n("569492"),
        c = n("523018"),
        f = n("217014"),
        d = n("935741"),
        _ = n("306912"),
        E = n("29884"),
        p = n("879547"),
        m = n("894288"),
        y = n("837133"),
        I = n("848957"),
        h = n("208454"),
        O = n("281767"),
        T = n("928204"),
        S = n("24729");

    function v(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function g(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function A(e) {
        return (A = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function b(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                g(e, t, n[t])
            })
        }
        return e
    }

    function N(e, t) {
        return (N = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var R = O.NULL_STRING_GUILD_ID,
        C = {},
        P = new Set,
        D = 0;

    function L(e) {
        var t, n = C[null != e ? e : R];
        return {
            unread: !1,
            unreadByType: {},
            unreadChannelId: null,
            mentionCount: 0,
            mentionCounts: {},
            ncMentionCount: 0,
            sentinel: null !== (t = null == n ? void 0 : n.sentinel) && void 0 !== t ? t : 0
        }
    }

    function M(e) {
        var t;
        return C[null != e ? e : R] = null !== (t = C[null != e ? e : R]) && void 0 !== t ? t : L(e)
    }

    function U(e) {
        var t = M(e);
        t.sentinel++, D++
    }

    function w(e, t, n) {
        return null != e.guild_id && n && !((0, l.isThread)(e.type) || I.default.isChannelRecordOrParentOptedIn(e)) && 0 === t
    }

    function k(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !(null == e || e.isGuildVocal() && 0 === t || e.hasFlag(T.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL) || (0 === t || n) && (e.isThread() ? u.default.isMuted(e.id) || I.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id) : I.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)) || !e.isPrivate() && (w(e, t, (0, i.isOptInEnabledForGuild)(e.guild_id)) || !E.default.can(e.accessPermissions, e))) && (t > 0 || I.default.resolveUnreadSetting(e) === S.UnreadSetting.ALL_MESSAGES)
    }

    function G(e) {
        switch (e) {
            case R:
            case null:
            case void 0:
                return null;
            default:
                return e
        }
    }

    function B(e, t) {
        var n = p.default.hasUnread(e, t);
        if (t === S.ReadStateTypes.GUILD_EVENT) return !(I.default.isMuted(e) || I.default.isMuteScheduledEventsEnabled(e)) && n;
        return n
    }

    function j(e, t) {
        var n = L(e);
        return n.mentionCounts = b({}, t.mentionCounts), n.unreadByType = b({}, t.unreadByType), n
    }

    function F(e) {
        return e.unread = Object.values(e.unreadByType).some(function(e) {
            return e
        }), e
    }

    function V(e, t) {}

    function H(e, t, n) {
        if (F(t), t.mentionCount = o()(t.mentionCounts).values().sum(), t.unread !== n.unread || t.mentionCount !== n.mentionCount) return C[null != e ? e : R] = t, null != e && (t.unread ? P.add(e) : P.delete(e)), D++, U(null != e ? e : R), !0;
        return !1
    }

    function x(e, t) {
        var n = G(e),
            r = M(n),
            o = j(n, r),
            i = !1;
        if (t.forEach(function(e) {
                var t = d.default.getChannel(e);
                if (null == t) {
                    delete o.mentionCounts[e];
                    return
                }
                if (t.getGuildId() === n) {
                    var r = p.default.getMentionCount(e);
                    null !== n && !i && p.default.hasUnread(t.id) && k(t, r, !0) && (i = !0, o.unreadChannelId = t.id), r > 0 && k(t, r) ? o.mentionCounts[t.id] = r : delete o.mentionCounts[t.id]
                }
            }), o.unreadByType[S.ReadStateTypes.CHANNEL] = i, o.unreadByType[S.ReadStateTypes.CHANNEL] !== r.unreadByType[S.ReadStateTypes.CHANNEL] && !o.unreadByType[S.ReadStateTypes.CHANNEL]) {
            var a = d.default.getChannel(r.unreadChannelId);
            if (!(null != a && !t.includes(a.id) && p.default.hasUnread(a.id) && k(a))) return W(n);
            null != n && P.add(n), o.unreadByType[S.ReadStateTypes.CHANNEL] = !0
        }
        return H(n, o, r)
    }

    function Y(e, t) {
        if (null != e) {
            var n = M(e),
                r = j(e, n);
            return r.unreadByType[S.ReadStateTypes.GUILD_EVENT] = B(e, t), H(e, r, n)
        }
    }

    function W(e, t) {
        var n = G(e),
            r = L(n);
        if (null == n) {
            var o = d.default.getMutablePrivateChannels();
            for (var s in o) {
                var c = o[s],
                    f = p.default.getMentionCount(s);
                f > 0 && k(c, f) && (r.mentionCount += f, r.mentionCounts[c.id] = f)
            }
        } else {
            var _ = I.default.isMuted(n);
            if (_ && !1 === t) return !1;
            var m = I.default.getMutedChannels(n),
                y = I.default.getChannelOverrides(n),
                h = (0, i.isOptInEnabledForGuild)(n),
                O = d.default.getMutableBasicGuildChannelsForGuild(n);
            for (var v in O) {
                var g = O[v],
                    A = _ || m.has(v) || null != g.parent_id && m.has(g.parent_id),
                    b = r.unreadByType[S.ReadStateTypes.CHANNEL],
                    N = p.default.getGuildChannelUnreadState(g, h, y, A, b),
                    j = N.mentionCount,
                    V = N.unread,
                    H = j > 0;
                if (H || !A) {
                    var x = !b && (!A || H) && V;
                    (x || H) && function(e, t, n) {
                        if ((0, l.isGuildVocalChannelType)(e.type) && 0 === t || !E.default.canBasicChannel((0, l.getBasicAccessPermissions)(e.type), e) || w(e, t, n)) return !1;
                        return !("flags" in e && e.hasFlag(T.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && (t > 0 || I.default.resolveUnreadSetting(e) === S.UnreadSetting.ALL_MESSAGES)
                    }(g, j, h) && (x && (r.unreadByType[S.ReadStateTypes.CHANNEL] = !0, r.unreadChannelId = v), H && (r.mentionCount += j, r.mentionCounts[g.id] = j))
                }
            }
            var Y = a.default.getActiveJoinedThreadsForGuild(n);
            for (var W in Y)
                for (var K in Y[W]) {
                    !r.unreadByType[S.ReadStateTypes.CHANNEL] && p.default.hasUnread(K) && !u.default.isMuted(K) && !_ && (r.unreadByType[S.ReadStateTypes.CHANNEL] = !0, r.unreadChannelId = K);
                    var z = p.default.getMentionCount(K);
                    z > 0 && (r.mentionCount += z, r.mentionCounts[K] = z)
                }!r.unreadByType[S.ReadStateTypes.GUILD_EVENT] && B(n, S.ReadStateTypes.GUILD_EVENT) && (r.unreadByType[S.ReadStateTypes.GUILD_EVENT] = !0)
        }
        F(r);
        var X = M(n);
        if (r.unread !== X.unread || r.mentionCount !== X.mentionCount) return C[null != n ? n : R] = r, null != n && (r.unread ? P.add(n) : P.delete(n)), D++, U(null != n ? n : R), !0;
        return !1
    }

    function K(e) {
        var t = e.guilds;
        C = {}, D = 0, P = new Set, W(null);
        for (var n = t.length, r = 0; r < n; r++) {
            var o = t[r];
            null != o && W(o.id)
        }
    }

    function z(e) {
        var t = e.guilds,
            n = e.readState;
        C = {}, D = 0, P = new Set;
        var r = n.entries.length < 500,
            o = new Set;
        r && n.entries.forEach(function(e) {
            if (null != e.mention_count && e.mention_count > 0) {
                if (null == e.read_state_type || e.read_state_type === S.ReadStateTypes.CHANNEL) {
                    var t;
                    o.add(null === (t = d.default.getChannel(e.id)) || void 0 === t ? void 0 : t.guild_id)
                } else o.add(e.id)
            }
        }), W(null);
        var i = !0,
            a = !1,
            u = void 0;
        try {
            for (var s, l = t[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                var c = s.value;
                W(c.id, r ? o.has(c.id) : void 0)
            }
        } catch (e) {
            a = !0, u = e
        } finally {
            try {
                !i && null != l.return && l.return()
            } finally {
                if (a) throw u
            }
        }
    }

    function X() {
        C = {}, P = new Set, W(null);
        var e = Object.values(_.default.getGuildIds()),
            t = !0,
            n = !1,
            r = void 0;
        try {
            for (var o, i = e[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                var a = o.value;
                W(a)
            }
        } catch (e) {
            n = !0, r = e
        } finally {
            try {
                !t && null != i.return && i.return()
            } finally {
                if (n) throw r
            }
        }
    }

    function q(e) {
        return W(e.guild.id)
    }

    function Q(e) {
        var t = e.guild;
        return null != C[t.id] && (delete C[t.id], P.delete(t.id), D++, !0)
    }

    function J(e) {
        var t = e.channel,
            n = t.id;
        return x(t.guild_id, [n])
    }

    function Z() {
        var e = d.default.getChannel(m.default.getChannelId());
        return null != e && x(e.getGuildId(), [e.id])
    }

    function $(e) {
        var t = e.user,
            n = e.guildId;
        return t.id === f.default.getId() && W(n)
    }

    function ee(e) {
        var t = e.channelId,
            n = d.default.getChannel(t);
        return null != n && x(n.getGuildId(), [n.id])
    }

    function et(e) {
        var t = e.channelId,
            n = d.default.getChannel(t);
        if (null == n) return !1;
        if (null != n.guild_id) {
            var r = M(n.guild_id);
            if (((n.isThread() ? !u.default.hasJoined(n.id) || u.default.isMuted(n.id) : I.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) || r.unreadByType[S.ReadStateTypes.CHANNEL]) && 0 === p.default.getMentionCount(t)) return !1
        }
        return x(n.getGuildId(), [n.id])
    }

    function en(e) {
        var t = e.channelId,
            n = e.guildId;
        return n !== O.FAVORITES && null != t && x(n, [t])
    }

    function er(e) {
        var t = e.channel;
        return x(t.getGuildId(), [t.id])
    }

    function eo(e) {
        var t = e.channels;
        return o()(t).groupBy(function(e) {
            return e.getGuildId()
        }).reduce(function(e, t, n) {
            return x(n, t.map(function(e) {
                return e.id
            })) || e
        }, !1)
    }

    function ei(e) {
        var t = e.channels;
        return o()(t).map(function(e) {
            return e.channelId
        }).filter(function(e) {
            return null != d.default.getChannel(e)
        }).groupBy(function(e) {
            var t;
            return null === (t = d.default.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
        }).reduce(function(e, t, n) {
            return x(n, t) || e
        }, !1)
    }

    function ea(e) {
        var t = e.channel;
        return x(t.getGuildId(), [t.id, t.parent_id])
    }

    function eu(e) {
        return Y(e.guildScheduledEvent.guild_id, S.ReadStateTypes.GUILD_EVENT)
    }

    function es(e) {
        return Y(e.guildScheduledEvent.guild_id, S.ReadStateTypes.GUILD_EVENT)
    }

    function el(e) {
        return Y(e.id, e.ackType)
    }

    function ec(e) {
        var t = e.id;
        return x(e.guildId, [t])
    }

    function ef(e) {
        return (0, s.doesThreadMembersActionAffectMe)(e) && x(e.guildId, [e.id])
    }

    function ed(e) {
        var t = e.threads;
        return x(e.guildId, t.filter(function(e) {
            return u.default.hasJoined(e.id)
        }).map(function(e) {
            return e.id
        }))
    }

    function e_(e) {
        return null != e.channels && x(e.guildId, e.channels.map(function(e) {
            return e.id
        }))
    }

    function eE(e) {
        return W(e.guildId)
    }

    function ep(e) {
        return W(e.guildId)
    }

    function em(e) {
        var t = e.userGuildSettings,
            n = new Set(t.map(function(e) {
                var t;
                return null !== (t = e.guild_id) && void 0 !== t ? t : R
            }));
        return c.default.keys(C).reduce(function(e, t) {
            return n.has(t) && W(t) || e
        }, !1)
    }

    function ey() {
        for (var e in C) C[e].ncMentionCount = 0
    }

    function eI(e) {
        return W(e.guildId)
    }
    var eh = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && N(e, t)
        }(l, e);
        var t, n, r, o, i, s = (t = l, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = A(t);
            if (n) {
                var a = A(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function l() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), e = s.call(this, {
                CONNECTION_OPEN: z,
                OVERLAY_INITIALIZE: K,
                CACHE_LOADED_LAZY: function() {
                    return e.loadCache()
                },
                GUILD_CREATE: q,
                GUILD_DELETE: Q,
                MESSAGE_CREATE: et,
                MESSAGE_ACK: ee,
                BULK_ACK: ei,
                UPDATE_CHANNEL_DIMENSIONS: ee,
                CHANNEL_SELECT: en,
                CHANNEL_DELETE: J,
                WINDOW_FOCUS: Z,
                GUILD_ACK: eE,
                GUILD_ROLE_CREATE: ep,
                GUILD_ROLE_DELETE: ep,
                GUILD_ROLE_UPDATE: ep,
                CHANNEL_CREATE: er,
                CHANNEL_UPDATES: eo,
                THREAD_CREATE: ea,
                THREAD_UPDATE: ea,
                THREAD_DELETE: ea,
                THREAD_LIST_SYNC: ed,
                THREAD_MEMBER_UPDATE: ec,
                THREAD_MEMBERS_UPDATE: ef,
                PASSIVE_UPDATE_V1: e_,
                GUILD_MEMBER_UPDATE: $,
                USER_GUILD_SETTINGS_FULL_UPDATE: em,
                USER_GUILD_SETTINGS_CHANNEL_UPDATE: eI,
                USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: eI,
                USER_GUILD_SETTINGS_GUILD_UPDATE: eI,
                USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: eI,
                GUILD_FEATURE_ACK: el,
                GUILD_SCHEDULED_EVENT_CREATE: eu,
                GUILD_SCHEDULED_EVENT_UPDATE: eu,
                GUILD_SCHEDULED_EVENT_DELETE: es,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: ee,
                LOAD_MESSAGES_SUCCESS: ee,
                CHANNEL_ACK: ee,
                CHANNEL_LOCAL_ACK: ee,
                NOTIFICATION_SETTINGS_UPDATE: X,
                RECOMPUTE_READ_STATES: X,
                VOICE_CHANNEL_SELECT: ee,
                ENABLE_AUTOMATIC_ACK: ee,
                RESORT_THREADS: ee,
                NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: ey,
                TRY_ACK: ee
            })
        }
        return r = l, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(d.default, m.default, p.default, E.default, f.default, h.default, I.default, a.default, u.default)
            }
        }, {
            key: "loadCache",
            value: function() {
                var e = this.readSnapshot(l.LATEST_SNAPSHOT_VERSION);
                null != e && (C = e.guilds, P = new Set(e.unreadGuilds))
            }
        }, {
            key: "takeSnapshot",
            value: function() {
                return {
                    version: l.LATEST_SNAPSHOT_VERSION,
                    data: {
                        guilds: C,
                        unreadGuilds: Array.from(P)
                    }
                }
            }
        }, {
            key: "hasAnyUnread",
            value: function() {
                return P.size > 0
            }
        }, {
            key: "getStoreChangeSentinel",
            value: function() {
                return D
            }
        }, {
            key: "getMutableUnreadGuilds",
            value: function() {
                return P
            }
        }, {
            key: "getMutableGuildStates",
            value: function() {
                return C
            }
        }, {
            key: "hasUnread",
            value: function(e) {
                return P.has(e)
            }
        }, {
            key: "getMentionCount",
            value: function(e) {
                return M(e).mentionCount
            }
        }, {
            key: "getMutableGuildReadState",
            value: function(e) {
                return M(e)
            }
        }, {
            key: "getGuildHasUnreadIgnoreMuted",
            value: function(e) {
                var t = d.default.getMutableGuildChannelsForGuild(e);
                for (var n in t) {
                    var r = t[n];
                    if (null != r) {
                        if ((!r.isGuildVocal() || 0 !== p.default.getMentionCount(n)) && E.default.can(r.accessPermissions, r) && p.default.hasUnread(n)) return !0
                    }
                }
                var o = a.default.getActiveJoinedThreadsForGuild(e);
                for (var i in o) {
                    var u = d.default.getChannel(i);
                    if (null != u && k(u)) {
                        for (var s in o[i])
                            if (p.default.hasUnread(s)) return !0
                    }
                }
                return !!p.default.hasUnread(e, S.ReadStateTypes.GUILD_EVENT) || !1
            }
        }, {
            key: "getTotalMentionCount",
            value: function(e) {
                var t = 0;
                for (var n in C) {
                    var r = C[n];
                    (!0 !== e || n !== R) && (t += r.mentionCount)
                }
                return t
            }
        }, {
            key: "getTotalNotificationsMentionCount",
            value: function(e) {
                var t = 0;
                for (var n in C) {
                    var r = C[n];
                    (!0 !== e || n !== R) && (t += r.ncMentionCount)
                }
                return t
            }
        }, {
            key: "getPrivateChannelMentionCount",
            value: function() {
                var e, t = C[R];
                return null !== (e = null == t ? void 0 : t.mentionCount) && void 0 !== e ? e : 0
            }
        }, {
            key: "getMentionCountForChannels",
            value: function(e, t) {
                var n = 0,
                    r = C[e];
                return null == r ? 0 : (t.forEach(function(e) {
                    var t = r.mentionCounts[e];
                    n += null != t ? t : 0
                }), n)
            }
        }, {
            key: "getGuildChangeSentinel",
            value: function(e) {
                return M(e).sentinel
            }
        }], v(r.prototype, o), i && v(r, i), l
    }(y.default);
    g(eh, "displayName", "GuildReadStateStore"), g(eh, "LATEST_SNAPSHOT_VERSION", 1), t.default = new eh
}