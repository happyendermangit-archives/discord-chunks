function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PremiumPillAndSparklesColorOptions: function() {
            return u
        },
        PremiumPillWithSparkles: function() {
            return eu
        },
        PremiumTierCardsVariant: function() {
            return c
        },
        Tier0Card: function() {
            return e_
        },
        Tier2Card: function() {
            return ep
        },
        Tier2FeatureItems: function() {
            return eE
        },
        Tier2FeatureSet: function() {
            return l
        },
        default: function() {
            return em
        }
    });
    var r, o, i, a, u, s, l, c, f = n("470079"),
        d = n("803997"),
        _ = n.n(d),
        E = n("913527"),
        p = n.n(E),
        m = n("898511"),
        y = n("447515"),
        I = n("751848"),
        h = n("784184"),
        O = n("523263"),
        T = n("622780"),
        S = n("649455"),
        v = n("396586"),
        g = n("419137"),
        A = n("225098"),
        b = n("208454"),
        N = n("428920"),
        R = n("486367"),
        C = n("884071"),
        P = n("754318"),
        D = n("227783"),
        L = n("134466"),
        M = n("58038"),
        U = n("178960"),
        w = n("412791"),
        k = n("901482"),
        G = n("233927"),
        B = n("994500"),
        j = n("79738"),
        F = n("830721"),
        V = n("637066"),
        H = n("414012"),
        x = n("357434"),
        Y = n("587753"),
        W = n("844615"),
        K = n("828282"),
        z = n("996758"),
        X = n("575806"),
        q = n("939690"),
        Q = n("991145"),
        J = n("693069"),
        Z = n("868615"),
        $ = n("766063"),
        ee = n("941504"),
        et = n("124892"),
        en = n("476945"),
        er = n("945182");

    function eo(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function ei(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                eo(e, t, n[t])
            })
        }
        return e
    }

    function ea(e) {
        var t, n, r = e.text,
            o = e.className,
            i = e.colorOptions,
            a = void 0 === i ? 2 : i;
        return f.createElement("div", {
            className: _()(o, et.freeTrialPill, (eo(t = {}, et.freeTrialPillTier0GradientFill, 1 === a), eo(t, et.freeTrialPillTier2GradientFill, 3 === a), eo(t, et.freeTrialPillTier2OldGradientFill, 4 === a), eo(t, et.lightBackgroundPill, 5 === a), t))
        }, f.createElement(h.Text, {
            variant: "text-xs/bold",
            className: _()(et.freeTrialPillText, (eo(n = {}, et.freeTrialPillTextInverted, 0 !== a && 2 !== a), eo(n, et.freeTrialPillTextTier0, 0 === a), eo(n, et.freeTrialPillTextTier2, 2 === a), n))
        }, r))
    }

    function eu(e) {
        var t, n = e.text,
            r = e.className,
            o = e.colorOptions,
            i = void 0 === o ? 2 : o,
            a = e.isPillOnBorder;
        switch (i) {
            case 1:
                t = y.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
                break;
            case 3:
                t = "url(#".concat(Q.PREMIUM_NEW_TIER_2_SVG_GRADIENT_ID, ")");
                break;
            case 4:
            case 5:
                t = "url(#".concat(Q.PREMIUM_OLD_TIER_2_SVG_GRADIENT_ID, ")");
                break;
            default:
                t = "white"
        }
        return void 0 === a || a ? f.createElement("div", {
            className: _()(r, et.freeTrialPillWithSparkles)
        }, f.createElement(Q.SparkleStar, {
            foreground: et.sparkleStar1,
            color: t
        }), f.createElement(Q.SparkleStar, {
            foreground: et.sparkleStar2,
            color: t
        }), f.createElement(Q.SparkleStar, {
            foreground: et.sparkleStar3,
            color: t
        }), f.createElement(ea, {
            text: n,
            colorOptions: i
        }), f.createElement(Q.SparkleStar, {
            foreground: et.sparkleStar4,
            color: t
        }), f.createElement(Q.SparkleStar, {
            foreground: et.sparkleStar5,
            color: t
        })) : f.createElement("div", {
            className: _()(r, et.freeTrialPillWithSparkles)
        }, f.createElement(ea, {
            text: n,
            colorOptions: i
        }), f.createElement(Q.SparkleStar, {
            foreground: et.sparkleStar1,
            style: {
                marginLeft: 4,
                marginBottom: -6
            },
            color: t
        }), f.createElement(Q.SparkleStar, {
            foreground: et.sparkleStar2,
            color: t
        }))
    }

    function es(e) {
        var t, n, r = e.width,
            o = e.height,
            i = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(e, ["width", "height"]);
        return f.createElement("svg", (t = ei({}, (0, B.default)(ei({}, i))), n = (n = {
            width: void 0 === r ? 83 : r,
            height: void 0 === o ? 82 : o,
            viewBox: "0 0 83 82",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t), f.createElement("g", {
            clipPath: "url(#clip0_1691_113820)"
        }, f.createElement("path", {
            d: "M75.6975 45.1322C75.2844 48.0717 70.2815 49.7001 69.2458 52.3302C68.0858 55.0537 70.4287 59.7129 68.6614 62.0181C66.8941 64.3233 61.7294 63.1533 59.479 64.9465C57.2438 66.6308 56.836 71.9026 54.133 72.966C51.5389 74.0448 47.5818 70.602 44.6592 70.8574C41.8456 71.1281 38.9013 75.4884 35.9617 75.0752C33.0222 74.6621 31.3938 69.6592 28.7638 68.6235C26.0402 67.4635 21.381 69.8064 19.0758 68.0391C16.7706 66.2718 17.9406 61.1071 16.1474 58.8566C14.5873 56.5279 9.31547 56.1201 8.25204 53.4171C7.17332 50.823 10.6161 46.8659 10.3607 43.9434C9.96577 41.2233 5.60554 38.279 6.01868 35.3394C6.43181 32.3999 11.4347 30.7715 12.4704 28.1414C13.6304 25.4179 11.2876 20.7587 13.0548 18.4535C14.8221 16.1483 19.9868 17.3183 22.2373 15.5251C24.4724 13.8408 24.8802 8.56898 27.5832 7.50556C30.1774 6.42683 34.1345 9.86958 37.057 9.61417C39.8706 9.34346 42.8149 4.98323 45.7545 5.39636C48.6941 5.80949 50.3224 10.8124 52.9525 11.8481C55.6761 13.0081 60.3352 10.6652 62.6404 12.4325C64.9456 14.1998 63.7756 19.3645 65.5688 21.615C67.2531 23.8501 72.5249 24.2579 73.5884 26.9609C74.6671 29.555 71.2243 33.5122 71.4797 36.4347C71.7505 39.2483 76.1107 42.1926 75.6975 45.1322Z",
            fill: "currentColor"
        })), f.createElement("path", {
            d: "M30.1999 41.1212L26.9681 32.3582L23.3318 31.8471L21.6757 43.6313L24.3355 44.0051L25.5209 35.571L28.9482 44.6534L32.3488 45.1313L34.0049 33.3471L31.3451 32.9733L30.1999 41.1212ZM43.2501 41.8738C43.6191 39.2476 42.3243 37.5893 39.7655 37.2296C36.971 36.8369 34.9959 38.4305 34.6269 41.0567C34.2341 43.8513 35.9048 45.8886 38.935 46.3145C40.3996 46.5203 41.6035 46.2603 42.3119 45.862L42.5887 43.8924C41.8322 44.2668 40.8661 44.4228 39.9065 44.288C38.2567 44.0561 37.4063 43.2671 37.286 42.1686L43.0939 42.9849L43.2501 41.8738ZM39.5418 39.3098C40.5182 39.447 41.0822 40.0756 40.9668 41.1409L37.5326 40.6583C37.8069 39.6839 38.4812 39.1607 39.5418 39.3098ZM53.3558 44.7704L52.6485 39.2977L49.9214 38.9145L47.757 43.9321L47.211 38.5335L44.4838 38.1503L45.6771 47.0045L48.4043 47.3878L50.7631 42.2087L51.6534 47.8444L54.4311 48.2348L58.2208 40.0809L55.5104 39.7L53.3558 44.7704ZM61.6245 45.4004L62.7507 37.3871L60.0067 37.0015L58.8805 45.0147L61.6245 45.4004ZM59.7123 49.2345C60.6719 49.3694 61.4423 48.7738 61.5677 47.8816C61.6954 46.9725 61.1167 46.2045 60.1571 46.0696C59.1975 45.9348 58.4127 46.5112 58.2849 47.4202C58.1595 48.3125 58.7527 49.0997 59.7123 49.2345Z",
            fill: "#5865F2"
        }), f.createElement("path", {
            d: "M57.6991 28.0304L61.3718 26.9774C61.3856 26.9721 61.3978 26.9632 61.4071 26.9517C61.4163 26.9401 61.4223 26.9262 61.4243 26.9116C61.4264 26.8969 61.4245 26.882 61.4188 26.8683C61.4131 26.8546 61.4038 26.8427 61.392 26.8338L58.1518 24.8093C58.1409 24.8077 58.1311 24.8019 58.1244 24.7932C58.1178 24.7844 58.1149 24.7733 58.1165 24.7625L57.0607 21.0782C57.0282 21.0109 56.9459 20.9993 56.9167 21.058L54.8864 24.3085C54.8629 24.3261 54.86 24.3466 54.8394 24.3437L51.1462 25.3939C51.1324 25.3992 51.1202 25.4081 51.1109 25.4196C51.1017 25.4312 51.0957 25.445 51.0937 25.4597C51.0916 25.4744 51.0935 25.4893 51.0992 25.503C51.1049 25.5167 51.1142 25.5286 51.126 25.5375L54.3867 27.5649C54.4073 27.5678 54.4044 27.5883 54.4221 27.6117L55.4778 31.296C55.4898 31.3604 55.5721 31.372 55.6219 31.3162L57.6522 28.0657C57.6537 28.0548 57.6595 28.045 57.6683 28.0384C57.6771 28.0318 57.6882 28.0289 57.6991 28.0304V28.0304Z",
            fill: "#5865F2"
        }), f.createElement("path", {
            d: "M27.9939 54.8801L30.1446 54.2599C30.156 54.2502 30.1635 54.2367 30.1656 54.2219C30.1676 54.207 30.1642 54.1919 30.1559 54.1795L28.2594 52.9905C28.2541 52.9897 28.2493 52.9869 28.2461 52.9826C28.2429 52.9783 28.2415 52.9729 28.2422 52.9676L27.626 50.8105C27.6275 50.7998 27.6247 50.789 27.6182 50.7804C27.6118 50.7718 27.6022 50.7662 27.5915 50.7647C27.5809 50.7632 27.5701 50.766 27.5616 50.7725C27.553 50.7789 27.5473 50.7886 27.5458 50.7992L26.3589 52.7029L26.3388 52.7001L24.1881 53.3203C24.1775 53.3188 24.1667 53.3216 24.1581 53.3281C24.1495 53.3346 24.1439 53.3442 24.1424 53.3549C24.1409 53.3655 24.1437 53.3763 24.1501 53.3849C24.1566 53.3935 24.1662 53.3992 24.1768 53.4007L26.0733 54.5897C26.0786 54.5904 26.0834 54.5933 26.0866 54.5976C26.0898 54.6019 26.0912 54.6073 26.0905 54.6126L26.7067 56.7697C26.7164 56.7811 26.7299 56.7886 26.7446 56.7907C26.7594 56.7928 26.7745 56.7893 26.7869 56.7809L27.9738 54.8773C27.9738 54.8773 27.9738 54.8773 27.9939 54.8801Z",
            fill: "#5865F2"
        }), f.createElement("defs", null, f.createElement("clipPath", {
            id: "clip0_1691_113820"
        }, f.createElement("rect", {
            width: "70.3636",
            height: "70.3636",
            fill: "white",
            transform: "translate(10.915 0.5) rotate(8)"
        }))))
    }

    function el(e) {
        var t = e.Icon,
            n = e.text,
            r = e.isNew;
        return f.createElement("div", {
            className: et.item
        }, f.createElement(t, {
            className: et.icon
        }), f.createElement(h.Text, {
            variant: "text-md/normal",
            color: "always-white"
        }, n), void 0 !== r && r ? f.createElement(g.default, {
            className: et.newTagItem,
            forceUseColorForSparkles: !0,
            shouldInheritBackgroundColor: !0,
            shouldInheritTextColor: !0
        }) : null)
    }

    function ec(e) {
        var t, n = e.defaultPriceString,
            r = e.subscriptionPlan,
            o = e.discountOffer,
            i = (0, K.useDiscountedPrice)(r);
        return f.createElement(f.Fragment, null, ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION_GENERIC.format({
            numMonths: null !== (t = o.discount.user_usage_limit) && void 0 !== t ? t : Z.DISCOUNT_DURATION_FALLBACK,
            discountedPrice: i,
            regularPrice: n
        }))
    }

    function ef(e) {
        var t, n = e.isGift,
            r = e.premiumTier,
            o = e.offerTierMatchesCard,
            i = e.offerType,
            a = e.showYearlyPrice,
            u = e.isStacked,
            s = e.isFullScreen,
            l = e.priceOptions,
            c = (0, m.useStateFromStores)([N.default], function() {
                return N.default.getPremiumTypeSubscription()
            }),
            d = (0, m.useStateFromStores)([b.default], function() {
                return b.default.getCurrentUser()
            }),
            E = (0, x.useHasDiscountApplied)(),
            y = (0, x.useActiveDiscountInfo)(),
            I = r === Z.PremiumTypes.TIER_0 ? Z.PremiumSubscriptionSKUs.TIER_0 : Z.PremiumSubscriptionSKUs.TIER_2,
            O = (null == c ? void 0 : c.trialId) != null ? null == d ? void 0 : d.premiumType : E ? Z.PremiumTypes.TIER_2 : null,
            T = (0, W.usePremiumTrialOffer)(),
            S = (0, Y.usePremiumDiscountOffer)(),
            v = null == T ? void 0 : T.subscription_trial;
        if (!n && null != O && r === O && null != c && null != c.planIdFromItems && !u) {
            var g, A, R = null != c.trialEndsAt ? p()(null == c ? void 0 : c.trialEndsAt).diff(p()(), "d") : 0,
                C = Z.SubscriptionPlanInfo[c.planIdFromItems],
                P = F.default.formatPriceString(F.default.getDefaultPrice(C.id), C.interval);
            return f.createElement(f.Fragment, null, f.createElement(h.Heading, {
                variant: "heading-md/normal",
                color: "always-white",
                className: et.trialHeader
            }, 0 === i ? ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
                remainingTime: R,
                price: P
            }) : ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                percent: null !== (g = null == y ? void 0 : y.percentage) && void 0 !== g ? g : Z.DISCOUNT_PERCENTAGE_FALLBACK,
                regularPrice: P,
                numMonths: null !== (A = null == y ? void 0 : y.duration) && void 0 !== A ? A : Z.DISCOUNT_DURATION_FALLBACK
            })))
        }
        if (!n && o && !u) {
            var D, L, M, U, w = F.default.formatPriceString(F.default.getDefaultPrice(r === Z.PremiumTypes.TIER_0 ? Z.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : Z.SubscriptionPlans.PREMIUM_MONTH_TIER_2), Z.SubscriptionIntervalTypes.MONTH);
            if (0 === i) return f.createElement(h.Heading, {
                variant: "heading-md/normal",
                color: "always-white",
                className: et.trialHeader
            }, ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
                planName: (0, F.getTierDisplayName)(null !== (L = Z.PREMIUM_SKU_TO_MONTHLY_PLAN[null !== (D = null == v ? void 0 : v.sku_id) && void 0 !== D ? D : Z.PremiumSubscriptionSKUs.NONE]) && void 0 !== L ? L : Z.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
                duration: (0, F.formatIntervalDuration)({
                    intervalType: null !== (M = null == v ? void 0 : v.interval) && void 0 !== M ? M : Z.SubscriptionIntervalTypes.DAY,
                    intervalCount: null !== (U = null == v ? void 0 : v.interval_count) && void 0 !== U ? U : 30,
                    capitalize: !1
                }),
                price: w
            }));
            if (null != S) return f.createElement(h.Heading, {
                variant: "heading-md/normal",
                color: "always-white",
                className: et.trialHeader
            }, f.createElement(ec, {
                defaultPriceString: w,
                subscriptionPlan: Z.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
                discountOffer: S
            }))
        }
        return f.createElement(f.Fragment, null, f.createElement(q.default, {
            subscriptionTier: I,
            isGift: n,
            className: _()(et.price, (eo(t = {}, et.priceStacked, u && s), eo(t, et.priceStackedSmallScreen, u && !s), t)),
            variant: u ? "heading-lg/extrabold" : void 0,
            priceOptions: l
        }), a && f.createElement(q.default, {
            subscriptionTier: I,
            interval: Z.SubscriptionIntervalTypes.YEAR,
            isGift: n,
            className: et.price,
            priceOptions: l
        }))
    }

    function ed() {
        return f.createElement(f.Fragment, null, f.createElement(el, {
            Icon: G.default,
            text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                maxUploadPremium: (0, F.getMaxFileSizeForPremiumType)(Z.PremiumTypes.TIER_0, {
                    useSpace: !1
                })
            })
        }), f.createElement(el, {
            Icon: D.default,
            text: ee.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
        }), f.createElement(el, {
            Icon: C.default,
            text: ee.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
        }), f.createElement(el, {
            Icon: w.default,
            text: ee.default.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
        }))
    }

    function e_(e) {
        var t, n, r, o, i, a, u = e.showWumpus,
            s = e.showBadge,
            l = e.ctaButton,
            c = e.showYearlyPrice,
            d = e.className,
            E = e.isGift,
            p = void 0 !== E && E,
            y = e.variant,
            I = e.isFullScreen,
            O = e.priceOptions,
            T = (0, m.useStateFromStores)([N.default], function() {
                return N.default.getPremiumTypeSubscription()
            }),
            S = (0, m.useStateFromStores)([b.default], function() {
                return b.default.getCurrentUser()
            }),
            v = (0, W.usePremiumTrialOffer)(),
            g = null == v ? void 0 : null === (t = v.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
            A = (null == T ? void 0 : T.trialId) != null,
            C = (null == T ? void 0 : T.trialId) != null ? null == S ? void 0 : S.premiumType : null,
            P = null != g || A,
            D = 1 === (void 0 === y ? 0 : y);
        return f.createElement("div", {
            className: _()(et.card, d, (eo(n = {}, et.card, !D), eo(n, et.stackedCard, D), eo(n, et.withTier0Rim, !p && P), eo(n, et.withCardHover, !p && P), eo(n, et.tier0Stacked, D), eo(n, et.tier0, !D), n))
        }, g === Z.PremiumSubscriptionSKUs.TIER_0 ? f.createElement(f.Fragment, null, f.createElement(eu, {
            text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
            className: et.topRimPill,
            colorOptions: 0
        }), f.createElement("div", {
            className: et.rimGlowTier0
        })) : null, s && f.createElement(es, {
            className: et.newCircleIcon
        }), u ? f.createElement("div", {
            className: et.wumpusImageContainer
        }, f.createElement(R.default, {
            src: en,
            mediaLayoutType: $.MediaLayoutType.RESPONSIVE,
            width: 270,
            height: 242,
            zoomable: !1
        })) : null, p || g !== Z.PremiumSubscriptionSKUs.TIER_0 ? null : f.createElement(f.Fragment, null, f.createElement(eu, {
            text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
            className: et.topRimPill,
            colorOptions: 0
        }), f.createElement("div", {
            className: et.rimGlowTier0
        })), p || C !== Z.PremiumTypes.TIER_0 ? null : f.createElement(f.Fragment, null, f.createElement(eu, {
            text: ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: et.topRimPill,
            colorOptions: 0
        }), f.createElement("div", {
            className: et.rimGlowTier0
        })), f.createElement("div", {
            className: _()((eo(r = {}, et.body, D && I), eo(r, et.bodySmallScreen, D && !I), r))
        }, f.createElement("div", {
            className: _()((eo(o = {}, et.planContainer, D && I), eo(o, et.planContainerSmallScreen, D && !I), o))
        }, f.createElement("div", {
            className: _()(eo({}, et.subscriptionPlanInfo, D))
        }, f.createElement(U.default, {
            className: _()((eo(i = {}, et.title, !D), eo(i, et.tier0Title, !D), eo(i, et.tier0TitleStacked, D && I), eo(i, et.tier0TitleStackedSmallScreen, D && !I), i))
        }), f.createElement(ef, {
            isGift: p,
            premiumTier: Z.PremiumTypes.TIER_0,
            offerType: 0,
            offerTierMatchesCard: g === Z.PremiumSubscriptionSKUs.TIER_0,
            showYearlyPrice: c,
            isStacked: D,
            isFullScreen: I,
            priceOptions: O
        }))), f.createElement("div", {
            className: _()((eo(a = {}, et.perkContainer, D && I), eo(a, et.perkContainerSmallScreen, D && !I), a))
        }, f.createElement("div", null, D && f.createElement(h.Heading, {
            variant: "heading-xxl/extrabold",
            className: I ? et.stackedCardTitle : et.stackedCardTitleSmallScreen
        }, ee.default.Messages.NITRO_MARKETING_JUST_THE_BASICS), f.createElement("div", {
            className: _()(eo({}, et.listItemsBasic, D))
        }, f.createElement(ed, null))), D && l)), !D && l, p || g !== Z.PremiumSubscriptionSKUs.TIER_0 ? null : f.createElement(Q.ButtonSparkleGroup, {
            tier: Z.PremiumTypes.TIER_0
        }))
    }

    function eE(e) {
        var t = e.featureSet,
            n = e.isModal,
            r = e.isGift,
            o = (0, m.useStateFromStores)([A.default], function() {
                return A.default.locale
            }),
            i = (0, m.useStateFromStores)([H.default], function() {
                return H.default.affinities
            }),
            a = V.default.useExperiment({
                location: "planSelection"
            }, {
                autoTrackExposure: !1
            }).planSelectionEnabled,
            u = void 0 !== n && n && !(void 0 !== r && r) && i.length > 0;
        u && V.default.trackExposure({
            location: "planSelection"
        });
        if ((void 0 === t ? 0 : t) === 1) return f.createElement(f.Fragment, null, f.createElement(el, {
            Icon: L.default,
            text: ee.default.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
                numBoosts: Z.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                percentageOff: (0, j.formatPercent)(o, Z.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
            })
        }), f.createElement(el, {
            Icon: G.default,
            text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                maxUploadPremium: (0, F.getMaxFileSizeForPremiumType)(Z.PremiumTypes.TIER_2, {
                    useSpace: !1
                })
            })
        }), f.createElement(el, {
            Icon: D.default,
            text: ee.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
        }), f.createElement(el, {
            Icon: k.default,
            text: ee.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
        }), f.createElement(el, {
            Icon: P.default,
            text: ee.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
        }));
        return f.createElement(f.Fragment, null, f.createElement(el, {
            Icon: G.default,
            text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                maxUploadPremium: (0, F.getMaxFileSizeForPremiumType)(Z.PremiumTypes.TIER_2, {
                    useSpace: !1
                })
            })
        }), f.createElement(el, {
            Icon: D.default,
            text: ee.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
        }), f.createElement(el, {
            Icon: C.default,
            text: ee.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
        }), f.createElement(el, {
            Icon: k.default,
            text: ee.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
        }), f.createElement(el, {
            Icon: L.default,
            text: ee.default.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
        }), f.createElement(el, {
            Icon: P.default,
            text: ee.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
        }), a && u && f.createElement(J.default, null))
    }

    function ep(e) {
        var t, n, r, o, i, a, u, s, l = e.showWumpus,
            c = e.ctaButton,
            d = e.showYearlyPrice,
            E = e.featureSet,
            p = e.className,
            y = e.isGift,
            T = void 0 !== y && y,
            S = e.isModal,
            v = e.variant,
            g = e.isFullScreen,
            A = e.priceOptions,
            C = (0, m.useStateFromStores)([N.default], function() {
                return N.default.getPremiumTypeSubscription()
            }),
            P = (0, m.useStateFromStores)([b.default], function() {
                return b.default.getCurrentUser()
            }),
            D = (0, W.usePremiumTrialOffer)(),
            L = null == D ? void 0 : null === (t = D.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
            U = (null == C ? void 0 : C.trialId) != null ? null == P ? void 0 : P.premiumType : null,
            w = (0, x.useIsInPremiumOfferExperience)(),
            k = (0, Y.usePremiumDiscountOffer)(),
            G = (0, x.useHasDiscountApplied)(),
            B = null != L || null != U ? 0 : null != k || G ? 1 : null,
            j = 1 === (void 0 === v ? 0 : v),
            F = (0, z.useIsEligibleForBogoPromotion)(),
            V = !T && w,
            H = (0, z.getBOGOPillCopy)(),
            K = (0, I.isThemeLight)((0, O.default)()),
            q = K ? 5 : 2;
        return !V || j || K ? V && j && !K && (n = et.rimGlowTier2Stacked) : n = et.rimGlowTier2, f.createElement("div", {
            className: _()(et.card, p, (eo(r = {}, et.withTier2Rim, V && !j), eo(r, et.withTier2RimStacked, V && j), eo(r, et.withCardHover, V), eo(r, et.tier2Stacked, j), eo(r, et.tier2, !j), r))
        }, !T && null != k && (0, Y.discountOfferHasTier)(k, Z.PremiumSubscriptionSKUs.TIER_2) && void 0 !== k.discount.amount ? f.createElement(f.Fragment, null, f.createElement(eu, {
            text: G ? ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED : ee.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                percent: k.discount.amount
            }),
            className: et.topRimPill,
            colorOptions: q
        }), f.createElement("div", {
            className: n
        })) : null, T || L !== Z.PremiumSubscriptionSKUs.TIER_2 ? null : f.createElement(f.Fragment, null, f.createElement(eu, {
            text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
            className: et.topRimPill,
            colorOptions: q
        }), f.createElement("div", {
            className: n
        })), T || U !== Z.PremiumTypes.TIER_2 ? null : f.createElement(f.Fragment, null, f.createElement(eu, {
            text: ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: et.topRimPill,
            colorOptions: q
        }), f.createElement("div", {
            className: n
        })), !T && G && f.createElement(f.Fragment, null, f.createElement(eu, {
            text: ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
            className: et.topRimPill,
            colorOptions: q
        }), f.createElement("div", {
            className: n
        })), l ? f.createElement("div", {
            className: et.wumpusImageContainer
        }, f.createElement(R.default, {
            src: er,
            mediaLayoutType: $.MediaLayoutType.RESPONSIVE,
            width: 270,
            height: 242,
            zoomable: !1
        })) : null, f.createElement("div", {
            className: _()((eo(o = {}, et.body, j && g), eo(o, et.bodySmallScreen, j && !g), o))
        }, f.createElement("div", {
            className: _()((eo(i = {}, et.planContainer, j && g), eo(i, et.planContainerSmallScreen, j && !g), i))
        }, f.createElement("div", {
            className: _()(eo({}, et.subscriptionPlanInfo, j))
        }, f.createElement(M.default, {
            className: _()((eo(a = {}, et.title, !j), eo(a, et.tier2Title, !j), eo(a, et.tier2TitleStacked, j && g), eo(a, et.tier2TitleStackedSmallScreen, j && !g), a))
        }), !T && L !== Z.PremiumSubscriptionSKUs.TIER_2 && F && f.createElement(h.Text, {
            variant: "text-xs/bold",
            className: et.freeTrialPillInline
        }, H), f.createElement(ef, {
            isGift: T,
            premiumTier: Z.PremiumTypes.TIER_2,
            offerType: B,
            offerTierMatchesCard: L === Z.PremiumSubscriptionSKUs.TIER_2 || (0, Y.discountOfferHasTier)(k, Z.PremiumSubscriptionSKUs.TIER_2),
            showYearlyPrice: d,
            isStacked: j,
            isFullScreen: g,
            priceOptions: A
        }))), f.createElement("div", {
            className: _()((eo(u = {}, et.perkContainer, j && g), eo(u, et.perkContainerSmallScreen, j && !g), u))
        }, f.createElement("div", null, j && f.createElement(h.Heading, {
            className: _()((eo(s = {}, et.stackedCardTitle, g), eo(s, et.stackedCardTitleSmallScreen, !g), s)),
            variant: "heading-xxl/extrabold"
        }, ee.default.Messages.NITRO_MARKETING_CARDS_SUPERCHARGE_YOUR_DISCORD), f.createElement("div", {
            className: _()(eo({}, et.listItems, j))
        }, f.createElement(eE, {
            featureSet: void 0 === E ? 0 : E,
            isModal: void 0 !== S && S,
            isGift: T
        }))), j && f.createElement(X.default, {
            isStacked: j,
            ctaButton: c,
            isGift: T,
            trialOfferTier: L,
            discountOffer: k
        }))), !j && f.createElement(X.default, {
            isStacked: j,
            ctaButton: c,
            isGift: T,
            trialOfferTier: L,
            discountOffer: k
        }))
    }

    function em(e) {
        var t, n, r, o = e.showWumpus,
            i = e.showBadge,
            a = e.tier0CTAButton,
            u = e.tier2CTAButton,
            s = e.className,
            l = e.variant,
            c = void 0 === l ? 0 : l,
            d = e.selectedPremiumType,
            E = e.isFullScreen,
            p = (0, v.default)(S.default.PREMIUM_MARKETING_TIER_CARD).analyticsLocations,
            y = 1 === c,
            I = d === Z.PremiumTypes.TIER_0,
            h = (0, m.useStateFromStores)([T.default], function() {
                return T.default.useReducedMotion
            });
        return f.createElement(v.AnalyticsLocationProvider, {
            value: p
        }, f.createElement("div", {
            className: _()((eo(t = {}, et.premiumCards, !y), eo(t, et.premiumCardsStackedVariant, y && E), eo(t, et.premiumCardsStackedVariantSmallScreen, y && !E), t), s)
        }, f.createElement(e_, {
            className: _()((eo(n = {}, et.tierCardFocused, y && I), eo(n, et.tierCardHidden, y && !I), eo(n, et.tierCardAnimation, y && !h), n)),
            showWumpus: o,
            showBadge: i,
            ctaButton: a,
            variant: c,
            isFullScreen: E
        }), f.createElement(ep, {
            className: _()((eo(r = {}, et.tierCardFocused, y && !I), eo(r, et.tierCardHidden, y && I), eo(r, et.tierCardAnimation, y && !h), r)),
            showWumpus: o,
            ctaButton: u,
            variant: c,
            isFullScreen: E
        })))
    }(r = u || (u = {}))[r.PREMIUM_TIER_0_WHITE_FILL = 0] = "PREMIUM_TIER_0_WHITE_FILL", r[r.PREMIUM_TIER_0_GRADIENT_FILL = 1] = "PREMIUM_TIER_0_GRADIENT_FILL", r[r.PREMIUM_TIER_2_WHITE_FILL = 2] = "PREMIUM_TIER_2_WHITE_FILL", r[r.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL", r[r.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL", r[r.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE", (o = s || (s = {}))[o.PREMIUM_TRIAL = 0] = "PREMIUM_TRIAL", o[o.PREMIUM_DISCOUNT = 1] = "PREMIUM_DISCOUNT", (i = l || (l = {}))[i.DEFAULT = 0] = "DEFAULT", i[i.BOOSTING = 1] = "BOOSTING", (a = c || (c = {}))[a.DEFAULT = 0] = "DEFAULT", a[a.STACKED = 1] = "STACKED"
}