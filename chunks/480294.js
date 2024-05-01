function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, a, s, o = n("442837"),
        l = n("570140");
    let u = !1,
        d = !1,
        _ = {},
        c = null;
    class E extends(s = o.default.Store) {
        hasConsented(e) {
            return null != _[e] && _[e].consented
        }
        get fetchedConsents() {
            return u
        }
        get receivedConsentsInConnectionOpen() {
            return d
        }
        getAuthenticationConsentRequired() {
            return c
        }
    }
    a = "ConsentStore", (r = "displayName") in(i = E) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a, t.default = new E(l.default, {
        CONNECTION_OPEN: function(e) {
            let {
                consents: t
            } = e;
            null != t && (_ = {
                ..._,
                ...t
            }, d = !0)
        },
        UPDATE_CONSENTS: function(e) {
            let {
                consents: t
            } = e;
            _ = {
                ...t
            }, u = !0
        },
        SET_CONSENT_REQUIRED: function(e) {
            c = e.consentRequired
        },
        LOGOUT: function() {
            c = null
        }
    })
}