function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
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
        x = n("49111"),
        E = n("646718"),
        y = n("782340"),
        g = n("257833");

    function S(e) {
        var t, n;
        let {
            onDismiss: l
        } = e, S = (0, s.useStateFromStores)([o.default], () => o.default.useReducedMotion), C = y.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_UNLIMITED_V2, T = (0, d.usePremiumTrialOffer)(), _ = (0, u.usePremiumDiscountOffer)(), I = (null == T ? void 0 : T.subscription_trial) != null, v = I || null != _, A = {
            object: x.AnalyticsObjects.BUTTON_CTA,
            section: x.AnalyticsSections.SUPER_REACTION_PICKER
        };
        return (0, i.jsxs)("div", {
            className: g.wrapper,
            children: [(0, i.jsx)(r.Clickable, {
                onClick: l,
                className: g.closeButton,
                "aria-label": y.default.Messages.DISMISS,
                children: (0, i.jsx)(m.default, {
                    width: 24,
                    height: 24
                })
            }), (0, i.jsxs)("div", {
                className: g.content,
                children: [(0, i.jsx)("div", {
                    className: g.contentFill,
                    children: (0, i.jsx)(h.default, {
                        className: a(g.banner, {
                            [g.hasTrialOffer]: v
                        }),
                        src: "https://cdn.discordapp.com/attachments/955557117622886410/1085270553759322153/super-reactions-launch.mp4",
                        loop: !0,
                        autoPlay: !S,
                        muted: !0,
                        controls: !0
                    })
                }), v ? (0, i.jsx)(c.default, {
                    type: E.PremiumUpsellTypes.BURST_REACTION_QUICK_ACTION_UPSELL,
                    subscriptionTier: null !== (n = null == T ? void 0 : null === (t = T.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : E.PremiumSubscriptionSKUs.TIER_2,
                    headingText: y.default.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE,
                    analyticsLocationObject: A,
                    discountOffer: _,
                    trialOffer: T,
                    children: C
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("div", {
                        className: g.header,
                        children: [(0, i.jsx)(p.default, {
                            className: g.nitroWheel,
                            width: 32,
                            height: 32
                        }), (0, i.jsx)(r.Heading, {
                            className: g.headerText,
                            variant: "heading-xl/bold",
                            children: y.default.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE
                        })]
                    }), (0, i.jsx)(r.Text, {
                        className: g.subheaderText,
                        variant: "text-md/normal",
                        children: C
                    }), (0, i.jsx)("div", {
                        className: g.ctaActionWrapper,
                        children: (0, i.jsx)(f.default, {
                            subscriptionTier: E.PremiumSubscriptionSKUs.TIER_2,
                            buttonText: y.default.Messages.UNLOCK_WITH_NITRO
                        })
                    })]
                })]
            })]
        })
    }
}