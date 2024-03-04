function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return w
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
        f = n("233069"),
        _ = n("271938"),
        h = n("42203"),
        E = n("26989"),
        g = n("305961"),
        m = n("697218"),
        p = n("299039"),
        S = n("49111");
    let v = r.default.deserialize(0),
        T = r.default.combine(...s.values(S.Permissions)),
        I = r.default.combine(S.Permissions.CREATE_INSTANT_INVITE, S.Permissions.CHANGE_NICKNAME, S.Permissions.VIEW_CHANNEL, S.Permissions.SEND_MESSAGES, S.Permissions.EMBED_LINKS, S.Permissions.ATTACH_FILES, S.Permissions.READ_MESSAGE_HISTORY, S.Permissions.MENTION_EVERYONE, S.Permissions.USE_EXTERNAL_EMOJIS, S.Permissions.USE_EXTERNAL_STICKERS, S.Permissions.ADD_REACTIONS, S.Permissions.CREATE_PUBLIC_THREADS, S.Permissions.CREATE_PRIVATE_THREADS, S.Permissions.SEND_MESSAGES_IN_THREADS, S.Permissions.CONNECT, S.Permissions.SPEAK, S.Permissions.USE_VAD, S.Permissions.STREAM, S.Permissions.USE_EMBEDDED_ACTIVITIES, S.Permissions.USE_SOUNDBOARD, S.Permissions.REQUEST_TO_SPEAK, S.Permissions.USE_APPLICATION_COMMANDS, S.Permissions.CREATE_GUILD_EXPRESSIONS, S.Permissions.CREATE_EVENTS),
        C = r.default.combine(S.Permissions.VIEW_CHANNEL, S.Permissions.READ_MESSAGE_HISTORY),
        A = r.default.combine(S.Permissions.VIEW_CHANNEL, S.Permissions.SEND_MESSAGES, S.Permissions.CONNECT, S.Permissions.SPEAK, S.Permissions.STREAM, S.Permissions.USE_EMBEDDED_ACTIVITIES, S.Permissions.USE_EXTERNAL_EMOJIS, S.Permissions.USE_EXTERNAL_SOUNDS, S.Permissions.USE_EXTERNAL_STICKERS, S.Permissions.USE_SOUNDBOARD, S.Permissions.USE_VAD),
        y = r.default.combine(S.Permissions.VIEW_CHANNEL, S.Permissions.READ_MESSAGE_HISTORY),
        N = r.default.combine(S.Permissions.VIEW_CHANNEL, S.Permissions.READ_MESSAGE_HISTORY, S.Permissions.CHANGE_NICKNAME),
        R = r.default.combine(S.Permissions.MANAGE_GUILD, S.Permissions.MANAGE_ROLES, S.Permissions.ADMINISTRATOR, S.Permissions.BAN_MEMBERS, S.Permissions.MANAGE_NICKNAMES, S.Permissions.CREATE_GUILD_EXPRESSIONS, S.Permissions.MANAGE_GUILD_EXPRESSIONS, S.Permissions.MANAGE_WEBHOOKS, S.Permissions.VIEW_AUDIT_LOG);

    function O(e, t, n) {
        let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (i && t.mfaLevel === S.MFALevels.ELEVATED && n === _.default.getId()) {
            var s;
            !(null === (s = m.default.getCurrentUser()) || void 0 === s ? void 0 : s.mfaEnabled) && (e = r.default.remove(e, S.ElevatedPermissions))
        }
        return e
    }

    function D(e, t, n, i) {
        let s = i[e];
        if (null != s && (n = r.default.remove(n, s.deny), n = r.default.add(n, s.allow)), null != t) {
            let e = v,
                s = v;
            for (let n = 0; n < t.roles.length; n++) {
                let a = i[t.roles[n]];
                null != a && (e = r.default.add(e, a.allow), s = r.default.add(s, a.deny))
            }
            n = r.default.remove(n, s), n = r.default.add(n, e);
            let a = i[t.userId];
            null != a && (n = r.default.remove(n, a.deny), n = r.default.add(n, a.allow));
            let u = r.default.has(n, S.Permissions.ADMINISTRATOR),
                d = (0, o.hasAutomodQuarantinedProfile)(t);
            d && !u && (n = r.default.filter(n, N));
            let c = (0, l.isMemberCommunicationDisabled)(t);
            c && !u && (n = r.default.filter(n, y))
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
            lurkerPermissionsMask: u = C
        } = e;
        if (l) return D(i.id, n, v, s);
        a = null != a ? {
            ...i.roles,
            ...a
        } : i.roles;
        let c = a[i.getEveryoneRoleId()],
            f = null != c ? c.permissions : I;
        if (null != n)
            for (let e = 0; e < n.roles.length; e++) {
                let t = a[n.roles[e]];
                void 0 !== t && (f = r.default.add(f, t.permissions))
            }
        return f = r.default.has(f, S.Permissions.ADMINISTRATOR) ? T : D(i.id, n, f, s), (d.default.isLurking(i.id) || (null == n ? void 0 : n.isPending)) && (f = r.default.filter(f, u)), E.default.isCurrentUserGuest(i.id) && (f = r.default.filter(f, A)), O(f, i, t, o)
    }

    function L(e) {
        var t, n, i;
        let s, {
            user: r,
            context: a,
            overwrites: o,
            roles: l,
            checkElevated: d = !0,
            excludeGuildPermissions: _ = !1
        } = e;
        if (null == r) return v;
        let p = "string" == typeof r ? r : r.id,
            S = C;
        if (a instanceof f.ChannelRecordBase) {
            if (a.isScheduledForDeletion()) return v;
            if (f.THREAD_CHANNEL_TYPES.has(a.type)) {
                let e = h.default.getChannel(a.parent_id);
                if (null == e || e.isScheduledForDeletion()) return v;
                let t = p === (null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && c.default.hasJoined(a.id);
                return M(a, L({
                    user: r,
                    context: e,
                    overwrites: o,
                    roles: l,
                    checkElevated: d,
                    excludeGuildPermissions: _
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
        let I = E.default.getMember(s.id, p);
        return P({
            userId: p,
            member: I,
            guild: s,
            overwrites: o,
            roles: l,
            checkElevated: d,
            excludeGuildPermissions: _,
            lurkerPermissionsMask: S
        })
    }

    function M(e, t, n) {
        return e.type !== S.ChannelTypes.PRIVATE_THREAD || n || r.default.has(t, S.Permissions.MANAGE_THREADS) ? r.default.has(t, S.Permissions.SEND_MESSAGES_IN_THREADS) ? e.isLockedThread() && !r.default.has(t, S.Permissions.MANAGE_THREADS) ? r.default.remove(t, S.Permissions.SEND_MESSAGES) : r.default.combine(t, S.Permissions.SEND_MESSAGES) : r.default.remove(t, S.Permissions.SEND_MESSAGES) : v
    }

    function b(e) {
        return {
            id: e,
            type: a.PermissionOverwriteType.ROLE,
            allow: v,
            deny: v
        }
    }

    function U(e) {
        let {
            permission: t,
            user: n,
            context: i,
            overwrites: s,
            roles: a,
            excludeGuildPermissions: o
        } = e;
        return r.default.has(L({
            user: n,
            context: i,
            overwrites: s,
            roles: a,
            checkElevated: !0,
            excludeGuildPermissions: o
        }), t)
    }
    var w = {
        PASSTHROUGH: "PASSTHROUGH",
        ALLOW: "ALLOW",
        DENY: "DENY",
        NONE: v,
        DEFAULT: I,
        ALL: T,
        VIEW_GUILD_SETTINGS: R,
        computePermissionsForRoles: function e(t) {
            let n, {
                    forceRoles: i,
                    context: s,
                    overwrites: r,
                    roles: a,
                    checkElevated: o = !0,
                    excludeGuildPermissions: l
                } = t,
                u = C;
            if (s instanceof f.ChannelRecordBase) {
                var d;
                if (s.isScheduledForDeletion()) return v;
                if (f.THREAD_CHANNEL_TYPES.has(s.type)) {
                    let t = h.default.getChannel(s.parent_id);
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
        },
        computePermissions: L,
        applyThreadPermissions: M,
        getGuildVisualOwnerId: function(e) {
            var t;
            let n = s.some(e.roles, e => e.hoist && r.default.has(e.permissions, S.Permissions.ADMINISTRATOR));
            return n ? void 0 : null !== (t = e.ownerId) && void 0 !== t ? t : void 0
        },
        isRoleHigher: function(e, t, n, i) {
            if (null != t && e.isOwner(t)) return !0;
            if (null == n) return !1;
            let r = s(e.roles).sortBy(e => e.position).map(e => e.id).value();
            return r.indexOf(n.id) > (null != i ? r.indexOf(i.id) : -1)
        },
        getHighestRole: function(e, t) {
            let n = E.default.getMember(e.id, t);
            if (null != n) return s(e.roles).filter(e => -1 !== n.roles.indexOf(e.id)).sortBy(e => -e.position).first()
        },
        getHighestHoistedRole: function(e, t) {
            return null == t.hoistRoleId ? null : e.getRole(t.hoistRoleId)
        },
        can: U,
        canEveryoneRole(e, t) {
            let n;
            let i = {};
            if (t instanceof f.ChannelRecordBase) {
                if (t.type === S.ChannelTypes.PRIVATE_THREAD || f.THREAD_CHANNEL_TYPES.has(t.type) && null == (t = h.default.getChannel(t.parent_id))) return !1;
                i = t.permissionOverwrites;
                let e = t.getGuildId();
                n = null != e ? g.default.getGuild(e) : null
            } else n = t;
            if (null == n) return !1;
            let s = n.roles[n.getEveryoneRoleId()],
                a = s.permissions,
                o = i[n.id];
            return null != o && (a = r.default.remove(a, o.deny), a = r.default.add(a, o.allow)), r.default.has(a, e)
        },
        canEveryone(e, t) {
            let n;
            let i = {};
            if (t instanceof f.ChannelRecordBase) {
                if (t.type === S.ChannelTypes.PRIVATE_THREAD || f.THREAD_CHANNEL_TYPES.has(t.type) && null == (t = h.default.getChannel(t.parent_id))) return !1;
                i = t.permissionOverwrites;
                let e = t.getGuildId();
                n = null != e ? g.default.getGuild(e) : null
            } else n = t;
            if (null == n) return !1;
            let a = n.roles[n.getEveryoneRoleId()];
            return !(!r.default.has(a.permissions, e) || s.some(i, t => r.default.has(t.deny, e))) && !0
        },
        canManageACategory: function(e, t, n) {
            return !!U({
                permission: S.Permissions.MANAGE_CHANNELS,
                user: e,
                context: t
            }) || n.some(t => {
                let {
                    channel: n
                } = t;
                return "null" !== n.id && U({
                    permission: S.Permissions.MANAGE_CHANNELS,
                    user: e,
                    context: n
                })
            })
        },
        areChannelsLocked: function(e, t) {
            if (f.THREAD_CHANNEL_TYPES.has(e.type)) return !0;
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
            return null == i[n] && (i[n] = b(n)), null == s[n] && (s[n] = b(n)), Object.keys(i).length === Object.keys(s).length && !Object.keys(i).some(e => {
                let t = i[e],
                    n = s[e];
                return !(null != n && r.default.equals(n.deny, t.deny) && r.default.equals(n.allow, t.allow)) && !0
            })
        },
        makeEveryoneOverwrite: b
    }
}