function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("622780"),
        l = n("587753"),
        c = n("844615"),
        f = n("444169"),
        d = n("742971"),
        _ = n("247164"),
        E = n("412791"),
        p = n("81091"),
        m = n("281767"),
        y = n("868615"),
        I = n("941504"),
        h = n("266861");

    function O(e) {
        var t, n, o, O, T, S = e.onDismiss,
            v = (0, a.useStateFromStores)([s.default], function() {
                return s.default.useReducedMotion
            }),
            g = I.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_UNLIMITED_V2,
            A = (0, c.usePremiumTrialOffer)(),
            b = (0, l.usePremiumDiscountOffer)(),
            N = (null == A ? void 0 : A.subscription_trial) != null || null != b,
            R = {
                object: m.AnalyticsObjects.BUTTON_CTA,
                section: m.AnalyticsSections.SUPER_REACTION_PICKER
            };
        return r.createElement("div", {
            className: h.wrapper
        }, r.createElement(u.Clickable, {
            onClick: S,
            className: h.closeButton,
            "aria-label": I.default.Messages.DISMISS
        }, r.createElement(_.default, {
            width: 24,
            height: 24
        })), r.createElement("div", {
            className: h.content
        }, r.createElement("div", {
            className: h.contentFill
        }, r.createElement(p.default, {
            className: i()(h.banner, (t = {}, n = h.hasTrialOffer, o = N, n in t ? Object.defineProperty(t, n, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = o, t)),
            src: "https://cdn.discordapp.com/attachments/955557117622886410/1085270553759322153/super-reactions-launch.mp4",
            loop: !0,
            autoPlay: !v,
            muted: !0,
            controls: !0
        })), N ? r.createElement(f.default, {
            type: y.PremiumUpsellTypes.BURST_REACTION_QUICK_ACTION_UPSELL,
            subscriptionTier: null !== (T = null == A ? void 0 : null === (O = A.subscription_trial) || void 0 === O ? void 0 : O.sku_id) && void 0 !== T ? T : y.PremiumSubscriptionSKUs.TIER_2,
            headingText: I.default.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE,
            analyticsLocationObject: R,
            discountOffer: b,
            trialOffer: A
        }, g) : r.createElement(r.Fragment, null, r.createElement("div", {
            className: h.header
        }, r.createElement(E.default, {
            className: h.nitroWheel,
            width: 32,
            height: 32
        }), r.createElement(u.Heading, {
            className: h.headerText,
            variant: "heading-xl/bold"
        }, I.default.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE)), r.createElement(u.Text, {
            className: h.subheaderText,
            variant: "text-md/normal"
        }, g), r.createElement("div", {
            className: h.ctaActionWrapper
        }, r.createElement(d.default, {
            subscriptionTier: y.PremiumSubscriptionSKUs.TIER_2,
            buttonText: I.default.Messages.UNLOCK_WITH_NITRO
        })))))
    }
}