function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HasAccessResult: function() {
            return i
        },
        computeAllowedForChannel: function() {
            return m
        },
        computeAllowedForUser: function() {
            return N
        },
        hasAccess: function() {
            return S
        }
    }), n("47120");
    var i, r, s = n("512722"),
        a = n.n(s),
        o = n("149765"),
        l = n("911969"),
        u = n("399860"),
        d = n("131704"),
        _ = n("430824"),
        c = n("895924"),
        E = n("581364"),
        I = n("807169"),
        T = n("689079"),
        f = n("981631");

    function S(e, t, n, i, r) {
        let {
            context: s,
            commandType: u,
            allowNsfw: S,
            computedPermissions: A,
            userId: h,
            roleIds: O,
            isImpersonating: p,
            hasBaseAccessPermissions: R
        } = t;
        if (e.type !== u) return 2;
        if (e.nsfw && !S) return 1;
        let C = (0, I.computeCommandContextType)(s, r);
        if (null != e.contexts) {
            if (!e.contexts.includes(C)) return 4
        } else if (e.inputType === c.ApplicationCommandInputType.BOT && (!1 === e.dmPermission && C === l.InteractionContextType.BOT_DM || C === l.InteractionContextType.PRIVATE_CHANNEL)) return 4;
        if (null != e.predicate && s instanceof d.ChannelRecordBase) {
            let t = _.default.getGuild(s.guild_id);
            if (!e.predicate({
                    channel: s,
                    guild: t
                })) return 3
        }
        if (e.applicationId === T.BuiltInSectionId.BUILT_IN) return 0;
        let g = (0, I.getContextGuildId)(s);
        if (null == g || o.has(A, f.Permissions.ADMINISTRATOR)) return 0;
        if (!R) return 5;
        if (s instanceof d.ChannelRecordBase) {
            a()(void 0 !== i, "missing applicationAllowedForChannel");
            let t = m(e.permissions, s, g);
            if (function(e) {
                    return !1 === e
                }(t) || ! function(e) {
                    return !0 === e
                }(t) && function(e) {
                    return !1 === e
                }(i)) return 6
        }
        let L = N(e.permissions, g, h, O, p);
        return function(e) {
            return !0 === e
        }(L) ? 0 : function(e) {
            return !1 === e
        }(L) ? 7 : function(e) {
            return !1 === e
        }(n) || null != e.defaultMemberPermissions && !(!o.equals(e.defaultMemberPermissions, E.DISABLED_BY_DEFAULT_PERMISSION_FLAG) && o.has(A, e.defaultMemberPermissions)) ? 7 : 0
    }

    function A(e) {
        return !0 === e
    }

    function h(e) {
        return !1 === e
    }

    function m(e, t, n) {
        if (null == e) return null;
        let i = t.id;
        if (t.isThread()) {
            var r;
            i = null !== (r = t.parent_id) && void 0 !== r ? r : t.id
        }
        let s = e[(0, u.toPermissionKey)(i, c.ApplicationCommandPermissionType.CHANNEL)];
        if (null != s) return s.permission;
        let a = e[(0, u.toPermissionKey)((0, E.allChannelsSentinel)(n), c.ApplicationCommandPermissionType.CHANNEL)];
        return null != a ? a.permission : null
    }

    function N(e, t, n, i, r) {
        if (null == e) return null;
        if (!r) {
            let t = e[(0, u.toPermissionKey)(n, c.ApplicationCommandPermissionType.USER)];
            if (null != t) return t.permission
        }
        let s = !1;
        for (let t of i) {
            let n = e[(0, u.toPermissionKey)(t, c.ApplicationCommandPermissionType.ROLE)];
            if (null != n) {
                if (n.permission) return !0;
                s = !0
            }
        }
        if (s) return !1;
        let a = e[(0, u.toPermissionKey)(t, c.ApplicationCommandPermissionType.ROLE)];
        return null != a ? a.permission : null
    }(r = i || (i = {}))[r.ALLOWED = 0] = "ALLOWED", r[r.NSFW_NOT_ALLOWED = 1] = "NSFW_NOT_ALLOWED", r[r.WRONG_COMMAND_TYPE = 2] = "WRONG_COMMAND_TYPE", r[r.PREDICATE_FAILED = 3] = "PREDICATE_FAILED", r[r.CONTEXT_NOT_ALLOWED = 4] = "CONTEXT_NOT_ALLOWED", r[r.MISSING_BASE_PERMISSIONS = 5] = "MISSING_BASE_PERMISSIONS", r[r.CHANNEL_DENIED = 6] = "CHANNEL_DENIED", r[r.USER_DENIED = 7] = "USER_DENIED"
}