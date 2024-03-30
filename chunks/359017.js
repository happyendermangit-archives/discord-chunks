function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT: function() {
            return b
        },
        NONE: function() {
            return g
        },
        VIEW_GUILD_SETTINGS: function() {
            return D
        },
        applyThreadPermissions: function() {
            return k
        },
        areChannelsLocked: function() {
            return G
        },
        can: function() {
            return x
        },
        canEveryone: function() {
            return W
        },
        canEveryoneRole: function() {
            return Y
        },
        computePermissions: function() {
            return w
        },
        computePermissionsForRoles: function() {
            return function e(t) {
                var n = t.forceRoles,
                    r = t.context,
                    o = t.overwrites,
                    i = t.roles,
                    a = t.checkElevated,
                    u = void 0 === a || a,
                    s = t.excludeGuildPermissions,
                    l = N;
                if (S(r, _.ChannelRecordBase)) {
                    if (r.isScheduledForDeletion()) return g;
                    if (_.THREAD_CHANNEL_TYPES.has(r.type)) {
                        var c, f, d = p.default.getChannel(r.parent_id);
                        return null == d ? g : k(r, e({
                            forceRoles: n,
                            context: d,
                            overwrites: o,
                            roles: i,
                            checkElevated: u,
                            excludeGuildPermissions: s
                        }), !1)
                    }
                    l = null !== (f = r.computeLurkerPermissionsAllowList()) && void 0 !== f ? f : l;
                    o = null != o ? v({}, r.permissionOverwrites, o) : r.permissionOverwrites;
                    var E = r.getGuildId();
                    c = null != E ? y.default.getGuild(E) : null
                } else o = null != o ? o : {}, c = r;
                if (null == c) return g;
                var m = {
                    userId: O.EMPTY_STRING_SNOWFLAKE_ID,
                    nick: "",
                    guildId: c.id,
                    guildMemberAvatar: null,
                    roles: h.default.keys(n),
                    colorString: null,
                    hoistRoleId: null,
                    premiumSince: null,
                    isPending: !1,
                    joinedAt: new Date().toISOString(),
                    communicationDisabledUntil: null
                };
                return U({
                    userId: O.EMPTY_STRING_SNOWFLAKE_ID,
                    member: m,
                    guild: c,
                    overwrites: o,
                    roles: i,
                    checkElevated: u,
                    excludeGuildPermissions: s,
                    lurkerPermissionsMask: l
                })
            }
        },
        getGuildVisualOwnerId: function() {
            return B
        },
        getHighestHoistedRole: function() {
            return V
        },
        getHighestRole: function() {
            return F
        },
        isRoleHigher: function() {
            return j
        },
        makeEveryoneOverwrite: function() {
            return H
        }
    });
    var r, o = n("392711"),
        i = n.n(o),
        a = n("22287"),
        u = n("29570"),
        s = n("761531"),
        l = n("690954"),
        c = n("717744"),
        f = n("368995"),
        d = n("956774"),
        _ = n("569492"),
        E = n("217014"),
        p = n("935741"),
        m = n("957808"),
        y = n("306912"),
        I = n("208454"),
        h = n("523018"),
        O = n("281767");

    function T(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function S(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }

    function v(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }
    var g = a.deserialize(0);
    var A = a.combine.apply(a, function(e) {
            if (Array.isArray(e)) return T(e)
        }(r = i().values(O.Permissions)) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(r) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return T(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return T(e, t)
            }
        }(r) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()),
        b = a.combine(O.Permissions.CREATE_INSTANT_INVITE, O.Permissions.CHANGE_NICKNAME, O.Permissions.VIEW_CHANNEL, O.Permissions.SEND_MESSAGES, O.Permissions.EMBED_LINKS, O.Permissions.ATTACH_FILES, O.Permissions.READ_MESSAGE_HISTORY, O.Permissions.MENTION_EVERYONE, O.Permissions.USE_EXTERNAL_EMOJIS, O.Permissions.USE_EXTERNAL_STICKERS, O.Permissions.ADD_REACTIONS, O.Permissions.CREATE_PUBLIC_THREADS, O.Permissions.CREATE_PRIVATE_THREADS, O.Permissions.SEND_MESSAGES_IN_THREADS, O.Permissions.CONNECT, O.Permissions.SPEAK, O.Permissions.USE_VAD, O.Permissions.STREAM, O.Permissions.USE_EMBEDDED_ACTIVITIES, O.Permissions.USE_SOUNDBOARD, O.Permissions.REQUEST_TO_SPEAK, O.Permissions.USE_APPLICATION_COMMANDS, O.Permissions.CREATE_GUILD_EXPRESSIONS, O.Permissions.CREATE_EVENTS),
        N = a.combine(O.Permissions.VIEW_CHANNEL, O.Permissions.READ_MESSAGE_HISTORY),
        R = a.combine(O.Permissions.VIEW_CHANNEL, O.Permissions.SEND_MESSAGES, O.Permissions.CONNECT, O.Permissions.SPEAK, O.Permissions.STREAM, O.Permissions.USE_EMBEDDED_ACTIVITIES, O.Permissions.USE_EXTERNAL_EMOJIS, O.Permissions.USE_EXTERNAL_SOUNDS, O.Permissions.USE_EXTERNAL_STICKERS, O.Permissions.USE_SOUNDBOARD, O.Permissions.USE_VAD),
        C = a.combine(O.Permissions.VIEW_CHANNEL, O.Permissions.READ_MESSAGE_HISTORY),
        P = a.combine(O.Permissions.VIEW_CHANNEL, O.Permissions.READ_MESSAGE_HISTORY, O.Permissions.CHANGE_NICKNAME),
        D = a.combine(O.Permissions.MANAGE_GUILD, O.Permissions.MANAGE_ROLES, O.Permissions.ADMINISTRATOR, O.Permissions.BAN_MEMBERS, O.Permissions.MANAGE_NICKNAMES, O.Permissions.CREATE_GUILD_EXPRESSIONS, O.Permissions.MANAGE_GUILD_EXPRESSIONS, O.Permissions.MANAGE_WEBHOOKS, O.Permissions.VIEW_AUDIT_LOG);

    function L(e, t, n) {
        var r, o = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        return o && t.mfaLevel === O.MFALevels.ELEVATED && n === E.default.getId() && !(null === (r = I.default.getCurrentUser()) || void 0 === r ? void 0 : r.mfaEnabled) && (e = a.remove(e, O.ElevatedPermissions)), e
    }

    function M(e, t, n, r) {
        var o = r[e];
        if (null != o && (n = a.remove(n, o.deny), n = a.add(n, o.allow)), null != t) {
            for (var i = g, u = g, c = 0; c < t.roles.length; c++) {
                var f = r[t.roles[c]];
                null != f && (i = a.add(i, f.allow), u = a.add(u, f.deny))
            }
            n = a.remove(n, u), n = a.add(n, i);
            var d = r[t.userId];
            null != d && (n = a.remove(n, d.deny), n = a.add(n, d.allow));
            var _ = a.has(n, O.Permissions.ADMINISTRATOR);
            (0, s.hasAutomodQuarantinedProfile)(t) && !_ && (n = a.filter(n, P)), (0, l.isMemberCommunicationDisabled)(t) && !_ && (n = a.filter(n, C))
        }
        return n
    }

    function U(e) {
        var t = e.userId,
            n = e.member,
            r = e.guild,
            o = e.overwrites,
            i = e.roles,
            u = e.checkElevated,
            s = e.excludeGuildPermissions,
            l = e.lurkerPermissionsMask;
        if (void 0 !== s && s) return M(r.id, n, g, o);
        var c = (i = null != i ? v({}, y.default.getRoles(r.id), i) : y.default.getRoles(r.id))[r.getEveryoneRoleId()],
            d = null != c ? c.permissions : b;
        if (null != n)
            for (var _ = 0; _ < n.roles.length; _++) {
                var E = i[n.roles[_]];
                void 0 !== E && (d = a.add(d, E.permissions))
            }
        return d = a.has(d, O.Permissions.ADMINISTRATOR) ? A : M(r.id, n, d, o), (f.default.isLurking(r.id) || (null == n ? void 0 : n.isPending)) && (d = a.filter(d, void 0 === l ? N : l)), m.default.isCurrentUserGuest(r.id) && (d = a.filter(d, R)), L(d, r, t, void 0 === u || u)
    }

    function w(e) {
        var t = e.user,
            n = e.context,
            r = e.overwrites,
            o = e.roles,
            i = e.checkElevated,
            a = void 0 === i || i,
            u = e.excludeGuildPermissions,
            s = void 0 !== u && u;
        if (null == t) return g;
        var l = "string" == typeof t ? t : t.id,
            f = N;
        if (S(n, _.ChannelRecordBase)) {
            if (n.isScheduledForDeletion()) return g;
            if (_.THREAD_CHANNEL_TYPES.has(n.type)) {
                var E, h, O, T, b = p.default.getChannel(n.parent_id);
                if (null == b || b.isScheduledForDeletion()) return g;
                var R = l === (null === (T = I.default.getCurrentUser()) || void 0 === T ? void 0 : T.id) && d.default.hasJoined(n.id);
                return k(n, w({
                    user: t,
                    context: b,
                    overwrites: r,
                    roles: o,
                    checkElevated: a,
                    excludeGuildPermissions: s
                }), R)
            }
            f = null !== (O = n.computeLurkerPermissionsAllowList()) && void 0 !== O ? O : f;
            r = null != r ? v({}, n.permissionOverwrites, r) : n.permissionOverwrites;
            var C = n.getGuildId();
            h = null != C ? y.default.getGuild(C) : null
        } else r = null != r ? r : {}, h = n;
        if (null == h) return g;
        if (!(l === (null === (E = I.default.getCurrentUser()) || void 0 === E ? void 0 : E.id) && c.default.isViewingRoles(h.id)) && h.isOwner(l)) return L(A, h, l, a);
        var P = m.default.getMember(h.id, l);
        return U({
            userId: l,
            member: P,
            guild: h,
            overwrites: r,
            roles: o,
            checkElevated: a,
            excludeGuildPermissions: s,
            lurkerPermissionsMask: f
        })
    }

    function k(e, t, n) {
        return e.type !== O.ChannelTypes.PRIVATE_THREAD || n || a.has(t, O.Permissions.MANAGE_THREADS) ? a.has(t, O.Permissions.SEND_MESSAGES_IN_THREADS) ? e.isLockedThread() && !a.has(t, O.Permissions.MANAGE_THREADS) ? a.remove(t, O.Permissions.SEND_MESSAGES) : a.combine(t, O.Permissions.SEND_MESSAGES) : a.remove(t, O.Permissions.SEND_MESSAGES) : g
    }

    function G(e, t) {
        if (_.THREAD_CHANNEL_TYPES.has(e.type)) return !0;
        var n = e.guild_id;
        if (null == t || null == n || n !== t.guild_id) return !1;
        var r = v({}, e.permissionOverwrites),
            o = v({}, t.permissionOverwrites);
        return null == r[n] && (r[n] = H(n)), null == o[n] && (o[n] = H(n)), Object.keys(r).length === Object.keys(o).length && !Object.keys(r).some(function(e) {
            var t = r[e],
                n = o[e];
            return !(null != n && a.equals(n.deny, t.deny) && a.equals(n.allow, t.allow)) && !0
        })
    }

    function B(e) {
        var t;
        return i().some(y.default.getRoles(e.id), function(e) {
            return e.hoist && a.has(e.permissions, O.Permissions.ADMINISTRATOR)
        }) ? void 0 : null !== (t = e.ownerId) && void 0 !== t ? t : void 0
    }

    function j(e, t, n, r) {
        if (null != t && e.isOwner(t)) return !0;
        if (null == n) return !1;
        var o = i()(y.default.getRoles(e.id)).sortBy(function(e) {
            return e.position
        }).map(function(e) {
            return e.id
        }).value();
        return o.indexOf(n.id) > (null != r ? o.indexOf(r.id) : -1)
    }

    function F(e, t) {
        var n = m.default.getMember(e.id, t);
        if (null != n) return i()(y.default.getRoles(e.id)).filter(function(e) {
            return -1 !== n.roles.indexOf(e.id)
        }).sortBy(function(e) {
            return -e.position
        }).first()
    }

    function V(e, t) {
        return null == t.hoistRoleId ? null : y.default.getRole(e.id, t.hoistRoleId)
    }

    function H(e) {
        return {
            id: e,
            type: u.PermissionOverwriteType.ROLE,
            allow: g,
            deny: g
        }
    }

    function x(e) {
        var t = e.permission,
            n = e.user,
            r = e.context,
            o = e.overwrites,
            i = e.roles,
            u = e.excludeGuildPermissions;
        return a.has(w({
            user: n,
            context: r,
            overwrites: o,
            roles: i,
            checkElevated: !0,
            excludeGuildPermissions: u
        }), t)
    }

    function Y(e, t) {
        var n, r = {};
        if (S(t, _.ChannelRecordBase)) {
            if (t.type === O.ChannelTypes.PRIVATE_THREAD || _.THREAD_CHANNEL_TYPES.has(t.type) && null == (t = p.default.getChannel(t.parent_id))) return !1;
            r = t.permissionOverwrites;
            var o = t.getGuildId();
            n = null != o ? y.default.getGuild(o) : null
        } else n = t;
        if (null == n) return !1;
        var i = y.default.getRole(n.id, n.getEveryoneRoleId());
        if (null == i) return !1;
        var u = i.permissions,
            s = r[n.id];
        return null != s && (u = a.remove(u, s.deny), u = a.add(u, s.allow)), a.has(u, e)
    }

    function W(e, t) {
        var n, r = {};
        if (S(t, _.ChannelRecordBase)) {
            if (t.type === O.ChannelTypes.PRIVATE_THREAD || _.THREAD_CHANNEL_TYPES.has(t.type) && null == (t = p.default.getChannel(t.parent_id))) return !1;
            r = t.permissionOverwrites;
            var o = t.getGuildId();
            n = null != o ? y.default.getGuild(o) : null
        } else n = t;
        if (null == n) return !1;
        var u = y.default.getRole(n.id, n.getEveryoneRoleId());
        return !(null == u || !a.has(u.permissions, e) || i().some(r, function(t) {
            return a.has(t.deny, e)
        })) && !0
    }
}