function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PremiumTrialGradientBadge: function() {
            return F
        },
        default: function() {
            return H
        }
    }), n("222007");
    var r = n("37983"),
        i = n("884691"),
        l = n("414456"),
        a = n.n(l),
        s = n("627445"),
        o = n.n(s),
        u = n("866227"),
        c = n.n(u),
        d = n("446674"),
        f = n("551042"),
        m = n("819855"),
        _ = n("77078"),
        E = n("841098"),
        T = n("206230"),
        I = n("32531"),
        C = n("393414"),
        p = n("945330"),
        S = n("41250"),
        P = n("379863"),
        R = n("216422"),
        L = n("719923"),
        O = n("286235"),
        M = n("626301"),
        g = n("917247"),
        h = n("635956"),
        x = n("400307"),
        N = n("646718"),
        v = n("49111"),
        A = n("782340"),
        U = n("821535"),
        b = n("481927");

    function D(e) {
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

    function y(e) {
        var t, n, i;
        let {
            className: l,
            children: s,
            withBottomMargin: o,
            discountOffer: u,
            trialOffer: c
        } = e, d = null !== (t = null == c ? void 0 : c.expires_at) && void 0 !== t ? t : null == u ? void 0 : u.expires_at, f = null == c ? void 0 : c.subscription_trial, m = null !== (i = null !== (n = e.subscriptionTier) && void 0 !== n ? n : null == f ? void 0 : f.sku_id) && void 0 !== i ? i : N.PremiumSubscriptionSKUs.TIER_2;
        return (0, r.jsxs)("div", {
            className: a(l, U.gradientUpsellWrapper, {
                [U.gradientUpsellWrapperTier0]: m === N.PremiumSubscriptionSKUs.TIER_0,
                [U.gradientUpsellWrapperTier2]: m === N.PremiumSubscriptionSKUs.TIER_2,
                [U.gradientUpsellWrapperWithBottomMargin]: o
            }),
            children: [(0, r.jsxs)("div", {
                className: U.logo,
                children: [(0, r.jsx)(R.default, {
                    className: U.logoIcon
                }), m === N.PremiumSubscriptionSKUs.TIER_0 && (0, r.jsx)(P.default, {
                    className: U.logoWordmark
                }), m === N.PremiumSubscriptionSKUs.TIER_2 && (0, r.jsx)(S.default, {
                    className: U.logoWordmark
                })]
            }), (0, r.jsx)(_.Text, {
                variant: "text-md/medium",
                className: U.copy,
                color: "none",
                children: s
            }), (0, r.jsx)(x.PremiumPillWithSparkles, {
                text: null != u ? A.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                    percent: u.discount.amount
                }) : A.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                colorOptions: m === N.PremiumSubscriptionSKUs.TIER_0 ? x.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : x.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
            }), (0, r.jsx)(_.Text, {
                variant: "eyebrow",
                className: U.countdownText,
                children: D(d)
            })]
        })
    }

    function j(e) {
        var t, n;
        let {
            className: l,
            onClose: a,
            subscriptionTier: s,
            analyticsLocationObject: o,
            trialOffer: u,
            discountOffer: c
        } = e, [d, f] = i.useState(!1), m = null != c ? A.default.Messages.PREMIUM_DISCOUNT_CTA.format({
            percent: c.discount.amount
        }) : (0, L.formatTrialCtaIntervalDuration)({
            intervalType: null == u ? void 0 : null === (t = u.subscription_trial) || void 0 === t ? void 0 : t.interval,
            intervalCount: null == u ? void 0 : null === (n = u.subscription_trial) || void 0 === n ? void 0 : n.interval_count
        });
        return (0, r.jsx)(h.default, {
            className: l,
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
                f(!1), e && (null == a || a())
            },
            buttonText: m
        })
    }

    function F(e) {
        var t, n;
        let i = null === (t = (0, g.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial,
            l = null !== (n = null == i ? void 0 : i.sku_id) && void 0 !== n ? n : N.PremiumSubscriptionSKUs.TIER_2;
        return (0, r.jsx)(_.Text, {
            variant: "text-xs/bold",
            className: a(U.trialBadge, e.className, {
                [U.trialBadgeGradientTier0]: l === N.PremiumSubscriptionSKUs.TIER_0,
                [U.trialBadgeGradientTier2]: l === N.PremiumSubscriptionSKUs.TIER_2
            }),
            color: "none",
            children: (0, L.formatTrialOfferIntervalDuration)({
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
            trialOffer: l,
            discountOffer: a
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
                discountOffer: a,
                trialOffer: l
            })]
        })
    }

    function w(e) {
        let {
            onClose: t,
            analyticsLocationObject: n
        } = e, i = (0, g.usePremiumTrialOffer)();
        return (0, r.jsxs)("div", {
            className: U.tryOutUpsellContainer,
            children: [(0, r.jsx)(x.PremiumPillWithSparkles, {
                className: U.topRimPill,
                text: A.default.Messages.PREMIUM_FREE_NITRO_TRIAL_TEXT,
                colorOptions: x.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
            }), (0, r.jsx)(_.Heading, {
                variant: "heading-md/semibold",
                color: "text-normal",
                children: A.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_TRIAL_DESCRIPTION.format({
                    onClick: M.navigateToPremiumMarketingPage
                })
            }), (0, r.jsx)(j, {
                trialOffer: i,
                className: U.subscribeButtonWide,
                subscriptionTier: N.PremiumSubscriptionSKUs.TIER_2,
                analyticsLocationObject: n,
                onClose: t
            }), (0, r.jsx)(_.Text, {
                variant: "eyebrow",
                className: U.countdownTextInSetting,
                children: D(null == i ? void 0 : i.expires_at)
            })]
        })
    }

    function k(e) {
        let {
            headingText: t,
            context: n,
            children: i,
            trialOffer: l,
            discountOffer: a
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
            }), (0, r.jsx)(y, {
                trialOffer: l,
                discountOffer: a,
                children: i
            })]
        })
    }

    function H(e) {
        let {
            headingText: t,
            context: i,
            children: l,
            onClose: s,
            type: u,
            subscriptionTier: c,
            analyticsLocationObject: S,
            trialOffer: P,
            discountOffer: R
        } = e, M = (0, d.useStateFromStores)([T.default], () => T.default.useReducedMotion), g = (0, E.default)();
        switch (u) {
            case N.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL:
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(_.Clickable, {
                        className: U.upsellClose,
                        onClick: s,
                        children: (0, r.jsx)(p.default, {})
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
                        }), (0, r.jsx)(y, {
                            trialOffer: P,
                            discountOffer: R,
                            children: A.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                planName: (0, L.getDisplayNameFromSku)(c),
                                onClick: () => (0, C.transitionTo)(v.Routes.APPLICATION_STORE)
                            })
                        })]
                    }), (0, r.jsx)(B, {
                        subscriptionTier: c,
                        onClose: s,
                        analyticsLocationObject: {
                            section: v.AnalyticsSections.EXPRESSION_PICKER,
                            object: v.AnalyticsObjects.BUTTON_CTA
                        },
                        trialOffer: P,
                        discountOffer: R
                    })]
                });
            case N.PremiumUpsellTypes.STICKER_PICKER_UPSELL:
                return o(null != l, "You must specify children for this upsell type"), (0, r.jsxs)(r.Fragment, {
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
                        }), (0, r.jsx)(y, {
                            trialOffer: P,
                            discountOffer: R,
                            children: A.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                planName: (0, L.getDisplayNameFromSku)(c),
                                onClick: () => (0, C.transitionTo)(v.Routes.APPLICATION_STORE)
                            })
                        })]
                    }), (0, r.jsx)(B, {
                        subscriptionTier: c,
                        onClose: s,
                        analyticsLocationObject: {
                            section: v.AnalyticsSections.EXPRESSION_PICKER,
                            object: v.AnalyticsObjects.BUTTON_CTA
                        },
                        trialOffer: P,
                        discountOffer: R
                    })]
                });
            case N.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
                o(null != l, "You must specify children for this upsell type");
                let h = (0, m.isThemeLight)(g) ? n("602291") : n("609708");
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: U.contentContainer,
                        children: [(0, r.jsx)("img", {
                            alt: "",
                            className: U.upsellImage,
                            src: h
                        }), (0, r.jsx)(_.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: A.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
                        }), (0, r.jsx)(y, {
                            trialOffer: P,
                            discountOffer: R,
                            children: A.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL_NO_BOLD_V2.format({
                                planName: (0, L.getDisplayNameFromSku)(c),
                                onClick: () => (0, C.transitionTo)(v.Routes.APPLICATION_STORE)
                            })
                        })]
                    }), (0, r.jsx)(B, {
                        subscriptionTier: c,
                        onClose: s,
                        analyticsLocationObject: {
                            section: v.AnalyticsSections.EMOJI_PICKER_POPOUT,
                            object: v.AnalyticsObjects.BUTTON_CTA
                        },
                        trialOffer: P,
                        discountOffer: R
                    })]
                });
            case N.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
            case N.PremiumUpsellTypes.BURST_REACTION_UPSELL:
            case N.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
            case N.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                let x;
                switch (u) {
                    case N.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
                        x = A.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_WITH_SIZE_AND_ACTION_V2.format({
                            planName: (0, L.getDisplayNameFromSku)(c),
                            premiumMaxSize: c === N.PremiumSubscriptionSKUs.TIER_0 ? A.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED : A.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE,
                            onClick: () => {
                                (0, C.transitionTo)(v.Routes.APPLICATION_STORE), null == s || s()
                            }
                        });
                        break;
                    case N.PremiumUpsellTypes.BURST_REACTION_UPSELL:
                        x = A.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                            planName: (0, L.getDisplayNameFromSku)(c),
                            onClick: () => {
                                (0, C.transitionTo)(v.Routes.APPLICATION_STORE), null == s || s()
                            }
                        });
                        break;
                    case N.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
                        x = A.default.Messages.STREAM_PREMIUM_UPSELL_WITH_ACTION.format({
                            onClick: () => {
                                (0, C.transitionTo)(v.Routes.APPLICATION_STORE), null == s || s(), (0, f.closeAllModals)()
                            }
                        });
                        break;
                    case N.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                        x = A.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                            premiumMaxMessageLength: v.MAX_MESSAGE_LENGTH_PREMIUM,
                            onClick: () => {
                                (0, C.transitionTo)(v.Routes.APPLICATION_STORE), null == s || s()
                            }
                        })
                }
                return o(null != x, "There must be some upsell context"), (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: U.contentContainer,
                        children: [(0, r.jsx)(_.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: t
                        }), (0, r.jsx)(_.Text, {
                            variant: "text-md/normal",
                            children: i
                        }), (0, r.jsx)(y, {
                            trialOffer: P,
                            discountOffer: R,
                            children: x
                        })]
                    })
                });
            case N.PremiumUpsellTypes.BURST_REACTION_QUICK_ACTION_UPSELL:
                return (0, r.jsxs)("div", {
                    className: U.contentContainer,
                    children: [(0, r.jsx)(_.Heading, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        children: t
                    }), (0, r.jsx)(_.Text, {
                        variant: "text-md/normal",
                        children: i
                    }), (0, r.jsx)(y, {
                        trialOffer: P,
                        discountOffer: R,
                        children: A.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                            planName: (0, L.getDisplayNameFromSku)(c),
                            onClick: () => (0, C.transitionTo)(v.Routes.APPLICATION_STORE)
                        })
                    }), (0, r.jsx)(j, {
                        className: U.upsellButton,
                        subscriptionTier: c,
                        analyticsLocationObject: S,
                        onClose: s,
                        trialOffer: P,
                        discountOffer: R
                    })]
                });
            case N.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
                return o(null != l, "You must specify children for this upsell type"), (0, r.jsx)(y, {
                    trialOffer: P,
                    discountOffer: R,
                    children: A.default.Messages.CLIENT_THEMES_EDITOR_UPSELL.format({
                        onClick: () => {
                            (0, C.transitionTo)(v.Routes.APPLICATION_STORE), (0, I.closeEditor)()
                        }
                    })
                });
            case N.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
                return (0, r.jsxs)("div", {
                    className: a(U.messageLengthUpsellContainer, {
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
                    }), (0, r.jsx)(y, {
                        trialOffer: P,
                        discountOffer: R,
                        className: U.messageLengthBrandedContainer,
                        subscriptionTier: c,
                        children: A.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                            premiumMaxMessageLength: v.MAX_MESSAGE_LENGTH_PREMIUM,
                            onClick: () => {
                                (0, C.transitionTo)(v.Routes.APPLICATION_STORE), null == s || s()
                            }
                        })
                    }), (0, r.jsx)(j, {
                        subscriptionTier: c,
                        analyticsLocationObject: S,
                        onClose: s,
                        trialOffer: P,
                        discountOffer: R
                    })]
                });
            case N.PremiumUpsellTypes.CUSTOM_PROFILE_TRY_OUT_UPSELL:
            case N.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
                return (0, r.jsx)(w, {});
            case N.PremiumUpsellTypes.GUILD_CAP_MODAL_UPSELL:
            case N.PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL:
            case N.PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL:
            case N.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL:
            case N.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
            case N.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
            case N.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED:
                return (0, r.jsx)(k, {
                    trialOffer: P,
                    discountOffer: R,
                    headingText: t,
                    context: i,
                    children: l
                });
            default:
                return O.default.captureMessage("Possible mishandling of a PremiumUpsellType: ".concat(u)), (0, r.jsx)(k, {
                    headingText: t,
                    context: i,
                    children: l,
                    trialOffer: P,
                    discountOffer: R
                })
        }
    }
}