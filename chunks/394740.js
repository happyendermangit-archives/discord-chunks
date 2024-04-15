function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("780384"),
        l = n("481060"),
        u = n("2052"),
        d = n("410030"),
        _ = n("100527"),
        c = n("906732"),
        E = n("98278"),
        I = n("197115"),
        T = n("626135"),
        f = n("74538"),
        S = n("706667"),
        A = n("409673"),
        h = n("981631"),
        m = n("474936"),
        N = n("689938"),
        O = n("892085"),
        p = n("820520");

    function R(e) {
        var t;
        let {
            onClose: s,
            closePopout: R,
            sound: C,
            channel: g
        } = e, L = (0, d.default)(), [D, v] = r.useState(!1), {
            location: M
        } = (0, u.useAnalyticsContext)(), y = r.useMemo(() => ({
            ...M,
            section: h.AnalyticsSections.SOUNDBOARD_SOUND_PICKER
        }), [M]), {
            analyticsLocations: P
        } = (0, c.default)(_.default.PREMIUM_UPSELL), {
            previewSound: U
        } = (0, S.default)(C, null !== (t = null == g ? void 0 : g.id) && void 0 !== t ? t : null), b = (0, A.PreviewButton)({
            sound: C,
            previewSound: U,
            tooltipPosition: "left"
        }), G = (0, o.isThemeLight)(L) ? n("537381") : n("341048");
        r.useEffect(() => {
            T.default.track(h.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: m.PremiumUpsellTypes.SOUND_PICKER_SOUND_CLICKED,
                is_external: !0,
                location: {
                    ...y,
                    object: h.AnalyticsObjects.SOUNDBOARD_SOUND
                },
                location_stack: P,
                sku_id: f.default.getSkuIdForPremiumType(m.PremiumTypes.TIER_2)
            })
        }, [P, y]);
        let w = r.useCallback(() => {
            T.default.track(h.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                location_section: h.AnalyticsSections.SOUNDBOARD_SOUND_PICKER_UPSELL
            }), (0, E.navigateToPremiumMarketingPage)(), R()
        }, [R]);
        return (0, i.jsxs)("div", {
            className: a()(p.premiumPromo, O.container),
            children: [(0, i.jsx)(l.Clickable, {
                className: p.premiumPromoClose,
                onClick: s,
                children: N.default.Messages.CLOSE
            }), (0, i.jsx)("img", {
                "aria-hidden": !0,
                alt: "",
                className: a()(p.premiumPromoImage, p.premiumPromoImageSmaller, O.image),
                src: G
            }), (0, i.jsx)(l.Heading, {
                variant: "heading-lg/normal",
                color: "header-primary",
                className: p.premiumPromoTitle,
                children: N.default.Messages.SOUNDBOARD_NITRO_UPSELL_TITLE
            }), (0, i.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: p.premiumPromoDescription,
                children: N.default.Messages.SOUNDBOARD_NITRO_UPSELL_BODY.format({
                    onClick: w
                })
            }), (0, i.jsxs)("div", {
                className: O.buttonContainer,
                children: [(0, i.jsx)("div", {
                    className: O.previewButtonContainer,
                    children: b
                }), (0, i.jsx)(I.default, {
                    subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
                    submitting: D,
                    premiumModalAnalyticsLocation: {
                        section: h.AnalyticsSections.SOUNDBOARD_SOUND_PICKER,
                        object: h.AnalyticsObjects.BUTTON_CTA
                    },
                    size: l.Button.Sizes.SMALL,
                    color: l.Button.Colors.GREEN,
                    onClick: () => {
                        v(!0)
                    },
                    onSubscribeModalClose: e => {
                        v(!1), e && s()
                    }
                })]
            })]
        })
    }
}