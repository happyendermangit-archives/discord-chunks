function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("227422"),
        r = n("476263"),
        o = n("547620"),
        u = n("646718"),
        d = n("877670");
    let c = {
            XXSMALL: d.xxsmall,
            XSMALL: d.xsmall,
            SMALL: d.small,
            MEDIUM: d.medium,
            LARGE: d.large
        },
        f = e => {
            let t, {
                game: l,
                guild: f,
                skuId: p,
                pid: m,
                className: h,
                guildClassName: x,
                size: E = c.MEDIUM,
                ...y
            } = e;
            if (null != p && (t = function(e) {
                    if (null == e) return null;
                    switch (e) {
                        case u.PremiumSubscriptionSKUs.GUILD:
                            return n("229806");
                        case u.PremiumSubscriptionSKUs.TIER_0:
                            return n("654125");
                        case u.PremiumSubscriptionSKUs.TIER_1:
                            return n("108647");
                        case u.PremiumSubscriptionSKUs.TIER_2:
                        case u.PremiumSubscriptionSKUs.LEGACY:
                            return n("943005");
                        default:
                            return null
                    }
                }(p)), null != l && null == t && (t = l.getIconURL(function(e) {
                    switch (e) {
                        case c.XXSMALL:
                            return 16;
                        case c.XSMALL:
                            return 24;
                        case c.SMALL:
                            return 30;
                        case c.MEDIUM:
                            return 40;
                        case c.LARGE:
                            return 60;
                        default:
                            return 80
                    }
                }(E))), null == (t = (0, s.default)(m, t)) && null != f) {
                let e = function(e) {
                    switch (e) {
                        case c.XSMALL:
                            return r.default.Sizes.SMALLER;
                        case c.SMALL:
                            return r.default.Sizes.SMALL;
                        case c.LARGE:
                            return r.default.Sizes.LARGE;
                        default:
                        case c.MEDIUM:
                            return r.default.Sizes.MEDIUM
                    }
                }(E);
                return (0, i.jsx)(r.default, {
                    className: a(d.gameIcon, x, h),
                    guild: f,
                    size: e
                })
            }
            return null == t ? (0, i.jsx)(o.default, {
                className: a(d.gameIcon, E, h)
            }) : (0, i.jsx)("div", {
                ...y,
                className: a(d.gameIcon, E, h),
                style: {
                    backgroundImage: "url('".concat(t, "')")
                }
            })
        };
    f.Sizes = c;
    var p = f
}