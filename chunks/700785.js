function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT: function() {
            return p
        },
        NONE: function() {
            return m
        },
        VIEW_GUILD_SETTINGS: function() {
            return L
        },
        applyThreadPermissions: function() {
            return P
        },
        areChannelsLocked: function() {
            return U
        },
        can: function() {
            return V
        },
        canEveryone: function() {
            return F
        },
        canEveryoneRole: function() {
            return x
        },
        computePermissions: function() {
            return y
        },
        computePermissionsForRoles: function() {
            return function e(t) {
                let n, {
                        forceRoles: i,
                        context: r,
                        overwrites: s,
                        roles: a,
                        checkElevated: o = !0,
                        excludeGuildPermissions: l
                    } = t,
                    u = O;
                if (r instanceof c.ChannelRecordBase) {
                    var d;
                    if (r.isScheduledForDeletion()) return m;
                    if (c.THREAD_CHANNEL_TYPES.has(r.type)) {
                        let t = I.default.getChannel(r.parent_id);
                        return null == t ? m : P(r, e({
                            forceRoles: i,
                            context: t,
                            overwrites: s,
                            roles: a,
                            checkElevated: o,
                            excludeGuildPermissions: l
                        }), !1)
                    }
                    u = null !== (d = r.computeLurkerPermissionsAllowList()) && void 0 !== d ? d : u;
                    s = null != s ? {
                        ...r.permissionOverwrites,
                        ...s
                    } : r.permissionOverwrites;
                    let t = r.getGuildId();
                    n = null != t ? f.default.getGuild(t) : null
                } else s = null != s ? s : {}, n = r;
                if (null == n) return m;
                let _ = {
                    userId: A.EMPTY_STRING_SNOWFLAKE_ID,
                    nick: "",
                    guildId: n.id,
                    guildMemberAvatar: null,
                    roles: h.default.keys(i),
                    colorString: null,
                    hoistRoleId: null,
                    premiumSince: null,
                    isPending: !1,
                    joinedAt: new Date().toISOString(),
                    communicationDisabledUntil: null
                };
                return M({
                    userId: A.EMPTY_STRING_SNOWFLAKE_ID,
                    member: _,
                    guild: n,
                    overwrites: s,
                    roles: a,
                    checkElevated: o,
                    excludeGuildPermissions: l,
                    lurkerPermissionsMask: u
                })
            }
        },
        getGuildVisualOwnerId: function() {
            return b
        },
        getHighestHoistedRole: function() {
            return B
        },
        getHighestRole: function() {
            return w
        },
        isRoleHigher: function() {
            return G
        },
        makeEveryoneOverwrite: function() {
            return k
        }
    }), n("47120");
    var i = n("392711"),
        r = n.n(i),
        s = n("149765"),
        a = n("911969"),
        o = n("715903"),
        l = n("69882"),
        u = n("160404"),
        d = n("41776"),
        _ = n("569471"),
        c = n("131704"),
        E = n("314897"),
        I = n("592125"),
        T = n("271383"),
        f = n("430824"),
        S = n("594174"),
        h = n("709054"),
        A = n("981631");
    let m = s.deserialize(0),
        N = s.combine(...r().values(A.Permissions)),
        p = s.combine(A.Permissions.CREATE_INSTANT_INVITE, A.Permissions.CHANGE_NICKNAME, A.Permissions.VIEW_CHANNEL, A.Permissions.SEND_MESSAGES, A.Permissions.EMBED_LINKS, A.Permissions.ATTACH_FILES, A.Permissions.READ_MESSAGE_HISTORY, A.Permissions.MENTION_EVERYONE, A.Permissions.USE_EXTERNAL_EMOJIS, A.Permissions.USE_EXTERNAL_STICKERS, A.Permissions.ADD_REACTIONS, A.Permissions.CREATE_PUBLIC_THREADS, A.Permissions.CREATE_PRIVATE_THREADS, A.Permissions.SEND_MESSAGES_IN_THREADS, A.Permissions.SEND_POLLS, A.Permissions.CONNECT, A.Permissions.SPEAK, A.Permissions.USE_VAD, A.Permissions.STREAM, A.Permissions.USE_EMBEDDED_ACTIVITIES, A.Permissions.USE_SOUNDBOARD, A.Permissions.REQUEST_TO_SPEAK, A.Permissions.USE_APPLICATION_COMMANDS, A.Permissions.CREATE_GUILD_EXPRESSIONS, A.Permissions.CREATE_EVENTS),
        O = s.combine(A.Permissions.VIEW_CHANNEL, A.Permissions.READ_MESSAGE_HISTORY),
        R = s.combine(A.Permissions.VIEW_CHANNEL, A.Permissions.SEND_MESSAGES, A.Permissions.CONNECT, A.Permissions.SPEAK, A.Permissions.STREAM, A.Permissions.USE_EMBEDDED_ACTIVITIES, A.Permissions.USE_EXTERNAL_EMOJIS, A.Permissions.USE_EXTERNAL_SOUNDS, A.Permissions.USE_EXTERNAL_STICKERS, A.Permissions.USE_SOUNDBOARD, A.Permissions.USE_VAD),
        C = s.combine(A.Permissions.VIEW_CHANNEL, A.Permissions.READ_MESSAGE_HISTORY),
        g = s.combine(A.Permissions.VIEW_CHANNEL, A.Permissions.READ_MESSAGE_HISTORY, A.Permissions.CHANGE_NICKNAME),
        L = s.combine(A.Permissions.MANAGE_GUILD, A.Permissions.MANAGE_ROLES, A.Permissions.ADMINISTRATOR, A.Permissions.BAN_MEMBERS, A.Permissions.MANAGE_NICKNAMES, A.Permissions.CREATE_GUILD_EXPRESSIONS, A.Permissions.MANAGE_GUILD_EXPRESSIONS, A.Permissions.MANAGE_WEBHOOKS, A.Permissions.VIEW_AUDIT_LOG);

    function v(e, t, n) {
        let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (i && t.mfaLevel === A.MFALevels.ELEVATED && n === E.default.getId()) {
            var r;
            !(null === (r = S.default.getCurrentUser()) || void 0 === r ? void 0 : r.mfaEnabled) && (e = s.remove(e, A.ElevatedPermissions))
        }
        return e
    }

    function D(e, t, n, i) {
        let r = i[e];
        if (null != r && (n = s.remove(n, r.deny), n = s.add(n, r.allow)), null != t) {
            let e = m,
                r = m;
            for (let n = 0; n < t.roles.length; n++) {
                let a = i[t.roles[n]];
                null != a && (e = s.add(e, a.allow), r = s.add(r, a.deny))
            }
            n = s.remove(n, r), n = s.add(n, e);
            let a = i[t.userId];
            null != a && (n = s.remove(n, a.deny), n = s.add(n, a.allow));
            let u = s.has(n, A.Permissions.ADMINISTRATOR);
            (0, o.hasAutomodQuarantinedProfile)(t) && !u && (n = s.filter(n, g)), (0, l.isMemberCommunicationDisabled)(t) && !u && (n = s.filter(n, C))
        }
        return n
    }

    function M(e) {
        let {
            userId: t,
            member: n,
            guild: i,
            overwrites: r,
            roles: a,
            checkElevated: o = !0,
            excludeGuildPermissions: l = !1,
            lurkerPermissionsMask: u = O
        } = e;
        if (l) return D(i.id, n, m, r);
        let _ = (a = null != a ? {
                ...f.default.getRoles(i.id),
                ...a
            } : f.default.getRoles(i.id))[i.getEveryoneRoleId()],
            c = null != _ ? _.permissions : p;
        if (null != n)
            for (let e = 0; e < n.roles.length; e++) {
                let t = a[n.roles[e]];
                void 0 !== t && (c = s.add(c, t.permissions))
            }
        return c = s.has(c, A.Permissions.ADMINISTRATOR) ? N : D(i.id, n, c, r), (d.default.isLurking(i.id) || (null == n ? void 0 : n.isPending)) && (c = s.filter(c, u)), T.default.isCurrentUserGuest(i.id) && (c = s.filter(c, R)), v(c, i, t, o)
    }

    function y(e) {
        var t, n, i;
        let r, {
            user: s,
            context: a,
            overwrites: o,
            roles: l,
            checkElevated: d = !0,
            excludeGuildPermissions: E = !1
        } = e;
        if (null == s) return m;
        let h = "string" == typeof s ? s : s.id,
            A = O;
        if (a instanceof c.ChannelRecordBase) {
            if (a.isScheduledForDeletion()) return m;
            if (c.THREAD_CHANNEL_TYPES.has(a.type)) {
                let e = I.default.getChannel(a.parent_id);
                if (null == e || e.isScheduledForDeletion()) return m;
                let t = h === (null === (n = S.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && _.default.hasJoined(a.id);
                return P(a, y({
                    user: s,
                    context: e,
                    overwrites: o,
                    roles: l,
                    checkElevated: d,
                    excludeGuildPermissions: E
                }), t)
            }
            A = null !== (i = a.computeLurkerPermissionsAllowList()) && void 0 !== i ? i : A;
            o = null != o ? {
                ...a.permissionOverwrites,
                ...o
            } : a.permissionOverwrites;
            let e = a.getGuildId();
            r = null != e ? f.default.getGuild(e) : null
        } else o = null != o ? o : {}, r = a;
        if (null == r) return m;
        if (!(h === (null === (t = S.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && u.default.isViewingRoles(r.id)) && r.isOwner(h)) return v(N, r, h, d);
        let p = T.default.getMember(r.id, h);
        return M({
            userId: h,
            member: p,
            guild: r,
            overwrites: o,
            roles: l,
            checkElevated: d,
            excludeGuildPermissions: E,
            lurkerPermissionsMask: A
        })
    }

    function P(e, t, n) {
        return e.type !== A.ChannelTypes.PRIVATE_THREAD || n || s.has(t, A.Permissions.MANAGE_THREADS) ? s.has(t, A.Permissions.SEND_MESSAGES_IN_THREADS) ? e.isLockedThread() && !s.has(t, A.Permissions.MANAGE_THREADS) ? s.remove(t, A.Permissions.SEND_MESSAGES) : s.combine(t, A.Permissions.SEND_MESSAGES) : s.remove(t, A.Permissions.SEND_MESSAGES) : m
    }

    function U(e, t) {
        if (c.THREAD_CHANNEL_TYPES.has(e.type)) return !0;
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
        return null == i[n] && (i[n] = k(n)), null == r[n] && (r[n] = k(n)), Object.keys(i).length === Object.keys(r).length && !Object.keys(i).some(e => {
            let t = i[e],
                n = r[e];
            return !(null != n && s.equals(n.deny, t.deny) && s.equals(n.allow, t.allow)) && !0
        })
    }

    function b(e) {
        var t;
        return r().some(f.default.getRoles(e.id), e => e.hoist && s.has(e.permissions, A.Permissions.ADMINISTRATOR)) ? void 0 : null !== (t = e.ownerId) && void 0 !== t ? t : void 0
    }

    function G(e, t, n, i) {
        if (null != t && e.isOwner(t)) return !0;
        if (null == n) return !1;
        let s = r()(f.default.getRoles(e.id)).sortBy(e => e.position).map(e => e.id).value();
        return s.indexOf(n.id) > (null != i ? s.indexOf(i.id) : -1)
    }

    function w(e, t) {
        let n = T.default.getMember(e.id, t);
        if (null != n) return r()(f.default.getRoles(e.id)).filter(e => -1 !== n.roles.indexOf(e.id)).sortBy(e => -e.position).first()
    }

    function B(e, t) {
        return null == t.hoistRoleId ? null : f.default.getRole(e.id, t.hoistRoleId)
    }

    function k(e) {
        return {
            id: e,
            type: a.PermissionOverwriteType.ROLE,
            allow: m,
            deny: m
        }
    }

    function V(e) {
        let {
            permission: t,
            user: n,
            context: i,
            overwrites: r,
            roles: a,
            excludeGuildPermissions: o
        } = e;
        return s.has(y({
            user: n,
            context: i,
            overwrites: r,
            roles: a,
            checkElevated: !0,
            excludeGuildPermissions: o
        }), t)
    }

    function x(e, t) {
        let n;
        let i = {};
        if (t instanceof c.ChannelRecordBase) {
            if (t.type === A.ChannelTypes.PRIVATE_THREAD || c.THREAD_CHANNEL_TYPES.has(t.type) && null == (t = I.default.getChannel(t.parent_id))) return !1;
            i = t.permissionOverwrites;
            let e = t.getGuildId();
            n = null != e ? f.default.getGuild(e) : null
        } else n = t;
        if (null == n) return !1;
        let r = f.default.getRole(n.id, n.getEveryoneRoleId());
        if (null == r) return !1;
        let a = r.permissions,
            o = i[n.id];
        return null != o && (a = s.remove(a, o.deny), a = s.add(a, o.allow)), s.has(a, e)
    }

    function F(e, t) {
        let n;
        let i = {};
        if (t instanceof c.ChannelRecordBase) {
            if (t.type === A.ChannelTypes.PRIVATE_THREAD || c.THREAD_CHANNEL_TYPES.has(t.type) && null == (t = I.default.getChannel(t.parent_id))) return !1;
            i = t.permissionOverwrites;
            let e = t.getGuildId();
            n = null != e ? f.default.getGuild(e) : null
        } else n = t;
        if (null == n) return !1;
        let a = f.default.getRole(n.id, n.getEveryoneRoleId());
        return !(null == a || !s.has(a.permissions, e) || r().some(i, t => s.has(t.deny, e))) && !0
    }
}