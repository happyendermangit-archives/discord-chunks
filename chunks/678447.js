function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("690016"),
        a = n("948739"),
        u = n("877987"),
        s = n("941504"),
        l = n("240812"),
        c = n("989171");

    function f(e) {
        var t, n = e.user,
            f = e.guildId,
            d = (0, a.default)({
                user: n,
                guildId: f
            }),
            _ = d.botUpgraded,
            E = d.activeSubscriptionListing,
            p = null == E ? void 0 : null === (t = E.sku_benefits) || void 0 === t ? void 0 : t.benefits;
        return null != f && _ && null != p && 0 !== p.length ? r.createElement(u.default, null, r.createElement(o.Heading, {
            variant: "eyebrow",
            className: c.title
        }, s.default.Messages.BOT_PROFILE_BENEFITS_HEADING), r.createElement("div", {
            className: l.benefitsContainer
        }, p.map(function(e, t) {
            return r.createElement(i.default, {
                key: "".concat(e.name).concat(t),
                showsDescription: !1,
                emojiContainerClassName: l.emojiContainer,
                nameTextVariant: "text-sm/normal",
                nameTextColor: "text-normal",
                benefit: e
            })
        }))) : null
    }
}