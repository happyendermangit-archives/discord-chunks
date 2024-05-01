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
        a = n.n(r),
        s = n("481060"),
        o = n("41959"),
        l = n("245561"),
        u = n("7027");
    let d = e => {
            let {
                application: t,
                asset: n,
                className: r,
                ...a
            } = e;
            return (0, i.jsx)(o.default, {
                application: t,
                size: o.ApplicationIconSize.MEDIUM,
                asset: n,
                className: r,
                ...a
            })
        },
        _ = e => {
            let {
                children: t,
                className: n,
                id: r,
                ...o
            } = e;
            return (0, i.jsx)(s.Heading, {
                className: a()(u.header, n),
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
                    children: r
                })]
            })
        },
        I = e => {
            let {
                applicationId: t,
                storeListingBenefits: n,
                skuBenefits: r,
                className: s,
                ...o
            } = e;
            return (0, i.jsx)("div", {
                className: a()(u.benefitsContainer, s),
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
                className: a()(u.container, n),
                ...r,
                children: t
            })
        }
}