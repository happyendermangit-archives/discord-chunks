function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getUserIdFromCommunicationDisabledUserKey: function() {
            return w
        },
        getGuildIdFromCommunicationDisabledUserKey: function() {
            return k
        },
        default: function() {
            return Z
        }
    }), n("222007"), n("702976"), n("424973");
    var i, r, s = n("917351"),
        a = n.n(s),
        o = n("509043"),
        l = n("446674"),
        u = n("913144"),
        c = n("605250"),
        d = n("509"),
        f = n("564568"),
        E = n("38654"),
        p = n("568734"),
        h = n("449008"),
        _ = n("299039"),
        S = n("271938"),
        m = n("42203"),
        T = n("305961"),
        g = n("657944");
    let I = new c.default("GuildMemberStore"),
        C = {},
        v = {},
        A = {},
        R = !1,
        N = 0,
        O = 0,
        D = {},
        y = {},
        P = {
            added: [],
            removed: []
        };

    function L(e, t) {
        if (null == t.communicationDisabledUntil || !(0, d.isMemberCommunicationDisabled)(t)) return b(e, t.userId);
        let n = G(e, t.userId),
            i = A[n];
        i !== t.communicationDisabledUntil && (0, d.isMemberCommunicationDisabled)(t) && (A[n] = t.communicationDisabledUntil, M(n))
    }

    function b(e, t) {
        if (null != t) {
            let n = G(e, t);
            null != A[n] && M(n), U(G(e, t))
        } else
            for (let t in A) {
                let n = k(t);
                n === e && (M(t), U(t))
            }
    }

    function M(e) {
        N += 1, D[e] = N
    }

    function U(e) {
        w(e) === S.default.getId() && (0, f.clearCommunicationDisabledNotice)(k(e)), delete A[e]
    }

    function G(e, t) {
        let n = [];
        return n[0] = e, n[1] = t, n.join("-")
    }

    function w(e) {
        return e.split("-")[1]
    }

    function k(e) {
        return e.split("-")[0]
    }

    function x(e, t) {
        let n, i, r, s, a;
        if (0 === t.length) return {
            colorString: void 0,
            colorRoleId: void 0,
            hoistRoleId: void 0,
            iconRoleId: void 0,
            highestRoleId: void 0
        };
        for (let n of t) {
            let t = e[n];
            if (null == t) continue;
            (null == a || t.position > a.position) && (a = t), t.color > 0 && (null == i || t.position > i.position) && (i = t), t.hoist && (null == r || t.position > r.position) && (r = t);
            let o = null != t.icon || null != t.unicodeEmoji;
            o && (null == s || t.position > s.position) && (s = t)
        }
        if (null != i) {
            var l;
            null == i.colorString && i.color > 0 && (i.colorString = (0, o.int2hex)(i.color)), n = null !== (l = i.colorString) && void 0 !== l ? l : void 0
        }
        return {
            colorString: n,
            colorRoleId: null == i ? void 0 : i.id,
            iconRoleId: null == s ? void 0 : s.id,
            hoistRoleId: null == r ? void 0 : r.id,
            highestRoleId: null == a ? void 0 : a.id
        }
    }

    function F(e) {
        let {
            userId: t,
            nick: n,
            guildId: i,
            avatar: r,
            avatarDecoration: s,
            guildRoles: a,
            roles: o,
            premiumSince: l,
            isPending: u,
            joinedAt: c,
            communicationDisabledUntil: d,
            unusualDMActivityUntil: f,
            fullProfileLoadedTimestamp: p,
            flags: h
        } = e, {
            colorString: m,
            colorRoleId: T,
            iconRoleId: g,
            hoistRoleId: I,
            highestRoleId: A
        } = x(a, o), R = {
            userId: t,
            nick: n,
            guildId: i,
            avatar: r,
            avatarDecoration: s,
            roles: o,
            colorString: m,
            colorRoleId: T,
            iconRoleId: g,
            hoistRoleId: I,
            highestRoleId: A,
            premiumSince: l,
            isPending: u,
            joinedAt: c,
            communicationDisabledUntil: d,
            unusualDMActivityUntil: f,
            fullProfileLoadedTimestamp: p,
            flags: h
        }, N = C[i];
        if (null == N) return R;
        if (t === S.default.getId()) {
            if (E.default.isViewingRoles(i) || E.default.isFullServerPreview(i)) {
                let e = E.default.getViewingRoles(i);
                v[i] = {
                    ...R,
                    ...E.default.getMemberOptions(i),
                    roles: null != e ? _.default.keys(e) : []
                }
            } else null != v[i] && delete v[i]
        }
        return R
    }(r = i || (i = {}))[r.GUILD = 0] = "GUILD", r[r.USER = 1] = "USER";

    function V(e) {
        e.guilds.forEach(e => {
            j(e)
        })
    }

    function B(e) {
        var t;
        let {
            guildId: n,
            user: i,
            nick: r,
            avatar: s,
            avatarDecoration: a,
            roles: o,
            premiumSince: l,
            isPending: u,
            joinedAt: c,
            communicationDisabledUntil: d,
            unusualDMActivityUntil: f,
            flags: E
        } = e, p = C[n];
        if (null == p) return !1;
        let h = T.default.getGuild(n);
        if (null == h) return I.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), !1;
        p[i.id] = F({
            userId: i.id,
            nick: r,
            guildId: n,
            avatar: s,
            avatarDecoration: null != a ? {
                asset: a.asset,
                skuId: a.sku_id
            } : void 0,
            guildRoles: h.roles,
            roles: o,
            premiumSince: l,
            isPending: u,
            joinedAt: c,
            communicationDisabledUntil: d,
            unusualDMActivityUntil: f,
            fullProfileLoadedTimestamp: null === (t = p[i.id]) || void 0 === t ? void 0 : t.fullProfileLoadedTimestamp,
            flags: E
        }), L(n, p[i.id])
    }

    function H(e, t) {
        let n = C[e];
        if (null == n) return !1;
        let i = T.default.getGuild(e);
        return null == i ? (I.warn("Guild ".concat(e, " not found during GUILD_MEMBERS_CHUNK.")), !1) : (t.forEach(t => {
            var r;
            let s = n[t.user.id];
            n[t.user.id] = F({
                userId: t.user.id,
                nick: t.nick,
                guildId: e,
                avatar: t.avatar,
                avatarDecoration: Y(t),
                guildRoles: i.roles,
                roles: t.roles,
                premiumSince: t.premium_since,
                isPending: t.pending,
                joinedAt: t.joined_at,
                communicationDisabledUntil: t.communication_disabled_until,
                flags: t.flags,
                fullProfileLoadedTimestamp: null == s ? void 0 : s.fullProfileLoadedTimestamp,
                unusualDMActivityUntil: null !== (r = t.unusual_dm_activity_until) && void 0 !== r ? r : null == s ? void 0 : s.unusualDMActivityUntil
            }), L(e, n[t.user.id])
        }), O++, !0)
    }

    function Y(e) {
        return null != e.avatar_decoration_data ? {
            asset: e.avatar_decoration_data.asset,
            skuId: e.avatar_decoration_data.sku_id
        } : void 0
    }

    function j(e) {
        let t = e.id;
        !(t in C) && (C[e.id] = {});
        let n = T.default.getGuild(t);
        if (null == n) return !1;
        let i = C[t];
        for (let s of e.members) {
            var r;
            let a = s.user.id,
                o = i[a],
                l = F({
                    userId: a,
                    nick: s.nick,
                    guildId: e.id,
                    avatar: s.avatar,
                    avatarDecoration: Y(s),
                    guildRoles: n.roles,
                    roles: s.roles,
                    premiumSince: s.premium_since,
                    isPending: s.pending,
                    joinedAt: s.joined_at,
                    communicationDisabledUntil: s.communication_disabled_until,
                    fullProfileLoadedTimestamp: null == o ? void 0 : o.fullProfileLoadedTimestamp,
                    flags: s.flags,
                    unusualDMActivityUntil: null !== (r = s.unusual_dm_activity_until) && void 0 !== r ? r : null == o ? void 0 : o.unusualDMActivityUntil
                });
            i[a] = l, L(t, l)
        }
        return !0
    }

    function W(e) {
        let t = C[e.guildId];
        if (null == t) return !1;
        let n = T.default.getGuild(e.guildId);
        if (null == n) return I.warn("Guild ".concat(e.guildId, " not found during ").concat(e.type, ".")), !1;
        for (let i of _.default.keys(t)) {
            let r = t[i];
            (null != r.roles && r.roles.length > 0 || null != r.colorString || null != r.hoistRoleId) && (t[i] = F({
                userId: i,
                nick: r.nick,
                guildId: e.guildId,
                avatar: r.avatar,
                avatarDecoration: r.avatarDecoration,
                guildRoles: n.roles,
                roles: r.roles,
                premiumSince: r.premiumSince,
                isPending: r.isPending,
                joinedAt: r.joinedAt,
                flags: r.flags,
                fullProfileLoadedTimestamp: null == r ? void 0 : r.fullProfileLoadedTimestamp
            }), L(e.guildId, t[i]))
        }
    }

    function K(e) {
        let {
            guildId: t
        } = e, n = C[t];
        if (null == n) return !1;
        let i = T.default.getGuild(t);
        if (null == i) return I.warn("Guild ".concat(t, " not found during IMPERSONATE_UPDATE.")), !1;
        let r = S.default.getId(),
            s = n[r];
        n[r] = F({
            userId: r,
            nick: s.nick,
            guildId: t,
            avatar: s.avatar,
            avatarDecoration: s.avatarDecoration,
            guildRoles: i.roles,
            roles: s.roles,
            premiumSince: s.premiumSince,
            isPending: s.isPending,
            joinedAt: s.joinedAt,
            communicationDisabledUntil: s.communicationDisabledUntil,
            fullProfileLoadedTimestamp: s.fullProfileLoadedTimestamp,
            flags: s.flags
        })
    }

    function z(e) {
        var t;
        let {
            message: n,
            guildId: i
        } = e;
        (null === (t = n.resolved) || void 0 === t ? void 0 : t.members) != null && null != i && j({
            id: i,
            members: Object.entries(n.resolved.members).map(e => {
                var t, i;
                let [r, s] = e, a = null === (i = n.resolved) || void 0 === i ? void 0 : null === (t = i.users) || void 0 === t ? void 0 : t[r];
                if (null != a) return {
                    ...s,
                    user: a
                }
            }).filter(e => null != e)
        })
    }

    function q(e) {
        let {
            messages: t
        } = e;
        t.forEach(e => (function(e) {
            var t;
            if ((null === (t = e.resolved) || void 0 === t ? void 0 : t.members) == null) return;
            let n = m.default.getChannel(e.channel_id);
            !(null == n || n.isPrivate()) && j({
                id: n.guild_id,
                members: Object.entries(e.resolved.members).map(t => {
                    var n, i;
                    let [r, s] = t, a = null === (i = e.resolved) || void 0 === i ? void 0 : null === (n = i.users) || void 0 === n ? void 0 : n[r];
                    if (null != a) return {
                        ...s,
                        user: a
                    }
                }).filter(e => null != e)
            })
        })(e))
    }

    function X(e) {
        let {
            messages: t
        } = e;
        t.forEach(e => q({
            messages: e
        }))
    }
    class Q extends l.default.Store {
        initialize() {
            this.waitFor(T.default, S.default, E.default)
        }
        getMutableAllGuildsAndMembers() {
            return C
        }
        memberOf(e) {
            return a(C).toPairs().filter(t => {
                let [n, i] = t;
                return null != i[e]
            }).map(e => {
                let [t] = e;
                return t
            }).value()
        }
        getNicknameGuildsMapping(e) {
            let t = {};
            for (let i in C) {
                var n;
                let r = C[i],
                    s = null === (n = r[e]) || void 0 === n ? void 0 : n.nick;
                null != s && (!Object.prototype.hasOwnProperty.call(t, s) && (t[s] = []), t[s].push(i))
            }
            return t
        }
        getNicknames(e) {
            return Object.keys(this.getNicknameGuildsMapping(e))
        }
        isMember(e, t) {
            if (null == e || null == t) return !1;
            let n = C[e];
            return null != n && null != n[t]
        }
        isGuestOrLurker(e, t) {
            var n;
            if (null == e || null == t) return !1;
            let i = C[e];
            return null != i && (null === (n = i[t]) || void 0 === n ? void 0 : n.joinedAt) == null
        }
        isCurrentUserGuest(e) {
            if (null == e) return !1;
            let t = S.default.getId(),
                n = C[e];
            if (null == n || null == n[t]) return !1;
            let i = n[t].flags;
            return null != i && (0, p.hasFlag)(i, g.GuildMemberFlags.IS_GUEST)
        }
        getMemberIds(e) {
            if (null == e) return [];
            let t = C[e];
            return null == t ? [] : _.default.keys(t)
        }
        getMembers(e) {
            if (null == e) return [];
            let t = C[e];
            return null == t ? [] : Object.values(t)
        }
        getTrueMember(e, t) {
            let n = C[e];
            return null != n ? n[t] : null
        }
        getMember(e, t) {
            let n = this.getTrueMember(e, t);
            if (null != n && t === S.default.getId() && (E.default.isViewingRoles(e) || E.default.isFullServerPreview(e))) {
                var i;
                return null !== (i = v[e]) && void 0 !== i ? i : n
            }
            return n
        }
        getSelfMember(e) {
            return this.getMember(e, S.default.getId())
        }
        getNick(e, t) {
            if (null == e || null == t) return null;
            let n = this.getMember(e, t);
            return null != n ? n.nick : null
        }
        getCommunicationDisabledUserMap() {
            return A
        }
        getCommunicationDisabledVersion() {
            return N
        }
        getPendingRoleUpdates(e) {
            var t;
            return null !== (t = y[e]) && void 0 !== t ? t : P
        }
        getMemberRoleWithPendingUpdates(e, t) {
            var n, i;
            let r = null !== (i = null === (n = this.getMember(e, t)) || void 0 === n ? void 0 : n.roles) && void 0 !== i ? i : [],
                s = y[e];
            return null == s ? r : a.difference(a.union(r, s.added), s.removed)
        }
        getMemberVersion() {
            return O
        }
    }
    Q.displayName = "GuildMemberStore";
    var Z = new Q(u.default, {
        CONNECTION_OPEN: function(e) {
            R ? R = !1 : C = {}, A = {}, V(e)
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            V(e)
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                guildMembers: t
            } = e;
            C = {
                ...t
            }
        },
        CACHE_LOADED: function(e) {
            let {
                guildMembers: t
            } = e;
            R = !0, C = {
                ...t
            }
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            return j(t)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            delete C[t.id], b(t.id)
        },
        GUILD_MEMBER_ADD: B,
        GUILD_MEMBER_UPDATE: B,
        GUILD_MEMBER_UPDATE_LOCAL: function(e) {
            var t, n, i;
            let {
                guildId: r,
                roles: s,
                addedRoleIds: o,
                removedRoleIds: l,
                flags: u
            } = e, c = S.default.getId(), d = C[r], f = null != d ? d[c] : null;
            if (null == f) return !1;
            let E = T.default.getGuild(r);
            if (null == E) return !1;
            let p = null !== (t = y[r]) && void 0 !== t ? t : {};
            y[r] = {
                added: a.difference(a.union(null !== (n = p.added) && void 0 !== n ? n : [], o), null != l ? l : []),
                removed: a.difference(a.union(null !== (i = p.removed) && void 0 !== i ? i : [], l), null != o ? o : [])
            }, d[c] = F({
                userId: c,
                guildId: r,
                nick: f.nick,
                avatar: f.avatar,
                avatarDecoration: f.avatarDecoration,
                guildRoles: E.roles,
                roles: null != s ? s : f.roles,
                premiumSince: f.premiumSince,
                isPending: f.isPending,
                joinedAt: f.joinedAt,
                flags: null != u ? u : f.flags,
                fullProfileLoadedTimestamp: f.fullProfileLoadedTimestamp
            })
        },
        GUILD_MEMBERS_CHUNK: function(e) {
            return H(e.guildId, e.members)
        },
        GUILD_MEMBER_REMOVE: function(e) {
            let {
                guildId: t,
                user: n
            } = e, i = C[t];
            if (null == i || null == i[n.id]) return !1;
            delete i[n.id], b(t, n.id), O++
        },
        THREAD_MEMBER_LIST_UPDATE: function(e) {
            let {
                guildId: t,
                members: n
            } = e;
            return H(t, n.map(e => e.member).filter(h.isNotNullish))
        },
        THREAD_MEMBERS_UPDATE: function(e) {
            let {
                guildId: t,
                addedMembers: n
            } = e;
            return null != n && H(t, n.map(e => e.member).filter(h.isNotNullish))
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
            let {
                guildId: t,
                owners: n
            } = e;
            return H(t, n)
        },
        LOAD_FORUM_POSTS: function(e) {
            let {
                guildId: t,
                threads: n
            } = e;
            return H(t, Object.values(n).map(e => e.owner).filter(h.isNotNullish))
        },
        GUILD_ROLE_UPDATE: W,
        GUILD_ROLE_DELETE: W,
        GUILD_ROLE_MEMBER_REMOVE: function(e) {
            let {
                guildId: t,
                userId: n,
                roleId: i
            } = e, r = C[t];
            if (null == r) return !1;
            let s = T.default.getGuild(t);
            if (null == s) return I.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), !1;
            let a = r[n];
            if (null == a || !a.roles.includes(i)) return !1;
            a.roles = a.roles.filter(e => e !== i);
            let o = x(s.roles, a.roles);
            return r[n] = {
                ...a,
                ...o
            }, !0
        },
        GUILD_ROLE_MEMBER_ADD: function(e) {
            let {
                guildId: t,
                userId: n,
                roleId: i
            } = e, r = C[t];
            if (null == r) return !1;
            let s = T.default.getGuild(t);
            if (null == s) return I.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), !1;
            let a = r[n];
            if (null == a || a.roles.includes(i)) return !1;
            a.roles.push(i);
            let o = x(s.roles, a.roles);
            return r[n] = {
                ...a,
                ...o
            }, !0
        },
        GUILD_MEMBER_PROFILE_UPDATE: function(e) {
            let {
                guildMember: t,
                guildId: n
            } = e, i = C[n];
            if (null == i) return !1;
            let r = T.default.getGuild(n);
            if (null == r) return I.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), !1;
            i[t.user.id] = F({
                userId: t.user.id,
                nick: t.nick,
                guildId: n,
                avatar: t.avatar,
                avatarDecoration: Y(t),
                guildRoles: r.roles,
                roles: t.roles,
                premiumSince: t.premium_since,
                isPending: t.pending,
                joinedAt: t.joined_at,
                communicationDisabledUntil: t.communication_disabled_until,
                unusualDMActivityUntil: t.unusual_dm_activity_until,
                flags: t.flags,
                fullProfileLoadedTimestamp: Date.now()
            }), L(n, i[t.user.id])
        },
        IMPERSONATE_UPDATE: K,
        IMPERSONATE_STOP: K,
        PASSIVE_UPDATE_V1: function(e) {
            return null != e.members && H(e.guildId, e.members)
        },
        CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function(e) {
            let {
                guildId: t
            } = e;
            if (null == t) return !1;
            delete y[t]
        },
        LOCAL_MESSAGES_LOADED: function(e) {
            var t, n;
            if (null == e.guildId || null == T.default.getGuild(e.guildId)) return !1;
            R = !0, C[e.guildId] = null !== (t = C[e.guildId]) && void 0 !== t ? t : {};
            let i = !1;
            for (let t of (R = !0, C[e.guildId] = null !== (n = C[e.guildId]) && void 0 !== n ? n : {}, e.members)) null == C[e.guildId][t.userId] && (i = !0, C[e.guildId][t.userId] = t);
            return i
        },
        MESSAGE_CREATE: z,
        MESSAGE_UPDATE: z,
        LOAD_MESSAGES_SUCCESS: q,
        LOAD_MESSAGES_AROUND_SUCCESS: q,
        LOAD_PINNED_MESSAGES_SUCCESS: q,
        LOAD_RECENT_MENTIONS_SUCCESS: q,
        SEARCH_FINISH: X,
        MOD_VIEW_SEARCH_FINISH: X,
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
            let {
                guildId: t,
                members: n
            } = e, i = n.map(e => {
                let {
                    member: t
                } = e;
                return t
            });
            return H(t, i)
        }
    })
}