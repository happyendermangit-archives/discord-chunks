function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n("47120"), n("177593"), n("653041"), n("411104");
    var s, a, o, l, u = n("512722"),
        d = n.n(u),
        _ = n("213919"),
        c = n("756647"),
        E = n("442837"),
        I = n("544891"),
        T = n("433517"),
        f = n("570140"),
        S = n("911969"),
        A = n("670890"),
        h = n("569611"),
        m = n("710845"),
        N = n("703656"),
        O = n("786213"),
        p = n("626135"),
        R = n("449934"),
        C = n("960048"),
        g = n("117240"),
        L = n("412788"),
        D = n("981631"),
        v = n("723359");
    let M = n("952265").hasModalOpen,
        y = new m.default("AuthenticationStore"),
        P = "fingerprint",
        U = "email_cache",
        b = "user_id_cache",
        G = null,
        w = null,
        k = null,
        B = null,
        V = null,
        F = null,
        x = null,
        H = D.LoginStates.NONE,
        Y = D.RegistrationStates.NONE,
        j = !1,
        W = [],
        K = "",
        z = !1,
        X = null,
        Q = !1,
        q = !1,
        J = "",
        Z = !1,
        $ = !1,
        ee = {},
        et = {},
        en = null,
        ei = null,
        er = null,
        es = null;

    function ea(e) {
        let t = null != _.getToken(),
            n = null != T.Storage.get(D.TOKEN_KEY);
        y.verbose(e, {
            tokenManagerHasToken: t,
            storageHasToken: n
        })
    }

    function eo() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        if (V = T.Storage.get(P), null != ei) return ei;
        let t = null != V ? V : _.getToken();
        !(!(0, N.isValidFingerprintRoute)() || !e && null != t || g.default.isHandoffAvailable()) && el({
            withGuildExperiments: !0
        })
    }

    function el(e) {
        let {
            withGuildExperiments: t
        } = e, n = {}, i = p.default.getSuperPropertiesBase64();
        null != i && (n["X-Super-Properties"] = i), null != V && (n["X-Fingerprint"] = V), ei = I.HTTP.get({
            url: D.Endpoints.EXPERIMENTS,
            query: {
                with_guild_experiments: t
            },
            headers: n,
            context: {
                location: (0, N.getFingerprintLocation)()
            },
            retries: 3,
            oldFormErrors: !0
        }).then(e => {
            let {
                fingerprint: t,
                assignments: n,
                guild_experiments: i
            } = e.body;
            t && f.default.dispatch({
                type: "FINGERPRINT",
                fingerprint: t
            }), f.default.dispatch({
                type: "EXPERIMENTS_FETCH_SUCCESS",
                fingerprint: t,
                experiments: n,
                guildExperiments: i
            }), ei = null
        }, () => {
            ei = null, f.default.dispatch({
                type: "EXPERIMENTS_FETCH_FAILURE"
            })
        })
    }

    function eu() {
        F = V, V = null, T.Storage.remove(P)
    }

    function ed(e, t) {
        ea("setAuthToken called."), _.setToken(e, t)
    }

    function e_() {
        ea("removeAuthToken called."), _.removeToken()
    }

    function ec() {
        j = !0, eE(), f.default.wait(() => {
            (0, N.transitionTo)(D.Routes.REGISTER)
        })
    }

    function eE(e) {
        ea("handleLogout called."), e_(), eu(), !(null == e ? void 0 : e.isSwitchingAccount) && eo(), E.default.PersistedStore.clearAll({
            omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore"],
            type: (null == e ? void 0 : e.isSwitchingAccount) ? "user-data-only" : "all"
        }), L.default.clearAll(), h.clear(), C.default.clearUser(), T.Storage.remove(b), G = null, H = (null == e ? void 0 : e.isSwitchingAccount) ? D.LoginStates.LOGGING_IN : D.LoginStates.NONE, Y = D.RegistrationStates.NONE, K = "", J = "", X = null, z = !1, Z = !1, $ = !1, ee = {}, et = {}
    }
    class eI extends(s = E.default.Store) {
        initialize() {
            G = T.Storage.get(b), w = T.Storage.get(U), er = T.Storage.get("login_cache"), null == _.getToken() && eo(), this.addChangeListener(() => (0, A.setClientState)(G))
        }
        getEmail() {
            return w
        }
        getLogin() {
            return er
        }
        didVerifyFail() {
            return Z
        }
        getVerifyErrors() {
            return ee
        }
        didVerifySucceed() {
            return $
        }
        getLoginStatus() {
            return H
        }
        getRegisterStatus() {
            return Y
        }
        getId() {
            return G
        }
        getSessionId() {
            return k
        }
        getAuthSessionIdHash() {
            return B
        }
        getToken() {
            return (0, R.getToken)()
        }
        isAuthenticated() {
            return (0, R.isAuthenticated)()
        }
        getFingerprint() {
            return V
        }
        getAnalyticsToken() {
            return x
        }
        getErrors() {
            return et
        }
        getMFATicket() {
            return K
        }
        getMFASMS() {
            return z
        }
        getMFATotp() {
            return Q
        }
        getMFABackup() {
            return q
        }
        getMFAWebAuthn() {
            return X
        }
        getMFAMethods() {
            let e = [];
            return null != X && e.push({
                type: "webauthn",
                challenge: X
            }), Q && e.push({
                type: "totp",
                backup_codes_allowed: q
            }), q && e.push({
                type: "backup"
            }), z && e.push({
                type: "sms"
            }), e
        }
        hasTOTPEnabled() {
            return W.includes(S.AuthenticatorType.TOTP)
        }
        hasSMSEnabled() {
            return W.includes(S.AuthenticatorType.SMS)
        }
        hasWebAuthnEnabled() {
            return W.includes(S.AuthenticatorType.WEBAUTHN)
        }
        getMaskedPhone() {
            return J
        }
        getCredentials() {
            if (null == i) throw Error("no credentials");
            return i
        }
        getVerifyingUserId() {
            return en
        }
        getCurrentRegistrationOptions() {
            return r
        }
        allowLogoutRedirect() {
            return !j
        }
        getWebAuthnChallenge() {
            return X
        }
        getSuspendedUserToken() {
            return es
        }
    }
    l = "AuthenticationStore", (o = "displayName") in(a = eI) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new eI(f.default, {
        CONNECTION_OPEN: function(e) {
            var t;
            let {
                user: n,
                sessionId: i,
                authSessionIdHash: r,
                analyticsToken: s,
                auth: a
            } = e;
            ea("handleConnectionOpen called"), C.default.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, O.default)(n)), k = i, B = r, x = s, G = n.id, w = n.email, void 0 !== a && (W = a.authenticator_types), T.Storage.set(U, n.email), T.Storage.set(b, n.id)
        },
        OVERLAY_INITIALIZE: function(e) {
            var t;
            let {
                user: n,
                sessionId: i,
                analyticsToken: r,
                token: s
            } = e;
            C.default.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, O.default)(n)), k = i, x = r, ed(s), eu(), G = n.id, T.Storage.set(b, n.id)
        },
        CONNECTION_CLOSED: function(e) {
            let {
                code: t
            } = e;
            if (ea("handleConnectionClosed called with code ".concat(t, ".")), 4004 === t) {
                if (j || M(v.NEW_USER_AGE_GATE_MODAL_KEY) || M(v.EXISTING_USER_AGE_GATE_MODAL_KEY)) {
                    ec();
                    return
                }
                p.default.track(D.AnalyticEvents.APP_USER_DEAUTHENTICATED, {
                    user_id: T.Storage.get(b)
                }), eE(), setImmediate(() => (0, N.transitionTo)(D.Routes.DEFAULT_LOGGED_OUT))
            }
        },
        AUTH_SESSION_CHANGE: function(e) {
            let {
                authSessionIdHash: t
            } = e;
            null != t && (B = t)
        },
        LOGIN: function(e) {
            et = {}, H = D.LoginStates.LOGGING_IN, J = "", r = null, null != e.login && (er = e.login)
        },
        LOGIN_SUCCESS: function(e) {
            let {
                token: t
            } = e;
            H = D.LoginStates.NONE, ed(t), eu(), K = "", z = !1, X = null, J = ""
        },
        LOGIN_FAILURE: function(e) {
            let {
                error: t
            } = e;
            K = "", z = !1, X = null, H = null != (et = function(e) {
                if (Object.keys(e.fields).length > 0) return e.fields;
                let t = {
                    message: e.message
                };
                return null != e.retryAfter && (t.retry_after = e.retryAfter), t
            }(t)).date_of_birth ? D.LoginStates.LOGIN_AGE_GATE : D.LoginStates.NONE
        },
        LOGIN_MFA_STEP: function(e) {
            let {
                ticket: t,
                sms: n,
                webauthn: i,
                backup: r,
                totp: s
            } = e;
            null != t && (K = t, z = n, J = "", X = null != i ? i : null, q = r, Q = s), et = {}, H = D.LoginStates.MFA_STEP
        },
        LOGIN_MFA: function() {
            H = D.LoginStates.LOGGING_IN_MFA
        },
        LOGIN_MFA_FAILURE: function(e) {
            let {
                message: t
            } = e;
            H = D.LoginStates.MFA_STEP, et = {
                code: t
            }
        },
        LOGIN_MFA_SMS: function() {
            H = D.LoginStates.LOGGING_IN_MFA_SMS
        },
        LOGIN_MFA_SMS_REQUEST_SUCCESS: function(e) {
            let {
                phone: t
            } = e;
            H = D.LoginStates.MFA_SMS_STEP, J = t
        },
        LOGIN_MFA_SMS_FAILURE: function(e) {
            let {
                message: t
            } = e;
            H = D.LoginStates.MFA_SMS_STEP, et = {
                code: t
            }
        },
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function(e) {
            H = D.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION, i = e.credentials
        },
        LOGIN_ACCOUNT_DISABLED: function(e) {
            H = D.LoginStates.ACCOUNT_DISABLED, i = e.credentials
        },
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function() {
            H = D.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION
        },
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function() {
            H = D.LoginStates.PHONE_IP_AUTHORIZATION
        },
        LOGIN_RESET: function(e) {
            let {
                isMultiAccount: t
            } = e;
            et = {}, H = D.LoginStates.NONE, K = "", z = !1, X = null, r = null, i = null, !t && (e_(), eo(!1))
        },
        LOGIN_STATUS_RESET: function() {
            H = D.LoginStates.NONE
        },
        LOGIN_SUSPENDED_USER: function(e) {
            let {
                suspendedUserToken: t
            } = e;
            es = t, setImmediate(() => (0, N.transitionTo)(D.Routes.ACCOUNT_STANDING))
        },
        SET_LOGIN_CREDENTIALS: function(e) {
            let {
                login: t,
                password: n
            } = e;
            i = {
                login: t,
                password: n
            }
        },
        LOGOUT: eE,
        FINGERPRINT: function(e) {
            let t = e.fingerprint;
            null == V ? null != t ? (p.default.track(D.AnalyticEvents.USER_FINGERPRINT_CHANGED, {
                old_fingerprint: null != F ? (0, c.extractId)(F) : null,
                new_fingerprint: (0, c.extractId)(t)
            }), V = t, F = t, T.Storage.set(P, V)) : eo() : null != t && V !== t && p.default.track(D.AnalyticEvents.EXTERNAL_FINGERPRINT_DROPPED, {
                fingerprint: (0, c.extractId)(V),
                dropped_fingerprint: (0, c.extractId)(t)
            })
        },
        REGISTER_SAVE_FORM: function(e) {
            let {
                form: t
            } = e;
            r = t, Y = D.RegistrationStates.REGISTER_AGE_GATE
        },
        REGISTER: function(e) {
            let {
                birthday: t
            } = e;
            et = {}, null != t && (d()(null != r, "Got birthday in multistep registration without existing form"), r = {
                ...r,
                birthday: t
            }), Y = D.RegistrationStates.REGISTERING
        },
        REGISTER_SUCCESS: function(e) {
            let {
                token: t
            } = e;
            Y = D.RegistrationStates.NONE, r = null, ed(t), eu()
        },
        REGISTER_FAILURE: function(e) {
            let {
                error: t
            } = e;
            et = function(e) {
                let t = {};
                if (t.error_code = e.code, null != e.errors) {
                    for (let n of Object.keys(e.errors)) t[n] = [e.getFirstFieldErrorMessage(n)];
                    return t
                }
                return t.message = e.message, null != e.retryAfter && (t.retry_after = e.retryAfter), t
            }(t), Y = null != t.getFieldErrors("date_of_birth") ? D.RegistrationStates.REGISTER_AGE_GATE : D.RegistrationStates.REGISTER_WITH_ERROR
        },
        VERIFY_FAILURE: function(e) {
            let {
                errors: t
            } = e;
            Z = !0, $ = !1, ee = null != t ? t : {}
        },
        VERIFY_SUCCESS: function(e) {
            $ = !0, Z = !1, ee = {}, en = e.verifyingUserId
        },
        START_SESSION: function() {
            if (0 === Object.keys(et).length) return !1;
            et = {}
        },
        FORGOT_PASSWORD_REQUEST: function() {
            H = D.LoginStates.FORGOT_PASSWORD, et = {}
        },
        FORGOT_PASSWORD_SENT: function() {
            H = D.LoginStates.NONE, et = {}
        },
        UPDATE_TOKEN: function(e) {
            let {
                token: t,
                userId: n
            } = e;
            ea("handleUpdateToken called"), ed(t, n), eu()
        },
        EXPERIMENTS_FETCH: el,
        CURRENT_USER_UPDATE: function(e) {
            let {
                user: t
            } = e;
            G = t.id, w = t.email, void 0 !== t.authenticator_types && (W = t.authenticator_types), T.Storage.set(U, t.email), T.Storage.set(b, t.id)
        },
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: ec,
        CLEAR_AUTHENTICATION_ERRORS: function() {
            et = {}
        },
        CLOSE_SUSPENDED_USER: function() {
            es = null, H = D.LoginStates.NONE, eE(), setImmediate(() => (0, N.transitionTo)(D.Routes.DEFAULT_LOGGED_OUT))
        }
    }, f.DispatchBand.Early)
}