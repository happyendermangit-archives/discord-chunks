function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        PasswordResetResult: function() {
            return r
        }
    }), n("411104"), n("177593"), n("773603");
    var r, s, a = n("990547"),
        o = n("213919"),
        l = n("544891"),
        u = n("433517"),
        d = n("570140"),
        _ = n("881052"),
        c = n("882037"),
        E = n("710845"),
        I = n("57132"),
        T = n("703656"),
        f = n("314897"),
        S = n("480294"),
        A = n("573261"),
        h = n("572691"),
        m = n("981631"),
        N = n("792101");
    let O = new E.default("AuthenticationActionCreators"),
        p = null;

    function R(e) {
        let t = {
            type: "LOGOUT",
            ...e
        };
        d.default.dispatch(t).catch(e => {
            var t;
            throw O.error("Error while dispatching LOGOUT", e), null === (t = window.DiscordErrors) || void 0 === t || t.softCrash(e), e
        })
    }

    function C() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.Routes.DEFAULT_LOGGED_OUT;
        R();
        let t = (0, I.getRootNavigationRefIfInExperiment)();
        null != e && (null != t ? (h.default.popAll(), t.navigate("auth")) : (0, T.transitionTo)(e))
    }(s = r || (r = {})).MFA = "MFA", s.SUCCESS = "SUCCESS", t.default = {
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
                loginCode: r,
                undelete: s,
                source: o,
                giftCodeSKUId: l,
                invite: u,
                isMultiAccount: c
            } = e;
            d.default.dispatch({
                type: "LOGIN",
                login: n,
                loginMethod: null != r && "" !== r ? m.LoginMethods.LOGIN_CODE : m.LoginMethods.PASSWORD
            }), this.setLoginCredentials(n, null !== (t = null != i ? i : r) && void 0 !== t ? t : void 0), A.default.post({
                url: m.Endpoints.LOGIN,
                body: {
                    login: n,
                    password: i,
                    undelete: s,
                    login_code: r,
                    login_source: o,
                    gift_code_sku_id: l
                },
                retries: 2,
                oldFormErrors: !0,
                trackedActionData: {
                    event: a.NetworkActionNames.USER_LOGIN,
                    properties: {
                        invite_code: null == u ? void 0 : u.code,
                        is_multi_account: c
                    }
                },
                ...c ? {
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
                        ticket: r,
                        token: s,
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
                    ticket: r,
                    sms: n,
                    webauthn: i,
                    totp: u,
                    backup: a
                }) : c ? this.switchAccountToken(s) : d.default.dispatch({
                    type: "LOGIN_SUCCESS",
                    token: s
                })
            }, e => {
                var t, r, s;
                if (null != e.body && (null === (t = e.body) || void 0 === t ? void 0 : t.suspended_user_token) != null) {
                    d.default.dispatch({
                        type: "LOGIN_SUSPENDED_USER",
                        suspendedUserToken: null === (s = e.body) || void 0 === s ? void 0 : s.suspended_user_token
                    });
                    return
                }
                let a = null === (r = e.body) || void 0 === r ? void 0 : r.code;
                a === m.AbortCodes.ACCOUNT_SCHEDULED_FOR_DELETION && null != i && "" !== i ? d.default.dispatch({
                    type: "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION",
                    credentials: {
                        login: n,
                        password: i
                    }
                }) : a === m.AbortCodes.ACCOUNT_DISABLED && null != i && "" !== i ? d.default.dispatch({
                    type: "LOGIN_ACCOUNT_DISABLED",
                    credentials: {
                        login: n,
                        password: i
                    }
                }) : a === m.AbortCodes.PHONE_VERIFICATION_REQUIRED ? d.default.dispatch({
                    type: "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED"
                }) : d.default.dispatch({
                    type: "LOGIN_FAILURE",
                    error: new _.V6OrEarlierAPIError(e)
                })
            })
        },
        loginMFAv2(e) {
            let {
                code: t,
                ticket: n,
                source: i,
                giftCodeSKUId: r,
                isMultiAccount: s,
                mfaType: o
            } = e;
            return A.default.post({
                url: m.Endpoints.LOGIN_MFA(o),
                body: {
                    code: t,
                    ticket: n,
                    login_source: i,
                    gift_code_sku_id: r
                },
                retries: 2,
                oldFormErrors: !0,
                trackedActionData: {
                    event: a.NetworkActionNames.USER_LOGIN_MFA
                }
            }).then(e => {
                s ? this.switchAccountToken(e.body.token) : d.default.dispatch({
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
                if ((null === (t = e.body) || void 0 === t ? void 0 : t.code) === m.AbortCodes.MFA_INVALID_CODE) throw Error(e.body.message);
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
            R(e)
        },
        logout() {
            var e;
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.Routes.DEFAULT_LOGGED_OUT,
                n = arguments.length > 1 ? arguments[1] : void 0;
            return A.default.post({
                url: m.Endpoints.LOGOUT,
                body: {
                    provider: (0, N.getDevicePushProvider)(),
                    token: u.Storage.get(m.DEVICE_TOKEN),
                    voip_provider: N.DEVICE_PUSH_VOIP_PROVIDER,
                    voip_token: u.Storage.get(m.DEVICE_VOIP_TOKEN)
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
                (null == n || n === f.default.getId()) && C(t)
            })
        },
        switchAccountToken(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = f.default.getToken();
            O.log("Switching accounts", {
                wasLoggedIn: null != n,
                tokenHasChanged: e !== n
            }), R({
                isSwitchingAccount: !0
            });
            let i = this.loginToken(e, !0).then(() => {
                let t = f.default.getToken();
                O.log("Switched accounts finished", {
                    isCorrectToken: e === t
                })
            });
            return t && (0, T.transitionTo)(m.Routes.ME), i
        },
        verifySSOToken() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.Routes.DEFAULT_LOGGED_OUT;
            return l.HTTP.get({
                url: m.Endpoints.ME,
                oldFormErrors: !0
            }).catch(() => C(e))
        },
        verify(e) {
            null != e ? A.default.post({
                url: m.Endpoints.VERIFY,
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
                await A.default.post({
                    url: m.Endpoints.AUTHORIZE_PAYMENT,
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
                await A.default.post({
                    url: m.Endpoints.AUTHORIZE_IP,
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
        verifyResend: () => A.default.post({
            url: m.Endpoints.VERIFY_RESEND,
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
                giftCodeSKUId: r
            } = e;
            return (await l.HTTP.post({
                url: m.Endpoints.WEBAUTHN_CONDITIONAL_UI_LOGIN,
                body: {
                    credential: n,
                    ticket: t,
                    source: i,
                    giftCodeSKUId: r
                }
            })).body.token
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
                r = u.Storage.get(m.DEVICE_TOKEN),
                s = (0, N.getDevicePushProvider)();
            null != s && null != r && (i.push_provider = s, i.push_token = r);
            let o = u.Storage.get(m.DEVICE_VOIP_TOKEN);
            null != N.DEVICE_PUSH_VOIP_PROVIDER && null != o && (i.push_voip_provider = N.DEVICE_PUSH_VOIP_PROVIDER, i.push_voip_token = o);
            try {
                let {
                    body: {
                        mfa: e,
                        sms: t,
                        webauthn: n,
                        ticket: r,
                        token: s,
                        backup: o,
                        totp: l
                    }
                } = await A.default.post({
                    url: m.Endpoints.RESET_PASSWORD,
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
                    ticket: r,
                    token: s,
                    backup: o,
                    totp: l
                }
            } catch (e) {
                throw d.default.dispatch({
                    type: "LOGIN_FAILURE",
                    error: new _.V6OrEarlierAPIError(e)
                }), e
            }
        },
        async resetPasswordMFAv2(e) {
            let {
                method: t,
                code: n,
                ticket: i,
                password: r,
                token: s,
                source: o
            } = e;
            return d.default.dispatch({
                type: "LOGIN_MFA"
            }), (await A.default.post({
                url: m.Endpoints.RESET_PASSWORD,
                body: {
                    code: n,
                    ticket: i,
                    password: r,
                    token: s,
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
            })).body.token
        },
        async forgotPassword(e) {
            this.setLoginCredentials(e), d.default.dispatch({
                type: "FORGOT_PASSWORD_REQUEST"
            });
            try {
                await A.default.post({
                    url: m.Endpoints.FORGOT_PASSWORD,
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
            } catch (t) {
                let e = new _.V6OrEarlierAPIError(t);
                throw e.code === m.AbortCodes.PHONE_VERIFICATION_REQUIRED ? d.default.dispatch({
                    type: "LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION"
                }) : d.default.dispatch({
                    type: "LOGIN_FAILURE",
                    error: e
                }), t
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
        getLocationMetadata: () => null != p ? p : (clearTimeout(i), i = setTimeout(() => {
            d.default.dispatch({
                type: "SET_CONSENT_REQUIRED",
                consentRequired: !0
            })
        }, 5e3), p = l.HTTP.get({
            url: m.Endpoints.AUTH_LOCATION_METADATA,
            retries: 2,
            oldFormErrors: !0
        }).then(e => {
            var t, n, r, s, a;
            if (clearTimeout(i), null == S.default.getAuthenticationConsentRequired()) {
                let t = null === (s = null == e ? void 0 : null === (r = e.body) || void 0 === r ? void 0 : r.consent_required) || void 0 === s || s;
                d.default.dispatch({
                    type: "SET_CONSENT_REQUIRED",
                    consentRequired: t
                })
            }
            if (d.default.dispatch({
                    type: "SET_LOCATION_METADATA",
                    countryCode: null !== (a = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.country_code) && void 0 !== a ? a : void 0
                }), p = null, (null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.promotional_email_opt_in) != null) {
                let t = e.body.promotional_email_opt_in;
                (0, c.setPromoEmailConsentState)({
                    required: t.required,
                    checked: t.pre_checked,
                    preChecked: t.pre_checked
                })
            }
        }, () => {
            clearTimeout(i), d.default.dispatch({
                type: "SET_CONSENT_REQUIRED",
                consentRequired: !0
            }), p = null
        })),
        closeSuspendedUser() {
            d.default.dispatch({
                type: "CLOSE_SUSPENDED_USER"
            })
        }
    }
}