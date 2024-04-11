function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("481060"),
        l = n("100527"),
        u = n("906732"),
        d = n("678558"),
        _ = n("626135"),
        c = n("74538"),
        E = n("193878"),
        I = n("104494"),
        T = n("639119"),
        f = n("165583"),
        S = n("197115"),
        h = n("302945"),
        A = n("474936"),
        m = n("981631"),
        N = n("689938"),
        O = n("620118"),
        p = n("769860");

    function R(e) {
        var t, n, s;
        let {
            title: R,
            type: C,
            guildBoostProps: g,
            analyticsSource: L,
            analyticsLocation: D,
            body: v,
            context: M,
            glowUp: y,
            modalClassName: P,
            artContainerClassName: U,
            bodyClassName: b,
            transitionState: G,
            onClose: w,
            onSubscribeClick: k,
            onSecondaryClick: B,
            secondaryCTA: V,
            subscribeButtonText: F,
            showNewBadge: x = !1,
            enableArtBoxShadow: H = !0,
            subscriptionTier: Y = A.PremiumSubscriptionSKUs.TIER_2,
            isLoading: j = !1,
            hideBackButton: W,
            backButtonText: K,
            ...z
        } = e, X = null != g, Q = (0, T.usePremiumTrialOffer)(), q = (0, I.usePremiumDiscountOffer)(), J = ((null == Q ? void 0 : null === (t = Q.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === Y || (0, I.discountOfferHasTier)(q, Y)) && !X, {
            analyticsLocations: Z
        } = (0, u.default)(l.default.PREMIUM_UPSELL_MODAL), {
            enabled: $,
            variant: ee
        } = E.default.useExperiment({
            location: "PremiumUpsellModal"
        }, {
            autoTrackExposure: !1
        }), et = $ && C === A.PremiumUpsellTypes.STREAM_QUALITY_UPSELL, en = et && E.GradientVariants.includes(ee);
        r.useEffect(() => {
            !j && (X ? _.default.track(m.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                type: "".concat(C, " - Tier ").concat(g.boostedGuildTier),
                guild_id: g.guild.id,
                channel_id: g.channelId,
                location: D,
                location_stack: Z
            }) : _.default.track(m.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: C,
                source: L,
                location: D,
                location_stack: Z,
                sku_id: (0, c.castPremiumSubscriptionAsSkuId)(Y)
            }))
        }, [X, Y, j]);
        let ei = H ? a()(O.artContainer, O.artContainerBoxShadow, U) : a()(O.artContainer, U),
            er = null;
        return er = "artURL" in z ? (0, i.jsx)("img", {
            className: O.art,
            alt: "",
            src: z.artURL
        }) : z.artElement, (0, i.jsxs)(o.ModalRoot, {
            className: a()(O.root, P),
            "aria-label": R,
            transitionState: G,
            children: [(0, i.jsxs)("div", {
                className: ei,
                children: [er, x ? (0, i.jsx)("img", {
                    className: O.sparkleBadge,
                    alt: "",
                    src: p
                }) : null]
            }), et ? (0, i.jsx)(o.ModalCloseButton, {
                onClick: w,
                className: O.closeButton
            }) : null, (0, i.jsx)(o.ModalContent, {
                className: O.content,
                children: j ? (0, i.jsx)(o.Spinner, {}) : (0, i.jsx)(i.Fragment, {
                    children: J ? (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(f.default, {
                            onClose: w,
                            type: C,
                            subscriptionTier: null !== (s = null == Q ? void 0 : null === (n = Q.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== s ? s : A.PremiumSubscriptionSKUs.TIER_2,
                            headingText: R,
                            context: M,
                            analyticsLocationObject: D,
                            discountOffer: q,
                            trialOffer: Q,
                            children: y
                        })
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(o.Heading, {
                            className: a()(O.header, {
                                [O.enhancedHeader]: et
                            }),
                            variant: "heading-xl/semibold",
                            children: R
                        }), (0, i.jsx)(h.default, {
                            premiumUpsellType: C
                        }), (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            className: a()(b, O.subHeader),
                            children: v
                        })]
                    })
                })
            }), (0, i.jsxs)(o.ModalFooter, {
                className: a()(O.footer, {
                    [O.enhancedFooter]: et
                }),
                children: [(0, i.jsxs)("div", {
                    className: a()(O.primaryActions, {
                        [O.enhancedPrimaryActions]: et
                    }),
                    children: [null != V ? (0, i.jsx)(o.Button, {
                        className: a()(O.secondaryAction, {
                            [O.enhancedSecondaryAction]: en
                        }),
                        onClick: B,
                        size: o.Button.Sizes.SMALL,
                        color: en ? o.Button.Colors.CUSTOM : o.Button.Colors.PRIMARY,
                        look: o.Button.Looks.LINK,
                        children: V
                    }) : null, (() => {
                        let e;
                        if (X) return (0, i.jsx)(d.default, {
                            analyticsLocation: D,
                            guild: g.guild,
                            onClose: w
                        });
                        let t = et ? N.default.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
                        if (J) {
                            if (null != Q) {
                                var n, r;
                                t = (0, c.formatTrialCtaIntervalDuration)({
                                    intervalType: null == Q ? void 0 : null === (n = Q.subscription_trial) || void 0 === n ? void 0 : n.interval,
                                    intervalCount: null == Q ? void 0 : null === (r = Q.subscription_trial) || void 0 === r ? void 0 : r.interval_count
                                }), e = null == Q ? void 0 : Q.trial_id
                            } else null != q && (t = N.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                                percent: q.discount.amount
                            }))
                        }
                        return (0, i.jsx)(S.default, {
                            className: a()({
                                [O.getNitroCTA]: en
                            }),
                            premiumModalAnalyticsLocation: D,
                            subscriptionTier: Y,
                            trialId: e,
                            size: o.Button.Sizes.SMALL,
                            color: en ? o.Button.Colors.CUSTOM : o.Button.Colors.GREEN,
                            onClick: () => {
                                null == k || k(), w()
                            },
                            buttonText: null != F ? F : t
                        })
                    })()]
                }), !W && !et && (0, i.jsx)(o.Button, {
                    onClick: w,
                    size: o.Button.Sizes.SMALL,
                    color: o.Button.Colors.PRIMARY,
                    look: o.Button.Looks.LINK,
                    children: null != K ? K : N.default.Messages.BACK
                })]
            })]
        })
    }
}