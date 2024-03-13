function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useManageResourcePermissions: function() {
            return v
        },
        getManageResourcePermissions: function() {
            return E
        }
    }), n("222007");
    var i = n("884691"),
        s = n("316693"),
        r = n("446674"),
        l = n("813006");
    n("923959");
    var a = n("957255"),
        o = n("697218");
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
            let [t, n] = e instanceof l.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : h(e), [s, u, v, E] = (0, r.useStateFromStoresArray)([a.default], () => [a.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e), a.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e), a.default.can(t, e), a.default.can(n, e)]), C = (0, r.useStateFromStores)([o.default], () => o.default.getCurrentUser()), p = i.useCallback(e => f(e, C, u, s), [s, u, C]), _ = i.useCallback(e => f(e, C, E, v), [E, v, C]);
            return null == e ? d : {
                canCreateExpressions: s,
                canCreateGuildEvent: v,
                canManageAllExpressions: u,
                canManageAllEvents: E,
                canManageGuildExpression: p,
                canManageGuildEvent: _
            }
        },
        E = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.default,
                [i, s] = e instanceof l.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : h(e),
                r = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                u = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                v = t.can(i, e),
                E = t.can(s, e),
                C = n.getCurrentUser();
            return null == e ? d : {
                canCreateExpressions: r,
                canCreateGuildEvent: v,
                canManageAllExpressions: u,
                canManageAllEvents: E,
                canManageGuildExpression: e => f(e, C, u, r),
                canManageGuildEvent: e => f(e, C, E, v)
            }
        }
}