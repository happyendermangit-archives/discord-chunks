function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        formatPercent: function() {
            return l
        },
        formatPrice: function() {
            return u
        },
        formatRate: function() {
            return s
        }
    });
    var r = n("219346"),
        o = n("225098"),
        i = n("868615"),
        a = n("941504");

    function u(e, t, n) {
        var i, a = null !== (i = null == n ? void 0 : n.localeOverride) && void 0 !== i ? i : o.default.locale;
        return (0, r.formatPrice)(e, t, a, n)
    }

    function s(e, t, n) {
        if (t === i.SubscriptionIntervalTypes.YEAR) return a.default.Messages.BILLING_PRICE_PER_YEAR.format({
            price: e
        });
        if (t === i.SubscriptionIntervalTypes.MONTH && 1 === n) return a.default.Messages.BILLING_PRICE_PER_MONTH.format({
            price: e
        });
        if (t === i.SubscriptionIntervalTypes.MONTH && n > 1) return a.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS.format({
            price: e,
            intervalCount: n
        });
        throw Error("Unsupported interval type: ".concat(t, ", and interval count: ").concat(n))
    }

    function l(e, t) {
        return Intl.NumberFormat(e, {
            style: "percent",
            minimumFractionDigits: 0
        }).format(t)
    }
}