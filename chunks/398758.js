function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isOptInEnabledForGuild: function() {
            return d
        },
        useOptInEnabledForGuild: function() {
            return u
        },
        useShouldShowOnboardingAdminUpsellForGuild: function() {
            return _
        }
    });
    var i = n("442837"),
        r = n("430824"),
        s = n("496675"),
        a = n("9156"),
        o = n("594174"),
        l = n("981631");

    function u(e) {
        let t = (0, i.useStateFromStores)([a.default], () => a.default.isOptInEnabled(e)),
            n = (0, i.useStateFromStores)([r.default], () => r.default.getGuild(e)),
            s = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser());
        return null != e && null != n && null != s && (n.hasFeature(l.GuildFeatures.COMMUNITY) || s.isStaff()) && t
    }

    function d(e) {
        let t = r.default.getGuild(e),
            n = o.default.getCurrentUser();
        return null != e && null != t && null != n && (t.hasFeature(l.GuildFeatures.COMMUNITY) || n.isStaff()) && a.default.isOptInEnabled(e)
    }

    function _(e) {
        let t = (0, i.useStateFromStores)([r.default], () => r.default.getGuild(e)),
            {
                canManageGuild: n,
                canManageRoles: a
            } = (0, i.useStateFromStoresObject)([s.default], () => ({
                canManageGuild: s.default.can(l.Permissions.MANAGE_GUILD, t),
                canManageRoles: s.default.can(l.Permissions.MANAGE_ROLES, t)
            }));
        if (null == t) return !1;
        let o = t.hasFeature(l.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
        return n && a && !o
    }
}