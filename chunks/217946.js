function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HasAccessResult: function() {
            return i
        },
        hasAccess: function() {
            return I
        },
        computeAllowedForChannel: function() {
            return A
        },
        computeAllowedForUser: function() {
            return E
        }
    }), n("222007");
    var i, l, a = n("627445"),
        o = n.n(a),
        r = n("316693"),
        s = n("892692"),
        u = n("233069"),
        d = n("305961"),
        c = n("524768"),
        p = n("389153"),
        f = n("123373"),
        m = n("317041"),
        _ = n("49111");

    function I(e, t, n, i, l) {
        let {
            context: a,
            commandType: s,
            allowNsfw: c,
            computedPermissions: I,
            userId: C,
            roleIds: T,
            isImpersonating: N,
            hasBaseAccessPermissions: g
        } = t;
        if (e.type !== s) return 2;
        if (e.nsfw && !c) return 1;
        let h = (0, f.computeCommandContextType)(a, l);
        if (null != e.contexts && !e.contexts.includes(h)) return 4;
        if (null != e.predicate && a instanceof u.ChannelRecordBase) {
            let t = d.default.getGuild(a.guild_id);
            if (!e.predicate({
                    channel: a,
                    guild: t
                })) return 3
        }
        if (e.applicationId === m.BuiltInSectionId.BUILT_IN) return 0;
        let S = (0, f.getContextGuildId)(a);
        if (null == S || r.default.has(I, _.Permissions.ADMINISTRATOR)) return 0;
        if (!g) return 5;
        if (a instanceof u.ChannelRecordBase) {
            o(void 0 !== i, "missing applicationAllowedForChannel");
            let t = A(e.permissions, a, S);
            if (function(e) {
                    return !1 === e
                }(t) || ! function(e) {
                    return !0 === e
                }(t) && function(e) {
                    return !1 === e
                }(i)) return 6
        }
        let O = E(e.permissions, S, C, T, N);
        return function(e) {
            return !0 === e
        }(O) ? 0 : function(e) {
            return !1 === e
        }(O) ? 7 : function(e) {
            return !1 === e
        }(n) || null != e.defaultMemberPermissions && !(!r.default.equals(e.defaultMemberPermissions, p.DISABLED_BY_DEFAULT_PERMISSION_FLAG) && r.default.has(I, e.defaultMemberPermissions)) ? 7 : 0
    }

    function C(e) {
        return !0 === e
    }

    function T(e) {
        return !1 === e
    }

    function A(e, t, n) {
        if (null == e) return null;
        let i = t.id;
        if (t.isThread()) {
            var l;
            i = null !== (l = t.parent_id) && void 0 !== l ? l : t.id
        }
        let a = e[(0, s.toPermissionKey)(i, c.ApplicationCommandPermissionType.CHANNEL)];
        if (null != a) return a.permission;
        let o = e[(0, s.toPermissionKey)((0, p.allChannelsSentinel)(n), c.ApplicationCommandPermissionType.CHANNEL)];
        return null != o ? o.permission : null
    }

    function E(e, t, n, i, l) {
        if (null == e) return null;
        if (!l) {
            let t = e[(0, s.toPermissionKey)(n, c.ApplicationCommandPermissionType.USER)];
            if (null != t) return t.permission
        }
        let a = !1;
        for (let t of i) {
            let n = e[(0, s.toPermissionKey)(t, c.ApplicationCommandPermissionType.ROLE)];
            if (null != n) {
                if (n.permission) return !0;
                a = !0
            }
        }
        if (a) return !1;
        let o = e[(0, s.toPermissionKey)(t, c.ApplicationCommandPermissionType.ROLE)];
        return null != o ? o.permission : null
    }(l = i || (i = {}))[l.ALLOWED = 0] = "ALLOWED", l[l.NSFW_NOT_ALLOWED = 1] = "NSFW_NOT_ALLOWED", l[l.WRONG_COMMAND_TYPE = 2] = "WRONG_COMMAND_TYPE", l[l.PREDICATE_FAILED = 3] = "PREDICATE_FAILED", l[l.CONTEXT_NOT_ALLOWED = 4] = "CONTEXT_NOT_ALLOWED", l[l.MISSING_BASE_PERMISSIONS = 5] = "MISSING_BASE_PERMISSIONS", l[l.CHANNEL_DENIED = 6] = "CHANNEL_DENIED", l[l.USER_DENIED = 7] = "USER_DENIED"
}