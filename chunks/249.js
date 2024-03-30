function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("649455"),
        l = n("396586"),
        c = n("197351"),
        f = n("844615"),
        d = n("208454"),
        _ = n("412791"),
        E = n("830721"),
        p = n("10522"),
        m = n("281767"),
        y = n("868615"),
        I = n("941504"),
        h = n("314749");

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function T(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                O(e, t, n[t])
            })
        }
        return e
    }

    function S(e) {
        var t, n, o, S, v = e.type,
            g = e.textValue,
            A = e.maxCharacterCount,
            b = e.showRemainingCharsAfterCount,
            N = e.className,
            R = (0, a.useStateFromStores)([d.default], function() {
                return E.default.canUseIncreasedMessageLength(d.default.getCurrentUser())
            }),
            C = (0, c.default)(),
            P = null != A ? A : C,
            D = null !== (S = null != b ? b : A) && void 0 !== S ? S : C / 10,
            L = g.length,
            M = null != v.upsellLongMessages && (null != L ? L : 0) > m.MAX_MESSAGE_LENGTH && R,
            U = null != v.upsellLongMessages && !R,
            w = (null === (n = (0, f.usePremiumTrialOffer)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === y.PremiumSubscriptionSKUs.TIER_2,
            k = P - L,
            G = k > D,
            B = k < 0 && w,
            j = 0 === k ? I.default.Messages.CHARACTER_COUNT_AT_LIMIT : k > 0 ? I.default.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({
                count: k
            }) : I.default.Messages.CHARACTER_COUNT_OVER_LIMIT,
            F = (0, l.default)(s.default.CHARACTER_COUNT).analyticsLocations;
        return M && k >= 0 || !G || U && !G ? r.createElement(l.AnalyticsLocationProvider, {
            value: F
        }, r.createElement("div", {
            className: i()(N, h.characterCount, O({}, h.error, k < 0))
        }, r.createElement("div", {
            className: h.flairContainer
        }, M && k >= 0 ? r.createElement(u.Tooltip, {
            text: I.default.Messages.PREMIUM_MESSAGE_LENGTH_CHATBOX_FLAIR.format({
                maxLength: P
            }),
            position: "top"
        }, function(e) {
            return r.createElement(_.default, T({
                className: h.premiumFlair
            }, e))
        }) : null, G || B ? null : r.createElement(u.Tooltip, {
            text: j,
            position: "top"
        }, function(e) {
            return r.createElement("span", T({
                "aria-hidden": !0
            }, e), k)
        })), r.createElement(u.HiddenVisually, null, I.default.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({
            count: k
        })), U && !G ? r.createElement(p.default, {
            className: h.upsell,
            iconOnly: (null === (o = v.upsellLongMessages) || void 0 === o ? void 0 : o.iconOnly) || !1,
            remaining: k
        }) : null)) : null
    }
}