function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("442837"),
        o = n("481060"),
        l = n("509545"),
        u = n("74538"),
        d = n("474936"),
        _ = n("13859");
    t.default = function(e) {
        let {
            subscriptionTier: t,
            interval: n = d.SubscriptionIntervalTypes.MONTH,
            className: r,
            isGift: c = !1,
            variant: E,
            priceOptions: I
        } = e;
        if (!(0, a.useStateFromStores)([l.default], () => l.default.isLoadedForPremiumSKUs())) return (0, i.jsx)(o.Spinner, {
            type: o.Spinner.Type.PULSING_ELLIPSIS,
            className: _.priceSpinner
        });
        let T = l.default.getForSkuAndInterval((0, u.castPremiumSubscriptionAsSkuId)(t), n),
            f = null != T ? (0, u.getFormattedPriceForPlan)(T, I, !1, c) : null;
        return (0, i.jsxs)(o.Heading, {
            color: "always-white",
            variant: null != E ? E : "heading-md/medium",
            className: s()(_.pricePerInterval, r),
            children: [(0, i.jsx)("span", {
                className: _.price,
                children: f
            }), " / ", (0, u.getIntervalStringAsNoun)(n)]
        })
    }
}