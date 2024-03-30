function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hasEnabledMonetization: function() {
            return l
        },
        isGuildEligibleForRoleSubscriptions: function() {
            return a
        },
        isGuildEligibleForTierTemplates: function() {
            return c
        },
        isUserEligibleForTierTemplates: function() {
            return _
        },
        useGuildEligibleForRoleSubscriptions: function() {
            return i
        },
        useGuildEligibleForTierTemplates: function() {
            return f
        },
        useRoleSubscriptionMaxTiersExperiment: function() {
            return u
        },
        useShowCreatorPortalLinkForTierTemplates: function() {
            return d
        },
        useUserEligibleForTierTemplates: function() {
            return E
        }
    }), n("507058");
    var r = n("746785"),
        o = n("281767");

    function i(e) {
        var t = r.GuildRoleSubscriptionsExperiment.useExperiment({
                guildId: null != e ? e : o.EMPTY_STRING_SNOWFLAKE_ID,
                location: "504714_1"
            }, {
                autoTrackExposure: !0
            }).enableRoleSubscriptionsForGuild,
            n = r.GuildRoleSubscriptionUsersExperiment.useExperiment({
                location: "504714_2"
            }, {
                autoTrackExposure: !1
            }).enableRoleSubscriptionsForUser;
        return null != e && t && n
    }

    function a(e) {
        var t = r.GuildRoleSubscriptionsExperiment.getCurrentConfig({
                guildId: null != e ? e : o.EMPTY_STRING_SNOWFLAKE_ID,
                location: "504714_3"
            }).enableRoleSubscriptionsForGuild,
            n = r.GuildRoleSubscriptionUsersExperiment.getCurrentConfig({
                location: "504714_4"
            }, {
                autoTrackExposure: !1
            }).enableRoleSubscriptionsForUser;
        return null != e && t && n
    }

    function u(e) {
        return r.GuildRoleSubscriptionMaxTiersExperiment.useExperiment({
            guildId: null != e ? e : o.EMPTY_STRING_SNOWFLAKE_ID,
            location: "504714_7"
        })
    }
    var s = [o.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED, o.GuildFeatures.CREATOR_MONETIZABLE, o.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL],
        l = function(e) {
            return null != e && s.some(function(t) {
                return e.hasFeature(t)
            })
        };

    function c(e) {
        return r.GuildRoleSubscriptionsTierTemplatesExperiment.getCurrentConfig({
            guildId: null != e ? e : o.EMPTY_STRING_SNOWFLAKE_ID,
            location: "504714_9"
        }, {
            autoTrackExposure: !1
        }).enabled
    }

    function f(e) {
        return r.GuildRoleSubscriptionsTierTemplatesExperiment.useExperiment({
            guildId: null != e ? e : o.EMPTY_STRING_SNOWFLAKE_ID,
            location: "504714_10"
        }, {
            autoTrackExposure: !1
        }).enabled
    }

    function d(e) {
        return r.GuildRoleSubscriptionsTierTemplatesExperiment.useExperiment({
            guildId: null != e ? e : o.EMPTY_STRING_SNOWFLAKE_ID,
            location: "504714_11"
        }, {
            autoTrackExposure: !1
        }).showCreatorPortalLink
    }

    function _() {
        return r.GuildRoleSubscriptionsTierTemplatesUserExperiment.getCurrentConfig({
            location: "504714_12"
        }, {
            autoTrackExposure: !1
        }).enabled
    }

    function E() {
        return r.GuildRoleSubscriptionsTierTemplatesUserExperiment.useExperiment({
            location: "504714_13"
        }, {
            autoTrackExposure: !1
        }).enabled
    }
}