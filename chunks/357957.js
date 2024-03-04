function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("222007");
    var i = n("446674"),
        s = n("913144"),
        r = n("865146");
    let a = {},
        o = null,
        l = !1;

    function u(e) {
        let {
            paymentSource: t
        } = e;
        a = {
            ...a,
            [t.id]: t
        }, (t.isDefault || 1 === Object.keys(a).length) && (o = t.id)
    }
    class d extends i.default.Store {
        get paymentSources() {
            return a
        }
        get paymentSourceIds() {
            return Object.keys(a)
        }
        get defaultPaymentSourceId() {
            return o
        }
        get defaultPaymentSource() {
            return null != o ? a[o] : null
        }
        get hasFetchedPaymentSources() {
            return l
        }
        getDefaultBillingCountryCode() {
            let e = this.defaultPaymentSource;
            return null == e ? null : e.paymentMethodCountry
        }
        getPaymentSource(e) {
            return a[e]
        }
    }
    d.displayName = "PaymentSourceStore";
    var c = new d(s.default, {
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: u,
        BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: u,
        BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: function(e) {
            let {
                paymentSources: t
            } = e;
            for (let e of (a = {}, o = null, t)) a[e.id] = r.default.createFromServer(e), e.default && (o = e.id);
            null == o && t.length > 0 && (o = t[0].id), l = !0
        },
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: function(e) {
            let {
                id: t
            } = e;
            if (a = {
                    ...a
                }, delete a[t], o === t) {
                let e = Object.keys(a);
                o = 0 === e.length ? null : e[0]
            }
        },
        LOGOUT: function() {
            a = {}, o = null, l = !1
        }
    })
}