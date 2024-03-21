function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HasAccessResult: function() {
            return i
        },
        hasAccess: function() {
            return T
        },
        computeAllowedForChannel: function() {
            return C
        },
        computeAllowedForUser: function() {
            return N
        }
    }), n("222007");
    var i, l, a = n("627445"),
        o = n.n(a),
        s = n("316693"),
        r = n("798609"),
        u = n("892692"),
        d = n("233069"),
        c = n("305961"),
        p = n("524768"),
        f = n("389153"),
        m = n("123373"),
        _ = n("317041"),
        I = n("49111");

    function T(e, t, n, i, l) {
        let {
            context: a,
            commandType: u,
            allowNsfw: T,
            computedPermissions: A,
            userId: E,
            roleIds: g,
            isImpersonating: M,
            hasBaseAccessPermissions: O
        } = t;
        if (e.type !== u) return 2;
        if (e.nsfw && !T) return 1;
        let S = (0, m.computeCommandContextType)(a, l);
        if (null != e.contexts) {
            if (!e.contexts.includes(S)) return 4
        } else if (e.inputType === p.ApplicationCommandInputType.BOT && (!1 === e.dmPermission && S === r.InteractionContextType.BOT_DM || S === r.InteractionContextType.PRIVATE_CHANNEL)) return 4;
        if (null != e.predicate && a instanceof d.ChannelRecordBase) {
            let t = c.default.getGuild(a.guild_id);
            if (!e.predicate({
                    channel: a,
                    guild: t
                })) return 3
        }
        if (e.applicationId === _.BuiltInSectionId.BUILT_IN) return 0;
        let h = (0, m.getContextGuildId)(a);
        if (null == h || s.has(A, I.Permissions.ADMINISTRATOR)) return 0;
        if (!O) return 5;
        if (a instanceof d.ChannelRecordBase) {
            o(void 0 !== i, "missing applicationAllowedForChannel");
            let t = C(e.permissions, a, h);
            if (function(e) {
                    return !1 === e
                }(t) || ! function(e) {
                    return !0 === e
                }(t) && function(e) {
                    return !1 === e
                }(i)) return 6
        }
        let y = N(e.permissions, h, E, g, M);
        return function(e) {
            return !0 === e
        }(y) ? 0 : function(e) {
            return !1 === e
        }(y) ? 7 : function(e) {
            return !1 === e
        }(n) || null != e.defaultMemberPermissions && !(!s.equals(e.defaultMemberPermissions, f.DISABLED_BY_DEFAULT_PERMISSION_FLAG) && s.has(A, e.defaultMemberPermissions)) ? 7 : 0
    }

    function A(e) {
        return !0 === e
    }

    function E(e) {
        return !1 === e
    }

    function C(e, t, n) {
        if (null == e) return null;
        let i = t.id;
        if (t.isThread()) {
            var l;
            i = null !== (l = t.parent_id) && void 0 !== l ? l : t.id
        }
        let a = e[(0, u.toPermissionKey)(i, p.ApplicationCommandPermissionType.CHANNEL)];
        if (null != a) return a.permission;
        let o = e[(0, u.toPermissionKey)((0, f.allChannelsSentinel)(n), p.ApplicationCommandPermissionType.CHANNEL)];
        return null != o ? o.permission : null
    }

    function N(e, t, n, i, l) {
        if (null == e) return null;
        if (!l) {
            let t = e[(0, u.toPermissionKey)(n, p.ApplicationCommandPermissionType.USER)];
            if (null != t) return t.permission
        }
        let a = !1;
        for (let t of i) {
            let n = e[(0, u.toPermissionKey)(t, p.ApplicationCommandPermissionType.ROLE)];
            if (null != n) {
                if (n.permission) return !0;
                a = !0
            }
        }
        if (a) return !1;
        let o = e[(0, u.toPermissionKey)(t, p.ApplicationCommandPermissionType.ROLE)];
        return null != o ? o.permission : null
    }(l = i || (i = {}))[l.ALLOWED = 0] = "ALLOWED", l[l.NSFW_NOT_ALLOWED = 1] = "NSFW_NOT_ALLOWED", l[l.WRONG_COMMAND_TYPE = 2] = "WRONG_COMMAND_TYPE", l[l.PREDICATE_FAILED = 3] = "PREDICATE_FAILED", l[l.CONTEXT_NOT_ALLOWED = 4] = "CONTEXT_NOT_ALLOWED", l[l.MISSING_BASE_PERMISSIONS = 5] = "MISSING_BASE_PERMISSIONS", l[l.CHANNEL_DENIED = 6] = "CHANNEL_DENIED", l[l.USER_DENIED = 7] = "USER_DENIED"
}