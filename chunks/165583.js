function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PremiumTrialGradientBadge: function() {
            return B
        },
        default: function() {
            return F
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("512722"),
        l = n.n(o),
        u = n("913527"),
        d = n.n(u),
        _ = n("442837"),
        c = n("952265"),
        E = n("780384"),
        I = n("481060"),
        T = n("410030"),
        f = n("607070"),
        S = n("238302"),
        h = n("703656"),
        A = n("465670"),
        m = n("483444"),
        N = n("599250"),
        p = n("466111"),
        O = n("74538"),
        R = n("960048"),
        C = n("98278"),
        g = n("639119"),
        L = n("197115"),
        v = n("823188"),
        D = n("474936"),
        M = n("981631"),
        y = n("689938"),
        P = n("873140"),
        U = n("867250");

    function b(e) {
        if (null == e) return null;
        let t = d()(e),
            n = t.diff(d()(), "h");
        if (n > 24) {
            let e = t.diff(d()(), "d");
            return y.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_DAYS.format({
                numDays: e
            })
        }
        if (n > 1) return y.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_HOURS.format({
            numHours: n
        });
        let i = t.diff(d()(), "minutes");
        return y.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_MINUTES.format({
            numMinutes: i
        })
    }

    function G(e) {
        var t, n, r;
        let {
            className: s,
            children: o,
            withBottomMargin: l,
            discountOffer: u,
            trialOffer: d
        } = e, _ = null !== (t = null == d ? void 0 : d.expires_at) && void 0 !== t ? t : null == u ? void 0 : u.expires_at, c = null == d ? void 0 : d.subscription_trial, E = null !== (r = null !== (n = e.subscriptionTier) && void 0 !== n ? n : null == c ? void 0 : c.sku_id) && void 0 !== r ? r : D.PremiumSubscriptionSKUs.TIER_2;
        return (0, i.jsxs)("div", {
            className: a()(s, P.gradientUpsellWrapper, {
                [P.gradientUpsellWrapperTier0]: E === D.PremiumSubscriptionSKUs.TIER_0,
                [P.gradientUpsellWrapperTier2]: E === D.PremiumSubscriptionSKUs.TIER_2,
                [P.gradientUpsellWrapperWithBottomMargin]: l
            }),
            children: [(0, i.jsxs)("div", {
                className: P.logo,
                children: [(0, i.jsx)(p.default, {
                    className: P.logoIcon
                }), E === D.PremiumSubscriptionSKUs.TIER_0 && (0, i.jsx)(N.default, {
                    className: P.logoWordmark
                }), E === D.PremiumSubscriptionSKUs.TIER_2 && (0, i.jsx)(m.default, {
                    className: P.logoWordmark
                })]
            }), (0, i.jsx)(I.Text, {
                variant: "text-md/medium",
                className: P.copy,
                color: "none",
                children: o
            }), (0, i.jsx)(v.PremiumPillWithSparkles, {
                text: null != u ? y.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                    percent: u.discount.amount
                }) : y.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                colorOptions: E === D.PremiumSubscriptionSKUs.TIER_0 ? v.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : v.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
            }), (0, i.jsx)(I.Text, {
                variant: "eyebrow",
                className: P.countdownText,
                children: b(_)
            })]
        })
    }

    function w(e) {
        var t, n;
        let {
            className: s,
            onClose: a,
            subscriptionTier: o,
            analyticsLocationObject: l,
            trialOffer: u,
            discountOffer: d
        } = e, [_, c] = r.useState(!1), E = null != d ? y.default.Messages.PREMIUM_DISCOUNT_CTA.format({
            percent: d.discount.amount
        }) : (0, O.formatTrialCtaIntervalDuration)({
            intervalType: null == u ? void 0 : null === (t = u.subscription_trial) || void 0 === t ? void 0 : t.interval,
            intervalCount: null == u ? void 0 : null === (n = u.subscription_trial) || void 0 === n ? void 0 : n.interval_count
        });
        return (0, i.jsx)(L.default, {
            className: s,
            subscriptionTier: o,
            trialId: null == u ? void 0 : u.trial_id,
            submitting: _,
            premiumModalAnalyticsLocation: l,
            size: I.Button.Sizes.MEDIUM,
            color: I.Button.Colors.GREEN,
            onClick: () => {
                c(!0)
            },
            onSubscribeModalClose: e => {
                c(!1), e && (null == a || a())
            },
            buttonText: E
        })
    }

    function B(e) {
        var t, n;
        let r = null === (t = (0, g.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial,
            s = null !== (n = null == r ? void 0 : r.sku_id) && void 0 !== n ? n : D.PremiumSubscriptionSKUs.TIER_2;
        return (0, i.jsx)(I.Text, {
            variant: "text-xs/bold",
            className: a()(P.trialBadge, e.className, {
                [P.trialBadgeGradientTier0]: s === D.PremiumSubscriptionSKUs.TIER_0,
                [P.trialBadgeGradientTier2]: s === D.PremiumSubscriptionSKUs.TIER_2
            }),
            color: "none",
            children: (0, O.formatTrialOfferIntervalDuration)({
                intervalType: null == r ? void 0 : r.interval,
                intervalCount: null == r ? void 0 : r.interval_count
            })
        })
    }

    function k(e) {
        let {
            subscriptionTier: t,
            onClose: n,
            analyticsLocationObject: r,
            trialOffer: s,
            discountOffer: a
        } = e;
        return (0, i.jsxs)("div", {
            className: P.footer,
            children: [(0, i.jsx)(I.Button, {
                onClick: n,
                size: I.Button.Sizes.SMALL,
                look: I.ButtonLooks.BLANK,
                className: P.cancelButton,
                children: y.default.Messages.CLOSE
            }), (0, i.jsx)(w, {
                className: P.subscribeButton,
                subscriptionTier: t,
                analyticsLocationObject: r,
                onClose: n,
                discountOffer: a,
                trialOffer: s
            })]
        })
    }

    function V(e) {
        let {
            onClose: t,
            analyticsLocationObject: n
        } = e, r = (0, g.usePremiumTrialOffer)();
        return (0, i.jsxs)("div", {
            className: P.tryOutUpsellContainer,
            children: [(0, i.jsx)(v.PremiumPillWithSparkles, {
                className: P.topRimPill,
                text: y.default.Messages.PREMIUM_FREE_NITRO_TRIAL_TEXT,
                colorOptions: v.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
            }), (0, i.jsx)(I.Heading, {
                variant: "heading-md/semibold",
                color: "text-normal",
                children: y.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_TRIAL_DESCRIPTION.format({
                    onClick: C.navigateToPremiumMarketingPage
                })
            }), (0, i.jsx)(w, {
                trialOffer: r,
                className: P.subscribeButtonWide,
                subscriptionTier: D.PremiumSubscriptionSKUs.TIER_2,
                analyticsLocationObject: n,
                onClose: t
            }), (0, i.jsx)(I.Text, {
                variant: "eyebrow",
                className: P.countdownTextInSetting,
                children: b(null == r ? void 0 : r.expires_at)
            })]
        })
    }

    function x(e) {
        let {
            headingText: t,
            context: n,
            children: r,
            trialOffer: s,
            discountOffer: a
        } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(I.Heading, {
                className: P.__invalid_header,
                variant: "heading-xl/semibold",
                children: t
            }), null != n && (0, i.jsx)(I.Text, {
                className: P.context,
                variant: "text-md/normal",
                children: n
            }), (0, i.jsx)(G, {
                trialOffer: s,
                discountOffer: a,
                children: r
            })]
        })
    }

    function F(e) {
        let {
            headingText: t,
            context: r,
            children: s,
            onClose: o,
            type: u,
            subscriptionTier: d,
            analyticsLocationObject: m,
            trialOffer: N,
            discountOffer: p
        } = e, C = (0, _.useStateFromStores)([f.default], () => f.default.useReducedMotion), g = (0, T.default)();
        switch (u) {
            case D.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL:
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(I.Clickable, {
                        className: P.upsellClose,
                        onClick: o,
                        children: (0, i.jsx)(A.default, {})
                    }), (0, i.jsxs)("div", {
                        className: P.contentContainer,
                        children: [(0, i.jsx)("img", {
                            className: P.upsellImage,
                            src: U,
                            alt: y.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                        }), (0, i.jsx)(I.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: y.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
                        }), (0, i.jsx)(G, {
                            trialOffer: N,
                            discountOffer: p,
                            children: y.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                planName: (0, O.getDisplayNameFromSku)(d),
                                onClick: () => (0, h.transitionTo)(M.Routes.APPLICATION_STORE)
                            })
                        })]
                    }), (0, i.jsx)(k, {
                        subscriptionTier: d,
                        onClose: o,
                        analyticsLocationObject: {
                            section: M.AnalyticsSections.EXPRESSION_PICKER,
                            object: M.AnalyticsObjects.BUTTON_CTA
                        },
                        trialOffer: N,
                        discountOffer: p
                    })]
                });
            case D.PremiumUpsellTypes.STICKER_PICKER_UPSELL:
                return l()(null != s, "You must specify children for this upsell type"), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("div", {
                        className: P.contentContainer,
                        children: [(0, i.jsx)("img", {
                            className: P.upsellImage,
                            src: U,
                            alt: y.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                        }), (0, i.jsx)(I.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: y.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
                        }), (0, i.jsx)(G, {
                            trialOffer: N,
                            discountOffer: p,
                            children: y.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                planName: (0, O.getDisplayNameFromSku)(d),
                                onClick: () => (0, h.transitionTo)(M.Routes.APPLICATION_STORE)
                            })
                        })]
                    }), (0, i.jsx)(k, {
                        subscriptionTier: d,
                        onClose: o,
                        analyticsLocationObject: {
                            section: M.AnalyticsSections.EXPRESSION_PICKER,
                            object: M.AnalyticsObjects.BUTTON_CTA
                        },
                        trialOffer: N,
                        discountOffer: p
                    })]
                });
            case D.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
                l()(null != s, "You must specify children for this upsell type");
                let L = (0, E.isThemeLight)(g) ? n("537381") : n("341048");
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("div", {
                        className: P.contentContainer,
                        children: [(0, i.jsx)("img", {
                            alt: "",
                            className: P.upsellImage,
                            src: L
                        }), (0, i.jsx)(I.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: y.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
                        }), (0, i.jsx)(G, {
                            trialOffer: N,
                            discountOffer: p,
                            children: y.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL_NO_BOLD_V2.format({
                                planName: (0, O.getDisplayNameFromSku)(d),
                                onClick: () => (0, h.transitionTo)(M.Routes.APPLICATION_STORE)
                            })
                        })]
                    }), (0, i.jsx)(k, {
                        subscriptionTier: d,
                        onClose: o,
                        analyticsLocationObject: {
                            section: M.AnalyticsSections.EMOJI_PICKER_POPOUT,
                            object: M.AnalyticsObjects.BUTTON_CTA
                        },
                        trialOffer: N,
                        discountOffer: p
                    })]
                });
            case D.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
            case D.PremiumUpsellTypes.BURST_REACTION_UPSELL:
            case D.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
            case D.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                let v;
                switch (u) {
                    case D.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
                        v = y.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_WITH_SIZE_AND_ACTION_V2.format({
                            planName: (0, O.getDisplayNameFromSku)(d),
                            premiumMaxSize: d === D.PremiumSubscriptionSKUs.TIER_0 ? y.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED : y.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE,
                            onClick: () => {
                                (0, h.transitionTo)(M.Routes.APPLICATION_STORE), null == o || o()
                            }
                        });
                        break;
                    case D.PremiumUpsellTypes.BURST_REACTION_UPSELL:
                        v = y.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                            planName: (0, O.getDisplayNameFromSku)(d),
                            onClick: () => {
                                (0, h.transitionTo)(M.Routes.APPLICATION_STORE), null == o || o()
                            }
                        });
                        break;
                    case D.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
                        v = y.default.Messages.STREAM_PREMIUM_UPSELL_WITH_ACTION.format({
                            onClick: () => {
                                (0, h.transitionTo)(M.Routes.APPLICATION_STORE), null == o || o(), (0, c.closeAllModals)()
                            }
                        });
                        break;
                    case D.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                        v = y.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                            premiumMaxMessageLength: M.MAX_MESSAGE_LENGTH_PREMIUM,
                            onClick: () => {
                                (0, h.transitionTo)(M.Routes.APPLICATION_STORE), null == o || o()
                            }
                        })
                }
                return l()(null != v, "There must be some upsell context"), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        className: P.contentContainer,
                        children: [(0, i.jsx)(I.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: t
                        }), (0, i.jsx)(I.Text, {
                            variant: "text-md/normal",
                            children: r
                        }), (0, i.jsx)(G, {
                            trialOffer: N,
                            discountOffer: p,
                            children: v
                        })]
                    })
                });
            case D.PremiumUpsellTypes.BURST_REACTION_QUICK_ACTION_UPSELL:
                return (0, i.jsxs)("div", {
                    className: P.contentContainer,
                    children: [(0, i.jsx)(I.Heading, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        children: t
                    }), (0, i.jsx)(I.Text, {
                        variant: "text-md/normal",
                        children: r
                    }), (0, i.jsx)(G, {
                        trialOffer: N,
                        discountOffer: p,
                        children: y.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                            planName: (0, O.getDisplayNameFromSku)(d),
                            onClick: () => (0, h.transitionTo)(M.Routes.APPLICATION_STORE)
                        })
                    }), (0, i.jsx)(w, {
                        className: P.upsellButton,
                        subscriptionTier: d,
                        analyticsLocationObject: m,
                        onClose: o,
                        trialOffer: N,
                        discountOffer: p
                    })]
                });
            case D.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
                return l()(null != s, "You must specify children for this upsell type"), (0, i.jsx)(G, {
                    trialOffer: N,
                    discountOffer: p,
                    children: y.default.Messages.CLIENT_THEMES_EDITOR_UPSELL.format({
                        onClick: () => {
                            (0, h.transitionTo)(M.Routes.APPLICATION_STORE), (0, S.closeEditor)()
                        }
                    })
                });
            case D.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
                return (0, i.jsxs)("div", {
                    className: a()(P.messageLengthUpsellContainer, {
                        [P.messageLengthUpsellAppearAnimation]: !C
                    }),
                    children: [(0, i.jsx)(I.Text, {
                        variant: "text-lg/bold",
                        color: "status-danger",
                        children: r
                    }), (0, i.jsx)(I.Heading, {
                        variant: "heading-lg/extrabold",
                        color: "header-primary",
                        className: P.messageLengthUpsellHeader,
                        children: y.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT_NO_COUNT
                    }), (0, i.jsx)("div", {
                        className: P.divider
                    }), (0, i.jsx)(G, {
                        trialOffer: N,
                        discountOffer: p,
                        className: P.messageLengthBrandedContainer,
                        subscriptionTier: d,
                        children: y.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                            premiumMaxMessageLength: M.MAX_MESSAGE_LENGTH_PREMIUM,
                            onClick: () => {
                                (0, h.transitionTo)(M.Routes.APPLICATION_STORE), null == o || o()
                            }
                        })
                    }), (0, i.jsx)(w, {
                        subscriptionTier: d,
                        analyticsLocationObject: m,
                        onClose: o,
                        trialOffer: N,
                        discountOffer: p
                    })]
                });
            case D.PremiumUpsellTypes.CUSTOM_PROFILE_TRY_OUT_UPSELL:
            case D.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
                return (0, i.jsx)(V, {});
            case D.PremiumUpsellTypes.GUILD_CAP_MODAL_UPSELL:
            case D.PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL:
            case D.PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL:
            case D.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL:
            case D.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
            case D.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
            case D.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED:
                return (0, i.jsx)(x, {
                    trialOffer: N,
                    discountOffer: p,
                    headingText: t,
                    context: r,
                    children: s
                });
            default:
                return R.default.captureMessage("Possible mishandling of a PremiumUpsellType: ".concat(u)), (0, i.jsx)(x, {
                    headingText: t,
                    context: r,
                    children: s,
                    trialOffer: N,
                    discountOffer: p
                })
        }
    }
}