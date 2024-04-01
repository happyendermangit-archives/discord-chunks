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
        l = n("100527"),
        u = n("906732"),
        d = n("849522"),
        _ = n("639119"),
        c = n("594174"),
        E = n("466111"),
        I = n("74538"),
        T = n("694320"),
        f = n("981631"),
        S = n("474936"),
        A = n("689938"),
        h = n("314749");

    function m(e) {
        var t, n, r, m;
        let {
            type: N,
            textValue: O,
            maxCharacterCount: p,
            showRemainingCharsAfterCount: R,
            className: C
        } = e, g = (0, a.useStateFromStores)([c.default], () => I.default.canUseIncreasedMessageLength(c.default.getCurrentUser())), L = (0, d.default)(), D = null != p ? p : L, v = null !== (m = null != R ? R : p) && void 0 !== m ? m : L / 10, M = O.length, y = null != N.upsellLongMessages && (null != M ? M : 0) > f.MAX_MESSAGE_LENGTH && g, P = null != N.upsellLongMessages && !g, U = (null === (n = (0, _.usePremiumTrialOffer)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === S.PremiumSubscriptionSKUs.TIER_2, b = D - M, G = b > v, w = b < 0 && U, B = 0 === b ? A.default.Messages.CHARACTER_COUNT_AT_LIMIT : b > 0 ? A.default.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({
            count: b
        }) : A.default.Messages.CHARACTER_COUNT_OVER_LIMIT, {
            analyticsLocations: k
        } = (0, u.default)(l.default.CHARACTER_COUNT);
        return y && b >= 0 || !G || P && !G ? (0, i.jsx)(u.AnalyticsLocationProvider, {
            value: k,
            children: (0, i.jsxs)("div", {
                className: s()(C, h.characterCount, {
                    [h.error]: b < 0
                }),
                children: [(0, i.jsxs)("div", {
                    className: h.flairContainer,
                    children: [y && b >= 0 ? (0, i.jsx)(o.Tooltip, {
                        text: A.default.Messages.PREMIUM_MESSAGE_LENGTH_CHATBOX_FLAIR.format({
                            maxLength: D
                        }),
                        position: "top",
                        children: e => (0, i.jsx)(E.default, {
                            className: h.premiumFlair,
                            ...e
                        })
                    }) : null, G || w ? null : (0, i.jsx)(o.Tooltip, {
                        text: B,
                        position: "top",
                        children: e => (0, i.jsx)("span", {
                            "aria-hidden": !0,
                            ...e,
                            children: b
                        })
                    })]
                }), (0, i.jsx)(o.HiddenVisually, {
                    children: A.default.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({
                        count: b
                    })
                }), P && !G ? (0, i.jsx)(T.default, {
                    className: h.upsell,
                    iconOnly: (null === (r = N.upsellLongMessages) || void 0 === r ? void 0 : r.iconOnly) || !1,
                    remaining: b
                }) : null]
            })
        }) : null
    }
}