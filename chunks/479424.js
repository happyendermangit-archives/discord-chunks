function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HasAccessResult: function() {
            return o
        },
        computeAllowedForChannel: function() {
            return T
        },
        computeAllowedForUser: function() {
            return S
        },
        hasAccess: function() {
            return I
        }
    });
    var r, o, i = n("512722"),
        a = n.n(i),
        u = n("22287"),
        s = n("29570"),
        l = n("21733"),
        c = n("569492"),
        f = n("306912"),
        d = n("861272"),
        _ = n("653754"),
        E = n("332712"),
        p = n("118891"),
        m = n("281767");

    function y(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }

    function I(e, t, n, r, o) {
        var i = t.context,
            l = t.commandType,
            I = t.allowNsfw,
            h = t.computedPermissions,
            O = t.userId,
            v = t.roleIds,
            g = t.isImpersonating,
            A = t.hasBaseAccessPermissions;
        if (e.type !== l) return 2;
        if (e.nsfw && !I) return 1;
        var b = (0, E.computeCommandContextType)(i, o);
        if (null != e.contexts) {
            if (!e.contexts.includes(b)) return 4
        } else if (e.inputType === d.ApplicationCommandInputType.BOT && (!1 === e.dmPermission && b === s.InteractionContextType.BOT_DM || b === s.InteractionContextType.PRIVATE_CHANNEL)) return 4;
        if (null != e.predicate && y(i, c.ChannelRecordBase)) {
            var N = f.default.getGuild(i.guild_id);
            if (!e.predicate({
                    channel: i,
                    guild: N
                })) return 3
        }
        if (e.applicationId === p.BuiltInSectionId.BUILT_IN) return 0;
        var R = (0, E.getContextGuildId)(i);
        if (null == R || u.has(h, m.Permissions.ADMINISTRATOR)) return 0;
        if (!A) return 5;
        if (y(i, c.ChannelRecordBase)) {
            a()(void 0 !== r, "missing applicationAllowedForChannel");
            var C = T(e.permissions, i, R);
            if (function(e) {
                    return !1 === e
                }(C) || ! function(e) {
                    return !0 === e
                }(C) && function(e) {
                    return !1 === e
                }(r)) return 6
        }
        var P = S(e.permissions, R, O, v, g);
        return function(e) {
            return !0 === e
        }(P) ? 0 : function(e) {
            return !1 === e
        }(P) ? 7 : function(e) {
            return !1 === e
        }(n) || null != e.defaultMemberPermissions && !(!u.equals(e.defaultMemberPermissions, _.DISABLED_BY_DEFAULT_PERMISSION_FLAG) && u.has(h, e.defaultMemberPermissions)) ? 7 : 0
    }

    function h(e) {
        return !0 === e
    }

    function O(e) {
        return !1 === e
    }

    function T(e, t, n) {
        if (null == e) return null;
        var r, o = t.id;
        t.isThread() && (o = null !== (r = t.parent_id) && void 0 !== r ? r : t.id);
        var i = e[(0, l.toPermissionKey)(o, d.ApplicationCommandPermissionType.CHANNEL)];
        if (null != i) return i.permission;
        var a = e[(0, l.toPermissionKey)((0, _.allChannelsSentinel)(n), d.ApplicationCommandPermissionType.CHANNEL)];
        return null != a ? a.permission : null
    }

    function S(e, t, n, r, o) {
        if (null == e) return null;
        if (!o) {
            var i = e[(0, l.toPermissionKey)(n, d.ApplicationCommandPermissionType.USER)];
            if (null != i) return i.permission
        }
        var a = !1,
            u = !0,
            s = !1,
            c = void 0;
        try {
            for (var f, _ = r[Symbol.iterator](); !(u = (f = _.next()).done); u = !0) {
                var E = f.value,
                    p = e[(0, l.toPermissionKey)(E, d.ApplicationCommandPermissionType.ROLE)];
                if (null != p) {
                    if (p.permission) return !0;
                    a = !0
                }
            }
        } catch (e) {
            s = !0, c = e
        } finally {
            try {
                !u && null != _.return && _.return()
            } finally {
                if (s) throw c
            }
        }
        if (a) return !1;
        var m = e[(0, l.toPermissionKey)(t, d.ApplicationCommandPermissionType.ROLE)];
        return null != m ? m.permission : null
    }(r = o || (o = {}))[r.ALLOWED = 0] = "ALLOWED", r[r.NSFW_NOT_ALLOWED = 1] = "NSFW_NOT_ALLOWED", r[r.WRONG_COMMAND_TYPE = 2] = "WRONG_COMMAND_TYPE", r[r.PREDICATE_FAILED = 3] = "PREDICATE_FAILED", r[r.CONTEXT_NOT_ALLOWED = 4] = "CONTEXT_NOT_ALLOWED", r[r.MISSING_BASE_PERMISSIONS = 5] = "MISSING_BASE_PERMISSIONS", r[r.CHANNEL_DENIED = 6] = "CHANNEL_DENIED", r[r.USER_DENIED = 7] = "USER_DENIED"
}