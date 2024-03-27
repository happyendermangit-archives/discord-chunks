function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("47120");
    var i = n("442837"),
        r = n("176919"),
        s = n("975060"),
        a = n("505649");

    function o() {
        let e = (0, i.useStateFromStores)([s.default], () => s.default.error),
            [t, n] = (0, i.useStateFromStoresArray)([a.default], () => [a.default.error, a.default.isAwaitingAuthentication]);
        return {
            paymentError: null != t ? t : e,
            paymentAuthenticationState: n ? r.PaymentAuthenticationState.PENDING : null != t ? r.PaymentAuthenticationState.ERROR : r.PaymentAuthenticationState.NONE
        }
    }
}