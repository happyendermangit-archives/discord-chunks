function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("649455"),
        s = n("396586"),
        l = n("535457"),
        c = n("870331"),
        f = n("830721"),
        d = n("108777"),
        _ = n("587753"),
        E = n("844615"),
        p = n("444169"),
        m = n("742971"),
        y = n("119247"),
        I = n("868615"),
        h = n("281767"),
        O = n("941504"),
        T = n("620118"),
        S = n("769860");

    function v(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function g(e) {
        var t, n, o, g = e.title,
            A = e.type,
            b = e.guildBoostProps,
            N = e.analyticsSource,
            R = e.analyticsLocation,
            C = e.body,
            P = e.context,
            D = e.glowUp,
            L = e.modalClassName,
            M = e.artContainerClassName,
            U = e.bodyClassName,
            w = e.transitionState,
            k = e.onClose,
            G = e.onSubscribeClick,
            B = e.onSecondaryClick,
            j = e.secondaryCTA,
            F = e.subscribeButtonText,
            V = e.showNewBadge,
            H = e.enableArtBoxShadow,
            x = e.subscriptionTier,
            Y = void 0 === x ? I.PremiumSubscriptionSKUs.TIER_2 : x,
            W = e.isLoading,
            K = void 0 !== W && W,
            z = e.hideBackButton,
            X = e.backButtonText,
            q = function(e, t) {
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
            }(e, ["title", "type", "guildBoostProps", "analyticsSource", "analyticsLocation", "body", "context", "glowUp", "modalClassName", "artContainerClassName", "bodyClassName", "transitionState", "onClose", "onSubscribeClick", "onSecondaryClick", "secondaryCTA", "subscribeButtonText", "showNewBadge", "enableArtBoxShadow", "subscriptionTier", "isLoading", "hideBackButton", "backButtonText"]),
            Q = null != b,
            J = (0, E.usePremiumTrialOffer)(),
            Z = (0, _.usePremiumDiscountOffer)(),
            $ = ((null == J ? void 0 : null === (t = J.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === Y || (0, _.discountOfferHasTier)(Z, Y)) && !Q,
            ee = (0, s.default)(u.default.PREMIUM_UPSELL_MODAL).analyticsLocations,
            et = d.default.useExperiment({
                location: "PremiumUpsellModal"
            }, {
                autoTrackExposure: !1
            }),
            en = et.enabled,
            er = et.variant,
            eo = en && A === I.PremiumUpsellTypes.STREAM_QUALITY_UPSELL,
            ei = eo && d.GradientVariants.includes(er);
        r.useEffect(function() {
            !K && (Q ? c.default.track(h.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                type: "".concat(A, " - Tier ").concat(b.boostedGuildTier),
                guild_id: b.guild.id,
                channel_id: b.channelId,
                location: R,
                location_stack: ee
            }) : c.default.track(h.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: A,
                source: N,
                location: R,
                location_stack: ee,
                sku_id: (0, f.castPremiumSubscriptionAsSkuId)(Y)
            }))
        }, [Q, Y, K]);
        var ea = void 0 === H || H ? i()(T.artContainer, T.artContainerBoxShadow, M) : i()(T.artContainer, M),
            eu = null;
        return eu = "artURL" in q ? r.createElement("img", {
            className: T.art,
            alt: "",
            src: q.artURL
        }) : q.artElement, r.createElement(a.ModalRoot, {
            className: i()(T.root, L),
            "aria-label": g,
            transitionState: w
        }, r.createElement("div", {
            className: ea
        }, eu, void 0 !== V && V ? r.createElement("img", {
            className: T.sparkleBadge,
            alt: "",
            src: S
        }) : null), eo ? r.createElement(a.ModalCloseButton, {
            onClick: k,
            className: T.closeButton
        }) : null, r.createElement(a.ModalContent, {
            className: T.content
        }, K ? r.createElement(a.Spinner, null) : r.createElement(r.Fragment, null, $ ? r.createElement(r.Fragment, null, r.createElement(p.default, {
            onClose: k,
            type: A,
            subscriptionTier: null !== (o = null == J ? void 0 : null === (n = J.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== o ? o : I.PremiumSubscriptionSKUs.TIER_2,
            headingText: g,
            context: P,
            analyticsLocationObject: R,
            discountOffer: Z,
            trialOffer: J
        }, D)) : r.createElement(r.Fragment, null, r.createElement(a.Heading, {
            className: i()(T.header, v({}, T.enhancedHeader, eo)),
            variant: "heading-xl/semibold"
        }, g), r.createElement(y.default, {
            premiumUpsellType: A
        }), r.createElement(a.Text, {
            variant: "text-md/normal",
            className: i()(U, T.subHeader)
        }, C)))), r.createElement(a.ModalFooter, {
            className: i()(T.footer, v({}, T.enhancedFooter, eo))
        }, r.createElement("div", {
            className: i()(T.primaryActions, v({}, T.enhancedPrimaryActions, eo))
        }, null != j ? r.createElement(a.Button, {
            className: i()(T.secondaryAction, v({}, T.enhancedSecondaryAction, ei)),
            onClick: B,
            size: a.Button.Sizes.SMALL,
            color: ei ? a.Button.Colors.CUSTOM : a.Button.Colors.PRIMARY,
            look: a.Button.Looks.LINK
        }, j) : null, function() {
            if (Q) return r.createElement(l.default, {
                analyticsLocation: R,
                guild: b.guild,
                onClose: k
            });
            var e, t, n, o = eo ? O.default.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
            return $ && (null != J ? (o = (0, f.formatTrialCtaIntervalDuration)({
                intervalType: null == J ? void 0 : null === (t = J.subscription_trial) || void 0 === t ? void 0 : t.interval,
                intervalCount: null == J ? void 0 : null === (n = J.subscription_trial) || void 0 === n ? void 0 : n.interval_count
            }), e = null == J ? void 0 : J.trial_id) : null != Z && (o = O.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                percent: Z.discount.amount
            }))), r.createElement(m.default, {
                className: i()(v({}, T.getNitroCTA, ei)),
                premiumModalAnalyticsLocation: R,
                subscriptionTier: Y,
                trialId: e,
                size: a.Button.Sizes.SMALL,
                color: ei ? a.Button.Colors.CUSTOM : a.Button.Colors.GREEN,
                onClick: function() {
                    null == G || G(), k()
                },
                buttonText: null != F ? F : o
            })
        }()), !z && !eo && r.createElement(a.Button, {
            onClick: k,
            size: a.Button.Sizes.SMALL,
            color: a.Button.Colors.PRIMARY,
            look: a.Button.Looks.LINK
        }, null != X ? X : O.default.Messages.BACK)))
    }
}