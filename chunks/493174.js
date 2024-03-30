function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PasswordResetResult: function() {
            return i
        }
    });
    var r, o, i, a = n("383959"),
        u = n("173977"),
        s = n("967888"),
        l = n("242880"),
        c = n("629815"),
        f = n("146591"),
        d = n("451454"),
        _ = n("35523"),
        E = n("895517"),
        p = n("163291"),
        m = n("217014"),
        y = n("644779"),
        I = n("463156"),
        h = n("445278"),
        O = n("281767"),
        T = n("10077");

    function S(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function v(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    S(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    S(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function g(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function A(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }
    var b = new _.default("AuthenticationActionCreators"),
        N = null;

    function R(e) {
        var t = g({
            type: "LOGOUT"
        }, e);
        c.default.dispatch(t).catch(function(e) {
            var t;
            throw b.error("Error while dispatching LOGOUT", e), null === (t = window.DiscordErrors) || void 0 === t || t.softCrash(e), e
        })
    }

    function C() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O.Routes.DEFAULT_LOGGED_OUT;
        R();
        var t = (0, E.getRootNavigationRefIfInExperiment)();
        null != e && (null != t ? (h.default.popAll(), t.navigate("auth")) : (0, p.transitionTo)(e))
    }(r = i || (i = {})).MFA = "MFA", r.SUCCESS = "SUCCESS", t.default = {
        startSession: function(e) {
            c.default.wait(function() {
                c.default.dispatch({
                    type: "START_SESSION",
                    token: e
                })
            })
        },
        setLoginCredentials: function(e, t) {
            c.default.dispatch({
                type: "SET_LOGIN_CREDENTIALS",
                login: e,
                password: t
            })
        },
        login: function(e) {
            var t, n = this,
                r = e.login,
                o = e.password,
                i = e.loginCode,
                u = e.undelete,
                s = e.source,
                l = e.giftCodeSKUId,
                d = e.invite,
                _ = e.isMultiAccount;
            c.default.dispatch({
                type: "LOGIN",
                login: r,
                loginMethod: null != i && "" !== i ? O.LoginMethods.LOGIN_CODE : O.LoginMethods.PASSWORD
            }), this.setLoginCredentials(r, null !== (t = null != o ? o : i) && void 0 !== t ? t : void 0), I.default.post(g({
                url: O.Endpoints.LOGIN,
                body: {
                    login: r,
                    password: o,
                    undelete: u,
                    login_code: i,
                    login_source: s,
                    gift_code_sku_id: l
                },
                retries: 2,
                oldFormErrors: !0,
                trackedActionData: {
                    event: a.NetworkActionNames.USER_LOGIN,
                    properties: {
                        invite_code: null == d ? void 0 : d.code,
                        is_multi_account: _
                    }
                }
            }, _ ? {
                headers: {
                    authorization: ""
                }
            } : {})).then(function(e) {
                var t = e.body,
                    r = t.mfa,
                    o = t.sms,
                    i = t.webauthn,
                    a = t.ticket,
                    u = t.token,
                    s = t.backup,
                    l = t.user_id,
                    f = t.required_actions,
                    d = t.totp;
                c.default.dispatch({
                    type: "LOGIN_ATTEMPTED",
                    user_id: l,
                    required_actions: f
                }), r ? c.default.dispatch({
                    type: "LOGIN_MFA_STEP",
                    ticket: a,
                    sms: o,
                    webauthn: i,
                    totp: d,
                    backup: s
                }) : _ ? n.switchAccountToken(u) : c.default.dispatch({
                    type: "LOGIN_SUCCESS",
                    token: u
                })
            }, function(e) {
                if (null != e.body && (null === (t = e.body) || void 0 === t ? void 0 : t.suspended_user_token) != null) {
                    c.default.dispatch({
                        type: "LOGIN_SUSPENDED_USER",
                        suspendedUserToken: null === (i = e.body) || void 0 === i ? void 0 : i.suspended_user_token
                    });
                    return
                }
                var t, n, i, a = null === (n = e.body) || void 0 === n ? void 0 : n.code;
                a === O.AbortCodes.ACCOUNT_SCHEDULED_FOR_DELETION && null != o && "" !== o ? c.default.dispatch({
                    type: "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION",
                    credentials: {
                        login: r,
                        password: o
                    }
                }) : a === O.AbortCodes.ACCOUNT_DISABLED && null != o && "" !== o ? c.default.dispatch({
                    type: "LOGIN_ACCOUNT_DISABLED",
                    credentials: {
                        login: r,
                        password: o
                    }
                }) : a === O.AbortCodes.PHONE_VERIFICATION_REQUIRED ? c.default.dispatch({
                    type: "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED"
                }) : c.default.dispatch({
                    type: "LOGIN_FAILURE",
                    error: new f.V6OrEarlierAPIError(e)
                })
            })
        },
        loginMFAv2: function(e) {
            var t, n = this,
                r = e.code,
                o = e.ticket,
                i = e.source,
                u = e.giftCodeSKUId,
                s = e.isMultiAccount,
                l = e.mfaType;
            return t = "webauthn" === l ? O.Endpoints.LOGIN_WEBAUTHN : "sms" === l ? O.Endpoints.LOGIN_SMS : O.Endpoints.LOGIN_MFA, I.default.post({
                url: t,
                body: {
                    code: r,
                    ticket: o,
                    login_source: i,
                    gift_code_sku_id: u
                },
                retries: 2,
                oldFormErrors: !0,
                trackedActionData: {
                    event: a.NetworkActionNames.USER_LOGIN_MFA
                }
            }).then(function(e) {
                s ? n.switchAccountToken(e.body.token) : c.default.dispatch({
                    type: "LOGIN_SUCCESS",
                    token: e.body.token
                })
            }).catch(function(e) {
                var t;
                if (null != e.body && null != e.body.suspended_user_token) {
                    c.default.dispatch({
                        type: "LOGIN_SUSPENDED_USER",
                        suspendedUserToken: e.body.suspended_user_token
                    });
                    return
                }
                if ((null === (t = e.body) || void 0 === t ? void 0 : t.code) === O.AbortCodes.MFA_INVALID_CODE) throw Error(e.body.message);
                throw e
            })
        },
        loginToken: function(e) {
            var t = this,
                n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return c.default.dispatch({
                type: "LOGIN"
            }), new Promise(function(r) {
                setImmediate(function() {
                    c.default.dispatch({
                        type: "LOGIN_SUCCESS",
                        token: e
                    }), n && t.startSession(e), r()
                })
            })
        },
        loginReset: function(e) {
            c.default.dispatch({
                type: "LOGIN_RESET",
                isMultiAccount: e
            })
        },
        loginStatusReset: function() {
            c.default.dispatch({
                type: "LOGIN_STATUS_RESET"
            })
        },
        logoutInternal: function(e) {
            R(e)
        },
        logout: function() {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O.Routes.DEFAULT_LOGGED_OUT,
                n = arguments.length > 1 ? arguments[1] : void 0;
            return I.default.post(g({
                url: O.Endpoints.LOGOUT,
                body: {
                    provider: (0, T.getDevicePushProvider)(),
                    token: l.Storage.get(O.DEVICE_TOKEN),
                    voip_provider: T.DEVICE_PUSH_VOIP_PROVIDER,
                    voip_token: l.Storage.get(O.DEVICE_VOIP_TOKEN)
                },
                oldFormErrors: !0,
                trackedActionData: {
                    event: a.NetworkActionNames.USER_LOGOUT
                }
            }, null != n && {
                headers: {
                    authorization: null !== (e = u.getToken(n)) && void 0 !== e ? e : ""
                }
            })).finally(function() {
                (null == n || n === m.default.getId()) && C(t)
            })
        },
        switchAccountToken: function(e) {
            var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = m.default.getToken();
            b.log("Switching accounts", {
                wasLoggedIn: null != n,
                tokenHasChanged: e !== n
            }), R({
                isSwitchingAccount: !0
            });
            var r = this.loginToken(e, !0).then(function() {
                var t = m.default.getToken();
                b.log("Switched accounts finished", {
                    isCorrectToken: e === t
                })
            });
            return t && (0, p.transitionTo)(O.Routes.ME), r
        },
        verifySSOToken: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O.Routes.DEFAULT_LOGGED_OUT;
            return s.HTTP.get({
                url: O.Endpoints.ME,
                oldFormErrors: !0
            }).catch(function() {
                return C(e)
            })
        },
        verify: function(e) {
            null != e ? I.default.post({
                url: O.Endpoints.VERIFY,
                body: {
                    token: e
                },
                oldFormErrors: !0,
                trackedActionData: {
                    event: a.NetworkActionNames.USER_VERIFY
                }
            }).then(function(e) {
                c.default.dispatch({
                    type: "LOGIN_SUCCESS",
                    token: e.body.token
                }), c.default.dispatch({
                    type: "VERIFY_SUCCESS",
                    verifyingUserId: e.body.user_id
                })
            }, function(e) {
                return c.default.dispatch({
                    type: "VERIFY_FAILURE",
                    errors: e.body
                })
            }) : c.default.dispatch({
                type: "VERIFY_FAILURE",
                errors: {}
            })
        },
        authorizePayment: function(e) {
            return v(function() {
                var t;
                return A(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return t.trys.push([0, 2, , 3]), [4, I.default.post({
                                url: O.Endpoints.AUTHORIZE_PAYMENT,
                                body: {
                                    token: e
                                },
                                oldFormErrors: !0,
                                trackedActionData: {
                                    event: a.NetworkActionNames.AUTHORIZE_PAYMENT
                                }
                            })];
                        case 1:
                            return t.sent(), c.default.dispatch({
                                type: "VERIFY_SUCCESS"
                            }), [3, 3];
                        case 2:
                            return t.sent(), c.default.dispatch({
                                type: "VERIFY_FAILURE",
                                errors: {}
                            }), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })()
        },
        authorizeIPAddress: function(e) {
            return v(function() {
                var t;
                return A(this, function(t) {
                    switch (t.label) {
                        case 0:
                            if (null == e) return c.default.dispatch({
                                type: "VERIFY_FAILURE",
                                errors: {}
                            }), [2];
                            t.label = 1;
                        case 1:
                            return t.trys.push([1, 3, , 4]), [4, I.default.post({
                                url: O.Endpoints.AUTHORIZE_IP,
                                body: {
                                    token: e
                                },
                                oldFormErrors: !0,
                                trackedActionData: {
                                    event: a.NetworkActionNames.AUTHORIZE_IP
                                }
                            })];
                        case 2:
                            return t.sent(), c.default.dispatch({
                                type: "VERIFY_SUCCESS"
                            }), [3, 4];
                        case 3:
                            return t.sent(), c.default.dispatch({
                                type: "VERIFY_FAILURE",
                                errors: {}
                            }), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })()
        },
        verifyResend: function() {
            return I.default.post({
                url: O.Endpoints.VERIFY_RESEND,
                oldFormErrors: !0,
                trackedActionData: {
                    event: a.NetworkActionNames.USER_VERIFY_RESEND
                }
            })
        },
        loginWebAuthn: function(e) {
            var t = e.ticket,
                n = e.credential,
                r = e.source,
                o = e.giftCodeSKUId;
            return v(function() {
                return A(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, s.HTTP.post({
                                url: O.Endpoints.WEBAUTHN_CONDITIONAL_UI_LOGIN,
                                body: {
                                    credential: n,
                                    ticket: t,
                                    source: r,
                                    giftCodeSKUId: o
                                }
                            })];
                        case 1:
                            return [2, e.sent().body.token]
                    }
                })
            })()
        },
        resetPassword: function(e, t, n) {
            return v(function() {
                var r, o, i, u, s, d, _, E, p, m, y, h;
                return A(this, function(S) {
                    switch (S.label) {
                        case 0:
                            c.default.dispatch({
                                type: "LOGIN"
                            }), r = {
                                token: e,
                                password: t,
                                source: n
                            }, o = l.Storage.get(O.DEVICE_TOKEN), null != (i = (0, T.getDevicePushProvider)()) && null != o && (r.push_provider = i, r.push_token = o), u = l.Storage.get(O.DEVICE_VOIP_TOKEN), null != T.DEVICE_PUSH_VOIP_PROVIDER && null != u && (r.push_voip_provider = T.DEVICE_PUSH_VOIP_PROVIDER, r.push_voip_token = u), S.label = 1;
                        case 1:
                            return S.trys.push([1, 3, , 4]), [4, I.default.post({
                                url: O.Endpoints.RESET_PASSWORD,
                                body: r,
                                oldFormErrors: !0,
                                trackedActionData: {
                                    event: a.NetworkActionNames.USER_RESET_PASSWORD
                                }
                            })];
                        case 2:
                            return d = (s = S.sent().body).mfa, _ = s.sms, E = s.webauthn, p = s.ticket, m = s.token, y = s.backup, [2, {
                                result: d ? "MFA" : "SUCCESS",
                                sms: _,
                                webauthn: E,
                                ticket: p,
                                token: m,
                                backup: y,
                                totp: s.totp
                            }];
                        case 3:
                            throw h = S.sent(), c.default.dispatch({
                                type: "LOGIN_FAILURE",
                                error: new f.V6OrEarlierAPIError(h)
                            }), h;
                        case 4:
                            return [2]
                    }
                })
            })()
        },
        resetPasswordMFAv2: function(e) {
            var t = e.method,
                n = e.code,
                r = e.ticket,
                o = e.password,
                i = e.token,
                u = e.source;
            return v(function() {
                return A(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return c.default.dispatch({
                                type: "LOGIN_MFA"
                            }), [4, I.default.post({
                                url: O.Endpoints.RESET_PASSWORD,
                                body: {
                                    code: n,
                                    ticket: r,
                                    password: o,
                                    token: i,
                                    source: u,
                                    method: t
                                },
                                oldFormErrors: !0,
                                trackedActionData: {
                                    event: a.NetworkActionNames.USER_RESET_PASSWORD,
                                    properties: {
                                        mfa: !0
                                    }
                                }
                            })];
                        case 1:
                            return [2, e.sent().body.token]
                    }
                })
            })()
        },
        forgotPassword: function(e) {
            return v(function() {
                var t, n;
                return A(this, function(r) {
                    switch (r.label) {
                        case 0:
                            this.setLoginCredentials(e), c.default.dispatch({
                                type: "FORGOT_PASSWORD_REQUEST"
                            }), r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, I.default.post({
                                url: O.Endpoints.FORGOT_PASSWORD,
                                body: {
                                    login: e
                                },
                                oldFormErrors: !0,
                                trackedActionData: {
                                    event: a.NetworkActionNames.FORGOT_PASSWORD
                                }
                            })];
                        case 2:
                            return r.sent(), c.default.dispatch({
                                type: "FORGOT_PASSWORD_SENT"
                            }), [3, 4];
                        case 3:
                            throw t = r.sent(), (n = new f.V6OrEarlierAPIError(t)).code === O.AbortCodes.PHONE_VERIFICATION_REQUIRED ? c.default.dispatch({
                                type: "LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION"
                            }) : c.default.dispatch({
                                type: "LOGIN_FAILURE",
                                error: n
                            }), t;
                        case 4:
                            return [2]
                    }
                })
            }).apply(this)
        },
        setFingerprint: function(e) {
            c.default.dispatch({
                type: "FINGERPRINT",
                fingerprint: e
            })
        },
        getExperiments: function(e) {
            c.default.dispatch({
                type: "EXPERIMENTS_FETCH",
                withGuildExperiments: e
            })
        },
        getLocationMetadata: function() {
            return null != N ? N : (clearTimeout(o), o = setTimeout(function() {
                c.default.dispatch({
                    type: "SET_CONSENT_REQUIRED",
                    consentRequired: !0
                })
            }, 5e3), N = s.HTTP.get({
                url: O.Endpoints.AUTH_LOCATION_METADATA,
                retries: 2,
                oldFormErrors: !0
            }).then(function(e) {
                if (clearTimeout(o), null == y.default.getAuthenticationConsentRequired()) {
                    var t, n, r, i, a, u = null === (a = null == e ? void 0 : null === (i = e.body) || void 0 === i ? void 0 : i.consent_required) || void 0 === a || a;
                    c.default.dispatch({
                        type: "SET_CONSENT_REQUIRED",
                        consentRequired: u
                    })
                }
                if (c.default.dispatch({
                        type: "SET_LOCATION_METADATA",
                        countryCode: null !== (t = null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.country_code) && void 0 !== t ? t : void 0
                    }), N = null, (null == e ? void 0 : null === (r = e.body) || void 0 === r ? void 0 : r.promotional_email_opt_in) != null) {
                    var s = e.body.promotional_email_opt_in;
                    (0, d.setPromoEmailConsentState)({
                        required: s.required,
                        checked: s.pre_checked,
                        preChecked: s.pre_checked
                    })
                }
            }, function() {
                clearTimeout(o), c.default.dispatch({
                    type: "SET_CONSENT_REQUIRED",
                    consentRequired: !0
                }), N = null
            }))
        },
        closeSuspendedUser: function() {
            c.default.dispatch({
                type: "CLOSE_SUSPENDED_USER"
            })
        }
    }
}