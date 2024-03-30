function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearPurchaseTokenAuthState: function() {
            return r
        }
    });
    var i = n("570140");

    function r() {
        i.default.dispatch({
            type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
        })
    }
}