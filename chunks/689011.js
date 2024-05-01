function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BenefitsConfirmation: function() {
            return S
        },
        PurchaseConfirmation: function() {
            return h
        },
        PurchaseHeader: function() {
            return f
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("131388"),
        s = n("409813"),
        o = n("586585"),
        l = n("614277"),
        u = n("465670"),
        d = n("225715"),
        _ = n("750143"),
        c = n("689938"),
        E = n("932782"),
        I = n("365627"),
        T = n("753260");
    let f = e => {
            let {
                step: t,
                onClose: n
            } = e, o = (0, a.default)(_.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
            return t === s.Step.CONFIRM || t === s.Step.BENEFITS ? (0, i.jsx)("div", {}) : (0, i.jsxs)("div", {
                className: E.headerContainer,
                children: [!o && (0, i.jsx)("div", {
                    className: E.headerImageContainer,
                    "aria-hidden": "true",
                    children: (0, i.jsx)("img", {
                        src: T,
                        alt: "",
                        className: E.headerImage
                    })
                }), (0, i.jsx)(r.Clickable, {
                    className: E.closeContainer,
                    onClick: () => n(),
                    "aria-label": c.default.Messages.CLOSE,
                    children: (0, i.jsx)(u.default, {
                        className: E.closeIcon
                    })
                })]
            })
        },
        S = e => {
            let {
                icon: t,
                storeListingBenefits: n,
                skuBenefits: r,
                application: a,
                title: s,
                subtitle: o,
                description: l
            } = e;
            return null == a ? null : (0, i.jsx)("div", {
                className: E.confirmationContainer,
                children: (0, i.jsxs)(d.ApplicationBenefitsModalContent, {
                    children: [(0, i.jsx)(d.ApplicationBenefitsModalIcon, {
                        application: a,
                        asset: t
                    }), (0, i.jsx)(d.ApplicationBenefitsModalHeading, {
                        children: s
                    }), (0, i.jsx)(d.ApplicationBenefitsModalDivider, {}), (0, i.jsx)(d.ApplicationBenefitsModalDescription, {
                        title: o,
                        description: l
                    }), (0, i.jsx)(d.ApplicationBenefitsModalBenefits, {
                        applicationId: a.id,
                        storeListingBenefits: n,
                        skuBenefits: r
                    })]
                })
            })
        };

    function h(e) {
        let {
            tierName: t,
            onConfirm: n,
            subscription: a
        } = e;
        return (0, i.jsxs)("div", {
            className: E.purchaseConfirmation,
            children: [(0, i.jsx)("img", {
                src: I,
                alt: "",
                width: 300,
                height: 126
            }), (0, i.jsx)(r.Heading, {
                className: E.confirmationTitle,
                variant: "heading-xl/extrabold",
                color: "header-primary",
                children: c.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
                    tier: t
                })
            }), (0, i.jsx)(r.Text, {
                className: E.confirmationSubtitle,
                variant: "text-md/medium",
                color: "header-secondary",
                children: c.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
                    timestamp: null == a ? void 0 : a.currentPeriodEnd
                })
            }), (0, i.jsx)(l.PaymentPortalFooter, {
                children: (0, i.jsx)(o.default, {
                    onPrimary: n,
                    primaryCTA: o.CTAType.CONTINUE,
                    primaryText: c.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                })
            })]
        })
    }
}