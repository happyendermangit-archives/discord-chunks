function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useOptInEnabledForGuild: function() {
            return u
        },
        isOptInEnabledForGuild: function() {
            return d
        },
        useShouldShowOnboardingAdminUpsellForGuild: function() {
            return c
        }
    });
    var i = n("446674"),
        s = n("305961"),
        r = n("957255"),
        a = n("282109"),
        o = n("697218"),
        l = n("49111");

    function u(e) {
        let t = (0, i.useStateFromStores)([a.default], () => a.default.isOptInEnabled(e)),
            n = (0, i.useStateFromStores)([s.default], () => s.default.getGuild(e)),
            r = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser());
        return null != e && null != n && null != r && (n.hasFeature(l.GuildFeatures.COMMUNITY) || r.isStaff()) && t
    }

    function d(e) {
        let t = s.default.getGuild(e),
            n = o.default.getCurrentUser();
        return null != e && null != t && null != n && (t.hasFeature(l.GuildFeatures.COMMUNITY) || n.isStaff()) && a.default.isOptInEnabled(e)
    }

    function c(e) {
        let t = (0, i.useStateFromStores)([s.default], () => s.default.getGuild(e)),
            {
                canManageGuild: n,
                canManageRoles: a
            } = (0, i.useStateFromStoresObject)([r.default], () => ({
                canManageGuild: r.default.can(l.Permissions.MANAGE_GUILD, t),
                canManageRoles: r.default.can(l.Permissions.MANAGE_ROLES, t)
            }));
        if (null == t) return !1;
        let o = t.hasFeature(l.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
        return n && a && !o
    }
}