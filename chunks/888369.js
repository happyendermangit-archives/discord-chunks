function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("789020"), n("724458");
    var i = n("392711"),
        r = n.n(i);
    n("57132"), n("140155");
    var s = n("398758"),
        a = n("601070"),
        o = n("569471"),
        l = n("195663"),
        u = n("131704"),
        d = n("709054"),
        _ = n("314897"),
        c = n("592125"),
        E = n("430824"),
        I = n("496675"),
        T = n("306680"),
        f = n("944486"),
        S = n("412788"),
        h = n("9156"),
        A = n("594174"),
        m = n("981631"),
        N = n("176505"),
        p = n("490897");

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let R = m.NULL_STRING_GUILD_ID,
        C = {},
        g = new Set,
        L = 0;

    function D(e) {
        var t;
        let n = C[null != e ? e : R];
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

    function v(e) {
        var t;
        return C[null != e ? e : R] = null !== (t = C[null != e ? e : R]) && void 0 !== t ? t : D(e)
    }

    function M(e) {
        let t = v(e);
        t.sentinel++, L++
    }

    function y(e, t, n) {
        return null != e.guild_id && n && !((0, u.isThread)(e.type) || h.default.isChannelRecordOrParentOptedIn(e)) && 0 === t
    }

    function P(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !(null == e || e.isGuildVocal() && 0 === t || e.hasFlag(N.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL) || (0 === t || n) && (e.isThread() ? o.default.isMuted(e.id) || h.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id) : h.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)) || !e.isPrivate() && (y(e, t, (0, s.isOptInEnabledForGuild)(e.guild_id)) || !I.default.can(e.accessPermissions, e))) && (t > 0 || h.default.resolveUnreadSetting(e) === p.UnreadSetting.ALL_MESSAGES)
    }

    function U(e) {
        switch (e) {
            case R:
            case null:
            case void 0:
                return null;
            default:
                return e
        }
    }

    function b(e, t) {
        let n = T.default.hasUnread(e, t);
        if (t === p.ReadStateTypes.GUILD_EVENT) return !(h.default.isMuted(e) || h.default.isMuteScheduledEventsEnabled(e)) && n;
        return n
    }

    function G(e, t) {
        let n = D(e);
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

    function B(e, t, n) {
        if (w(t), t.mentionCount = r()(t.mentionCounts).values().sum(), t.unread !== n.unread || t.mentionCount !== n.mentionCount) return C[null != e ? e : R] = t, null != e && (t.unread ? g.add(e) : g.delete(e)), L++, M(null != e ? e : R), !0;
        return !1
    }

    function V(e, t) {
        let n = U(e),
            i = v(n),
            r = G(n, i),
            s = !1;
        if (t.forEach(e => {
                let t = c.default.getChannel(e);
                if (null == t) {
                    delete r.mentionCounts[e];
                    return
                }
                if (t.getGuildId() !== n) return;
                let i = T.default.getMentionCount(e);
                null !== n && !s && T.default.hasUnread(t.id) && P(t, i, !0) && (s = !0, r.unreadChannelId = t.id), i > 0 && P(t, i) ? r.mentionCounts[t.id] = i : delete r.mentionCounts[t.id]
            }), r.unreadByType[p.ReadStateTypes.CHANNEL] = s, r.unreadByType[p.ReadStateTypes.CHANNEL] !== i.unreadByType[p.ReadStateTypes.CHANNEL] && !r.unreadByType[p.ReadStateTypes.CHANNEL]) {
            let e = c.default.getChannel(i.unreadChannelId);
            if (!(null != e && !t.includes(e.id) && T.default.hasUnread(e.id) && P(e))) return F(n);
            null != n && g.add(n), r.unreadByType[p.ReadStateTypes.CHANNEL] = !0
        }
        return B(n, r, i)
    }

    function x(e, t) {
        if (null == e) return;
        let n = v(e),
            i = G(e, n);
        return i.unreadByType[p.ReadStateTypes.GUILD_EVENT] = b(e, t), B(e, i, n)
    }

    function F(e, t) {
        let n = U(e),
            i = D(n);
        if (null == n) {
            let e = c.default.getMutablePrivateChannels();
            for (let t in e) {
                let n = e[t],
                    r = T.default.getMentionCount(t);
                r > 0 && P(n, r) && (i.mentionCount += r, i.mentionCounts[n.id] = r)
            }
        } else {
            let e = h.default.isMuted(n);
            if (e && !1 === t) return !1;
            let r = h.default.getMutedChannels(n),
                l = h.default.getChannelOverrides(n),
                d = (0, s.isOptInEnabledForGuild)(n),
                _ = c.default.getMutableBasicGuildChannelsForGuild(n);
            for (let t in _) {
                let n = _[t],
                    s = e || r.has(t) || null != n.parent_id && r.has(n.parent_id),
                    a = i.unreadByType[p.ReadStateTypes.CHANNEL],
                    {
                        mentionCount: o,
                        unread: c
                    } = T.default.getGuildChannelUnreadState(n, d, l, s, a),
                    E = o > 0;
                if (!E && s) continue;
                let f = !a && (!s || E) && c;
                (f || E) && function(e, t, n) {
                    if ((0, u.isGuildVocalChannelType)(e.type) && 0 === t || !I.default.canBasicChannel((0, u.getBasicAccessPermissions)(e.type), e) || y(e, t, n)) return !1;
                    return !("flags" in e && e.hasFlag(N.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && (t > 0 || h.default.resolveUnreadSetting(e) === p.UnreadSetting.ALL_MESSAGES)
                }(n, o, d) && (f && (i.unreadByType[p.ReadStateTypes.CHANNEL] = !0, i.unreadChannelId = t), E && (i.mentionCount += o, i.mentionCounts[n.id] = o))
            }
            let E = a.default.getActiveJoinedThreadsForGuild(n);
            for (let t in E)
                for (let n in E[t]) {
                    !i.unreadByType[p.ReadStateTypes.CHANNEL] && T.default.hasUnread(n) && !o.default.isMuted(n) && !e && (i.unreadByType[p.ReadStateTypes.CHANNEL] = !0, i.unreadChannelId = n);
                    let t = T.default.getMentionCount(n);
                    t > 0 && (i.mentionCount += t, i.mentionCounts[n] = t)
                }!i.unreadByType[p.ReadStateTypes.GUILD_EVENT] && b(n, p.ReadStateTypes.GUILD_EVENT) && (i.unreadByType[p.ReadStateTypes.GUILD_EVENT] = !0)
        }
        w(i);
        let r = v(n);
        if (i.unread !== r.unread || i.mentionCount !== r.mentionCount) return C[null != n ? n : R] = i, null != n && (i.unread ? g.add(n) : g.delete(n)), L++, M(null != n ? n : R), !0;
        return !1
    }

    function H(e) {
        let {
            guilds: t
        } = e;
        C = {}, L = 0, g = new Set, F(null);
        let {
            length: n
        } = t;
        for (let e = 0; e < n; e++) {
            let n = t[e];
            null != n && F(n.id)
        }
    }

    function Y(e) {
        let {
            guilds: t,
            readState: n
        } = e;
        C = {}, L = 0, g = new Set;
        let i = n.entries.length < 500,
            r = new Set;
        for (let e of (i && n.entries.forEach(e => {
                if (null != e.mention_count && e.mention_count > 0) {
                    if (null == e.read_state_type || e.read_state_type === p.ReadStateTypes.CHANNEL) {
                        var t;
                        r.add(null === (t = c.default.getChannel(e.id)) || void 0 === t ? void 0 : t.guild_id)
                    } else r.add(e.id)
                }
            }), F(null), t)) F(e.id, i ? r.has(e.id) : void 0)
    }

    function j() {
        for (let e of (C = {}, g = new Set, F(null), Object.values(E.default.getGuildIds()))) F(e)
    }

    function W(e) {
        let {
            guild: t
        } = e;
        return F(t.id)
    }

    function K(e) {
        let {
            guild: t
        } = e;
        return null != C[t.id] && (delete C[t.id], g.delete(t.id), L++, !0)
    }

    function z(e) {
        let {
            channel: {
                id: t,
                guild_id: n
            }
        } = e;
        return V(n, [t])
    }

    function X() {
        let e = c.default.getChannel(f.default.getChannelId());
        return null != e && V(e.getGuildId(), [e.id])
    }

    function Q(e) {
        let {
            user: t,
            guildId: n
        } = e;
        return t.id === _.default.getId() && F(n)
    }

    function q(e) {
        let {
            channelId: t
        } = e, n = c.default.getChannel(t);
        return null != n && V(n.getGuildId(), [n.id])
    }

    function Z(e) {
        let {
            channelId: t
        } = e, n = c.default.getChannel(t);
        if (null == n) return !1;
        if (null != n.guild_id) {
            let e = v(n.guild_id);
            if (((n.isThread() ? !o.default.hasJoined(n.id) || o.default.isMuted(n.id) : h.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) || e.unreadByType[p.ReadStateTypes.CHANNEL]) && 0 === T.default.getMentionCount(t)) return !1
        }
        return V(n.getGuildId(), [n.id])
    }

    function J(e) {
        let {
            channelId: t,
            guildId: n
        } = e;
        return n !== m.FAVORITES && null != t && V(n, [t])
    }

    function $(e) {
        let {
            channel: t
        } = e;
        return V(t.getGuildId(), [t.id])
    }

    function ee(e) {
        let {
            channels: t
        } = e;
        return r()(t).groupBy(e => e.getGuildId()).reduce((e, t, n) => V(n, t.map(e => e.id)) || e, !1)
    }

    function et(e) {
        let {
            channels: t
        } = e;
        return r()(t).map(e => {
            let {
                channelId: t
            } = e;
            return t
        }).filter(e => null != c.default.getChannel(e)).groupBy(e => {
            var t;
            return null === (t = c.default.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
        }).reduce((e, t, n) => V(n, t) || e, !1)
    }

    function en(e) {
        let {
            channel: t
        } = e;
        return V(t.getGuildId(), [t.id, t.parent_id])
    }

    function ei(e) {
        let {
            guildScheduledEvent: t
        } = e;
        return x(t.guild_id, p.ReadStateTypes.GUILD_EVENT)
    }

    function er(e) {
        let {
            guildScheduledEvent: t
        } = e;
        return x(t.guild_id, p.ReadStateTypes.GUILD_EVENT)
    }

    function es(e) {
        let {
            id: t,
            ackType: n
        } = e;
        return x(t, n)
    }

    function ea(e) {
        let {
            id: t,
            guildId: n
        } = e;
        return V(n, [t])
    }

    function eo(e) {
        return (0, l.doesThreadMembersActionAffectMe)(e) && V(e.guildId, [e.id])
    }

    function el(e) {
        let {
            threads: t,
            guildId: n
        } = e;
        return V(n, t.filter(e => o.default.hasJoined(e.id)).map(e => e.id))
    }

    function eu(e) {
        return null != e.channels && V(e.guildId, e.channels.map(e => e.id))
    }

    function ed(e) {
        let {
            guildId: t
        } = e;
        return F(t)
    }

    function e_(e) {
        let {
            guildId: t
        } = e;
        return F(t)
    }

    function ec(e) {
        let {
            userGuildSettings: t
        } = e, n = new Set(t.map(e => {
            var t;
            return null !== (t = e.guild_id) && void 0 !== t ? t : R
        }));
        return d.default.keys(C).reduce((e, t) => n.has(t) && F(t) || e, !1)
    }

    function eE() {
        for (let e in C) C[e].ncMentionCount = 0
    }

    function eI(e) {
        let {
            guildId: t
        } = e;
        return F(t)
    }
    class eT extends S.default {
        initialize() {
            this.waitFor(c.default, f.default, T.default, I.default, _.default, A.default, h.default, a.default, o.default)
        }
        loadCache() {
            let e = this.readSnapshot(eT.LATEST_SNAPSHOT_VERSION);
            null != e && (C = e.guilds, g = new Set(e.unreadGuilds))
        }
        takeSnapshot() {
            return {
                version: eT.LATEST_SNAPSHOT_VERSION,
                data: {
                    guilds: C,
                    unreadGuilds: Array.from(g)
                }
            }
        }
        hasAnyUnread() {
            return g.size > 0
        }
        getStoreChangeSentinel() {
            return L
        }
        getMutableUnreadGuilds() {
            return g
        }
        getMutableGuildStates() {
            return C
        }
        hasUnread(e) {
            return g.has(e)
        }
        getMentionCount(e) {
            return v(e).mentionCount
        }
        getMutableGuildReadState(e) {
            return v(e)
        }
        getGuildHasUnreadIgnoreMuted(e) {
            let t = c.default.getMutableGuildChannelsForGuild(e);
            for (let e in t) {
                let n = t[e];
                if (null != n) {
                    if ((!n.isGuildVocal() || 0 !== T.default.getMentionCount(e)) && I.default.can(n.accessPermissions, n) && T.default.hasUnread(e)) return !0
                }
            }
            let n = a.default.getActiveJoinedThreadsForGuild(e);
            for (let e in n) {
                let t = c.default.getChannel(e);
                if (null != t && P(t)) {
                    for (let t in n[e])
                        if (T.default.hasUnread(t)) return !0
                }
            }
            return !!T.default.hasUnread(e, p.ReadStateTypes.GUILD_EVENT) || !1
        }
        getTotalMentionCount(e) {
            let t = 0;
            for (let n in C) {
                let i = C[n];
                (!0 !== e || n !== R) && (t += i.mentionCount)
            }
            return t
        }
        getTotalNotificationsMentionCount(e) {
            let t = 0;
            for (let n in C) {
                let i = C[n];
                (!0 !== e || n !== R) && (t += i.ncMentionCount)
            }
            return t
        }
        getPrivateChannelMentionCount() {
            var e;
            let t = C[R];
            return null !== (e = null == t ? void 0 : t.mentionCount) && void 0 !== e ? e : 0
        }
        getMentionCountForChannels(e, t) {
            let n = 0,
                i = C[e];
            return null == i ? 0 : (t.forEach(e => {
                let t = i.mentionCounts[e];
                n += null != t ? t : 0
            }), n)
        }
        getGuildChangeSentinel(e) {
            return v(e).sentinel
        }
        constructor() {
            super({
                CONNECTION_OPEN: Y,
                OVERLAY_INITIALIZE: H,
                CACHE_LOADED_LAZY: () => this.loadCache(),
                GUILD_CREATE: W,
                GUILD_DELETE: K,
                MESSAGE_CREATE: Z,
                MESSAGE_ACK: q,
                BULK_ACK: et,
                UPDATE_CHANNEL_DIMENSIONS: q,
                CHANNEL_SELECT: J,
                CHANNEL_DELETE: z,
                WINDOW_FOCUS: X,
                GUILD_ACK: ed,
                GUILD_ROLE_CREATE: e_,
                GUILD_ROLE_DELETE: e_,
                GUILD_ROLE_UPDATE: e_,
                CHANNEL_CREATE: $,
                CHANNEL_UPDATES: ee,
                THREAD_CREATE: en,
                THREAD_UPDATE: en,
                THREAD_DELETE: en,
                THREAD_LIST_SYNC: el,
                THREAD_MEMBER_UPDATE: ea,
                THREAD_MEMBERS_UPDATE: eo,
                PASSIVE_UPDATE_V1: eu,
                GUILD_MEMBER_UPDATE: Q,
                USER_GUILD_SETTINGS_FULL_UPDATE: ec,
                USER_GUILD_SETTINGS_CHANNEL_UPDATE: eI,
                USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: eI,
                USER_GUILD_SETTINGS_GUILD_UPDATE: eI,
                USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: eI,
                GUILD_FEATURE_ACK: es,
                GUILD_SCHEDULED_EVENT_CREATE: ei,
                GUILD_SCHEDULED_EVENT_UPDATE: ei,
                GUILD_SCHEDULED_EVENT_DELETE: er,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: q,
                LOAD_MESSAGES_SUCCESS: q,
                CHANNEL_ACK: q,
                CHANNEL_LOCAL_ACK: q,
                NOTIFICATION_SETTINGS_UPDATE: j,
                RECOMPUTE_READ_STATES: j,
                VOICE_CHANNEL_SELECT: q,
                ENABLE_AUTOMATIC_ACK: q,
                RESORT_THREADS: q,
                NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: eE,
                TRY_ACK: q
            })
        }
    }
    O(eT, "displayName", "GuildReadStateStore"), O(eT, "LATEST_SNAPSHOT_VERSION", 1), t.default = new eT
}