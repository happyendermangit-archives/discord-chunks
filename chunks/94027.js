function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("692547"),
        s = n("780384"),
        a = n("410030"),
        o = n("63802"),
        l = n("474936"),
        u = n("646541");
    t.default = e => {
        let {
            isStacked: t,
            ctaButton: n,
            isGift: d,
            trialOfferTier: _,
            discountOffer: c
        } = e, E = !d && (_ === l.PremiumSubscriptionSKUs.TIER_2 || null != c), I = (0, a.default)(), T = (0, s.isThemeLight)(I) && t ? void 0 : r.default.colors.WHITE.css;
        return t ? d || _ !== l.PremiumSubscriptionSKUs.TIER_2 && null == c ? (0, i.jsx)(i.Fragment, {
            children: n
        }) : (0, i.jsxs)("div", {
            className: u.sparklesAndButton,
            children: [(0, i.jsx)(o.SparkleGroupLeft, {
                color: T,
                wrapperStyle: u.leftSparkle
            }), (0, i.jsx)("div", {
                className: u.ctaFullWidth,
                children: n
            }), (0, i.jsx)(o.SparkleGroupRight, {
                color: T,
                wrapperStyle: u.rightSparkle
            })]
        }) : (0, i.jsxs)(i.Fragment, {
            children: [n, E && (0, i.jsx)(o.ButtonSparkleGroup, {
                tier: l.PremiumTypes.TIER_2
            })]
        })
    }
}