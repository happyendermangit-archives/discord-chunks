function(e, t, n) {
    "use strict";
    let i, r, s, a;
    n.r(t);
    var o, l, u, d, _ = n("442837"),
        c = n("570140"),
        E = n("542974"),
        I = n("981631");
    let T = !1,
        f = !1,
        S = !1,
        h = !1,
        A = !1,
        m = null,
        N = null,
        O = !1,
        p = !1;

    function R() {
        T = !1
    }

    function C() {
        i = void 0
    }

    function g() {
        h = !1
    }

    function L() {
        A = !0
    }

    function D() {
        A = !1
    }
    class v extends(d = _.default.Store) {
        get isBusy() {
            return T || f || A || S
        }
        get isUpdatingPaymentSource() {
            return f
        }
        get isRemovingPaymentSource() {
            return S
        }
        get isSyncing() {
            return this.isPaymentSourceFetching || this.isSubscriptionFetching
        }
        get isSubscriptionFetching() {
            return h
        }
        get isPaymentSourceFetching() {
            return null != i
        }
        get editSourceError() {
            return m
        }
        get removeSourceError() {
            return N
        }
        get ipCountryCodeLoaded() {
            return void 0 !== r
        }
        get ipCountryCode() {
            return r
        }
        get ipCountryCodeRequest() {
            return s
        }
        get ipCountryCodeWithFallback() {
            return null != r ? r : I.FallbackCurrencyCountry
        }
        get ipCountryCodeHasError() {
            return O
        }
        get paymentSourcesFetchRequest() {
            return i
        }
        get localizedPricingPromo() {
            return a
        }
        get localizedPricingPromoHasError() {
            return p
        }
        get isLocalizedPromoEnabled() {
            return null != a
        }
    }
    u = "BillingInfoStore", (l = "displayName") in(o = v) ? Object.defineProperty(o, l, {
        value: u,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[l] = u, t.default = new v(c.default, {
        BILLING_PAYMENT_SOURCE_CREATE_START: function() {
            T = !0
        },
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: R,
        BILLING_PAYMENT_SOURCE_CREATE_FAIL: R,
        STRIPE_TOKEN_FAILURE: R,
        BILLING_PAYMENT_SOURCE_REMOVE_START: function() {
            S = !0
        },
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: function() {
            S = !1
        },
        BILLING_PAYMENT_SOURCE_REMOVE_FAIL: function(e) {
            let {
                error: t
            } = e;
            S = !1, N = t
        },
        BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: function() {
            N = null
        },
        BILLING_PAYMENT_SOURCE_UPDATE_START: function() {
            f = !0
        },
        BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: function() {
            f = !1
        },
        BILLING_PAYMENT_SOURCE_UPDATE_FAIL: function(e) {
            let {
                error: t
            } = e;
            f = !1, m = t
        },
        BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: function() {
            m = null
        },
        BILLING_PAYMENT_SOURCES_FETCH_START: function(e) {
            let {
                request: t
            } = e;
            i = t
        },
        BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: C,
        BILLING_PAYMENT_SOURCES_FETCH_FAIL: C,
        BILLING_SUBSCRIPTION_FETCH_START: function() {
            h = !0
        },
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: g,
        BILLING_SUBSCRIPTION_FETCH_FAIL: g,
        BILLING_SUBSCRIPTION_UPDATE_START: L,
        BILLING_SUBSCRIPTION_CANCEL_START: L,
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: D,
        BILLING_SUBSCRIPTION_UPDATE_FAIL: D,
        BILLING_SUBSCRIPTION_CANCEL_FAIL: D,
        BILLING_SUBSCRIPTION_CANCEL_SUCCESS: D,
        BILLING_IP_COUNTRY_CODE_FETCH_START: function(e) {
            let {
                request: t
            } = e;
            s = t
        },
        BILLING_SET_IP_COUNTRY_CODE: function(e) {
            let {
                countryCode: t
            } = e;
            r = t
        },
        BILLING_IP_COUNTRY_CODE_FAILURE: function() {
            r = null, O = !0
        },
        BILLING_SET_LOCALIZED_PRICING_PROMO: function(e) {
            let {
                localizedPricingPromo: t
            } = e;
            a = E.LocalizedPricingPromoRecord.createFromServer(t)
        },
        BILLING_LOCALIZED_PRICING_PROMO_FAILURE: function() {
            a = null, p = !0
        },
        LOGOUT: function() {
            i = void 0, s = void 0, r = void 0, O = !1, a = null, N = null, m = null
        },
        CONNECTION_OPEN: e => {
            let {
                countryCode: t
            } = e;
            null != t && (r = t)
        }
    })
}