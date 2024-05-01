function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, a, s, o = n("442837"),
        l = n("570140"),
        u = n("46141");
    let d = {},
        _ = null,
        c = !1;

    function E(e) {
        let {
            paymentSource: t
        } = e;
        d = {
            ...d,
            [t.id]: t
        }, (t.isDefault || 1 === Object.keys(d).length) && (_ = t.id)
    }
    class I extends(i = o.default.Store) {
        get paymentSources() {
            return d
        }
        get paymentSourceIds() {
            return Object.keys(d)
        }
        get defaultPaymentSourceId() {
            return _
        }
        get defaultPaymentSource() {
            return null != _ ? d[_] : null
        }
        get hasFetchedPaymentSources() {
            return c
        }
        getDefaultBillingCountryCode() {
            let e = this.defaultPaymentSource;
            return null == e ? null : e.paymentMethodCountry
        }
        getPaymentSource(e) {
            return d[e]
        }
    }
    s = "PaymentSourceStore", (a = "displayName") in(r = I) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new I(l.default, {
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: E,
        BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: E,
        BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: function(e) {
            let {
                paymentSources: t
            } = e;
            for (let e of (d = {}, _ = null, t)) d[e.id] = u.default.createFromServer(e), e.default && (_ = e.id);
            null == _ && t.length > 0 && (_ = t[0].id), c = !0
        },
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: function(e) {
            let {
                id: t
            } = e;
            if (d = {
                    ...d
                }, delete d[t], _ === t) {
                let e = Object.keys(d);
                _ = 0 === e.length ? null : e[0]
            }
        },
        LOGOUT: function() {
            d = {}, _ = null, c = !1
        }
    })
}