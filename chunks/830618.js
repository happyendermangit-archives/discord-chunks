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
        o = n("812204"),
        u = n("685665"),
        d = n("217535"),
        c = n("917247"),
        f = n("697218"),
        p = n("216422"),
        m = n("719923"),
        h = n("30278"),
        x = n("49111"),
        E = n("646718"),
        y = n("782340"),
        g = n("981496");

    function S(e) {
        var t, n, l, S;
        let {
            type: C,
            textValue: _,
            maxCharacterCount: T,
            showRemainingCharsAfterCount: I,
            className: v
        } = e, A = (0, s.useStateFromStores)([f.default], () => m.default.canUseIncreasedMessageLength(f.default.getCurrentUser())), N = (0, d.default)(), R = null != T ? T : N, O = null !== (S = null != I ? I : T) && void 0 !== S ? S : N / 10, M = _.length, k = null != C.upsellLongMessages && (null != M ? M : 0) > x.MAX_MESSAGE_LENGTH && A, L = null != C.upsellLongMessages && !A, P = (null === (n = (0, c.usePremiumTrialOffer)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === E.PremiumSubscriptionSKUs.TIER_2, b = R - M, j = b > O, U = b < 0 && P, D = 0 === b ? y.default.Messages.CHARACTER_COUNT_AT_LIMIT : b > 0 ? y.default.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({
            count: b
        }) : y.default.Messages.CHARACTER_COUNT_OVER_LIMIT, {
            analyticsLocations: w
        } = (0, u.default)(o.default.CHARACTER_COUNT), F = k && b >= 0 || !j || L && !j;
        return F ? (0, i.jsx)(u.AnalyticsLocationProvider, {
            value: w,
            children: (0, i.jsxs)("div", {
                className: a(v, g.characterCount, {
                    [g.error]: b < 0
                }),
                children: [(0, i.jsxs)("div", {
                    className: g.flairContainer,
                    children: [k && b >= 0 ? (0, i.jsx)(r.Tooltip, {
                        text: y.default.Messages.PREMIUM_MESSAGE_LENGTH_CHATBOX_FLAIR.format({
                            maxLength: R
                        }),
                        position: "top",
                        children: e => (0, i.jsx)(p.default, {
                            className: g.premiumFlair,
                            ...e
                        })
                    }) : null, j || U ? null : (0, i.jsx)(r.Tooltip, {
                        text: D,
                        position: "top",
                        children: e => (0, i.jsx)("span", {
                            "aria-hidden": !0,
                            ...e,
                            children: b
                        })
                    })]
                }), (0, i.jsx)(r.HiddenVisually, {
                    children: y.default.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({
                        count: b
                    })
                }), L && !j ? (0, i.jsx)(h.default, {
                    className: g.upsell,
                    iconOnly: (null === (l = C.upsellLongMessages) || void 0 === l ? void 0 : l.iconOnly) || !1,
                    remaining: b
                }) : null]
            })
        }) : null
    }
}