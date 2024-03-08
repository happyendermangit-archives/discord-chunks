function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SubscriptionListingBenefits: function() {
            return d
        },
        default: function() {
            return c
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("77078"),
        r = n("430568"),
        o = n("377527"),
        u = n("673064");

    function d(e) {
        let t, {
            applicationId: n,
            storeListingBenefits: l,
            skuBenefits: s,
            className: r
        } = e;
        return null != l ? t = l.map(e => (0, i.jsx)(f, {
            applicationId: n,
            benefit: e,
            className: a(u.benefit, r)
        }, e.id)) : null != s && (t = s.map((e, t) => (0, i.jsx)(c, {
            benefit: e,
            className: a(u.benefit, r)
        }, t))), (0, i.jsx)(i.Fragment, {
            children: t
        })
    }

    function c(e) {
        let {
            benefit: t,
            className: n,
            emojiContainerClassName: l,
            showsDescription: o = !0,
            nameTextVariant: d = "text-md/medium",
            nameTextColor: c = "header-primary"
        } = e;
        return (0, i.jsxs)("div", {
            className: a(u.container, n),
            children: [null != t.emoji && (0, i.jsx)("div", {
                className: a(u.emojiContainer, l),
                children: (0, i.jsx)(r.default, {
                    emojiId: t.emoji.id,
                    emojiName: t.emoji.name,
                    animated: t.emoji.animated
                })
            }), (0, i.jsxs)("div", {
                className: u.infoContainer,
                children: [(0, i.jsx)(s.Text, {
                    variant: d,
                    color: c,
                    className: u.name,
                    children: t.name
                }), o && (0, i.jsx)(s.Text, {
                    color: "interactive-normal",
                    variant: "text-sm/normal",
                    children: t.description
                })]
            })]
        })
    }

    function f(e) {
        let {
            applicationId: t,
            benefit: n,
            className: l,
            emojiContainerClassName: r,
            showsDescription: d = !0,
            nameTextVariant: c = "text-md/medium",
            nameTextColor: f = "header-primary"
        } = e;
        return (0, i.jsxs)("div", {
            className: a(u.container, l),
            children: [(0, i.jsx)("div", {
                className: a(u.emojiContainer, r),
                children: (0, o.getBenefitIcon)(t, n.icon)
            }), (0, i.jsxs)("div", {
                className: u.infoContainer,
                children: [(0, i.jsx)(s.Text, {
                    variant: c,
                    color: f,
                    className: u.name,
                    children: n.name
                }), d && (0, i.jsx)(s.Text, {
                    color: "interactive-normal",
                    variant: "text-sm/normal",
                    children: n.description
                })]
            })]
        })
    }
}