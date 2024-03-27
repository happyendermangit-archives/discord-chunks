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
        d = n("782340"),
        c = n("877670");
    let f = {
            XXSMALL: c.xxsmall,
            XSMALL: c.xsmall,
            SMALL: c.small,
            MEDIUM: c.medium,
            LARGE: c.large
        },
        m = e => {
            let t, {
                game: l,
                guild: m,
                skuId: p,
                pid: h,
                className: x,
                guildClassName: E,
                size: y = f.MEDIUM
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
                        case f.XXSMALL:
                            return 16;
                        case f.XSMALL:
                            return 24;
                        case f.SMALL:
                            return 30;
                        case f.MEDIUM:
                            return 40;
                        case f.LARGE:
                            return 60;
                        default:
                            return 80
                    }
                }(y))), null == (t = (0, s.default)(h, t)) && null != m) {
                let e = function(e) {
                    switch (e) {
                        case f.XSMALL:
                            return r.default.Sizes.SMALLER;
                        case f.SMALL:
                            return r.default.Sizes.SMALL;
                        case f.LARGE:
                            return r.default.Sizes.LARGE;
                        default:
                        case f.MEDIUM:
                            return r.default.Sizes.MEDIUM
                    }
                }(y);
                return (0, i.jsx)(r.default, {
                    className: a(c.gameIcon, E, x),
                    guild: m,
                    size: e
                })
            }
            if (null == t) return (0, i.jsx)(o.default, {
                className: a(c.gameIcon, y, x)
            });
            let g = null == l ? void 0 : l.name,
                S = null != g && "" !== g ? d.default.Messages.APPLICATION_ICON_A11Y_LABEL.format({
                    applicationName: g
                }) : d.default.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL;
            return (0, i.jsx)("img", {
                alt: S,
                src: t,
                className: a(c.gameIcon, y, x)
            })
        };
    m.Sizes = f;
    var p = m
}