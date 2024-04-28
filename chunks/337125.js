function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("245561"),
        a = n("873572"),
        o = n("659101"),
        l = n("689938"),
        u = n("730308"),
        d = n("379916");

    function _(e) {
        var t;
        let {
            user: n,
            guildId: _
        } = e, {
            botUpgraded: c,
            activeSubscriptionListing: E
        } = (0, a.default)({
            user: n,
            guildId: _
        }), I = null == E ? void 0 : null === (t = E.sku_benefits) || void 0 === t ? void 0 : t.benefits;
        return null != _ && c && null != I && 0 !== I.length ? (0, i.jsxs)(o.default, {
            children: [(0, i.jsx)(r.Heading, {
                variant: "eyebrow",
                className: d.title,
                children: l.default.Messages.BOT_PROFILE_BENEFITS_HEADING
            }), (0, i.jsx)("div", {
                className: u.benefitsContainer,
                children: I.map((e, t) => (0, i.jsx)(s.default, {
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