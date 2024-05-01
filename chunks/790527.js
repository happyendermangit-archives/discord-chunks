function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("481060"),
        l = n("100527"),
        u = n("906732"),
        d = n("678558"),
        _ = n("626135"),
        c = n("74538"),
        E = n("104494"),
        I = n("639119"),
        T = n("165583"),
        f = n("197115"),
        S = n("302945"),
        h = n("474936"),
        A = n("981631"),
        m = n("689938"),
        N = n("960451"),
        p = n("769860");

    function O(e) {
        var t, n, s;
        let {
            title: O,
            type: R,
            guildBoostProps: C,
            analyticsSource: g,
            analyticsLocation: L,
            body: v,
            context: D,
            glowUp: M,
            modalClassName: y,
            artContainerClassName: P,
            bodyClassName: U,
            transitionState: b,
            onClose: G,
            onSubscribeClick: w,
            onSecondaryClick: B,
            secondaryCTA: k,
            subscribeButtonText: V,
            showNewBadge: x = !1,
            enableArtBoxShadow: F = !0,
            subscriptionTier: H = h.PremiumSubscriptionSKUs.TIER_2,
            isLoading: Y = !1,
            hideBackButton: j,
            backButtonText: W,
            showEnhancedUpsell: K,
            children: z,
            ...Z
        } = e, X = null != C, Q = (0, I.usePremiumTrialOffer)(), q = (0, E.usePremiumDiscountOffer)(), J = ((null == Q ? void 0 : null === (t = Q.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === H || (0, E.discountOfferHasTier)(q, H)) && !X, {
            analyticsLocations: $
        } = (0, u.default)(l.default.PREMIUM_UPSELL_MODAL);
        r.useEffect(() => {
            !Y && (X ? _.default.track(A.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                type: "".concat(R, " - Tier ").concat(C.boostedGuildTier),
                guild_id: C.guild.id,
                channel_id: C.channelId,
                location: L,
                location_stack: $
            }) : _.default.track(A.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: R,
                source: g,
                location: L,
                location_stack: $,
                sku_id: (0, c.castPremiumSubscriptionAsSkuId)(H)
            }))
        }, [X, H, Y]);
        let ee = F ? a()(N.artContainer, N.artContainerBoxShadow, P) : a()(N.artContainer, P),
            et = null;
        return et = "artURL" in Z ? (0, i.jsx)("img", {
            className: N.art,
            alt: "",
            src: Z.artURL
        }) : Z.artElement, (0, i.jsxs)(o.ModalRoot, {
            className: a()(N.root, y),
            "aria-label": O,
            transitionState: b,
            children: [(0, i.jsxs)("div", {
                className: ee,
                children: [et, x ? (0, i.jsx)("img", {
                    className: N.sparkleBadge,
                    alt: "",
                    src: p
                }) : null]
            }), K ? (0, i.jsx)(o.ModalCloseButton, {
                onClick: G,
                className: N.closeButton
            }) : null, (0, i.jsx)(o.ModalContent, {
                scrollbarType: "none",
                className: N.content,
                children: Y ? (0, i.jsx)(o.Spinner, {}) : (0, i.jsx)(i.Fragment, {
                    children: J ? (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(T.default, {
                            onClose: G,
                            type: R,
                            subscriptionTier: null !== (s = null == Q ? void 0 : null === (n = Q.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== s ? s : h.PremiumSubscriptionSKUs.TIER_2,
                            headingText: O,
                            context: D,
                            analyticsLocationObject: L,
                            discountOffer: q,
                            trialOffer: Q,
                            children: M
                        })
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(o.Heading, {
                            className: a()(N.header, {
                                [N.enhancedHeader]: K
                            }),
                            variant: "heading-xl/semibold",
                            children: O
                        }), (0, i.jsx)(S.default, {
                            premiumUpsellType: R
                        }), z, (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            className: a()(U, N.subHeader),
                            children: v
                        })]
                    })
                })
            }), (0, i.jsxs)(o.ModalFooter, {
                className: a()(N.footer, {
                    [N.enhancedFooter]: K
                }),
                children: [(0, i.jsxs)("div", {
                    className: a()(N.primaryActions, {
                        [N.enhancedPrimaryActions]: K
                    }),
                    children: [null != k ? (0, i.jsx)(o.Button, {
                        className: a()(N.secondaryAction, {
                            [N.enhancedSecondaryAction]: K
                        }),
                        onClick: B,
                        size: o.Button.Sizes.SMALL,
                        color: K ? o.Button.Colors.CUSTOM : o.Button.Colors.PRIMARY,
                        look: o.Button.Looks.LINK,
                        children: k
                    }) : null, (() => {
                        let e;
                        if (X) return (0, i.jsx)(d.default, {
                            analyticsLocation: L,
                            guild: C.guild,
                            onClose: G
                        });
                        let t = K ? m.default.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
                        if (J) {
                            if (null != Q) {
                                var n, r;
                                t = (0, c.formatTrialCtaIntervalDuration)({
                                    intervalType: null == Q ? void 0 : null === (n = Q.subscription_trial) || void 0 === n ? void 0 : n.interval,
                                    intervalCount: null == Q ? void 0 : null === (r = Q.subscription_trial) || void 0 === r ? void 0 : r.interval_count
                                }), e = null == Q ? void 0 : Q.trial_id
                            } else null != q && (t = m.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                                percent: q.discount.amount
                            }))
                        }
                        return (0, i.jsx)(f.default, {
                            className: a()({
                                [N.getNitroCTA]: K
                            }),
                            premiumModalAnalyticsLocation: L,
                            subscriptionTier: H,
                            trialId: e,
                            size: o.Button.Sizes.SMALL,
                            color: K ? o.Button.Colors.CUSTOM : o.Button.Colors.GREEN,
                            onClick: () => {
                                null == w || w(), G()
                            },
                            buttonText: null != V ? V : t
                        })
                    })()]
                }), !j && !K && (0, i.jsx)(o.Button, {
                    onClick: G,
                    size: o.Button.Sizes.SMALL,
                    color: o.Button.Colors.PRIMARY,
                    look: o.Button.Looks.LINK,
                    children: null != W ? W : m.default.Messages.BACK
                })]
            })]
        })
    }
}