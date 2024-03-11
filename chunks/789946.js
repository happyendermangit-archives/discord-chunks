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
        C = n("646718"),
        p = n("49111"),
        S = n("782340"),
        P = n("758542"),
        R = n("393828");

    function O(e) {
        var t, n, l;
        let {
            title: O,
            type: L,
            guildBoostProps: M,
            analyticsSource: g,
            analyticsLocation: h,
            body: x,
            context: N,
            glowUp: v,
            modalClassName: A,
            artContainerClassName: U,
            bodyClassName: b,
            transitionState: D,
            onClose: y,
            onSubscribeClick: j,
            onSecondaryClick: F,
            secondaryCTA: B,
            subscribeButtonText: H,
            showNewBadge: k = !1,
            enableArtBoxShadow: w = !0,
            subscriptionTier: G = C.PremiumSubscriptionSKUs.TIER_2,
            isLoading: K = !1,
            hideBackButton: V,
            backButtonText: Z,
            ...W
        } = e, z = null != M, Y = (0, E.usePremiumTrialOffer)(), X = (0, _.usePremiumDiscountOffer)(), J = ((null == Y ? void 0 : null === (t = Y.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === G || (0, _.discountOfferHasTier)(X, G)) && !z, {
            analyticsLocations: q
        } = (0, u.default)(o.default.PREMIUM_UPSELL_MODAL), {
            enabled: Q,
            variant: $
        } = m.default.useExperiment({
            location: "PremiumUpsellModal"
        }, {
            autoTrackExposure: !1
        }), ee = Q && L === C.PremiumUpsellTypes.STREAM_QUALITY_UPSELL, et = ee && m.GradientVariants.includes($);
        i.useEffect(() => {
            !K && (z ? d.default.track(p.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                type: "".concat(L, " - Tier ").concat(M.boostedGuildTier),
                guild_id: M.guild.id,
                channel_id: M.channelId,
                location: h,
                location_stack: q
            }) : d.default.track(p.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: L,
                source: g,
                location: h,
                location_stack: q,
                sku_id: (0, f.castPremiumSubscriptionAsSkuId)(G)
            }))
        }, [z, G, K]);
        let en = w ? a(P.artContainer, P.artContainerBoxShadow, U) : a(P.artContainer, U),
            er = null;
        return er = "artURL" in W ? (0, r.jsx)("img", {
            className: P.art,
            alt: "",
            src: W.artURL
        }) : W.artElement, (0, r.jsxs)(s.ModalRoot, {
            className: a(P.root, A),
            "aria-label": O,
            transitionState: D,
            children: [(0, r.jsxs)("div", {
                className: en,
                children: [er, k ? (0, r.jsx)("img", {
                    className: P.sparkleBadge,
                    alt: "",
                    src: R
                }) : null]
            }), ee ? (0, r.jsx)(s.ModalCloseButton, {
                onClick: y,
                className: P.closeButton
            }) : null, (0, r.jsx)(s.ModalContent, {
                className: P.content,
                children: K ? (0, r.jsx)(s.Spinner, {}) : (0, r.jsx)(r.Fragment, {
                    children: J ? (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(I.default, {
                            onClose: y,
                            type: L,
                            subscriptionTier: null !== (l = null == Y ? void 0 : null === (n = Y.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== l ? l : C.PremiumSubscriptionSKUs.TIER_2,
                            headingText: O,
                            context: N,
                            analyticsLocationObject: h,
                            discountOffer: X,
                            trialOffer: Y,
                            children: v
                        })
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(s.Heading, {
                            className: a(P.header, {
                                [P.enhancedHeader]: ee
                            }),
                            variant: "heading-xl/semibold",
                            children: O
                        }), (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            className: a(b),
                            children: x
                        })]
                    })
                })
            }), (0, r.jsxs)(s.ModalFooter, {
                className: a(P.footer, {
                    [P.enhancedFooter]: ee
                }),
                children: [(0, r.jsxs)("div", {
                    className: a(P.primaryActions, {
                        [P.enhancedPrimaryActions]: ee
                    }),
                    children: [null != B ? (0, r.jsx)(s.Button, {
                        className: a(P.secondaryAction, {
                            [P.enhancedSecondaryAction]: et
                        }),
                        onClick: F,
                        size: s.Button.Sizes.SMALL,
                        color: et ? s.Button.Colors.CUSTOM : s.Button.Colors.PRIMARY,
                        look: s.Button.Looks.LINK,
                        children: B
                    }) : null, (() => {
                        let e;
                        if (z) return (0, r.jsx)(c.default, {
                            analyticsLocation: h,
                            guild: M.guild,
                            onClose: y
                        });
                        let t = ee ? S.default.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
                        if (J) {
                            if (null != Y) {
                                var n, i;
                                t = (0, f.formatTrialCtaIntervalDuration)({
                                    intervalType: null == Y ? void 0 : null === (n = Y.subscription_trial) || void 0 === n ? void 0 : n.interval,
                                    intervalCount: null == Y ? void 0 : null === (i = Y.subscription_trial) || void 0 === i ? void 0 : i.interval_count
                                }), e = null == Y ? void 0 : Y.trial_id
                            } else null != X && (t = S.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                                percent: X.discount.amount
                            }))
                        }
                        return (0, r.jsx)(T.default, {
                            className: a({
                                [P.getNitroCTA]: et
                            }),
                            premiumModalAnalyticsLocation: h,
                            subscriptionTier: G,
                            trialId: e,
                            size: s.Button.Sizes.SMALL,
                            color: et ? s.Button.Colors.CUSTOM : s.Button.Colors.GREEN,
                            onClick: () => {
                                null == j || j(), y()
                            },
                            buttonText: null != H ? H : t
                        })
                    })()]
                }), !V && !ee && (0, r.jsx)(s.Button, {
                    onClick: y,
                    size: s.Button.Sizes.SMALL,
                    color: s.Button.Colors.PRIMARY,
                    look: s.Button.Looks.LINK,
                    children: null != Z ? Z : S.default.Messages.BACK
                })]
            })]
        })
    }
}