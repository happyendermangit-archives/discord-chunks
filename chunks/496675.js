function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("149765"),
        d = n("442837"),
        _ = n("570140"),
        c = n("900489"),
        E = n("160404"),
        I = n("41776"),
        T = n("427679"),
        f = n("569471"),
        S = n("195663"),
        h = n("131704"),
        A = n("601964"),
        m = n("598077"),
        N = n("386438"),
        p = n("700785"),
        O = n("592125"),
        R = n("683301"),
        C = n("271383"),
        g = n("430824"),
        L = n("594174"),
        D = n("981631"),
        v = n("478743");
    let M = {},
        y = {},
        P = {},
        U = 0;

    function b(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = M[e];
        if (null != n) return n;
        let i = L.default.getCurrentUser();
        if (null == i) return p.NONE;
        let r = g.default.getGuild(e);
        return null == r ? p.NONE : M[e] = p.computePermissions({
            user: i,
            context: r,
            checkElevated: t
        })
    }

    function G(e) {
        var t;
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            i = L.default.getCurrentUser();
        if (null == i) return p.NONE;
        let r = O.default.getChannel(e);
        if (null == r) return p.NONE;
        let s = r.getGuildId(),
            a = null != s && (I.default.isLurking(s) || (null === (t = C.default.getMember(s, i.id)) || void 0 === t ? void 0 : t.isPending));
        return !r.isScheduledForDeletion() && !a && l().isEmpty(r.permissionOverwrites) && null != s ? b(s) : p.computePermissions({
            user: i,
            context: r,
            checkElevated: n
        })
    }

    function w(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = y[e];
        return null != n ? n : y[e] = G(e, t)
    }

    function B(e) {
        if (null != e) {
            var t;
            P[e] = (null !== (t = P[e]) && void 0 !== t ? t : 0) + 1
        }
    }

    function k() {
        for (let e in M = {}, y = {}, P) P[e] += 1;
        U += 1
    }

    function V() {
        k()
    }

    function F() {
        k()
    }

    function x(e) {
        var t;
        let {
            user: n
        } = e;
        if (n.id !== (null === (t = L.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
        k()
    }

    function H() {
        return !0
    }

    function Y(e) {
        let {
            messages: t,
            threads: n
        } = e;
        return !!(n.length > 0) || t.some(e => e.some(e => null != e.thread))
    }

    function j(e) {
        let {
            guildId: t
        } = e;
        delete M[t];
        let n = O.default.getMutableBasicGuildChannelsForGuild(t);
        l().forEach(n, e => {
            delete y[e.id]
        }), U += 1, B(t)
    }

    function W(e) {
        let {
            instance: t
        } = e, n = O.default.getChannel(t.channel_id);
        if (null == n) return !1;
        let i = L.default.getCurrentUser(),
            r = p.computePermissions({
                user: i,
                context: n
            });
        if (r === y[n.id]) return !1;
        y[n.id] = r, U += 1
    }

    function K(e) {
        let {
            guildId: t
        } = e;
        delete M[t];
        let n = O.default.getMutableBasicGuildChannelsForGuild(t);
        l().forEach(n, e => {
            delete y[e.id]
        }), U += 1, B(t)
    }

    function z(e, t, n, i) {
        let r = p.NONE;
        if (e instanceof h.ChannelRecordBase) {
            if (h.THREAD_CHANNEL_TYPES.has(e.type)) {
                let r = O.default.getChannel(e.parent_id);
                return null == r ? p.NONE : p.applyThreadPermissions(e, z(r, t, n, i), f.default.hasJoined(e.id))
            }
            r = w(e.id)
        } else e instanceof A.default && (r = b(e.id));
        return void 0 !== t || void 0 !== n || void 0 !== i ? p.computePermissions({
            user: L.default.getCurrentUser(),
            context: e,
            overwrites: t,
            roles: n,
            checkElevated: !0,
            excludeGuildPermissions: i
        }) : r
    }
    class X extends(i = d.default.Store) {
        initialize() {
            this.waitFor(L.default, g.default, O.default, C.default, R.default, f.default, T.default, E.default)
        }
        getChannelPermissions(e) {
            return h.THREAD_CHANNEL_TYPES.has(e.type) ? G(e.id) : w(e.id)
        }
        getGuildPermissions(e) {
            return b(e.id)
        }
        getGuildPermissionProps(e) {
            let t = L.default.getCurrentUser();
            return {
                canManageGuild: this.can(D.Permissions.MANAGE_GUILD, e),
                canManageChannels: this.can(D.Permissions.MANAGE_CHANNELS, e),
                canManageRoles: this.can(D.Permissions.MANAGE_ROLES, e),
                canManageBans: this.can(D.Permissions.BAN_MEMBERS, e),
                canManageNicknames: this.can(D.Permissions.MANAGE_NICKNAMES, e),
                canManageGuildExpressions: this.can(D.Permissions.MANAGE_GUILD_EXPRESSIONS, e) || this.can(D.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                canViewAuditLog: this.can(D.Permissions.VIEW_AUDIT_LOG, e),
                canViewAuditLogV2: this.can(D.Permissions.VIEW_AUDIT_LOG, e),
                canManageWebhooks: this.can(D.Permissions.MANAGE_WEBHOOKS, e),
                canViewGuildAnalytics: this.can(D.Permissions.VIEW_GUILD_ANALYTICS, e),
                canAccessMembersPage: this.canAccessMemberSafetyPage(e),
                isGuildAdmin: this.can(D.Permissions.ADMINISTRATOR, e),
                isOwner: null != t && e.isOwner(t),
                isOwnerWithRequiredMfaLevel: null != t && e.isOwnerWithRequiredMfaLevel(t),
                guild: e
            }
        }
        canAccessMemberSafetyPage(e) {
            return u.hasAny(b(e.id), v.MemberSafetyPagePermissions)
        }
        canAccessGuildSettings(e) {
            return u.hasAny(b(e.id), p.VIEW_GUILD_SETTINGS)
        }
        canWithPartialContext(e, t) {
            return "channelId" in t && "string" == typeof t.channelId ? this.can(e, O.default.getChannel(t.channelId)) : "guildId" in t && "string" == typeof t.guildId && this.can(e, g.default.getGuild(t.guildId))
        }
        can(e, t, n, i, r) {
            let s = z(t, n, i, r);
            return u.has(s, e)
        }
        canBasicChannel(e, t, n, i, r) {
            return "basicPermissions" in t ? N.default.has(t.basicPermissions, e) : u.has(z(t, n, i, r), N.default.asBigFlag(e))
        }
        computePermissions(e, t, n, i) {
            return z(e, t, n, i)
        }
        computeBasicPermissions(e) {
            return "basicPermissions" in e ? e.basicPermissions : N.default.asBasicFlag(z(e))
        }
        canManageUser(e, t, n) {
            let i = t instanceof m.default ? t.id : t;
            if (n.isOwner(i)) return !1;
            let r = L.default.getCurrentUser();
            if (!this.can(e, n)) return !1;
            let s = null != r ? p.getHighestRole(n, r.id) : void 0,
                a = p.getHighestRole(n, i);
            return null != r && p.isRoleHigher(n, r.id, s, a)
        }
        getHighestRole(e) {
            let t = L.default.getCurrentUser();
            return null != t ? p.getHighestRole(e, t.id) : null
        }
        isRoleHigher(e, t, n) {
            let i = L.default.getCurrentUser(),
                r = E.default.isViewingRoles(e.id);
            return p.isRoleHigher(e, r ? void 0 : null == i ? void 0 : i.id, t, n)
        }
        canImpersonateRole(e, t) {
            let n = this.getHighestRole(e),
                i = this.can(D.Permissions.MANAGE_GUILD, e) && this.can(D.Permissions.MANAGE_ROLES, e),
                r = this.isRoleHigher(e, n, t);
            return i && (r || t.id === (null == n ? void 0 : n.id))
        }
        getGuildVersion(e) {
            var t;
            return null !== (t = P[e]) && void 0 !== t ? t : 0
        }
        getChannelsVersion() {
            return U
        }
    }

    function q() {
        y = {}, M = {}, P = {}, U = 0
    }
    a = "PermissionStore", (s = "displayName") in(r = X) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new X(_.default, {
        BACKGROUND_SYNC: V,
        CONNECTION_OPEN: V,
        OVERLAY_INITIALIZE: V,
        CACHE_LOADED: V,
        CACHE_LOADED_LAZY: V,
        CONNECTION_CLOSED: function() {
            q()
        },
        GUILD_CREATE: F,
        GUILD_UPDATE: F,
        GUILD_DELETE: F,
        GUILD_MEMBER_ADD: x,
        GUILD_MEMBER_UPDATE: x,
        CURRENT_USER_UPDATE: x,
        CHANNEL_CREATE: function(e) {
            let {
                channel: {
                    id: t
                }
            } = e, n = O.default.getChannel(t);
            if (null == n || n.isPrivate()) return !1;
            let i = L.default.getCurrentUser(),
                r = p.computePermissions({
                    user: i,
                    context: n
                });
            if (y[n.id] === r) return !1;
            y[n.id] = r, U += 1, B(n.getGuildId())
        },
        THREAD_CREATE: H,
        THREAD_UPDATE: H,
        THREAD_LIST_SYNC: H,
        LOAD_THREADS_SUCCESS: H,
        LOAD_ARCHIVED_THREADS_SUCCESS: H,
        CHANNEL_UPDATES: function(e) {
            let {
                channels: t
            } = e, n = !1;
            for (let {
                    id: e
                }
                of t) {
                let t = O.default.getChannel(e);
                if (null == t || t.isPrivate()) continue;
                let i = L.default.getCurrentUser(),
                    r = p.computePermissions({
                        user: i,
                        context: t
                    });
                y[t.id] !== r && (y[t.id] = r, B(t.getGuildId()), n = !0)
            }
            return !!n && (U += 1, n)
        },
        LOAD_MESSAGES_SUCCESS: function(e) {
            let {
                messages: t
            } = e;
            return t.some(e => null != e.thread)
        },
        SEARCH_FINISH: Y,
        MOD_VIEW_SEARCH_FINISH: Y,
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            let {
                data: t
            } = e;
            return (0, c.getThreadsFromGuildFeedFetch)(t).length > 0
        },
        THREAD_MEMBER_UPDATE: function(e) {
            var t;
            return (null === (t = L.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.userId && (B(e.guildId), !0)
        },
        THREAD_MEMBERS_UPDATE: function(e) {
            return !!(0, S.doesThreadMembersActionAffectMe)(e) && (B(e.guildId), !0)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            return delete y[t.id], U += 1, B(t.guild_id), !1
        },
        GUILD_ROLE_CREATE: j,
        GUILD_ROLE_UPDATE: j,
        GUILD_ROLE_DELETE: j,
        LOGOUT: q,
        STAGE_INSTANCE_CREATE: W,
        STAGE_INSTANCE_UPDATE: W,
        STAGE_INSTANCE_DELETE: W,
        IMPERSONATE_UPDATE: K,
        IMPERSONATE_STOP: K
    })
}