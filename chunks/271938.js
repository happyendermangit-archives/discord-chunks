function(e, t, n) {
    "use strict";
    let i, s;
    n.r(t), n.d(t, {
        default: function() {
            return ec
        }
    }), n("222007"), n("860677"), n("424973"), n("70102");
    var r = n("627445"),
        a = n.n(r),
        o = n("171718"),
        l = n("391679"),
        u = n("446674"),
        d = n("872717"),
        c = n("95410"),
        f = n("913144"),
        _ = n("798609"),
        h = n("91131"),
        E = n("821316"),
        g = n("605250"),
        m = n("393414"),
        p = n("705873"),
        S = n("599110"),
        v = n("831588"),
        T = n("286235"),
        I = n("72177"),
        C = n("455079"),
        A = n("49111"),
        y = n("586391");
    let N = n("551042").hasModalOpen,
        R = new g.default("AuthenticationStore"),
        O = "fingerprint",
        D = "email_cache",
        P = "user_id_cache",
        M = null,
        L = null,
        b = null,
        U = null,
        w = null,
        k = null,
        V = null,
        G = A.LoginStates.NONE,
        F = A.RegistrationStates.NONE,
        x = !1,
        B = [],
        H = "",
        Y = !1,
        j = null,
        W = !1,
        K = !1,
        z = "",
        q = !1,
        X = !1,
        Q = {},
        Z = {},
        J = null,
        $ = null,
        ee = null,
        et = null;

    function en(e) {
        let t = null != o.default.getToken(),
            n = null != c.default.get(A.TOKEN_KEY);
        R.verbose(e, {
            tokenManagerHasToken: t,
            storageHasToken: n
        })
    }

    function ei() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        if (w = c.default.get(O), null != $) return $;
        let t = null != w ? w : o.default.getToken();
        !(!(0, m.isValidFingerprintRoute)() || !e && null != t || I.default.isHandoffAvailable()) && es({
            withGuildExperiments: !0
        })
    }

    function es(e) {
        let {
            withGuildExperiments: t
        } = e, n = {}, i = S.default.getSuperPropertiesBase64();
        null != i && (n["X-Super-Properties"] = i), null != w && (n["X-Fingerprint"] = w), $ = d.default.get({
            url: A.Endpoints.EXPERIMENTS,
            query: {
                with_guild_experiments: t
            },
            headers: n,
            context: {
                location: (0, m.getFingerprintLocation)()
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
            }), $ = null
        }, () => {
            $ = null, f.default.dispatch({
                type: "EXPERIMENTS_FETCH_FAILURE"
            })
        })
    }

    function er() {
        k = w, w = null, c.default.remove(O)
    }

    function ea(e, t) {
        en("setAuthToken called."), o.default.setToken(e, t)
    }

    function eo() {
        en("removeAuthToken called."), o.default.removeToken()
    }

    function el() {
        x = !0, eu(), f.default.wait(() => {
            (0, m.transitionTo)(A.Routes.REGISTER)
        })
    }

    function eu(e) {
        en("handleLogout called."), eo(), er(), !(null == e ? void 0 : e.isSwitchingAccount) && ei(), u.default.PersistedStore.clearAll({
            omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore"],
            type: (null == e ? void 0 : e.isSwitchingAccount) ? "user-data-only" : "all"
        }), C.default.clearAll(), E.clear(), T.default.clearUser(), c.default.remove(P), M = null, G = (null == e ? void 0 : e.isSwitchingAccount) ? A.LoginStates.LOGGING_IN : A.LoginStates.NONE, F = A.RegistrationStates.NONE, H = "", z = "", j = null, Y = !1, q = !1, X = !1, Q = {}, Z = {}
    }
    class ed extends u.default.Store {
        initialize() {
            M = c.default.get(P), L = c.default.get(D), ee = c.default.get("login_cache"), null == o.default.getToken() && ei(), this.addChangeListener(() => (0, h.setClientState)(M))
        }
        getEmail() {
            return L
        }
        getLogin() {
            return ee
        }
        didVerifyFail() {
            return q
        }
        getVerifyErrors() {
            return Q
        }
        didVerifySucceed() {
            return X
        }
        getLoginStatus() {
            return G
        }
        getRegisterStatus() {
            return F
        }
        getId() {
            return M
        }
        getSessionId() {
            return b
        }
        getAuthSessionIdHash() {
            return U
        }
        getToken() {
            return (0, v.getToken)()
        }
        isAuthenticated() {
            return (0, v.isAuthenticated)()
        }
        getFingerprint() {
            return w
        }
        getAnalyticsToken() {
            return V
        }
        getErrors() {
            return Z
        }
        getMFATicket() {
            return H
        }
        getMFASMS() {
            return Y
        }
        getMFATotp() {
            return W
        }
        getMFABackup() {
            return K
        }
        getMFAWebAuthn() {
            return j
        }
        getMFAMethods() {
            let e = [];
            return null != j && e.push({
                type: "webauthn",
                challenge: j
            }), W && e.push({
                type: "totp",
                backup_codes_allowed: K
            }), K && e.push({
                type: "backup"
            }), Y && e.push({
                type: "sms"
            }), e
        }
        hasTOTPEnabled() {
            return B.includes(_.AuthenticatorType.TOTP)
        }
        hasSMSEnabled() {
            return B.includes(_.AuthenticatorType.SMS)
        }
        hasWebAuthnEnabled() {
            return B.includes(_.AuthenticatorType.WEBAUTHN)
        }
        getMaskedPhone() {
            return z
        }
        getCredentials() {
            if (null == i) throw Error("no credentials");
            return i
        }
        getVerifyingUserId() {
            return J
        }
        getCurrentRegistrationOptions() {
            return s
        }
        allowLogoutRedirect() {
            return !x
        }
        getWebAuthnChallenge() {
            return j
        }
        getSuspendedUserToken() {
            return et
        }
    }
    ed.displayName = "AuthenticationStore";
    var ec = new ed(f.default, {
        CONNECTION_OPEN: function(e) {
            var t;
            let {
                user: n,
                sessionId: i,
                authSessionIdHash: s,
                analyticsToken: r,
                auth: a
            } = e;
            en("handleConnectionOpen called"), T.default.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, p.default)(n)), b = i, U = s, V = r, M = n.id, L = n.email, void 0 !== a && (B = a.authenticator_types), c.default.set(D, n.email), c.default.set(P, n.id)
        },
        OVERLAY_INITIALIZE: function(e) {
            var t;
            let {
                user: n,
                sessionId: i,
                analyticsToken: s,
                token: r
            } = e;
            T.default.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, p.default)(n)), b = i, V = s, ea(r), er(), M = n.id, c.default.set(P, n.id)
        },
        CONNECTION_CLOSED: function(e) {
            let {
                code: t
            } = e;
            if (en("handleConnectionClosed called with code ".concat(t, ".")), 4004 === t) {
                if (x || N(y.NEW_USER_AGE_GATE_MODAL_KEY) || N(y.EXISTING_USER_AGE_GATE_MODAL_KEY)) {
                    el();
                    return
                }
                S.default.track(A.AnalyticEvents.APP_USER_DEAUTHENTICATED, {
                    user_id: c.default.get(P)
                }), eu(), setImmediate(() => (0, m.transitionTo)(A.Routes.DEFAULT_LOGGED_OUT))
            }
        },
        AUTH_SESSION_CHANGE: function(e) {
            let {
                authSessionIdHash: t
            } = e;
            null != t && (U = t)
        },
        LOGIN: function(e) {
            Z = {}, G = A.LoginStates.LOGGING_IN, z = "", s = null, null != e.login && (ee = e.login)
        },
        LOGIN_SUCCESS: function(e) {
            let {
                token: t
            } = e;
            G = A.LoginStates.NONE, ea(t), er(), H = "", Y = !1, j = null, z = ""
        },
        LOGIN_FAILURE: function(e) {
            let {
                error: t
            } = e;
            H = "", Y = !1, j = null, G = null != (Z = function(e) {
                if (Object.keys(e.fields).length > 0) return e.fields;
                let t = {
                    message: e.message
                };
                return null != e.retryAfter && (t.retry_after = e.retryAfter), t
            }(t)).date_of_birth ? A.LoginStates.LOGIN_AGE_GATE : A.LoginStates.NONE
        },
        LOGIN_MFA_STEP: function(e) {
            let {
                ticket: t,
                sms: n,
                webauthn: i,
                backup: s,
                totp: r
            } = e;
            null != t && (H = t, Y = n, z = "", j = null != i ? i : null, K = s, W = r), Z = {}, G = A.LoginStates.MFA_STEP
        },
        LOGIN_MFA: function() {
            G = A.LoginStates.LOGGING_IN_MFA
        },
        LOGIN_MFA_FAILURE: function(e) {
            let {
                message: t
            } = e;
            G = A.LoginStates.MFA_STEP, Z = {
                code: t
            }
        },
        LOGIN_MFA_SMS: function() {
            G = A.LoginStates.LOGGING_IN_MFA_SMS
        },
        LOGIN_MFA_SMS_REQUEST_SUCCESS: function(e) {
            let {
                phone: t
            } = e;
            G = A.LoginStates.MFA_SMS_STEP, z = t
        },
        LOGIN_MFA_SMS_FAILURE: function(e) {
            let {
                message: t
            } = e;
            G = A.LoginStates.MFA_SMS_STEP, Z = {
                code: t
            }
        },
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function(e) {
            G = A.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION, i = e.credentials
        },
        LOGIN_ACCOUNT_DISABLED: function(e) {
            G = A.LoginStates.ACCOUNT_DISABLED, i = e.credentials
        },
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function() {
            G = A.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION
        },
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function() {
            G = A.LoginStates.PHONE_IP_AUTHORIZATION
        },
        LOGIN_RESET: function(e) {
            let {
                isMultiAccount: t
            } = e;
            Z = {}, G = A.LoginStates.NONE, H = "", Y = !1, j = null, s = null, i = null, !t && (eo(), ei(!1))
        },
        LOGIN_STATUS_RESET: function() {
            G = A.LoginStates.NONE
        },
        LOGIN_SUSPENDED_USER: function(e) {
            let {
                suspendedUserToken: t
            } = e;
            et = t, setImmediate(() => (0, m.transitionTo)(A.Routes.ACCOUNT_STANDING))
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
        LOGOUT: eu,
        FINGERPRINT: function(e) {
            let t = e.fingerprint;
            null == w ? null != t ? (S.default.track(A.AnalyticEvents.USER_FINGERPRINT_CHANGED, {
                old_fingerprint: null != k ? (0, l.extractId)(k) : null,
                new_fingerprint: (0, l.extractId)(t)
            }), w = t, k = t, c.default.set(O, w)) : ei() : null != t && w !== t && S.default.track(A.AnalyticEvents.EXTERNAL_FINGERPRINT_DROPPED, {
                fingerprint: (0, l.extractId)(w),
                dropped_fingerprint: (0, l.extractId)(t)
            })
        },
        REGISTER_SAVE_FORM: function(e) {
            let {
                form: t
            } = e;
            s = t, F = A.RegistrationStates.REGISTER_AGE_GATE
        },
        REGISTER: function(e) {
            let {
                birthday: t
            } = e;
            Z = {}, null != t && (a(null != s, "Got birthday in multistep registration without existing form"), s = {
                ...s,
                birthday: t
            }), F = A.RegistrationStates.REGISTERING
        },
        REGISTER_SUCCESS: function(e) {
            let {
                token: t
            } = e;
            F = A.RegistrationStates.NONE, s = null, ea(t), er()
        },
        REGISTER_FAILURE: function(e) {
            let {
                error: t
            } = e;
            Z = function(e) {
                let t = {};
                if (t.error_code = e.code, null != e.errors) {
                    for (let n of Object.keys(e.errors)) t[n] = [e.getFirstFieldErrorMessage(n)];
                    return t
                }
                return t.message = e.message, null != e.retryAfter && (t.retry_after = e.retryAfter), t
            }(t), F = null != t.getFieldErrors("date_of_birth") ? A.RegistrationStates.REGISTER_AGE_GATE : A.RegistrationStates.REGISTER_WITH_ERROR
        },
        VERIFY_FAILURE: function(e) {
            let {
                errors: t
            } = e;
            q = !0, X = !1, Q = null != t ? t : {}
        },
        VERIFY_SUCCESS: function(e) {
            X = !0, q = !1, Q = {}, J = e.verifyingUserId
        },
        START_SESSION: function() {
            if (0 === Object.keys(Z).length) return !1;
            Z = {}
        },
        FORGOT_PASSWORD_REQUEST: function() {
            G = A.LoginStates.FORGOT_PASSWORD, Z = {}
        },
        FORGOT_PASSWORD_SENT: function() {
            G = A.LoginStates.NONE, Z = {}
        },
        UPDATE_TOKEN: function(e) {
            let {
                token: t,
                userId: n
            } = e;
            en("handleUpdateToken called"), ea(t, n), er()
        },
        EXPERIMENTS_FETCH: es,
        CURRENT_USER_UPDATE: function(e) {
            let {
                user: t
            } = e;
            M = t.id, L = t.email, void 0 !== t.authenticator_types && (B = t.authenticator_types), c.default.set(D, t.email), c.default.set(P, t.id)
        },
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: el,
        CLEAR_AUTHENTICATION_ERRORS: function() {
            Z = {}
        },
        CLOSE_SUSPENDED_USER: function() {
            et = null, G = A.LoginStates.NONE, eu(), setImmediate(() => (0, m.transitionTo)(A.Routes.DEFAULT_LOGGED_OUT))
        }
    }, f.DispatchBand.Early)
}