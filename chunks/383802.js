function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return a
        }
    }), n("222007");
    var i = n("884691"),
        r = n("976979"),
        u = n("446674"),
        l = n("160299");

    function a() {
        let [t, e] = i.useState(!1), [n, a] = i.useState(!1), o = (0, u.useStateFromStores)([l.default], () => r.CountryCodesSets.EEA_COUNTRIES.has(l.default.ipCountryCodeWithFallback));
        return {
            hasViewedPurchaseTerms: t,
            setHasViewedPurchaseTerms: e,
            showWithdrawalWaiver: o,
            hasAcceptedWithdrawalWaiver: !o || n,
            setHasAcceptedWithdrawalWaiver: a
        }
    }
}