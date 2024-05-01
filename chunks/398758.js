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
        a = n("496675"),
        s = n("9156"),
        o = n("594174"),
        l = n("981631");

    function u(e) {
        return (0, i.useStateFromStores)([s.default, r.default, o.default], () => {
            var t, n, i, a;
            let u = s.default.isOptInEnabled(e),
                d = null !== (i = null === (t = r.default.getGuild(e)) || void 0 === t ? void 0 : t.hasFeature(l.GuildFeatures.COMMUNITY)) && void 0 !== i && i,
                _ = null !== (a = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.isStaff()) && void 0 !== a && a;
            return u && (d || _)
        })
    }

    function d(e) {
        let t = r.default.getGuild(e),
            n = o.default.getCurrentUser();
        return null != e && null != t && null != n && (t.hasFeature(l.GuildFeatures.COMMUNITY) || n.isStaff()) && s.default.isOptInEnabled(e)
    }

    function _(e) {
        return (0, i.useStateFromStores)([r.default, a.default], () => {
            var t;
            let n = r.default.getGuild(e),
                i = a.default.can(l.Permissions.MANAGE_GUILD, n),
                s = a.default.can(l.Permissions.MANAGE_ROLES, n),
                o = null !== (t = null == n ? void 0 : n.hasFeature(l.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)) && void 0 !== t && t;
            return null != n && i && s && !o
        })
    }
}