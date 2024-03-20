function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return u
        }
    }), r("808653"), r("794252"), r("424973");
    var u, n = r("506838"),
        i = r("265586"),
        E = r("797647"),
        s = r("730297"),
        l = r("792382"),
        c = r("806410"),
        o = r("49111");
    u = class e extends l.default {
        static fromServer(t) {
            var r;
            let {
                type: u,
                premium_type: l,
                category_sku_id: a,
                prices: C,
                ..._
            } = t;
            return new e({
                ...super.fromServer(_),
                type: u,
                premiumType: l === o.PREMIUM_TYPE_NONE ? null : l,
                categorySkuId: a,
                prices: null == (r = C) ? {} : Object.keys(r).reduce((e, t) => {
                    if (null == r) return e;
                    let u = r[t];
                    return e[t] = {
                        countryPrices: {
                            countryCode: u.country_prices.country_code,
                            prices: u.country_prices.prices.map(e => (0, E.getPriceFromServer)(e, !0))
                        },
                        paymentSourcePrices: {}
                    }, e
                }, {}),
                items: _.items.reduce((e, t) => (0, n.match)(t).with({
                    type: i.CollectiblesItemType.AVATAR_DECORATION
                }, t => (e.push(s.default.fromServer(t)), e)).with({
                    type: i.CollectiblesItemType.PROFILE_EFFECT
                }, t => (e.push(c.default.fromServer(t)), e)).otherwise(() => e), [])
            })
        }
        constructor(e) {
            super(e), this.summary = e.summary, this.type = e.type, this.premiumType = e.premiumType, this.items = e.items, this.categorySkuId = e.categorySkuId, this.prices = e.prices
        }
    }
}