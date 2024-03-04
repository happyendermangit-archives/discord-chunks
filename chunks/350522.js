function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("446674"),
        s = n("913144");
    let r = !1,
        a = !1,
        o = {},
        l = null;
    class u extends i.default.Store {
        hasConsented(e) {
            return null != o[e] && o[e].consented
        }
        get fetchedConsents() {
            return r
        }
        get receivedConsentsInConnectionOpen() {
            return a
        }
        getAuthenticationConsentRequired() {
            return l
        }
    }
    u.displayName = "ConsentStore";
    var d = new u(s.default, {
        CONNECTION_OPEN: function(e) {
            let {
                consents: t
            } = e;
            null != t && (o = {
                ...o,
                ...t
            }, a = !0)
        },
        UPDATE_CONSENTS: function(e) {
            let {
                consents: t
            } = e;
            o = {
                ...t
            }, r = !0
        },
        SET_CONSENT_REQUIRED: function(e) {
            l = e.consentRequired
        },
        LOGOUT: function() {
            l = null
        }
    })
}