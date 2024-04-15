function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
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
        E = n("193878"),
        I = n("104494"),
        T = n("639119"),
        f = n("165583"),
        S = n("197115"),
        h = n("302945"),
        A = n("474936"),
        m = n("981631"),
        N = n("689938"),
        p = n("620118"),
        O = n("769860");

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
            onSubscribeClick: B,
            onSecondaryClick: k,
            secondaryCTA: V,
            subscribeButtonText: F,
            showNewBadge: x = !1,
            enableArtBoxShadow: H = !0,
            subscriptionTier: Y = A.PremiumSubscriptionSKUs.TIER_2,
            isLoading: j = !1,
            hideBackButton: W,
            backButtonText: K,
            ...z
        } = e, X = null != g, q = (0, T.usePremiumTrialOffer)(), Q = (0, I.usePremiumDiscountOffer)(), Z = ((null == q ? void 0 : null === (t = q.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === Y || (0, I.discountOfferHasTier)(Q, Y)) && !X, {
            analyticsLocations: J
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
                location_stack: J
            }) : _.default.track(m.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: C,
                source: L,
                location: D,
                location_stack: J,
                sku_id: (0, c.castPremiumSubscriptionAsSkuId)(Y)
            }))
        }, [X, Y, j]);
        let ei = H ? a()(p.artContainer, p.artContainerBoxShadow, U) : a()(p.artContainer, U),
            er = null;
        return er = "artURL" in z ? (0, i.jsx)("img", {
            className: p.art,
            alt: "",
            src: z.artURL
        }) : z.artElement, (0, i.jsxs)(o.ModalRoot, {
            className: a()(p.root, P),
            "aria-label": R,
            transitionState: G,
            children: [(0, i.jsxs)("div", {
                className: ei,
                children: [er, x ? (0, i.jsx)("img", {
                    className: p.sparkleBadge,
                    alt: "",
                    src: O
                }) : null]
            }), et ? (0, i.jsx)(o.ModalCloseButton, {
                onClick: w,
                className: p.closeButton
            }) : null, (0, i.jsx)(o.ModalContent, {
                className: p.content,
                children: j ? (0, i.jsx)(o.Spinner, {}) : (0, i.jsx)(i.Fragment, {
                    children: Z ? (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(f.default, {
                            onClose: w,
                            type: C,
                            subscriptionTier: null !== (s = null == q ? void 0 : null === (n = q.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== s ? s : A.PremiumSubscriptionSKUs.TIER_2,
                            headingText: R,
                            context: M,
                            analyticsLocationObject: D,
                            discountOffer: Q,
                            trialOffer: q,
                            children: y
                        })
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(o.Heading, {
                            className: a()(p.header, {
                                [p.enhancedHeader]: et
                            }),
                            variant: "heading-xl/semibold",
                            children: R
                        }), (0, i.jsx)(h.default, {
                            premiumUpsellType: C
                        }), (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            className: a()(b, p.subHeader),
                            children: v
                        })]
                    })
                })
            }), (0, i.jsxs)(o.ModalFooter, {
                className: a()(p.footer, {
                    [p.enhancedFooter]: et
                }),
                children: [(0, i.jsxs)("div", {
                    className: a()(p.primaryActions, {
                        [p.enhancedPrimaryActions]: et
                    }),
                    children: [null != V ? (0, i.jsx)(o.Button, {
                        className: a()(p.secondaryAction, {
                            [p.enhancedSecondaryAction]: en
                        }),
                        onClick: k,
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
                        if (Z) {
                            if (null != q) {
                                var n, r;
                                t = (0, c.formatTrialCtaIntervalDuration)({
                                    intervalType: null == q ? void 0 : null === (n = q.subscription_trial) || void 0 === n ? void 0 : n.interval,
                                    intervalCount: null == q ? void 0 : null === (r = q.subscription_trial) || void 0 === r ? void 0 : r.interval_count
                                }), e = null == q ? void 0 : q.trial_id
                            } else null != Q && (t = N.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                                percent: Q.discount.amount
                            }))
                        }
                        return (0, i.jsx)(S.default, {
                            className: a()({
                                [p.getNitroCTA]: en
                            }),
                            premiumModalAnalyticsLocation: D,
                            subscriptionTier: Y,
                            trialId: e,
                            size: o.Button.Sizes.SMALL,
                            color: en ? o.Button.Colors.CUSTOM : o.Button.Colors.GREEN,
                            onClick: () => {
                                null == B || B(), w()
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