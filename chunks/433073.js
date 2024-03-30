function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("454097"),
        u = n("372844"),
        s = n("178782"),
        l = n("868615"),
        c = n("941504"),
        f = n("810516"),
        d = {
            XXSMALL: f.xxsmall,
            XSMALL: f.xsmall,
            SMALL: f.small,
            MEDIUM: f.medium,
            LARGE: f.large
        },
        _ = function(e) {
            var t, o = e.game,
                _ = e.guild,
                E = e.skuId,
                p = e.pid,
                m = e.className,
                y = e.guildClassName,
                I = e.size,
                h = void 0 === I ? d.MEDIUM : I;
            if (null != E && (t = function(e) {
                    if (null == e) return null;
                    switch (e) {
                        case l.PremiumSubscriptionSKUs.GUILD:
                            return n("632342");
                        case l.PremiumSubscriptionSKUs.TIER_0:
                            return n("467596");
                        case l.PremiumSubscriptionSKUs.TIER_1:
                            return n("670957");
                        case l.PremiumSubscriptionSKUs.TIER_2:
                        case l.PremiumSubscriptionSKUs.LEGACY:
                            return n("480768");
                        default:
                            return null
                    }
                }(E)), null != o && null == t && (t = o.getIconURL(function(e) {
                    switch (e) {
                        case d.XXSMALL:
                            return 16;
                        case d.XSMALL:
                            return 24;
                        case d.SMALL:
                            return 30;
                        case d.MEDIUM:
                            return 40;
                        case d.LARGE:
                            return 60;
                        default:
                            return 80
                    }
                }(h))), null == (t = (0, a.default)(p, t)) && null != _) {
                var O = function(e) {
                    switch (e) {
                        case d.XSMALL:
                            return u.default.Sizes.SMALLER;
                        case d.SMALL:
                            return u.default.Sizes.SMALL;
                        case d.LARGE:
                            return u.default.Sizes.LARGE;
                        default:
                        case d.MEDIUM:
                            return u.default.Sizes.MEDIUM
                    }
                }(h);
                return r.createElement(u.default, {
                    className: i()(f.gameIcon, y, m),
                    guild: _,
                    size: O
                })
            }
            if (null == t) return r.createElement(s.default, {
                className: i()(f.gameIcon, h, m)
            });
            var T = null == o ? void 0 : o.name,
                S = null != T && "" !== T ? c.default.Messages.APPLICATION_ICON_A11Y_LABEL.format({
                    applicationName: T
                }) : c.default.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL;
            return r.createElement("img", {
                alt: S,
                src: t,
                className: i()(f.gameIcon, h, m)
            })
        };
    _.Sizes = d, t.default = _
}