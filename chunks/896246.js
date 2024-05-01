function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("47120");
    var i = n("442837"),
        r = n("176919"),
        a = n("975060"),
        s = n("505649");

    function o() {
        let e = (0, i.useStateFromStores)([a.default], () => a.default.error),
            [t, n] = (0, i.useStateFromStoresArray)([s.default], () => [s.default.error, s.default.isAwaitingAuthentication]);
        return {
            paymentError: null != t ? t : e,
            paymentAuthenticationState: n ? r.PaymentAuthenticationState.PENDING : null != t ? r.PaymentAuthenticationState.ERROR : r.PaymentAuthenticationState.NONE
        }
    }
}