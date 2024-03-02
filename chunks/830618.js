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
        o = n("812204"),
        u = n("685665"),
        d = n("217535"),
        c = n("917247"),
        f = n("697218"),
        m = n("216422"),
        p = n("719923"),
        h = n("30278"),
        E = n("49111"),
        g = n("646718"),
        C = n("782340"),
        S = n("981496");

    function T(e) {
        var t, n, i, T;
        let {
            type: I,
            textValue: v,
            maxCharacterCount: _,
            showRemainingCharsAfterCount: N,
            className: A
        } = e, x = (0, s.useStateFromStores)([f.default], () => p.default.canUseIncreasedMessageLength(f.default.getCurrentUser())), y = (0, d.default)(), O = null != _ ? _ : y, R = null !== (T = null != N ? N : _) && void 0 !== T ? T : y / 10, M = v.length, L = null != I.upsellLongMessages && (null != M ? M : 0) > E.MAX_MESSAGE_LENGTH && x, P = null != I.upsellLongMessages && !x, b = (null === (n = (0, c.usePremiumTrialOffer)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === g.PremiumSubscriptionSKUs.TIER_2, j = O - M, U = j > R, D = j < 0 && b, k = 0 === j ? C.default.Messages.CHARACTER_COUNT_AT_LIMIT : j > 0 ? C.default.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({
            count: j
        }) : C.default.Messages.CHARACTER_COUNT_OVER_LIMIT, {
            AnalyticsLocationProvider: w
        } = (0, u.default)(o.default.CHARACTER_COUNT), F = L && j >= 0 || !U || P && !U;
        return F ? (0, l.jsx)(w, {
            children: (0, l.jsxs)("div", {
                className: a(A, S.characterCount, {
                    [S.error]: j < 0
                }),
                children: [(0, l.jsxs)("div", {
                    className: S.flairContainer,
                    children: [L && j >= 0 ? (0, l.jsx)(r.Tooltip, {
                        text: C.default.Messages.PREMIUM_MESSAGE_LENGTH_CHATBOX_FLAIR.format({
                            maxLength: O
                        }),
                        position: "top",
                        children: e => (0, l.jsx)(m.default, {
                            className: S.premiumFlair,
                            ...e
                        })
                    }) : null, U || D ? null : (0, l.jsx)(r.Tooltip, {
                        text: k,
                        position: "top",
                        children: e => (0, l.jsx)("span", {
                            "aria-hidden": !0,
                            ...e,
                            children: j
                        })
                    })]
                }), (0, l.jsx)(r.HiddenVisually, {
                    children: C.default.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({
                        count: j
                    })
                }), P && !U ? (0, l.jsx)(h.default, {
                    className: S.upsell,
                    iconOnly: (null === (i = I.upsellLongMessages) || void 0 === i ? void 0 : i.iconOnly) || !1,
                    remaining: j
                }) : null]
            })
        }) : null
    }
}