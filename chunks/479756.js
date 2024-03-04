function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        startImpersonating: function() {
            return p
        },
        updateImpersonating: function() {
            return S
        },
        stopImpersonating: function() {
            return v
        },
        updateImpersonatedChannels: function() {
            return I
        },
        updateImpersonatedRoles: function() {
            return C
        },
        updateImpersonatedData: function() {
            return A
        }
    }), n("222007");
    var i = n("913144"),
        s = n("716241"),
        r = n("393414"),
        a = n("42203"),
        o = n("923959"),
        l = n("26989"),
        u = n("305961"),
        d = n("957255"),
        c = n("18494"),
        f = n("282109"),
        _ = n("599110"),
        h = n("38654"),
        E = n("507950"),
        g = n("49111"),
        m = n("724210");

    function p(e, t) {
        _.default.track(g.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
            num_roles: Object.keys(t.roles).length,
            ...(0, s.collectGuildAnalyticsMetadata)(e),
            is_viewing_as_member: t.type === E.ImpersonateType.NEW_MEMBER
        }), i.default.dispatch({
            type: "IMPERSONATE_UPDATE",
            guildId: e,
            data: t
        }), T(e)
    }

    function S(e, t) {
        let n = h.default.getData(e);
        null != n && n.type === t.type && (_.default.track(g.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
            num_roles: Object.keys(n.roles).length,
            ...(0, s.collectGuildAnalyticsMetadata)(e),
            is_viewing_as_member: n.type === E.ImpersonateType.NEW_MEMBER
        }), i.default.dispatch({
            type: "IMPERSONATE_UPDATE",
            guildId: e,
            data: {
                ...n,
                ...t
            }
        }), T(e))
    }

    function v(e) {
        i.default.dispatch({
            type: "IMPERSONATE_STOP",
            guildId: e
        })
    }

    function T(e) {
        let t = c.default.getChannelId(e),
            n = a.default.getChannel(t),
            i = null != t && (0, m.isStaticChannelRoute)(t);
        if (!i && !d.default.can(g.Permissions.VIEW_CHANNEL, n)) {
            let t = o.default.getDefaultChannel(e);
            null != t && (0, r.transitionTo)(g.Routes.CHANNEL(e, t.id))
        }
    }

    function I(e, t, n) {
        let i = new Set(f.default.getOptedInChannels(e));
        t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), S(e, {
            type: E.ImpersonateType.NEW_MEMBER,
            optInChannels: i
        })
    }

    function C(e, t) {
        let n = u.default.getGuild(e);
        if (null == n) return;
        ! function(e, t) {
            let n = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                i = Array.from(t);
            o.default.addConditionalChangeListener(() => {
                let t = l.default.getSelfMember(e);
                if (null == t) return !1;
                if (i.some(e => !t.roles.includes(e))) return !0;
                let s = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                    r = s.filter(e => !n.includes(e));
                return r.length > 0 && I(e, r, []), !1
            })
        }(e, t);
        let i = {};
        t.forEach(e => i[e] = n.roles[e]), S(e, {
            type: E.ImpersonateType.NEW_MEMBER,
            roles: i
        })
    }

    function A(e, t) {
        S(e, {
            type: E.ImpersonateType.NEW_MEMBER,
            ...t
        })
    }
}