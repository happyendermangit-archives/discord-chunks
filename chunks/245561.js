function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SubscriptionListingBenefits: function() {
            return d
        },
        default: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("481060"),
        o = n("596454"),
        l = n("889989"),
        u = n("708311");

    function d(e) {
        let t, {
            applicationId: n,
            storeListingBenefits: r,
            skuBenefits: s,
            className: o
        } = e;
        return null != r ? t = r.map(e => (0, i.jsx)(c, {
            applicationId: n,
            benefit: e,
            className: a()(u.__invalid_benefit, o)
        }, e.id)) : null != s && (t = s.map((e, t) => (0, i.jsx)(_, {
            benefit: e,
            className: a()(u.__invalid_benefit, o)
        }, t))), (0, i.jsx)(i.Fragment, {
            children: t
        })
    }

    function _(e) {
        let {
            benefit: t,
            className: n,
            emojiContainerClassName: r,
            showsDescription: l = !0,
            nameTextVariant: d = "text-md/medium",
            nameTextColor: _ = "header-primary"
        } = e;
        return (0, i.jsxs)("div", {
            className: a()(u.container, n),
            children: [null != t.emoji && (0, i.jsx)("div", {
                className: a()(u.emojiContainer, r),
                children: (0, i.jsx)(o.default, {
                    emojiId: t.emoji.id,
                    emojiName: t.emoji.name,
                    animated: t.emoji.animated
                })
            }), (0, i.jsxs)("div", {
                className: u.infoContainer,
                children: [(0, i.jsx)(s.Text, {
                    variant: d,
                    color: _,
                    className: u.name,
                    children: t.name
                }), l && (0, i.jsx)(s.Text, {
                    color: "interactive-normal",
                    variant: "text-sm/normal",
                    children: t.description
                })]
            })]
        })
    }

    function c(e) {
        let {
            applicationId: t,
            benefit: n,
            className: r,
            emojiContainerClassName: o,
            showsDescription: d = !0,
            nameTextVariant: _ = "text-md/medium",
            nameTextColor: c = "header-primary"
        } = e;
        return (0, i.jsxs)("div", {
            className: a()(u.container, r),
            children: [(0, i.jsx)("div", {
                className: a()(u.emojiContainer, o),
                children: (0, l.getBenefitIcon)(t, n.icon)
            }), (0, i.jsxs)("div", {
                className: u.infoContainer,
                children: [(0, i.jsx)(s.Text, {
                    variant: _,
                    color: c,
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