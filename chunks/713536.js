function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PurchaseHeader: function() {
            return S
        },
        BenefitsConfirmation: function() {
            return I
        },
        PurchaseConfirmation: function() {
            return g
        }
    });
    var i = n("37983");
    n("884691");
    var a = n("77078"),
        s = n("834897"),
        r = n("85336"),
        l = n("159149"),
        o = n("650484"),
        u = n("945330"),
        c = n("945986"),
        d = n("101703"),
        f = n("782340"),
        p = n("101386"),
        h = n("542631"),
        m = n("518672");
    let S = e => {
            let {
                step: t,
                onClose: n
            } = e, l = (0, s.default)(d.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
            return t === r.Step.CONFIRM || t === r.Step.BENEFITS ? (0, i.jsx)("div", {}) : (0, i.jsxs)("div", {
                className: p.headerContainer,
                children: [!l && (0, i.jsx)("div", {
                    className: p.headerImageContainer,
                    "aria-hidden": "true",
                    children: (0, i.jsx)("img", {
                        src: m,
                        alt: "",
                        className: p.headerImage
                    })
                }), (0, i.jsx)(a.Clickable, {
                    className: p.closeContainer,
                    onClick: () => n(),
                    "aria-label": f.default.Messages.CLOSE,
                    children: (0, i.jsx)(u.default, {
                        className: p.closeIcon
                    })
                })]
            })
        },
        I = e => {
            let {
                icon: t,
                storeListingBenefits: n,
                skuBenefits: a,
                application: s,
                title: r,
                subtitle: l,
                description: o
            } = e;
            return null == s ? null : (0, i.jsx)("div", {
                className: p.confirmationContainer,
                children: (0, i.jsxs)(c.ApplicationBenefitsModalContent, {
                    children: [(0, i.jsx)(c.ApplicationBenefitsModalIcon, {
                        application: s,
                        asset: t
                    }), (0, i.jsx)(c.ApplicationBenefitsModalHeading, {
                        children: r
                    }), (0, i.jsx)(c.ApplicationBenefitsModalDivider, {}), (0, i.jsx)(c.ApplicationBenefitsModalDescription, {
                        title: l,
                        description: o
                    }), (0, i.jsx)(c.ApplicationBenefitsModalBenefits, {
                        applicationId: s.id,
                        storeListingBenefits: n,
                        skuBenefits: a
                    })]
                })
            })
        };

    function g(e) {
        let {
            tierName: t,
            onConfirm: n,
            subscription: s
        } = e;
        return (0, i.jsxs)("div", {
            className: p.purchaseConfirmation,
            children: [(0, i.jsx)("img", {
                src: h,
                alt: "",
                width: 300,
                height: 126
            }), (0, i.jsx)(a.Heading, {
                className: p.confirmationTitle,
                variant: "heading-xl/extrabold",
                color: "header-primary",
                children: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
                    tier: t
                })
            }), (0, i.jsx)(a.Text, {
                className: p.confirmationSubtitle,
                variant: "text-md/medium",
                color: "header-secondary",
                children: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
                    timestamp: null == s ? void 0 : s.currentPeriodEnd
                })
            }), (0, i.jsx)(o.PaymentPortalFooter, {
                children: (0, i.jsx)(l.default, {
                    onPrimary: n,
                    primaryCTA: l.CTAType.CONTINUE,
                    primaryText: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                })
            })]
        })
    }
}