function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return a
        }
    }), n("222007");
    var i = n("884691"),
        u = n("976979"),
        r = n("446674"),
        l = n("160299");

    function a() {
        let [t, e] = i.useState(!1), [n, a] = i.useState(!1), o = (0, r.useStateFromStores)([l.default], () => u.CountryCodesSets.EEA_COUNTRIES.has(l.default.ipCountryCodeWithFallback));
        return {
            hasViewedPurchaseTerms: t,
            setHasViewedPurchaseTerms: e,
            showWithdrawalWaiver: o,
            hasAcceptedWithdrawalWaiver: !o || n,
            setHasAcceptedWithdrawalWaiver: a
        }
    }
}