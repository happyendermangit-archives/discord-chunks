function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var r = n("37983"),
        i = n("884691"),
        a = n("414456"),
        l = n.n(a),
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
        p = n("141399"),
        S = n("646718"),
        P = n("49111"),
        R = n("782340"),
        C = n("758542"),
        O = n("393828");

    function g(e) {
        var t, n, a;
        let {
            title: g,
            type: M,
            guildBoostProps: h,
            analyticsSource: L,
            analyticsLocation: v,
            body: N,
            context: x,
            glowUp: A,
            modalClassName: U,
            artContainerClassName: b,
            bodyClassName: y,
            transitionState: D,
            onClose: j,
            onSubscribeClick: F,
            onSecondaryClick: B,
            secondaryCTA: k,
            subscribeButtonText: w,
            showNewBadge: G = !1,
            enableArtBoxShadow: H = !0,
            subscriptionTier: K = S.PremiumSubscriptionSKUs.TIER_2,
            isLoading: V = !1,
            hideBackButton: W,
            backButtonText: z,
            ...Z
        } = e, Y = null != h, X = (0, E.usePremiumTrialOffer)(), J = (0, _.usePremiumDiscountOffer)(), q = ((null == X ? void 0 : null === (t = X.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === K || (0, _.discountOfferHasTier)(J, K)) && !Y, {
            analyticsLocations: Q
        } = (0, u.default)(o.default.PREMIUM_UPSELL_MODAL), {
            enabled: $,
            variant: ee
        } = m.default.useExperiment({
            location: "PremiumUpsellModal"
        }, {
            autoTrackExposure: !1
        }), et = $ && M === S.PremiumUpsellTypes.STREAM_QUALITY_UPSELL, en = et && m.GradientVariants.includes(ee);
        i.useEffect(() => {
            !V && (Y ? d.default.track(P.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                type: "".concat(M, " - Tier ").concat(h.boostedGuildTier),
                guild_id: h.guild.id,
                channel_id: h.channelId,
                location: v,
                location_stack: Q
            }) : d.default.track(P.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: M,
                source: L,
                location: v,
                location_stack: Q,
                sku_id: (0, f.castPremiumSubscriptionAsSkuId)(K)
            }))
        }, [Y, K, V]);
        let er = H ? l(C.artContainer, C.artContainerBoxShadow, b) : l(C.artContainer, b),
            ei = null;
        return ei = "artURL" in Z ? (0, r.jsx)("img", {
            className: C.art,
            alt: "",
            src: Z.artURL
        }) : Z.artElement, (0, r.jsxs)(s.ModalRoot, {
            className: l(C.root, U),
            "aria-label": g,
            transitionState: D,
            children: [(0, r.jsxs)("div", {
                className: er,
                children: [ei, G ? (0, r.jsx)("img", {
                    className: C.sparkleBadge,
                    alt: "",
                    src: O
                }) : null]
            }), et ? (0, r.jsx)(s.ModalCloseButton, {
                onClick: j,
                className: C.closeButton
            }) : null, (0, r.jsx)(s.ModalContent, {
                className: C.content,
                children: V ? (0, r.jsx)(s.Spinner, {}) : (0, r.jsx)(r.Fragment, {
                    children: q ? (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(I.default, {
                            onClose: j,
                            type: M,
                            subscriptionTier: null !== (a = null == X ? void 0 : null === (n = X.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== a ? a : S.PremiumSubscriptionSKUs.TIER_2,
                            headingText: g,
                            context: x,
                            analyticsLocationObject: v,
                            discountOffer: J,
                            trialOffer: X,
                            children: A
                        })
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(s.Heading, {
                            className: l(C.header, {
                                [C.enhancedHeader]: et
                            }),
                            variant: "heading-xl/semibold",
                            children: g
                        }), (0, r.jsx)(p.default, {
                            premiumUpsellType: M
                        }), (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            className: l(y, C.subHeader),
                            children: N
                        })]
                    })
                })
            }), (0, r.jsxs)(s.ModalFooter, {
                className: l(C.footer, {
                    [C.enhancedFooter]: et
                }),
                children: [(0, r.jsxs)("div", {
                    className: l(C.primaryActions, {
                        [C.enhancedPrimaryActions]: et
                    }),
                    children: [null != k ? (0, r.jsx)(s.Button, {
                        className: l(C.secondaryAction, {
                            [C.enhancedSecondaryAction]: en
                        }),
                        onClick: B,
                        size: s.Button.Sizes.SMALL,
                        color: en ? s.Button.Colors.CUSTOM : s.Button.Colors.PRIMARY,
                        look: s.Button.Looks.LINK,
                        children: k
                    }) : null, (() => {
                        let e;
                        if (Y) return (0, r.jsx)(c.default, {
                            analyticsLocation: v,
                            guild: h.guild,
                            onClose: j
                        });
                        let t = et ? R.default.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
                        if (q) {
                            if (null != X) {
                                var n, i;
                                t = (0, f.formatTrialCtaIntervalDuration)({
                                    intervalType: null == X ? void 0 : null === (n = X.subscription_trial) || void 0 === n ? void 0 : n.interval,
                                    intervalCount: null == X ? void 0 : null === (i = X.subscription_trial) || void 0 === i ? void 0 : i.interval_count
                                }), e = null == X ? void 0 : X.trial_id
                            } else null != J && (t = R.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                                percent: J.discount.amount
                            }))
                        }
                        return (0, r.jsx)(T.default, {
                            className: l({
                                [C.getNitroCTA]: en
                            }),
                            premiumModalAnalyticsLocation: v,
                            subscriptionTier: K,
                            trialId: e,
                            size: s.Button.Sizes.SMALL,
                            color: en ? s.Button.Colors.CUSTOM : s.Button.Colors.GREEN,
                            onClick: () => {
                                null == F || F(), j()
                            },
                            buttonText: null != w ? w : t
                        })
                    })()]
                }), !W && !et && (0, r.jsx)(s.Button, {
                    onClick: j,
                    size: s.Button.Sizes.SMALL,
                    color: s.Button.Colors.PRIMARY,
                    look: s.Button.Looks.LINK,
                    children: null != z ? z : R.default.Messages.BACK
                })]
            })]
        })
    }
}