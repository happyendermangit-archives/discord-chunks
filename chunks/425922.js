function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchWebAuthnConditionalChallenge: function() {
            return r
        },
        fetchWebAuthnPasswordlessChallenge: function() {
            return i
        },
        fetchWebAuthnCredentials: function() {
            return u
        },
        deleteWebAuthnCredential: function() {
            return o
        },
        editWebAuthnCredential: function() {
            return d
        },
        startRegisterWebAuthnCredential: function() {
            return c
        },
        finishRegisterWebAuthnCredential: function() {
            return f
        }
    });
    var s = n("872717"),
        a = n("913144"),
        l = n("49111");
    async function r() {
        let e = await s.HTTP.post(l.Endpoints.WEBAUTHN_CONDITIONAL_UI_CHALLENGE);
        return e.body
    }
    async function i() {
        let e = await s.HTTP.post(l.Endpoints.WEBAUTHN_PASSWORDLESS_CHALLENGE);
        return e.body
    }

    function u() {
        a.default.dispatch({
            type: "MFA_WEBAUTHN_CREDENTIALS_LOADING"
        }), s.HTTP.get(l.Endpoints.MFA_WEBAUTHN_CREDENTIALS).then(e => {
            a.default.dispatch({
                type: "MFA_WEBAUTHN_CREDENTIALS_LOADED",
                credentials: e.body
            })
        })
    }

    function o(e) {
        s.HTTP.del(l.Endpoints.MFA_WEBAUTHN_CREDENTIAL(e.id)).then(() => {
            a.default.dispatch({
                type: "AUTHENTICATOR_DELETE",
                credential: e
            })
        })
    }
    async function d(e, t) {
        let n = await s.HTTP.patch({
            url: l.Endpoints.MFA_WEBAUTHN_CREDENTIAL(e),
            body: {
                name: t
            }
        });
        a.default.dispatch({
            type: "AUTHENTICATOR_UPDATE",
            credential: n.body
        })
    }
    async function c() {
        let {
            body: {
                ticket: e,
                challenge: t
            }
        } = await s.HTTP.post({
            url: l.Endpoints.MFA_WEBAUTHN_CREDENTIALS,
            body: {}
        });
        return {
            ticket: e,
            challenge: t
        }
    }
    async function f(e, t, n) {
        let r = await s.HTTP.post({
            url: l.Endpoints.MFA_WEBAUTHN_CREDENTIALS,
            body: {
                name: e,
                ticket: t,
                credential: n
            }
        });
        a.default.dispatch({
            type: "AUTHENTICATOR_CREATE",
            credential: r.body
        }), a.default.dispatch({
            type: "MFA_ENABLE_SUCCESS",
            codes: r.body.backup_codes
        })
    }
}