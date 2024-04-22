function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PremiumPillAndSparklesColorOptions: function() {
            return o
        },
        PremiumPillWithSparkles: function() {
            return eo
        },
        PremiumTierCardsVariant: function() {
            return d
        },
        Tier0Card: function() {
            return eE
        },
        Tier2Card: function() {
            return eT
        },
        Tier2FeatureItems: function() {
            return eI
        },
        Tier2FeatureSet: function() {
            return u
        },
        default: function() {
            return ef
        }
    });
    var i, r, s, a, o, l, u, d, _ = n("735250");
    n("470079");
    var c = n("120356"),
        E = n.n(c),
        I = n("913527"),
        T = n.n(I),
        f = n("442837"),
        S = n("692547"),
        h = n("780384"),
        A = n("481060"),
        m = n("410030"),
        N = n("607070"),
        p = n("100527"),
        O = n("906732"),
        R = n("535322"),
        C = n("706454"),
        g = n("594174"),
        L = n("78839"),
        D = n("332475"),
        v = n("533496"),
        M = n("771357"),
        y = n("642113"),
        P = n("709586"),
        U = n("483444"),
        b = n("599250"),
        G = n("466111"),
        w = n("761374"),
        k = n("363138"),
        B = n("325767"),
        F = n("930153"),
        V = n("74538"),
        x = n("326151"),
        H = n("357355"),
        Y = n("140465"),
        j = n("424082"),
        W = n("650032"),
        K = n("104494"),
        z = n("639119"),
        X = n("230916"),
        Q = n("248042"),
        q = n("94027"),
        Z = n("504865"),
        J = n("63802"),
        $ = n("318990"),
        ee = n("474936"),
        et = n("768760"),
        en = n("689938"),
        ei = n("124892"),
        er = n("476945"),
        es = n("945182");

    function ea(e) {
        let {
            text: t,
            className: n,
            colorOptions: i = 2
        } = e;
        return (0, _.jsx)("div", {
            className: E()(n, ei.freeTrialPill, {
                [ei.freeTrialPillTier0GradientFill]: 1 === i,
                [ei.freeTrialPillTier2GradientFill]: 3 === i,
                [ei.freeTrialPillTier2OldGradientFill]: 4 === i,
                [ei.lightBackgroundPill]: 5 === i
            }),
            children: (0, _.jsx)(A.Text, {
                variant: "text-xs/bold",
                className: E()(ei.freeTrialPillText, {
                    [ei.freeTrialPillTextInverted]: 0 !== i && 2 !== i,
                    [ei.freeTrialPillTextTier0]: 0 === i,
                    [ei.freeTrialPillTextTier2]: 2 === i
                }),
                children: t
            })
        })
    }

    function eo(e) {
        let t, {
            text: n,
            className: i,
            colorOptions: r = 2,
            isPillOnBorder: s = !0
        } = e;
        switch (r) {
            case 1:
                t = S.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
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
        return s ? (0, _.jsxs)("div", {
            className: E()(i, ei.freeTrialPillWithSparkles),
            children: [(0, _.jsx)(J.SparkleStar, {
                foreground: ei.sparkleStar1,
                color: t
            }), (0, _.jsx)(J.SparkleStar, {
                foreground: ei.sparkleStar2,
                color: t
            }), (0, _.jsx)(J.SparkleStar, {
                foreground: ei.sparkleStar3,
                color: t
            }), (0, _.jsx)(ea, {
                text: n,
                colorOptions: r
            }), (0, _.jsx)(J.SparkleStar, {
                foreground: ei.sparkleStar4,
                color: t
            }), (0, _.jsx)(J.SparkleStar, {
                foreground: ei.sparkleStar5,
                color: t
            })]
        }) : (0, _.jsxs)("div", {
            className: E()(i, ei.freeTrialPillWithSparkles),
            children: [(0, _.jsx)(ea, {
                text: n,
                colorOptions: r
            }), (0, _.jsx)(J.SparkleStar, {
                foreground: ei.sparkleStar1,
                style: {
                    marginLeft: 4,
                    marginBottom: -6
                },
                color: t
            }), (0, _.jsx)(J.SparkleStar, {
                foreground: ei.sparkleStar2,
                color: t
            })]
        })
    }

    function el(e) {
        let {
            width: t = 83,
            height: n = 82,
            ...i
        } = e;
        return (0, _.jsxs)("svg", {
            ...(0, B.default)({
                ...i
            }),
            width: t,
            height: n,
            viewBox: "0 0 83 82",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, _.jsx)("g", {
                clipPath: "url(#clip0_1691_113820)",
                children: (0, _.jsx)("path", {
                    d: "M75.6975 45.1322C75.2844 48.0717 70.2815 49.7001 69.2458 52.3302C68.0858 55.0537 70.4287 59.7129 68.6614 62.0181C66.8941 64.3233 61.7294 63.1533 59.479 64.9465C57.2438 66.6308 56.836 71.9026 54.133 72.966C51.5389 74.0448 47.5818 70.602 44.6592 70.8574C41.8456 71.1281 38.9013 75.4884 35.9617 75.0752C33.0222 74.6621 31.3938 69.6592 28.7638 68.6235C26.0402 67.4635 21.381 69.8064 19.0758 68.0391C16.7706 66.2718 17.9406 61.1071 16.1474 58.8566C14.5873 56.5279 9.31547 56.1201 8.25204 53.4171C7.17332 50.823 10.6161 46.8659 10.3607 43.9434C9.96577 41.2233 5.60554 38.279 6.01868 35.3394C6.43181 32.3999 11.4347 30.7715 12.4704 28.1414C13.6304 25.4179 11.2876 20.7587 13.0548 18.4535C14.8221 16.1483 19.9868 17.3183 22.2373 15.5251C24.4724 13.8408 24.8802 8.56898 27.5832 7.50556C30.1774 6.42683 34.1345 9.86958 37.057 9.61417C39.8706 9.34346 42.8149 4.98323 45.7545 5.39636C48.6941 5.80949 50.3224 10.8124 52.9525 11.8481C55.6761 13.0081 60.3352 10.6652 62.6404 12.4325C64.9456 14.1998 63.7756 19.3645 65.5688 21.615C67.2531 23.8501 72.5249 24.2579 73.5884 26.9609C74.6671 29.555 71.2243 33.5122 71.4797 36.4347C71.7505 39.2483 76.1107 42.1926 75.6975 45.1322Z",
                    fill: "currentColor"
                })
            }), (0, _.jsx)("path", {
                d: "M30.1999 41.1212L26.9681 32.3582L23.3318 31.8471L21.6757 43.6313L24.3355 44.0051L25.5209 35.571L28.9482 44.6534L32.3488 45.1313L34.0049 33.3471L31.3451 32.9733L30.1999 41.1212ZM43.2501 41.8738C43.6191 39.2476 42.3243 37.5893 39.7655 37.2296C36.971 36.8369 34.9959 38.4305 34.6269 41.0567C34.2341 43.8513 35.9048 45.8886 38.935 46.3145C40.3996 46.5203 41.6035 46.2603 42.3119 45.862L42.5887 43.8924C41.8322 44.2668 40.8661 44.4228 39.9065 44.288C38.2567 44.0561 37.4063 43.2671 37.286 42.1686L43.0939 42.9849L43.2501 41.8738ZM39.5418 39.3098C40.5182 39.447 41.0822 40.0756 40.9668 41.1409L37.5326 40.6583C37.8069 39.6839 38.4812 39.1607 39.5418 39.3098ZM53.3558 44.7704L52.6485 39.2977L49.9214 38.9145L47.757 43.9321L47.211 38.5335L44.4838 38.1503L45.6771 47.0045L48.4043 47.3878L50.7631 42.2087L51.6534 47.8444L54.4311 48.2348L58.2208 40.0809L55.5104 39.7L53.3558 44.7704ZM61.6245 45.4004L62.7507 37.3871L60.0067 37.0015L58.8805 45.0147L61.6245 45.4004ZM59.7123 49.2345C60.6719 49.3694 61.4423 48.7738 61.5677 47.8816C61.6954 46.9725 61.1167 46.2045 60.1571 46.0696C59.1975 45.9348 58.4127 46.5112 58.2849 47.4202C58.1595 48.3125 58.7527 49.0997 59.7123 49.2345Z",
                fill: "#5865F2"
            }), (0, _.jsx)("path", {
                d: "M57.6991 28.0304L61.3718 26.9774C61.3856 26.9721 61.3978 26.9632 61.4071 26.9517C61.4163 26.9401 61.4223 26.9262 61.4243 26.9116C61.4264 26.8969 61.4245 26.882 61.4188 26.8683C61.4131 26.8546 61.4038 26.8427 61.392 26.8338L58.1518 24.8093C58.1409 24.8077 58.1311 24.8019 58.1244 24.7932C58.1178 24.7844 58.1149 24.7733 58.1165 24.7625L57.0607 21.0782C57.0282 21.0109 56.9459 20.9993 56.9167 21.058L54.8864 24.3085C54.8629 24.3261 54.86 24.3466 54.8394 24.3437L51.1462 25.3939C51.1324 25.3992 51.1202 25.4081 51.1109 25.4196C51.1017 25.4312 51.0957 25.445 51.0937 25.4597C51.0916 25.4744 51.0935 25.4893 51.0992 25.503C51.1049 25.5167 51.1142 25.5286 51.126 25.5375L54.3867 27.5649C54.4073 27.5678 54.4044 27.5883 54.4221 27.6117L55.4778 31.296C55.4898 31.3604 55.5721 31.372 55.6219 31.3162L57.6522 28.0657C57.6537 28.0548 57.6595 28.045 57.6683 28.0384C57.6771 28.0318 57.6882 28.0289 57.6991 28.0304V28.0304Z",
                fill: "#5865F2"
            }), (0, _.jsx)("path", {
                d: "M27.9939 54.8801L30.1446 54.2599C30.156 54.2502 30.1635 54.2367 30.1656 54.2219C30.1676 54.207 30.1642 54.1919 30.1559 54.1795L28.2594 52.9905C28.2541 52.9897 28.2493 52.9869 28.2461 52.9826C28.2429 52.9783 28.2415 52.9729 28.2422 52.9676L27.626 50.8105C27.6275 50.7998 27.6247 50.789 27.6182 50.7804C27.6118 50.7718 27.6022 50.7662 27.5915 50.7647C27.5809 50.7632 27.5701 50.766 27.5616 50.7725C27.553 50.7789 27.5473 50.7886 27.5458 50.7992L26.3589 52.7029L26.3388 52.7001L24.1881 53.3203C24.1775 53.3188 24.1667 53.3216 24.1581 53.3281C24.1495 53.3346 24.1439 53.3442 24.1424 53.3549C24.1409 53.3655 24.1437 53.3763 24.1501 53.3849C24.1566 53.3935 24.1662 53.3992 24.1768 53.4007L26.0733 54.5897C26.0786 54.5904 26.0834 54.5933 26.0866 54.5976C26.0898 54.6019 26.0912 54.6073 26.0905 54.6126L26.7067 56.7697C26.7164 56.7811 26.7299 56.7886 26.7446 56.7907C26.7594 56.7928 26.7745 56.7893 26.7869 56.7809L27.9738 54.8773C27.9738 54.8773 27.9738 54.8773 27.9939 54.8801Z",
                fill: "#5865F2"
            }), (0, _.jsx)("defs", {
                children: (0, _.jsx)("clipPath", {
                    id: "clip0_1691_113820",
                    children: (0, _.jsx)("rect", {
                        width: "70.3636",
                        height: "70.3636",
                        fill: "white",
                        transform: "translate(10.915 0.5) rotate(8)"
                    })
                })
            })]
        })
    }

    function eu(e) {
        let {
            Icon: t,
            text: n,
            isNew: i = !1
        } = e;
        return (0, _.jsxs)("div", {
            className: ei.item,
            children: [(0, _.jsx)(t, {
                className: ei.icon
            }), (0, _.jsx)(A.Text, {
                variant: "text-md/normal",
                color: "always-white",
                children: n
            }), i ? (0, _.jsx)(R.default, {
                className: ei.newTagItem,
                forceUseColorForSparkles: !0,
                shouldInheritBackgroundColor: !0,
                shouldInheritTextColor: !0
            }) : null]
        })
    }

    function ed(e) {
        var t;
        let {
            defaultPriceString: n,
            subscriptionPlan: i,
            discountOffer: r
        } = e, s = (0, X.useDiscountedPrice)(i);
        return (0, _.jsx)(_.Fragment, {
            children: en.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION_GENERIC.format({
                numMonths: null !== (t = r.discount.user_usage_limit) && void 0 !== t ? t : ee.DISCOUNT_DURATION_FALLBACK,
                discountedPrice: s,
                regularPrice: n
            })
        })
    }

    function e_(e) {
        let {
            isGift: t,
            premiumTier: n,
            offerTierMatchesCard: i,
            offerType: r,
            showYearlyPrice: s,
            isStacked: a,
            isFullScreen: o,
            priceOptions: l
        } = e, u = (0, f.useStateFromStores)([L.default], () => L.default.getPremiumTypeSubscription()), d = (0, f.useStateFromStores)([g.default], () => g.default.getCurrentUser()), c = (0, Y.useHasDiscountApplied)(), {
            annualDiscountPercentage: I
        } = (0, j.getAnnualDiscountsExperimentConfig)("PremiumTierCards"), S = (0, Y.useActiveDiscountInfo)(), h = n === ee.PremiumTypes.TIER_0 ? ee.PremiumSubscriptionSKUs.TIER_0 : ee.PremiumSubscriptionSKUs.TIER_2, m = (null == u ? void 0 : u.trialId) != null ? null == d ? void 0 : d.premiumType : c ? ee.PremiumTypes.TIER_2 : null, N = (0, z.usePremiumTrialOffer)(), p = (0, K.usePremiumDiscountOffer)(), O = null == N ? void 0 : N.subscription_trial;
        if (!t && null != m && n === m && null != u && null != u.planIdFromItems && !a) {
            let e = null != u.trialEndsAt ? T()(null == u ? void 0 : u.trialEndsAt).diff(T()(), "d") : 0,
                t = ee.SubscriptionPlanInfo[u.planIdFromItems],
                n = V.default.formatPriceString(V.default.getDefaultPrice(t.id), t.interval);
            return (0, _.jsx)(_.Fragment, {
                children: (0, _.jsx)(A.Heading, {
                    variant: "heading-md/normal",
                    color: "always-white",
                    className: ei.trialHeader,
                    children: (() => {
                        var t, i, s;
                        if (0 === r) en.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
                            remainingTime: e,
                            price: n
                        });
                        else if (u.planIdFromItems === ee.SubscriptionPlans.PREMIUM_YEAR_TIER_2) return en.default.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
                            percent: null !== (t = null == S ? void 0 : S.percentage) && void 0 !== t ? t : I,
                            regularPrice: n
                        });
                        else return en.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                            percent: null !== (i = null == S ? void 0 : S.percentage) && void 0 !== i ? i : ee.DISCOUNT_PERCENTAGE_FALLBACK,
                            regularPrice: n,
                            numMonths: null !== (s = null == S ? void 0 : S.duration) && void 0 !== s ? s : ee.DISCOUNT_DURATION_FALLBACK
                        })
                    })()
                })
            })
        }
        if (!t && i && !a) {
            let e = V.default.formatPriceString(V.default.getDefaultPrice(n === ee.PremiumTypes.TIER_0 ? ee.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : ee.SubscriptionPlans.PREMIUM_MONTH_TIER_2), ee.SubscriptionIntervalTypes.MONTH);
            if (0 === r) {
                var R, C, D, v;
                return (0, _.jsx)(A.Heading, {
                    variant: "heading-md/normal",
                    color: "always-white",
                    className: ei.trialHeader,
                    children: en.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
                        planName: (0, V.getTierDisplayName)(null !== (C = ee.PREMIUM_SKU_TO_MONTHLY_PLAN[null !== (R = null == O ? void 0 : O.sku_id) && void 0 !== R ? R : ee.PremiumSubscriptionSKUs.NONE]) && void 0 !== C ? C : ee.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
                        duration: (0, V.formatIntervalDuration)({
                            intervalType: null !== (D = null == O ? void 0 : O.interval) && void 0 !== D ? D : ee.SubscriptionIntervalTypes.DAY,
                            intervalCount: null !== (v = null == O ? void 0 : O.interval_count) && void 0 !== v ? v : 30,
                            capitalize: !1
                        }),
                        price: e
                    })
                })
            }
            if (null != p) return (0, _.jsx)(A.Heading, {
                variant: "heading-md/normal",
                color: "always-white",
                className: ei.trialHeader,
                children: (0, _.jsx)(ed, {
                    defaultPriceString: e,
                    subscriptionPlan: ee.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
                    discountOffer: p
                })
            })
        }
        return (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(Z.default, {
                subscriptionTier: h,
                isGift: t,
                className: E()(ei.price, {
                    [ei.priceStacked]: a && o,
                    [ei.priceStackedSmallScreen]: a && !o
                }),
                variant: a ? "heading-lg/extrabold" : void 0,
                priceOptions: l
            }), s && (0, _.jsx)(Z.default, {
                subscriptionTier: h,
                interval: ee.SubscriptionIntervalTypes.YEAR,
                isGift: t,
                className: ei.price,
                priceOptions: l
            })]
        })
    }

    function ec() {
        return (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(eu, {
                Icon: k.default,
                text: en.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                    maxUploadPremium: (0, V.getMaxFileSizeForPremiumType)(ee.PremiumTypes.TIER_0, {
                        useSpace: !1
                    })
                })
            }), (0, _.jsx)(eu, {
                Icon: y.default,
                text: en.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
            }), (0, _.jsx)(eu, {
                Icon: v.default,
                text: en.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
            }), (0, _.jsx)(eu, {
                Icon: G.default,
                text: en.default.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
            })]
        })
    }

    function eE(e) {
        var t;
        let {
            showWumpus: n,
            showBadge: i,
            ctaButton: r,
            showYearlyPrice: s,
            className: a,
            isGift: o = !1,
            variant: l = 0,
            isFullScreen: u,
            priceOptions: d
        } = e, c = (0, f.useStateFromStores)([L.default], () => L.default.getPremiumTypeSubscription()), I = (0, f.useStateFromStores)([g.default], () => g.default.getCurrentUser()), T = (0, z.usePremiumTrialOffer)(), S = null == T ? void 0 : null === (t = T.subscription_trial) || void 0 === t ? void 0 : t.sku_id, h = (null == c ? void 0 : c.trialId) != null, m = (null == c ? void 0 : c.trialId) != null ? null == I ? void 0 : I.premiumType : null, N = null != S || h, p = 1 === l;
        return (0, _.jsxs)("div", {
            className: E()(ei.card, a, {
                [ei.card]: !p,
                [ei.stackedCard]: p,
                [ei.withTier0Rim]: !o && N,
                [ei.withCardHover]: !o && N,
                [ei.tier0Stacked]: p,
                [ei.tier0]: !p
            }),
            children: [S === ee.PremiumSubscriptionSKUs.TIER_0 ? (0, _.jsxs)(_.Fragment, {
                children: [(0, _.jsx)(eo, {
                    text: en.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                    className: ei.topRimPill,
                    colorOptions: 0
                }), (0, _.jsx)("div", {
                    className: ei.rimGlowTier0
                })]
            }) : null, i && (0, _.jsx)(el, {
                className: ei.newCircleIcon
            }), n ? (0, _.jsx)("div", {
                className: ei.wumpusImageContainer,
                children: (0, _.jsx)(D.default, {
                    src: er,
                    mediaLayoutType: et.MediaLayoutType.RESPONSIVE,
                    width: 270,
                    height: 242,
                    zoomable: !1
                })
            }) : null, o || S !== ee.PremiumSubscriptionSKUs.TIER_0 ? null : (0, _.jsxs)(_.Fragment, {
                children: [(0, _.jsx)(eo, {
                    text: en.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                    className: ei.topRimPill,
                    colorOptions: 0
                }), (0, _.jsx)("div", {
                    className: ei.rimGlowTier0
                })]
            }), o || m !== ee.PremiumTypes.TIER_0 ? null : (0, _.jsxs)(_.Fragment, {
                children: [(0, _.jsx)(eo, {
                    text: en.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                    className: ei.topRimPill,
                    colorOptions: 0
                }), (0, _.jsx)("div", {
                    className: ei.rimGlowTier0
                })]
            }), (0, _.jsxs)("div", {
                className: E()({
                    [ei.body]: p && u,
                    [ei.bodySmallScreen]: p && !u
                }),
                children: [(0, _.jsx)("div", {
                    className: E()({
                        [ei.planContainer]: p && u,
                        [ei.planContainerSmallScreen]: p && !u
                    }),
                    children: (0, _.jsxs)("div", {
                        className: E()({
                            [ei.subscriptionPlanInfo]: p
                        }),
                        children: [(0, _.jsx)(b.default, {
                            className: E()({
                                [ei.title]: !p,
                                [ei.tier0Title]: !p,
                                [ei.tier0TitleStacked]: p && u,
                                [ei.tier0TitleStackedSmallScreen]: p && !u
                            })
                        }), (0, _.jsx)(e_, {
                            isGift: o,
                            premiumTier: ee.PremiumTypes.TIER_0,
                            offerType: 0,
                            offerTierMatchesCard: S === ee.PremiumSubscriptionSKUs.TIER_0,
                            showYearlyPrice: s,
                            isStacked: p,
                            isFullScreen: u,
                            priceOptions: d
                        })]
                    })
                }), (0, _.jsxs)("div", {
                    className: E()({
                        [ei.perkContainer]: p && u,
                        [ei.perkContainerSmallScreen]: p && !u
                    }),
                    children: [(0, _.jsxs)("div", {
                        children: [p && (0, _.jsx)(A.Heading, {
                            variant: "heading-xxl/extrabold",
                            className: u ? ei.stackedCardTitle : ei.stackedCardTitleSmallScreen,
                            children: en.default.Messages.NITRO_MARKETING_JUST_THE_BASICS
                        }), (0, _.jsx)("div", {
                            className: E()({
                                [ei.listItemsBasic]: p
                            }),
                            children: (0, _.jsx)(ec, {})
                        })]
                    }), p && r]
                })]
            }), !p && r, o || S !== ee.PremiumSubscriptionSKUs.TIER_0 ? null : (0, _.jsx)(J.ButtonSparkleGroup, {
                tier: ee.PremiumTypes.TIER_0
            })]
        })
    }

    function eI(e) {
        let {
            featureSet: t = 0,
            isModal: n = !1,
            isGift: i = !1
        } = e, r = (0, f.useStateFromStores)([C.default], () => C.default.locale), s = (0, f.useStateFromStores)([H.default], () => H.default.affinities), {
            planSelectionEnabled: a
        } = x.default.useExperiment({
            location: "planSelection"
        }, {
            autoTrackExposure: !1
        }), o = n && !i && s.length > 0;
        o && x.default.trackExposure({
            location: "planSelection"
        });
        if (1 === t) return (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(eu, {
                Icon: P.default,
                text: en.default.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
                    numBoosts: ee.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                    percentageOff: (0, F.formatPercent)(r, ee.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                })
            }), (0, _.jsx)(eu, {
                Icon: k.default,
                text: en.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                    maxUploadPremium: (0, V.getMaxFileSizeForPremiumType)(ee.PremiumTypes.TIER_2, {
                        useSpace: !1
                    })
                })
            }), (0, _.jsx)(eu, {
                Icon: y.default,
                text: en.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
            }), (0, _.jsx)(eu, {
                Icon: w.default,
                text: en.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
            }), (0, _.jsx)(eu, {
                Icon: M.default,
                text: en.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
            })]
        });
        return (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(eu, {
                Icon: k.default,
                text: en.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                    maxUploadPremium: (0, V.getMaxFileSizeForPremiumType)(ee.PremiumTypes.TIER_2, {
                        useSpace: !1
                    })
                })
            }), (0, _.jsx)(eu, {
                Icon: y.default,
                text: en.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
            }), (0, _.jsx)(eu, {
                Icon: v.default,
                text: en.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
            }), (0, _.jsx)(eu, {
                Icon: w.default,
                text: en.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
            }), (0, _.jsx)(eu, {
                Icon: P.default,
                text: en.default.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
            }), (0, _.jsx)(eu, {
                Icon: M.default,
                text: en.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
            }), a && o && (0, _.jsx)($.default, {})]
        })
    }

    function eT(e) {
        var t;
        let n, {
                showWumpus: i,
                ctaButton: r,
                showYearlyPrice: s,
                featureSet: a = 0,
                className: o,
                isGift: l = !1,
                isModal: u = !1,
                variant: d = 0,
                isFullScreen: c,
                priceOptions: I
            } = e,
            T = (0, f.useStateFromStores)([L.default], () => L.default.getPremiumTypeSubscription()),
            S = (0, f.useStateFromStores)([g.default], () => g.default.getCurrentUser()),
            N = (0, z.usePremiumTrialOffer)(),
            p = null == N ? void 0 : null === (t = N.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
            O = (null == T ? void 0 : T.trialId) != null ? null == S ? void 0 : S.premiumType : null,
            R = (0, Y.useIsInPremiumOfferExperience)(),
            C = (0, K.usePremiumDiscountOffer)(),
            v = (0, Y.useHasDiscountApplied)(),
            M = null != p || null != O ? 0 : null != C || v ? 1 : null,
            y = 1 === d,
            P = (0, Q.useIsEligibleForBogoPromotion)(),
            b = !l && R,
            G = (0, Q.getBOGOPillCopy)(),
            w = (0, h.isThemeLight)((0, m.default)()),
            k = w ? 5 : 2,
            {
                enabled: B
            } = W.ReferralProgramRecipient.useExperiment({
                location: "Tier2Card"
            }, {
                autoTrackExposure: !1
            }),
            F = en.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT;
        return B && (null == N ? void 0 : N.trial_id) === ee.PREMIUM_TIER_2_REFERRAL_TRIAL_ID && (F = en.default.Messages.REFERRAL_PROGRAM_TWO_WEEK_TRIAL), !b || y || w ? b && y && !w && (n = ei.rimGlowTier2Stacked) : n = ei.rimGlowTier2, (0, _.jsxs)("div", {
            className: E()(ei.card, o, {
                [ei.withTier2Rim]: b && !y,
                [ei.withTier2RimStacked]: b && y,
                [ei.withCardHover]: b,
                [ei.tier2Stacked]: y,
                [ei.tier2]: !y
            }),
            children: [!l && null != C && (0, K.discountOfferHasTier)(C, ee.PremiumSubscriptionSKUs.TIER_2) && void 0 !== C.discount.amount ? (0, _.jsxs)(_.Fragment, {
                children: [(0, _.jsx)(eo, {
                    text: v ? en.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED : en.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                        percent: C.discount.amount
                    }),
                    className: ei.topRimPill,
                    colorOptions: k
                }), (0, _.jsx)("div", {
                    className: n
                })]
            }) : null, l || p !== ee.PremiumSubscriptionSKUs.TIER_2 ? null : (0, _.jsxs)(_.Fragment, {
                children: [(0, _.jsx)(eo, {
                    text: F,
                    className: ei.topRimPill,
                    colorOptions: k
                }), (0, _.jsx)("div", {
                    className: n
                })]
            }), l || O !== ee.PremiumTypes.TIER_2 ? null : (0, _.jsxs)(_.Fragment, {
                children: [(0, _.jsx)(eo, {
                    text: en.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                    className: ei.topRimPill,
                    colorOptions: k
                }), (0, _.jsx)("div", {
                    className: n
                })]
            }), !l && v && (0, _.jsxs)(_.Fragment, {
                children: [(0, _.jsx)(eo, {
                    text: en.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
                    className: ei.topRimPill,
                    colorOptions: k
                }), (0, _.jsx)("div", {
                    className: n
                })]
            }), i ? (0, _.jsx)("div", {
                className: ei.wumpusImageContainer,
                children: (0, _.jsx)(D.default, {
                    src: es,
                    mediaLayoutType: et.MediaLayoutType.RESPONSIVE,
                    width: 270,
                    height: 242,
                    zoomable: !1
                })
            }) : null, (0, _.jsxs)("div", {
                className: E()({
                    [ei.body]: y && c,
                    [ei.bodySmallScreen]: y && !c
                }),
                children: [(0, _.jsx)("div", {
                    className: E()({
                        [ei.planContainer]: y && c,
                        [ei.planContainerSmallScreen]: y && !c
                    }),
                    children: (0, _.jsxs)("div", {
                        className: E()({
                            [ei.subscriptionPlanInfo]: y
                        }),
                        children: [(0, _.jsx)(U.default, {
                            className: E()({
                                [ei.title]: !y,
                                [ei.tier2Title]: !y,
                                [ei.tier2TitleStacked]: y && c,
                                [ei.tier2TitleStackedSmallScreen]: y && !c
                            })
                        }), !l && p !== ee.PremiumSubscriptionSKUs.TIER_2 && P && (0, _.jsx)(A.Text, {
                            variant: "text-xs/bold",
                            className: ei.freeTrialPillInline,
                            children: G
                        }), (0, _.jsx)(e_, {
                            isGift: l,
                            premiumTier: ee.PremiumTypes.TIER_2,
                            offerType: M,
                            offerTierMatchesCard: p === ee.PremiumSubscriptionSKUs.TIER_2 || (0, K.discountOfferHasTier)(C, ee.PremiumSubscriptionSKUs.TIER_2),
                            showYearlyPrice: s,
                            isStacked: y,
                            isFullScreen: c,
                            priceOptions: I
                        })]
                    })
                }), (0, _.jsxs)("div", {
                    className: E()({
                        [ei.perkContainer]: y && c,
                        [ei.perkContainerSmallScreen]: y && !c
                    }),
                    children: [(0, _.jsxs)("div", {
                        children: [y && (0, _.jsx)(A.Heading, {
                            className: E()({
                                [ei.stackedCardTitle]: c,
                                [ei.stackedCardTitleSmallScreen]: !c
                            }),
                            variant: "heading-xxl/extrabold",
                            children: en.default.Messages.NITRO_MARKETING_CARDS_SUPERCHARGE_YOUR_DISCORD
                        }), (0, _.jsx)("div", {
                            className: E()({
                                [ei.listItems]: y
                            }),
                            children: (0, _.jsx)(eI, {
                                featureSet: a,
                                isModal: u,
                                isGift: l
                            })
                        })]
                    }), y && (0, _.jsx)(q.default, {
                        isStacked: y,
                        ctaButton: r,
                        isGift: l,
                        trialOfferTier: p,
                        discountOffer: C
                    })]
                })]
            }), !y && (0, _.jsx)(q.default, {
                isStacked: y,
                ctaButton: r,
                isGift: l,
                trialOfferTier: p,
                discountOffer: C
            })]
        })
    }

    function ef(e) {
        let {
            showWumpus: t,
            showBadge: n,
            tier0CTAButton: i,
            tier2CTAButton: r,
            className: s,
            variant: a = 0,
            selectedPremiumType: o,
            isFullScreen: l
        } = e, {
            analyticsLocations: u
        } = (0, O.default)(p.default.PREMIUM_MARKETING_TIER_CARD), d = 1 === a, c = o === ee.PremiumTypes.TIER_0, I = (0, f.useStateFromStores)([N.default], () => N.default.useReducedMotion);
        return (0, _.jsx)(O.AnalyticsLocationProvider, {
            value: u,
            children: (0, _.jsxs)("div", {
                className: E()({
                    [ei.premiumCards]: !d,
                    [ei.premiumCardsStackedVariant]: d && l,
                    [ei.premiumCardsStackedVariantSmallScreen]: d && !l
                }, s),
                children: [(0, _.jsx)(eE, {
                    className: E()({
                        [ei.tierCardFocused]: d && c,
                        [ei.tierCardHidden]: d && !c,
                        [ei.tierCardAnimation]: d && !I
                    }),
                    showWumpus: t,
                    showBadge: n,
                    ctaButton: i,
                    variant: a,
                    isFullScreen: l
                }), (0, _.jsx)(eT, {
                    className: E()({
                        [ei.tierCardFocused]: d && !c,
                        [ei.tierCardHidden]: d && c,
                        [ei.tierCardAnimation]: d && !I
                    }),
                    showWumpus: t,
                    ctaButton: r,
                    variant: a,
                    isFullScreen: l
                })]
            })
        })
    }(i = o || (o = {}))[i.PREMIUM_TIER_0_WHITE_FILL = 0] = "PREMIUM_TIER_0_WHITE_FILL", i[i.PREMIUM_TIER_0_GRADIENT_FILL = 1] = "PREMIUM_TIER_0_GRADIENT_FILL", i[i.PREMIUM_TIER_2_WHITE_FILL = 2] = "PREMIUM_TIER_2_WHITE_FILL", i[i.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL", i[i.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL", i[i.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE", (r = l || (l = {}))[r.PREMIUM_TRIAL = 0] = "PREMIUM_TRIAL", r[r.PREMIUM_DISCOUNT = 1] = "PREMIUM_DISCOUNT", (s = u || (u = {}))[s.DEFAULT = 0] = "DEFAULT", s[s.BOOSTING = 1] = "BOOSTING", (a = d || (d = {}))[a.DEFAULT = 0] = "DEFAULT", a[a.STACKED = 1] = "STACKED"
}