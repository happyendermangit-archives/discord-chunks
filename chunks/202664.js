function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return P
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
        C = n("527382"),
        p = n("782340"),
        S = n("348133");

    function P(e) {
        let t, {
                onClose: n,
                fileSize: l,
                ...P
            } = e,
            R = null != l && I.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE < l,
            {
                isLoading: O,
                suggestedPremiumType: L
            } = (0, _.default)({
                autoTrackExposure: !R,
                experiment: m.default,
                location: I.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL
            }),
            M = !R && L === I.PremiumTypes.TIER_0,
            g = (0, s.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
            h = (0, r.jsx)(u.default, {
                icons: C.DEFAULT_FILE_UPLOAD_ICONS
            });
        t = M ? p.default.Messages.UPLOAD_AREA_PREMIUM_TIER_UPSELL_BODY_LINE_2.format({
            premiumPlan: (0, f.getPremiumTypeDisplayName)(I.PremiumTypes.TIER_0),
            premiumMaxSize: p.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED
        }) : p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE;
        let x = i.useMemo(() => {
                let e = f.default.getUserMaxFileSize(g),
                    t = (0, d.formatSize)(e / 1024, {
                        useKibibytes: !0
                    }),
                    n = p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                        maxSize: t
                    });
                switch (null == g ? void 0 : g.premiumType) {
                    case I.PremiumTypes.TIER_0:
                        n = p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({
                            maxSize: t
                        });
                        break;
                    case I.PremiumTypes.TIER_1:
                        n = p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({
                            maxSize: t
                        })
                }
                return n
            }, [g]),
            N = (0, r.jsxs)("div", {
                className: S.body,
                children: [(0, r.jsx)("span", {
                    children: x
                }), (0, r.jsx)(o.Text, {
                    variant: "text-md/medium",
                    children: t
                })]
            });
        return (0, r.jsx)(E.default, {
            artElement: h,
            artContainerClassName: a(S.artContainer),
            enableArtBoxShadow: !1,
            type: I.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL,
            title: p.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
            body: N,
            context: p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                maxSize: p.default.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD
            }),
            glowUp: t,
            analyticsLocation: {
                section: T.AnalyticsSections.FILE_UPLOAD_POPOUT
            },
            onClose: n,
            subscriptionTier: M ? I.PremiumSubscriptionSKUs.TIER_0 : I.PremiumSubscriptionSKUs.TIER_2,
            isLoading: O,
            ...P
        })
    }
}