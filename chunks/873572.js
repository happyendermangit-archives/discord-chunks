function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("442837"),
        r = n("270144"),
        s = n("11176"),
        a = n("171246"),
        o = n("621853"),
        l = n("981631");

    function u(e) {
        var t;
        let {
            user: n,
            guildId: u
        } = e, d = (0, i.useStateFromStores)([o.default], () => {
            var e;
            return null === (e = o.default.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application
        }, [n]), {
            applicationSubscriptionListingsShown: _
        } = (0, r.default)({
            applicationId: null == d ? void 0 : d.id,
            groupListingId: null == d ? void 0 : d.primarySkuId,
            guildId: u
        }), {
            activeSubscriptionListing: c,
            activeEntitlement: E,
            subscriptionGroupListing: I
        } = (0, r.useActiveSubscriptionListingForApplication)(null == d ? void 0 : d.id, u), {
            enabled: T
        } = s.otpSkusExperiment.useExperiment({
            location: "useBotApplicationSubscription"
        }), f = null !== (t = null == I ? void 0 : I.sku_flags) && void 0 !== t ? t : 0, S = (0, a.isApplicationUserSubscription)(f) || null != u && u !== l.ME && (0, a.isApplicationGuildSubscription)(f) || T, h = null != E;
        return _ ? {
            botUpgraded: h,
            botUpgradeable: !h && _ && S,
            activeSubscriptionListing: c,
            subscriptionGroupListing: I
        } : {
            botUpgraded: !1,
            botUpgradeable: !1,
            activeSubscriptionListing: null,
            subscriptionGroupListing: null
        }
    }
}