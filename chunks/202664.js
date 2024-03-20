function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
        }
    });
    var r = n("37983"),
        i = n("884691"),
        l = n("414456"),
        a = n.n(l),
        s = n("446674"),
        o = n("77078"),
        u = n("109036"),
        c = n("697218"),
        d = n("993105"),
        f = n("719923"),
        m = n("552917"),
        _ = n("843647"),
        E = n("789946"),
        I = n("646718"),
        T = n("49111"),
        p = n("527382"),
        S = n("782340"),
        P = n("348133");

    function R(e) {
        let t, {
                onClose: n,
                fileSize: l,
                ...R
            } = e,
            C = null != l && I.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE < l,
            {
                isLoading: O,
                suggestedPremiumType: M
            } = (0, _.default)({
                autoTrackExposure: !C,
                experiment: m.default,
                location: I.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL
            }),
            g = !C && M === I.PremiumTypes.TIER_0,
            h = (0, s.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
            L = (0, r.jsx)(u.default, {
                icons: p.DEFAULT_FILE_UPLOAD_ICONS
            });
        t = g ? S.default.Messages.UPLOAD_AREA_PREMIUM_TIER_UPSELL_BODY_LINE_2.format({
            premiumPlan: (0, f.getPremiumTypeDisplayName)(I.PremiumTypes.TIER_0),
            premiumMaxSize: S.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED
        }) : S.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE;
        let N = i.useMemo(() => {
                let e = f.default.getUserMaxFileSize(h),
                    t = (0, d.formatSize)(e / 1024, {
                        useKibibytes: !0
                    }),
                    n = S.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                        maxSize: t
                    });
                switch (null == h ? void 0 : h.premiumType) {
                    case I.PremiumTypes.TIER_0:
                        n = S.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({
                            maxSize: t
                        });
                        break;
                    case I.PremiumTypes.TIER_1:
                        n = S.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({
                            maxSize: t
                        })
                }
                return n
            }, [h]),
            v = (0, r.jsxs)("div", {
                className: P.body,
                children: [(0, r.jsx)("span", {
                    children: N
                }), (0, r.jsx)(o.Text, {
                    variant: "text-md/medium",
                    children: t
                })]
            });
        return (0, r.jsx)(E.default, {
            artElement: L,
            artContainerClassName: a(P.artContainer),
            enableArtBoxShadow: !1,
            type: I.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL,
            title: S.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
            body: v,
            context: S.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                maxSize: S.default.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD
            }),
            glowUp: t,
            analyticsLocation: {
                section: T.AnalyticsSections.FILE_UPLOAD_POPOUT
            },
            onClose: n,
            subscriptionTier: g ? I.PremiumSubscriptionSKUs.TIER_0 : I.PremiumSubscriptionSKUs.TIER_2,
            isLoading: O,
            ...R
        })
    }
}