function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var l = n("446674"),
        i = n("991254"),
        a = n("129408"),
        s = n("713135"),
        r = n("49111");

    function o(e) {
        var t;
        let {
            user: n,
            guildId: o
        } = e, u = (0, l.useStateFromStores)([s.default], () => {
            var e;
            return null === (e = s.default.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application
        }, [n]), {
            applicationSubscriptionListingsShown: d
        } = (0, i.default)({
            applicationId: null == u ? void 0 : u.id,
            groupListingId: null == u ? void 0 : u.primarySkuId,
            guildId: o
        }), {
            activeSubscriptionListing: c,
            activeEntitlement: f,
            subscriptionGroupListing: m
        } = (0, i.useActiveSubscriptionListingForApplication)(null == u ? void 0 : u.id, o), p = null !== (t = null == m ? void 0 : m.sku_flags) && void 0 !== t ? t : 0, h = (0, a.isApplicationUserSubscription)(p) || null != o && o !== r.ME && (0, a.isApplicationGuildSubscription)(p), E = null != f;
        return d ? {
            botUpgraded: E,
            botUpgradeable: !E && d && h,
            activeSubscriptionListing: c,
            subscriptionGroupListing: m
        } : {
            botUpgraded: !1,
            botUpgradeable: !1,
            activeSubscriptionListing: null,
            subscriptionGroupListing: null
        }
    }
}