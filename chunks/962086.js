function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        startImpersonating: function() {
            return h
        },
        stopImpersonating: function() {
            return m
        },
        updateImpersonatedChannels: function() {
            return O
        },
        updateImpersonatedData: function() {
            return R
        },
        updateImpersonatedRoles: function() {
            return p
        },
        updateImpersonating: function() {
            return A
        }
    }), n("47120");
    var i = n("570140"),
        r = n("367907"),
        s = n("703656"),
        a = n("592125"),
        o = n("984933"),
        l = n("271383"),
        u = n("430824"),
        d = n("496675"),
        _ = n("944486"),
        c = n("9156"),
        E = n("626135"),
        I = n("160404"),
        T = n("225675"),
        f = n("981631"),
        S = n("176505");

    function h(e, t) {
        E.default.track(f.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
            num_roles: Object.keys(t.roles).length,
            ...(0, r.collectGuildAnalyticsMetadata)(e),
            is_viewing_as_member: t.type === T.ImpersonateType.NEW_MEMBER
        }), i.default.dispatch({
            type: "IMPERSONATE_UPDATE",
            guildId: e,
            data: t
        }), N(e)
    }

    function A(e, t) {
        let n = I.default.getData(e);
        null != n && n.type === t.type && (E.default.track(f.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
            num_roles: Object.keys(n.roles).length,
            ...(0, r.collectGuildAnalyticsMetadata)(e),
            is_viewing_as_member: n.type === T.ImpersonateType.NEW_MEMBER
        }), i.default.dispatch({
            type: "IMPERSONATE_UPDATE",
            guildId: e,
            data: {
                ...n,
                ...t
            }
        }), N(e))
    }

    function m(e) {
        i.default.dispatch({
            type: "IMPERSONATE_STOP",
            guildId: e
        })
    }

    function N(e) {
        let t = _.default.getChannelId(e),
            n = a.default.getChannel(t);
        if (!(null != t && (0, S.isStaticChannelRoute)(t)) && !d.default.can(f.Permissions.VIEW_CHANNEL, n)) {
            let t = o.default.getDefaultChannel(e);
            null != t && (0, s.transitionTo)(f.Routes.CHANNEL(e, t.id))
        }
    }

    function O(e, t, n) {
        let i = new Set(c.default.getOptedInChannels(e));
        t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), A(e, {
            type: T.ImpersonateType.NEW_MEMBER,
            optInChannels: i
        })
    }

    function p(e, t) {
        let n = u.default.getRoles(e);
        ! function(e, t) {
            let n = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                i = Array.from(t);
            o.default.addConditionalChangeListener(() => {
                let t = l.default.getSelfMember(e);
                if (null == t) return !1;
                if (i.some(e => !t.roles.includes(e))) return !0;
                let r = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)].filter(e => !n.includes(e));
                return r.length > 0 && O(e, r, []), !1
            })
        }(e, t);
        let i = {};
        t.forEach(e => i[e] = n[e]), A(e, {
            type: T.ImpersonateType.NEW_MEMBER,
            roles: i
        })
    }

    function R(e, t) {
        A(e, {
            type: T.ImpersonateType.NEW_MEMBER,
            ...t
        })
    }
}