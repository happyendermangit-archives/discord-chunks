function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("622753"),
        l = n("830721"),
        c = n("868615"),
        f = n("13859");
    t.default = function(e) {
        var t = e.subscriptionTier,
            n = e.interval,
            o = void 0 === n ? c.SubscriptionIntervalTypes.MONTH : n,
            d = e.className,
            _ = e.isGift,
            E = e.variant,
            p = e.priceOptions;
        if (!(0, a.useStateFromStores)([s.default], function() {
                return s.default.isLoadedForPremiumSKUs()
            })) return r.createElement(u.Spinner, {
            type: u.Spinner.Type.PULSING_ELLIPSIS,
            className: f.priceSpinner
        });
        var m = s.default.getForSkuAndInterval((0, l.castPremiumSubscriptionAsSkuId)(t), o),
            y = null != m ? (0, l.getFormattedPriceForPlan)(m, p, !1, void 0 !== _ && _) : null;
        return r.createElement(u.Heading, {
            color: "always-white",
            variant: null != E ? E : "heading-md/medium",
            className: i()(f.pricePerInterval, d)
        }, r.createElement("span", {
            className: f.price
        }, y), " / ", (0, l.getIntervalStringAsNoun)(o))
    }
}