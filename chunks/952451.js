function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return eE
        }
    }), n("222007"), n("702976"), n("808653");
    var i = n("917351"),
        s = n.n(i);
    n("21121"), n("136511");
    var r = n("512395"),
        a = n("401690"),
        o = n("755624"),
        l = n("526311"),
        u = n("233069"),
        d = n("299039"),
        c = n("271938"),
        f = n("42203"),
        _ = n("305961"),
        h = n("957255"),
        E = n("660478"),
        g = n("18494"),
        m = n("455079"),
        p = n("282109"),
        S = n("697218"),
        v = n("49111"),
        T = n("724210"),
        I = n("133335");
    let C = v.NULL_STRING_GUILD_ID,
        A = {},
        y = new Set,
        N = 0;

    function R(e) {
        var t;
        let n = A[null != e ? e : C];
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

    function O(e) {
        var t;
        return A[null != e ? e : C] = null !== (t = A[null != e ? e : C]) && void 0 !== t ? t : R(e)
    }

    function D(e) {
        let t = O(e);
        t.sentinel++, N++
    }

    function P(e, t, n) {
        let i = e.guild_id;
        return null != i && n && !((0, u.isThread)(e.type) || p.default.isChannelRecordOrParentOptedIn(e)) && 0 === t
    }

    function M(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e || e.isGuildVocal() && 0 === t || e.hasFlag(T.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) return !1;
        if (0 === t || n) {
            let t = e.isThread() ? o.default.isMuted(e.id) || p.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id) : p.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
            if (t) return !1
        }
        return !(!e.isPrivate() && (P(e, t, (0, r.isOptInEnabledForGuild)(e.guild_id)) || !h.default.can(e.accessPermissions, e))) && (t > 0 || p.default.resolveUnreadSetting(e) === I.UnreadSetting.ALL_MESSAGES)
    }

    function L(e) {
        switch (e) {
            case C:
            case null:
            case void 0:
                return null;
            default:
                return e
        }
    }

    function b(e, t) {
        let n = E.default.hasUnread(e, t);
        if (t === I.ReadStateTypes.GUILD_EVENT) return !(p.default.isMuted(e) || p.default.isMuteScheduledEventsEnabled(e)) && n;
        return n
    }

    function U(e, t) {
        let n = R(e);
        return n.mentionCounts = {
            ...t.mentionCounts
        }, n.unreadByType = {
            ...t.unreadByType
        }, n
    }

    function w(e) {
        return e.unread = Object.values(e.unreadByType).some(e => e), e
    }

    function k(e, t) {}

    function V(e, t, n) {
        if (w(t), t.mentionCount = s(t.mentionCounts).values().sum(), t.unread !== n.unread || t.mentionCount !== n.mentionCount) return A[null != e ? e : C] = t, null != e && (t.unread ? y.add(e) : y.delete(e)), N++, D(null != e ? e : C), !0;
        return !1
    }

    function G(e, t) {
        let n = L(e),
            i = O(n),
            s = U(n, i),
            r = !1;
        if (t.forEach(e => {
                let t = f.default.getChannel(e);
                if (null == t) {
                    delete s.mentionCounts[e];
                    return
                }
                if (t.getGuildId() !== n) return;
                let i = E.default.getMentionCount(e);
                null !== n && !r && E.default.hasUnread(t.id) && M(t, i, !0) && (r = !0, s.unreadChannelId = t.id), i > 0 && M(t, i) ? s.mentionCounts[t.id] = i : delete s.mentionCounts[t.id]
            }), s.unreadByType[I.ReadStateTypes.CHANNEL] = r, s.unreadByType[I.ReadStateTypes.CHANNEL] !== i.unreadByType[I.ReadStateTypes.CHANNEL] && !s.unreadByType[I.ReadStateTypes.CHANNEL]) {
            let e = f.default.getChannel(i.unreadChannelId);
            if (!(null != e && !t.includes(e.id) && E.default.hasUnread(e.id) && M(e))) return x(n);
            null != n && y.add(n), s.unreadByType[I.ReadStateTypes.CHANNEL] = !0
        }
        return V(n, s, i)
    }

    function F(e, t) {
        if (null == e) return;
        let n = O(e),
            i = U(e, n);
        return i.unreadByType[I.ReadStateTypes.GUILD_EVENT] = b(e, t), V(e, i, n)
    }

    function x(e, t) {
        let n = L(e),
            i = R(n);
        if (null == n) {
            let e = f.default.getMutablePrivateChannels();
            for (let t in e) {
                let n = e[t],
                    s = E.default.getMentionCount(t);
                s > 0 && M(n, s) && (i.mentionCount += s, i.mentionCounts[n.id] = s)
            }
        } else {
            let e = p.default.isMuted(n);
            if (e && !1 === t) return !1;
            let s = p.default.getMutedChannels(n),
                l = p.default.getChannelOverrides(n),
                d = (0, r.isOptInEnabledForGuild)(n),
                c = f.default.getMutableBasicGuildChannelsForGuild(n);
            for (let t in c) {
                let n = c[t],
                    r = e || s.has(t) || null != n.parent_id && s.has(n.parent_id),
                    a = i.unreadByType[I.ReadStateTypes.CHANNEL],
                    {
                        mentionCount: o,
                        unread: f
                    } = E.default.getGuildChannelUnreadState(n, d, l, r, a),
                    _ = o > 0;
                if (!_ && r) continue;
                let g = !a && (!r || _) && f;
                if (g || _) {
                    let e = function(e, t, n) {
                        if ((0, u.isGuildVocalChannelType)(e.type) && 0 === t || !h.default.canBasicChannel((0, u.getBasicAccessPermissions)(e.type), e) || P(e, t, n)) return !1;
                        return !("flags" in e && e.hasFlag(T.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && (t > 0 || p.default.resolveUnreadSetting(e) === I.UnreadSetting.ALL_MESSAGES)
                    }(n, o, d);
                    e && (g && (i.unreadByType[I.ReadStateTypes.CHANNEL] = !0, i.unreadChannelId = t), _ && (i.mentionCount += o, i.mentionCounts[n.id] = o))
                }
            }
            let _ = a.default.getActiveJoinedThreadsForGuild(n);
            for (let t in _)
                for (let n in _[t]) {
                    !i.unreadByType[I.ReadStateTypes.CHANNEL] && E.default.hasUnread(n) && !o.default.isMuted(n) && !e && (i.unreadByType[I.ReadStateTypes.CHANNEL] = !0, i.unreadChannelId = n);
                    let t = E.default.getMentionCount(n);
                    t > 0 && (i.mentionCount += t, i.mentionCounts[n] = t)
                }!i.unreadByType[I.ReadStateTypes.GUILD_EVENT] && b(n, I.ReadStateTypes.GUILD_EVENT) && (i.unreadByType[I.ReadStateTypes.GUILD_EVENT] = !0)
        }
        w(i);
        let s = O(n);
        if (i.unread !== s.unread || i.mentionCount !== s.mentionCount) return A[null != n ? n : C] = i, null != n && (i.unread ? y.add(n) : y.delete(n)), N++, D(null != n ? n : C), !0;
        return !1
    }

    function B(e) {
        let {
            guilds: t
        } = e;
        A = {}, N = 0, y = new Set, x(null);
        let {
            length: n
        } = t;
        for (let e = 0; e < n; e++) {
            let n = t[e];
            null != n && x(n.id)
        }
    }

    function H(e) {
        let {
            guilds: t,
            readState: n
        } = e;
        A = {}, N = 0, y = new Set;
        let i = n.entries.length < 500,
            s = new Set;
        for (let e of (i && n.entries.forEach(e => {
                if (null != e.mention_count && e.mention_count > 0) {
                    if (null == e.read_state_type || e.read_state_type === I.ReadStateTypes.CHANNEL) {
                        var t;
                        s.add(null === (t = f.default.getChannel(e.id)) || void 0 === t ? void 0 : t.guild_id)
                    } else s.add(e.id)
                }
            }), x(null), t)) x(e.id, i ? s.has(e.id) : void 0)
    }

    function Y() {
        A = {}, y = new Set, x(null);
        let e = Object.values(_.default.getGuildIds());
        for (let t of e) x(t)
    }

    function j(e) {
        let {
            guild: t
        } = e;
        return x(t.id)
    }

    function W(e) {
        let {
            guild: t
        } = e;
        return null != A[t.id] && (delete A[t.id], y.delete(t.id), N++, !0)
    }

    function K(e) {
        let {
            channel: {
                id: t,
                guild_id: n
            }
        } = e;
        return G(n, [t])
    }

    function z() {
        let e = f.default.getChannel(g.default.getChannelId());
        return null != e && G(e.getGuildId(), [e.id])
    }

    function q(e) {
        let {
            user: t,
            guildId: n
        } = e;
        return t.id === c.default.getId() && x(n)
    }

    function X(e) {
        let {
            channelId: t
        } = e, n = f.default.getChannel(t);
        return null != n && G(n.getGuildId(), [n.id])
    }

    function Q(e) {
        let {
            channelId: t
        } = e, n = f.default.getChannel(t);
        if (null == n) return !1;
        if (null != n.guild_id) {
            let e = O(n.guild_id),
                i = n.isThread() ? !o.default.hasJoined(n.id) || o.default.isMuted(n.id) : p.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id);
            if ((i || e.unreadByType[I.ReadStateTypes.CHANNEL]) && 0 === E.default.getMentionCount(t)) return !1
        }
        return G(n.getGuildId(), [n.id])
    }

    function Z(e) {
        let {
            channelId: t,
            guildId: n
        } = e;
        return n !== v.FAVORITES && null != t && G(n, [t])
    }

    function J(e) {
        let {
            channel: t
        } = e;
        return G(t.getGuildId(), [t.id])
    }

    function $(e) {
        let {
            channels: t
        } = e;
        return s(t).groupBy(e => e.getGuildId()).reduce((e, t, n) => G(n, t.map(e => e.id)) || e, !1)
    }

    function ee(e) {
        let {
            channels: t
        } = e;
        return s(t).map(e => {
            let {
                channelId: t
            } = e;
            return t
        }).filter(e => null != f.default.getChannel(e)).groupBy(e => {
            var t;
            return null === (t = f.default.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
        }).reduce((e, t, n) => G(n, t) || e, !1)
    }

    function et(e) {
        let {
            channel: t
        } = e;
        return G(t.getGuildId(), [t.id, t.parent_id])
    }

    function en(e) {
        let {
            guildScheduledEvent: t
        } = e;
        return F(t.guild_id, I.ReadStateTypes.GUILD_EVENT)
    }

    function ei(e) {
        let {
            guildScheduledEvent: t
        } = e;
        return F(t.guild_id, I.ReadStateTypes.GUILD_EVENT)
    }

    function es(e) {
        let {
            id: t,
            ackType: n
        } = e;
        return F(t, n)
    }

    function er(e) {
        let {
            id: t,
            guildId: n
        } = e;
        return G(n, [t])
    }

    function ea(e) {
        return (0, l.doesThreadMembersActionAffectMe)(e) && G(e.guildId, [e.id])
    }

    function eo(e) {
        let {
            threads: t,
            guildId: n
        } = e;
        return G(n, t.filter(e => o.default.hasJoined(e.id)).map(e => e.id))
    }

    function el(e) {
        return null != e.channels && G(e.guildId, e.channels.map(e => e.id))
    }

    function eu(e) {
        let {
            guildId: t
        } = e;
        return x(t)
    }

    function ed(e) {
        let {
            guildId: t
        } = e;
        return x(t)
    }

    function ec(e) {
        let {
            userGuildSettings: t
        } = e, n = new Set(t.map(e => {
            var t;
            return null !== (t = e.guild_id) && void 0 !== t ? t : C
        }));
        return d.default.keys(A).reduce((e, t) => n.has(t) && x(t) || e, !1)
    }

    function ef() {
        for (let e in A) {
            let t = A[e];
            t.ncMentionCount = 0
        }
    }

    function e_(e) {
        let {
            guildId: t
        } = e;
        return x(t)
    }
    class eh extends m.default {
        initialize() {
            this.waitFor(f.default, g.default, E.default, h.default, c.default, S.default, p.default, a.default, o.default)
        }
        loadCache() {
            let e = this.readSnapshot(eh.LATEST_SNAPSHOT_VERSION);
            null != e && (A = e.guilds, y = new Set(e.unreadGuilds))
        }
        takeSnapshot() {
            return {
                version: eh.LATEST_SNAPSHOT_VERSION,
                data: {
                    guilds: A,
                    unreadGuilds: Array.from(y)
                }
            }
        }
        hasAnyUnread() {
            return y.size > 0
        }
        getStoreChangeSentinel() {
            return N
        }
        getMutableUnreadGuilds() {
            return y
        }
        getMutableGuildStates() {
            return A
        }
        hasUnread(e) {
            return y.has(e)
        }
        getMentionCount(e) {
            return O(e).mentionCount
        }
        getMutableGuildReadState(e) {
            return O(e)
        }
        getGuildHasUnreadIgnoreMuted(e) {
            let t = f.default.getMutableGuildChannelsForGuild(e);
            for (let e in t) {
                let n = t[e];
                if (null != n) {
                    if ((!n.isGuildVocal() || 0 !== E.default.getMentionCount(e)) && h.default.can(n.accessPermissions, n) && E.default.hasUnread(e)) return !0
                }
            }
            let n = a.default.getActiveJoinedThreadsForGuild(e);
            for (let e in n) {
                let t = f.default.getChannel(e);
                if (null != t && M(t)) {
                    for (let t in n[e])
                        if (E.default.hasUnread(t)) return !0
                }
            }
            return !!E.default.hasUnread(e, I.ReadStateTypes.GUILD_EVENT) || !1
        }
        getTotalMentionCount(e) {
            let t = 0;
            for (let n in A) {
                let i = A[n];
                (!0 !== e || n !== C) && (t += i.mentionCount)
            }
            return t
        }
        getTotalNotificationsMentionCount(e) {
            let t = 0;
            for (let n in A) {
                let i = A[n];
                (!0 !== e || n !== C) && (t += i.ncMentionCount)
            }
            return t
        }
        getPrivateChannelMentionCount() {
            var e;
            let t = A[C];
            return null !== (e = null == t ? void 0 : t.mentionCount) && void 0 !== e ? e : 0
        }
        getMentionCountForChannels(e, t) {
            let n = 0,
                i = A[e];
            return null == i ? 0 : (t.forEach(e => {
                let t = i.mentionCounts[e];
                n += null != t ? t : 0
            }), n)
        }
        getGuildChangeSentinel(e) {
            return O(e).sentinel
        }
        constructor() {
            super({
                CONNECTION_OPEN: H,
                OVERLAY_INITIALIZE: B,
                CACHE_LOADED_LAZY: () => this.loadCache(),
                GUILD_CREATE: j,
                GUILD_DELETE: W,
                MESSAGE_CREATE: Q,
                MESSAGE_ACK: X,
                BULK_ACK: ee,
                UPDATE_CHANNEL_DIMENSIONS: X,
                CHANNEL_SELECT: Z,
                CHANNEL_DELETE: K,
                WINDOW_FOCUS: z,
                GUILD_ACK: eu,
                GUILD_ROLE_CREATE: ed,
                GUILD_ROLE_DELETE: ed,
                GUILD_ROLE_UPDATE: ed,
                CHANNEL_CREATE: J,
                CHANNEL_UPDATES: $,
                THREAD_CREATE: et,
                THREAD_UPDATE: et,
                THREAD_DELETE: et,
                THREAD_LIST_SYNC: eo,
                THREAD_MEMBER_UPDATE: er,
                THREAD_MEMBERS_UPDATE: ea,
                PASSIVE_UPDATE_V1: el,
                GUILD_MEMBER_UPDATE: q,
                USER_GUILD_SETTINGS_FULL_UPDATE: ec,
                USER_GUILD_SETTINGS_CHANNEL_UPDATE: e_,
                USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: e_,
                USER_GUILD_SETTINGS_GUILD_UPDATE: e_,
                USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: e_,
                GUILD_FEATURE_ACK: es,
                GUILD_SCHEDULED_EVENT_CREATE: en,
                GUILD_SCHEDULED_EVENT_UPDATE: en,
                GUILD_SCHEDULED_EVENT_DELETE: ei,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: X,
                LOAD_MESSAGES_SUCCESS: X,
                CHANNEL_ACK: X,
                CHANNEL_LOCAL_ACK: X,
                NOTIFICATION_SETTINGS_UPDATE: Y,
                RECOMPUTE_READ_STATES: Y,
                VOICE_CHANNEL_SELECT: X,
                ENABLE_AUTOMATIC_ACK: X,
                RESORT_THREADS: X,
                NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: ef,
                TRY_ACK: X
            })
        }
    }
    eh.displayName = "GuildReadStateStore", eh.LATEST_SNAPSHOT_VERSION = 1;
    var eE = new eh
}