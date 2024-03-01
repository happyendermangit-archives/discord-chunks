function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useOptInEnabledForGuild: function() {
            return u
        },
        isOptInEnabledForGuild: function() {
            return l
        },
        useShouldShowOnboardingAdminUpsellForGuild: function() {
            return f
        }
    });
    var s = n("446674"),
        i = n("305961"),
        r = n("957255"),
        a = n("282109"),
        o = n("697218"),
        d = n("49111");

    function u(e) {
        let t = (0, s.useStateFromStores)([a.default], () => a.default.isOptInEnabled(e)),
            n = (0, s.useStateFromStores)([i.default], () => i.default.getGuild(e)),
            r = (0, s.useStateFromStores)([o.default], () => o.default.getCurrentUser());
        return null != e && null != n && null != r && (n.hasFeature(d.GuildFeatures.COMMUNITY) || r.isStaff()) && t
    }

    function l(e) {
        let t = i.default.getGuild(e),
            n = o.default.getCurrentUser();
        return null != e && null != t && null != n && (t.hasFeature(d.GuildFeatures.COMMUNITY) || n.isStaff()) && a.default.isOptInEnabled(e)
    }

    function f(e) {
        let t = (0, s.useStateFromStores)([i.default], () => i.default.getGuild(e)),
            {
                canManageGuild: n,
                canManageRoles: a
            } = (0, s.useStateFromStoresObject)([r.default], () => ({
                canManageGuild: r.default.can(d.Permissions.MANAGE_GUILD, t),
                canManageRoles: r.default.can(d.Permissions.MANAGE_ROLES, t)
            }));
        if (null == t) return !1;
        let o = t.hasFeature(d.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
        return n && a && !o
    }
}