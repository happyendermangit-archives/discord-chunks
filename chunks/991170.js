function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return G
        }
    }), n("222007");
    var i = n("917351"),
        r = n.n(i),
        s = n("316693"),
        a = n("798609"),
        o = n("681937"),
        l = n("509"),
        u = n("38654"),
        c = n("267567"),
        d = n("755624"),
        f = n("233069"),
        E = n("271938"),
        p = n("42203"),
        h = n("26989"),
        _ = n("305961"),
        S = n("697218"),
        m = n("299039"),
        T = n("49111");
    let g = s.default.deserialize(0),
        I = s.default.combine(...r.values(T.Permissions)),
        C = s.default.combine(T.Permissions.CREATE_INSTANT_INVITE, T.Permissions.CHANGE_NICKNAME, T.Permissions.VIEW_CHANNEL, T.Permissions.SEND_MESSAGES, T.Permissions.EMBED_LINKS, T.Permissions.ATTACH_FILES, T.Permissions.READ_MESSAGE_HISTORY, T.Permissions.MENTION_EVERYONE, T.Permissions.USE_EXTERNAL_EMOJIS, T.Permissions.USE_EXTERNAL_STICKERS, T.Permissions.ADD_REACTIONS, T.Permissions.CREATE_PUBLIC_THREADS, T.Permissions.CREATE_PRIVATE_THREADS, T.Permissions.SEND_MESSAGES_IN_THREADS, T.Permissions.CONNECT, T.Permissions.SPEAK, T.Permissions.USE_VAD, T.Permissions.STREAM, T.Permissions.USE_EMBEDDED_ACTIVITIES, T.Permissions.USE_SOUNDBOARD, T.Permissions.REQUEST_TO_SPEAK, T.Permissions.USE_APPLICATION_COMMANDS, T.Permissions.CREATE_GUILD_EXPRESSIONS, T.Permissions.CREATE_EVENTS),
        v = s.default.combine(T.Permissions.VIEW_CHANNEL, T.Permissions.READ_MESSAGE_HISTORY),
        A = s.default.combine(T.Permissions.VIEW_CHANNEL, T.Permissions.SEND_MESSAGES, T.Permissions.CONNECT, T.Permissions.SPEAK, T.Permissions.STREAM, T.Permissions.USE_EMBEDDED_ACTIVITIES, T.Permissions.USE_EXTERNAL_EMOJIS, T.Permissions.USE_EXTERNAL_SOUNDS, T.Permissions.USE_EXTERNAL_STICKERS, T.Permissions.USE_SOUNDBOARD, T.Permissions.USE_VAD),
        R = s.default.combine(T.Permissions.VIEW_CHANNEL, T.Permissions.READ_MESSAGE_HISTORY),
        N = s.default.combine(T.Permissions.VIEW_CHANNEL, T.Permissions.READ_MESSAGE_HISTORY, T.Permissions.CHANGE_NICKNAME),
        O = s.default.combine(T.Permissions.MANAGE_GUILD, T.Permissions.MANAGE_ROLES, T.Permissions.ADMINISTRATOR, T.Permissions.BAN_MEMBERS, T.Permissions.MANAGE_NICKNAMES, T.Permissions.CREATE_GUILD_EXPRESSIONS, T.Permissions.MANAGE_GUILD_EXPRESSIONS, T.Permissions.MANAGE_WEBHOOKS, T.Permissions.VIEW_AUDIT_LOG);

    function D(e, t, n) {
        let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (i && t.mfaLevel === T.MFALevels.ELEVATED && n === E.default.getId()) {
            var r;
            !(null === (r = S.default.getCurrentUser()) || void 0 === r ? void 0 : r.mfaEnabled) && (e = s.default.remove(e, T.ElevatedPermissions))
        }
        return e
    }

    function y(e, t, n, i) {
        let r = i[e];
        if (null != r && (n = s.default.remove(n, r.deny), n = s.default.add(n, r.allow)), null != t) {
            let e = g,
                r = g;
            for (let n = 0; n < t.roles.length; n++) {
                let a = i[t.roles[n]];
                null != a && (e = s.default.add(e, a.allow), r = s.default.add(r, a.deny))
            }
            n = s.default.remove(n, r), n = s.default.add(n, e);
            let a = i[t.userId];
            null != a && (n = s.default.remove(n, a.deny), n = s.default.add(n, a.allow));
            let u = s.default.has(n, T.Permissions.ADMINISTRATOR),
                c = (0, o.hasAutomodQuarantinedProfile)(t);
            c && !u && (n = s.default.filter(n, N));
            let d = (0, l.isMemberCommunicationDisabled)(t);
            d && !u && (n = s.default.filter(n, R))
        }
        return n
    }

    function P(e) {
        let {
            userId: t,
            member: n,
            guild: i,
            overwrites: r,
            roles: a,
            checkElevated: o = !0,
            excludeGuildPermissions: l = !1,
            lurkerPermissionsMask: u = v
        } = e;
        if (l) return y(i.id, n, g, r);
        a = null != a ? {
            ...i.roles,
            ...a
        } : i.roles;
        let d = a[i.getEveryoneRoleId()],
            f = null != d ? d.permissions : C;
        if (null != n)
            for (let e = 0; e < n.roles.length; e++) {
                let t = a[n.roles[e]];
                void 0 !== t && (f = s.default.add(f, t.permissions))
            }
        return f = s.default.has(f, T.Permissions.ADMINISTRATOR) ? I : y(i.id, n, f, r), (c.default.isLurking(i.id) || (null == n ? void 0 : n.isPending)) && (f = s.default.filter(f, u)), h.default.isCurrentUserGuest(i.id) && (f = s.default.filter(f, A)), D(f, i, t, o)
    }

    function L(e) {
        var t, n, i;
        let r, {
            user: s,
            context: a,
            overwrites: o,
            roles: l,
            checkElevated: c = !0,
            excludeGuildPermissions: E = !1
        } = e;
        if (null == s) return g;
        let m = "string" == typeof s ? s : s.id,
            T = v;
        if (a instanceof f.ChannelRecordBase) {
            if (a.isScheduledForDeletion()) return g;
            if (f.THREAD_CHANNEL_TYPES.has(a.type)) {
                let e = p.default.getChannel(a.parent_id);
                if (null == e || e.isScheduledForDeletion()) return g;
                let t = m === (null === (n = S.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && d.default.hasJoined(a.id);
                return b(a, L({
                    user: s,
                    context: e,
                    overwrites: o,
                    roles: l,
                    checkElevated: c,
                    excludeGuildPermissions: E
                }), t)
            }
            T = null !== (i = a.computeLurkerPermissionsAllowList()) && void 0 !== i ? i : T;
            o = null != o ? {
                ...a.permissionOverwrites,
                ...o
            } : a.permissionOverwrites;
            let e = a.getGuildId();
            r = null != e ? _.default.getGuild(e) : null
        } else o = null != o ? o : {}, r = a;
        if (null == r) return g;
        if (!(m === (null === (t = S.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && u.default.isViewingRoles(r.id)) && r.isOwner(m)) return D(I, r, m, c);
        let C = h.default.getMember(r.id, m);
        return P({
            userId: m,
            member: C,
            guild: r,
            overwrites: o,
            roles: l,
            checkElevated: c,
            excludeGuildPermissions: E,
            lurkerPermissionsMask: T
        })
    }

    function b(e, t, n) {
        return e.type !== T.ChannelTypes.PRIVATE_THREAD || n || s.default.has(t, T.Permissions.MANAGE_THREADS) ? s.default.has(t, T.Permissions.SEND_MESSAGES_IN_THREADS) ? e.isLockedThread() && !s.default.has(t, T.Permissions.MANAGE_THREADS) ? s.default.remove(t, T.Permissions.SEND_MESSAGES) : s.default.combine(t, T.Permissions.SEND_MESSAGES) : s.default.remove(t, T.Permissions.SEND_MESSAGES) : g
    }

    function M(e) {
        return {
            id: e,
            type: a.PermissionOverwriteType.ROLE,
            allow: g,
            deny: g
        }
    }

    function U(e) {
        let {
            permission: t,
            user: n,
            context: i,
            overwrites: r,
            roles: a,
            excludeGuildPermissions: o
        } = e;
        return s.default.has(L({
            user: n,
            context: i,
            overwrites: r,
            roles: a,
            checkElevated: !0,
            excludeGuildPermissions: o
        }), t)
    }
    var G = {
        PASSTHROUGH: "PASSTHROUGH",
        ALLOW: "ALLOW",
        DENY: "DENY",
        NONE: g,
        DEFAULT: C,
        ALL: I,
        VIEW_GUILD_SETTINGS: O,
        computePermissionsForRoles: function e(t) {
            let n, {
                    forceRoles: i,
                    context: r,
                    overwrites: s,
                    roles: a,
                    checkElevated: o = !0,
                    excludeGuildPermissions: l
                } = t,
                u = v;
            if (r instanceof f.ChannelRecordBase) {
                var c;
                if (r.isScheduledForDeletion()) return g;
                if (f.THREAD_CHANNEL_TYPES.has(r.type)) {
                    let t = p.default.getChannel(r.parent_id);
                    return null == t ? g : b(r, e({
                        forceRoles: i,
                        context: t,
                        overwrites: s,
                        roles: a,
                        checkElevated: o,
                        excludeGuildPermissions: l
                    }), !1)
                }
                u = null !== (c = r.computeLurkerPermissionsAllowList()) && void 0 !== c ? c : u;
                s = null != s ? {
                    ...r.permissionOverwrites,
                    ...s
                } : r.permissionOverwrites;
                let t = r.getGuildId();
                n = null != t ? _.default.getGuild(t) : null
            } else s = null != s ? s : {}, n = r;
            if (null == n) return g;
            let d = {
                userId: T.EMPTY_STRING_SNOWFLAKE_ID,
                nick: "",
                guildId: n.id,
                guildMemberAvatar: null,
                roles: m.default.keys(i),
                colorString: null,
                hoistRoleId: null,
                premiumSince: null,
                isPending: !1,
                joinedAt: new Date().toISOString(),
                communicationDisabledUntil: null
            };
            return P({
                userId: T.EMPTY_STRING_SNOWFLAKE_ID,
                member: d,
                guild: n,
                overwrites: s,
                roles: a,
                checkElevated: o,
                excludeGuildPermissions: l,
                lurkerPermissionsMask: u
            })
        },
        computePermissions: L,
        applyThreadPermissions: b,
        getGuildVisualOwnerId: function(e) {
            var t;
            let n = r.some(e.roles, e => e.hoist && s.default.has(e.permissions, T.Permissions.ADMINISTRATOR));
            return n ? void 0 : null !== (t = e.ownerId) && void 0 !== t ? t : void 0
        },
        isRoleHigher: function(e, t, n, i) {
            if (null != t && e.isOwner(t)) return !0;
            if (null == n) return !1;
            let s = r(e.roles).sortBy(e => e.position).map(e => e.id).value();
            return s.indexOf(n.id) > (null != i ? s.indexOf(i.id) : -1)
        },
        getHighestRole: function(e, t) {
            let n = h.default.getMember(e.id, t);
            if (null != n) return r(e.roles).filter(e => -1 !== n.roles.indexOf(e.id)).sortBy(e => -e.position).first()
        },
        getHighestHoistedRole: function(e, t) {
            return null == t.hoistRoleId ? null : e.getRole(t.hoistRoleId)
        },
        can: U,
        canEveryoneRole(e, t) {
            let n;
            let i = {};
            if (t instanceof f.ChannelRecordBase) {
                if (t.type === T.ChannelTypes.PRIVATE_THREAD || f.THREAD_CHANNEL_TYPES.has(t.type) && null == (t = p.default.getChannel(t.parent_id))) return !1;
                i = t.permissionOverwrites;
                let e = t.getGuildId();
                n = null != e ? _.default.getGuild(e) : null
            } else n = t;
            if (null == n) return !1;
            let r = n.roles[n.getEveryoneRoleId()],
                a = r.permissions,
                o = i[n.id];
            return null != o && (a = s.default.remove(a, o.deny), a = s.default.add(a, o.allow)), s.default.has(a, e)
        },
        canEveryone(e, t) {
            let n;
            let i = {};
            if (t instanceof f.ChannelRecordBase) {
                if (t.type === T.ChannelTypes.PRIVATE_THREAD || f.THREAD_CHANNEL_TYPES.has(t.type) && null == (t = p.default.getChannel(t.parent_id))) return !1;
                i = t.permissionOverwrites;
                let e = t.getGuildId();
                n = null != e ? _.default.getGuild(e) : null
            } else n = t;
            if (null == n) return !1;
            let a = n.roles[n.getEveryoneRoleId()];
            return !(!s.default.has(a.permissions, e) || r.some(i, t => s.default.has(t.deny, e))) && !0
        },
        canManageACategory: function(e, t, n) {
            return !!U({
                permission: T.Permissions.MANAGE_CHANNELS,
                user: e,
                context: t
            }) || n.some(t => {
                let {
                    channel: n
                } = t;
                return "null" !== n.id && U({
                    permission: T.Permissions.MANAGE_CHANNELS,
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
                r = {
                    ...t.permissionOverwrites
                };
            return null == i[n] && (i[n] = M(n)), null == r[n] && (r[n] = M(n)), Object.keys(i).length === Object.keys(r).length && !Object.keys(i).some(e => {
                let t = i[e],
                    n = r[e];
                return !(null != n && s.default.equals(n.deny, t.deny) && s.default.equals(n.allow, t.allow)) && !0
            })
        },
        makeEveryoneOverwrite: M
    }
}