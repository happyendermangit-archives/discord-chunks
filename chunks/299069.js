function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("819855"),
        o = n("77078"),
        u = n("997289"),
        d = n("841098"),
        c = n("812204"),
        f = n("685665"),
        m = n("626301"),
        p = n("635956"),
        h = n("599110"),
        E = n("719923"),
        g = n("23106"),
        S = n("553372"),
        C = n("49111"),
        T = n("646718"),
        v = n("782340"),
        I = n("163448"),
        _ = n("187971");

    function N(e) {
        var t;
        let {
            onClose: a,
            closePopout: N,
            sound: A,
            channel: x
        } = e, y = (0, d.default)(), [O, R] = i.useState(!1), {
            location: M
        } = (0, u.useAnalyticsContext)(), L = i.useMemo(() => ({
            ...M,
            section: C.AnalyticsSections.SOUNDBOARD_SOUND_PICKER
        }), [M]), {
            analyticsLocations: P
        } = (0, f.default)(c.default.PREMIUM_UPSELL), {
            previewSound: b
        } = (0, g.default)(A, null !== (t = null == x ? void 0 : x.id) && void 0 !== t ? t : null), j = (0, S.PreviewButton)({
            sound: A,
            previewSound: b,
            tooltipPosition: "left"
        }), U = (0, r.isThemeLight)(y) ? n("602291") : n("609708");
        i.useEffect(() => {
            h.default.track(C.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: T.PremiumUpsellTypes.SOUND_PICKER_SOUND_CLICKED,
                is_external: !0,
                location: {
                    ...L,
                    object: C.AnalyticsObjects.SOUNDBOARD_SOUND
                },
                location_stack: P,
                sku_id: E.default.getSkuIdForPremiumType(T.PremiumTypes.TIER_2)
            })
        }, [P, L]);
        let D = i.useCallback(() => {
            h.default.track(C.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                location_section: C.AnalyticsSections.SOUNDBOARD_SOUND_PICKER_UPSELL
            }), (0, m.navigateToPremiumMarketingPage)(), N()
        }, [N]);
        return (0, l.jsxs)("div", {
            className: s(_.premiumPromo, I.container),
            children: [(0, l.jsx)(o.Clickable, {
                className: _.premiumPromoClose,
                onClick: a,
                children: v.default.Messages.CLOSE
            }), (0, l.jsx)("img", {
                "aria-hidden": !0,
                alt: "",
                className: s(_.premiumPromoImage, _.premiumPromoImageSmaller, I.image),
                src: U
            }), (0, l.jsx)(o.Heading, {
                variant: "heading-lg/normal",
                color: "header-primary",
                className: _.premiumPromoTitle,
                children: v.default.Messages.SOUNDBOARD_NITRO_UPSELL_TITLE
            }), (0, l.jsx)(o.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: _.premiumPromoDescription,
                children: v.default.Messages.SOUNDBOARD_NITRO_UPSELL_BODY.format({
                    onClick: D
                })
            }), (0, l.jsxs)("div", {
                className: I.buttonContainer,
                children: [(0, l.jsx)("div", {
                    className: I.previewButtonContainer,
                    children: j
                }), (0, l.jsx)(p.default, {
                    subscriptionTier: T.PremiumSubscriptionSKUs.TIER_2,
                    submitting: O,
                    premiumModalAnalyticsLocation: {
                        section: C.AnalyticsSections.SOUNDBOARD_SOUND_PICKER,
                        object: C.AnalyticsObjects.BUTTON_CTA
                    },
                    size: o.Button.Sizes.SMALL,
                    color: o.Button.Colors.GREEN,
                    onClick: () => {
                        R(!0)
                    },
                    onSubscribeModalClose: e => {
                        R(!1), e && a()
                    }
                })]
            })]
        })
    }
}