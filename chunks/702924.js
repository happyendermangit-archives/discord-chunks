function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return a
        }
    }), n("222007");
    var i = n("446674"),
        r = n("877261"),
        u = n("926223"),
        l = n("758764");

    function a() {
        let t = (0, i.useStateFromStores)([u.default], () => u.default.error),
            [e, n] = (0, i.useStateFromStoresArray)([l.default], () => [l.default.error, l.default.isAwaitingAuthentication]);
        return {
            paymentError: null != e ? e : t,
            paymentAuthenticationState: n ? r.PaymentAuthenticationState.PENDING : null != e ? r.PaymentAuthenticationState.ERROR : r.PaymentAuthenticationState.NONE
        }
    }
}