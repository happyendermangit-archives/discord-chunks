function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("446674"),
        r = n("77078"),
        o = n("206230"),
        u = n("154889"),
        d = n("917247"),
        c = n("956597"),
        f = n("635956"),
        m = n("945330"),
        p = n("216422"),
        h = n("58608"),
        E = n("49111"),
        g = n("646718"),
        S = n("782340"),
        C = n("257833");

    function T(e) {
        var t, n;
        let {
            onDismiss: i
        } = e, T = (0, s.useStateFromStores)([o.default], () => o.default.useReducedMotion), v = S.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_UNLIMITED_V2, I = (0, d.usePremiumTrialOffer)(), _ = (0, u.usePremiumDiscountOffer)(), N = (null == I ? void 0 : I.subscription_trial) != null, A = N || null != _, x = {
            object: E.AnalyticsObjects.BUTTON_CTA,
            section: E.AnalyticsSections.SUPER_REACTION_PICKER
        };
        return (0, l.jsxs)("div", {
            className: C.wrapper,
            children: [(0, l.jsx)(r.Clickable, {
                onClick: i,
                className: C.closeButton,
                "aria-label": S.default.Messages.DISMISS,
                children: (0, l.jsx)(m.default, {
                    width: 24,
                    height: 24
                })
            }), (0, l.jsxs)("div", {
                className: C.content,
                children: [(0, l.jsx)("div", {
                    className: C.contentFill,
                    children: (0, l.jsx)(h.default, {
                        className: a(C.banner, {
                            [C.hasTrialOffer]: A
                        }),
                        src: "https://cdn.discordapp.com/attachments/955557117622886410/1085270553759322153/super-reactions-launch.mp4",
                        loop: !0,
                        autoPlay: !T,
                        muted: !0,
                        controls: !0
                    })
                }), A ? (0, l.jsx)(c.default, {
                    type: g.PremiumUpsellTypes.BURST_REACTION_QUICK_ACTION_UPSELL,
                    subscriptionTier: null !== (n = null == I ? void 0 : null === (t = I.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : g.PremiumSubscriptionSKUs.TIER_2,
                    headingText: S.default.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE,
                    analyticsLocationObject: x,
                    discountOffer: _,
                    trialOffer: I,
                    children: v
                }) : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: C.header,
                        children: [(0, l.jsx)(p.default, {
                            className: C.nitroWheel,
                            width: 32,
                            height: 32
                        }), (0, l.jsx)(r.Heading, {
                            className: C.headerText,
                            variant: "heading-xl/bold",
                            children: S.default.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE
                        })]
                    }), (0, l.jsx)(r.Text, {
                        className: C.subheaderText,
                        variant: "text-md/normal",
                        children: v
                    }), (0, l.jsx)("div", {
                        className: C.ctaActionWrapper,
                        children: (0, l.jsx)(f.default, {
                            subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
                            buttonText: S.default.Messages.UNLOCK_WITH_NITRO
                        })
                    })]
                })]
            })]
        })
    }
}