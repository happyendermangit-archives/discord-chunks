function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getUserIdFromCommunicationDisabledUserKey: function() {
            return k
        },
        getGuildIdFromCommunicationDisabledUserKey: function() {
            return V
        },
        default: function() {
            return Z
        }
    }), n("222007"), n("702976"), n("424973");
    var i, s, r = n("917351"),
        a = n.n(r),
        o = n("509043"),
        l = n("446674"),
        u = n("913144"),
        d = n("605250"),
        c = n("509"),
        f = n("564568"),
        _ = n("38654"),
        E = n("568734"),
        h = n("449008"),
        g = n("299039"),
        m = n("271938"),
        p = n("42203"),
        S = n("305961"),
        v = n("657944");
    let T = new d.default("GuildMemberStore"),
        I = {},
        A = {},
        C = {},
        y = !1,
        N = 0,
        R = 0,
        O = {},
        D = {},
        P = {
            added: [],
            removed: []
        };

    function L(e, t) {
        if (null == t.communicationDisabledUntil || !(0, c.isMemberCommunicationDisabled)(t)) return M(e, t.userId);
        let n = w(e, t.userId),
            i = C[n];
        i !== t.communicationDisabledUntil && (0, c.isMemberCommunicationDisabled)(t) && (C[n] = t.communicationDisabledUntil, b(n))
    }

    function M(e, t) {
        if (null != t) {
            let n = w(e, t);
            null != C[n] && b(n), U(w(e, t))
        } else
            for (let t in C) {
                let n = V(t);
                n === e && (b(t), U(t))
            }
    }

    function b(e) {
        N += 1, O[e] = N
    }

    function U(e) {
        k(e) === m.default.getId() && (0, f.clearCommunicationDisabledNotice)(V(e)), delete C[e]
    }

    function w(e, t) {
        let n = [];
        return n[0] = e, n[1] = t, n.join("-")
    }

    function k(e) {
        return e.split("-")[1]
    }

    function V(e) {
        return e.split("-")[0]
    }

    function G(e, t) {
        let n, i, s, r, a;
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
            (null == a || t.position > a.position) && (a = t), t.color > 0 && (null == i || t.position > i.position) && (i = t), t.hoist && (null == s || t.position > s.position) && (s = t);
            let o = null != t.icon || null != t.unicodeEmoji;
            o && (null == r || t.position > r.position) && (r = t)
        }
        if (null != i) {
            var l;
            null == i.colorString && i.color > 0 && (i.colorString = (0, o.int2hex)(i.color)), n = null !== (l = i.colorString) && void 0 !== l ? l : void 0
        }
        return {
            colorString: n,
            colorRoleId: null == i ? void 0 : i.id,
            iconRoleId: null == r ? void 0 : r.id,
            hoistRoleId: null == s ? void 0 : s.id,
            highestRoleId: null == a ? void 0 : a.id
        }
    }

    function F(e) {
        let {
            userId: t,
            nick: n,
            guildId: i,
            avatar: s,
            avatarDecoration: r,
            guildRoles: a,
            roles: o,
            premiumSince: l,
            isPending: u,
            joinedAt: d,
            communicationDisabledUntil: c,
            unusualDMActivityUntil: f,
            fullProfileLoadedTimestamp: E,
            flags: h
        } = e, {
            colorString: p,
            colorRoleId: S,
            iconRoleId: v,
            hoistRoleId: T,
            highestRoleId: C
        } = G(a, o), y = {
            userId: t,
            nick: n,
            guildId: i,
            avatar: s,
            avatarDecoration: r,
            roles: o,
            colorString: p,
            colorRoleId: S,
            iconRoleId: v,
            hoistRoleId: T,
            highestRoleId: C,
            premiumSince: l,
            isPending: u,
            joinedAt: d,
            communicationDisabledUntil: c,
            unusualDMActivityUntil: f,
            fullProfileLoadedTimestamp: E,
            flags: h
        }, N = I[i];
        if (null == N) return y;
        if (t === m.default.getId()) {
            if (_.default.isViewingRoles(i) || _.default.isFullServerPreview(i)) {
                let e = _.default.getViewingRoles(i);
                A[i] = {
                    ...y,
                    ..._.default.getMemberOptions(i),
                    roles: null != e ? g.default.keys(e) : []
                }
            } else null != A[i] && delete A[i]
        }
        return y
    }(s = i || (i = {}))[s.GUILD = 0] = "GUILD", s[s.USER = 1] = "USER";

    function x(e) {
        e.guilds.forEach(e => {
            K(e)
        })
    }

    function B(e) {
        var t;
        let {
            guildId: n,
            user: i,
            nick: s,
            avatar: r,
            avatarDecoration: a,
            roles: o,
            premiumSince: l,
            isPending: u,
            joinedAt: d,
            communicationDisabledUntil: c,
            unusualDMActivityUntil: f,
            flags: _
        } = e, E = I[n];
        if (null == E) return !1;
        let h = S.default.getGuild(n);
        if (null == h) return T.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), !1;
        E[i.id] = F({
            userId: i.id,
            nick: s,
            guildId: n,
            avatar: r,
            avatarDecoration: null != a ? {
                asset: a.asset,
                skuId: a.sku_id
            } : void 0,
            guildRoles: S.default.getRoles(h.id),
            roles: o,
            premiumSince: l,
            isPending: u,
            joinedAt: d,
            communicationDisabledUntil: c,
            unusualDMActivityUntil: f,
            fullProfileLoadedTimestamp: null === (t = E[i.id]) || void 0 === t ? void 0 : t.fullProfileLoadedTimestamp,
            flags: _
        }), L(n, E[i.id])
    }

    function H(e, t) {
        let n = I[e];
        if (null == n) return !1;
        let i = S.default.getGuild(e);
        return null == i ? (T.warn("Guild ".concat(e, " not found during GUILD_MEMBERS_CHUNK.")), !1) : (t.forEach(t => {
            var s;
            let r = n[t.user.id];
            n[t.user.id] = F({
                userId: t.user.id,
                nick: t.nick,
                guildId: e,
                avatar: t.avatar,
                avatarDecoration: Y(t),
                guildRoles: S.default.getRoles(i.id),
                roles: t.roles,
                premiumSince: t.premium_since,
                isPending: t.pending,
                joinedAt: t.joined_at,
                communicationDisabledUntil: t.communication_disabled_until,
                flags: t.flags,
                fullProfileLoadedTimestamp: null == r ? void 0 : r.fullProfileLoadedTimestamp,
                unusualDMActivityUntil: null !== (s = t.unusual_dm_activity_until) && void 0 !== s ? s : null == r ? void 0 : r.unusualDMActivityUntil
            }), L(e, n[t.user.id])
        }), R++, !0)
    }

    function Y(e) {
        return null != e.avatar_decoration_data ? {
            asset: e.avatar_decoration_data.asset,
            skuId: e.avatar_decoration_data.sku_id
        } : void 0
    }

    function K(e) {
        let t = e.id;
        !(t in I) && (I[e.id] = {});
        let n = S.default.getGuild(t);
        if (null == n) return !1;
        let i = I[t];
        for (let r of e.members) {
            var s;
            let a = r.user.id,
                o = i[a],
                l = F({
                    userId: a,
                    nick: r.nick,
                    guildId: e.id,
                    avatar: r.avatar,
                    avatarDecoration: Y(r),
                    guildRoles: S.default.getRoles(n.id),
                    roles: r.roles,
                    premiumSince: r.premium_since,
                    isPending: r.pending,
                    joinedAt: r.joined_at,
                    communicationDisabledUntil: r.communication_disabled_until,
                    fullProfileLoadedTimestamp: null == o ? void 0 : o.fullProfileLoadedTimestamp,
                    flags: r.flags,
                    unusualDMActivityUntil: null !== (s = r.unusual_dm_activity_until) && void 0 !== s ? s : null == o ? void 0 : o.unusualDMActivityUntil
                });
            i[a] = l, L(t, l)
        }
        return !0
    }

    function j(e) {
        let t = I[e.guildId];
        if (null == t) return !1;
        let n = S.default.getGuild(e.guildId);
        if (null == n) return T.warn("Guild ".concat(e.guildId, " not found during ").concat(e.type, ".")), !1;
        for (let i of g.default.keys(t)) {
            let s = t[i];
            (null != s.roles && s.roles.length > 0 || null != s.colorString || null != s.hoistRoleId) && (t[i] = F({
                userId: i,
                nick: s.nick,
                guildId: e.guildId,
                avatar: s.avatar,
                avatarDecoration: s.avatarDecoration,
                guildRoles: S.default.getRoles(n.id),
                roles: s.roles,
                premiumSince: s.premiumSince,
                isPending: s.isPending,
                joinedAt: s.joinedAt,
                flags: s.flags,
                fullProfileLoadedTimestamp: null == s ? void 0 : s.fullProfileLoadedTimestamp
            }), L(e.guildId, t[i]))
        }
    }

    function W(e) {
        let {
            guildId: t
        } = e, n = I[t];
        if (null == n) return !1;
        let i = S.default.getGuild(t);
        if (null == i) return T.warn("Guild ".concat(t, " not found during IMPERSONATE_UPDATE.")), !1;
        let s = m.default.getId(),
            r = n[s];
        n[s] = F({
            userId: s,
            nick: r.nick,
            guildId: t,
            avatar: r.avatar,
            avatarDecoration: r.avatarDecoration,
            guildRoles: S.default.getRoles(i.id),
            roles: r.roles,
            premiumSince: r.premiumSince,
            isPending: r.isPending,
            joinedAt: r.joinedAt,
            communicationDisabledUntil: r.communicationDisabledUntil,
            fullProfileLoadedTimestamp: r.fullProfileLoadedTimestamp,
            flags: r.flags
        })
    }

    function z(e) {
        var t;
        let {
            message: n,
            guildId: i
        } = e;
        (null === (t = n.resolved) || void 0 === t ? void 0 : t.members) != null && null != i && K({
            id: i,
            members: Object.entries(n.resolved.members).map(e => {
                var t, i;
                let [s, r] = e, a = null === (i = n.resolved) || void 0 === i ? void 0 : null === (t = i.users) || void 0 === t ? void 0 : t[s];
                if (null != a) return {
                    ...r,
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
            let n = p.default.getChannel(e.channel_id);
            !(null == n || n.isPrivate()) && K({
                id: n.guild_id,
                members: Object.entries(e.resolved.members).map(t => {
                    var n, i;
                    let [s, r] = t, a = null === (i = e.resolved) || void 0 === i ? void 0 : null === (n = i.users) || void 0 === n ? void 0 : n[s];
                    if (null != a) return {
                        ...r,
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
            this.waitFor(S.default, m.default, _.default)
        }
        getMutableAllGuildsAndMembers() {
            return I
        }
        memberOf(e) {
            return a(I).toPairs().filter(t => {
                let [n, i] = t;
                return null != i[e]
            }).map(e => {
                let [t] = e;
                return t
            }).value()
        }
        getNicknameGuildsMapping(e) {
            let t = {};
            for (let i in I) {
                var n;
                let s = I[i],
                    r = null === (n = s[e]) || void 0 === n ? void 0 : n.nick;
                null != r && (!Object.prototype.hasOwnProperty.call(t, r) && (t[r] = []), t[r].push(i))
            }
            return t
        }
        getNicknames(e) {
            return Object.keys(this.getNicknameGuildsMapping(e))
        }
        isMember(e, t) {
            if (null == e || null == t) return !1;
            let n = I[e];
            return null != n && null != n[t]
        }
        isGuestOrLurker(e, t) {
            var n;
            if (null == e || null == t) return !1;
            let i = I[e];
            return null != i && (null === (n = i[t]) || void 0 === n ? void 0 : n.joinedAt) == null
        }
        isCurrentUserGuest(e) {
            if (null == e) return !1;
            let t = m.default.getId(),
                n = I[e];
            if (null == n || null == n[t]) return !1;
            let i = n[t].flags;
            return null != i && (0, E.hasFlag)(i, v.GuildMemberFlags.IS_GUEST)
        }
        getMemberIds(e) {
            if (null == e) return [];
            let t = I[e];
            return null == t ? [] : g.default.keys(t)
        }
        getMembers(e) {
            if (null == e) return [];
            let t = I[e];
            return null == t ? [] : Object.values(t)
        }
        getTrueMember(e, t) {
            let n = I[e];
            return null != n ? n[t] : null
        }
        getMember(e, t) {
            let n = this.getTrueMember(e, t);
            if (null != n && t === m.default.getId() && (_.default.isViewingRoles(e) || _.default.isFullServerPreview(e))) {
                var i;
                return null !== (i = A[e]) && void 0 !== i ? i : n
            }
            return n
        }
        getSelfMember(e) {
            return this.getMember(e, m.default.getId())
        }
        getNick(e, t) {
            if (null == e || null == t) return null;
            let n = this.getMember(e, t);
            return null != n ? n.nick : null
        }
        getCommunicationDisabledUserMap() {
            return C
        }
        getCommunicationDisabledVersion() {
            return N
        }
        getPendingRoleUpdates(e) {
            var t;
            return null !== (t = D[e]) && void 0 !== t ? t : P
        }
        getMemberRoleWithPendingUpdates(e, t) {
            var n, i;
            let s = null !== (i = null === (n = this.getMember(e, t)) || void 0 === n ? void 0 : n.roles) && void 0 !== i ? i : [],
                r = D[e];
            return null == r ? s : a.difference(a.union(s, r.added), r.removed)
        }
        getMemberVersion() {
            return R
        }
    }
    Q.displayName = "GuildMemberStore";
    var Z = new Q(u.default, {
        CONNECTION_OPEN: function(e) {
            y ? y = !1 : I = {}, C = {}, x(e)
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            x(e)
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                guildMembers: t
            } = e;
            I = {
                ...t
            }
        },
        CACHE_LOADED: function(e) {
            let {
                guildMembers: t
            } = e;
            y = !0, I = {
                ...t
            }
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            return K(t)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            delete I[t.id], M(t.id)
        },
        GUILD_MEMBER_ADD: B,
        GUILD_MEMBER_UPDATE: B,
        GUILD_MEMBER_UPDATE_LOCAL: function(e) {
            var t, n, i;
            let {
                guildId: s,
                roles: r,
                addedRoleIds: o,
                removedRoleIds: l,
                flags: u
            } = e, d = m.default.getId(), c = I[s], f = null != c ? c[d] : null;
            if (null == f) return !1;
            let _ = S.default.getGuild(s);
            if (null == _) return !1;
            let E = null !== (t = D[s]) && void 0 !== t ? t : {};
            D[s] = {
                added: a.difference(a.union(null !== (n = E.added) && void 0 !== n ? n : [], o), null != l ? l : []),
                removed: a.difference(a.union(null !== (i = E.removed) && void 0 !== i ? i : [], l), null != o ? o : [])
            }, c[d] = F({
                userId: d,
                guildId: s,
                nick: f.nick,
                avatar: f.avatar,
                avatarDecoration: f.avatarDecoration,
                guildRoles: S.default.getRoles(_.id),
                roles: null != r ? r : f.roles,
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
            } = e, i = I[t];
            if (null == i || null == i[n.id]) return !1;
            delete i[n.id], M(t, n.id), R++
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
        GUILD_ROLE_UPDATE: j,
        GUILD_ROLE_DELETE: j,
        GUILD_ROLE_MEMBER_REMOVE: function(e) {
            let {
                guildId: t,
                userId: n,
                roleId: i
            } = e, s = I[t];
            if (null == s) return !1;
            let r = S.default.getGuild(t);
            if (null == r) return T.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), !1;
            let a = s[n];
            if (null == a || !a.roles.includes(i)) return !1;
            a.roles = a.roles.filter(e => e !== i);
            let o = G(S.default.getRoles(r.id), a.roles);
            return s[n] = {
                ...a,
                ...o
            }, !0
        },
        GUILD_ROLE_MEMBER_ADD: function(e) {
            let {
                guildId: t,
                userId: n,
                roleId: i
            } = e, s = I[t];
            if (null == s) return !1;
            let r = S.default.getGuild(t);
            if (null == r) return T.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), !1;
            let a = s[n];
            if (null == a || a.roles.includes(i)) return !1;
            a.roles.push(i);
            let o = G(S.default.getRoles(r.id), a.roles);
            return s[n] = {
                ...a,
                ...o
            }, !0
        },
        GUILD_MEMBER_PROFILE_UPDATE: function(e) {
            let {
                guildMember: t,
                guildId: n
            } = e, i = I[n];
            if (null == i) return !1;
            let s = S.default.getGuild(n);
            if (null == s) return T.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), !1;
            i[t.user.id] = F({
                userId: t.user.id,
                nick: t.nick,
                guildId: n,
                avatar: t.avatar,
                avatarDecoration: Y(t),
                guildRoles: S.default.getRoles(s.id),
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
        IMPERSONATE_UPDATE: W,
        IMPERSONATE_STOP: W,
        PASSIVE_UPDATE_V1: function(e) {
            return null != e.members && H(e.guildId, e.members)
        },
        CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function(e) {
            let {
                guildId: t
            } = e;
            if (null == t) return !1;
            delete D[t]
        },
        LOCAL_MESSAGES_LOADED: function(e) {
            var t, n;
            if (null == e.guildId || null == S.default.getGuild(e.guildId)) return !1;
            y = !0, I[e.guildId] = null !== (t = I[e.guildId]) && void 0 !== t ? t : {};
            let i = !1;
            for (let t of (y = !0, I[e.guildId] = null !== (n = I[e.guildId]) && void 0 !== n ? n : {}, e.members)) null == I[e.guildId][t.userId] && (i = !0, I[e.guildId][t.userId] = t);
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