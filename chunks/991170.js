function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NONE: function() {
            return v
        },
        DEFAULT: function() {
            return I
        },
        VIEW_GUILD_SETTINGS: function() {
            return R
        },
        computePermissionsForRoles: function() {
            return function e(t) {
                let n, {
                        forceRoles: i,
                        context: s,
                        overwrites: r,
                        roles: a,
                        checkElevated: o = !0,
                        excludeGuildPermissions: l
                    } = t,
                    u = A;
                if (s instanceof _.ChannelRecordBase) {
                    var d;
                    if (s.isScheduledForDeletion()) return v;
                    if (_.THREAD_CHANNEL_TYPES.has(s.type)) {
                        let t = E.default.getChannel(s.parent_id);
                        return null == t ? v : M(s, e({
                            forceRoles: i,
                            context: t,
                            overwrites: r,
                            roles: a,
                            checkElevated: o,
                            excludeGuildPermissions: l
                        }), !1)
                    }
                    u = null !== (d = s.computeLurkerPermissionsAllowList()) && void 0 !== d ? d : u;
                    r = null != r ? {
                        ...s.permissionOverwrites,
                        ...r
                    } : s.permissionOverwrites;
                    let t = s.getGuildId();
                    n = null != t ? g.default.getGuild(t) : null
                } else r = null != r ? r : {}, n = s;
                if (null == n) return v;
                let c = {
                    userId: S.EMPTY_STRING_SNOWFLAKE_ID,
                    nick: "",
                    guildId: n.id,
                    guildMemberAvatar: null,
                    roles: p.default.keys(i),
                    colorString: null,
                    hoistRoleId: null,
                    premiumSince: null,
                    isPending: !1,
                    joinedAt: new Date().toISOString(),
                    communicationDisabledUntil: null
                };
                return P({
                    userId: S.EMPTY_STRING_SNOWFLAKE_ID,
                    member: c,
                    guild: n,
                    overwrites: r,
                    roles: a,
                    checkElevated: o,
                    excludeGuildPermissions: l,
                    lurkerPermissionsMask: u
                })
            }
        },
        computePermissions: function() {
            return L
        },
        applyThreadPermissions: function() {
            return M
        },
        areChannelsLocked: function() {
            return b
        },
        getGuildVisualOwnerId: function() {
            return U
        },
        isRoleHigher: function() {
            return w
        },
        getHighestRole: function() {
            return k
        },
        getHighestHoistedRole: function() {
            return V
        },
        makeEveryoneOverwrite: function() {
            return G
        },
        can: function() {
            return F
        },
        canEveryoneRole: function() {
            return x
        },
        canEveryone: function() {
            return B
        }
    }), n("222007");
    var i = n("917351"),
        s = n.n(i),
        r = n("316693"),
        a = n("798609"),
        o = n("681937"),
        l = n("509"),
        u = n("38654"),
        d = n("267567"),
        c = n("755624"),
        _ = n("233069"),
        f = n("271938"),
        E = n("42203"),
        h = n("26989"),
        g = n("305961"),
        m = n("697218"),
        p = n("299039"),
        S = n("49111");
    let v = r.deserialize(0),
        T = r.combine(...s.values(S.Permissions)),
        I = r.combine(S.Permissions.CREATE_INSTANT_INVITE, S.Permissions.CHANGE_NICKNAME, S.Permissions.VIEW_CHANNEL, S.Permissions.SEND_MESSAGES, S.Permissions.EMBED_LINKS, S.Permissions.ATTACH_FILES, S.Permissions.READ_MESSAGE_HISTORY, S.Permissions.MENTION_EVERYONE, S.Permissions.USE_EXTERNAL_EMOJIS, S.Permissions.USE_EXTERNAL_STICKERS, S.Permissions.ADD_REACTIONS, S.Permissions.CREATE_PUBLIC_THREADS, S.Permissions.CREATE_PRIVATE_THREADS, S.Permissions.SEND_MESSAGES_IN_THREADS, S.Permissions.CONNECT, S.Permissions.SPEAK, S.Permissions.USE_VAD, S.Permissions.STREAM, S.Permissions.USE_EMBEDDED_ACTIVITIES, S.Permissions.USE_SOUNDBOARD, S.Permissions.REQUEST_TO_SPEAK, S.Permissions.USE_APPLICATION_COMMANDS, S.Permissions.CREATE_GUILD_EXPRESSIONS, S.Permissions.CREATE_EVENTS),
        A = r.combine(S.Permissions.VIEW_CHANNEL, S.Permissions.READ_MESSAGE_HISTORY),
        C = r.combine(S.Permissions.VIEW_CHANNEL, S.Permissions.SEND_MESSAGES, S.Permissions.CONNECT, S.Permissions.SPEAK, S.Permissions.STREAM, S.Permissions.USE_EMBEDDED_ACTIVITIES, S.Permissions.USE_EXTERNAL_EMOJIS, S.Permissions.USE_EXTERNAL_SOUNDS, S.Permissions.USE_EXTERNAL_STICKERS, S.Permissions.USE_SOUNDBOARD, S.Permissions.USE_VAD),
        y = r.combine(S.Permissions.VIEW_CHANNEL, S.Permissions.READ_MESSAGE_HISTORY),
        N = r.combine(S.Permissions.VIEW_CHANNEL, S.Permissions.READ_MESSAGE_HISTORY, S.Permissions.CHANGE_NICKNAME),
        R = r.combine(S.Permissions.MANAGE_GUILD, S.Permissions.MANAGE_ROLES, S.Permissions.ADMINISTRATOR, S.Permissions.BAN_MEMBERS, S.Permissions.MANAGE_NICKNAMES, S.Permissions.CREATE_GUILD_EXPRESSIONS, S.Permissions.MANAGE_GUILD_EXPRESSIONS, S.Permissions.MANAGE_WEBHOOKS, S.Permissions.VIEW_AUDIT_LOG);

    function O(e, t, n) {
        let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (i && t.mfaLevel === S.MFALevels.ELEVATED && n === f.default.getId()) {
            var s;
            !(null === (s = m.default.getCurrentUser()) || void 0 === s ? void 0 : s.mfaEnabled) && (e = r.remove(e, S.ElevatedPermissions))
        }
        return e
    }

    function D(e, t, n, i) {
        let s = i[e];
        if (null != s && (n = r.remove(n, s.deny), n = r.add(n, s.allow)), null != t) {
            let e = v,
                s = v;
            for (let n = 0; n < t.roles.length; n++) {
                let a = i[t.roles[n]];
                null != a && (e = r.add(e, a.allow), s = r.add(s, a.deny))
            }
            n = r.remove(n, s), n = r.add(n, e);
            let a = i[t.userId];
            null != a && (n = r.remove(n, a.deny), n = r.add(n, a.allow));
            let u = r.has(n, S.Permissions.ADMINISTRATOR),
                d = (0, o.hasAutomodQuarantinedProfile)(t);
            d && !u && (n = r.filter(n, N));
            let c = (0, l.isMemberCommunicationDisabled)(t);
            c && !u && (n = r.filter(n, y))
        }
        return n
    }

    function P(e) {
        let {
            userId: t,
            member: n,
            guild: i,
            overwrites: s,
            roles: a,
            checkElevated: o = !0,
            excludeGuildPermissions: l = !1,
            lurkerPermissionsMask: u = A
        } = e;
        if (l) return D(i.id, n, v, s);
        a = null != a ? {
            ...g.default.getRoles(i.id),
            ...a
        } : g.default.getRoles(i.id);
        let c = a[i.getEveryoneRoleId()],
            _ = null != c ? c.permissions : I;
        if (null != n)
            for (let e = 0; e < n.roles.length; e++) {
                let t = a[n.roles[e]];
                void 0 !== t && (_ = r.add(_, t.permissions))
            }
        return _ = r.has(_, S.Permissions.ADMINISTRATOR) ? T : D(i.id, n, _, s), (d.default.isLurking(i.id) || (null == n ? void 0 : n.isPending)) && (_ = r.filter(_, u)), h.default.isCurrentUserGuest(i.id) && (_ = r.filter(_, C)), O(_, i, t, o)
    }

    function L(e) {
        var t, n, i;
        let s, {
            user: r,
            context: a,
            overwrites: o,
            roles: l,
            checkElevated: d = !0,
            excludeGuildPermissions: f = !1
        } = e;
        if (null == r) return v;
        let p = "string" == typeof r ? r : r.id,
            S = A;
        if (a instanceof _.ChannelRecordBase) {
            if (a.isScheduledForDeletion()) return v;
            if (_.THREAD_CHANNEL_TYPES.has(a.type)) {
                let e = E.default.getChannel(a.parent_id);
                if (null == e || e.isScheduledForDeletion()) return v;
                let t = p === (null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && c.default.hasJoined(a.id);
                return M(a, L({
                    user: r,
                    context: e,
                    overwrites: o,
                    roles: l,
                    checkElevated: d,
                    excludeGuildPermissions: f
                }), t)
            }
            S = null !== (i = a.computeLurkerPermissionsAllowList()) && void 0 !== i ? i : S;
            o = null != o ? {
                ...a.permissionOverwrites,
                ...o
            } : a.permissionOverwrites;
            let e = a.getGuildId();
            s = null != e ? g.default.getGuild(e) : null
        } else o = null != o ? o : {}, s = a;
        if (null == s) return v;
        if (!(p === (null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && u.default.isViewingRoles(s.id)) && s.isOwner(p)) return O(T, s, p, d);
        let I = h.default.getMember(s.id, p);
        return P({
            userId: p,
            member: I,
            guild: s,
            overwrites: o,
            roles: l,
            checkElevated: d,
            excludeGuildPermissions: f,
            lurkerPermissionsMask: S
        })
    }

    function M(e, t, n) {
        return e.type !== S.ChannelTypes.PRIVATE_THREAD || n || r.has(t, S.Permissions.MANAGE_THREADS) ? r.has(t, S.Permissions.SEND_MESSAGES_IN_THREADS) ? e.isLockedThread() && !r.has(t, S.Permissions.MANAGE_THREADS) ? r.remove(t, S.Permissions.SEND_MESSAGES) : r.combine(t, S.Permissions.SEND_MESSAGES) : r.remove(t, S.Permissions.SEND_MESSAGES) : v
    }

    function b(e, t) {
        if (_.THREAD_CHANNEL_TYPES.has(e.type)) return !0;
        let {
            guild_id: n
        } = e;
        if (null == t || null == n || n !== t.guild_id) return !1;
        let i = {
                ...e.permissionOverwrites
            },
            s = {
                ...t.permissionOverwrites
            };
        return null == i[n] && (i[n] = G(n)), null == s[n] && (s[n] = G(n)), Object.keys(i).length === Object.keys(s).length && !Object.keys(i).some(e => {
            let t = i[e],
                n = s[e];
            return !(null != n && r.equals(n.deny, t.deny) && r.equals(n.allow, t.allow)) && !0
        })
    }

    function U(e) {
        var t;
        let n = s.some(g.default.getRoles(e.id), e => e.hoist && r.has(e.permissions, S.Permissions.ADMINISTRATOR));
        return n ? void 0 : null !== (t = e.ownerId) && void 0 !== t ? t : void 0
    }

    function w(e, t, n, i) {
        if (null != t && e.isOwner(t)) return !0;
        if (null == n) return !1;
        let r = s(g.default.getRoles(e.id)).sortBy(e => e.position).map(e => e.id).value();
        return r.indexOf(n.id) > (null != i ? r.indexOf(i.id) : -1)
    }

    function k(e, t) {
        let n = h.default.getMember(e.id, t);
        if (null != n) return s(g.default.getRoles(e.id)).filter(e => -1 !== n.roles.indexOf(e.id)).sortBy(e => -e.position).first()
    }

    function V(e, t) {
        return null == t.hoistRoleId ? null : g.default.getRole(e.id, t.hoistRoleId)
    }

    function G(e) {
        return {
            id: e,
            type: a.PermissionOverwriteType.ROLE,
            allow: v,
            deny: v
        }
    }

    function F(e) {
        let {
            permission: t,
            user: n,
            context: i,
            overwrites: s,
            roles: a,
            excludeGuildPermissions: o
        } = e;
        return r.has(L({
            user: n,
            context: i,
            overwrites: s,
            roles: a,
            checkElevated: !0,
            excludeGuildPermissions: o
        }), t)
    }

    function x(e, t) {
        let n;
        let i = {};
        if (t instanceof _.ChannelRecordBase) {
            if (t.type === S.ChannelTypes.PRIVATE_THREAD || _.THREAD_CHANNEL_TYPES.has(t.type) && null == (t = E.default.getChannel(t.parent_id))) return !1;
            i = t.permissionOverwrites;
            let e = t.getGuildId();
            n = null != e ? g.default.getGuild(e) : null
        } else n = t;
        if (null == n) return !1;
        let s = g.default.getRole(n.id, n.getEveryoneRoleId());
        if (null == s) return !1;
        let a = s.permissions,
            o = i[n.id];
        return null != o && (a = r.remove(a, o.deny), a = r.add(a, o.allow)), r.has(a, e)
    }

    function B(e, t) {
        let n;
        let i = {};
        if (t instanceof _.ChannelRecordBase) {
            if (t.type === S.ChannelTypes.PRIVATE_THREAD || _.THREAD_CHANNEL_TYPES.has(t.type) && null == (t = E.default.getChannel(t.parent_id))) return !1;
            i = t.permissionOverwrites;
            let e = t.getGuildId();
            n = null != e ? g.default.getGuild(e) : null
        } else n = t;
        if (null == n) return !1;
        let a = g.default.getRole(n.id, n.getEveryoneRoleId());
        return !(null == a || !r.has(a.permissions, e) || s.some(i, t => r.has(t.deny, e))) && !0
    }
}