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
        a = n("474936"),
        s = n("689938");

    function o(e, t, n) {
        var a;
        let s = null !== (a = null == n ? void 0 : n.localeOverride) && void 0 !== a ? a : r.default.locale;
        return (0, i.formatPrice)(e, t, s, n)
    }

    function l(e, t, n) {
        if (t === a.SubscriptionIntervalTypes.YEAR) return s.default.Messages.BILLING_PRICE_PER_YEAR.format({
            price: e
        });
        if (t === a.SubscriptionIntervalTypes.MONTH && 1 === n) return s.default.Messages.BILLING_PRICE_PER_MONTH.format({
            price: e
        });
        if (t === a.SubscriptionIntervalTypes.MONTH && n > 1) return s.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS.format({
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