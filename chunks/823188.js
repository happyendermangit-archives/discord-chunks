function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PremiumPillAndSparklesColorOptions: function() {
            return o
        },
        PremiumPillWithSparkles: function() {
            return es
        },
        PremiumTierCardsVariant: function() {
            return d
        },
        Tier0Card: function() {
            return e_
        },
        Tier2Card: function() {
            return eE
        },
        Tier2FeatureItems: function() {
            return ec
        },
        Tier2FeatureSet: function() {
            return u
        },
        default: function() {
            return eI
        }
    });
    var i, r, s, a, o, l, u, d, _ = n("735250");
    n("470079");
    var c = n("803997"),
        E = n.n(c),
        I = n("913527"),
        T = n.n(I),
        f = n("442837"),
        S = n("692547"),
        A = n("780384"),
        h = n("481060"),
        m = n("410030"),
        N = n("607070"),
        O = n("100527"),
        p = n("906732"),
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
        B = n("363138"),
        k = n("325767"),
        V = n("930153"),
        F = n("74538"),
        x = n("326151"),
        H = n("357355"),
        Y = n("140465"),
        j = n("104494"),
        W = n("639119"),
        K = n("230916"),
        z = n("248042"),
        X = n("94027"),
        Q = n("504865"),
        q = n("63802"),
        Z = n("318990"),
        J = n("474936"),
        $ = n("768760"),
        ee = n("689938"),
        et = n("124892"),
        en = n("476945"),
        ei = n("945182");

    function er(e) {
        let {
            text: t,
            className: n,
            colorOptions: i = 2
        } = e;
        return (0, _.jsx)("div", {
            className: E()(n, et.freeTrialPill, {
                [et.freeTrialPillTier0GradientFill]: 1 === i,
                [et.freeTrialPillTier2GradientFill]: 3 === i,
                [et.freeTrialPillTier2OldGradientFill]: 4 === i,
                [et.lightBackgroundPill]: 5 === i
            }),
            children: (0, _.jsx)(h.Text, {
                variant: "text-xs/bold",
                className: E()(et.freeTrialPillText, {
                    [et.freeTrialPillTextInverted]: 0 !== i && 2 !== i,
                    [et.freeTrialPillTextTier0]: 0 === i,
                    [et.freeTrialPillTextTier2]: 2 === i
                }),
                children: t
            })
        })
    }

    function es(e) {
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
                t = "url(#".concat(q.PREMIUM_NEW_TIER_2_SVG_GRADIENT_ID, ")");
                break;
            case 4:
            case 5:
                t = "url(#".concat(q.PREMIUM_OLD_TIER_2_SVG_GRADIENT_ID, ")");
                break;
            default:
                t = "white"
        }
        return s ? (0, _.jsxs)("div", {
            className: E()(i, et.freeTrialPillWithSparkles),
            children: [(0, _.jsx)(q.SparkleStar, {
                foreground: et.sparkleStar1,
                color: t
            }), (0, _.jsx)(q.SparkleStar, {
                foreground: et.sparkleStar2,
                color: t
            }), (0, _.jsx)(q.SparkleStar, {
                foreground: et.sparkleStar3,
                color: t
            }), (0, _.jsx)(er, {
                text: n,
                colorOptions: r
            }), (0, _.jsx)(q.SparkleStar, {
                foreground: et.sparkleStar4,
                color: t
            }), (0, _.jsx)(q.SparkleStar, {
                foreground: et.sparkleStar5,
                color: t
            })]
        }) : (0, _.jsxs)("div", {
            className: E()(i, et.freeTrialPillWithSparkles),
            children: [(0, _.jsx)(er, {
                text: n,
                colorOptions: r
            }), (0, _.jsx)(q.SparkleStar, {
                foreground: et.sparkleStar1,
                style: {
                    marginLeft: 4,
                    marginBottom: -6
                },
                color: t
            }), (0, _.jsx)(q.SparkleStar, {
                foreground: et.sparkleStar2,
                color: t
            })]
        })
    }

    function ea(e) {
        let {
            width: t = 83,
            height: n = 82,
            ...i
        } = e;
        return (0, _.jsxs)("svg", {
            ...(0, k.default)({
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

    function eo(e) {
        let {
            Icon: t,
            text: n,
            isNew: i = !1
        } = e;
        return (0, _.jsxs)("div", {
            className: et.item,
            children: [(0, _.jsx)(t, {
                className: et.icon
            }), (0, _.jsx)(h.Text, {
                variant: "text-md/normal",
                color: "always-white",
                children: n
            }), i ? (0, _.jsx)(R.default, {
                className: et.newTagItem,
                forceUseColorForSparkles: !0,
                shouldInheritBackgroundColor: !0,
                shouldInheritTextColor: !0
            }) : null]
        })
    }

    function el(e) {
        var t;
        let {
            defaultPriceString: n,
            subscriptionPlan: i,
            discountOffer: r
        } = e, s = (0, K.useDiscountedPrice)(i);
        return (0, _.jsx)(_.Fragment, {
            children: ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION_GENERIC.format({
                numMonths: null !== (t = r.discount.user_usage_limit) && void 0 !== t ? t : J.DISCOUNT_DURATION_FALLBACK,
                discountedPrice: s,
                regularPrice: n
            })
        })
    }

    function eu(e) {
        var t, n, i, r, s, a;
        let {
            isGift: o,
            premiumTier: l,
            offerTierMatchesCard: u,
            offerType: d,
            showYearlyPrice: c,
            isStacked: I,
            isFullScreen: S,
            priceOptions: A
        } = e, m = (0, f.useStateFromStores)([L.default], () => L.default.getPremiumTypeSubscription()), N = (0, f.useStateFromStores)([g.default], () => g.default.getCurrentUser()), O = (0, Y.useHasDiscountApplied)(), p = (0, Y.useActiveDiscountInfo)(), R = l === J.PremiumTypes.TIER_0 ? J.PremiumSubscriptionSKUs.TIER_0 : J.PremiumSubscriptionSKUs.TIER_2, C = (null == m ? void 0 : m.trialId) != null ? null == N ? void 0 : N.premiumType : O ? J.PremiumTypes.TIER_2 : null, D = (0, W.usePremiumTrialOffer)(), v = (0, j.usePremiumDiscountOffer)(), M = null == D ? void 0 : D.subscription_trial;
        if (!o && null != C && l === C && null != m && null != m.planIdFromItems && !I) {
            let e = null != m.trialEndsAt ? T()(null == m ? void 0 : m.trialEndsAt).diff(T()(), "d") : 0,
                i = J.SubscriptionPlanInfo[m.planIdFromItems],
                r = F.default.formatPriceString(F.default.getDefaultPrice(i.id), i.interval);
            return (0, _.jsx)(_.Fragment, {
                children: (0, _.jsx)(h.Heading, {
                    variant: "heading-md/normal",
                    color: "always-white",
                    className: et.trialHeader,
                    children: 0 === d ? ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
                        remainingTime: e,
                        price: r
                    }) : ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                        percent: null !== (t = null == p ? void 0 : p.percentage) && void 0 !== t ? t : J.DISCOUNT_PERCENTAGE_FALLBACK,
                        regularPrice: r,
                        numMonths: null !== (n = null == p ? void 0 : p.duration) && void 0 !== n ? n : J.DISCOUNT_DURATION_FALLBACK
                    })
                })
            })
        }
        if (!o && u && !I) {
            let e = F.default.formatPriceString(F.default.getDefaultPrice(l === J.PremiumTypes.TIER_0 ? J.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : J.SubscriptionPlans.PREMIUM_MONTH_TIER_2), J.SubscriptionIntervalTypes.MONTH);
            if (0 === d) return (0, _.jsx)(h.Heading, {
                variant: "heading-md/normal",
                color: "always-white",
                className: et.trialHeader,
                children: ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
                    planName: (0, F.getTierDisplayName)(null !== (r = J.PREMIUM_SKU_TO_MONTHLY_PLAN[null !== (i = null == M ? void 0 : M.sku_id) && void 0 !== i ? i : J.PremiumSubscriptionSKUs.NONE]) && void 0 !== r ? r : J.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
                    duration: (0, F.formatIntervalDuration)({
                        intervalType: null !== (s = null == M ? void 0 : M.interval) && void 0 !== s ? s : J.SubscriptionIntervalTypes.DAY,
                        intervalCount: null !== (a = null == M ? void 0 : M.interval_count) && void 0 !== a ? a : 30,
                        capitalize: !1
                    }),
                    price: e
                })
            });
            if (null != v) return (0, _.jsx)(h.Heading, {
                variant: "heading-md/normal",
                color: "always-white",
                className: et.trialHeader,
                children: (0, _.jsx)(el, {
                    defaultPriceString: e,
                    subscriptionPlan: J.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
                    discountOffer: v
                })
            })
        }
        return (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(Q.default, {
                subscriptionTier: R,
                isGift: o,
                className: E()(et.price, {
                    [et.priceStacked]: I && S,
                    [et.priceStackedSmallScreen]: I && !S
                }),
                variant: I ? "heading-lg/extrabold" : void 0,
                priceOptions: A
            }), c && (0, _.jsx)(Q.default, {
                subscriptionTier: R,
                interval: J.SubscriptionIntervalTypes.YEAR,
                isGift: o,
                className: et.price,
                priceOptions: A
            })]
        })
    }

    function ed() {
        return (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(eo, {
                Icon: B.default,
                text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                    maxUploadPremium: (0, F.getMaxFileSizeForPremiumType)(J.PremiumTypes.TIER_0, {
                        useSpace: !1
                    })
                })
            }), (0, _.jsx)(eo, {
                Icon: y.default,
                text: ee.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
            }), (0, _.jsx)(eo, {
                Icon: v.default,
                text: ee.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
            }), (0, _.jsx)(eo, {
                Icon: G.default,
                text: ee.default.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
            })]
        })
    }

    function e_(e) {
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
        } = e, c = (0, f.useStateFromStores)([L.default], () => L.default.getPremiumTypeSubscription()), I = (0, f.useStateFromStores)([g.default], () => g.default.getCurrentUser()), T = (0, W.usePremiumTrialOffer)(), S = null == T ? void 0 : null === (t = T.subscription_trial) || void 0 === t ? void 0 : t.sku_id, A = (null == c ? void 0 : c.trialId) != null, m = (null == c ? void 0 : c.trialId) != null ? null == I ? void 0 : I.premiumType : null, N = null != S || A, O = 1 === l;
        return (0, _.jsxs)("div", {
            className: E()(et.card, a, {
                [et.card]: !O,
                [et.stackedCard]: O,
                [et.withTier0Rim]: !o && N,
                [et.withCardHover]: !o && N,
                [et.tier0Stacked]: O,
                [et.tier0]: !O
            }),
            children: [S === J.PremiumSubscriptionSKUs.TIER_0 ? (0, _.jsxs)(_.Fragment, {
                children: [(0, _.jsx)(es, {
                    text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                    className: et.topRimPill,
                    colorOptions: 0
                }), (0, _.jsx)("div", {
                    className: et.rimGlowTier0
                })]
            }) : null, i && (0, _.jsx)(ea, {
                className: et.newCircleIcon
            }), n ? (0, _.jsx)("div", {
                className: et.wumpusImageContainer,
                children: (0, _.jsx)(D.default, {
                    src: en,
                    mediaLayoutType: $.MediaLayoutType.RESPONSIVE,
                    width: 270,
                    height: 242,
                    zoomable: !1
                })
            }) : null, o || S !== J.PremiumSubscriptionSKUs.TIER_0 ? null : (0, _.jsxs)(_.Fragment, {
                children: [(0, _.jsx)(es, {
                    text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                    className: et.topRimPill,
                    colorOptions: 0
                }), (0, _.jsx)("div", {
                    className: et.rimGlowTier0
                })]
            }), o || m !== J.PremiumTypes.TIER_0 ? null : (0, _.jsxs)(_.Fragment, {
                children: [(0, _.jsx)(es, {
                    text: ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                    className: et.topRimPill,
                    colorOptions: 0
                }), (0, _.jsx)("div", {
                    className: et.rimGlowTier0
                })]
            }), (0, _.jsxs)("div", {
                className: E()({
                    [et.body]: O && u,
                    [et.bodySmallScreen]: O && !u
                }),
                children: [(0, _.jsx)("div", {
                    className: E()({
                        [et.planContainer]: O && u,
                        [et.planContainerSmallScreen]: O && !u
                    }),
                    children: (0, _.jsxs)("div", {
                        className: E()({
                            [et.subscriptionPlanInfo]: O
                        }),
                        children: [(0, _.jsx)(b.default, {
                            className: E()({
                                [et.title]: !O,
                                [et.tier0Title]: !O,
                                [et.tier0TitleStacked]: O && u,
                                [et.tier0TitleStackedSmallScreen]: O && !u
                            })
                        }), (0, _.jsx)(eu, {
                            isGift: o,
                            premiumTier: J.PremiumTypes.TIER_0,
                            offerType: 0,
                            offerTierMatchesCard: S === J.PremiumSubscriptionSKUs.TIER_0,
                            showYearlyPrice: s,
                            isStacked: O,
                            isFullScreen: u,
                            priceOptions: d
                        })]
                    })
                }), (0, _.jsxs)("div", {
                    className: E()({
                        [et.perkContainer]: O && u,
                        [et.perkContainerSmallScreen]: O && !u
                    }),
                    children: [(0, _.jsxs)("div", {
                        children: [O && (0, _.jsx)(h.Heading, {
                            variant: "heading-xxl/extrabold",
                            className: u ? et.stackedCardTitle : et.stackedCardTitleSmallScreen,
                            children: ee.default.Messages.NITRO_MARKETING_JUST_THE_BASICS
                        }), (0, _.jsx)("div", {
                            className: E()({
                                [et.listItemsBasic]: O
                            }),
                            children: (0, _.jsx)(ed, {})
                        })]
                    }), O && r]
                })]
            }), !O && r, o || S !== J.PremiumSubscriptionSKUs.TIER_0 ? null : (0, _.jsx)(q.ButtonSparkleGroup, {
                tier: J.PremiumTypes.TIER_0
            })]
        })
    }

    function ec(e) {
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
            children: [(0, _.jsx)(eo, {
                Icon: P.default,
                text: ee.default.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
                    numBoosts: J.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                    percentageOff: (0, V.formatPercent)(r, J.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                })
            }), (0, _.jsx)(eo, {
                Icon: B.default,
                text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                    maxUploadPremium: (0, F.getMaxFileSizeForPremiumType)(J.PremiumTypes.TIER_2, {
                        useSpace: !1
                    })
                })
            }), (0, _.jsx)(eo, {
                Icon: y.default,
                text: ee.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
            }), (0, _.jsx)(eo, {
                Icon: w.default,
                text: ee.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
            }), (0, _.jsx)(eo, {
                Icon: M.default,
                text: ee.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
            })]
        });
        return (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(eo, {
                Icon: B.default,
                text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                    maxUploadPremium: (0, F.getMaxFileSizeForPremiumType)(J.PremiumTypes.TIER_2, {
                        useSpace: !1
                    })
                })
            }), (0, _.jsx)(eo, {
                Icon: y.default,
                text: ee.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
            }), (0, _.jsx)(eo, {
                Icon: v.default,
                text: ee.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
            }), (0, _.jsx)(eo, {
                Icon: w.default,
                text: ee.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
            }), (0, _.jsx)(eo, {
                Icon: P.default,
                text: ee.default.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
            }), (0, _.jsx)(eo, {
                Icon: M.default,
                text: ee.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
            }), a && o && (0, _.jsx)(Z.default, {})]
        })
    }

    function eE(e) {
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
            N = (0, W.usePremiumTrialOffer)(),
            O = null == N ? void 0 : null === (t = N.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
            p = (null == T ? void 0 : T.trialId) != null ? null == S ? void 0 : S.premiumType : null,
            R = (0, Y.useIsInPremiumOfferExperience)(),
            C = (0, j.usePremiumDiscountOffer)(),
            v = (0, Y.useHasDiscountApplied)(),
            M = null != O || null != p ? 0 : null != C || v ? 1 : null,
            y = 1 === d,
            P = (0, z.useIsEligibleForBogoPromotion)(),
            b = !l && R,
            G = (0, z.getBOGOPillCopy)(),
            w = (0, A.isThemeLight)((0, m.default)()),
            B = w ? 5 : 2;
        return !b || y || w ? b && y && !w && (n = et.rimGlowTier2Stacked) : n = et.rimGlowTier2, (0, _.jsxs)("div", {
            className: E()(et.card, o, {
                [et.withTier2Rim]: b && !y,
                [et.withTier2RimStacked]: b && y,
                [et.withCardHover]: b,
                [et.tier2Stacked]: y,
                [et.tier2]: !y
            }),
            children: [!l && null != C && (0, j.discountOfferHasTier)(C, J.PremiumSubscriptionSKUs.TIER_2) && void 0 !== C.discount.amount ? (0, _.jsxs)(_.Fragment, {
                children: [(0, _.jsx)(es, {
                    text: v ? ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED : ee.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                        percent: C.discount.amount
                    }),
                    className: et.topRimPill,
                    colorOptions: B
                }), (0, _.jsx)("div", {
                    className: n
                })]
            }) : null, l || O !== J.PremiumSubscriptionSKUs.TIER_2 ? null : (0, _.jsxs)(_.Fragment, {
                children: [(0, _.jsx)(es, {
                    text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                    className: et.topRimPill,
                    colorOptions: B
                }), (0, _.jsx)("div", {
                    className: n
                })]
            }), l || p !== J.PremiumTypes.TIER_2 ? null : (0, _.jsxs)(_.Fragment, {
                children: [(0, _.jsx)(es, {
                    text: ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                    className: et.topRimPill,
                    colorOptions: B
                }), (0, _.jsx)("div", {
                    className: n
                })]
            }), !l && v && (0, _.jsxs)(_.Fragment, {
                children: [(0, _.jsx)(es, {
                    text: ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
                    className: et.topRimPill,
                    colorOptions: B
                }), (0, _.jsx)("div", {
                    className: n
                })]
            }), i ? (0, _.jsx)("div", {
                className: et.wumpusImageContainer,
                children: (0, _.jsx)(D.default, {
                    src: ei,
                    mediaLayoutType: $.MediaLayoutType.RESPONSIVE,
                    width: 270,
                    height: 242,
                    zoomable: !1
                })
            }) : null, (0, _.jsxs)("div", {
                className: E()({
                    [et.body]: y && c,
                    [et.bodySmallScreen]: y && !c
                }),
                children: [(0, _.jsx)("div", {
                    className: E()({
                        [et.planContainer]: y && c,
                        [et.planContainerSmallScreen]: y && !c
                    }),
                    children: (0, _.jsxs)("div", {
                        className: E()({
                            [et.subscriptionPlanInfo]: y
                        }),
                        children: [(0, _.jsx)(U.default, {
                            className: E()({
                                [et.title]: !y,
                                [et.tier2Title]: !y,
                                [et.tier2TitleStacked]: y && c,
                                [et.tier2TitleStackedSmallScreen]: y && !c
                            })
                        }), !l && O !== J.PremiumSubscriptionSKUs.TIER_2 && P && (0, _.jsx)(h.Text, {
                            variant: "text-xs/bold",
                            className: et.freeTrialPillInline,
                            children: G
                        }), (0, _.jsx)(eu, {
                            isGift: l,
                            premiumTier: J.PremiumTypes.TIER_2,
                            offerType: M,
                            offerTierMatchesCard: O === J.PremiumSubscriptionSKUs.TIER_2 || (0, j.discountOfferHasTier)(C, J.PremiumSubscriptionSKUs.TIER_2),
                            showYearlyPrice: s,
                            isStacked: y,
                            isFullScreen: c,
                            priceOptions: I
                        })]
                    })
                }), (0, _.jsxs)("div", {
                    className: E()({
                        [et.perkContainer]: y && c,
                        [et.perkContainerSmallScreen]: y && !c
                    }),
                    children: [(0, _.jsxs)("div", {
                        children: [y && (0, _.jsx)(h.Heading, {
                            className: E()({
                                [et.stackedCardTitle]: c,
                                [et.stackedCardTitleSmallScreen]: !c
                            }),
                            variant: "heading-xxl/extrabold",
                            children: ee.default.Messages.NITRO_MARKETING_CARDS_SUPERCHARGE_YOUR_DISCORD
                        }), (0, _.jsx)("div", {
                            className: E()({
                                [et.listItems]: y
                            }),
                            children: (0, _.jsx)(ec, {
                                featureSet: a,
                                isModal: u,
                                isGift: l
                            })
                        })]
                    }), y && (0, _.jsx)(X.default, {
                        isStacked: y,
                        ctaButton: r,
                        isGift: l,
                        trialOfferTier: O,
                        discountOffer: C
                    })]
                })]
            }), !y && (0, _.jsx)(X.default, {
                isStacked: y,
                ctaButton: r,
                isGift: l,
                trialOfferTier: O,
                discountOffer: C
            })]
        })
    }

    function eI(e) {
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
        } = (0, p.default)(O.default.PREMIUM_MARKETING_TIER_CARD), d = 1 === a, c = o === J.PremiumTypes.TIER_0, I = (0, f.useStateFromStores)([N.default], () => N.default.useReducedMotion);
        return (0, _.jsx)(p.AnalyticsLocationProvider, {
            value: u,
            children: (0, _.jsxs)("div", {
                className: E()({
                    [et.premiumCards]: !d,
                    [et.premiumCardsStackedVariant]: d && l,
                    [et.premiumCardsStackedVariantSmallScreen]: d && !l
                }, s),
                children: [(0, _.jsx)(e_, {
                    className: E()({
                        [et.tierCardFocused]: d && c,
                        [et.tierCardHidden]: d && !c,
                        [et.tierCardAnimation]: d && !I
                    }),
                    showWumpus: t,
                    showBadge: n,
                    ctaButton: i,
                    variant: a,
                    isFullScreen: l
                }), (0, _.jsx)(eE, {
                    className: E()({
                        [et.tierCardFocused]: d && !c,
                        [et.tierCardHidden]: d && c,
                        [et.tierCardAnimation]: d && !I
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