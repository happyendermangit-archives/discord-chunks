function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var l = n("446674"),
        i = n("991254"),
        a = n("785473"),
        s = n("129408"),
        r = n("713135"),
        o = n("49111");

    function u(e) {
        var t;
        let {
            user: n,
            guildId: u
        } = e, d = (0, l.useStateFromStores)([r.default], () => {
            var e;
            return null === (e = r.default.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application
        }, [n]), {
            applicationSubscriptionListingsShown: c
        } = (0, i.default)({
            applicationId: null == d ? void 0 : d.id,
            groupListingId: null == d ? void 0 : d.primarySkuId,
            guildId: u
        }), {
            activeSubscriptionListing: f,
            activeEntitlement: m,
            subscriptionGroupListing: p
        } = (0, i.useActiveSubscriptionListingForApplication)(null == d ? void 0 : d.id, u), {
            enabled: h
        } = a.otpSkusExperiment.useExperiment({
            location: "useBotApplicationSubscription"
        }), E = null !== (t = null == p ? void 0 : p.sku_flags) && void 0 !== t ? t : 0, g = (0, s.isApplicationUserSubscription)(E) || null != u && u !== o.ME && (0, s.isApplicationGuildSubscription)(E) || h, S = null != m;
        return c ? {
            botUpgraded: S,
            botUpgradeable: !S && c && g,
            activeSubscriptionListing: f,
            subscriptionGroupListing: p
        } : {
            botUpgraded: !1,
            botUpgradeable: !1,
            activeSubscriptionListing: null,
            subscriptionGroupListing: null
        }
    }
}