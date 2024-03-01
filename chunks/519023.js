function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LocalizedPricingPromoRecord: function() {
            return r
        }
    });
    var i = n("666038");
    class r extends i.default {
        static createFromServer(e) {
            var t, n;
            return new r({
                planId: e.plan_id,
                countryCode: e.country_code,
                amount: null === (t = e.price) || void 0 === t ? void 0 : t.amount,
                currency: null === (n = e.price) || void 0 === n ? void 0 : n.currency,
                paymentSourceTypes: e.payment_source_types
            })
        }
        constructor(e) {
            super(), this.planId = e.planId, this.countryCode = e.countryCode, this.amount = e.amount, this.currency = e.currency, this.paymentSourceTypes = e.paymentSourceTypes
        }
    }
}