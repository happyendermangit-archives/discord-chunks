function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var r = n("37983"),
        i = n("884691"),
        l = n("414456"),
        a = n.n(l),
        s = n("77078"),
        o = n("812204"),
        u = n("685665"),
        c = n("617917"),
        d = n("599110"),
        f = n("719923"),
        m = n("688771"),
        _ = n("154889"),
        E = n("917247"),
        I = n("956597"),
        T = n("635956"),
        p = n("646718"),
        S = n("49111"),
        P = n("782340"),
        R = n("758542"),
        C = n("393828");

    function O(e) {
        var t, n, l;
        let {
            title: O,
            type: M,
            guildBoostProps: g,
            analyticsSource: h,
            analyticsLocation: L,
            body: N,
            context: v,
            glowUp: x,
            modalClassName: A,
            artContainerClassName: U,
            bodyClassName: b,
            transitionState: y,
            onClose: D,
            onSubscribeClick: j,
            onSecondaryClick: F,
            secondaryCTA: B,
            subscribeButtonText: k,
            showNewBadge: w = !1,
            enableArtBoxShadow: G = !0,
            subscriptionTier: H = p.PremiumSubscriptionSKUs.TIER_2,
            isLoading: K = !1,
            hideBackButton: V,
            backButtonText: W,
            ...z
        } = e, Z = null != g, Y = (0, E.usePremiumTrialOffer)(), X = (0, _.usePremiumDiscountOffer)(), J = ((null == Y ? void 0 : null === (t = Y.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === H || (0, _.discountOfferHasTier)(X, H)) && !Z, {
            analyticsLocations: q
        } = (0, u.default)(o.default.PREMIUM_UPSELL_MODAL), {
            enabled: Q,
            variant: $
        } = m.default.useExperiment({
            location: "PremiumUpsellModal"
        }, {
            autoTrackExposure: !1
        }), ee = Q && M === p.PremiumUpsellTypes.STREAM_QUALITY_UPSELL, et = ee && m.GradientVariants.includes($);
        i.useEffect(() => {
            !K && (Z ? d.default.track(S.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                type: "".concat(M, " - Tier ").concat(g.boostedGuildTier),
                guild_id: g.guild.id,
                channel_id: g.channelId,
                location: L,
                location_stack: q
            }) : d.default.track(S.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: M,
                source: h,
                location: L,
                location_stack: q,
                sku_id: (0, f.castPremiumSubscriptionAsSkuId)(H)
            }))
        }, [Z, H, K]);
        let en = G ? a(R.artContainer, R.artContainerBoxShadow, U) : a(R.artContainer, U),
            er = null;
        return er = "artURL" in z ? (0, r.jsx)("img", {
            className: R.art,
            alt: "",
            src: z.artURL
        }) : z.artElement, (0, r.jsxs)(s.ModalRoot, {
            className: a(R.root, A),
            "aria-label": O,
            transitionState: y,
            children: [(0, r.jsxs)("div", {
                className: en,
                children: [er, w ? (0, r.jsx)("img", {
                    className: R.sparkleBadge,
                    alt: "",
                    src: C
                }) : null]
            }), ee ? (0, r.jsx)(s.ModalCloseButton, {
                onClick: D,
                className: R.closeButton
            }) : null, (0, r.jsx)(s.ModalContent, {
                className: R.content,
                children: K ? (0, r.jsx)(s.Spinner, {}) : (0, r.jsx)(r.Fragment, {
                    children: J ? (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(I.default, {
                            onClose: D,
                            type: M,
                            subscriptionTier: null !== (l = null == Y ? void 0 : null === (n = Y.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== l ? l : p.PremiumSubscriptionSKUs.TIER_2,
                            headingText: O,
                            context: v,
                            analyticsLocationObject: L,
                            discountOffer: X,
                            trialOffer: Y,
                            children: x
                        })
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(s.Heading, {
                            className: a(R.header, {
                                [R.enhancedHeader]: ee
                            }),
                            variant: "heading-xl/semibold",
                            children: O
                        }), (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            className: a(b),
                            children: N
                        })]
                    })
                })
            }), (0, r.jsxs)(s.ModalFooter, {
                className: a(R.footer, {
                    [R.enhancedFooter]: ee
                }),
                children: [(0, r.jsxs)("div", {
                    className: a(R.primaryActions, {
                        [R.enhancedPrimaryActions]: ee
                    }),
                    children: [null != B ? (0, r.jsx)(s.Button, {
                        className: a(R.secondaryAction, {
                            [R.enhancedSecondaryAction]: et
                        }),
                        onClick: F,
                        size: s.Button.Sizes.SMALL,
                        color: et ? s.Button.Colors.CUSTOM : s.Button.Colors.PRIMARY,
                        look: s.Button.Looks.LINK,
                        children: B
                    }) : null, (() => {
                        let e;
                        if (Z) return (0, r.jsx)(c.default, {
                            analyticsLocation: L,
                            guild: g.guild,
                            onClose: D
                        });
                        let t = ee ? P.default.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
                        if (J) {
                            if (null != Y) {
                                var n, i;
                                t = (0, f.formatTrialCtaIntervalDuration)({
                                    intervalType: null == Y ? void 0 : null === (n = Y.subscription_trial) || void 0 === n ? void 0 : n.interval,
                                    intervalCount: null == Y ? void 0 : null === (i = Y.subscription_trial) || void 0 === i ? void 0 : i.interval_count
                                }), e = null == Y ? void 0 : Y.trial_id
                            } else null != X && (t = P.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                                percent: X.discount.amount
                            }))
                        }
                        return (0, r.jsx)(T.default, {
                            className: a({
                                [R.getNitroCTA]: et
                            }),
                            premiumModalAnalyticsLocation: L,
                            subscriptionTier: H,
                            trialId: e,
                            size: s.Button.Sizes.SMALL,
                            color: et ? s.Button.Colors.CUSTOM : s.Button.Colors.GREEN,
                            onClick: () => {
                                null == j || j(), D()
                            },
                            buttonText: null != k ? k : t
                        })
                    })()]
                }), !V && !ee && (0, r.jsx)(s.Button, {
                    onClick: D,
                    size: s.Button.Sizes.SMALL,
                    color: s.Button.Colors.PRIMARY,
                    look: s.Button.Looks.LINK,
                    children: null != W ? W : P.default.Messages.BACK
                })]
            })]
        })
    }
}