function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n("411104");
    var s, a, o, l, u = n("442837"),
        d = n("544891"),
        _ = n("570140"),
        c = n("358085"),
        E = n("981631");
    let I = null,
        T = null,
        f = null;
    (0, c.isDesktop)() && (window.popupBridge = {
        getReturnUrlPrefix: () => {
            if (null == i) throw Error("popupBridgeState is unset");
            return (0, d.getAPIBaseURL)() + E.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(E.PaymentGateways.BRAINTREE, i)
        },
        open: e => {
            r = e, window.open(e), h.emitChange()
        }
    });
    class S extends(s = u.default.Store) {
        getClient() {
            return I
        }
        getPayPalClient() {
            return T
        }
        getVenmoClient() {
            return f
        }
        getLastURL() {
            return r
        }
    }
    l = "BraintreeStore", (o = "displayName") in(a = S) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l;
    let h = new S(_.default, {
        BRAINTREE_CREATE_CLIENT_SUCCESS: function(e) {
            let {
                client: t
            } = e;
            I = t
        },
        BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: function(e) {
            let {
                paypalClient: t
            } = e;
            T = t
        },
        BILLING_POPUP_BRIDGE_CALLBACK: function(e) {
            let {
                paymentSourceType: t,
                state: n,
                path: r,
                query: s
            } = e;
            if (t !== E.PaymentSourceTypes.PAYPAL || n !== i) return;
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
            t === E.PaymentSourceTypes.PAYPAL && (i = n)
        },
        BRAINTREE_TEARDOWN_PAYPAL_CLIENT: function() {
            T = null
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
    t.default = h
}