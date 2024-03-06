function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PremiumPillAndSparklesColorOptions: function() {
            return s
        },
        PremiumPillWithSparkles: function() {
            return el
        },
        Tier0Card: function() {
            return ed
        },
        Tier2FeatureSet: function() {
            return u
        },
        Tier2FeatureItems: function() {
            return ef
        },
        Tier2Card: function() {
            return em
        },
        PremiumTierCardsVariant: function() {
            return c
        },
        default: function() {
            return e_
        }
    });
    var r, i, l, a, s, o, u, c, d = n("37983");
    n("884691");
    var f = n("414456"),
        m = n.n(f),
        _ = n("866227"),
        E = n.n(_),
        T = n("446674"),
        I = n("669491"),
        C = n("819855"),
        p = n("77078"),
        S = n("841098"),
        P = n("206230"),
        R = n("812204"),
        L = n("685665"),
        O = n("441413"),
        M = n("915639"),
        g = n("697218"),
        h = n("521012"),
        x = n("594098"),
        N = n("491614"),
        v = n("716589"),
        A = n("46829"),
        U = n("118503"),
        b = n("41250"),
        D = n("379863"),
        y = n("216422"),
        j = n("619911"),
        F = n("698015"),
        B = n("75196"),
        k = n("240481"),
        w = n("719923"),
        H = n("309318"),
        G = n("446488"),
        K = n("182650"),
        V = n("154889"),
        Z = n("917247"),
        W = n("478968"),
        z = n("641078"),
        Y = n("496521"),
        X = n("992118"),
        J = n("484321"),
        q = n("332291"),
        Q = n("646718"),
        $ = n("719347"),
        ee = n("782340"),
        et = n("350872"),
        en = n("939784"),
        er = n("769015");

    function ei(e) {
        let {
            text: t,
            className: n,
            colorOptions: r = 2
        } = e;
        return (0, d.jsx)("div", {
            className: m(n, et.freeTrialPill, {
                [et.freeTrialPillTier0GradientFill]: 1 === r,
                [et.freeTrialPillTier2GradientFill]: 3 === r,
                [et.freeTrialPillTier2OldGradientFill]: 4 === r,
                [et.lightBackgroundPill]: 5 === r
            }),
            children: (0, d.jsx)(p.Text, {
                variant: "text-xs/bold",
                className: m(et.freeTrialPillText, {
                    [et.freeTrialPillTextInverted]: 0 !== r && 2 !== r,
                    [et.freeTrialPillTextTier0]: 0 === r,
                    [et.freeTrialPillTextTier2]: 2 === r
                }),
                children: t
            })
        })
    }

    function el(e) {
        let t, {
            text: n,
            className: r,
            colorOptions: i = 2,
            isPillOnBorder: l = !0
        } = e;
        switch (i) {
            case 1:
                t = I.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
                break;
            case 3:
                t = "url(#".concat(J.PREMIUM_NEW_TIER_2_SVG_GRADIENT_ID, ")");
                break;
            case 4:
            case 5:
                t = "url(#".concat(J.PREMIUM_OLD_TIER_2_SVG_GRADIENT_ID, ")");
                break;
            default:
                t = "white"
        }
        return l ? (0, d.jsxs)("div", {
            className: m(r, et.freeTrialPillWithSparkles),
            children: [(0, d.jsx)(J.SparkleStar, {
                foreground: et.sparkleStar1,
                color: t
            }), (0, d.jsx)(J.SparkleStar, {
                foreground: et.sparkleStar2,
                color: t
            }), (0, d.jsx)(J.SparkleStar, {
                foreground: et.sparkleStar3,
                color: t
            }), (0, d.jsx)(ei, {
                text: n,
                colorOptions: i
            }), (0, d.jsx)(J.SparkleStar, {
                foreground: et.sparkleStar4,
                color: t
            }), (0, d.jsx)(J.SparkleStar, {
                foreground: et.sparkleStar5,
                color: t
            })]
        }) : (0, d.jsxs)("div", {
            className: m(r, et.freeTrialPillWithSparkles),
            children: [(0, d.jsx)(ei, {
                text: n,
                colorOptions: i
            }), (0, d.jsx)(J.SparkleStar, {
                foreground: et.sparkleStar1,
                style: {
                    marginLeft: 4,
                    marginBottom: -6
                },
                color: t
            }), (0, d.jsx)(J.SparkleStar, {
                foreground: et.sparkleStar2,
                color: t
            })]
        })
    }

    function ea(e) {
        let {
            width: t = 83,
            height: n = 82,
            ...r
        } = e;
        return (0, d.jsxs)("svg", {
            ...(0, B.default)({
                ...r
            }),
            width: t,
            height: n,
            viewBox: "0 0 83 82",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, d.jsx)("g", {
                clipPath: "url(#clip0_1691_113820)",
                children: (0, d.jsx)("path", {
                    d: "M75.6975 45.1322C75.2844 48.0717 70.2815 49.7001 69.2458 52.3302C68.0858 55.0537 70.4287 59.7129 68.6614 62.0181C66.8941 64.3233 61.7294 63.1533 59.479 64.9465C57.2438 66.6308 56.836 71.9026 54.133 72.966C51.5389 74.0448 47.5818 70.602 44.6592 70.8574C41.8456 71.1281 38.9013 75.4884 35.9617 75.0752C33.0222 74.6621 31.3938 69.6592 28.7638 68.6235C26.0402 67.4635 21.381 69.8064 19.0758 68.0391C16.7706 66.2718 17.9406 61.1071 16.1474 58.8566C14.5873 56.5279 9.31547 56.1201 8.25204 53.4171C7.17332 50.823 10.6161 46.8659 10.3607 43.9434C9.96577 41.2233 5.60554 38.279 6.01868 35.3394C6.43181 32.3999 11.4347 30.7715 12.4704 28.1414C13.6304 25.4179 11.2876 20.7587 13.0548 18.4535C14.8221 16.1483 19.9868 17.3183 22.2373 15.5251C24.4724 13.8408 24.8802 8.56898 27.5832 7.50556C30.1774 6.42683 34.1345 9.86958 37.057 9.61417C39.8706 9.34346 42.8149 4.98323 45.7545 5.39636C48.6941 5.80949 50.3224 10.8124 52.9525 11.8481C55.6761 13.0081 60.3352 10.6652 62.6404 12.4325C64.9456 14.1998 63.7756 19.3645 65.5688 21.615C67.2531 23.8501 72.5249 24.2579 73.5884 26.9609C74.6671 29.555 71.2243 33.5122 71.4797 36.4347C71.7505 39.2483 76.1107 42.1926 75.6975 45.1322Z",
                    fill: "currentColor"
                })
            }), (0, d.jsx)("path", {
                d: "M30.1999 41.1212L26.9681 32.3582L23.3318 31.8471L21.6757 43.6313L24.3355 44.0051L25.5209 35.571L28.9482 44.6534L32.3488 45.1313L34.0049 33.3471L31.3451 32.9733L30.1999 41.1212ZM43.2501 41.8738C43.6191 39.2476 42.3243 37.5893 39.7655 37.2296C36.971 36.8369 34.9959 38.4305 34.6269 41.0567C34.2341 43.8513 35.9048 45.8886 38.935 46.3145C40.3996 46.5203 41.6035 46.2603 42.3119 45.862L42.5887 43.8924C41.8322 44.2668 40.8661 44.4228 39.9065 44.288C38.2567 44.0561 37.4063 43.2671 37.286 42.1686L43.0939 42.9849L43.2501 41.8738ZM39.5418 39.3098C40.5182 39.447 41.0822 40.0756 40.9668 41.1409L37.5326 40.6583C37.8069 39.6839 38.4812 39.1607 39.5418 39.3098ZM53.3558 44.7704L52.6485 39.2977L49.9214 38.9145L47.757 43.9321L47.211 38.5335L44.4838 38.1503L45.6771 47.0045L48.4043 47.3878L50.7631 42.2087L51.6534 47.8444L54.4311 48.2348L58.2208 40.0809L55.5104 39.7L53.3558 44.7704ZM61.6245 45.4004L62.7507 37.3871L60.0067 37.0015L58.8805 45.0147L61.6245 45.4004ZM59.7123 49.2345C60.6719 49.3694 61.4423 48.7738 61.5677 47.8816C61.6954 46.9725 61.1167 46.2045 60.1571 46.0696C59.1975 45.9348 58.4127 46.5112 58.2849 47.4202C58.1595 48.3125 58.7527 49.0997 59.7123 49.2345Z",
                fill: "#5865F2"
            }), (0, d.jsx)("path", {
                d: "M57.6991 28.0304L61.3718 26.9774C61.3856 26.9721 61.3978 26.9632 61.4071 26.9517C61.4163 26.9401 61.4223 26.9262 61.4243 26.9116C61.4264 26.8969 61.4245 26.882 61.4188 26.8683C61.4131 26.8546 61.4038 26.8427 61.392 26.8338L58.1518 24.8093C58.1409 24.8077 58.1311 24.8019 58.1244 24.7932C58.1178 24.7844 58.1149 24.7733 58.1165 24.7625L57.0607 21.0782C57.0282 21.0109 56.9459 20.9993 56.9167 21.058L54.8864 24.3085C54.8629 24.3261 54.86 24.3466 54.8394 24.3437L51.1462 25.3939C51.1324 25.3992 51.1202 25.4081 51.1109 25.4196C51.1017 25.4312 51.0957 25.445 51.0937 25.4597C51.0916 25.4744 51.0935 25.4893 51.0992 25.503C51.1049 25.5167 51.1142 25.5286 51.126 25.5375L54.3867 27.5649C54.4073 27.5678 54.4044 27.5883 54.4221 27.6117L55.4778 31.296C55.4898 31.3604 55.5721 31.372 55.6219 31.3162L57.6522 28.0657C57.6537 28.0548 57.6595 28.045 57.6683 28.0384C57.6771 28.0318 57.6882 28.0289 57.6991 28.0304V28.0304Z",
                fill: "#5865F2"
            }), (0, d.jsx)("path", {
                d: "M27.9939 54.8801L30.1446 54.2599C30.156 54.2502 30.1635 54.2367 30.1656 54.2219C30.1676 54.207 30.1642 54.1919 30.1559 54.1795L28.2594 52.9905C28.2541 52.9897 28.2493 52.9869 28.2461 52.9826C28.2429 52.9783 28.2415 52.9729 28.2422 52.9676L27.626 50.8105C27.6275 50.7998 27.6247 50.789 27.6182 50.7804C27.6118 50.7718 27.6022 50.7662 27.5915 50.7647C27.5809 50.7632 27.5701 50.766 27.5616 50.7725C27.553 50.7789 27.5473 50.7886 27.5458 50.7992L26.3589 52.7029L26.3388 52.7001L24.1881 53.3203C24.1775 53.3188 24.1667 53.3216 24.1581 53.3281C24.1495 53.3346 24.1439 53.3442 24.1424 53.3549C24.1409 53.3655 24.1437 53.3763 24.1501 53.3849C24.1566 53.3935 24.1662 53.3992 24.1768 53.4007L26.0733 54.5897C26.0786 54.5904 26.0834 54.5933 26.0866 54.5976C26.0898 54.6019 26.0912 54.6073 26.0905 54.6126L26.7067 56.7697C26.7164 56.7811 26.7299 56.7886 26.7446 56.7907C26.7594 56.7928 26.7745 56.7893 26.7869 56.7809L27.9738 54.8773C27.9738 54.8773 27.9738 54.8773 27.9939 54.8801Z",
                fill: "#5865F2"
            }), (0, d.jsx)("defs", {
                children: (0, d.jsx)("clipPath", {
                    id: "clip0_1691_113820",
                    children: (0, d.jsx)("rect", {
                        width: "70.3636",
                        height: "70.3636",
                        fill: "white",
                        transform: "translate(10.915 0.5) rotate(8)"
                    })
                })
            })]
        })
    }

    function es(e) {
        let {
            Icon: t,
            text: n,
            isNew: r = !1
        } = e;
        return (0, d.jsxs)("div", {
            className: et.item,
            children: [(0, d.jsx)(t, {
                className: et.icon
            }), (0, d.jsx)(p.Text, {
                variant: "text-md/normal",
                color: "always-white",
                children: n
            }), r ? (0, d.jsx)(O.default, {
                className: et.newTagItem,
                forceUseColorForSparkles: !0,
                shouldInheritBackgroundColor: !0,
                shouldInheritTextColor: !0
            }) : null]
        })
    }

    function eo(e) {
        let {
            defaultPriceString: t,
            subscriptionPlan: n
        } = e, r = (0, W.useDiscountedPrice)(n);
        return (0, d.jsx)(d.Fragment, {
            children: ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION.format({
                discountedPrice: r,
                regularPrice: t
            })
        })
    }

    function eu(e) {
        let {
            isGift: t,
            premiumTier: n,
            offerTierMatchesCard: r,
            offerType: i,
            showYearlyPrice: l,
            isStacked: a,
            isFullScreen: s
        } = e, o = (0, T.useStateFromStores)([h.default], () => h.default.getPremiumTypeSubscription()), u = (0, T.useStateFromStores)([g.default], () => g.default.getCurrentUser()), c = (0, K.useHasDiscountApplied)(), f = (0, K.useActiveDiscountDuration)(), _ = n === Q.PremiumTypes.TIER_0 ? Q.PremiumSubscriptionSKUs.TIER_0 : Q.PremiumSubscriptionSKUs.TIER_2, I = (null == o ? void 0 : o.trialId) != null ? null == u ? void 0 : u.premiumType : c ? Q.PremiumTypes.TIER_2 : null, C = (0, Z.usePremiumTrialOffer)(), S = null == C ? void 0 : C.subscription_trial;
        if (!t && null != I && n === I && null != o && null != o.planIdFromItems && !a) {
            let e = null != o.trialEndsAt ? E(null == o ? void 0 : o.trialEndsAt).diff(E(), "d") : 0,
                t = Q.SubscriptionPlanInfo[o.planIdFromItems],
                n = w.default.formatPriceString(w.default.getDefaultPrice(t.id), t.interval);
            return (0, d.jsx)(d.Fragment, {
                children: (0, d.jsx)(p.Heading, {
                    variant: "heading-md/normal",
                    color: "always-white",
                    className: et.trialHeader,
                    children: 0 === i ? ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
                        remainingTime: e,
                        price: n
                    }) : ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                        percent: 30,
                        regularPrice: n,
                        numMonths: null != f ? f : Q.DISCOUNT_DURATION_FALLBACK
                    })
                })
            })
        }
        if (!t && r && !a) {
            var P, R, L, O;
            let e = w.default.formatPriceString(w.default.getDefaultPrice(n === Q.PremiumTypes.TIER_0 ? Q.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : Q.SubscriptionPlans.PREMIUM_MONTH_TIER_2), Q.SubscriptionIntervalTypes.MONTH);
            return (0, d.jsx)(p.Heading, {
                variant: "heading-md/normal",
                color: "always-white",
                className: et.trialHeader,
                children: 0 === i ? ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
                    planName: (0, w.getTierDisplayName)(null !== (R = Q.PREMIUM_SKU_TO_MONTHLY_PLAN[null !== (P = null == S ? void 0 : S.sku_id) && void 0 !== P ? P : Q.PremiumSubscriptionSKUs.NONE]) && void 0 !== R ? R : Q.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
                    duration: (0, w.formatIntervalDuration)({
                        intervalType: null !== (L = null == S ? void 0 : S.interval) && void 0 !== L ? L : Q.SubscriptionIntervalTypes.DAY,
                        intervalCount: null !== (O = null == S ? void 0 : S.interval_count) && void 0 !== O ? O : 30,
                        capitalize: !1
                    }),
                    price: e
                }) : (0, d.jsx)(eo, {
                    defaultPriceString: e,
                    subscriptionPlan: Q.SubscriptionPlans.PREMIUM_MONTH_TIER_2
                })
            })
        }
        return (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)(X.default, {
                subscriptionTier: _,
                isGift: t,
                className: m(et.price, {
                    [et.priceStacked]: a && s,
                    [et.priceStackedSmallScreen]: a && !s
                }),
                variant: a ? "heading-lg/extrabold" : void 0
            }), l && (0, d.jsx)(X.default, {
                subscriptionTier: _,
                interval: Q.SubscriptionIntervalTypes.YEAR,
                isGift: t,
                className: et.price
            })]
        })
    }

    function ec() {
        return (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)(es, {
                Icon: F.default,
                text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                    maxUploadPremium: (0, w.getMaxFileSizeForPremiumType)(Q.PremiumTypes.TIER_0, {
                        useSpace: !1
                    })
                })
            }), (0, d.jsx)(es, {
                Icon: A.default,
                text: ee.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
            }), (0, d.jsx)(es, {
                Icon: N.default,
                text: ee.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
            }), (0, d.jsx)(es, {
                Icon: y.default,
                text: ee.default.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
            })]
        })
    }

    function ed(e) {
        var t;
        let {
            showWumpus: n,
            showBadge: r,
            ctaButton: i,
            showYearlyPrice: l,
            className: a,
            isGift: s = !1,
            variant: o = 0,
            isFullScreen: u
        } = e, c = (0, T.useStateFromStores)([h.default], () => h.default.getPremiumTypeSubscription()), f = (0, T.useStateFromStores)([g.default], () => g.default.getCurrentUser()), _ = (0, Z.usePremiumTrialOffer)(), E = null == _ ? void 0 : null === (t = _.subscription_trial) || void 0 === t ? void 0 : t.sku_id, I = (null == c ? void 0 : c.trialId) != null, C = (null == c ? void 0 : c.trialId) != null ? null == f ? void 0 : f.premiumType : null, S = null != E || I, P = 1 === o;
        return (0, d.jsxs)("div", {
            className: m(et.card, a, {
                [et.card]: !P,
                [et.stackedCard]: P,
                [et.withTier0Rim]: !s && S,
                [et.withCardHover]: !s && S,
                [et.tier0Stacked]: P,
                [et.tier0]: !P
            }),
            children: [E === Q.PremiumSubscriptionSKUs.TIER_0 ? (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsx)(el, {
                    text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                    className: et.topRimPill,
                    colorOptions: 0
                }), (0, d.jsx)("div", {
                    className: et.rimGlowTier0
                })]
            }) : null, r && (0, d.jsx)(ea, {
                className: et.newCircleIcon
            }), n ? (0, d.jsx)("div", {
                className: et.wumpusImageContainer,
                children: (0, d.jsx)(x.default, {
                    src: en,
                    mediaLayoutType: $.MediaLayoutType.RESPONSIVE,
                    width: 270,
                    height: 242,
                    zoomable: !1
                })
            }) : null, s || E !== Q.PremiumSubscriptionSKUs.TIER_0 ? null : (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsx)(el, {
                    text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                    className: et.topRimPill,
                    colorOptions: 0
                }), (0, d.jsx)("div", {
                    className: et.rimGlowTier0
                })]
            }), s || C !== Q.PremiumTypes.TIER_0 ? null : (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsx)(el, {
                    text: ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                    className: et.topRimPill,
                    colorOptions: 0
                }), (0, d.jsx)("div", {
                    className: et.rimGlowTier0
                })]
            }), (0, d.jsxs)("div", {
                className: m({
                    [et.body]: P && u,
                    [et.bodySmallScreen]: P && !u
                }),
                children: [(0, d.jsx)("div", {
                    className: m({
                        [et.planContainer]: P && u,
                        [et.planContainerSmallScreen]: P && !u
                    }),
                    children: (0, d.jsxs)("div", {
                        className: m({
                            [et.subscriptionPlanInfo]: P
                        }),
                        children: [(0, d.jsx)(D.default, {
                            className: m({
                                [et.title]: !P,
                                [et.tier0Title]: !P,
                                [et.tier0TitleStacked]: P && u,
                                [et.tier0TitleStackedSmallScreen]: P && !u
                            })
                        }), (0, d.jsx)(eu, {
                            isGift: s,
                            premiumTier: Q.PremiumTypes.TIER_0,
                            offerType: 0,
                            offerTierMatchesCard: E === Q.PremiumSubscriptionSKUs.TIER_0,
                            showYearlyPrice: l,
                            isStacked: P,
                            isFullScreen: u
                        })]
                    })
                }), (0, d.jsxs)("div", {
                    className: m({
                        [et.perkContainer]: P && u,
                        [et.perkContainerSmallScreen]: P && !u
                    }),
                    children: [(0, d.jsxs)("div", {
                        children: [P && (0, d.jsx)(p.Heading, {
                            variant: "heading-xxl/extrabold",
                            className: u ? et.stackedCardTitle : et.stackedCardTitleSmallScreen,
                            children: ee.default.Messages.NITRO_MARKETING_JUST_THE_BASICS
                        }), (0, d.jsx)("div", {
                            className: m({
                                [et.listItems]: P
                            }),
                            children: (0, d.jsx)(ec, {})
                        })]
                    }), P && i]
                })]
            }), !P && i, s || E !== Q.PremiumSubscriptionSKUs.TIER_0 ? null : (0, d.jsx)(J.ButtonSparkleGroup, {
                tier: Q.PremiumTypes.TIER_0
            })]
        })
    }

    function ef(e) {
        let {
            featureSet: t = 0,
            isModal: n = !1,
            isGift: r = !1
        } = e, i = (0, T.useStateFromStores)([M.default], () => M.default.locale), l = (0, T.useStateFromStores)([G.default], () => G.default.affinities), {
            planSelectionEnabled: a
        } = H.default.useExperiment({
            location: "planSelection"
        }, {
            autoTrackExposure: !1
        }), s = n && !r && l.length > 0;
        s && H.default.trackExposure({
            location: "planSelection"
        });
        if (1 === t) return (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)(es, {
                Icon: U.default,
                text: ee.default.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
                    numBoosts: Q.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                    percentageOff: (0, k.formatPercent)(i, Q.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                })
            }), (0, d.jsx)(es, {
                Icon: F.default,
                text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                    maxUploadPremium: (0, w.getMaxFileSizeForPremiumType)(Q.PremiumTypes.TIER_2, {
                        useSpace: !1
                    })
                })
            }), (0, d.jsx)(es, {
                Icon: A.default,
                text: ee.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
            }), (0, d.jsx)(es, {
                Icon: j.default,
                text: ee.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
            }), (0, d.jsx)(es, {
                Icon: v.default,
                text: ee.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
            })]
        });
        return (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)(es, {
                Icon: F.default,
                text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                    maxUploadPremium: (0, w.getMaxFileSizeForPremiumType)(Q.PremiumTypes.TIER_2, {
                        useSpace: !1
                    })
                })
            }), (0, d.jsx)(es, {
                Icon: A.default,
                text: ee.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
            }), (0, d.jsx)(es, {
                Icon: N.default,
                text: ee.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
            }), (0, d.jsx)(es, {
                Icon: j.default,
                text: ee.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
            }), (0, d.jsx)(es, {
                Icon: U.default,
                text: ee.default.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
            }), (0, d.jsx)(es, {
                Icon: v.default,
                text: ee.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
            }), a && s && (0, d.jsx)(q.default, {})]
        })
    }

    function em(e) {
        var t;
        let n, {
                showWumpus: r,
                ctaButton: i,
                showYearlyPrice: l,
                featureSet: a = 0,
                className: s,
                isGift: o = !1,
                isModal: u = !1,
                variant: c = 0,
                isFullScreen: f
            } = e,
            _ = (0, T.useStateFromStores)([h.default], () => h.default.getPremiumTypeSubscription()),
            E = (0, T.useStateFromStores)([g.default], () => g.default.getCurrentUser()),
            I = (0, Z.usePremiumTrialOffer)(),
            P = null == I ? void 0 : null === (t = I.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
            R = (null == _ ? void 0 : _.trialId) != null ? null == E ? void 0 : E.premiumType : null,
            L = (0, K.useIsInPremiumOfferExperience)(),
            O = (0, V.usePremiumDiscountOffer)(),
            M = (0, K.useHasDiscountApplied)(),
            N = null != P || null != R ? 0 : null != O || M ? 1 : null,
            v = 1 === c,
            A = (0, z.useIsEligibleForBogoPromotion)(),
            U = !o && L,
            D = (0, z.getBOGOPillCopy)(),
            y = (0, C.isThemeLight)((0, S.default)()),
            j = y && v ? 5 : 2;
        return U && !v ? n = et.rimGlowTier2 : U && v && !y && (n = et.rimGlowTier2Stacked), (0, d.jsxs)("div", {
            className: m(et.card, s, {
                [et.withTier2Rim]: U && !v,
                [et.withTier2RimStacked]: U && v,
                [et.withCardHover]: U,
                [et.tier2Stacked]: v,
                [et.tier2]: !v
            }),
            children: [!o && null != O && (0, V.discountOfferHasTier)(O, Q.PremiumSubscriptionSKUs.TIER_2) && void 0 !== O.discount.amount ? (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsx)(el, {
                    text: M ? ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED : ee.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                        percent: O.discount.amount
                    }),
                    className: et.topRimPill,
                    colorOptions: j
                }), (0, d.jsx)("div", {
                    className: n
                })]
            }) : null, o || P !== Q.PremiumSubscriptionSKUs.TIER_2 ? null : (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsx)(el, {
                    text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                    className: et.topRimPill,
                    colorOptions: j
                }), (0, d.jsx)("div", {
                    className: n
                })]
            }), o || R !== Q.PremiumTypes.TIER_2 ? null : (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsx)(el, {
                    text: ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                    className: et.topRimPill,
                    colorOptions: j
                }), (0, d.jsx)("div", {
                    className: n
                })]
            }), !o && M && (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsx)(el, {
                    text: ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
                    className: et.topRimPill,
                    colorOptions: j
                }), (0, d.jsx)("div", {
                    className: n
                })]
            }), r ? (0, d.jsx)("div", {
                className: et.wumpusImageContainer,
                children: (0, d.jsx)(x.default, {
                    src: er,
                    mediaLayoutType: $.MediaLayoutType.RESPONSIVE,
                    width: 270,
                    height: 242,
                    zoomable: !1
                })
            }) : null, (0, d.jsxs)("div", {
                className: m({
                    [et.body]: v && f,
                    [et.bodySmallScreen]: v && !f
                }),
                children: [(0, d.jsx)("div", {
                    className: m({
                        [et.planContainer]: v && f,
                        [et.planContainerSmallScreen]: v && !f
                    }),
                    children: (0, d.jsxs)("div", {
                        className: m({
                            [et.subscriptionPlanInfo]: v
                        }),
                        children: [(0, d.jsx)(b.default, {
                            className: m({
                                [et.title]: !v,
                                [et.tier2Title]: !v,
                                [et.tier2TitleStacked]: v && f,
                                [et.tier2TitleStackedSmallScreen]: v && !f
                            })
                        }), !o && P !== Q.PremiumSubscriptionSKUs.TIER_2 && A && (0, d.jsx)(p.Text, {
                            variant: "text-xs/bold",
                            className: et.freeTrialPillInline,
                            children: D
                        }), (0, d.jsx)(eu, {
                            isGift: o,
                            premiumTier: Q.PremiumTypes.TIER_2,
                            offerType: N,
                            offerTierMatchesCard: P === Q.PremiumSubscriptionSKUs.TIER_2 || (0, V.discountOfferHasTier)(O, Q.PremiumSubscriptionSKUs.TIER_2),
                            showYearlyPrice: l,
                            isStacked: v,
                            isFullScreen: f
                        })]
                    })
                }), (0, d.jsxs)("div", {
                    className: m({
                        [et.perkContainer]: v && f,
                        [et.perkContainerSmallScreen]: v && !f
                    }),
                    children: [(0, d.jsxs)("div", {
                        children: [v && (0, d.jsx)(p.Heading, {
                            className: m({
                                [et.stackedCardTitle]: f,
                                [et.stackedCardTitleSmallScreen]: !f
                            }),
                            variant: "heading-xxl/extrabold",
                            children: ee.default.Messages.NITRO_MARKETING_CARDS_SUPERCHARGE_YOUR_DISCORD
                        }), (0, d.jsx)(ef, {
                            featureSet: a,
                            isModal: u,
                            isGift: o
                        })]
                    }), v && (0, d.jsx)(Y.default, {
                        isStacked: v,
                        ctaButton: i,
                        isGift: o,
                        trialOfferTier: P,
                        discountOffer: O
                    })]
                })]
            }), !v && (0, d.jsx)(Y.default, {
                isStacked: v,
                ctaButton: i,
                isGift: o,
                trialOfferTier: P,
                discountOffer: O
            })]
        })
    }

    function e_(e) {
        let {
            showWumpus: t,
            showBadge: n,
            tier0CTAButton: r,
            tier2CTAButton: i,
            className: l,
            variant: a = 0,
            selectedPremiumType: s,
            isFullScreen: o
        } = e, {
            AnalyticsLocationProvider: u
        } = (0, L.default)(R.default.PREMIUM_MARKETING_TIER_CARD), c = 1 === a, f = s === Q.PremiumTypes.TIER_0, _ = (0, T.useStateFromStores)([P.default], () => P.default.useReducedMotion);
        return (0, d.jsx)(u, {
            children: (0, d.jsxs)("div", {
                className: m({
                    [et.premiumCards]: !c,
                    [et.premiumCardsStackedVariant]: c && o,
                    [et.premiumCardsStackedVariantSmallScreen]: c && !o
                }, l),
                children: [(0, d.jsx)(ed, {
                    className: m({
                        [et.tierCardFocused]: c && f,
                        [et.tierCardHidden]: c && !f,
                        [et.tierCardAnimation]: c && !_
                    }),
                    showWumpus: t,
                    showBadge: n,
                    ctaButton: r,
                    variant: a,
                    isFullScreen: o
                }), (0, d.jsx)(em, {
                    className: m({
                        [et.tierCardFocused]: c && !f,
                        [et.tierCardHidden]: c && f,
                        [et.tierCardAnimation]: c && !_
                    }),
                    showWumpus: t,
                    ctaButton: i,
                    variant: a,
                    isFullScreen: o
                })]
            })
        })
    }(r = s || (s = {}))[r.PREMIUM_TIER_0_WHITE_FILL = 0] = "PREMIUM_TIER_0_WHITE_FILL", r[r.PREMIUM_TIER_0_GRADIENT_FILL = 1] = "PREMIUM_TIER_0_GRADIENT_FILL", r[r.PREMIUM_TIER_2_WHITE_FILL = 2] = "PREMIUM_TIER_2_WHITE_FILL", r[r.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL", r[r.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL", r[r.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE", (i = o || (o = {}))[i.PREMIUM_TRIAL = 0] = "PREMIUM_TRIAL", i[i.PREMIUM_DISCOUNT = 1] = "PREMIUM_DISCOUNT", (l = u || (u = {}))[l.DEFAULT = 0] = "DEFAULT", l[l.BOOSTING = 1] = "BOOSTING", (a = c || (c = {}))[a.DEFAULT = 0] = "DEFAULT", a[a.STACKED = 1] = "STACKED"
}