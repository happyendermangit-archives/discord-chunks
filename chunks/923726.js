function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hasEnabledMonetization: function() {
            return u
        },
        isGuildEligibleForRoleSubscriptions: function() {
            return s
        },
        isGuildEligibleForTierTemplates: function() {
            return d
        },
        isUserEligibleForTierTemplates: function() {
            return E
        },
        useGuildEligibleForRoleSubscriptions: function() {
            return a
        },
        useGuildEligibleForTierTemplates: function() {
            return _
        },
        useRoleSubscriptionMaxTiersExperiment: function() {
            return o
        },
        useShowCreatorPortalLinkForTierTemplates: function() {
            return c
        },
        useUserEligibleForTierTemplates: function() {
            return I
        }
    }), n("223892");
    var i = n("644542"),
        r = n("981631");

    function a(e) {
        let {
            enableRoleSubscriptionsForGuild: t
        } = i.GuildRoleSubscriptionsExperiment.useExperiment({
            guildId: null != e ? e : r.EMPTY_STRING_SNOWFLAKE_ID,
            location: "504714_1"
        }, {
            autoTrackExposure: !0
        }), {
            enableRoleSubscriptionsForUser: n
        } = i.GuildRoleSubscriptionUsersExperiment.useExperiment({
            location: "504714_2"
        }, {
            autoTrackExposure: !1
        });
        return null != e && t && n
    }

    function s(e) {
        let {
            enableRoleSubscriptionsForGuild: t
        } = i.GuildRoleSubscriptionsExperiment.getCurrentConfig({
            guildId: null != e ? e : r.EMPTY_STRING_SNOWFLAKE_ID,
            location: "504714_3"
        }), {
            enableRoleSubscriptionsForUser: n
        } = i.GuildRoleSubscriptionUsersExperiment.getCurrentConfig({
            location: "504714_4"
        }, {
            autoTrackExposure: !1
        });
        return null != e && t && n
    }

    function o(e) {
        return i.GuildRoleSubscriptionMaxTiersExperiment.useExperiment({
            guildId: null != e ? e : r.EMPTY_STRING_SNOWFLAKE_ID,
            location: "504714_7"
        })
    }
    let l = [r.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED, r.GuildFeatures.CREATOR_MONETIZABLE, r.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL],
        u = e => null != e && l.some(t => e.hasFeature(t));

    function d(e) {
        let {
            enabled: t
        } = i.GuildRoleSubscriptionsTierTemplatesExperiment.getCurrentConfig({
            guildId: null != e ? e : r.EMPTY_STRING_SNOWFLAKE_ID,
            location: "504714_9"
        }, {
            autoTrackExposure: !1
        });
        return t
    }

    function _(e) {
        let {
            enabled: t
        } = i.GuildRoleSubscriptionsTierTemplatesExperiment.useExperiment({
            guildId: null != e ? e : r.EMPTY_STRING_SNOWFLAKE_ID,
            location: "504714_10"
        }, {
            autoTrackExposure: !1
        });
        return t
    }

    function c(e) {
        let {
            showCreatorPortalLink: t
        } = i.GuildRoleSubscriptionsTierTemplatesExperiment.useExperiment({
            guildId: null != e ? e : r.EMPTY_STRING_SNOWFLAKE_ID,
            location: "504714_11"
        }, {
            autoTrackExposure: !1
        });
        return t
    }

    function E() {
        let {
            enabled: e
        } = i.GuildRoleSubscriptionsTierTemplatesUserExperiment.getCurrentConfig({
            location: "504714_12"
        }, {
            autoTrackExposure: !1
        });
        return e
    }

    function I() {
        let {
            enabled: e
        } = i.GuildRoleSubscriptionsTierTemplatesUserExperiment.useExperiment({
            location: "504714_13"
        }, {
            autoTrackExposure: !1
        });
        return e
    }
}