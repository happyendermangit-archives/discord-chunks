function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getGuildIdFromCommunicationDisabledUserKey: function() {
            return F
        },
        getUserIdFromCommunicationDisabledUserKey: function() {
            return x
        }
    }), n("47120"), n("789020"), n("653041");
    var i, r, a, s, o, l, u = n("392711"),
        d = n.n(u),
        _ = n("866442"),
        c = n("442837"),
        E = n("570140"),
        I = n("710845"),
        T = n("69882"),
        f = n("134049"),
        S = n("160404"),
        h = n("630388"),
        A = n("823379"),
        m = n("709054"),
        N = n("314897"),
        p = n("592125"),
        O = n("430824"),
        R = n("372897");
    let C = new I.default("GuildMemberStore"),
        g = {},
        L = {},
        v = {},
        D = !1,
        M = 0,
        y = 0,
        P = {},
        U = {},
        b = {
            added: [],
            removed: []
        };

    function G(e, t) {
        if (null == t.communicationDisabledUntil || !(0, T.isMemberCommunicationDisabled)(t)) return w(e, t.userId);
        let n = V(e, t.userId);
        v[n] !== t.communicationDisabledUntil && (0, T.isMemberCommunicationDisabled)(t) && (v[n] = t.communicationDisabledUntil, B(n))
    }

    function w(e, t) {
        if (null != t) {
            let n = V(e, t);
            null != v[n] && B(n), k(V(e, t))
        } else
            for (let t in v) F(t) === e && (B(t), k(t))
    }

    function B(e) {
        M += 1, P[e] = M
    }

    function k(e) {
        x(e) === N.default.getId() && (0, f.clearCommunicationDisabledNotice)(F(e)), delete v[e]
    }

    function V(e, t) {
        let n = [];
        return n[0] = e, n[1] = t, n.join("-")
    }

    function x(e) {
        return e.split("-")[1]
    }

    function F(e) {
        return e.split("-")[0]
    }

    function H(e, t) {
        let n, i, r, a, s;
        if (0 === t.length) return {
            colorString: void 0,
            colorRoleId: void 0,
            hoistRoleId: void 0,
            iconRoleId: void 0,
            highestRoleId: void 0
        };
        for (let n of t) {
            let t = e[n];
            if (null != t)(null == s || t.position > s.position) && (s = t), t.color > 0 && (null == i || t.position > i.position) && (i = t), t.hoist && (null == r || t.position > r.position) && (r = t), (null != t.icon || null != t.unicodeEmoji) && (null == a || t.position > a.position) && (a = t)
        }
        if (null != i) {
            var o;
            null == i.colorString && i.color > 0 && (i.colorString = (0, _.int2hex)(i.color)), n = null !== (o = i.colorString) && void 0 !== o ? o : void 0
        }
        return {
            colorString: n,
            colorRoleId: null == i ? void 0 : i.id,
            iconRoleId: null == a ? void 0 : a.id,
            hoistRoleId: null == r ? void 0 : r.id,
            highestRoleId: null == s ? void 0 : s.id
        }
    }

    function Y(e) {
        let {
            userId: t,
            nick: n,
            guildId: i,
            avatar: r,
            avatarDecoration: a,
            guildRoles: s,
            roles: o,
            premiumSince: l,
            isPending: u,
            joinedAt: d,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: c,
            fullProfileLoadedTimestamp: E,
            flags: I
        } = e, {
            colorString: T,
            colorRoleId: f,
            iconRoleId: h,
            hoistRoleId: A,
            highestRoleId: p
        } = H(s, o), O = {
            userId: t,
            nick: n,
            guildId: i,
            avatar: r,
            avatarDecoration: a,
            roles: o,
            colorString: T,
            colorRoleId: f,
            iconRoleId: h,
            hoistRoleId: A,
            highestRoleId: p,
            premiumSince: l,
            isPending: u,
            joinedAt: d,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: c,
            fullProfileLoadedTimestamp: E,
            flags: I
        };
        if (null == g[i]) return O;
        if (t === N.default.getId()) {
            if (S.default.isViewingRoles(i) || S.default.isFullServerPreview(i)) {
                let e = S.default.getViewingRoles(i);
                L[i] = {
                    ...O,
                    ...S.default.getMemberOptions(i),
                    roles: null != e ? m.default.keys(e) : []
                }
            } else null != L[i] && delete L[i]
        }
        return O
    }(a = i || (i = {}))[a.GUILD = 0] = "GUILD", a[a.USER = 1] = "USER";

    function j(e) {
        e.guilds.forEach(e => {
            Z(e)
        })
    }

    function W(e) {
        var t;
        let {
            guildId: n,
            user: i,
            nick: r,
            avatar: a,
            avatarDecoration: s,
            roles: o,
            premiumSince: l,
            isPending: u,
            joinedAt: d,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: c,
            flags: E
        } = e, I = g[n];
        if (null == I) return !1;
        let T = O.default.getGuild(n);
        if (null == T) return C.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), !1;
        I[i.id] = Y({
            userId: i.id,
            nick: r,
            guildId: n,
            avatar: a,
            avatarDecoration: null != s ? {
                asset: s.asset,
                skuId: s.sku_id
            } : void 0,
            guildRoles: O.default.getRoles(T.id),
            roles: o,
            premiumSince: l,
            isPending: u,
            joinedAt: d,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: c,
            fullProfileLoadedTimestamp: null === (t = I[i.id]) || void 0 === t ? void 0 : t.fullProfileLoadedTimestamp,
            flags: E
        }), G(n, I[i.id])
    }

    function K(e, t) {
        let n = g[e];
        if (null == n) return !1;
        let i = O.default.getGuild(e);
        return null == i ? (C.warn("Guild ".concat(e, " not found during batchUpdateGuildMembers.")), !1) : (t.forEach(t => {
            var r;
            let a = n[t.user.id];
            n[t.user.id] = Y({
                userId: t.user.id,
                nick: t.nick,
                guildId: e,
                avatar: t.avatar,
                avatarDecoration: z(t),
                guildRoles: O.default.getRoles(i.id),
                roles: t.roles,
                premiumSince: t.premium_since,
                isPending: t.pending,
                joinedAt: t.joined_at,
                communicationDisabledUntil: t.communication_disabled_until,
                flags: t.flags,
                fullProfileLoadedTimestamp: null == a ? void 0 : a.fullProfileLoadedTimestamp,
                unusualDMActivityUntil: null !== (r = t.unusual_dm_activity_until) && void 0 !== r ? r : null == a ? void 0 : a.unusualDMActivityUntil
            }), G(e, n[t.user.id])
        }), y++, !0)
    }

    function z(e) {
        return null != e.avatar_decoration_data ? {
            asset: e.avatar_decoration_data.asset,
            skuId: e.avatar_decoration_data.sku_id
        } : void 0
    }

    function Z(e) {
        let t = e.id;
        !(t in g) && (g[e.id] = {});
        let n = O.default.getGuild(t);
        if (null == n) return !1;
        let i = g[t];
        for (let a of e.members) {
            var r;
            let s = a.user.id,
                o = i[s],
                l = Y({
                    userId: s,
                    nick: a.nick,
                    guildId: e.id,
                    avatar: a.avatar,
                    avatarDecoration: z(a),
                    guildRoles: O.default.getRoles(n.id),
                    roles: a.roles,
                    premiumSince: a.premium_since,
                    isPending: a.pending,
                    joinedAt: a.joined_at,
                    communicationDisabledUntil: a.communication_disabled_until,
                    fullProfileLoadedTimestamp: null == o ? void 0 : o.fullProfileLoadedTimestamp,
                    flags: a.flags,
                    unusualDMActivityUntil: null !== (r = a.unusual_dm_activity_until) && void 0 !== r ? r : null == o ? void 0 : o.unusualDMActivityUntil
                });
            i[s] = l, G(t, l)
        }
        return !0
    }

    function X(e) {
        let t = g[e.guildId];
        if (null == t) return !1;
        let n = O.default.getGuild(e.guildId);
        if (null == n) return C.warn("Guild ".concat(e.guildId, " not found during ").concat(e.type, ".")), !1;
        for (let i of m.default.keys(t)) {
            let r = t[i];
            (null != r.roles && r.roles.length > 0 || null != r.colorString || null != r.hoistRoleId) && (t[i] = Y({
                userId: i,
                nick: r.nick,
                guildId: e.guildId,
                avatar: r.avatar,
                avatarDecoration: r.avatarDecoration,
                guildRoles: O.default.getRoles(n.id),
                roles: r.roles,
                premiumSince: r.premiumSince,
                isPending: r.isPending,
                joinedAt: r.joinedAt,
                flags: r.flags,
                fullProfileLoadedTimestamp: null == r ? void 0 : r.fullProfileLoadedTimestamp
            }), G(e.guildId, t[i]))
        }
    }

    function Q(e) {
        let {
            guildId: t
        } = e, n = g[t];
        if (null == n) return !1;
        let i = O.default.getGuild(t);
        if (null == i) return C.warn("Guild ".concat(t, " not found during IMPERSONATE_UPDATE.")), !1;
        let r = N.default.getId(),
            a = n[r];
        n[r] = Y({
            userId: r,
            nick: a.nick,
            guildId: t,
            avatar: a.avatar,
            avatarDecoration: a.avatarDecoration,
            guildRoles: O.default.getRoles(i.id),
            roles: a.roles,
            premiumSince: a.premiumSince,
            isPending: a.isPending,
            joinedAt: a.joinedAt,
            communicationDisabledUntil: a.communicationDisabledUntil,
            fullProfileLoadedTimestamp: a.fullProfileLoadedTimestamp,
            flags: a.flags
        })
    }

    function q(e) {
        var t;
        let {
            message: n,
            guildId: i
        } = e;
        (null === (t = n.resolved) || void 0 === t ? void 0 : t.members) != null && null != i && Z({
            id: i,
            members: Object.entries(n.resolved.members).map(e => {
                var t, i;
                let [r, a] = e, s = null === (i = n.resolved) || void 0 === i ? void 0 : null === (t = i.users) || void 0 === t ? void 0 : t[r];
                if (null != s) return {
                    ...a,
                    user: s
                }
            }).filter(e => null != e)
        })
    }

    function J(e) {
        let {
            messages: t
        } = e;
        t.forEach(e => (function(e) {
            var t;
            if ((null === (t = e.resolved) || void 0 === t ? void 0 : t.members) == null) return;
            let n = p.default.getChannel(e.channel_id);
            !(null == n || n.isPrivate()) && Z({
                id: n.guild_id,
                members: Object.entries(e.resolved.members).map(t => {
                    var n, i;
                    let [r, a] = t, s = null === (i = e.resolved) || void 0 === i ? void 0 : null === (n = i.users) || void 0 === n ? void 0 : n[r];
                    if (null != s) return {
                        ...a,
                        user: s
                    }
                }).filter(e => null != e)
            })
        })(e))
    }

    function $(e) {
        let {
            messages: t
        } = e;
        t.forEach(e => J({
            messages: e
        }))
    }
    class ee extends(r = c.default.Store) {
        initialize() {
            this.waitFor(O.default, N.default, S.default)
        }
        getMutableAllGuildsAndMembers() {
            return g
        }
        memberOf(e) {
            return d()(g).toPairs().filter(t => {
                let [n, i] = t;
                return null != i[e]
            }).map(e => {
                let [t] = e;
                return t
            }).value()
        }
        getNicknameGuildsMapping(e) {
            let t = {};
            for (let i in g) {
                var n;
                let r = null === (n = g[i][e]) || void 0 === n ? void 0 : n.nick;
                null != r && (!Object.prototype.hasOwnProperty.call(t, r) && (t[r] = []), t[r].push(i))
            }
            return t
        }
        getNicknames(e) {
            return Object.keys(this.getNicknameGuildsMapping(e))
        }
        isMember(e, t) {
            if (null == e || null == t) return !1;
            let n = g[e];
            return null != n && null != n[t]
        }
        isGuestOrLurker(e, t) {
            var n;
            if (null == e || null == t) return !1;
            let i = g[e];
            return null != i && (null === (n = i[t]) || void 0 === n ? void 0 : n.joinedAt) == null
        }
        isCurrentUserGuest(e) {
            if (null == e) return !1;
            let t = N.default.getId(),
                n = g[e];
            if (null == n || null == n[t]) return !1;
            let i = n[t].flags;
            return null != i && (0, h.hasFlag)(i, R.GuildMemberFlags.IS_GUEST)
        }
        getMemberIds(e) {
            if (null == e) return [];
            let t = g[e];
            return null == t ? [] : m.default.keys(t)
        }
        getMembers(e) {
            if (null == e) return [];
            let t = g[e];
            return null == t ? [] : Object.values(t)
        }
        getTrueMember(e, t) {
            let n = g[e];
            return null != n ? n[t] : null
        }
        getMember(e, t) {
            let n = this.getTrueMember(e, t);
            if (null != n && t === N.default.getId() && (S.default.isViewingRoles(e) || S.default.isFullServerPreview(e))) {
                var i;
                return null !== (i = L[e]) && void 0 !== i ? i : n
            }
            return n
        }
        getSelfMember(e) {
            return this.getMember(e, N.default.getId())
        }
        getNick(e, t) {
            if (null == e || null == t) return null;
            let n = this.getMember(e, t);
            return null != n ? n.nick : null
        }
        getCommunicationDisabledUserMap() {
            return v
        }
        getCommunicationDisabledVersion() {
            return M
        }
        getPendingRoleUpdates(e) {
            var t;
            return null !== (t = U[e]) && void 0 !== t ? t : b
        }
        getMemberRoleWithPendingUpdates(e, t) {
            var n, i;
            let r = null !== (i = null === (n = this.getMember(e, t)) || void 0 === n ? void 0 : n.roles) && void 0 !== i ? i : [],
                a = U[e];
            return null == a ? r : d().difference(d().union(r, a.added), a.removed)
        }
        getMemberVersion() {
            return y
        }
    }
    l = "GuildMemberStore", (o = "displayName") in(s = ee) ? Object.defineProperty(s, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[o] = l, t.default = new ee(E.default, {
        CONNECTION_OPEN: function(e) {
            D ? D = !1 : g = {}, v = {}, j(e)
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            j(e)
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                guildMembers: t
            } = e;
            g = {
                ...t
            }
        },
        CACHE_LOADED: function(e) {
            let {
                guildMembers: t
            } = e;
            D = !0, g = {
                ...t
            }
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            return Z(t)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            delete g[t.id], w(t.id)
        },
        GUILD_MEMBER_ADD: W,
        GUILD_MEMBER_UPDATE: W,
        GUILD_MEMBER_UPDATE_LOCAL: function(e) {
            var t, n, i;
            let {
                guildId: r,
                roles: a,
                addedRoleIds: s,
                removedRoleIds: o,
                flags: l
            } = e, u = N.default.getId(), _ = g[r], c = null != _ ? _[u] : null;
            if (null == c) return !1;
            let E = O.default.getGuild(r);
            if (null == E) return !1;
            let I = null !== (t = U[r]) && void 0 !== t ? t : {};
            U[r] = {
                added: d().difference(d().union(null !== (n = I.added) && void 0 !== n ? n : [], s), null != o ? o : []),
                removed: d().difference(d().union(null !== (i = I.removed) && void 0 !== i ? i : [], o), null != s ? s : [])
            }, _[u] = Y({
                userId: u,
                guildId: r,
                nick: c.nick,
                avatar: c.avatar,
                avatarDecoration: c.avatarDecoration,
                guildRoles: O.default.getRoles(E.id),
                roles: null != a ? a : c.roles,
                premiumSince: c.premiumSince,
                isPending: c.isPending,
                joinedAt: c.joinedAt,
                flags: null != l ? l : c.flags,
                fullProfileLoadedTimestamp: c.fullProfileLoadedTimestamp
            })
        },
        GUILD_MEMBERS_CHUNK_BATCH: function(e) {
            let t = !1;
            for (let n of e.chunks) t = K(n.guildId, n.members) || t;
            return t
        },
        GUILD_MEMBER_REMOVE: function(e) {
            let {
                guildId: t,
                user: n
            } = e, i = g[t];
            if (null == i || null == i[n.id]) return !1;
            delete i[n.id], w(t, n.id), y++
        },
        THREAD_MEMBER_LIST_UPDATE: function(e) {
            let {
                guildId: t,
                members: n
            } = e;
            return K(t, n.map(e => e.member).filter(A.isNotNullish))
        },
        THREAD_MEMBERS_UPDATE: function(e) {
            let {
                guildId: t,
                addedMembers: n
            } = e;
            return null != n && K(t, n.map(e => e.member).filter(A.isNotNullish))
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
            let {
                guildId: t,
                owners: n
            } = e;
            return K(t, n)
        },
        LOAD_FORUM_POSTS: function(e) {
            let {
                guildId: t,
                threads: n
            } = e;
            return K(t, Object.values(n).map(e => e.owner).filter(A.isNotNullish))
        },
        GUILD_ROLE_UPDATE: X,
        GUILD_ROLE_DELETE: X,
        GUILD_ROLE_MEMBER_REMOVE: function(e) {
            let {
                guildId: t,
                userId: n,
                roleId: i
            } = e, r = g[t];
            if (null == r) return !1;
            let a = O.default.getGuild(t);
            if (null == a) return C.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), !1;
            let s = r[n];
            if (null == s || !s.roles.includes(i)) return !1;
            s.roles = s.roles.filter(e => e !== i);
            let o = H(O.default.getRoles(a.id), s.roles);
            return r[n] = {
                ...s,
                ...o
            }, !0
        },
        GUILD_ROLE_MEMBER_ADD: function(e) {
            let {
                guildId: t,
                userId: n,
                roleId: i
            } = e, r = g[t];
            if (null == r) return !1;
            let a = O.default.getGuild(t);
            if (null == a) return C.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), !1;
            let s = r[n];
            if (null == s || s.roles.includes(i)) return !1;
            s.roles.push(i);
            let o = H(O.default.getRoles(a.id), s.roles);
            return r[n] = {
                ...s,
                ...o
            }, !0
        },
        GUILD_MEMBER_PROFILE_UPDATE: function(e) {
            let {
                guildMember: t,
                guildId: n
            } = e, i = g[n];
            if (null == i) return !1;
            let r = O.default.getGuild(n);
            if (null == r) return C.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), !1;
            i[t.user.id] = Y({
                userId: t.user.id,
                nick: t.nick,
                guildId: n,
                avatar: t.avatar,
                avatarDecoration: z(t),
                guildRoles: O.default.getRoles(r.id),
                roles: t.roles,
                premiumSince: t.premium_since,
                isPending: t.pending,
                joinedAt: t.joined_at,
                communicationDisabledUntil: t.communication_disabled_until,
                unusualDMActivityUntil: t.unusual_dm_activity_until,
                flags: t.flags,
                fullProfileLoadedTimestamp: Date.now()
            }), G(n, i[t.user.id])
        },
        IMPERSONATE_UPDATE: Q,
        IMPERSONATE_STOP: Q,
        PASSIVE_UPDATE_V1: function(e) {
            return null != e.members && K(e.guildId, e.members)
        },
        CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function(e) {
            let {
                guildId: t
            } = e;
            if (null == t) return !1;
            delete U[t]
        },
        LOCAL_MESSAGES_LOADED: function(e) {
            var t, n;
            if (null == e.guildId || null == O.default.getGuild(e.guildId)) return !1;
            D = !0, g[e.guildId] = null !== (t = g[e.guildId]) && void 0 !== t ? t : {};
            let i = !1;
            for (let t of (D = !0, g[e.guildId] = null !== (n = g[e.guildId]) && void 0 !== n ? n : {}, e.members)) null == g[e.guildId][t.userId] && (i = !0, g[e.guildId][t.userId] = t);
            return i
        },
        MESSAGE_CREATE: q,
        MESSAGE_UPDATE: q,
        LOAD_MESSAGES_SUCCESS: J,
        LOAD_MESSAGES_AROUND_SUCCESS: J,
        LOAD_PINNED_MESSAGES_SUCCESS: J,
        LOAD_RECENT_MENTIONS_SUCCESS: J,
        SEARCH_FINISH: $,
        MOD_VIEW_SEARCH_FINISH: $,
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
            let {
                guildId: t,
                members: n
            } = e;
            return K(t, n.map(e => {
                let {
                    member: t
                } = e;
                return t
            }))
        }
    })
}