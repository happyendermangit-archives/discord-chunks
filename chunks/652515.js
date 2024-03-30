function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isEligibleForGuildShopStorefront: function() {
            return a
        },
        isEligibleForSubscriptionsInGuildShop: function() {
            return l
        },
        useIsEligibleForGuildShopPreview: function() {
            return u
        },
        useIsEligibleForGuildShopStorefront: function() {
            return s
        },
        useIsEligibleForSubscriptionsInGuildShop: function() {
            return o
        }
    });
    var i = n("352981"),
        r = n("732845");

    function s() {
        let {
            enabled: e
        } = r.GuildShopStorefrontExperiment.useExperiment({
            location: "adf3ea_1"
        });
        return e
    }

    function a() {
        let {
            enabled: e
        } = r.GuildShopStorefrontExperiment.getCurrentConfig({
            location: "adf3ea_2"
        });
        return e
    }

    function o(e, t) {
        let {
            enabled: n
        } = r.ShowGuildRoleSubInGuildShopExperiment.useExperiment({
            location: t
        }), s = (0, i.useGuildEligibleForGuildProducts)(e, t);
        return n && s
    }

    function l(e, t) {
        let {
            enabled: n
        } = r.ShowGuildRoleSubInGuildShopExperiment.getCurrentConfig({
            location: t
        }), s = (0, i.isGuildEligibleForGuildProducts)(e, t);
        return n && s
    }

    function u(e) {
        let {
            enabled: t
        } = r.GuildShopPreviewExperiment.useExperiment({
            location: e
        });
        return t
    }
}