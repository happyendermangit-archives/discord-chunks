function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getGuildIdFromCommunicationDisabledUserKey: function() {
            return x
        },
        getUserIdFromCommunicationDisabledUserKey: function() {
            return F
        }
    }), n("47120"), n("789020"), n("653041");
    var i, r, s, a, o, l, u = n("392711"),
        d = n.n(u),
        _ = n("866442"),
        c = n("442837"),
        E = n("570140"),
        I = n("710845"),
        T = n("69882"),
        f = n("134049"),
        S = n("160404"),
        A = n("630388"),
        h = n("823379"),
        m = n("709054"),
        N = n("314897"),
        O = n("592125"),
        p = n("430824"),
        R = n("372897");
    let C = new I.default("GuildMemberStore"),
        g = {},
        L = {},
        D = {},
        v = !1,
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
        D[n] !== t.communicationDisabledUntil && (0, T.isMemberCommunicationDisabled)(t) && (D[n] = t.communicationDisabledUntil, k(n))
    }

    function w(e, t) {
        if (null != t) {
            let n = V(e, t);
            null != D[n] && k(n), B(V(e, t))
        } else
            for (let t in D) x(t) === e && (k(t), B(t))
    }

    function k(e) {
        M += 1, P[e] = M
    }

    function B(e) {
        F(e) === N.default.getId() && (0, f.clearCommunicationDisabledNotice)(x(e)), delete D[e]
    }

    function V(e, t) {
        let n = [];
        return n[0] = e, n[1] = t, n.join("-")
    }

    function F(e) {
        return e.split("-")[1]
    }

    function x(e) {
        return e.split("-")[0]
    }

    function H(e, t) {
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
            if (null != t)(null == a || t.position > a.position) && (a = t), t.color > 0 && (null == i || t.position > i.position) && (i = t), t.hoist && (null == r || t.position > r.position) && (r = t), (null != t.icon || null != t.unicodeEmoji) && (null == s || t.position > s.position) && (s = t)
        }
        if (null != i) {
            var o;
            null == i.colorString && i.color > 0 && (i.colorString = (0, _.int2hex)(i.color)), n = null !== (o = i.colorString) && void 0 !== o ? o : void 0
        }
        return {
            colorString: n,
            colorRoleId: null == i ? void 0 : i.id,
            iconRoleId: null == s ? void 0 : s.id,
            hoistRoleId: null == r ? void 0 : r.id,
            highestRoleId: null == a ? void 0 : a.id
        }
    }

    function Y(e) {
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
            joinedAt: d,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: c,
            fullProfileLoadedTimestamp: E,
            flags: I
        } = e, {
            colorString: T,
            colorRoleId: f,
            iconRoleId: A,
            hoistRoleId: h,
            highestRoleId: O
        } = H(a, o), p = {
            userId: t,
            nick: n,
            guildId: i,
            avatar: r,
            avatarDecoration: s,
            roles: o,
            colorString: T,
            colorRoleId: f,
            iconRoleId: A,
            hoistRoleId: h,
            highestRoleId: O,
            premiumSince: l,
            isPending: u,
            joinedAt: d,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: c,
            fullProfileLoadedTimestamp: E,
            flags: I
        };
        if (null == g[i]) return p;
        if (t === N.default.getId()) {
            if (S.default.isViewingRoles(i) || S.default.isFullServerPreview(i)) {
                let e = S.default.getViewingRoles(i);
                L[i] = {
                    ...p,
                    ...S.default.getMemberOptions(i),
                    roles: null != e ? m.default.keys(e) : []
                }
            } else null != L[i] && delete L[i]
        }
        return p
    }(s = i || (i = {}))[s.GUILD = 0] = "GUILD", s[s.USER = 1] = "USER";

    function j(e) {
        e.guilds.forEach(e => {
            X(e)
        })
    }

    function W(e) {
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
            joinedAt: d,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: c,
            flags: E
        } = e, I = g[n];
        if (null == I) return !1;
        let T = p.default.getGuild(n);
        if (null == T) return C.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), !1;
        I[i.id] = Y({
            userId: i.id,
            nick: r,
            guildId: n,
            avatar: s,
            avatarDecoration: null != a ? {
                asset: a.asset,
                skuId: a.sku_id
            } : void 0,
            guildRoles: p.default.getRoles(T.id),
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
        let i = p.default.getGuild(e);
        return null == i ? (C.warn("Guild ".concat(e, " not found during GUILD_MEMBERS_CHUNK.")), !1) : (t.forEach(t => {
            var r;
            let s = n[t.user.id];
            n[t.user.id] = Y({
                userId: t.user.id,
                nick: t.nick,
                guildId: e,
                avatar: t.avatar,
                avatarDecoration: z(t),
                guildRoles: p.default.getRoles(i.id),
                roles: t.roles,
                premiumSince: t.premium_since,
                isPending: t.pending,
                joinedAt: t.joined_at,
                communicationDisabledUntil: t.communication_disabled_until,
                flags: t.flags,
                fullProfileLoadedTimestamp: null == s ? void 0 : s.fullProfileLoadedTimestamp,
                unusualDMActivityUntil: null !== (r = t.unusual_dm_activity_until) && void 0 !== r ? r : null == s ? void 0 : s.unusualDMActivityUntil
            }), G(e, n[t.user.id])
        }), y++, !0)
    }

    function z(e) {
        return null != e.avatar_decoration_data ? {
            asset: e.avatar_decoration_data.asset,
            skuId: e.avatar_decoration_data.sku_id
        } : void 0
    }

    function X(e) {
        let t = e.id;
        !(t in g) && (g[e.id] = {});
        let n = p.default.getGuild(t);
        if (null == n) return !1;
        let i = g[t];
        for (let s of e.members) {
            var r;
            let a = s.user.id,
                o = i[a],
                l = Y({
                    userId: a,
                    nick: s.nick,
                    guildId: e.id,
                    avatar: s.avatar,
                    avatarDecoration: z(s),
                    guildRoles: p.default.getRoles(n.id),
                    roles: s.roles,
                    premiumSince: s.premium_since,
                    isPending: s.pending,
                    joinedAt: s.joined_at,
                    communicationDisabledUntil: s.communication_disabled_until,
                    fullProfileLoadedTimestamp: null == o ? void 0 : o.fullProfileLoadedTimestamp,
                    flags: s.flags,
                    unusualDMActivityUntil: null !== (r = s.unusual_dm_activity_until) && void 0 !== r ? r : null == o ? void 0 : o.unusualDMActivityUntil
                });
            i[a] = l, G(t, l)
        }
        return !0
    }

    function Q(e) {
        let t = g[e.guildId];
        if (null == t) return !1;
        let n = p.default.getGuild(e.guildId);
        if (null == n) return C.warn("Guild ".concat(e.guildId, " not found during ").concat(e.type, ".")), !1;
        for (let i of m.default.keys(t)) {
            let r = t[i];
            (null != r.roles && r.roles.length > 0 || null != r.colorString || null != r.hoistRoleId) && (t[i] = Y({
                userId: i,
                nick: r.nick,
                guildId: e.guildId,
                avatar: r.avatar,
                avatarDecoration: r.avatarDecoration,
                guildRoles: p.default.getRoles(n.id),
                roles: r.roles,
                premiumSince: r.premiumSince,
                isPending: r.isPending,
                joinedAt: r.joinedAt,
                flags: r.flags,
                fullProfileLoadedTimestamp: null == r ? void 0 : r.fullProfileLoadedTimestamp
            }), G(e.guildId, t[i]))
        }
    }

    function q(e) {
        let {
            guildId: t
        } = e, n = g[t];
        if (null == n) return !1;
        let i = p.default.getGuild(t);
        if (null == i) return C.warn("Guild ".concat(t, " not found during IMPERSONATE_UPDATE.")), !1;
        let r = N.default.getId(),
            s = n[r];
        n[r] = Y({
            userId: r,
            nick: s.nick,
            guildId: t,
            avatar: s.avatar,
            avatarDecoration: s.avatarDecoration,
            guildRoles: p.default.getRoles(i.id),
            roles: s.roles,
            premiumSince: s.premiumSince,
            isPending: s.isPending,
            joinedAt: s.joinedAt,
            communicationDisabledUntil: s.communicationDisabledUntil,
            fullProfileLoadedTimestamp: s.fullProfileLoadedTimestamp,
            flags: s.flags
        })
    }

    function Z(e) {
        var t;
        let {
            message: n,
            guildId: i
        } = e;
        (null === (t = n.resolved) || void 0 === t ? void 0 : t.members) != null && null != i && X({
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

    function J(e) {
        let {
            messages: t
        } = e;
        t.forEach(e => (function(e) {
            var t;
            if ((null === (t = e.resolved) || void 0 === t ? void 0 : t.members) == null) return;
            let n = O.default.getChannel(e.channel_id);
            !(null == n || n.isPrivate()) && X({
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
            this.waitFor(p.default, N.default, S.default)
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
            return null != i && (0, A.hasFlag)(i, R.GuildMemberFlags.IS_GUEST)
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
            return D
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
                s = U[e];
            return null == s ? r : d().difference(d().union(r, s.added), s.removed)
        }
        getMemberVersion() {
            return y
        }
    }
    l = "GuildMemberStore", (o = "displayName") in(a = ee) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new ee(E.default, {
        CONNECTION_OPEN: function(e) {
            v ? v = !1 : g = {}, D = {}, j(e)
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
            v = !0, g = {
                ...t
            }
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            return X(t)
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
                roles: s,
                addedRoleIds: a,
                removedRoleIds: o,
                flags: l
            } = e, u = N.default.getId(), _ = g[r], c = null != _ ? _[u] : null;
            if (null == c) return !1;
            let E = p.default.getGuild(r);
            if (null == E) return !1;
            let I = null !== (t = U[r]) && void 0 !== t ? t : {};
            U[r] = {
                added: d().difference(d().union(null !== (n = I.added) && void 0 !== n ? n : [], a), null != o ? o : []),
                removed: d().difference(d().union(null !== (i = I.removed) && void 0 !== i ? i : [], o), null != a ? a : [])
            }, _[u] = Y({
                userId: u,
                guildId: r,
                nick: c.nick,
                avatar: c.avatar,
                avatarDecoration: c.avatarDecoration,
                guildRoles: p.default.getRoles(E.id),
                roles: null != s ? s : c.roles,
                premiumSince: c.premiumSince,
                isPending: c.isPending,
                joinedAt: c.joinedAt,
                flags: null != l ? l : c.flags,
                fullProfileLoadedTimestamp: c.fullProfileLoadedTimestamp
            })
        },
        GUILD_MEMBERS_CHUNK: function(e) {
            return K(e.guildId, e.members)
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
            return K(t, n.map(e => e.member).filter(h.isNotNullish))
        },
        THREAD_MEMBERS_UPDATE: function(e) {
            let {
                guildId: t,
                addedMembers: n
            } = e;
            return null != n && K(t, n.map(e => e.member).filter(h.isNotNullish))
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
            return K(t, Object.values(n).map(e => e.owner).filter(h.isNotNullish))
        },
        GUILD_ROLE_UPDATE: Q,
        GUILD_ROLE_DELETE: Q,
        GUILD_ROLE_MEMBER_REMOVE: function(e) {
            let {
                guildId: t,
                userId: n,
                roleId: i
            } = e, r = g[t];
            if (null == r) return !1;
            let s = p.default.getGuild(t);
            if (null == s) return C.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), !1;
            let a = r[n];
            if (null == a || !a.roles.includes(i)) return !1;
            a.roles = a.roles.filter(e => e !== i);
            let o = H(p.default.getRoles(s.id), a.roles);
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
            } = e, r = g[t];
            if (null == r) return !1;
            let s = p.default.getGuild(t);
            if (null == s) return C.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), !1;
            let a = r[n];
            if (null == a || a.roles.includes(i)) return !1;
            a.roles.push(i);
            let o = H(p.default.getRoles(s.id), a.roles);
            return r[n] = {
                ...a,
                ...o
            }, !0
        },
        GUILD_MEMBER_PROFILE_UPDATE: function(e) {
            let {
                guildMember: t,
                guildId: n
            } = e, i = g[n];
            if (null == i) return !1;
            let r = p.default.getGuild(n);
            if (null == r) return C.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), !1;
            i[t.user.id] = Y({
                userId: t.user.id,
                nick: t.nick,
                guildId: n,
                avatar: t.avatar,
                avatarDecoration: z(t),
                guildRoles: p.default.getRoles(r.id),
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
        IMPERSONATE_UPDATE: q,
        IMPERSONATE_STOP: q,
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
            if (null == e.guildId || null == p.default.getGuild(e.guildId)) return !1;
            v = !0, g[e.guildId] = null !== (t = g[e.guildId]) && void 0 !== t ? t : {};
            let i = !1;
            for (let t of (v = !0, g[e.guildId] = null !== (n = g[e.guildId]) && void 0 !== n ? n : {}, e.members)) null == g[e.guildId][t.userId] && (i = !0, g[e.guildId][t.userId] = t);
            return i
        },
        MESSAGE_CREATE: Z,
        MESSAGE_UPDATE: Z,
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