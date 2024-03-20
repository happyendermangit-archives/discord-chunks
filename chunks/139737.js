function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SubscriptionListingBenefits: function() {
            return c
        },
        default: function() {
            return d
        }
    });
    var i = n("37983");
    n("884691");
    var a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        l = n("430568"),
        o = n("377527"),
        u = n("673064");

    function c(e) {
        let t, {
            applicationId: n,
            storeListingBenefits: a,
            skuBenefits: r,
            className: l
        } = e;
        return null != a ? t = a.map(e => (0, i.jsx)(f, {
            applicationId: n,
            benefit: e,
            className: s(u.benefit, l)
        }, e.id)) : null != r && (t = r.map((e, t) => (0, i.jsx)(d, {
            benefit: e,
            className: s(u.benefit, l)
        }, t))), (0, i.jsx)(i.Fragment, {
            children: t
        })
    }

    function d(e) {
        let {
            benefit: t,
            className: n,
            emojiContainerClassName: a,
            showsDescription: o = !0,
            nameTextVariant: c = "text-md/medium",
            nameTextColor: d = "header-primary"
        } = e;
        return (0, i.jsxs)("div", {
            className: s(u.container, n),
            children: [null != t.emoji && (0, i.jsx)("div", {
                className: s(u.emojiContainer, a),
                children: (0, i.jsx)(l.default, {
                    emojiId: t.emoji.id,
                    emojiName: t.emoji.name,
                    animated: t.emoji.animated
                })
            }), (0, i.jsxs)("div", {
                className: u.infoContainer,
                children: [(0, i.jsx)(r.Text, {
                    variant: c,
                    color: d,
                    className: u.name,
                    children: t.name
                }), o && (0, i.jsx)(r.Text, {
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
            className: a,
            emojiContainerClassName: l,
            showsDescription: c = !0,
            nameTextVariant: d = "text-md/medium",
            nameTextColor: f = "header-primary"
        } = e;
        return (0, i.jsxs)("div", {
            className: s(u.container, a),
            children: [(0, i.jsx)("div", {
                className: s(u.emojiContainer, l),
                children: (0, o.getBenefitIcon)(t, n.icon)
            }), (0, i.jsxs)("div", {
                className: u.infoContainer,
                children: [(0, i.jsx)(r.Text, {
                    variant: d,
                    color: f,
                    className: u.name,
                    children: n.name
                }), c && (0, i.jsx)(r.Text, {
                    color: "interactive-normal",
                    variant: "text-sm/normal",
                    children: n.description
                })]
            })]
        })
    }
}