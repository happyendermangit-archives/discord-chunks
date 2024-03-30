function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("898511"),
        o = n("991142"),
        i = n("305394"),
        a = n("216239"),
        u = n("903716"),
        s = n("281767");

    function l(e) {
        var t, n = e.user,
            l = e.guildId,
            c = (0, r.useStateFromStores)([u.default], function() {
                var e;
                return null === (e = u.default.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application
            }, [n]),
            f = (0, o.default)({
                applicationId: null == c ? void 0 : c.id,
                groupListingId: null == c ? void 0 : c.primarySkuId,
                guildId: l
            }).applicationSubscriptionListingsShown,
            d = (0, o.useActiveSubscriptionListingForApplication)(null == c ? void 0 : c.id, l),
            _ = d.activeSubscriptionListing,
            E = d.activeEntitlement,
            p = d.subscriptionGroupListing,
            m = i.otpSkusExperiment.useExperiment({
                location: "useBotApplicationSubscription"
            }).enabled,
            y = null !== (t = null == p ? void 0 : p.sku_flags) && void 0 !== t ? t : 0,
            I = (0, a.isApplicationUserSubscription)(y) || null != l && l !== s.ME && (0, a.isApplicationGuildSubscription)(y) || m,
            h = null != E;
        return f ? {
            botUpgraded: h,
            botUpgradeable: !h && f && I,
            activeSubscriptionListing: _,
            subscriptionGroupListing: p
        } : {
            botUpgraded: !1,
            botUpgradeable: !1,
            activeSubscriptionListing: null,
            subscriptionGroupListing: null
        }
    }
}