function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("803997"),
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
        A = n("689938"),
        h = n("266861");

    function m(e) {
        var t, n;
        let {
            onDismiss: r
        } = e, m = (0, a.useStateFromStores)([l.default], () => l.default.useReducedMotion), N = A.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_UNLIMITED_V2, O = (0, d.usePremiumTrialOffer)(), p = (0, u.usePremiumDiscountOffer)(), R = (null == O ? void 0 : O.subscription_trial) != null || null != p, C = {
            object: f.AnalyticsObjects.BUTTON_CTA,
            section: f.AnalyticsSections.SUPER_REACTION_PICKER
        };
        return (0, i.jsxs)("div", {
            className: h.wrapper,
            children: [(0, i.jsx)(o.Clickable, {
                onClick: r,
                className: h.closeButton,
                "aria-label": A.default.Messages.DISMISS,
                children: (0, i.jsx)(E.default, {
                    width: 24,
                    height: 24
                })
            }), (0, i.jsxs)("div", {
                className: h.content,
                children: [(0, i.jsx)("div", {
                    className: h.contentFill,
                    children: (0, i.jsx)(T.default, {
                        className: s()(h.banner, {
                            [h.hasTrialOffer]: R
                        }),
                        src: "https://cdn.discordapp.com/attachments/955557117622886410/1085270553759322153/super-reactions-launch.mp4",
                        loop: !0,
                        autoPlay: !m,
                        muted: !0,
                        controls: !0
                    })
                }), R ? (0, i.jsx)(_.default, {
                    type: S.PremiumUpsellTypes.BURST_REACTION_QUICK_ACTION_UPSELL,
                    subscriptionTier: null !== (n = null == O ? void 0 : null === (t = O.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : S.PremiumSubscriptionSKUs.TIER_2,
                    headingText: A.default.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE,
                    analyticsLocationObject: C,
                    discountOffer: p,
                    trialOffer: O,
                    children: N
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("div", {
                        className: h.header,
                        children: [(0, i.jsx)(I.default, {
                            className: h.nitroWheel,
                            width: 32,
                            height: 32
                        }), (0, i.jsx)(o.Heading, {
                            className: h.headerText,
                            variant: "heading-xl/bold",
                            children: A.default.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE
                        })]
                    }), (0, i.jsx)(o.Text, {
                        className: h.subheaderText,
                        variant: "text-md/normal",
                        children: N
                    }), (0, i.jsx)("div", {
                        className: h.ctaActionWrapper,
                        children: (0, i.jsx)(c.default, {
                            subscriptionTier: S.PremiumSubscriptionSKUs.TIER_2,
                            buttonText: A.default.Messages.UNLOCK_WITH_NITRO
                        })
                    })]
                })]
            })]
        })
    }
}