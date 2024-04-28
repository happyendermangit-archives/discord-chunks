function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("442837"),
        o = n("481060"),
        l = n("607070"),
        u = n("104494"),
        d = n("639119"),
        _ = n("165583"),
        c = n("197115"),
        E = n("465670"),
        I = n("466111"),
        T = n("810090"),
        f = n("981631"),
        S = n("474936"),
        h = n("689938"),
        A = n("884050");

    function m(e) {
        var t, n;
        let {
            onDismiss: r
        } = e, m = (0, a.useStateFromStores)([l.default], () => l.default.useReducedMotion), N = h.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_UNLIMITED_V2, p = (0, d.usePremiumTrialOffer)(), O = (0, u.usePremiumDiscountOffer)(), R = (null == p ? void 0 : p.subscription_trial) != null || null != O, C = {
            object: f.AnalyticsObjects.BUTTON_CTA,
            section: f.AnalyticsSections.SUPER_REACTION_PICKER
        };
        return (0, i.jsxs)("div", {
            className: A.wrapper,
            children: [(0, i.jsx)(o.Clickable, {
                onClick: r,
                className: A.closeButton,
                "aria-label": h.default.Messages.DISMISS,
                children: (0, i.jsx)(E.default, {
                    width: 24,
                    height: 24
                })
            }), (0, i.jsxs)("div", {
                className: A.content,
                children: [(0, i.jsx)("div", {
                    className: A.contentFill,
                    children: (0, i.jsx)(T.default, {
                        className: s()(A.banner, {
                            [A.hasTrialOffer]: R
                        }),
                        src: "https://cdn.discordapp.com/attachments/955557117622886410/1085270553759322153/super-reactions-launch.mp4",
                        loop: !0,
                        autoPlay: !m,
                        muted: !0,
                        controls: !0
                    })
                }), R ? (0, i.jsx)(_.default, {
                    type: S.PremiumUpsellTypes.BURST_REACTION_QUICK_ACTION_UPSELL,
                    subscriptionTier: null !== (n = null == p ? void 0 : null === (t = p.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : S.PremiumSubscriptionSKUs.TIER_2,
                    headingText: h.default.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE,
                    analyticsLocationObject: C,
                    discountOffer: O,
                    trialOffer: p,
                    children: N
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("div", {
                        className: A.header,
                        children: [(0, i.jsx)(I.default, {
                            className: A.nitroWheel,
                            width: 32,
                            height: 32
                        }), (0, i.jsx)(o.Heading, {
                            className: A.headerText,
                            variant: "heading-xl/bold",
                            children: h.default.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE
                        })]
                    }), (0, i.jsx)(o.Text, {
                        className: A.subheaderText,
                        variant: "text-md/normal",
                        children: N
                    }), (0, i.jsx)("div", {
                        className: A.ctaActionWrapper,
                        children: (0, i.jsx)(c.default, {
                            subscriptionTier: S.PremiumSubscriptionSKUs.TIER_2,
                            buttonText: h.default.Messages.UNLOCK_WITH_NITRO
                        })
                    })]
                })]
            })]
        })
    }
}