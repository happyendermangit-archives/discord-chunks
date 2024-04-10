function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        deleteWebAuthnCredential: function() {
            return o
        },
        editWebAuthnCredential: function() {
            return d
        },
        fetchWebAuthnConditionalChallenge: function() {
            return i
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
    var n = s("544891"),
        a = s("570140"),
        l = s("981631");
    async function i() {
        return (await n.HTTP.post(l.Endpoints.WEBAUTHN_CONDITIONAL_UI_CHALLENGE)).body
    }
    async function r() {
        return (await n.HTTP.post(l.Endpoints.WEBAUTHN_PASSWORDLESS_CHALLENGE)).body
    }

    function u() {
        a.default.dispatch({
            type: "MFA_WEBAUTHN_CREDENTIALS_LOADING"
        }), n.HTTP.get(l.Endpoints.MFA_WEBAUTHN_CREDENTIALS).then(e => {
            a.default.dispatch({
                type: "MFA_WEBAUTHN_CREDENTIALS_LOADED",
                credentials: e.body
            })
        })
    }

    function o(e) {
        n.HTTP.del(l.Endpoints.MFA_WEBAUTHN_CREDENTIAL(e.id)).then(() => {
            a.default.dispatch({
                type: "AUTHENTICATOR_DELETE",
                credential: e
            })
        })
    }
    async function d(e, t) {
        let s = await n.HTTP.patch({
            url: l.Endpoints.MFA_WEBAUTHN_CREDENTIAL(e),
            body: {
                name: t
            }
        });
        a.default.dispatch({
            type: "AUTHENTICATOR_UPDATE",
            credential: s.body
        })
    }
    async function c() {
        let {
            body: {
                ticket: e,
                challenge: t
            }
        } = await n.HTTP.post({
            url: l.Endpoints.MFA_WEBAUTHN_CREDENTIALS,
            body: {}
        });
        return {
            ticket: e,
            challenge: t
        }
    }
    async function f(e, t, s) {
        let i = await n.HTTP.post({
            url: l.Endpoints.MFA_WEBAUTHN_CREDENTIALS,
            body: {
                name: e,
                ticket: t,
                credential: s
            }
        });
        a.default.dispatch({
            type: "AUTHENTICATOR_CREATE",
            credential: i.body
        }), a.default.dispatch({
            type: "MFA_ENABLE_SUCCESS",
            codes: i.body.backup_codes
        })
    }
}