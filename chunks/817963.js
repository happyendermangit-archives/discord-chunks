function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useManageResourcePermissions: function() {
            return v
        },
        getManageResourcePermissions: function() {
            return C
        }
    }), n("222007");
    var i = n("884691"),
        s = n("316693"),
        r = n("446674"),
        l = n("813006");
    n("923959");
    var o = n("957255"),
        a = n("697218");
    n("991170");
    var u = n("270161"),
        c = n("843455");
    let d = {
            canCreateExpressions: !1,
            canCreateGuildEvent: !1,
            canManageAllExpressions: !1,
            canManageAllEvents: !1,
            canManageGuildExpression: () => !1,
            canManageGuildEvent: () => !1
        },
        f = (e, t, n, i) => {
            if (null == e) return !1;
            if (n) return !0;
            if ("creator_id" in e) return i && null != t && e.creator_id === t.id;
            if ("userId" in e) return i && null != t && e.userId === t.id;
            if ("user" in e) {
                var s;
                return i && null != t && (null === (s = e.user) || void 0 === s ? void 0 : s.id) === t.id
            }
            return !1
        },
        h = e => {
            if (null == e) return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
            let t = u.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
            return e.isGuildStageVoice() ? t = u.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = u.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [s.default.combine(t, c.Permissions.CREATE_EVENTS), s.default.combine(t, c.Permissions.MANAGE_EVENTS)]
        },
        v = e => {
            let [t, n] = e instanceof l.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : h(e), [s, u, v, C] = (0, r.useStateFromStoresArray)([o.default], () => [o.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e), o.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e), o.default.can(t, e), o.default.can(n, e)]), E = (0, r.useStateFromStores)([a.default], () => a.default.getCurrentUser()), p = i.useCallback(e => f(e, E, u, s), [s, u, E]), _ = i.useCallback(e => f(e, E, C, v), [C, v, E]);
            return null == e ? d : {
                canCreateExpressions: s,
                canCreateGuildEvent: v,
                canManageAllExpressions: u,
                canManageAllEvents: C,
                canManageGuildExpression: p,
                canManageGuildEvent: _
            }
        },
        C = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.default,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.default,
                [i, s] = e instanceof l.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : h(e),
                r = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                u = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                v = t.can(i, e),
                C = t.can(s, e),
                E = n.getCurrentUser();
            return null == e ? d : {
                canCreateExpressions: r,
                canCreateGuildEvent: v,
                canManageAllExpressions: u,
                canManageAllEvents: C,
                canManageGuildExpression: e => f(e, E, u, r),
                canManageGuildEvent: e => f(e, E, C, v)
            }
        }
}