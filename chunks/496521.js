function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var r = n("37983");
    n("884691");
    var i = n("669491"),
        l = n("819855"),
        a = n("841098"),
        s = n("484321"),
        o = n("646718"),
        u = n("359235"),
        c = e => {
            let {
                isStacked: t,
                ctaButton: n,
                isGift: c,
                trialOfferTier: d,
                discountOffer: f
            } = e, m = !c && (d === o.PremiumSubscriptionSKUs.TIER_2 || null != f), _ = (0, a.default)(), E = (0, l.isThemeLight)(_) && t, I = E ? void 0 : i.default.colors.WHITE.css;
            return t ? c || d !== o.PremiumSubscriptionSKUs.TIER_2 && null == f ? (0, r.jsx)(r.Fragment, {
                children: n
            }) : (0, r.jsxs)("div", {
                className: u.sparklesAndButton,
                children: [(0, r.jsx)(s.SparkleGroupLeft, {
                    color: I,
                    wrapperStyle: u.leftSparkle
                }), (0, r.jsx)("div", {
                    className: u.ctaFullWidth,
                    children: n
                }), (0, r.jsx)(s.SparkleGroupRight, {
                    color: I,
                    wrapperStyle: u.rightSparkle
                })]
            }) : (0, r.jsxs)(r.Fragment, {
                children: [n, m && (0, r.jsx)(s.ButtonSparkleGroup, {
                    tier: o.PremiumTypes.TIER_2
                })]
            })
        }
}