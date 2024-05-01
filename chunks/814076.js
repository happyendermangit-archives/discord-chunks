function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("47120");
    var i = n("470079"),
        r = n("742280"),
        s = n("442837"),
        a = n("351402");

    function o() {
        let [e, t] = i.useState(!1), [n, o] = i.useState(!1), l = (0, s.useStateFromStores)([a.default], () => r.CountryCodesSets.EEA_COUNTRIES.has(a.default.ipCountryCodeWithFallback));
        return {
            hasViewedPurchaseTerms: e,
            setHasViewedPurchaseTerms: t,
            showWithdrawalWaiver: l,
            hasAcceptedWithdrawalWaiver: !l || n,
            setHasAcceptedWithdrawalWaiver: o
        }
    }
}