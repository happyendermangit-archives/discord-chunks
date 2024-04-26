function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationBenefitsModalBenefits: function() {
            return I
        },
        ApplicationBenefitsModalContent: function() {
            return T
        },
        ApplicationBenefitsModalDescription: function() {
            return E
        },
        ApplicationBenefitsModalDivider: function() {
            return c
        },
        ApplicationBenefitsModalHeading: function() {
            return _
        },
        ApplicationBenefitsModalIcon: function() {
            return d
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("41959"),
        l = n("245561"),
        u = n("7027");
    let d = e => {
            let {
                application: t,
                asset: n,
                className: r,
                ...s
            } = e;
            return (0, i.jsx)(o.default, {
                application: t,
                size: o.ApplicationIconSize.MEDIUM,
                asset: n,
                className: r,
                ...s
            })
        },
        _ = e => {
            let {
                children: t,
                className: n,
                id: r,
                ...o
            } = e;
            return (0, i.jsx)(a.Heading, {
                className: s()(u.header, n),
                variant: "heading-xl/extrabold",
                id: r,
                ...o,
                children: t
            })
        };

    function c() {
        return (0, i.jsx)("hr", {
            className: u.divider
        })
    }
    let E = e => {
            let {
                className: t,
                title: n,
                description: r,
                ...s
            } = e;
            return (0, i.jsxs)("div", {
                className: t,
                ...s,
                children: [(0, i.jsx)(a.Heading, {
                    variant: "heading-md/bold",
                    color: "header-primary",
                    children: n
                }), (0, i.jsx)(a.Heading, {
                    variant: "heading-sm/normal",
                    color: "header-secondary",
                    children: r
                })]
            })
        },
        I = e => {
            let {
                applicationId: t,
                storeListingBenefits: n,
                skuBenefits: r,
                className: a,
                ...o
            } = e;
            return (0, i.jsx)("div", {
                className: s()(u.benefitsContainer, a),
                ...o,
                children: (0, i.jsx)(l.SubscriptionListingBenefits, {
                    applicationId: t,
                    storeListingBenefits: n,
                    skuBenefits: r,
                    className: u.benefit
                })
            })
        },
        T = e => {
            let {
                children: t,
                className: n,
                ...r
            } = e;
            return (0, i.jsx)("div", {
                className: s()(u.container, n),
                ...r,
                children: t
            })
        }
}