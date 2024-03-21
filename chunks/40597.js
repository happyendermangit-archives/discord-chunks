function(e, t, n) {
    "use strict";
    let i, s;
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("70102");
    var r = n("446674"),
        a = n("872717"),
        o = n("913144"),
        l = n("773336"),
        u = n("49111");
    let d = null,
        c = null,
        _ = null;
    (0, l.isDesktop)() && (window.popupBridge = {
        getReturnUrlPrefix: () => {
            if (null == i) throw Error("popupBridgeState is unset");
            return (0, a.getAPIBaseURL)() + u.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(u.PaymentGateways.BRAINTREE, i)
        },
        open: e => {
            s = e, window.open(e), E.emitChange()
        }
    });
    class f extends r.default.Store {
        getClient() {
            return d
        }
        getPayPalClient() {
            return c
        }
        getVenmoClient() {
            return _
        }
        getLastURL() {
            return s
        }
    }
    f.displayName = "BraintreeStore";
    let E = new f(o.default, {
        BRAINTREE_CREATE_CLIENT_SUCCESS: function(e) {
            let {
                client: t
            } = e;
            d = t
        },
        BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: function(e) {
            let {
                paypalClient: t
            } = e;
            c = t
        },
        BILLING_POPUP_BRIDGE_CALLBACK: function(e) {
            let {
                paymentSourceType: t,
                state: n,
                path: s,
                query: r
            } = e;
            if (t !== u.PaymentSourceTypes.PAYPAL || n !== i) return;
            let a = window.popupBridge.onComplete;
            "function" == typeof a && a(null, {
                path: s,
                queryItems: r
            })
        },
        BILLING_POPUP_BRIDGE_STATE_UPDATE: function(e) {
            let {
                paymentSourceType: t,
                state: n
            } = e;
            t === u.PaymentSourceTypes.PAYPAL && (i = n)
        },
        BRAINTREE_TEARDOWN_PAYPAL_CLIENT: function() {
            c = null
        },
        BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: function(e) {
            let {
                venmoClient: t
            } = e;
            _ = t
        },
        BRAINTREE_TEARDOWN_VENMO_CLIENT: function() {
            _ = null
        }
    });
    var h = E
}