function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return em
        }
    }), n("222007"), n("702976"), n("808653");
    var s = n("917351"),
        i = n.n(s);
    n("21121"), n("136511");
    var r = n("512395"),
        a = n("401690"),
        o = n("755624"),
        d = n("526311"),
        u = n("233069"),
        l = n("299039"),
        f = n("271938"),
        _ = n("42203"),
        c = n("305961"),
        g = n("957255"),
        m = n("660478"),
        h = n("18494"),
        v = n("455079"),
        E = n("282109"),
        p = n("697218"),
        y = n("49111"),
        T = n("724210"),
        C = n("133335");
    let I = y.NULL_STRING_GUILD_ID,
        S = {},
        A = new Set,
        D = 0;

    function N(e) {
        var t;
        let n = S[null != e ? e : I];
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
        return S[null != e ? e : I] = null !== (t = S[null != e ? e : I]) && void 0 !== t ? t : N(e)
    }

    function P(e) {
        let t = O(e);
        t.sentinel++, D++
    }

    function b(e, t, n) {
        let s = e.guild_id;
        return null != s && n && !((0, u.isThread)(e.type) || E.default.isChannelRecordOrParentOptedIn(e)) && 0 === t
    }

    function V(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e || e.isGuildVocal() && 0 === t || e.hasFlag(T.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) return !1;
        if (0 === t || n) {
            let t = e.isThread() ? o.default.isMuted(e.id) || E.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id) : E.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
            if (t) return !1
        }
        return !(!e.isPrivate() && (b(e, t, (0, r.isOptInEnabledForGuild)(e.guild_id)) || !g.default.can(e.accessPermissions, e))) && (t > 0 || E.default.resolveUnreadSetting(e) === C.UnreadSetting.ALL_MESSAGES)
    }

    function R(e) {
        switch (e) {
            case I:
            case null:
            case void 0:
                return null;
            default:
                return e
        }
    }

    function k(e, t) {
        let n = m.default.hasUnread(e, t);
        if (t === C.ReadStateTypes.GUILD_EVENT) return !(E.default.isMuted(e) || E.default.isMuteScheduledEventsEnabled(e)) && n;
        return n
    }

    function M(e, t) {
        let n = N(e);
        return n.mentionCounts = {
            ...t.mentionCounts
        }, n.unreadByType = {
            ...t.unreadByType
        }, n
    }

    function w(e) {
        return e.unread = Object.values(e.unreadByType).some(e => e), e
    }

    function L(e, t) {}

    function U(e, t, n) {
        if (w(t), t.mentionCount = i(t.mentionCounts).values().sum(), t.unread !== n.unread || t.mentionCount !== n.mentionCount) return S[null != e ? e : I] = t, null != e && (t.unread ? A.add(e) : A.delete(e)), D++, P(null != e ? e : I), !0;
        return !1
    }

    function G(e, t) {
        let n = R(e),
            s = O(n),
            i = M(n, s),
            r = !1;
        if (t.forEach(e => {
                let t = _.default.getChannel(e);
                if (null == t) {
                    delete i.mentionCounts[e];
                    return
                }
                if (t.getGuildId() !== n) return;
                let s = m.default.getMentionCount(e);
                null !== n && !r && m.default.hasUnread(t.id) && V(t, s, !0) && (r = !0, i.unreadChannelId = t.id), s > 0 && V(t, s) ? i.mentionCounts[t.id] = s : delete i.mentionCounts[t.id]
            }), i.unreadByType[C.ReadStateTypes.CHANNEL] = r, i.unreadByType[C.ReadStateTypes.CHANNEL] !== s.unreadByType[C.ReadStateTypes.CHANNEL] && !i.unreadByType[C.ReadStateTypes.CHANNEL]) {
            let e = _.default.getChannel(s.unreadChannelId);
            if (!(null != e && !t.includes(e.id) && m.default.hasUnread(e.id) && V(e))) return H(n);
            null != n && A.add(n), i.unreadByType[C.ReadStateTypes.CHANNEL] = !0
        }
        return U(n, i, s)
    }

    function F(e, t) {
        if (null == e) return;
        let n = O(e),
            s = M(e, n);
        return s.unreadByType[C.ReadStateTypes.GUILD_EVENT] = k(e, t), U(e, s, n)
    }

    function H(e, t) {
        let n = R(e),
            s = N(n);
        if (null == n) {
            let e = _.default.getMutablePrivateChannels();
            for (let t in e) {
                let n = e[t],
                    i = m.default.getMentionCount(t);
                i > 0 && V(n, i) && (s.mentionCount += i, s.mentionCounts[n.id] = i)
            }
        } else {
            let e = E.default.isMuted(n);
            if (e && !1 === t) return !1;
            let i = E.default.getMutedChannels(n),
                d = E.default.getChannelOverrides(n),
                l = (0, r.isOptInEnabledForGuild)(n),
                f = _.default.getMutableBasicGuildChannelsForGuild(n);
            for (let t in f) {
                let n = f[t],
                    r = e || i.has(t) || null != n.parent_id && i.has(n.parent_id),
                    a = s.unreadByType[C.ReadStateTypes.CHANNEL],
                    {
                        mentionCount: o,
                        unread: _
                    } = m.default.getGuildChannelUnreadState(n, l, d, r, a),
                    c = o > 0;
                if (!c && r) continue;
                let h = !a && (!r || c) && _;
                if (h || c) {
                    let e = function(e, t, n) {
                        if ((0, u.isGuildVocalChannelType)(e.type) && 0 === t || !g.default.canBasicChannel((0, u.getBasicAccessPermissions)(e.type), e) || b(e, t, n)) return !1;
                        return !("flags" in e && e.hasFlag(T.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && (t > 0 || E.default.resolveUnreadSetting(e) === C.UnreadSetting.ALL_MESSAGES)
                    }(n, o, l);
                    e && (h && (s.unreadByType[C.ReadStateTypes.CHANNEL] = !0, s.unreadChannelId = t), c && (s.mentionCount += o, s.mentionCounts[n.id] = o))
                }
            }
            let c = a.default.getActiveJoinedThreadsForGuild(n);
            for (let t in c)
                for (let n in c[t]) {
                    !s.unreadByType[C.ReadStateTypes.CHANNEL] && m.default.hasUnread(n) && !o.default.isMuted(n) && !e && (s.unreadByType[C.ReadStateTypes.CHANNEL] = !0, s.unreadChannelId = n);
                    let t = m.default.getMentionCount(n);
                    t > 0 && (s.mentionCount += t, s.mentionCounts[n] = t)
                }!s.unreadByType[C.ReadStateTypes.GUILD_EVENT] && k(n, C.ReadStateTypes.GUILD_EVENT) && (s.unreadByType[C.ReadStateTypes.GUILD_EVENT] = !0)
        }
        w(s);
        let i = O(n);
        if (s.unread !== i.unread || s.mentionCount !== i.mentionCount) return S[null != n ? n : I] = s, null != n && (s.unread ? A.add(n) : A.delete(n)), D++, P(null != n ? n : I), !0;
        return !1
    }

    function B(e) {
        let {
            guilds: t
        } = e;
        S = {}, D = 0, A = new Set, H(null);
        let {
            length: n
        } = t;
        for (let e = 0; e < n; e++) {
            let n = t[e];
            null != n && H(n.id)
        }
    }

    function x(e) {
        let {
            guilds: t,
            readState: n
        } = e;
        S = {}, D = 0, A = new Set;
        let s = n.entries.length < 500,
            i = new Set;
        for (let e of (s && n.entries.forEach(e => {
                if (null != e.mention_count && e.mention_count > 0) {
                    if (null == e.read_state_type || e.read_state_type === C.ReadStateTypes.CHANNEL) {
                        var t;
                        i.add(null === (t = _.default.getChannel(e.id)) || void 0 === t ? void 0 : t.guild_id)
                    } else i.add(e.id)
                }
            }), H(null), t)) H(e.id, s ? i.has(e.id) : void 0)
    }

    function Y() {
        S = {}, A = new Set, H(null);
        let e = Object.values(c.default.getGuildIds());
        for (let t of e) H(t)
    }

    function j(e) {
        let {
            guild: t
        } = e;
        return H(t.id)
    }

    function K(e) {
        let {
            guild: t
        } = e;
        return null != S[t.id] && (delete S[t.id], A.delete(t.id), D++, !0)
    }

    function W(e) {
        let {
            channel: {
                id: t,
                guild_id: n
            }
        } = e;
        return G(n, [t])
    }

    function z() {
        let e = _.default.getChannel(h.default.getChannelId());
        return null != e && G(e.getGuildId(), [e.id])
    }

    function q(e) {
        let {
            user: t,
            guildId: n
        } = e;
        return t.id === f.default.getId() && H(n)
    }

    function X(e) {
        let {
            channelId: t
        } = e, n = _.default.getChannel(t);
        return null != n && G(n.getGuildId(), [n.id])
    }

    function Q(e) {
        let {
            channelId: t
        } = e, n = _.default.getChannel(t);
        if (null == n) return !1;
        if (null != n.guild_id) {
            let e = O(n.guild_id),
                s = n.isThread() ? !o.default.hasJoined(n.id) || o.default.isMuted(n.id) : E.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id);
            if ((s || e.unreadByType[C.ReadStateTypes.CHANNEL]) && 0 === m.default.getMentionCount(t)) return !1
        }
        return G(n.getGuildId(), [n.id])
    }

    function Z(e) {
        let {
            channelId: t,
            guildId: n
        } = e;
        return n !== y.FAVORITES && null != t && G(n, [t])
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
        return i(t).groupBy(e => e.getGuildId()).reduce((e, t, n) => G(n, t.map(e => e.id)) || e, !1)
    }

    function ee(e) {
        let {
            channels: t
        } = e;
        return i(t).map(e => {
            let {
                channelId: t
            } = e;
            return t
        }).filter(e => null != _.default.getChannel(e)).groupBy(e => {
            var t;
            return null === (t = _.default.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
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
        return F(t.guild_id, C.ReadStateTypes.GUILD_EVENT)
    }

    function es(e) {
        let {
            guildScheduledEvent: t
        } = e;
        return F(t.guild_id, C.ReadStateTypes.GUILD_EVENT)
    }

    function ei(e) {
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
        return (0, d.doesThreadMembersActionAffectMe)(e) && G(e.guildId, [e.id])
    }

    function eo(e) {
        let {
            threads: t,
            guildId: n
        } = e;
        return G(n, t.filter(e => o.default.hasJoined(e.id)).map(e => e.id))
    }

    function ed(e) {
        return null != e.channels && G(e.guildId, e.channels.map(e => e.id))
    }

    function eu(e) {
        let {
            guildId: t
        } = e;
        return H(t)
    }

    function el(e) {
        let {
            guildId: t
        } = e;
        return H(t)
    }

    function ef(e) {
        let {
            userGuildSettings: t
        } = e, n = new Set(t.map(e => {
            var t;
            return null !== (t = e.guild_id) && void 0 !== t ? t : I
        }));
        return l.default.keys(S).reduce((e, t) => n.has(t) && H(t) || e, !1)
    }

    function e_() {
        for (let e in S) {
            let t = S[e];
            t.ncMentionCount = 0
        }
    }

    function ec(e) {
        let {
            guildId: t
        } = e;
        return H(t)
    }
    class eg extends v.default {
        initialize() {
            this.waitFor(_.default, h.default, m.default, g.default, f.default, p.default, E.default, a.default, o.default)
        }
        loadCache() {
            let e = this.readSnapshot(eg.LATEST_SNAPSHOT_VERSION);
            null != e && (S = e.guilds, A = new Set(e.unreadGuilds))
        }
        takeSnapshot() {
            return {
                version: eg.LATEST_SNAPSHOT_VERSION,
                data: {
                    guilds: S,
                    unreadGuilds: Array.from(A)
                }
            }
        }
        hasAnyUnread() {
            return A.size > 0
        }
        getStoreChangeSentinel() {
            return D
        }
        getMutableUnreadGuilds() {
            return A
        }
        getMutableGuildStates() {
            return S
        }
        hasUnread(e) {
            return A.has(e)
        }
        getMentionCount(e) {
            return O(e).mentionCount
        }
        getMutableGuildReadState(e) {
            return O(e)
        }
        getGuildHasUnreadIgnoreMuted(e) {
            let t = _.default.getMutableGuildChannelsForGuild(e);
            for (let e in t) {
                let n = t[e];
                if (null != n) {
                    if ((!n.isGuildVocal() || 0 !== m.default.getMentionCount(e)) && g.default.can(n.accessPermissions, n) && m.default.hasUnread(e)) return !0
                }
            }
            let n = a.default.getActiveJoinedThreadsForGuild(e);
            for (let e in n) {
                let t = _.default.getChannel(e);
                if (null != t && V(t)) {
                    for (let t in n[e])
                        if (m.default.hasUnread(t)) return !0
                }
            }
            return !!m.default.hasUnread(e, C.ReadStateTypes.GUILD_EVENT) || !1
        }
        getTotalMentionCount(e) {
            let t = 0;
            for (let n in S) {
                let s = S[n];
                (!0 !== e || n !== I) && (t += s.mentionCount)
            }
            return t
        }
        getTotalNotificationsMentionCount(e) {
            let t = 0;
            for (let n in S) {
                let s = S[n];
                (!0 !== e || n !== I) && (t += s.ncMentionCount)
            }
            return t
        }
        getPrivateChannelMentionCount() {
            var e;
            let t = S[I];
            return null !== (e = null == t ? void 0 : t.mentionCount) && void 0 !== e ? e : 0
        }
        getMentionCountForChannels(e, t) {
            let n = 0,
                s = S[e];
            return null == s ? 0 : (t.forEach(e => {
                let t = s.mentionCounts[e];
                n += null != t ? t : 0
            }), n)
        }
        getGuildChangeSentinel(e) {
            return O(e).sentinel
        }
        constructor() {
            super({
                CONNECTION_OPEN: x,
                OVERLAY_INITIALIZE: B,
                CACHE_LOADED_LAZY: () => this.loadCache(),
                GUILD_CREATE: j,
                GUILD_DELETE: K,
                MESSAGE_CREATE: Q,
                MESSAGE_ACK: X,
                BULK_ACK: ee,
                UPDATE_CHANNEL_DIMENSIONS: X,
                CHANNEL_SELECT: Z,
                CHANNEL_DELETE: W,
                WINDOW_FOCUS: z,
                GUILD_ACK: eu,
                GUILD_ROLE_CREATE: el,
                GUILD_ROLE_DELETE: el,
                GUILD_ROLE_UPDATE: el,
                CHANNEL_CREATE: J,
                CHANNEL_UPDATES: $,
                THREAD_CREATE: et,
                THREAD_UPDATE: et,
                THREAD_DELETE: et,
                THREAD_LIST_SYNC: eo,
                THREAD_MEMBER_UPDATE: er,
                THREAD_MEMBERS_UPDATE: ea,
                PASSIVE_UPDATE_V1: ed,
                GUILD_MEMBER_UPDATE: q,
                USER_GUILD_SETTINGS_FULL_UPDATE: ef,
                USER_GUILD_SETTINGS_CHANNEL_UPDATE: ec,
                USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: ec,
                USER_GUILD_SETTINGS_GUILD_UPDATE: ec,
                USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: ec,
                GUILD_FEATURE_ACK: ei,
                GUILD_SCHEDULED_EVENT_CREATE: en,
                GUILD_SCHEDULED_EVENT_UPDATE: en,
                GUILD_SCHEDULED_EVENT_DELETE: es,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: X,
                LOAD_MESSAGES_SUCCESS: X,
                CHANNEL_ACK: X,
                CHANNEL_LOCAL_ACK: X,
                NOTIFICATION_SETTINGS_UPDATE: Y,
                RECOMPUTE_READ_STATES: Y,
                VOICE_CHANNEL_SELECT: X,
                ENABLE_AUTOMATIC_ACK: X,
                RESORT_THREADS: X,
                NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: e_,
                TRY_ACK: X
            })
        }
    }
    eg.displayName = "GuildReadStateStore", eg.LATEST_SNAPSHOT_VERSION = 1;
    var em = new eg
}