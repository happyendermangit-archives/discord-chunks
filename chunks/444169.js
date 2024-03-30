function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PremiumTrialGradientBadge: function() {
            return B
        },
        default: function() {
            return H
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("512722"),
        u = n.n(a),
        s = n("913527"),
        l = n.n(s),
        c = n("898511"),
        f = n("67381"),
        d = n("751848"),
        _ = n("784184"),
        E = n("523263"),
        p = n("622780"),
        m = n("872042"),
        y = n("163291"),
        I = n("247164"),
        h = n("58038"),
        O = n("178960"),
        T = n("412791"),
        S = n("830721"),
        v = n("285910"),
        g = n("150736"),
        A = n("844615"),
        b = n("742971"),
        N = n("774271"),
        R = n("868615"),
        C = n("281767"),
        P = n("941504"),
        D = n("641235"),
        L = n("867250");

    function M(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function U(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function w(e) {
        if (null == e) return null;
        var t = l()(e),
            n = t.diff(l()(), "h");
        if (n > 24) {
            var r = t.diff(l()(), "d");
            return P.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_DAYS.format({
                numDays: r
            })
        }
        if (n > 1) return P.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_HOURS.format({
            numHours: n
        });
        var o = t.diff(l()(), "minutes");
        return P.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_MINUTES.format({
            numMinutes: o
        })
    }

    function k(e) {
        var t, n, o, a, u = e.className,
            s = e.children,
            l = e.withBottomMargin,
            c = e.discountOffer,
            f = e.trialOffer,
            d = null !== (t = null == f ? void 0 : f.expires_at) && void 0 !== t ? t : null == c ? void 0 : c.expires_at,
            E = null == f ? void 0 : f.subscription_trial,
            p = null !== (o = null !== (n = e.subscriptionTier) && void 0 !== n ? n : null == E ? void 0 : E.sku_id) && void 0 !== o ? o : R.PremiumSubscriptionSKUs.TIER_2;
        return r.createElement("div", {
            className: i()(u, D.gradientUpsellWrapper, (U(a = {}, D.gradientUpsellWrapperTier0, p === R.PremiumSubscriptionSKUs.TIER_0), U(a, D.gradientUpsellWrapperTier2, p === R.PremiumSubscriptionSKUs.TIER_2), U(a, D.gradientUpsellWrapperWithBottomMargin, l), a))
        }, r.createElement("div", {
            className: D.logo
        }, r.createElement(T.default, {
            className: D.logoIcon
        }), p === R.PremiumSubscriptionSKUs.TIER_0 && r.createElement(O.default, {
            className: D.logoWordmark
        }), p === R.PremiumSubscriptionSKUs.TIER_2 && r.createElement(h.default, {
            className: D.logoWordmark
        })), r.createElement(_.Text, {
            variant: "text-md/medium",
            className: D.copy,
            color: "none"
        }, s), r.createElement(N.PremiumPillWithSparkles, {
            text: null != c ? P.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                percent: c.discount.amount
            }) : P.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
            colorOptions: p === R.PremiumSubscriptionSKUs.TIER_0 ? N.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : N.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
        }), r.createElement(_.Text, {
            variant: "eyebrow",
            className: D.countdownText
        }, w(d)))
    }

    function G(e) {
        var t, n, o, i, a = e.className,
            u = e.onClose,
            s = e.subscriptionTier,
            l = e.analyticsLocationObject,
            c = e.trialOffer,
            f = e.discountOffer;
        var d = (t = r.useState(!1), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return M(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return M(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            E = d[0],
            p = d[1],
            m = null != f ? P.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                percent: f.discount.amount
            }) : (0, S.formatTrialCtaIntervalDuration)({
                intervalType: null == c ? void 0 : null === (o = c.subscription_trial) || void 0 === o ? void 0 : o.interval,
                intervalCount: null == c ? void 0 : null === (i = c.subscription_trial) || void 0 === i ? void 0 : i.interval_count
            });
        return r.createElement(b.default, {
            className: a,
            subscriptionTier: s,
            trialId: null == c ? void 0 : c.trial_id,
            submitting: E,
            premiumModalAnalyticsLocation: l,
            size: _.Button.Sizes.MEDIUM,
            color: _.Button.Colors.GREEN,
            onClick: function() {
                p(!0)
            },
            onSubscribeModalClose: function(e) {
                p(!1), e && (null == u || u())
            },
            buttonText: m
        })
    }

    function B(e) {
        var t, n, o, a = null === (t = (0, A.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial,
            u = null !== (n = null == a ? void 0 : a.sku_id) && void 0 !== n ? n : R.PremiumSubscriptionSKUs.TIER_2;
        return r.createElement(_.Text, {
            variant: "text-xs/bold",
            className: i()(D.trialBadge, e.className, (U(o = {}, D.trialBadgeGradientTier0, u === R.PremiumSubscriptionSKUs.TIER_0), U(o, D.trialBadgeGradientTier2, u === R.PremiumSubscriptionSKUs.TIER_2), o)),
            color: "none"
        }, (0, S.formatTrialOfferIntervalDuration)({
            intervalType: null == a ? void 0 : a.interval,
            intervalCount: null == a ? void 0 : a.interval_count
        }))
    }

    function j(e) {
        var t = e.subscriptionTier,
            n = e.onClose,
            o = e.analyticsLocationObject,
            i = e.trialOffer,
            a = e.discountOffer;
        return r.createElement("div", {
            className: D.footer
        }, r.createElement(_.Button, {
            onClick: n,
            size: _.Button.Sizes.SMALL,
            look: _.ButtonLooks.BLANK,
            className: D.cancelButton
        }, P.default.Messages.CLOSE), r.createElement(G, {
            className: D.subscribeButton,
            subscriptionTier: t,
            analyticsLocationObject: o,
            onClose: n,
            discountOffer: a,
            trialOffer: i
        }))
    }

    function F(e) {
        var t = e.onClose,
            n = e.analyticsLocationObject,
            o = (0, A.usePremiumTrialOffer)();
        return r.createElement("div", {
            className: D.tryOutUpsellContainer
        }, r.createElement(N.PremiumPillWithSparkles, {
            className: D.topRimPill,
            text: P.default.Messages.PREMIUM_FREE_NITRO_TRIAL_TEXT,
            colorOptions: N.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
        }), r.createElement(_.Heading, {
            variant: "heading-md/semibold",
            color: "text-normal"
        }, P.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_TRIAL_DESCRIPTION.format({
            onClick: g.navigateToPremiumMarketingPage
        })), r.createElement(G, {
            trialOffer: o,
            className: D.subscribeButtonWide,
            subscriptionTier: R.PremiumSubscriptionSKUs.TIER_2,
            analyticsLocationObject: n,
            onClose: t
        }), r.createElement(_.Text, {
            variant: "eyebrow",
            className: D.countdownTextInSetting
        }, w(null == o ? void 0 : o.expires_at)))
    }

    function V(e) {
        var t = e.headingText,
            n = e.context,
            o = e.children,
            i = e.trialOffer,
            a = e.discountOffer;
        return r.createElement(r.Fragment, null, r.createElement(_.Heading, {
            className: D.__invalid_header,
            variant: "heading-xl/semibold"
        }, t), null != n && r.createElement(_.Text, {
            className: D.context,
            variant: "text-md/normal"
        }, n), r.createElement(k, {
            trialOffer: i,
            discountOffer: a
        }, o))
    }

    function H(e) {
        var t, o = e.headingText,
            a = e.context,
            s = e.children,
            l = e.onClose,
            h = e.type,
            O = e.subscriptionTier,
            T = e.analyticsLocationObject,
            g = e.trialOffer,
            A = e.discountOffer,
            b = (0, c.useStateFromStores)([p.default], function() {
                return p.default.useReducedMotion
            }),
            N = (0, E.default)();
        switch (h) {
            case R.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL:
                return r.createElement(r.Fragment, null, r.createElement(_.Clickable, {
                    className: D.upsellClose,
                    onClick: l
                }, r.createElement(I.default, null)), r.createElement("div", {
                    className: D.contentContainer
                }, r.createElement("img", {
                    className: D.upsellImage,
                    src: L,
                    alt: P.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                }), r.createElement(_.Heading, {
                    variant: "heading-xl/bold",
                    color: "header-primary"
                }, P.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE), r.createElement(k, {
                    trialOffer: g,
                    discountOffer: A
                }, P.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                    planName: (0, S.getDisplayNameFromSku)(O),
                    onClick: function() {
                        return (0, y.transitionTo)(C.Routes.APPLICATION_STORE)
                    }
                }))), r.createElement(j, {
                    subscriptionTier: O,
                    onClose: l,
                    analyticsLocationObject: {
                        section: C.AnalyticsSections.EXPRESSION_PICKER,
                        object: C.AnalyticsObjects.BUTTON_CTA
                    },
                    trialOffer: g,
                    discountOffer: A
                }));
            case R.PremiumUpsellTypes.STICKER_PICKER_UPSELL:
                return u()(null != s, "You must specify children for this upsell type"), r.createElement(r.Fragment, null, r.createElement("div", {
                    className: D.contentContainer
                }, r.createElement("img", {
                    className: D.upsellImage,
                    src: L,
                    alt: P.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                }), r.createElement(_.Heading, {
                    variant: "heading-xl/bold",
                    color: "header-primary"
                }, P.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE), r.createElement(k, {
                    trialOffer: g,
                    discountOffer: A
                }, P.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                    planName: (0, S.getDisplayNameFromSku)(O),
                    onClick: function() {
                        return (0, y.transitionTo)(C.Routes.APPLICATION_STORE)
                    }
                }))), r.createElement(j, {
                    subscriptionTier: O,
                    onClose: l,
                    analyticsLocationObject: {
                        section: C.AnalyticsSections.EXPRESSION_PICKER,
                        object: C.AnalyticsObjects.BUTTON_CTA
                    },
                    trialOffer: g,
                    discountOffer: A
                }));
            case R.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
                u()(null != s, "You must specify children for this upsell type");
                var M = (0, d.isThemeLight)(N) ? n("537381") : n("341048");
                return r.createElement(r.Fragment, null, r.createElement("div", {
                    className: D.contentContainer
                }, r.createElement("img", {
                    alt: "",
                    className: D.upsellImage,
                    src: M
                }), r.createElement(_.Heading, {
                    variant: "heading-xl/bold",
                    color: "header-primary"
                }, P.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL), r.createElement(k, {
                    trialOffer: g,
                    discountOffer: A
                }, P.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL_NO_BOLD_V2.format({
                    planName: (0, S.getDisplayNameFromSku)(O),
                    onClick: function() {
                        return (0, y.transitionTo)(C.Routes.APPLICATION_STORE)
                    }
                }))), r.createElement(j, {
                    subscriptionTier: O,
                    onClose: l,
                    analyticsLocationObject: {
                        section: C.AnalyticsSections.EMOJI_PICKER_POPOUT,
                        object: C.AnalyticsObjects.BUTTON_CTA
                    },
                    trialOffer: g,
                    discountOffer: A
                }));
            case R.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
            case R.PremiumUpsellTypes.BURST_REACTION_UPSELL:
            case R.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
            case R.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                switch (h) {
                    case R.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
                        t = P.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_WITH_SIZE_AND_ACTION_V2.format({
                            planName: (0, S.getDisplayNameFromSku)(O),
                            premiumMaxSize: O === R.PremiumSubscriptionSKUs.TIER_0 ? P.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED : P.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE,
                            onClick: function() {
                                (0, y.transitionTo)(C.Routes.APPLICATION_STORE), null == l || l()
                            }
                        });
                        break;
                    case R.PremiumUpsellTypes.BURST_REACTION_UPSELL:
                        t = P.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                            planName: (0, S.getDisplayNameFromSku)(O),
                            onClick: function() {
                                (0, y.transitionTo)(C.Routes.APPLICATION_STORE), null == l || l()
                            }
                        });
                        break;
                    case R.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
                        t = P.default.Messages.STREAM_PREMIUM_UPSELL_WITH_ACTION.format({
                            onClick: function() {
                                (0, y.transitionTo)(C.Routes.APPLICATION_STORE), null == l || l(), (0, f.closeAllModals)()
                            }
                        });
                        break;
                    case R.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                        t = P.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                            premiumMaxMessageLength: C.MAX_MESSAGE_LENGTH_PREMIUM,
                            onClick: function() {
                                (0, y.transitionTo)(C.Routes.APPLICATION_STORE), null == l || l()
                            }
                        })
                }
                return u()(null != t, "There must be some upsell context"), r.createElement(r.Fragment, null, r.createElement("div", {
                    className: D.contentContainer
                }, r.createElement(_.Heading, {
                    variant: "heading-xl/bold",
                    color: "header-primary"
                }, o), r.createElement(_.Text, {
                    variant: "text-md/normal"
                }, a), r.createElement(k, {
                    trialOffer: g,
                    discountOffer: A
                }, t)));
            case R.PremiumUpsellTypes.BURST_REACTION_QUICK_ACTION_UPSELL:
                return r.createElement("div", {
                    className: D.contentContainer
                }, r.createElement(_.Heading, {
                    variant: "heading-xl/bold",
                    color: "header-primary"
                }, o), r.createElement(_.Text, {
                    variant: "text-md/normal"
                }, a), r.createElement(k, {
                    trialOffer: g,
                    discountOffer: A
                }, P.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                    planName: (0, S.getDisplayNameFromSku)(O),
                    onClick: function() {
                        return (0, y.transitionTo)(C.Routes.APPLICATION_STORE)
                    }
                })), r.createElement(G, {
                    className: D.upsellButton,
                    subscriptionTier: O,
                    analyticsLocationObject: T,
                    onClose: l,
                    trialOffer: g,
                    discountOffer: A
                }));
            case R.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
                return u()(null != s, "You must specify children for this upsell type"), r.createElement(k, {
                    trialOffer: g,
                    discountOffer: A
                }, P.default.Messages.CLIENT_THEMES_EDITOR_UPSELL.format({
                    onClick: function() {
                        (0, y.transitionTo)(C.Routes.APPLICATION_STORE), (0, m.closeEditor)()
                    }
                }));
            case R.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
                return r.createElement("div", {
                    className: i()(D.messageLengthUpsellContainer, U({}, D.messageLengthUpsellAppearAnimation, !b))
                }, r.createElement(_.Text, {
                    variant: "text-lg/bold",
                    color: "status-danger"
                }, a), r.createElement(_.Heading, {
                    variant: "heading-lg/extrabold",
                    color: "header-primary",
                    className: D.messageLengthUpsellHeader
                }, P.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT_NO_COUNT), r.createElement("div", {
                    className: D.divider
                }), r.createElement(k, {
                    trialOffer: g,
                    discountOffer: A,
                    className: D.messageLengthBrandedContainer,
                    subscriptionTier: O
                }, P.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                    premiumMaxMessageLength: C.MAX_MESSAGE_LENGTH_PREMIUM,
                    onClick: function() {
                        (0, y.transitionTo)(C.Routes.APPLICATION_STORE), null == l || l()
                    }
                })), r.createElement(G, {
                    subscriptionTier: O,
                    analyticsLocationObject: T,
                    onClose: l,
                    trialOffer: g,
                    discountOffer: A
                }));
            case R.PremiumUpsellTypes.CUSTOM_PROFILE_TRY_OUT_UPSELL:
            case R.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
                return r.createElement(F, null);
            case R.PremiumUpsellTypes.GUILD_CAP_MODAL_UPSELL:
            case R.PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL:
            case R.PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL:
            case R.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL:
            case R.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
            case R.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
            case R.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED:
                return r.createElement(V, {
                    trialOffer: g,
                    discountOffer: A,
                    headingText: o,
                    context: a,
                    children: s
                });
            default:
                return v.default.captureMessage("Possible mishandling of a PremiumUpsellType: ".concat(h)), r.createElement(V, {
                    headingText: o,
                    context: a,
                    children: s,
                    trialOffer: g,
                    discountOffer: A
                })
        }
    }
}