function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationBenefitsModalIcon: function() {
            return d
        },
        ApplicationBenefitsModalHeading: function() {
            return c
        },
        ApplicationBenefitsModalDivider: function() {
            return f
        },
        ApplicationBenefitsModalDescription: function() {
            return p
        },
        ApplicationBenefitsModalBenefits: function() {
            return m
        },
        ApplicationBenefitsModalContent: function() {
            return h
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("77078"),
        r = n("167007"),
        o = n("139737"),
        u = n("678598");
    let d = e => {
            let {
                application: t,
                asset: n,
                className: l,
                ...a
            } = e;
            return (0, i.jsx)(r.default, {
                application: t,
                size: r.ApplicationIconSize.MEDIUM,
                asset: n,
                className: l,
                ...a
            })
        },
        c = e => {
            let {
                children: t,
                className: n,
                id: l,
                ...r
            } = e;
            return (0, i.jsx)(s.Heading, {
                className: a(u.header, n),
                variant: "heading-xl/extrabold",
                id: l,
                ...r,
                children: t
            })
        };

    function f() {
        return (0, i.jsx)("hr", {
            className: u.divider
        })
    }
    let p = e => {
            let {
                className: t,
                title: n,
                description: l,
                ...a
            } = e;
            return (0, i.jsxs)("div", {
                className: t,
                ...a,
                children: [(0, i.jsx)(s.Heading, {
                    variant: "heading-md/bold",
                    color: "header-primary",
                    children: n
                }), (0, i.jsx)(s.Heading, {
                    variant: "heading-sm/normal",
                    color: "header-secondary",
                    children: l
                })]
            })
        },
        m = e => {
            let {
                applicationId: t,
                storeListingBenefits: n,
                skuBenefits: l,
                className: s,
                ...r
            } = e;
            return (0, i.jsx)("div", {
                className: a(u.benefitsContainer, s),
                ...r,
                children: (0, i.jsx)(o.SubscriptionListingBenefits, {
                    applicationId: t,
                    storeListingBenefits: n,
                    skuBenefits: l,
                    className: u.benefit
                })
            })
        },
        h = e => {
            let {
                children: t,
                className: n,
                ...l
            } = e;
            return (0, i.jsx)("div", {
                className: a(u.container, n),
                ...l,
                children: t
            })
        }
}