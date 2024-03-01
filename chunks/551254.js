function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsEligibleForGuildShopStorefront: function() {
            return r
        },
        isEligibleForGuildShopStorefront: function() {
            return a
        },
        useIsEligibleForSubscriptionsInGuildShop: function() {
            return o
        },
        isEligibleForSubscriptionsInGuildShop: function() {
            return d
        },
        useIsEligibleForGuildShopPreview: function() {
            return u
        }
    });
    var s = n("287883"),
        i = n("599445");

    function r() {
        let {
            enabled: e
        } = i.GuildShopStorefrontExperiment.useExperiment({
            location: "adf3ea_1"
        });
        return e
    }

    function a() {
        let {
            enabled: e
        } = i.GuildShopStorefrontExperiment.getCurrentConfig({
            location: "adf3ea_2"
        });
        return e
    }

    function o(e, t) {
        let {
            enabled: n
        } = i.ShowGuildRoleSubInGuildShopExperiment.useExperiment({
            location: t
        }), r = (0, s.useGuildEligibleForGuildProducts)(e, t);
        return n && r
    }

    function d(e, t) {
        let {
            enabled: n
        } = i.ShowGuildRoleSubInGuildShopExperiment.getCurrentConfig({
            location: t
        }), r = (0, s.isGuildEligibleForGuildProducts)(e, t);
        return n && r
    }

    function u(e) {
        let {
            enabled: t
        } = i.GuildShopPreviewExperiment.useExperiment({
            location: e
        });
        return t
    }
}