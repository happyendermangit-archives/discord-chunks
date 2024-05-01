function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("724458"), n("627341"), n("653041");
    var i = n("278074"),
        r = n("979554"),
        a = n("301766"),
        s = n("922347"),
        o = n("803358"),
        l = n("212161"),
        u = n("981631");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class _ extends o.default {
        static fromServer(e) {
            var t;
            let {
                type: n,
                premium_type: o,
                category_sku_id: d,
                prices: c,
                ...E
            } = e;
            return new _({
                ...super.fromServer(E),
                type: n,
                premiumType: o === u.PREMIUM_TYPE_NONE ? null : o,
                categorySkuId: d,
                prices: null == (t = c) ? {} : Object.keys(t).reduce((e, n) => {
                    if (null == t) return e;
                    let i = t[n];
                    return e[n] = {
                        countryPrices: {
                            countryCode: i.country_prices.country_code,
                            prices: i.country_prices.prices.map(e => (0, a.getPriceFromServer)(e, !0))
                        },
                        paymentSourcePrices: {}
                    }, e
                }, {}),
                items: E.items.reduce((e, t) => (0, i.match)(t).with({
                    type: r.CollectiblesItemType.AVATAR_DECORATION
                }, t => (e.push(s.default.fromServer(t)), e)).with({
                    type: r.CollectiblesItemType.PROFILE_EFFECT
                }, t => (e.push(l.default.fromServer(t)), e)).otherwise(() => e), [])
            })
        }
        constructor(e) {
            super(e), d(this, "prices", void 0), d(this, "type", void 0), d(this, "premiumType", void 0), d(this, "items", void 0), d(this, "categorySkuId", void 0), this.summary = e.summary, this.type = e.type, this.premiumType = e.premiumType, this.items = e.items, this.categorySkuId = e.categorySkuId, this.prices = e.prices
        }
    }
}