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
            return l
        },
        useIsEligibleForGuildShopPreview: function() {
            return u
        }
    });
    var i = n("287883"),
        s = n("599445");

    function r() {
        let {
            enabled: e
        } = s.GuildShopStorefrontExperiment.useExperiment({
            location: "adf3ea_1"
        });
        return e
    }

    function a() {
        let {
            enabled: e
        } = s.GuildShopStorefrontExperiment.getCurrentConfig({
            location: "adf3ea_2"
        });
        return e
    }

    function o(e, t) {
        let {
            enabled: n
        } = s.ShowGuildRoleSubInGuildShopExperiment.useExperiment({
            location: t
        }), r = (0, i.useGuildEligibleForGuildProducts)(e, t);
        return n && r
    }

    function l(e, t) {
        let {
            enabled: n
        } = s.ShowGuildRoleSubInGuildShopExperiment.getCurrentConfig({
            location: t
        }), r = (0, i.isGuildEligibleForGuildProducts)(e, t);
        return n && r
    }

    function u(e) {
        let {
            enabled: t
        } = s.GuildShopPreviewExperiment.useExperiment({
            location: e
        });
        return t
    }
}