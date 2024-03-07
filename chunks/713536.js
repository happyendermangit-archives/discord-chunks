function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PurchaseHeader: function() {
            return E
        },
        BenefitsConfirmation: function() {
            return g
        },
        PurchaseConfirmation: function() {
            return S
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("77078"),
        a = n("834897"),
        s = n("85336"),
        r = n("159149"),
        o = n("650484"),
        u = n("945330"),
        d = n("945986"),
        c = n("101703"),
        f = n("782340"),
        m = n("101386"),
        p = n("542631"),
        h = n("518672");
    let E = e => {
            let {
                step: t,
                onClose: n
            } = e, r = (0, a.default)(c.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
            return t === s.Step.CONFIRM || t === s.Step.BENEFITS ? (0, l.jsx)("div", {}) : (0, l.jsxs)("div", {
                className: m.headerContainer,
                children: [!r && (0, l.jsx)("div", {
                    className: m.headerImageContainer,
                    "aria-hidden": "true",
                    children: (0, l.jsx)("img", {
                        src: h,
                        alt: "",
                        className: m.headerImage
                    })
                }), (0, l.jsx)(i.Clickable, {
                    className: m.closeContainer,
                    onClick: () => n(),
                    "aria-label": f.default.Messages.CLOSE,
                    children: (0, l.jsx)(u.default, {
                        className: m.closeIcon
                    })
                })]
            })
        },
        g = e => {
            let {
                icon: t,
                storeListingBenefits: n,
                skuBenefits: i,
                application: a,
                title: s,
                subtitle: r,
                description: o
            } = e;
            return null == a ? null : (0, l.jsx)("div", {
                className: m.confirmationContainer,
                children: (0, l.jsxs)(d.ApplicationBenefitsModalContent, {
                    children: [(0, l.jsx)(d.ApplicationBenefitsModalIcon, {
                        application: a,
                        asset: t
                    }), (0, l.jsx)(d.ApplicationBenefitsModalHeading, {
                        children: s
                    }), (0, l.jsx)(d.ApplicationBenefitsModalDivider, {}), (0, l.jsx)(d.ApplicationBenefitsModalDescription, {
                        title: r,
                        description: o
                    }), (0, l.jsx)(d.ApplicationBenefitsModalBenefits, {
                        applicationId: a.id,
                        storeListingBenefits: n,
                        skuBenefits: i
                    })]
                })
            })
        };

    function S(e) {
        let {
            tierName: t,
            onConfirm: n,
            subscription: a
        } = e;
        return (0, l.jsxs)("div", {
            className: m.purchaseConfirmation,
            children: [(0, l.jsx)("img", {
                src: p,
                alt: "",
                width: 300,
                height: 126
            }), (0, l.jsx)(i.Heading, {
                className: m.confirmationTitle,
                variant: "heading-xl/extrabold",
                color: "header-primary",
                children: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
                    tier: t
                })
            }), (0, l.jsx)(i.Text, {
                className: m.confirmationSubtitle,
                variant: "text-md/medium",
                color: "header-secondary",
                children: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
                    timestamp: null == a ? void 0 : a.currentPeriodEnd
                })
            }), (0, l.jsx)(o.PaymentPortalFooter, {
                children: (0, l.jsx)(r.default, {
                    onPrimary: n,
                    primaryCTA: r.CTAType.CONTINUE,
                    primaryText: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                })
            })]
        })
    }
}