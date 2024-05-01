function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getManageResourcePermissions: function() {
            return T
        },
        useManageResourcePermissions: function() {
            return I
        }
    }), n("47120");
    var i = n("470079"),
        r = n("149765"),
        a = n("442837"),
        s = n("601964");
    n("984933");
    var o = n("496675"),
        l = n("594174");
    n("700785");
    var u = n("85243"),
        d = n("231338");
    let _ = {
            canCreateExpressions: !1,
            canCreateGuildEvent: !1,
            canManageAllExpressions: !1,
            canManageAllEvents: !1,
            canManageGuildExpression: () => !1,
            canManageGuildEvent: () => !1
        },
        c = (e, t, n, i) => {
            if (null == e) return !1;
            if (n) return !0;
            if ("creator_id" in e) return i && null != t && e.creator_id === t.id;
            if ("userId" in e) return i && null != t && e.userId === t.id;
            if ("user" in e) {
                var r;
                return i && null != t && (null === (r = e.user) || void 0 === r ? void 0 : r.id) === t.id
            }
            return !1
        },
        E = e => {
            if (null == e) return [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS];
            let t = u.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
            return e.isGuildStageVoice() ? t = u.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = u.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [r.combine(t, d.Permissions.CREATE_EVENTS), r.combine(t, d.Permissions.MANAGE_EVENTS)]
        },
        I = e => {
            let [t, n] = e instanceof s.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : E(e), [r, u, I, T] = (0, a.useStateFromStoresArray)([o.default], () => [o.default.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e), o.default.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e), o.default.can(t, e), o.default.can(n, e)]), f = (0, a.useStateFromStores)([l.default], () => l.default.getCurrentUser()), S = i.useCallback(e => c(e, f, u, r), [r, u, f]), h = i.useCallback(e => c(e, f, T, I), [T, I, f]);
            return null == e ? _ : {
                canCreateExpressions: r,
                canCreateGuildEvent: I,
                canManageAllExpressions: u,
                canManageAllEvents: T,
                canManageGuildExpression: S,
                canManageGuildEvent: h
            }
        },
        T = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.default,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.default,
                [i, r] = e instanceof s.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : E(e),
                a = t.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                u = t.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                I = t.can(i, e),
                T = t.can(r, e),
                f = n.getCurrentUser();
            return null == e ? _ : {
                canCreateExpressions: a,
                canCreateGuildEvent: I,
                canManageAllExpressions: u,
                canManageAllEvents: T,
                canManageGuildExpression: e => c(e, f, u, a),
                canManageGuildEvent: e => c(e, f, T, I)
            }
        }
}