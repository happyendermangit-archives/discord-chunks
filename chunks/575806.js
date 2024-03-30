function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("447515"),
        i = n("751848"),
        a = n("523263"),
        u = n("991145"),
        s = n("868615"),
        l = n("21406");
    t.default = function(e) {
        var t = e.isStacked,
            n = e.ctaButton,
            c = e.isGift,
            f = e.trialOfferTier,
            d = e.discountOffer,
            _ = !c && (f === s.PremiumSubscriptionSKUs.TIER_2 || null != d),
            E = (0, a.default)(),
            p = (0, i.isThemeLight)(E) && t ? void 0 : o.default.colors.WHITE.css;
        return t ? c || f !== s.PremiumSubscriptionSKUs.TIER_2 && null == d ? r.createElement(r.Fragment, null, n) : r.createElement("div", {
            className: l.sparklesAndButton
        }, r.createElement(u.SparkleGroupLeft, {
            color: p,
            wrapperStyle: l.leftSparkle
        }), r.createElement("div", {
            className: l.ctaFullWidth
        }, n), r.createElement(u.SparkleGroupRight, {
            color: p,
            wrapperStyle: l.rightSparkle
        })) : r.createElement(r.Fragment, null, n, _ && r.createElement(u.ButtonSparkleGroup, {
            tier: s.PremiumTypes.TIER_2
        }))
    }
}