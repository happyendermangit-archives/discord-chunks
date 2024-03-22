function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PremiumTrialGradientBadge: function() {
            return F
        },
        default: function() {
            return G
        }
    }), n("222007");
    var r = n("37983"),
        i = n("884691"),
        a = n("414456"),
        l = n.n(a),
        s = n("627445"),
        o = n.n(s),
        u = n("866227"),
        c = n.n(u),
        d = n("446674"),
        f = n("551042"),
        m = n("819855"),
        _ = n("77078"),
        E = n("841098"),
        I = n("206230"),
        T = n("32531"),
        p = n("393414"),
        S = n("945330"),
        P = n("41250"),
        R = n("379863"),
        C = n("216422"),
        O = n("719923"),
        g = n("286235"),
        M = n("626301"),
        h = n("917247"),
        L = n("635956"),
        N = n("400307"),
        v = n("646718"),
        x = n("49111"),
        A = n("782340"),
        U = n("821535"),
        b = n("481927");

    function y(e) {
        if (null == e) return null;
        let t = c(e),
            n = t.diff(c(), "h");
        if (n > 24) {
            let e = t.diff(c(), "d");
            return A.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_DAYS.format({
                numDays: e
            })
        }
        if (n > 1) return A.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_HOURS.format({
            numHours: n
        });
        let r = t.diff(c(), "minutes");
        return A.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_MINUTES.format({
            numMinutes: r
        })
    }

    function D(e) {
        var t, n, i;
        let {
            className: a,
            children: s,
            withBottomMargin: o,
            discountOffer: u,
            trialOffer: c
        } = e, d = null !== (t = null == c ? void 0 : c.expires_at) && void 0 !== t ? t : null == u ? void 0 : u.expires_at, f = null == c ? void 0 : c.subscription_trial, m = null !== (i = null !== (n = e.subscriptionTier) && void 0 !== n ? n : null == f ? void 0 : f.sku_id) && void 0 !== i ? i : v.PremiumSubscriptionSKUs.TIER_2;
        return (0, r.jsxs)("div", {
            className: l(a, U.gradientUpsellWrapper, {
                [U.gradientUpsellWrapperTier0]: m === v.PremiumSubscriptionSKUs.TIER_0,
                [U.gradientUpsellWrapperTier2]: m === v.PremiumSubscriptionSKUs.TIER_2,
                [U.gradientUpsellWrapperWithBottomMargin]: o
            }),
            children: [(0, r.jsxs)("div", {
                className: U.logo,
                children: [(0, r.jsx)(C.default, {
                    className: U.logoIcon
                }), m === v.PremiumSubscriptionSKUs.TIER_0 && (0, r.jsx)(R.default, {
                    className: U.logoWordmark
                }), m === v.PremiumSubscriptionSKUs.TIER_2 && (0, r.jsx)(P.default, {
                    className: U.logoWordmark
                })]
            }), (0, r.jsx)(_.Text, {
                variant: "text-md/medium",
                className: U.copy,
                color: "none",
                children: s
            }), (0, r.jsx)(N.PremiumPillWithSparkles, {
                text: null != u ? A.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                    percent: u.discount.amount
                }) : A.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                colorOptions: m === v.PremiumSubscriptionSKUs.TIER_0 ? N.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : N.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
            }), (0, r.jsx)(_.Text, {
                variant: "eyebrow",
                className: U.countdownText,
                children: y(d)
            })]
        })
    }

    function j(e) {
        var t, n;
        let {
            className: a,
            onClose: l,
            subscriptionTier: s,
            analyticsLocationObject: o,
            trialOffer: u,
            discountOffer: c
        } = e, [d, f] = i.useState(!1), m = null != c ? A.default.Messages.PREMIUM_DISCOUNT_CTA.format({
            percent: c.discount.amount
        }) : (0, O.formatTrialCtaIntervalDuration)({
            intervalType: null == u ? void 0 : null === (t = u.subscription_trial) || void 0 === t ? void 0 : t.interval,
            intervalCount: null == u ? void 0 : null === (n = u.subscription_trial) || void 0 === n ? void 0 : n.interval_count
        });
        return (0, r.jsx)(L.default, {
            className: a,
            subscriptionTier: s,
            trialId: null == u ? void 0 : u.trial_id,
            submitting: d,
            premiumModalAnalyticsLocation: o,
            size: _.Button.Sizes.MEDIUM,
            color: _.Button.Colors.GREEN,
            onClick: () => {
                f(!0)
            },
            onSubscribeModalClose: e => {
                f(!1), e && (null == l || l())
            },
            buttonText: m
        })
    }

    function F(e) {
        var t, n;
        let i = null === (t = (0, h.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial,
            a = null !== (n = null == i ? void 0 : i.sku_id) && void 0 !== n ? n : v.PremiumSubscriptionSKUs.TIER_2;
        return (0, r.jsx)(_.Text, {
            variant: "text-xs/bold",
            className: l(U.trialBadge, e.className, {
                [U.trialBadgeGradientTier0]: a === v.PremiumSubscriptionSKUs.TIER_0,
                [U.trialBadgeGradientTier2]: a === v.PremiumSubscriptionSKUs.TIER_2
            }),
            color: "none",
            children: (0, O.formatTrialOfferIntervalDuration)({
                intervalType: null == i ? void 0 : i.interval,
                intervalCount: null == i ? void 0 : i.interval_count
            })
        })
    }

    function B(e) {
        let {
            subscriptionTier: t,
            onClose: n,
            analyticsLocationObject: i,
            trialOffer: a,
            discountOffer: l
        } = e;
        return (0, r.jsxs)("div", {
            className: U.footer,
            children: [(0, r.jsx)(_.Button, {
                onClick: n,
                size: _.Button.Sizes.SMALL,
                look: _.ButtonLooks.BLANK,
                className: U.cancelButton,
                children: A.default.Messages.CLOSE
            }), (0, r.jsx)(j, {
                className: U.subscribeButton,
                subscriptionTier: t,
                analyticsLocationObject: i,
                onClose: n,
                discountOffer: l,
                trialOffer: a
            })]
        })
    }

    function k(e) {
        let {
            onClose: t,
            analyticsLocationObject: n
        } = e, i = (0, h.usePremiumTrialOffer)();
        return (0, r.jsxs)("div", {
            className: U.tryOutUpsellContainer,
            children: [(0, r.jsx)(N.PremiumPillWithSparkles, {
                className: U.topRimPill,
                text: A.default.Messages.PREMIUM_FREE_NITRO_TRIAL_TEXT,
                colorOptions: N.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
            }), (0, r.jsx)(_.Heading, {
                variant: "heading-md/semibold",
                color: "text-normal",
                children: A.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_TRIAL_DESCRIPTION.format({
                    onClick: M.navigateToPremiumMarketingPage
                })
            }), (0, r.jsx)(j, {
                trialOffer: i,
                className: U.subscribeButtonWide,
                subscriptionTier: v.PremiumSubscriptionSKUs.TIER_2,
                analyticsLocationObject: n,
                onClose: t
            }), (0, r.jsx)(_.Text, {
                variant: "eyebrow",
                className: U.countdownTextInSetting,
                children: y(null == i ? void 0 : i.expires_at)
            })]
        })
    }

    function w(e) {
        let {
            headingText: t,
            context: n,
            children: i,
            trialOffer: a,
            discountOffer: l
        } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(_.Heading, {
                className: U.header,
                variant: "heading-xl/semibold",
                children: t
            }), null != n && (0, r.jsx)(_.Text, {
                className: U.context,
                variant: "text-md/normal",
                children: n
            }), (0, r.jsx)(D, {
                trialOffer: a,
                discountOffer: l,
                children: i
            })]
        })
    }

    function G(e) {
        let {
            headingText: t,
            context: i,
            children: a,
            onClose: s,
            type: u,
            subscriptionTier: c,
            analyticsLocationObject: P,
            trialOffer: R,
            discountOffer: C
        } = e, M = (0, d.useStateFromStores)([I.default], () => I.default.useReducedMotion), h = (0, E.default)();
        switch (u) {
            case v.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL:
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(_.Clickable, {
                        className: U.upsellClose,
                        onClick: s,
                        children: (0, r.jsx)(S.default, {})
                    }), (0, r.jsxs)("div", {
                        className: U.contentContainer,
                        children: [(0, r.jsx)("img", {
                            className: U.upsellImage,
                            src: b,
                            alt: A.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                        }), (0, r.jsx)(_.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: A.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
                        }), (0, r.jsx)(D, {
                            trialOffer: R,
                            discountOffer: C,
                            children: A.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                planName: (0, O.getDisplayNameFromSku)(c),
                                onClick: () => (0, p.transitionTo)(x.Routes.APPLICATION_STORE)
                            })
                        })]
                    }), (0, r.jsx)(B, {
                        subscriptionTier: c,
                        onClose: s,
                        analyticsLocationObject: {
                            section: x.AnalyticsSections.EXPRESSION_PICKER,
                            object: x.AnalyticsObjects.BUTTON_CTA
                        },
                        trialOffer: R,
                        discountOffer: C
                    })]
                });
            case v.PremiumUpsellTypes.STICKER_PICKER_UPSELL:
                return o(null != a, "You must specify children for this upsell type"), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: U.contentContainer,
                        children: [(0, r.jsx)("img", {
                            className: U.upsellImage,
                            src: b,
                            alt: A.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                        }), (0, r.jsx)(_.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: A.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
                        }), (0, r.jsx)(D, {
                            trialOffer: R,
                            discountOffer: C,
                            children: A.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                planName: (0, O.getDisplayNameFromSku)(c),
                                onClick: () => (0, p.transitionTo)(x.Routes.APPLICATION_STORE)
                            })
                        })]
                    }), (0, r.jsx)(B, {
                        subscriptionTier: c,
                        onClose: s,
                        analyticsLocationObject: {
                            section: x.AnalyticsSections.EXPRESSION_PICKER,
                            object: x.AnalyticsObjects.BUTTON_CTA
                        },
                        trialOffer: R,
                        discountOffer: C
                    })]
                });
            case v.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
                o(null != a, "You must specify children for this upsell type");
                let L = (0, m.isThemeLight)(h) ? n("602291") : n("609708");
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: U.contentContainer,
                        children: [(0, r.jsx)("img", {
                            alt: "",
                            className: U.upsellImage,
                            src: L
                        }), (0, r.jsx)(_.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: A.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
                        }), (0, r.jsx)(D, {
                            trialOffer: R,
                            discountOffer: C,
                            children: A.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL_NO_BOLD_V2.format({
                                planName: (0, O.getDisplayNameFromSku)(c),
                                onClick: () => (0, p.transitionTo)(x.Routes.APPLICATION_STORE)
                            })
                        })]
                    }), (0, r.jsx)(B, {
                        subscriptionTier: c,
                        onClose: s,
                        analyticsLocationObject: {
                            section: x.AnalyticsSections.EMOJI_PICKER_POPOUT,
                            object: x.AnalyticsObjects.BUTTON_CTA
                        },
                        trialOffer: R,
                        discountOffer: C
                    })]
                });
            case v.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
            case v.PremiumUpsellTypes.BURST_REACTION_UPSELL:
            case v.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
            case v.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                let N;
                switch (u) {
                    case v.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
                        N = A.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_WITH_SIZE_AND_ACTION_V2.format({
                            planName: (0, O.getDisplayNameFromSku)(c),
                            premiumMaxSize: c === v.PremiumSubscriptionSKUs.TIER_0 ? A.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED : A.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE,
                            onClick: () => {
                                (0, p.transitionTo)(x.Routes.APPLICATION_STORE), null == s || s()
                            }
                        });
                        break;
                    case v.PremiumUpsellTypes.BURST_REACTION_UPSELL:
                        N = A.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                            planName: (0, O.getDisplayNameFromSku)(c),
                            onClick: () => {
                                (0, p.transitionTo)(x.Routes.APPLICATION_STORE), null == s || s()
                            }
                        });
                        break;
                    case v.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
                        N = A.default.Messages.STREAM_PREMIUM_UPSELL_WITH_ACTION.format({
                            onClick: () => {
                                (0, p.transitionTo)(x.Routes.APPLICATION_STORE), null == s || s(), (0, f.closeAllModals)()
                            }
                        });
                        break;
                    case v.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                        N = A.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                            premiumMaxMessageLength: x.MAX_MESSAGE_LENGTH_PREMIUM,
                            onClick: () => {
                                (0, p.transitionTo)(x.Routes.APPLICATION_STORE), null == s || s()
                            }
                        })
                }
                return o(null != N, "There must be some upsell context"), (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: U.contentContainer,
                        children: [(0, r.jsx)(_.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: t
                        }), (0, r.jsx)(_.Text, {
                            variant: "text-md/normal",
                            children: i
                        }), (0, r.jsx)(D, {
                            trialOffer: R,
                            discountOffer: C,
                            children: N
                        })]
                    })
                });
            case v.PremiumUpsellTypes.BURST_REACTION_QUICK_ACTION_UPSELL:
                return (0, r.jsxs)("div", {
                    className: U.contentContainer,
                    children: [(0, r.jsx)(_.Heading, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        children: t
                    }), (0, r.jsx)(_.Text, {
                        variant: "text-md/normal",
                        children: i
                    }), (0, r.jsx)(D, {
                        trialOffer: R,
                        discountOffer: C,
                        children: A.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                            planName: (0, O.getDisplayNameFromSku)(c),
                            onClick: () => (0, p.transitionTo)(x.Routes.APPLICATION_STORE)
                        })
                    }), (0, r.jsx)(j, {
                        className: U.upsellButton,
                        subscriptionTier: c,
                        analyticsLocationObject: P,
                        onClose: s,
                        trialOffer: R,
                        discountOffer: C
                    })]
                });
            case v.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
                return o(null != a, "You must specify children for this upsell type"), (0, r.jsx)(D, {
                    trialOffer: R,
                    discountOffer: C,
                    children: A.default.Messages.CLIENT_THEMES_EDITOR_UPSELL.format({
                        onClick: () => {
                            (0, p.transitionTo)(x.Routes.APPLICATION_STORE), (0, T.closeEditor)()
                        }
                    })
                });
            case v.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
                return (0, r.jsxs)("div", {
                    className: l(U.messageLengthUpsellContainer, {
                        [U.messageLengthUpsellAppearAnimation]: !M
                    }),
                    children: [(0, r.jsx)(_.Text, {
                        variant: "text-lg/bold",
                        color: "status-danger",
                        children: i
                    }), (0, r.jsx)(_.Heading, {
                        variant: "heading-lg/extrabold",
                        color: "header-primary",
                        className: U.messageLengthUpsellHeader,
                        children: A.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT_NO_COUNT
                    }), (0, r.jsx)("div", {
                        className: U.divider
                    }), (0, r.jsx)(D, {
                        trialOffer: R,
                        discountOffer: C,
                        className: U.messageLengthBrandedContainer,
                        subscriptionTier: c,
                        children: A.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                            premiumMaxMessageLength: x.MAX_MESSAGE_LENGTH_PREMIUM,
                            onClick: () => {
                                (0, p.transitionTo)(x.Routes.APPLICATION_STORE), null == s || s()
                            }
                        })
                    }), (0, r.jsx)(j, {
                        subscriptionTier: c,
                        analyticsLocationObject: P,
                        onClose: s,
                        trialOffer: R,
                        discountOffer: C
                    })]
                });
            case v.PremiumUpsellTypes.CUSTOM_PROFILE_TRY_OUT_UPSELL:
            case v.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
                return (0, r.jsx)(k, {});
            case v.PremiumUpsellTypes.GUILD_CAP_MODAL_UPSELL:
            case v.PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL:
            case v.PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL:
            case v.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL:
            case v.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
            case v.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
            case v.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED:
                return (0, r.jsx)(w, {
                    trialOffer: R,
                    discountOffer: C,
                    headingText: t,
                    context: i,
                    children: a
                });
            default:
                return g.default.captureMessage("Possible mishandling of a PremiumUpsellType: ".concat(u)), (0, r.jsx)(w, {
                    headingText: t,
                    context: i,
                    children: a,
                    trialOffer: R,
                    discountOffer: C
                })
        }
    }
}