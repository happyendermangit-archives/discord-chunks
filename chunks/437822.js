function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        PasswordResetResult: function() {
            return s
        },
        default: function() {
            return N
        }
    }), n("70102"), n("860677"), n("506083");
    var s, r, a = n("759843"),
        o = n("171718"),
        l = n("872717"),
        u = n("95410"),
        d = n("913144"),
        c = n("448993"),
        _ = n("307439"),
        f = n("605250"),
        E = n("21121"),
        h = n("393414"),
        g = n("271938"),
        m = n("350522"),
        p = n("840707"),
        S = n("772017"),
        T = n("49111"),
        v = n("191349");
    let I = new f.default("AuthenticationActionCreators"),
        A = null;

    function C(e) {
        let t = {
            type: "LOGOUT",
            ...e
        };
        d.default.dispatch(t).catch(e => {
            var t;
            throw I.error("Error while dispatching LOGOUT", e), null === (t = window.DiscordErrors) || void 0 === t || t.softCrash(e), e
        })
    }

    function y() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.Routes.DEFAULT_LOGGED_OUT;
        C();
        let t = (0, E.getRootNavigationRefIfInExperiment)();
        null != e && (null != t ? (S.default.popAll(), t.navigate("auth")) : (0, h.transitionTo)(e))
    }(r = s || (s = {})).MFA = "MFA", r.SUCCESS = "SUCCESS";
    var N = {
        startSession(e) {
            d.default.wait(() => {
                d.default.dispatch({
                    type: "START_SESSION",
                    token: e
                })
            })
        },
        setLoginCredentials(e, t) {
            d.default.dispatch({
                type: "SET_LOGIN_CREDENTIALS",
                login: e,
                password: t
            })
        },
        login(e) {
            var t;
            let {
                login: n,
                password: i,
                loginCode: s,
                undelete: r,
                source: o,
                giftCodeSKUId: l,
                invite: u,
                isMultiAccount: _
            } = e;
            d.default.dispatch({
                type: "LOGIN",
                login: n,
                loginMethod: null != s && "" !== s ? T.LoginMethods.LOGIN_CODE : T.LoginMethods.PASSWORD
            }), this.setLoginCredentials(n, null !== (t = null != i ? i : s) && void 0 !== t ? t : void 0), p.default.post({
                url: T.Endpoints.LOGIN,
                body: {
                    login: n,
                    password: i,
                    undelete: r,
                    login_code: s,
                    login_source: o,
                    gift_code_sku_id: l
                },
                retries: 2,
                oldFormErrors: !0,
                trackedActionData: {
                    event: a.NetworkActionNames.USER_LOGIN,
                    properties: {
                        invite_code: null == u ? void 0 : u.code,
                        is_multi_account: _
                    }
                },
                ..._ ? {
                    headers: {
                        authorization: ""
                    }
                } : {}
            }).then(e => {
                let {
                    body: {
                        mfa: t,
                        sms: n,
                        webauthn: i,
                        ticket: s,
                        token: r,
                        backup: a,
                        user_id: o,
                        required_actions: l,
                        totp: u
                    }
                } = e;
                d.default.dispatch({
                    type: "LOGIN_ATTEMPTED",
                    user_id: o,
                    required_actions: l
                }), t ? d.default.dispatch({
                    type: "LOGIN_MFA_STEP",
                    ticket: s,
                    sms: n,
                    webauthn: i,
                    totp: u,
                    backup: a
                }) : _ ? this.switchAccountToken(r) : d.default.dispatch({
                    type: "LOGIN_SUCCESS",
                    token: r
                })
            }, e => {
                var t, s, r;
                if (null != e.body && (null === (t = e.body) || void 0 === t ? void 0 : t.suspended_user_token) != null) {
                    d.default.dispatch({
                        type: "LOGIN_SUSPENDED_USER",
                        suspendedUserToken: null === (r = e.body) || void 0 === r ? void 0 : r.suspended_user_token
                    });
                    return
                }
                let a = null === (s = e.body) || void 0 === s ? void 0 : s.code;
                a === T.AbortCodes.ACCOUNT_SCHEDULED_FOR_DELETION && null != i && "" !== i ? d.default.dispatch({
                    type: "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION",
                    credentials: {
                        login: n,
                        password: i
                    }
                }) : a === T.AbortCodes.ACCOUNT_DISABLED && null != i && "" !== i ? d.default.dispatch({
                    type: "LOGIN_ACCOUNT_DISABLED",
                    credentials: {
                        login: n,
                        password: i
                    }
                }) : a === T.AbortCodes.PHONE_VERIFICATION_REQUIRED ? d.default.dispatch({
                    type: "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED"
                }) : d.default.dispatch({
                    type: "LOGIN_FAILURE",
                    error: new c.V6OrEarlierAPIError(e)
                })
            })
        },
        loginMFAv2(e) {
            let t, {
                code: n,
                ticket: i,
                source: s,
                giftCodeSKUId: r,
                isMultiAccount: o,
                mfaType: l
            } = e;
            return t = "webauthn" === l ? T.Endpoints.LOGIN_WEBAUTHN : "sms" === l ? T.Endpoints.LOGIN_SMS : T.Endpoints.LOGIN_MFA, p.default.post({
                url: t,
                body: {
                    code: n,
                    ticket: i,
                    login_source: s,
                    gift_code_sku_id: r
                },
                retries: 2,
                oldFormErrors: !0,
                trackedActionData: {
                    event: a.NetworkActionNames.USER_LOGIN_MFA
                }
            }).then(e => {
                o ? this.switchAccountToken(e.body.token) : d.default.dispatch({
                    type: "LOGIN_SUCCESS",
                    token: e.body.token
                })
            }).catch(e => {
                var t;
                if (null != e.body && null != e.body.suspended_user_token) {
                    d.default.dispatch({
                        type: "LOGIN_SUSPENDED_USER",
                        suspendedUserToken: e.body.suspended_user_token
                    });
                    return
                }
                if ((null === (t = e.body) || void 0 === t ? void 0 : t.code) === T.AbortCodes.MFA_INVALID_CODE) throw Error(e.body.message);
                throw e
            })
        },
        loginToken(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return d.default.dispatch({
                type: "LOGIN"
            }), new Promise(n => {
                setImmediate(() => {
                    d.default.dispatch({
                        type: "LOGIN_SUCCESS",
                        token: e
                    }), t && this.startSession(e), n()
                })
            })
        },
        loginReset(e) {
            d.default.dispatch({
                type: "LOGIN_RESET",
                isMultiAccount: e
            })
        },
        loginStatusReset() {
            d.default.dispatch({
                type: "LOGIN_STATUS_RESET"
            })
        },
        logoutInternal(e) {
            C(e)
        },
        logout() {
            var e;
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.Routes.DEFAULT_LOGGED_OUT,
                n = arguments.length > 1 ? arguments[1] : void 0;
            return p.default.post({
                url: T.Endpoints.LOGOUT,
                body: {
                    provider: (0, v.getDevicePushProvider)(),
                    token: u.default.get(T.DEVICE_TOKEN),
                    voip_provider: v.DEVICE_PUSH_VOIP_PROVIDER,
                    voip_token: u.default.get(T.DEVICE_VOIP_TOKEN)
                },
                oldFormErrors: !0,
                trackedActionData: {
                    event: a.NetworkActionNames.USER_LOGOUT
                },
                ...null != n && {
                    headers: {
                        authorization: null !== (e = o.getToken(n)) && void 0 !== e ? e : ""
                    }
                }
            }).finally(() => {
                (null == n || n === g.default.getId()) && y(t)
            })
        },
        switchAccountToken(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = g.default.getToken();
            I.log("Switching accounts", {
                wasLoggedIn: null != n,
                tokenHasChanged: e !== n
            }), C({
                isSwitchingAccount: !0
            });
            let i = this.loginToken(e, !0).then(() => {
                let t = g.default.getToken();
                I.log("Switched accounts finished", {
                    isCorrectToken: e === t
                })
            });
            return t && (0, h.transitionTo)(T.Routes.ME), i
        },
        verifySSOToken() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.Routes.DEFAULT_LOGGED_OUT;
            return l.HTTP.get({
                url: T.Endpoints.ME,
                oldFormErrors: !0
            }).catch(() => y(e))
        },
        verify(e) {
            null != e ? p.default.post({
                url: T.Endpoints.VERIFY,
                body: {
                    token: e
                },
                oldFormErrors: !0,
                trackedActionData: {
                    event: a.NetworkActionNames.USER_VERIFY
                }
            }).then(e => {
                d.default.dispatch({
                    type: "LOGIN_SUCCESS",
                    token: e.body.token
                }), d.default.dispatch({
                    type: "VERIFY_SUCCESS",
                    verifyingUserId: e.body.user_id
                })
            }, e => d.default.dispatch({
                type: "VERIFY_FAILURE",
                errors: e.body
            })) : d.default.dispatch({
                type: "VERIFY_FAILURE",
                errors: {}
            })
        },
        async authorizePayment(e) {
            try {
                await p.default.post({
                    url: T.Endpoints.AUTHORIZE_PAYMENT,
                    body: {
                        token: e
                    },
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: a.NetworkActionNames.AUTHORIZE_PAYMENT
                    }
                }), d.default.dispatch({
                    type: "VERIFY_SUCCESS"
                })
            } catch (e) {
                d.default.dispatch({
                    type: "VERIFY_FAILURE",
                    errors: {}
                })
            }
        },
        async authorizeIPAddress(e) {
            if (null == e) {
                d.default.dispatch({
                    type: "VERIFY_FAILURE",
                    errors: {}
                });
                return
            }
            try {
                await p.default.post({
                    url: T.Endpoints.AUTHORIZE_IP,
                    body: {
                        token: e
                    },
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: a.NetworkActionNames.AUTHORIZE_IP
                    }
                }), d.default.dispatch({
                    type: "VERIFY_SUCCESS"
                })
            } catch (e) {
                d.default.dispatch({
                    type: "VERIFY_FAILURE",
                    errors: {}
                })
            }
        },
        verifyResend: () => p.default.post({
            url: T.Endpoints.VERIFY_RESEND,
            oldFormErrors: !0,
            trackedActionData: {
                event: a.NetworkActionNames.USER_VERIFY_RESEND
            }
        }),
        async loginWebAuthn(e) {
            let {
                ticket: t,
                credential: n,
                source: i,
                giftCodeSKUId: s
            } = e, r = await l.HTTP.post({
                url: T.Endpoints.WEBAUTHN_CONDITIONAL_UI_LOGIN,
                body: {
                    credential: n,
                    ticket: t,
                    source: i,
                    giftCodeSKUId: s
                }
            });
            return r.body.token
        },
        async resetPassword(e, t, n) {
            d.default.dispatch({
                type: "LOGIN"
            });
            let i = {
                    token: e,
                    password: t,
                    source: n
                },
                s = u.default.get(T.DEVICE_TOKEN),
                r = (0, v.getDevicePushProvider)();
            null != r && null != s && (i.push_provider = r, i.push_token = s);
            let o = u.default.get(T.DEVICE_VOIP_TOKEN);
            null != v.DEVICE_PUSH_VOIP_PROVIDER && null != o && (i.push_voip_provider = v.DEVICE_PUSH_VOIP_PROVIDER, i.push_voip_token = o);
            try {
                let {
                    body: {
                        mfa: e,
                        sms: t,
                        webauthn: n,
                        ticket: s,
                        token: r,
                        backup: o,
                        totp: l
                    }
                } = await p.default.post({
                    url: T.Endpoints.RESET_PASSWORD,
                    body: i,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: a.NetworkActionNames.USER_RESET_PASSWORD
                    }
                });
                return {
                    result: e ? "MFA" : "SUCCESS",
                    sms: t,
                    webauthn: n,
                    ticket: s,
                    token: r,
                    backup: o,
                    totp: l
                }
            } catch (e) {
                throw d.default.dispatch({
                    type: "LOGIN_FAILURE",
                    error: new c.V6OrEarlierAPIError(e)
                }), e
            }
        },
        async resetPasswordMFAv2(e) {
            let {
                method: t,
                code: n,
                ticket: i,
                password: s,
                token: r,
                source: o
            } = e;
            d.default.dispatch({
                type: "LOGIN_MFA"
            });
            let l = await p.default.post({
                url: T.Endpoints.RESET_PASSWORD,
                body: {
                    code: n,
                    ticket: i,
                    password: s,
                    token: r,
                    source: o,
                    method: t
                },
                oldFormErrors: !0,
                trackedActionData: {
                    event: a.NetworkActionNames.USER_RESET_PASSWORD,
                    properties: {
                        mfa: !0
                    }
                }
            });
            return l.body.token
        },
        async forgotPassword(e) {
            this.setLoginCredentials(e), d.default.dispatch({
                type: "FORGOT_PASSWORD_REQUEST"
            });
            try {
                await p.default.post({
                    url: T.Endpoints.FORGOT_PASSWORD,
                    body: {
                        login: e
                    },
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: a.NetworkActionNames.FORGOT_PASSWORD
                    }
                }), d.default.dispatch({
                    type: "FORGOT_PASSWORD_SENT"
                })
            } catch (n) {
                let e = new c.V6OrEarlierAPIError(n),
                    t = e.code;
                throw t === T.AbortCodes.PHONE_VERIFICATION_REQUIRED ? d.default.dispatch({
                    type: "LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION"
                }) : d.default.dispatch({
                    type: "LOGIN_FAILURE",
                    error: e
                }), n
            }
        },
        setFingerprint(e) {
            d.default.dispatch({
                type: "FINGERPRINT",
                fingerprint: e
            })
        },
        getExperiments(e) {
            d.default.dispatch({
                type: "EXPERIMENTS_FETCH",
                withGuildExperiments: e
            })
        },
        getLocationMetadata: () => null != A ? A : (clearTimeout(i), i = setTimeout(() => {
            d.default.dispatch({
                type: "SET_CONSENT_REQUIRED",
                consentRequired: !0
            })
        }, 5e3), A = l.HTTP.get({
            url: T.Endpoints.AUTH_LOCATION_METADATA,
            retries: 2,
            oldFormErrors: !0
        }).then(e => {
            var t, n, s, r, a;
            if (clearTimeout(i), null == m.default.getAuthenticationConsentRequired()) {
                let t = null === (r = null == e ? void 0 : null === (s = e.body) || void 0 === s ? void 0 : s.consent_required) || void 0 === r || r;
                d.default.dispatch({
                    type: "SET_CONSENT_REQUIRED",
                    consentRequired: t
                })
            }
            if (d.default.dispatch({
                    type: "SET_LOCATION_METADATA",
                    countryCode: null !== (a = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.country_code) && void 0 !== a ? a : void 0
                }), A = null, (null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.promotional_email_opt_in) != null) {
                let t = e.body.promotional_email_opt_in;
                (0, _.setPromoEmailConsentState)({
                    required: t.required,
                    checked: t.pre_checked,
                    preChecked: t.pre_checked
                })
            }
        }, () => {
            clearTimeout(i), d.default.dispatch({
                type: "SET_CONSENT_REQUIRED",
                consentRequired: !0
            }), A = null
        })),
        closeSuspendedUser() {
            d.default.dispatch({
                type: "CLOSE_SUSPENDED_USER"
            })
        }
    }
}