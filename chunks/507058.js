function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isCreatorMonetizationNagActivateEnabled: function() {
            return f
        },
        isExpeditedMonetizationOnboardingGuild: function() {
            return s
        },
        isMonetizationWaitlistEnabledForGuild: function() {
            return c
        },
        isUserInCreatorMonetizationEligibleCountry: function() {
            return a
        },
        useIsExpeditedOnboardingGuild: function() {
            return u
        },
        useIsMonetizationWaitlistEnabledForGuild: function() {
            return l
        },
        useIsUserInCreatorMonetizationEligibleCountry: function() {
            return i
        }
    });
    var r = n("155693"),
        o = n("281767");

    function i() {
        return r.CreatorMonetizationCountryAllowlistExperiment.useExperiment({
            location: "e3bb71_1"
        }, {
            autoTrackExposure: !1
        }).isUserEligibleForCreatorMonetization
    }

    function a() {
        return r.CreatorMonetizationCountryAllowlistExperiment.getCurrentConfig({
            location: "e3bb71_2"
        }, {
            autoTrackExposure: !1
        }).isUserEligibleForCreatorMonetization
    }

    function u(e) {
        var t, n, i, a, u, s = (t = null == e ? void 0 : e.id, n = r.CreatorMonetizationRavenOnboardingGuildExperiment.useExperiment({
            guildId: null != t ? t : o.EMPTY_STRING_SNOWFLAKE_ID,
            location: "e3bb71_3"
        }, {
            autoTrackExposure: !0
        }).enableFastMonetizationOnboardingForGuild, i = r.CreatorMonetizationRavenOnboardingUserExperiment.useExperiment({
            location: "e3bb71_4"
        }, {
            autoTrackExposure: !1
        }).enableFastMonetizationOnboardingForUser, null != t && n && i);
        var l = (a = e, u = r.CreatorMonetizationRavenOnboardingUserExperiment.useExperiment({
            location: "e3bb71_7"
        }, {
            autoTrackExposure: !1
        }).enableFastMonetizationOnboardingForUser, null != a && a.hasFeature(o.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE) && u);
        return s || l
    }

    function s(e) {
        var t, n, i, a, u;
        return t = null == e ? void 0 : e.id, n = r.CreatorMonetizationRavenOnboardingGuildExperiment.getCurrentConfig({
            guildId: null != t ? t : o.EMPTY_STRING_SNOWFLAKE_ID,
            location: "e3bb71_5"
        }).enableFastMonetizationOnboardingForGuild, i = r.CreatorMonetizationRavenOnboardingUserExperiment.getCurrentConfig({
            location: "e3bb71_6"
        }).enableFastMonetizationOnboardingForUser, null != t && n && i || (a = e, u = r.CreatorMonetizationRavenOnboardingUserExperiment.getCurrentConfig({
            location: "e3bb71_8"
        }).enableFastMonetizationOnboardingForUser, null != a && a.hasFeature(o.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE) && u)
    }

    function l(e) {
        return r.CreatorMonetizationOnboardingWaitlistExperiment.useExperiment({
            guildId: null != e ? e : o.EMPTY_STRING_SNOWFLAKE_ID,
            location: "e3bb71_9"
        }, {
            autoTrackExposure: !1
        }).enableWaitlist
    }

    function c(e) {
        return r.CreatorMonetizationOnboardingWaitlistExperiment.getCurrentConfig({
            guildId: null != e ? e : o.EMPTY_STRING_SNOWFLAKE_ID,
            location: "e3bb71_10"
        }).enableWaitlist
    }

    function f() {
        return r.CreatorMonetizationNagActivateExperiment.getCurrentConfig({
            location: "e3bb71_11"
        }, {
            autoTrackExposure: !0
        }).enableCreatorMonetizationNagActivateForUser
    }
}