function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isOptInEnabledForGuild: function() {
            return c
        },
        useOptInEnabledForGuild: function() {
            return l
        },
        useShouldShowOnboardingAdminUpsellForGuild: function() {
            return f
        }
    });
    var r = n("898511"),
        o = n("306912"),
        i = n("29884"),
        a = n("848957"),
        u = n("208454"),
        s = n("281767");

    function l(e) {
        var t = (0, r.useStateFromStores)([a.default], function() {
                return a.default.isOptInEnabled(e)
            }),
            n = (0, r.useStateFromStores)([o.default], function() {
                return o.default.getGuild(e)
            }),
            i = (0, r.useStateFromStores)([u.default], function() {
                return u.default.getCurrentUser()
            });
        return null != e && null != n && null != i && (n.hasFeature(s.GuildFeatures.COMMUNITY) || i.isStaff()) && t
    }

    function c(e) {
        var t = o.default.getGuild(e),
            n = u.default.getCurrentUser();
        return null != e && null != t && null != n && (t.hasFeature(s.GuildFeatures.COMMUNITY) || n.isStaff()) && a.default.isOptInEnabled(e)
    }

    function f(e) {
        var t = (0, r.useStateFromStores)([o.default], function() {
                return o.default.getGuild(e)
            }),
            n = (0, r.useStateFromStoresObject)([i.default], function() {
                return {
                    canManageGuild: i.default.can(s.Permissions.MANAGE_GUILD, t),
                    canManageRoles: i.default.can(s.Permissions.MANAGE_ROLES, t)
                }
            }),
            a = n.canManageGuild,
            u = n.canManageRoles;
        if (null == t) return !1;
        var l = t.hasFeature(s.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
        return a && u && !l
    }
}