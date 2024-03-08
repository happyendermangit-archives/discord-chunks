function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PurchaseHeader: function() {
            return x
        },
        BenefitsConfirmation: function() {
            return E
        },
        PurchaseConfirmation: function() {
            return y
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("77078"),
        a = n("834897"),
        s = n("85336"),
        r = n("159149"),
        o = n("650484"),
        u = n("945330"),
        d = n("945986"),
        c = n("101703"),
        f = n("782340"),
        p = n("101386"),
        m = n("542631"),
        h = n("518672");
    let x = e => {
            let {
                step: t,
                onClose: n
            } = e, r = (0, a.default)(c.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
            return t === s.Step.CONFIRM || t === s.Step.BENEFITS ? (0, i.jsx)("div", {}) : (0, i.jsxs)("div", {
                className: p.headerContainer,
                children: [!r && (0, i.jsx)("div", {
                    className: p.headerImageContainer,
                    "aria-hidden": "true",
                    children: (0, i.jsx)("img", {
                        src: h,
                        alt: "",
                        className: p.headerImage
                    })
                }), (0, i.jsx)(l.Clickable, {
                    className: p.closeContainer,
                    onClick: () => n(),
                    "aria-label": f.default.Messages.CLOSE,
                    children: (0, i.jsx)(u.default, {
                        className: p.closeIcon
                    })
                })]
            })
        },
        E = e => {
            let {
                icon: t,
                storeListingBenefits: n,
                skuBenefits: l,
                application: a,
                title: s,
                subtitle: r,
                description: o
            } = e;
            return null == a ? null : (0, i.jsx)("div", {
                className: p.confirmationContainer,
                children: (0, i.jsxs)(d.ApplicationBenefitsModalContent, {
                    children: [(0, i.jsx)(d.ApplicationBenefitsModalIcon, {
                        application: a,
                        asset: t
                    }), (0, i.jsx)(d.ApplicationBenefitsModalHeading, {
                        children: s
                    }), (0, i.jsx)(d.ApplicationBenefitsModalDivider, {}), (0, i.jsx)(d.ApplicationBenefitsModalDescription, {
                        title: r,
                        description: o
                    }), (0, i.jsx)(d.ApplicationBenefitsModalBenefits, {
                        applicationId: a.id,
                        storeListingBenefits: n,
                        skuBenefits: l
                    })]
                })
            })
        };

    function y(e) {
        let {
            tierName: t,
            onConfirm: n,
            subscription: a
        } = e;
        return (0, i.jsxs)("div", {
            className: p.purchaseConfirmation,
            children: [(0, i.jsx)("img", {
                src: m,
                alt: "",
                width: 300,
                height: 126
            }), (0, i.jsx)(l.Heading, {
                className: p.confirmationTitle,
                variant: "heading-xl/extrabold",
                color: "header-primary",
                children: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
                    tier: t
                })
            }), (0, i.jsx)(l.Text, {
                className: p.confirmationSubtitle,
                variant: "text-md/medium",
                color: "header-secondary",
                children: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
                    timestamp: null == a ? void 0 : a.currentPeriodEnd
                })
            }), (0, i.jsx)(o.PaymentPortalFooter, {
                children: (0, i.jsx)(r.default, {
                    onPrimary: n,
                    primaryCTA: r.CTAType.CONTINUE,
                    primaryText: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                })
            })]
        })
    }
}