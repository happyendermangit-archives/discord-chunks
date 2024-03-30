function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a = n("512722"),
        u = n.n(a),
        s = n("173977"),
        l = n("732268"),
        c = n("898511"),
        f = n("967888"),
        d = n("242880"),
        _ = n("629815"),
        E = n("29570"),
        p = n("878939"),
        m = n("887840"),
        y = n("35523"),
        I = n("163291"),
        h = n("319448"),
        O = n("870331"),
        T = n("514848"),
        S = n("285910"),
        v = n("740781"),
        g = n("837133"),
        A = n("281767"),
        b = n("806108");

    function N(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function R(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function C(e) {
        return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function P(e, t) {
        return (P = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var D = n("67381").hasModalOpen,
        L = new y.default("AuthenticationStore"),
        M = "fingerprint",
        U = "email_cache",
        w = "user_id_cache",
        k = null,
        G = null,
        B = null,
        j = null,
        F = null,
        V = null,
        H = null,
        x = A.LoginStates.NONE,
        Y = A.RegistrationStates.NONE,
        W = !1,
        K = [],
        z = "",
        X = !1,
        q = null,
        Q = !1,
        J = !1,
        Z = "",
        $ = !1,
        ee = !1,
        et = {},
        en = {},
        er = null,
        eo = null,
        ei = null,
        ea = null;

    function eu(e) {
        var t = null != s.getToken(),
            n = null != d.Storage.get(A.TOKEN_KEY);
        L.verbose(e, {
            tokenManagerHasToken: t,
            storageHasToken: n
        })
    }

    function es() {
        var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        if (F = d.Storage.get(M), null != eo) return eo;
        var t = null != F ? F : s.getToken();
        !(!(0, I.isValidFingerprintRoute)() || !e && null != t || v.default.isHandoffAvailable()) && el({
            withGuildExperiments: !0
        })
    }

    function el(e) {
        var t = e.withGuildExperiments,
            n = {},
            r = O.default.getSuperPropertiesBase64();
        null != r && (n["X-Super-Properties"] = r), null != F && (n["X-Fingerprint"] = F), eo = f.HTTP.get({
            url: A.Endpoints.EXPERIMENTS,
            query: {
                with_guild_experiments: t
            },
            headers: n,
            context: {
                location: (0, I.getFingerprintLocation)()
            },
            retries: 3,
            oldFormErrors: !0
        }).then(function(e) {
            var t = e.body,
                n = t.fingerprint,
                r = t.assignments,
                o = t.guild_experiments;
            n && _.default.dispatch({
                type: "FINGERPRINT",
                fingerprint: n
            }), _.default.dispatch({
                type: "EXPERIMENTS_FETCH_SUCCESS",
                fingerprint: n,
                experiments: r,
                guildExperiments: o
            }), eo = null
        }, function() {
            eo = null, _.default.dispatch({
                type: "EXPERIMENTS_FETCH_FAILURE"
            })
        })
    }

    function ec() {
        V = F, F = null, d.Storage.remove(M)
    }

    function ef(e, t) {
        eu("setAuthToken called."), s.setToken(e, t)
    }

    function ed() {
        eu("removeAuthToken called."), s.removeToken()
    }

    function e_() {
        W = !0, eE(), _.default.wait(function() {
            (0, I.transitionTo)(A.Routes.REGISTER)
        })
    }

    function eE(e) {
        eu("handleLogout called."), ed(), ec(), !(null == e ? void 0 : e.isSwitchingAccount) && es(), c.default.PersistedStore.clearAll({
            omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore"],
            type: (null == e ? void 0 : e.isSwitchingAccount) ? "user-data-only" : "all"
        }), g.default.clearAll(), m.clear(), S.default.clearUser(), d.Storage.remove(w), k = null, x = (null == e ? void 0 : e.isSwitchingAccount) ? A.LoginStates.LOGGING_IN : A.LoginStates.NONE, Y = A.RegistrationStates.NONE, z = "", Z = "", q = null, X = !1, $ = !1, ee = !1, et = {}, en = {}
    }
    var ep = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && P(e, t)
        }(c, e);
        var t, n, i, a, u, l = (t = c, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = C(t);
            if (n) {
                var a = C(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function c() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, c), l.apply(this, arguments)
        }
        return i = c, a = [{
            key: "initialize",
            value: function() {
                k = d.Storage.get(w), G = d.Storage.get(U), ei = d.Storage.get("login_cache"), null == s.getToken() && es(), this.addChangeListener(function() {
                    return (0, p.setClientState)(k)
                })
            }
        }, {
            key: "getEmail",
            value: function() {
                return G
            }
        }, {
            key: "getLogin",
            value: function() {
                return ei
            }
        }, {
            key: "didVerifyFail",
            value: function() {
                return $
            }
        }, {
            key: "getVerifyErrors",
            value: function() {
                return et
            }
        }, {
            key: "didVerifySucceed",
            value: function() {
                return ee
            }
        }, {
            key: "getLoginStatus",
            value: function() {
                return x
            }
        }, {
            key: "getRegisterStatus",
            value: function() {
                return Y
            }
        }, {
            key: "getId",
            value: function() {
                return k
            }
        }, {
            key: "getSessionId",
            value: function() {
                return B
            }
        }, {
            key: "getAuthSessionIdHash",
            value: function() {
                return j
            }
        }, {
            key: "getToken",
            value: function() {
                return (0, T.getToken)()
            }
        }, {
            key: "isAuthenticated",
            value: function() {
                return (0, T.isAuthenticated)()
            }
        }, {
            key: "getFingerprint",
            value: function() {
                return F
            }
        }, {
            key: "getAnalyticsToken",
            value: function() {
                return H
            }
        }, {
            key: "getErrors",
            value: function() {
                return en
            }
        }, {
            key: "getMFATicket",
            value: function() {
                return z
            }
        }, {
            key: "getMFASMS",
            value: function() {
                return X
            }
        }, {
            key: "getMFATotp",
            value: function() {
                return Q
            }
        }, {
            key: "getMFABackup",
            value: function() {
                return J
            }
        }, {
            key: "getMFAWebAuthn",
            value: function() {
                return q
            }
        }, {
            key: "getMFAMethods",
            value: function() {
                var e = [];
                return null != q && e.push({
                    type: "webauthn",
                    challenge: q
                }), Q && e.push({
                    type: "totp",
                    backup_codes_allowed: J
                }), J && e.push({
                    type: "backup"
                }), X && e.push({
                    type: "sms"
                }), e
            }
        }, {
            key: "hasTOTPEnabled",
            value: function() {
                return K.includes(E.AuthenticatorType.TOTP)
            }
        }, {
            key: "hasSMSEnabled",
            value: function() {
                return K.includes(E.AuthenticatorType.SMS)
            }
        }, {
            key: "hasWebAuthnEnabled",
            value: function() {
                return K.includes(E.AuthenticatorType.WEBAUTHN)
            }
        }, {
            key: "getMaskedPhone",
            value: function() {
                return Z
            }
        }, {
            key: "getCredentials",
            value: function() {
                if (null == r) throw Error("no credentials");
                return r
            }
        }, {
            key: "getVerifyingUserId",
            value: function() {
                return er
            }
        }, {
            key: "getCurrentRegistrationOptions",
            value: function() {
                return o
            }
        }, {
            key: "allowLogoutRedirect",
            value: function() {
                return !W
            }
        }, {
            key: "getWebAuthnChallenge",
            value: function() {
                return q
            }
        }, {
            key: "getSuspendedUserToken",
            value: function() {
                return ea
            }
        }], N(i.prototype, a), u && N(i, u), c
    }(c.default.Store);
    R(ep, "displayName", "AuthenticationStore"), t.default = new ep(_.default, {
        CONNECTION_OPEN: function(e) {
            var t, n = e.user,
                r = e.sessionId,
                o = e.authSessionIdHash,
                i = e.analyticsToken,
                a = e.auth;
            eu("handleConnectionOpen called"), S.default.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, h.default)(n)), B = r, j = o, H = i, k = n.id, G = n.email, void 0 !== a && (K = a.authenticator_types), d.Storage.set(U, n.email), d.Storage.set(w, n.id)
        },
        OVERLAY_INITIALIZE: function(e) {
            var t, n = e.user,
                r = e.sessionId,
                o = e.analyticsToken,
                i = e.token;
            S.default.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, h.default)(n)), B = r, H = o, ef(i), ec(), k = n.id, d.Storage.set(w, n.id)
        },
        CONNECTION_CLOSED: function(e) {
            var t = e.code;
            if (eu("handleConnectionClosed called with code ".concat(t, ".")), 4004 === t) {
                if (W || D(b.NEW_USER_AGE_GATE_MODAL_KEY) || D(b.EXISTING_USER_AGE_GATE_MODAL_KEY)) {
                    e_();
                    return
                }
                O.default.track(A.AnalyticEvents.APP_USER_DEAUTHENTICATED, {
                    user_id: d.Storage.get(w)
                }), eE(), setImmediate(function() {
                    return (0, I.transitionTo)(A.Routes.DEFAULT_LOGGED_OUT)
                })
            }
        },
        AUTH_SESSION_CHANGE: function(e) {
            var t = e.authSessionIdHash;
            null != t && (j = t)
        },
        LOGIN: function(e) {
            en = {}, x = A.LoginStates.LOGGING_IN, Z = "", o = null, null != e.login && (ei = e.login)
        },
        LOGIN_SUCCESS: function(e) {
            var t = e.token;
            x = A.LoginStates.NONE, ef(t), ec(), z = "", X = !1, q = null, Z = ""
        },
        LOGIN_FAILURE: function(e) {
            var t = e.error;
            z = "", X = !1, q = null, x = null != (en = function(e) {
                if (Object.keys(e.fields).length > 0) return e.fields;
                var t = {
                    message: e.message
                };
                return null != e.retryAfter && (t.retry_after = e.retryAfter), t
            }(t)).date_of_birth ? A.LoginStates.LOGIN_AGE_GATE : A.LoginStates.NONE
        },
        LOGIN_MFA_STEP: function(e) {
            var t = e.ticket,
                n = e.sms,
                r = e.webauthn,
                o = e.backup,
                i = e.totp;
            null != t && (z = t, X = n, Z = "", q = null != r ? r : null, J = o, Q = i), en = {}, x = A.LoginStates.MFA_STEP
        },
        LOGIN_MFA: function() {
            x = A.LoginStates.LOGGING_IN_MFA
        },
        LOGIN_MFA_FAILURE: function(e) {
            var t = e.message;
            x = A.LoginStates.MFA_STEP, en = {
                code: t
            }
        },
        LOGIN_MFA_SMS: function() {
            x = A.LoginStates.LOGGING_IN_MFA_SMS
        },
        LOGIN_MFA_SMS_REQUEST_SUCCESS: function(e) {
            var t = e.phone;
            x = A.LoginStates.MFA_SMS_STEP, Z = t
        },
        LOGIN_MFA_SMS_FAILURE: function(e) {
            var t = e.message;
            x = A.LoginStates.MFA_SMS_STEP, en = {
                code: t
            }
        },
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function(e) {
            x = A.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION, r = e.credentials
        },
        LOGIN_ACCOUNT_DISABLED: function(e) {
            x = A.LoginStates.ACCOUNT_DISABLED, r = e.credentials
        },
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function() {
            x = A.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION
        },
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function() {
            x = A.LoginStates.PHONE_IP_AUTHORIZATION
        },
        LOGIN_RESET: function(e) {
            var t = e.isMultiAccount;
            en = {}, x = A.LoginStates.NONE, z = "", X = !1, q = null, o = null, r = null, !t && (ed(), es(!1))
        },
        LOGIN_STATUS_RESET: function() {
            x = A.LoginStates.NONE
        },
        LOGIN_SUSPENDED_USER: function(e) {
            ea = e.suspendedUserToken, setImmediate(function() {
                return (0, I.transitionTo)(A.Routes.ACCOUNT_STANDING)
            })
        },
        SET_LOGIN_CREDENTIALS: function(e) {
            r = {
                login: e.login,
                password: e.password
            }
        },
        LOGOUT: eE,
        FINGERPRINT: function(e) {
            var t = e.fingerprint;
            null == F ? null != t ? (O.default.track(A.AnalyticEvents.USER_FINGERPRINT_CHANGED, {
                old_fingerprint: null != V ? (0, l.extractId)(V) : null,
                new_fingerprint: (0, l.extractId)(t)
            }), F = t, V = t, d.Storage.set(M, F)) : es() : null != t && F !== t && O.default.track(A.AnalyticEvents.EXTERNAL_FINGERPRINT_DROPPED, {
                fingerprint: (0, l.extractId)(F),
                dropped_fingerprint: (0, l.extractId)(t)
            })
        },
        REGISTER_SAVE_FORM: function(e) {
            o = e.form, Y = A.RegistrationStates.REGISTER_AGE_GATE
        },
        REGISTER: function(e) {
            var t, n, r = e.birthday;
            if (en = {}, null != r) {
                ;
                u()(null != o, "Got birthday in multistep registration without existing form"), t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            R(e, t, n[t])
                        })
                    }
                    return e
                }({}, o), n = (n = {
                    birthday: r
                }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }), o = t
            }
            Y = A.RegistrationStates.REGISTERING
        },
        REGISTER_SUCCESS: function(e) {
            var t = e.token;
            Y = A.RegistrationStates.NONE, o = null, ef(t), ec()
        },
        REGISTER_FAILURE: function(e) {
            var t = e.error;
            en = function(e) {
                var t = {};
                if (t.error_code = e.code, null != e.errors) {
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = Object.keys(e.errors)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u = i.value;
                            t[u] = [e.getFirstFieldErrorMessage(u)]
                        }
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            !n && null != a.return && a.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return t
                }
                return t.message = e.message, null != e.retryAfter && (t.retry_after = e.retryAfter), t
            }(t), Y = null != t.getFieldErrors("date_of_birth") ? A.RegistrationStates.REGISTER_AGE_GATE : A.RegistrationStates.REGISTER_WITH_ERROR
        },
        VERIFY_FAILURE: function(e) {
            var t = e.errors;
            $ = !0, ee = !1, et = null != t ? t : {}
        },
        VERIFY_SUCCESS: function(e) {
            ee = !0, $ = !1, et = {}, er = e.verifyingUserId
        },
        START_SESSION: function() {
            if (0 === Object.keys(en).length) return !1;
            en = {}
        },
        FORGOT_PASSWORD_REQUEST: function() {
            x = A.LoginStates.FORGOT_PASSWORD, en = {}
        },
        FORGOT_PASSWORD_SENT: function() {
            x = A.LoginStates.NONE, en = {}
        },
        UPDATE_TOKEN: function(e) {
            var t = e.token,
                n = e.userId;
            eu("handleUpdateToken called"), ef(t, n), ec()
        },
        EXPERIMENTS_FETCH: el,
        CURRENT_USER_UPDATE: function(e) {
            var t = e.user;
            k = t.id, G = t.email, void 0 !== t.authenticator_types && (K = t.authenticator_types), d.Storage.set(U, t.email), d.Storage.set(w, t.id)
        },
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: e_,
        CLEAR_AUTHENTICATION_ERRORS: function() {
            en = {}
        },
        CLOSE_SUSPENDED_USER: function() {
            ea = null, x = A.LoginStates.NONE, eE(), setImmediate(function() {
                return (0, I.transitionTo)(A.Routes.DEFAULT_LOGGED_OUT)
            })
        }
    }, _.DispatchBand.Early)
}