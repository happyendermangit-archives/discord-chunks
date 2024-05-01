function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildRoleSubscriptionSettingsVisibility: function() {
            return r
        },
        canManageGuildRoleSubscriptions: function() {
            return f
        },
        canSeeGuildRoleSubscriptionSettings: function() {
            return E
        },
        useCanManageGuildRoleSubscriptions: function() {
            return T
        },
        useGuildRoleSubscriptionSettingsVisibility: function() {
            return I
        }
    });
    var i, r, s = n("442837"),
        a = n("223892"),
        o = n("674180"),
        l = n("496675"),
        u = n("594174"),
        d = n("923726"),
        _ = n("981631");
    (i = r || (r = {}))[i.NONE = 0] = "NONE", i[i.WAITLIST_ONLY = 1] = "WAITLIST_ONLY", i[i.NEEDS_COMMUNITY = 2] = "NEEDS_COMMUNITY", i[i.VISIBLE = 3] = "VISIBLE";

    function c(e) {
        if (e.guild.hasFeature(_.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) return 0;
        if (function(e) {
                let {
                    guild: t,
                    isOwner: n,
                    canManageGuildRoleSubscriptions: i,
                    isGuildEligibleForRoleSubscriptions: r,
                    isExpeditedMonetizationOnboardingGuild: s,
                    isUserInCreatorMonetizationEligibleCountry: a,
                    shouldRestrictUpdatingRoleSubscriptionSettings: o
                } = e;
                return !!t.hasFeature(_.GuildFeatures.COMMUNITY) && !!i && (!o || !!n) && (!!(t.hasFeature(_.GuildFeatures.CREATOR_MONETIZABLE) || t.hasFeature(_.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!r || !!s) && n && a)
            }(e)) return 3;
        let {
            guild: t,
            isOwner: n,
            isUserInCreatorMonetizationEligibleCountry: i,
            isMonetizationWaitlistEnabledForGuild: r,
            isGuildEligibleForRoleSubscriptions: s,
            isExpeditedMonetizationOnboardingGuild: a
        } = e;
        return n && !i && r ? 1 : n && r && (s || a) && !t.hasFeature(_.GuildFeatures.COMMUNITY) ? 2 : 0
    }

    function E(e) {
        return 0 !== c(e)
    }

    function I(e) {
        let t = (0, d.useGuildEligibleForRoleSubscriptions)(null == e ? void 0 : e.id),
            n = (0, a.useIsExpeditedOnboardingGuild)(e),
            i = (0, a.useIsMonetizationWaitlistEnabledForGuild)(null == e ? void 0 : e.id),
            r = T(e),
            l = (0, s.useStateFromStores)([u.default], () => {
                let t = u.default.getCurrentUser();
                return null != t && (null == e ? void 0 : e.isOwner(t)) === !0
            }),
            _ = (0, a.useIsUserInCreatorMonetizationEligibleCountry)(),
            {
                shouldRestrictUpdatingCreatorMonetizationSettings: E
            } = (0, o.useShouldRestrictUpdatingCreatorMonetizationSettings)(null == e ? void 0 : e.id);
        return null == e ? 0 : c({
            guild: e,
            isOwner: l,
            canManageGuildRoleSubscriptions: r,
            isGuildEligibleForRoleSubscriptions: t,
            isMonetizationWaitlistEnabledForGuild: i,
            isExpeditedMonetizationOnboardingGuild: n,
            isUserInCreatorMonetizationEligibleCountry: _,
            shouldRestrictUpdatingRoleSubscriptionSettings: E
        })
    }

    function T(e) {
        return (0, s.useStateFromStores)([l.default], () => f(e), [e])
    }

    function f(e) {
        return null != e && l.default.can(_.Permissions.ADMINISTRATOR, e)
    }
}