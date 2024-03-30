function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isEligibleForGuildShopStorefront: function() {
            return a
        },
        isEligibleForSubscriptionsInGuildShop: function() {
            return s
        },
        useIsEligibleForGuildShopPreview: function() {
            return l
        },
        useIsEligibleForGuildShopStorefront: function() {
            return i
        },
        useIsEligibleForSubscriptionsInGuildShop: function() {
            return u
        }
    });
    var r = n("563973"),
        o = n("548290");

    function i() {
        return o.GuildShopStorefrontExperiment.useExperiment({
            location: "adf3ea_1"
        }).enabled
    }

    function a() {
        return o.GuildShopStorefrontExperiment.getCurrentConfig({
            location: "adf3ea_2"
        }).enabled
    }

    function u(e, t) {
        var n = o.ShowGuildRoleSubInGuildShopExperiment.useExperiment({
                location: t
            }).enabled,
            i = (0, r.useGuildEligibleForGuildProducts)(e, t);
        return n && i
    }

    function s(e, t) {
        var n = o.ShowGuildRoleSubInGuildShopExperiment.getCurrentConfig({
                location: t
            }).enabled,
            i = (0, r.isGuildEligibleForGuildProducts)(e, t);
        return n && i
    }

    function l(e) {
        return o.GuildShopPreviewExperiment.useExperiment({
            location: e
        }).enabled
    }
}