function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("829968"),
        o = n("346656"),
        l = n("438071"),
        u = n("474936"),
        d = n("689938"),
        _ = n("810516");
    let c = {
            XXSMALL: _.xxsmall,
            XSMALL: _.xsmall,
            SMALL: _.small,
            MEDIUM: _.medium,
            LARGE: _.large
        },
        E = e => {
            let t, {
                game: r,
                guild: E,
                skuId: I,
                pid: T,
                className: f,
                guildClassName: S,
                size: h = c.MEDIUM
            } = e;
            if (null != I && (t = function(e) {
                    if (null == e) return null;
                    switch (e) {
                        case u.PremiumSubscriptionSKUs.GUILD:
                            return n("632342");
                        case u.PremiumSubscriptionSKUs.TIER_0:
                            return n("467596");
                        case u.PremiumSubscriptionSKUs.TIER_1:
                            return n("670957");
                        case u.PremiumSubscriptionSKUs.TIER_2:
                        case u.PremiumSubscriptionSKUs.LEGACY:
                            return n("480768");
                        default:
                            return null
                    }
                }(I)), null != r && null == t && (t = r.getIconURL(function(e) {
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
                }(h))), null == (t = (0, a.default)(T, t)) && null != E) {
                let e = function(e) {
                    switch (e) {
                        case c.XSMALL:
                            return o.default.Sizes.SMALLER;
                        case c.SMALL:
                            return o.default.Sizes.SMALL;
                        case c.LARGE:
                            return o.default.Sizes.LARGE;
                        default:
                        case c.MEDIUM:
                            return o.default.Sizes.MEDIUM
                    }
                }(h);
                return (0, i.jsx)(o.default, {
                    className: s()(_.gameIcon, S, f),
                    guild: E,
                    size: e
                })
            }
            if (null == t) return (0, i.jsx)(l.default, {
                className: s()(_.gameIcon, h, f)
            });
            let A = null == r ? void 0 : r.name,
                m = null != A && "" !== A ? d.default.Messages.APPLICATION_ICON_A11Y_LABEL.format({
                    applicationName: A
                }) : d.default.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL;
            return (0, i.jsx)("img", {
                alt: m,
                src: t,
                className: s()(_.gameIcon, h, f)
            })
        };
    E.Sizes = c, t.default = E
}