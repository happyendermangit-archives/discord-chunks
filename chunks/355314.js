function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("310752"),
        d = n("594174"),
        _ = n("424218"),
        c = n("74538"),
        E = n("911200"),
        I = n("348121"),
        T = n("790527"),
        f = n("474936"),
        S = n("981631"),
        A = n("731994"),
        h = n("689938"),
        m = n("955617");

    function N(e) {
        let t, {
                onClose: n,
                fileSize: s,
                ...N
            } = e,
            O = null != s && f.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE < s,
            {
                isLoading: p,
                suggestedPremiumType: R
            } = (0, I.default)({
                autoTrackExposure: !O,
                experiment: E.default,
                location: f.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL
            }),
            C = !O && R === f.PremiumTypes.TIER_0,
            g = (0, o.useStateFromStores)([d.default], () => d.default.getCurrentUser()),
            L = (0, i.jsx)(u.default, {
                icons: A.DEFAULT_FILE_UPLOAD_ICONS
            });
        t = C ? h.default.Messages.UPLOAD_AREA_PREMIUM_TIER_UPSELL_BODY_LINE_2.format({
            premiumPlan: (0, c.getPremiumTypeDisplayName)(f.PremiumTypes.TIER_0),
            premiumMaxSize: h.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED
        }) : h.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE;
        let D = r.useMemo(() => {
                let e = c.default.getUserMaxFileSize(g),
                    t = (0, _.formatSize)(e / 1024, {
                        useKibibytes: !0
                    }),
                    n = h.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                        maxSize: t
                    });
                switch (null == g ? void 0 : g.premiumType) {
                    case f.PremiumTypes.TIER_0:
                        n = h.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({
                            maxSize: t
                        });
                        break;
                    case f.PremiumTypes.TIER_1:
                        n = h.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({
                            maxSize: t
                        })
                }
                return n
            }, [g]),
            v = (0, i.jsxs)("div", {
                className: m.body,
                children: [(0, i.jsx)("span", {
                    children: D
                }), (0, i.jsx)(l.Text, {
                    variant: "text-md/medium",
                    children: t
                })]
            });
        return (0, i.jsx)(T.default, {
            artElement: L,
            artContainerClassName: a()(m.artContainer),
            enableArtBoxShadow: !1,
            type: f.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL,
            title: h.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
            body: v,
            context: h.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                maxSize: h.default.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD
            }),
            glowUp: t,
            analyticsLocation: {
                section: S.AnalyticsSections.FILE_UPLOAD_POPOUT
            },
            onClose: n,
            subscriptionTier: C ? f.PremiumSubscriptionSKUs.TIER_0 : f.PremiumSubscriptionSKUs.TIER_2,
            isLoading: p,
            ...N
        })
    }
}