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
    var i, r, a = n("512722"),
        s = n.n(a),
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
            context: a,
            commandType: u,
            allowNsfw: S,
            computedPermissions: h,
            userId: A,
            roleIds: p,
            isImpersonating: O,
            hasBaseAccessPermissions: R
        } = t;
        if (e.type !== u) return 2;
        if (e.nsfw && !S) return 1;
        let C = (0, I.computeCommandContextType)(a, r);
        if (null != e.contexts) {
            if (!e.contexts.includes(C)) return 4
        } else if (e.inputType === c.ApplicationCommandInputType.BOT && (!1 === e.dmPermission && C === l.InteractionContextType.BOT_DM || C === l.InteractionContextType.PRIVATE_CHANNEL)) return 4;
        if (null != e.predicate && a instanceof d.ChannelRecordBase) {
            let t = _.default.getGuild(a.guild_id);
            if (!e.predicate({
                    channel: a,
                    guild: t
                })) return 3
        }
        if (e.applicationId === T.BuiltInSectionId.BUILT_IN) return 0;
        let g = (0, I.getContextGuildId)(a);
        if (null == g || o.has(h, f.Permissions.ADMINISTRATOR)) return 0;
        if (!R) return 5;
        if (a instanceof d.ChannelRecordBase) {
            s()(void 0 !== i, "missing applicationAllowedForChannel");
            let t = m(e.permissions, a, g);
            if (function(e) {
                    return !1 === e
                }(t) || ! function(e) {
                    return !0 === e
                }(t) && function(e) {
                    return !1 === e
                }(i)) return 6
        }
        let L = N(e.permissions, g, A, p, O);
        return function(e) {
            return !0 === e
        }(L) ? 0 : function(e) {
            return !1 === e
        }(L) ? 7 : function(e) {
            return !1 === e
        }(n) || null != e.defaultMemberPermissions && !(!o.equals(e.defaultMemberPermissions, E.DISABLED_BY_DEFAULT_PERMISSION_FLAG) && o.has(h, e.defaultMemberPermissions)) ? 7 : 0
    }

    function h(e) {
        return !0 === e
    }

    function A(e) {
        return !1 === e
    }

    function m(e, t, n) {
        if (null == e) return null;
        let i = t.id;
        if (t.isThread()) {
            var r;
            i = null !== (r = t.parent_id) && void 0 !== r ? r : t.id
        }
        let a = e[(0, u.toPermissionKey)(i, c.ApplicationCommandPermissionType.CHANNEL)];
        if (null != a) return a.permission;
        let s = e[(0, u.toPermissionKey)((0, E.allChannelsSentinel)(n), c.ApplicationCommandPermissionType.CHANNEL)];
        return null != s ? s.permission : null
    }

    function N(e, t, n, i, r) {
        if (null == e) return null;
        if (!r) {
            let t = e[(0, u.toPermissionKey)(n, c.ApplicationCommandPermissionType.USER)];
            if (null != t) return t.permission
        }
        let a = !1;
        for (let t of i) {
            let n = e[(0, u.toPermissionKey)(t, c.ApplicationCommandPermissionType.ROLE)];
            if (null != n) {
                if (n.permission) return !0;
                a = !0
            }
        }
        if (a) return !1;
        let s = e[(0, u.toPermissionKey)(t, c.ApplicationCommandPermissionType.ROLE)];
        return null != s ? s.permission : null
    }(r = i || (i = {}))[r.ALLOWED = 0] = "ALLOWED", r[r.NSFW_NOT_ALLOWED = 1] = "NSFW_NOT_ALLOWED", r[r.WRONG_COMMAND_TYPE = 2] = "WRONG_COMMAND_TYPE", r[r.PREDICATE_FAILED = 3] = "PREDICATE_FAILED", r[r.CONTEXT_NOT_ALLOWED = 4] = "CONTEXT_NOT_ALLOWED", r[r.MISSING_BASE_PERMISSIONS = 5] = "MISSING_BASE_PERMISSIONS", r[r.CHANNEL_DENIED = 6] = "CHANNEL_DENIED", r[r.USER_DENIED = 7] = "USER_DENIED"
}