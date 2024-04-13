function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        deleteWebAuthnCredential: function() {
            return o
        },
        editWebAuthnCredential: function() {
            return d
        },
        fetchWebAuthnConditionalChallenge: function() {
            return l
        },
        fetchWebAuthnCredentials: function() {
            return u
        },
        fetchWebAuthnPasswordlessChallenge: function() {
            return r
        },
        finishRegisterWebAuthnCredential: function() {
            return f
        },
        startRegisterWebAuthnCredential: function() {
            return c
        }
    });
    var s = n("544891"),
        a = n("570140"),
        i = n("981631");
    async function l() {
        return (await s.HTTP.post(i.Endpoints.WEBAUTHN_CONDITIONAL_UI_CHALLENGE)).body
    }
    async function r() {
        return (await s.HTTP.post(i.Endpoints.WEBAUTHN_PASSWORDLESS_CHALLENGE)).body
    }

    function u() {
        a.default.dispatch({
            type: "MFA_WEBAUTHN_CREDENTIALS_LOADING"
        }), s.HTTP.get(i.Endpoints.MFA_WEBAUTHN_CREDENTIALS).then(e => {
            a.default.dispatch({
                type: "MFA_WEBAUTHN_CREDENTIALS_LOADED",
                credentials: e.body
            })
        })
    }

    function o(e) {
        s.HTTP.del(i.Endpoints.MFA_WEBAUTHN_CREDENTIAL(e.id)).then(() => {
            a.default.dispatch({
                type: "AUTHENTICATOR_DELETE",
                credential: e
            })
        })
    }
    async function d(e, t) {
        let n = await s.HTTP.patch({
            url: i.Endpoints.MFA_WEBAUTHN_CREDENTIAL(e),
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
            url: i.Endpoints.MFA_WEBAUTHN_CREDENTIALS,
            body: {}
        });
        return {
            ticket: e,
            challenge: t
        }
    }
    async function f(e, t, n) {
        let l = await s.HTTP.post({
            url: i.Endpoints.MFA_WEBAUTHN_CREDENTIALS,
            body: {
                name: e,
                ticket: t,
                credential: n
            }
        });
        a.default.dispatch({
            type: "AUTHENTICATOR_CREATE",
            credential: l.body
        }), a.default.dispatch({
            type: "MFA_ENABLE_SUCCESS",
            codes: l.body.backup_codes
        })
    }
}