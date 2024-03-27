function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("77078"),
        a = n("139737"),
        s = n("999203"),
        r = n("777003"),
        o = n("782340"),
        u = n("910077"),
        d = n("862939");

    function c(e) {
        var t;
        let {
            user: n,
            guildId: c
        } = e, {
            botUpgraded: f,
            activeSubscriptionListing: m
        } = (0, s.default)({
            user: n,
            guildId: c
        }), p = null == m ? void 0 : null === (t = m.sku_benefits) || void 0 === t ? void 0 : t.benefits;
        return null != c && f && null != p && 0 !== p.length ? (0, i.jsxs)(r.default, {
            children: [(0, i.jsx)(l.Heading, {
                variant: "eyebrow",
                className: d.title,
                children: o.default.Messages.BOT_PROFILE_BENEFITS_HEADING
            }), (0, i.jsx)("div", {
                className: u.benefitsContainer,
                children: p.map((e, t) => (0, i.jsx)(a.default, {
                    showsDescription: !1,
                    emojiContainerClassName: u.emojiContainer,
                    nameTextVariant: "text-sm/normal",
                    nameTextColor: "text-normal",
                    benefit: e
                }, "".concat(e.name).concat(t)))
            })]
        }) : null
    }
}