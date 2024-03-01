function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("70102");
    var s = n("446674"),
        a = n("872717"),
        o = n("913144"),
        l = n("773336"),
        u = n("49111");
    let c = null,
        d = null,
        f = null;
    (0, l.isDesktop)() && (window.popupBridge = {
        getReturnUrlPrefix: () => {
            if (null == i) throw Error("popupBridgeState is unset");
            return a.default.getAPIBaseURL() + u.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(u.PaymentGateways.BRAINTREE, i)
        },
        open: e => {
            r = e, window.open(e), p.emitChange()
        }
    });
    class E extends s.default.Store {
        getClient() {
            return c
        }
        getPayPalClient() {
            return d
        }
        getVenmoClient() {
            return f
        }
        getLastURL() {
            return r
        }
    }
    E.displayName = "BraintreeStore";
    let p = new E(o.default, {
        BRAINTREE_CREATE_CLIENT_SUCCESS: function(e) {
            let {
                client: t
            } = e;
            c = t
        },
        BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: function(e) {
            let {
                paypalClient: t
            } = e;
            d = t
        },
        BILLING_POPUP_BRIDGE_CALLBACK: function(e) {
            let {
                paymentSourceType: t,
                state: n,
                path: r,
                query: s
            } = e;
            if (t !== u.PaymentSourceTypes.PAYPAL || n !== i) return;
            let a = window.popupBridge.onComplete;
            "function" == typeof a && a(null, {
                path: r,
                queryItems: s
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
            d = null
        },
        BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: function(e) {
            let {
                venmoClient: t
            } = e;
            f = t
        },
        BRAINTREE_TEARDOWN_VENMO_CLIENT: function() {
            f = null
        }
    });
    var h = p
}