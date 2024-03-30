function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useChurnDiscountedPrice: function() {
            return E
        },
        useDiscountedPrice: function() {
            return _
        }
    });
    var r = n("29570"),
        o = n("878143"),
        i = n("836305"),
        a = n("830721"),
        u = n("497894"),
        s = n("592991"),
        l = n("587753"),
        c = n("868615");

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function d(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return f(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var _ = function(e) {
            var t, n, f, _, E = (0, i.default)({
                    isGift: !1,
                    activeSubscription: null
                }).paymentSourceId,
                p = (0, a.castPremiumSubscriptionAsSkuId)(c.SubscriptionPlanInfo[e].skuId),
                m = (0, o.default)({
                    activeSubscription: null,
                    skuIDs: [p],
                    paymentSourceId: E,
                    isGift: !1
                }).priceOptions,
                y = (0, l.usePremiumDiscountOffer)(),
                I = d((0, s.useSubscriptionInvoicePreview)({
                    items: [{
                        planId: e,
                        quantity: 1
                    }],
                    renewal: !0,
                    preventFetch: !(null != y),
                    paymentSourceId: E,
                    currency: m.currency
                }), 2),
                h = I[0];
            I[1];
            var O = null == h ? void 0 : null === (_ = h.invoiceItems) || void 0 === _ ? void 0 : null === (f = _.find(function(t) {
                    return t.subscriptionPlanId === e
                })) || void 0 === f ? void 0 : null === (n = f.discounts) || void 0 === n ? void 0 : null === (t = n.find(function(e) {
                    return e.type === r.InvoiceDiscountTypes.SUBSCRIPTION_PLAN
                })) || void 0 === t ? void 0 : t.amount,
                T = (0, a.getPrice)(e, !1, !1, m);
            return (0, u.formatPrice)(T.amount - (null != O ? O : 0), T.currency)
        },
        E = function(e, t, n) {
            var l, f, _, E, p = (0, i.default)({
                    isGift: !1,
                    activeSubscription: null
                }).paymentSourceId,
                m = (0, a.castPremiumSubscriptionAsSkuId)(c.SubscriptionPlanInfo[t].skuId),
                y = (0, o.default)({
                    activeSubscription: null,
                    skuIDs: [m],
                    paymentSourceId: p,
                    isGift: !1
                }).priceOptions,
                I = d((0, s.useSubscriptionInvoicePreview)({
                    subscriptionId: e.id,
                    items: [{
                        planId: t,
                        quantity: 1
                    }],
                    renewal: !0,
                    preventFetch: !(null != n),
                    paymentSourceId: p,
                    currency: y.currency,
                    userDiscountOfferId: null == n ? void 0 : n.id
                }), 2),
                h = I[0];
            I[1];
            var O = null == h ? void 0 : null === (E = h.invoiceItems) || void 0 === E ? void 0 : null === (_ = E.find(function(e) {
                    return e.subscriptionPlanId === t
                })) || void 0 === _ ? void 0 : null === (f = _.discounts) || void 0 === f ? void 0 : null === (l = f.find(function(e) {
                    return e.type === r.InvoiceDiscountTypes.SUBSCRIPTION_PLAN
                })) || void 0 === l ? void 0 : l.amount,
                T = (0, a.getPrice)(t, !1, !1, y);
            return (0, u.formatPrice)(T.amount - (null != O ? O : 0), T.currency)
        }
}