function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationBenefitsModalIcon: function() {
            return c
        },
        ApplicationBenefitsModalHeading: function() {
            return d
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
    var a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        l = n("167007"),
        o = n("139737"),
        u = n("678598");
    let c = e => {
            let {
                application: t,
                asset: n,
                className: a,
                ...s
            } = e;
            return (0, i.jsx)(l.default, {
                application: t,
                size: l.ApplicationIconSize.MEDIUM,
                asset: n,
                className: a,
                ...s
            })
        },
        d = e => {
            let {
                children: t,
                className: n,
                id: a,
                ...l
            } = e;
            return (0, i.jsx)(r.Heading, {
                className: s(u.header, n),
                variant: "heading-xl/extrabold",
                id: a,
                ...l,
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
                description: a,
                ...s
            } = e;
            return (0, i.jsxs)("div", {
                className: t,
                ...s,
                children: [(0, i.jsx)(r.Heading, {
                    variant: "heading-md/bold",
                    color: "header-primary",
                    children: n
                }), (0, i.jsx)(r.Heading, {
                    variant: "heading-sm/normal",
                    color: "header-secondary",
                    children: a
                })]
            })
        },
        m = e => {
            let {
                applicationId: t,
                storeListingBenefits: n,
                skuBenefits: a,
                className: r,
                ...l
            } = e;
            return (0, i.jsx)("div", {
                className: s(u.benefitsContainer, r),
                ...l,
                children: (0, i.jsx)(o.SubscriptionListingBenefits, {
                    applicationId: t,
                    storeListingBenefits: n,
                    skuBenefits: a,
                    className: u.benefit
                })
            })
        },
        h = e => {
            let {
                children: t,
                className: n,
                ...a
            } = e;
            return (0, i.jsx)("div", {
                className: s(u.container, n),
                ...a,
                children: t
            })
        }
}