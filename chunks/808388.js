function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGuildEligibleForRoleSubscriptions: function() {
            return s
        },
        isGuildEligibleForRoleSubscriptions: function() {
            return a
        },
        useRoleSubscriptionMaxTiersExperiment: function() {
            return o
        },
        hasEnabledMonetization: function() {
            return u
        },
        isGuildEligibleForTierTemplates: function() {
            return c
        },
        useGuildEligibleForTierTemplates: function() {
            return d
        },
        useShowCreatorPortalLinkForTierTemplates: function() {
            return f
        },
        isUserEligibleForTierTemplates: function() {
            return E
        },
        useUserEligibleForTierTemplates: function() {
            return p
        }
    }), n("7331");
    var i = n("858560"),
        r = n("49111");

    function s(e) {
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

    function a(e) {
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

    function c(e) {
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

    function d(e) {
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

    function f(e) {
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

    function p() {
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