function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BenefitsConfirmation: function() {
            return y
        },
        PurchaseConfirmation: function() {
            return I
        },
        PurchaseHeader: function() {
            return m
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("795858"),
        a = n("710589"),
        u = n("831335"),
        s = n("529579"),
        l = n("247164"),
        c = n("627228"),
        f = n("130325"),
        d = n("941504"),
        _ = n("602492"),
        E = n("365627"),
        p = n("753260"),
        m = function(e) {
            var t = e.step,
                n = e.onClose,
                u = (0, i.default)(f.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
            return t === a.Step.CONFIRM || t === a.Step.BENEFITS ? r.createElement("div", null) : r.createElement("div", {
                className: _.headerContainer
            }, !u && r.createElement("div", {
                className: _.headerImageContainer,
                "aria-hidden": "true"
            }, r.createElement("img", {
                src: p,
                alt: "",
                className: _.headerImage
            })), r.createElement(o.Clickable, {
                className: _.closeContainer,
                onClick: function() {
                    return n()
                },
                "aria-label": d.default.Messages.CLOSE
            }, r.createElement(l.default, {
                className: _.closeIcon
            })))
        },
        y = function(e) {
            var t = e.icon,
                n = e.storeListingBenefits,
                o = e.skuBenefits,
                i = e.application,
                a = e.title,
                u = e.subtitle,
                s = e.description;
            return null == i ? null : r.createElement("div", {
                className: _.confirmationContainer
            }, r.createElement(c.ApplicationBenefitsModalContent, null, r.createElement(c.ApplicationBenefitsModalIcon, {
                application: i,
                asset: t
            }), r.createElement(c.ApplicationBenefitsModalHeading, null, a), r.createElement(c.ApplicationBenefitsModalDivider, null), r.createElement(c.ApplicationBenefitsModalDescription, {
                title: u,
                description: s
            }), r.createElement(c.ApplicationBenefitsModalBenefits, {
                applicationId: i.id,
                storeListingBenefits: n,
                skuBenefits: o
            })))
        };

    function I(e) {
        var t = e.tierName,
            n = e.onConfirm,
            i = e.subscription;
        return r.createElement("div", {
            className: _.purchaseConfirmation
        }, r.createElement("img", {
            src: E,
            alt: "",
            width: 300,
            height: 126
        }), r.createElement(o.Heading, {
            className: _.confirmationTitle,
            variant: "heading-xl/extrabold",
            color: "header-primary"
        }, d.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
            tier: t
        })), r.createElement(o.Text, {
            className: _.confirmationSubtitle,
            variant: "text-md/medium",
            color: "header-secondary"
        }, d.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
            timestamp: null == i ? void 0 : i.currentPeriodEnd
        })), r.createElement(s.PaymentPortalFooter, null, r.createElement(u.default, {
            onPrimary: n,
            primaryCTA: u.CTAType.CONTINUE,
            primaryText: d.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
        })))
    }
}