function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        l = n("446674"),
        s = n("77078"),
        o = n("10514"),
        u = n("719923"),
        c = n("646718"),
        d = n("891533"),
        f = function(e) {
            let {
                subscriptionTier: t,
                interval: n = c.SubscriptionIntervalTypes.MONTH,
                className: i,
                isGift: f = !1,
                variant: m,
                priceOptions: _
            } = e, E = (0, l.useStateFromStores)([o.default], () => o.default.isLoadedForPremiumSKUs());
            if (!E) return (0, r.jsx)(s.Spinner, {
                type: s.Spinner.Type.PULSING_ELLIPSIS,
                className: d.priceSpinner
            });
            let I = o.default.getForSkuAndInterval((0, u.castPremiumSubscriptionAsSkuId)(t), n),
                T = null != I ? (0, u.getFormattedPriceForPlan)(I, _, !1, f) : null;
            return (0, r.jsxs)(s.Heading, {
                color: "always-white",
                variant: null != m ? m : "heading-md/medium",
                className: a(d.pricePerInterval, i),
                children: [(0, r.jsx)("span", {
                    className: d.price,
                    children: T
                }), " / ", (0, u.getIntervalStringAsNoun)(n)]
            })
        }
}