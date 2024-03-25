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
        _ = n("913144"),
        f = n("798609"),
        E = n("91131"),
        h = n("821316"),
        g = n("605250"),
        m = n("393414"),
        p = n("705873"),
        S = n("599110"),
        T = n("831588"),
        v = n("286235"),
        I = n("72177"),
        A = n("455079"),
        C = n("49111"),
        y = n("586391");
    let N = n("551042").hasModalOpen,
        R = new g.default("AuthenticationStore"),
        O = "fingerprint",
        D = "email_cache",
        P = "user_id_cache",
        L = null,
        M = null,
        b = null,
        U = null,
        w = null,
        k = null,
        V = null,
        G = C.LoginStates.NONE,
        F = C.RegistrationStates.NONE,
        x = !1,
        B = [],
        H = "",
        Y = !1,
        K = null,
        j = !1,
        W = !1,
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
        let t = null != o.getToken(),
            n = null != c.Storage.get(C.TOKEN_KEY);
        R.verbose(e, {
            tokenManagerHasToken: t,
            storageHasToken: n
        })
    }

    function ei() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        if (w = c.Storage.get(O), null != $) return $;
        let t = null != w ? w : o.getToken();
        !(!(0, m.isValidFingerprintRoute)() || !e && null != t || I.default.isHandoffAvailable()) && es({
            withGuildExperiments: !0
        })
    }

    function es(e) {
        let {
            withGuildExperiments: t
        } = e, n = {}, i = S.default.getSuperPropertiesBase64();
        null != i && (n["X-Super-Properties"] = i), null != w && (n["X-Fingerprint"] = w), $ = d.HTTP.get({
            url: C.Endpoints.EXPERIMENTS,
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
            t && _.default.dispatch({
                type: "FINGERPRINT",
                fingerprint: t
            }), _.default.dispatch({
                type: "EXPERIMENTS_FETCH_SUCCESS",
                fingerprint: t,
                experiments: n,
                guildExperiments: i
            }), $ = null
        }, () => {
            $ = null, _.default.dispatch({
                type: "EXPERIMENTS_FETCH_FAILURE"
            })
        })
    }

    function er() {
        k = w, w = null, c.Storage.remove(O)
    }

    function ea(e, t) {
        en("setAuthToken called."), o.setToken(e, t)
    }

    function eo() {
        en("removeAuthToken called."), o.removeToken()
    }

    function el() {
        x = !0, eu(), _.default.wait(() => {
            (0, m.transitionTo)(C.Routes.REGISTER)
        })
    }

    function eu(e) {
        en("handleLogout called."), eo(), er(), !(null == e ? void 0 : e.isSwitchingAccount) && ei(), u.default.PersistedStore.clearAll({
            omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore"],
            type: (null == e ? void 0 : e.isSwitchingAccount) ? "user-data-only" : "all"
        }), A.default.clearAll(), h.clear(), v.default.clearUser(), c.Storage.remove(P), L = null, G = (null == e ? void 0 : e.isSwitchingAccount) ? C.LoginStates.LOGGING_IN : C.LoginStates.NONE, F = C.RegistrationStates.NONE, H = "", z = "", K = null, Y = !1, q = !1, X = !1, Q = {}, Z = {}
    }
    class ed extends u.default.Store {
        initialize() {
            L = c.Storage.get(P), M = c.Storage.get(D), ee = c.Storage.get("login_cache"), null == o.getToken() && ei(), this.addChangeListener(() => (0, E.setClientState)(L))
        }
        getEmail() {
            return M
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
            return L
        }
        getSessionId() {
            return b
        }
        getAuthSessionIdHash() {
            return U
        }
        getToken() {
            return (0, T.getToken)()
        }
        isAuthenticated() {
            return (0, T.isAuthenticated)()
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
            return j
        }
        getMFABackup() {
            return W
        }
        getMFAWebAuthn() {
            return K
        }
        getMFAMethods() {
            let e = [];
            return null != K && e.push({
                type: "webauthn",
                challenge: K
            }), j && e.push({
                type: "totp",
                backup_codes_allowed: W
            }), W && e.push({
                type: "backup"
            }), Y && e.push({
                type: "sms"
            }), e
        }
        hasTOTPEnabled() {
            return B.includes(f.AuthenticatorType.TOTP)
        }
        hasSMSEnabled() {
            return B.includes(f.AuthenticatorType.SMS)
        }
        hasWebAuthnEnabled() {
            return B.includes(f.AuthenticatorType.WEBAUTHN)
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
            return K
        }
        getSuspendedUserToken() {
            return et
        }
    }
    ed.displayName = "AuthenticationStore";
    var ec = new ed(_.default, {
        CONNECTION_OPEN: function(e) {
            var t;
            let {
                user: n,
                sessionId: i,
                authSessionIdHash: s,
                analyticsToken: r,
                auth: a
            } = e;
            en("handleConnectionOpen called"), v.default.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, p.default)(n)), b = i, U = s, V = r, L = n.id, M = n.email, void 0 !== a && (B = a.authenticator_types), c.Storage.set(D, n.email), c.Storage.set(P, n.id)
        },
        OVERLAY_INITIALIZE: function(e) {
            var t;
            let {
                user: n,
                sessionId: i,
                analyticsToken: s,
                token: r
            } = e;
            v.default.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, p.default)(n)), b = i, V = s, ea(r), er(), L = n.id, c.Storage.set(P, n.id)
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
                S.default.track(C.AnalyticEvents.APP_USER_DEAUTHENTICATED, {
                    user_id: c.Storage.get(P)
                }), eu(), setImmediate(() => (0, m.transitionTo)(C.Routes.DEFAULT_LOGGED_OUT))
            }
        },
        AUTH_SESSION_CHANGE: function(e) {
            let {
                authSessionIdHash: t
            } = e;
            null != t && (U = t)
        },
        LOGIN: function(e) {
            Z = {}, G = C.LoginStates.LOGGING_IN, z = "", s = null, null != e.login && (ee = e.login)
        },
        LOGIN_SUCCESS: function(e) {
            let {
                token: t
            } = e;
            G = C.LoginStates.NONE, ea(t), er(), H = "", Y = !1, K = null, z = ""
        },
        LOGIN_FAILURE: function(e) {
            let {
                error: t
            } = e;
            H = "", Y = !1, K = null, G = null != (Z = function(e) {
                if (Object.keys(e.fields).length > 0) return e.fields;
                let t = {
                    message: e.message
                };
                return null != e.retryAfter && (t.retry_after = e.retryAfter), t
            }(t)).date_of_birth ? C.LoginStates.LOGIN_AGE_GATE : C.LoginStates.NONE
        },
        LOGIN_MFA_STEP: function(e) {
            let {
                ticket: t,
                sms: n,
                webauthn: i,
                backup: s,
                totp: r
            } = e;
            null != t && (H = t, Y = n, z = "", K = null != i ? i : null, W = s, j = r), Z = {}, G = C.LoginStates.MFA_STEP
        },
        LOGIN_MFA: function() {
            G = C.LoginStates.LOGGING_IN_MFA
        },
        LOGIN_MFA_FAILURE: function(e) {
            let {
                message: t
            } = e;
            G = C.LoginStates.MFA_STEP, Z = {
                code: t
            }
        },
        LOGIN_MFA_SMS: function() {
            G = C.LoginStates.LOGGING_IN_MFA_SMS
        },
        LOGIN_MFA_SMS_REQUEST_SUCCESS: function(e) {
            let {
                phone: t
            } = e;
            G = C.LoginStates.MFA_SMS_STEP, z = t
        },
        LOGIN_MFA_SMS_FAILURE: function(e) {
            let {
                message: t
            } = e;
            G = C.LoginStates.MFA_SMS_STEP, Z = {
                code: t
            }
        },
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function(e) {
            G = C.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION, i = e.credentials
        },
        LOGIN_ACCOUNT_DISABLED: function(e) {
            G = C.LoginStates.ACCOUNT_DISABLED, i = e.credentials
        },
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function() {
            G = C.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION
        },
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function() {
            G = C.LoginStates.PHONE_IP_AUTHORIZATION
        },
        LOGIN_RESET: function(e) {
            let {
                isMultiAccount: t
            } = e;
            Z = {}, G = C.LoginStates.NONE, H = "", Y = !1, K = null, s = null, i = null, !t && (eo(), ei(!1))
        },
        LOGIN_STATUS_RESET: function() {
            G = C.LoginStates.NONE
        },
        LOGIN_SUSPENDED_USER: function(e) {
            let {
                suspendedUserToken: t
            } = e;
            et = t, setImmediate(() => (0, m.transitionTo)(C.Routes.ACCOUNT_STANDING))
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
            null == w ? null != t ? (S.default.track(C.AnalyticEvents.USER_FINGERPRINT_CHANGED, {
                old_fingerprint: null != k ? (0, l.extractId)(k) : null,
                new_fingerprint: (0, l.extractId)(t)
            }), w = t, k = t, c.Storage.set(O, w)) : ei() : null != t && w !== t && S.default.track(C.AnalyticEvents.EXTERNAL_FINGERPRINT_DROPPED, {
                fingerprint: (0, l.extractId)(w),
                dropped_fingerprint: (0, l.extractId)(t)
            })
        },
        REGISTER_SAVE_FORM: function(e) {
            let {
                form: t
            } = e;
            s = t, F = C.RegistrationStates.REGISTER_AGE_GATE
        },
        REGISTER: function(e) {
            let {
                birthday: t
            } = e;
            Z = {}, null != t && (a(null != s, "Got birthday in multistep registration without existing form"), s = {
                ...s,
                birthday: t
            }), F = C.RegistrationStates.REGISTERING
        },
        REGISTER_SUCCESS: function(e) {
            let {
                token: t
            } = e;
            F = C.RegistrationStates.NONE, s = null, ea(t), er()
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
            }(t), F = null != t.getFieldErrors("date_of_birth") ? C.RegistrationStates.REGISTER_AGE_GATE : C.RegistrationStates.REGISTER_WITH_ERROR
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
            G = C.LoginStates.FORGOT_PASSWORD, Z = {}
        },
        FORGOT_PASSWORD_SENT: function() {
            G = C.LoginStates.NONE, Z = {}
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
            L = t.id, M = t.email, void 0 !== t.authenticator_types && (B = t.authenticator_types), c.Storage.set(D, t.email), c.Storage.set(P, t.id)
        },
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: el,
        CLEAR_AUTHENTICATION_ERRORS: function() {
            Z = {}
        },
        CLOSE_SUSPENDED_USER: function() {
            et = null, G = C.LoginStates.NONE, eu(), setImmediate(() => (0, m.transitionTo)(C.Routes.DEFAULT_LOGGED_OUT))
        }
    }, _.DispatchBand.Early)
}