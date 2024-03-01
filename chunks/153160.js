function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        formatPrice: function() {
            return o
        },
        formatRate: function() {
            return l
        },
        formatPercent: function() {
            return u
        }
    }), n("70102");
    var i = n("988025"),
        r = n("915639"),
        s = n("646718"),
        a = n("782340");

    function o(e, t, n) {
        var s;
        let a = null !== (s = null == n ? void 0 : n.localeOverride) && void 0 !== s ? s : r.default.locale;
        return (0, i.formatPrice)(e, t, a, n)
    }

    function l(e, t, n) {
        if (t === s.SubscriptionIntervalTypes.YEAR) return a.default.Messages.BILLING_PRICE_PER_YEAR.format({
            price: e
        });
        if (t === s.SubscriptionIntervalTypes.MONTH && 1 === n) return a.default.Messages.BILLING_PRICE_PER_MONTH.format({
            price: e
        });
        if (t === s.SubscriptionIntervalTypes.MONTH && n > 1) return a.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS.format({
            price: e,
            intervalCount: n
        });
        throw Error("Unsupported interval type: ".concat(t, ", and interval count: ").concat(n))
    }

    function u(e, t) {
        return Intl.NumberFormat(e, {
            style: "percent",
            minimumFractionDigits: 0
        }).format(t)
    }
}