function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("898511"),
        o = n("622753"),
        i = n("266182"),
        a = n("868615"),
        u = n("563090");

    function s(e) {
        var t, n, s, l, c = e.activeSubscription,
            f = e.skuIDs,
            d = e.paymentSourceId,
            _ = e.isGift;
        f = f.filter(function(e) {
            return e !== a.PremiumSubscriptionSKUs.NONE
        });
        var E = (0, r.useStateFromStores)([o.default], function() {
                var e = o.default.getPlanIdsForSkus(f).filter(function(e) {
                    return !_ || a.PREMIUM_PLANS.has(e)
                });
                return e.length > 0 ? o.default.get(e[0]) : null
            }),
            p = null == E ? [] : (0, i.getCurrencies)(E.id, d, _),
            m = null !== (l = null !== (s = p.find(function(e) {
                return e === (null == c ? void 0 : c.currency)
            })) && void 0 !== s ? s : p[0]) && void 0 !== l ? l : u.CurrencyCodes.USD;
        return t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r, o, i;
                    r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = i
                })
            }
            return e
        }({}, (0, i.useCurrencyWithPaymentSourceChange)(m, null == E ? void 0 : E.id, d, _, f)), n = (n = {
            currencies: p
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t
    }
}