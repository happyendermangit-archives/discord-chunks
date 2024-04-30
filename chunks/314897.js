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
        h = n("670890"),
        A = n("569611"),
        m = n("710845"),
        N = n("703656"),
        p = n("786213"),
        O = n("626135"),
        R = n("449934"),
        C = n("960048"),
        g = n("117240"),
        L = n("412788"),
        v = n("981631"),
        D = n("723359");
    let M = n("952265").hasModalOpen,
        y = new m.default("AuthenticationStore"),
        P = "fingerprint",
        U = "email_cache",
        b = "user_id_cache",
        G = null,
        w = null,
        B = null,
        k = null,
        V = null,
        x = null,
        F = null,
        H = v.LoginStates.NONE,
        Y = v.RegistrationStates.NONE,
        j = !1,
        W = [],
        K = "",
        z = !1,
        Z = null,
        X = !1,
        Q = !1,
        q = "",
        J = !1,
        $ = !1,
        ee = {},
        et = {},
        en = null,
        ei = null,
        er = null,
        es = null;

    function ea(e) {
        let t = null != _.getToken(),
            n = null != T.Storage.get(v.TOKEN_KEY);
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
        } = e, n = {}, i = O.default.getSuperPropertiesBase64();
        null != i && (n["X-Super-Properties"] = i), null != V && (n["X-Fingerprint"] = V), ei = I.HTTP.get({
            url: v.Endpoints.EXPERIMENTS,
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
        x = V, V = null, T.Storage.remove(P)
    }

    function ed(e, t) {
        ea("setAuthToken called."), _.setToken(e, t)
    }

    function e_() {
        ea("removeAuthToken called."), _.removeToken()
    }

    function ec() {
        j = !0, eE(), f.default.wait(() => {
            (0, N.transitionTo)(v.Routes.REGISTER)
        })
    }

    function eE(e) {
        ea("handleLogout called."), e_(), eu(), !(null == e ? void 0 : e.isSwitchingAccount) && eo(), E.default.PersistedStore.clearAll({
            omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore"],
            type: (null == e ? void 0 : e.isSwitchingAccount) ? "user-data-only" : "all"
        }), L.default.clearAll(), A.clear(), C.default.clearUser(), T.Storage.remove(b), G = null, H = (null == e ? void 0 : e.isSwitchingAccount) ? v.LoginStates.LOGGING_IN : v.LoginStates.NONE, Y = v.RegistrationStates.NONE, K = "", q = "", Z = null, z = !1, J = !1, $ = !1, ee = {}, et = {}
    }
    class eI extends(s = E.default.Store) {
        initialize() {
            G = T.Storage.get(b), w = T.Storage.get(U), er = T.Storage.get("login_cache"), null == _.getToken() && eo(), this.addChangeListener(() => (0, h.setClientState)(G))
        }
        getEmail() {
            return w
        }
        getLogin() {
            return er
        }
        didVerifyFail() {
            return J
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
            return B
        }
        getAuthSessionIdHash() {
            return k
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
            return F
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
            return X
        }
        getMFABackup() {
            return Q
        }
        getMFAWebAuthn() {
            return Z
        }
        getMFAMethods() {
            let e = [];
            return null != Z && e.push({
                type: "webauthn",
                challenge: Z
            }), X && e.push({
                type: "totp",
                backup_codes_allowed: Q
            }), Q && e.push({
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
            return q
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
            return Z
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
            ea("handleConnectionOpen called"), C.default.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, p.default)(n)), B = i, k = r, F = s, G = n.id, w = n.email, void 0 !== a && (W = a.authenticator_types), T.Storage.set(U, n.email), T.Storage.set(b, n.id)
        },
        OVERLAY_INITIALIZE: function(e) {
            var t;
            let {
                user: n,
                sessionId: i,
                analyticsToken: r,
                token: s
            } = e;
            C.default.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, p.default)(n)), B = i, F = r, ed(s), eu(), G = n.id, T.Storage.set(b, n.id)
        },
        CONNECTION_CLOSED: function(e) {
            let {
                code: t
            } = e;
            if (ea("handleConnectionClosed called with code ".concat(t, ".")), 4004 === t) {
                if (j || M(D.NEW_USER_AGE_GATE_MODAL_KEY) || M(D.EXISTING_USER_AGE_GATE_MODAL_KEY)) {
                    ec();
                    return
                }
                O.default.track(v.AnalyticEvents.APP_USER_DEAUTHENTICATED, {
                    user_id: T.Storage.get(b)
                }), eE(), setImmediate(() => (0, N.transitionTo)(v.Routes.DEFAULT_LOGGED_OUT))
            }
        },
        AUTH_SESSION_CHANGE: function(e) {
            let {
                authSessionIdHash: t
            } = e;
            null != t && (k = t)
        },
        LOGIN: function(e) {
            et = {}, H = v.LoginStates.LOGGING_IN, q = "", r = null, null != e.login && (er = e.login)
        },
        LOGIN_SUCCESS: function(e) {
            let {
                token: t
            } = e;
            H = v.LoginStates.NONE, ed(t), eu(), K = "", z = !1, Z = null, q = ""
        },
        LOGIN_FAILURE: function(e) {
            let {
                error: t
            } = e;
            K = "", z = !1, Z = null, H = null != (et = function(e) {
                if (Object.keys(e.fields).length > 0) return e.fields;
                let t = {
                    message: e.message
                };
                return null != e.retryAfter && (t.retry_after = e.retryAfter), t
            }(t)).date_of_birth ? v.LoginStates.LOGIN_AGE_GATE : v.LoginStates.NONE
        },
        LOGIN_MFA_STEP: function(e) {
            let {
                ticket: t,
                sms: n,
                webauthn: i,
                backup: r,
                totp: s
            } = e;
            null != t && (K = t, z = n, q = "", Z = null != i ? i : null, Q = r, X = s), et = {}, H = v.LoginStates.MFA_STEP
        },
        LOGIN_MFA: function() {
            H = v.LoginStates.LOGGING_IN_MFA
        },
        LOGIN_MFA_FAILURE: function(e) {
            let {
                message: t
            } = e;
            H = v.LoginStates.MFA_STEP, et = {
                code: t
            }
        },
        LOGIN_MFA_SMS: function() {
            H = v.LoginStates.LOGGING_IN_MFA_SMS
        },
        LOGIN_MFA_SMS_REQUEST_SUCCESS: function(e) {
            let {
                phone: t
            } = e;
            H = v.LoginStates.MFA_SMS_STEP, q = t
        },
        LOGIN_MFA_SMS_FAILURE: function(e) {
            let {
                message: t
            } = e;
            H = v.LoginStates.MFA_SMS_STEP, et = {
                code: t
            }
        },
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function(e) {
            H = v.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION, i = e.credentials
        },
        LOGIN_ACCOUNT_DISABLED: function(e) {
            H = v.LoginStates.ACCOUNT_DISABLED, i = e.credentials
        },
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function() {
            H = v.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION
        },
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function() {
            H = v.LoginStates.PHONE_IP_AUTHORIZATION
        },
        LOGIN_RESET: function(e) {
            let {
                isMultiAccount: t
            } = e;
            et = {}, H = v.LoginStates.NONE, K = "", z = !1, Z = null, r = null, i = null, !t && (e_(), eo(!1))
        },
        LOGIN_STATUS_RESET: function() {
            H = v.LoginStates.NONE
        },
        LOGIN_SUSPENDED_USER: function(e) {
            let {
                suspendedUserToken: t
            } = e;
            es = t, setImmediate(() => (0, N.transitionTo)(v.Routes.ACCOUNT_STANDING))
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
            null == V ? null != t ? (O.default.track(v.AnalyticEvents.USER_FINGERPRINT_CHANGED, {
                old_fingerprint: null != x ? (0, c.extractId)(x) : null,
                new_fingerprint: (0, c.extractId)(t)
            }), V = t, x = t, T.Storage.set(P, V)) : eo() : null != t && V !== t && O.default.track(v.AnalyticEvents.EXTERNAL_FINGERPRINT_DROPPED, {
                fingerprint: (0, c.extractId)(V),
                dropped_fingerprint: (0, c.extractId)(t)
            })
        },
        REGISTER_SAVE_FORM: function(e) {
            let {
                form: t
            } = e;
            r = t, Y = v.RegistrationStates.REGISTER_AGE_GATE
        },
        REGISTER: function(e) {
            let {
                birthday: t
            } = e;
            et = {}, null != t && (d()(null != r, "Got birthday in multistep registration without existing form"), r = {
                ...r,
                birthday: t
            }), Y = v.RegistrationStates.REGISTERING
        },
        REGISTER_SUCCESS: function(e) {
            let {
                token: t
            } = e;
            Y = v.RegistrationStates.NONE, r = null, ed(t), eu()
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
            }(t), Y = null != t.getFieldErrors("date_of_birth") ? v.RegistrationStates.REGISTER_AGE_GATE : v.RegistrationStates.REGISTER_WITH_ERROR
        },
        VERIFY_FAILURE: function(e) {
            let {
                errors: t
            } = e;
            J = !0, $ = !1, ee = null != t ? t : {}
        },
        VERIFY_SUCCESS: function(e) {
            $ = !0, J = !1, ee = {}, en = e.verifyingUserId
        },
        START_SESSION: function() {
            if (0 === Object.keys(et).length) return !1;
            et = {}
        },
        FORGOT_PASSWORD_REQUEST: function() {
            H = v.LoginStates.FORGOT_PASSWORD, et = {}
        },
        FORGOT_PASSWORD_SENT: function() {
            H = v.LoginStates.NONE, et = {}
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
            es = null, H = v.LoginStates.NONE, eE(), setImmediate(() => (0, N.transitionTo)(v.Routes.DEFAULT_LOGGED_OUT))
        }
    }, f.DispatchBand.Early)
}