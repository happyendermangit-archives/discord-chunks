function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        formatPercent: function() {
            return u
        },
        formatPrice: function() {
            return o
        },
        formatRate: function() {
            return l
        }
    }), n("411104");
    var i = n("221513"),
        r = n("706454"),
        s = n("474936"),
        a = n("689938");

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