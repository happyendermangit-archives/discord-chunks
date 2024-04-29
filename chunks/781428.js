function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LoginSpinner: function() {
            return Q
        }
    });
    var s, a = n("735250"),
        i = n("470079"),
        r = n("615231"),
        l = n("120356"),
        o = n.n(l),
        u = n("593473"),
        d = n("873546"),
        c = n("442837"),
        f = n("481060"),
        h = n("570140"),
        E = n("893776"),
        g = n("899742"),
        _ = n("579806"),
        m = n("743142"),
        p = n("379760"),
        T = n("100159"),
        A = n("473855"),
        I = n("124860"),
        S = n("86779"),
        N = n("726745"),
        R = n("913583"),
        C = n("144114"),
        O = n("541692"),
        L = n("952802"),
        v = n("108427"),
        M = n("238214"),
        x = n("365007"),
        b = n("314897"),
        y = n("117240"),
        U = n("896797"),
        D = n("285952"),
        P = n("819570"),
        G = n("292937"),
        w = n("626135"),
        j = n("585483"),
        F = n("358085"),
        B = n("481153"),
        k = n("588705"),
        H = n("494526"),
        V = n("163671"),
        W = n("981631"),
        Y = n("58346"),
        K = n("689938"),
        z = n("72137"),
        q = n("611273");

    function Z(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function Q() {
        return (0, a.jsx)(P.default, {
            children: (0, a.jsx)(f.Spinner, {})
        })
    }
    class J extends(s = i.PureComponent) {
        static getDerivedStateFromProps(e) {
            let {
                handoffAvailable: t,
                authenticated: n
            } = e;
            return t || n ? null : {
                checkingHandoff: !1
            }
        }
        componentDidMount() {
            let {
                handoffAvailable: e,
                authenticated: t,
                giftCodeSKU: n,
                invite: s,
                location: a
            } = this.props;
            e && !t ? (0, g.handoffBegin)() : t && this.loginOrSSO(t, a, !0), w.default.track(W.AnalyticEvents.LOGIN_VIEWED, {
                location: null != s ? "Invite Login Page" : "Non-Invite Login Page",
                login_source: this.loginSource,
                authenticated: t,
                ...null != n ? (0, T.default)(n, !1, !1) : {}
            }, {
                flush: !0
            }), null == _.default && this.props.hasPasswordlessExperiment && window.PublicKeyCredential && PublicKeyCredential.isConditionalMediationAvailable && PublicKeyCredential.isConditionalMediationAvailable().then(e => {
                e && (0, x.fetchWebAuthnConditionalChallenge)().then(e => {
                    let {
                        challenge: t,
                        ticket: n
                    } = e, s = JSON.parse(t);
                    s.signal = this.state.conditionalMediationAbortController.signal, (0, r.get)((0, r.parseRequestOptionsFromJSON)(s)).then(e => {
                        E.default.loginWebAuthn({
                            ticket: n,
                            credential: JSON.stringify(e),
                            source: this.loginSource,
                            giftCodeSKUId: this.giftCodeSKUId
                        }).then(e => {
                            h.default.dispatch({
                                type: "LOGIN_SUCCESS",
                                token: e
                            })
                        })
                    })
                })
            }), E.default.getLocationMetadata(), (0, v.trackAppUIViewed)("login")
        }
        componentDidUpdate(e) {
            let {
                authenticated: t,
                location: n
            } = this.props, {
                checkingHandoff: s
            } = this.state;
            if (t && !e.authenticated && !s && (this.state.conditionalMediationAbortController.abort(), this.loginOrSSO(t, n)), e.errors !== this.props.errors) {
                var a, i, r;
                this.hasError("password") ? null === (a = this.passwordRef) || void 0 === a || a.focus() : this.hasError("email") || this.hasError("login") ? null === (i = this.loginRef) || void 0 === i || i.focus() : this.hasError("code") && (null === (r = this.codeRef) || void 0 === r || r.focus())
            }
        }
        get loginSource() {
            let {
                giftCode: e,
                guildTemplate: t,
                invite: n,
                loginSource: s,
                redirectTo: a
            } = this.props;
            if (null != s) return s;
            if (null != e) return "gift";
            if (null != t) return "guild_template";
            else if (null != n) {
                if (null != n.guild) return "guild_invite";
                if (null != n.channel) return "dm_invite";
                else if (null != n.inviter) return "friend_invite"
            }
            return null != a ? (0, m.getLoginHandoffSourceFromRedirectTo)(a) : null
        }
        get giftCodeSKUId() {
            let {
                giftCode: e
            } = this.props;
            return null != e ? e.skuId : null
        }
        get canShowChooseAccount() {
            return this.props.hasLoggedInAccounts
        }
        loginOrSSO(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            e && null != t && (this.setState({
                redirecting: !0
            }), n ? E.default.verifySSOToken().then(() => this.transitionSSO(t)) : this.transitionSSO(t))
        }
        transitionSSO(e) {
            let {
                transitionTo: t,
                redirectTo: n,
                replaceWith: s
            } = this.props, a = null != e ? (0, u.parse)(e.search) : {};
            if (delete a.redirect_to, null != n) null != s ? s(n) : t(n);
            else if (null == a.service) t(W.Routes.APP);
            else {
                let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + W.Endpoints.SSO,
                    t = {
                        ...a,
                        token: b.default.getToken()
                    };
                window.location = "".concat(e, "?").concat((0, u.stringify)(t))
            }
        }
        hasError(e) {
            return null != this.props.errors[e]
        }
        renderHandOffAvailable() {
            let {
                authBoxClassName: e
            } = this.props;
            return (0, a.jsxs)(P.default, {
                className: e,
                children: [(0, a.jsx)(P.AuthSpinner, {}), (0, a.jsx)(P.Title, {
                    className: q.marginBottom8,
                    children: K.default.Messages.BROWSER_HANDOFF_DETECTING_TITLE
                }), (0, a.jsx)(P.SubTitle, {
                    children: K.default.Messages.AUTH_BROWSER_HANDOFF_DETECTING_DESCRIPTION
                })]
            })
        }
        renderHandOffContinue() {
            let {
                user: e,
                transitionTo: t,
                authBoxClassName: n
            } = this.props;
            return null == e ? null : (0, a.jsxs)(P.default, {
                className: n,
                children: [(0, a.jsx)(P.Avatar, {
                    src: e.getAvatarURL(void 0, 100),
                    size: f.AvatarSizes.DEPRECATED_SIZE_100,
                    className: q.marginBottom20
                }), (0, a.jsx)(P.Title, {
                    className: q.marginBottom8,
                    children: K.default.Messages.BROWSER_HANDOFF_SUCCESS_TITLE.format({
                        name: e.toString()
                    })
                }), (0, a.jsx)(P.SubTitle, {
                    className: q.marginBottom40,
                    children: K.default.Messages._BROWSER_HANDOFF_SUCCESS_BODY
                }), (0, a.jsxs)(P.Block, {
                    children: [(0, a.jsx)(P.Button, {
                        onClick: () => t(W.Routes.APP),
                        className: q.marginBottom8,
                        children: K.default.Messages.BROWSER_HANDOFF_SUCCESS_ACTION.format({
                            name: e.toString()
                        })
                    }), (0, a.jsx)(P.Button, {
                        look: P.Button.Looks.LINK,
                        color: P.Button.Colors.LINK,
                        onClick: this.handleReset,
                        children: K.default.Messages.BROWSER_HANDOFF_SUCCESS_CANCEL
                    })]
                })]
            })
        }
        renderDisabledAccount() {
            let {
                authBoxClassName: e
            } = this.props, t = this.props.loginStatus === W.LoginStates.ACCOUNT_DISABLED, n = t ? K.default.Messages.ACCOUNT_DISABLED_TITLE : K.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE, s = t ? K.default.Messages.ACCOUNT_DISABLED_DESCRIPTION : K.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
            return (0, a.jsx)(P.default, {
                tag: "form",
                onSubmit: this.handleReset,
                className: e,
                children: (0, a.jsxs)(f.HeadingLevel, {
                    component: (0, a.jsx)(P.Title, {
                        className: q.marginBottom8,
                        children: n
                    }),
                    children: [(0, a.jsx)(P.SubTitle, {
                        className: q.marginBottom20,
                        children: s
                    }), (0, a.jsxs)(P.Block, {
                        children: [(0, a.jsx)(P.Button, {
                            color: P.Button.Colors.BRAND,
                            type: "submit",
                            children: K.default.Messages._RETURN_TO_LOGIN
                        }), (0, a.jsx)("div", {
                            className: o()(q.marginTop8, z.needAccount),
                            children: K.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format({
                                onClick: this.handleCancelAccountDeletion
                            })
                        })]
                    })]
                })
            })
        }
        renderResolving() {
            let {
                authBoxClassName: e,
                country: t
            } = this.props;
            return (0, a.jsxs)(P.default, {
                className: e,
                children: [(0, a.jsx)(k.InviteResolvingHeader, {}), (0, a.jsxs)(P.Block, {
                    className: q.marginTop20,
                    children: [(0, a.jsx)(L.default, {
                        className: q.marginBottom20,
                        alpha2: t.alpha2,
                        countryCode: t.code.split(" ")[0],
                        label: K.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
                        onChange: (e, t) => this.setState({
                            login: e,
                            loginPrefix: t
                        }),
                        setRef: this.setLoginRef,
                        autoCapitalize: "none",
                        autoComplete: "off",
                        autoCorrect: "off",
                        spellCheck: "false",
                        value: this.state.login,
                        autoFocus: !0,
                        required: !0
                    }), (0, a.jsx)(P.Input, {
                        className: q.marginBottom20,
                        label: K.default.Messages.FORM_LABEL_PASSWORD,
                        onChange: e => this.setState({
                            password: e
                        }),
                        type: "password",
                        setRef: this.setPasswordRef,
                        autoComplete: "off",
                        spellCheck: "false",
                        value: this.state.password,
                        required: !0
                    }), (0, a.jsx)(P.Button, {
                        className: q.marginBottom8,
                        type: "submit",
                        disabled: !0,
                        children: K.default.Messages._LOGIN
                    }), (0, a.jsx)(P.Button, {
                        disabled: !0,
                        look: P.Button.Looks.LINK,
                        color: P.Button.Colors.LINK,
                        children: K.default.Messages.FORGOT_PASSWORD
                    }), (0, a.jsx)(P.Button, {
                        disabled: !0,
                        className: q.marginTop4,
                        look: P.Button.Looks.LINK,
                        color: P.Button.Colors.LINK,
                        children: K.default.Messages.NEED_ACCOUNT
                    })]
                })]
            })
        }
        renderDefaultForm(e) {
            var t;
            let n;
            let {
                invite: s,
                giftCode: i,
                loginStatus: r,
                country: l,
                showMobileWebHandoff: u,
                disableAutofocusOnDefaultForm: d
            } = this.props, c = !this.hasError("email") && this.hasError("password"), h = (null == s ? void 0 : s.stage_instance) != null;
            return n = null == s || h ? null != i ? (0, a.jsx)(B.default, {
                giftCode: i
            }) : (0, a.jsxs)("div", {
                className: z.header,
                children: [(0, a.jsx)(P.Title, {
                    className: q.marginBottom8,
                    children: K.default.Messages.LOGIN_TITLE
                }, "title"), !1 === (0, F.isAndroidWeb)() ? (0, a.jsx)(P.SubTitle, {
                    children: K.default.Messages.AUTH_LOGIN_BODY
                }, "subtitle") : null]
            }) : (0, a.jsx)(k.default, {
                invite: s
            }), (0, a.jsxs)(D.default, {
                direction: D.default.Direction.HORIZONTAL,
                align: D.default.Align.CENTER,
                children: [(0, a.jsxs)("div", {
                    className: z.mainLoginContainer,
                    children: [this.canShowChooseAccount && this.state.dismissedChooseAccount && (0, a.jsx)(P.Button, {
                        onClick: () => {
                            this.setState(e => ({
                                ...e,
                                dismissedChooseAccount: !1
                            }))
                        },
                        look: P.Button.Looks.LINK,
                        color: P.Button.Colors.PRIMARY,
                        className: z.goBackButton,
                        children: (0, a.jsxs)("div", {
                            className: z.content,
                            children: [(0, a.jsx)(G.default, {
                                width: 16,
                                height: 16,
                                className: z.caret
                            }), (0, a.jsx)(f.Text, {
                                variant: "text-md/normal",
                                children: K.default.Messages.AGE_GATE_GO_BACK
                            })]
                        })
                    }), n, (0, a.jsx)(f.HeadingLevel, {
                        children: (0, a.jsxs)(P.Block, {
                            className: q.marginTop20,
                            children: [(0, a.jsx)(L.default, {
                                alpha2: l.alpha2,
                                countryCode: l.code.split(" ")[0],
                                className: q.marginBottom20,
                                label: K.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
                                error: null !== (t = this.renderError("login")) && void 0 !== t ? t : this.renderError("email"),
                                onChange: (e, t) => this.setState({
                                    login: e,
                                    loginPrefix: t
                                }),
                                setRef: this.setLoginRef,
                                autoCapitalize: "none",
                                autoComplete: this.props.hasPasswordlessExperiment ? "webauthn" : "off",
                                autoCorrect: "off",
                                spellCheck: "false",
                                value: this.state.login,
                                autoFocus: !c && !u && !d,
                                required: !0
                            }), (0, a.jsx)(P.Input, {
                                label: K.default.Messages.FORM_LABEL_PASSWORD,
                                error: this.renderError("password"),
                                onChange: e => this.setState({
                                    password: e
                                }),
                                name: "password",
                                type: "password",
                                setRef: this.setPasswordRef,
                                autoComplete: "off",
                                spellCheck: "false",
                                autoFocus: c && !u && !d,
                                value: this.state.password,
                                required: !0
                            }), (0, a.jsx)(P.Button, {
                                onClick: this.handleForgotPassword,
                                look: P.Button.Looks.LINK,
                                color: P.Button.Colors.LINK,
                                className: o()(q.marginBottom20, q.marginTop4),
                                children: K.default.Messages.FORGOT_PASSWORD
                            }), (0, a.jsx)(P.Button, {
                                type: "submit",
                                submitting: r === W.LoginStates.LOGGING_IN,
                                color: h ? P.Button.Colors.GREEN : P.Button.Colors.BRAND,
                                className: q.marginBottom8,
                                children: h ? K.default.Messages._LOGIN_STAGE : K.default.Messages._LOGIN
                            }), (0, a.jsxs)("div", {
                                className: q.marginTop4,
                                children: [(0, a.jsx)("span", {
                                    className: z.needAccount,
                                    children: K.default.Messages.NEED_ACCOUNT
                                }), (0, a.jsx)(P.Button, {
                                    onClick: this.handleGotoRegister,
                                    look: P.Button.Looks.LINK,
                                    color: P.Button.Colors.LINK,
                                    className: z.smallRegisterLink,
                                    children: K.default.Messages.REGISTER
                                })]
                            })]
                        })
                    })]
                }), (0, a.jsx)(f.HeadingLevel, {
                    children: e ? (0, a.jsx)(H.default, {
                        authTokenCallback: this.handleAuthToken,
                        hasPasswordlessExperiment: this.props.hasPasswordlessExperiment,
                        conditionalMediationAbortController: this.state.conditionalMediationAbortController
                    }) : null
                })]
            }, "form-wrapper")
        }
        renderDefault() {
            let {
                authBoxClassName: e,
                showMobileWebHandoff: t
            } = this.props;
            return (0, a.jsxs)("div", {
                className: z.__invalid_pageContainer,
                children: [(0, a.jsx)(P.default, {
                    onSubmit: this.handleLogin,
                    tag: "form",
                    className: e,
                    expanded: !0,
                    children: this.renderDefaultForm(!0)
                }), t && (0, a.jsx)(S.default, {})]
            })
        }
        renderGuildTemplate(e) {
            return (0, a.jsx)(V.default, {
                onSubmit: this.handleLogin,
                tag: "form",
                className: o()(this.props.authBoxClassName, z.horizontalAuthBox),
                children: () => [(0, a.jsx)(A.default, {
                    guildTemplate: e
                }, "template"), this.renderDefaultForm(!1)]
            })
        }
        renderMFA() {
            let e = {
                ticket: this.props.mfaTicket,
                methods: this.props.mfaMethods
            };
            return (0, a.jsx)(P.default, {
                style: {
                    padding: 0
                },
                children: (0, a.jsx)(I.MFASlides, {
                    mfaFinish: this.handleTokenSubmitMFA,
                    request: e,
                    onEarlyClose: () => {
                        h.default.dispatch({
                            type: "LOGIN_RESET"
                        })
                    },
                    width: 480
                })
            })
        }
        renderIPAuthorization() {
            let {
                authBoxClassName: e
            } = this.props, {
                phoneVerifyError: t
            } = this.state;
            return (0, a.jsx)(P.default, {
                tag: "form",
                className: e,
                children: (0, a.jsx)(p.default, {
                    title: K.default.Messages.PHONE_IP_AUTHORIZATION_TITLE,
                    subtitle: K.default.Messages.PHONE_IP_AUTHORIZATION_SUBTITLE_RESEND.format({
                        onResendClick: this.handleResendCode
                    }),
                    error: t,
                    onSubmit: this.handleIPAuthorize,
                    onCancel: E.default.loginReset
                })
            })
        }
        renderPasswordRecovery() {
            let {
                authBoxClassName: e
            } = this.props, {
                phoneVerifyError: t
            } = this.state;
            return (0, a.jsx)(P.default, {
                tag: "form",
                className: e,
                children: (0, a.jsx)(p.default, {
                    title: K.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
                    subtitle: K.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format({
                        onResendClick: this.handleResendCode
                    }),
                    error: t,
                    onSubmit: this.handlePasswordReset,
                    onCancel: E.default.loginReset
                })
            })
        }
        renderChooseAccount() {
            return (0, a.jsx)(R.default, {
                onDismiss: () => {
                    this.setState(e => ({
                        ...e,
                        dismissedChooseAccount: !0
                    }))
                }
            })
        }
        render() {
            let {
                authenticated: e,
                invite: t,
                guildTemplate: n,
                loginStatus: s,
                handoffAvailable: i
            } = this.props, {
                checkingHandoff: r,
                redirecting: l
            } = this.state;
            if (l || r) return (0, a.jsx)(Q, {});
            if (i) return this.renderHandOffAvailable();
            if (e && r) return this.renderHandOffContinue();
            switch (s) {
                case W.LoginStates.LOGGING_IN_MFA_SMS:
                case W.LoginStates.MFA_SMS_STEP:
                case W.LoginStates.LOGGING_IN_MFA:
                case W.LoginStates.MFA_STEP:
                    return this.renderMFA();
                case W.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION:
                case W.LoginStates.ACCOUNT_DISABLED:
                    return this.renderDisabledAccount();
                case W.LoginStates.PHONE_IP_AUTHORIZATION:
                    return this.renderIPAuthorization();
                case W.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                    return this.renderPasswordRecovery();
                case W.LoginStates.LOGGING_IN:
                case W.LoginStates.NONE:
                default:
                    if (null != t && t.state === W.InviteStates.RESOLVING) return this.renderResolving();
                    if (null != n) {
                        if (n.state === Y.GuildTemplateStates.RESOLVING) return this.renderResolving();
                        return this.renderGuildTemplate(n)
                    }
                    if (this.canShowChooseAccount && !this.state.dismissedChooseAccount) return this.renderChooseAccount();
                    return this.renderDefault()
            }
        }
        constructor(e) {
            var t, n;
            super(e), Z(this, "loginRef", void 0), Z(this, "passwordRef", void 0), Z(this, "codeRef", void 0), Z(this, "handleAuthToken", async e => {
                await E.default.loginToken(e, !1), w.default.track(W.AnalyticEvents.LOGIN_SUCCESSFUL, {
                    source: W.LoginSuccessfulSources.QR_CODE,
                    login_source: this.loginSource,
                    gift_code_sku_id: this.giftCodeSKUId,
                    is_new_user: !1
                })
            }), Z(this, "setLoginRef", e => {
                this.loginRef = e
            }), Z(this, "setPasswordRef", e => {
                this.passwordRef = e
            }), Z(this, "setCodeRef", e => {
                this.codeRef = e
            }), Z(this, "getFullLogin", () => {
                let {
                    loginPrefix: e,
                    login: t
                } = this.state;
                return e + t
            }), Z(this, "renderError", e => {
                let {
                    errors: t
                } = this.props;
                if (this.hasError(e)) {
                    let n = t[e];
                    return Array.isArray(n) ? n[0] : n
                }
                return null
            }), Z(this, "handleLogin", e => {
                let {
                    password: t,
                    undelete: n
                } = this.state;
                null != e && e.preventDefault(), E.default.login({
                    login: this.getFullLogin(),
                    password: t,
                    undelete: n,
                    source: this.loginSource,
                    giftCodeSKUId: this.giftCodeSKUId,
                    invite: this.props.invite
                }), j.ComponentDispatch.dispatch(W.ComponentActions.WAVE_EMPHASIZE)
            }), Z(this, "handleIPAuthorize", async e => {
                let {
                    password: t,
                    undelete: n
                } = this.state, s = this.getFullLogin();
                try {
                    let {
                        token: a
                    } = await C.default.verifyPhone(s, e, !1);
                    await E.default.authorizeIPAddress(a), E.default.login({
                        login: s,
                        password: t,
                        undelete: n,
                        source: this.loginSource,
                        giftCodeSKUId: this.giftCodeSKUId
                    }), j.ComponentDispatch.dispatch(W.ComponentActions.WAVE_EMPHASIZE)
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({
                        phoneVerifyError: e.body.message
                    })
                }
            }), Z(this, "handlePasswordReset", async e => {
                let {
                    transitionTo: t
                } = this.props;
                this.setState({
                    phoneVerifyError: null
                });
                try {
                    let {
                        token: n
                    } = await C.default.verifyPhone(this.getFullLogin(), e, !1);
                    t(W.Routes.RESET, {
                        search: (0, u.stringify)({
                            token: n,
                            from_login: "true"
                        })
                    })
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({
                        phoneVerifyError: e.body.message
                    })
                }
            }), Z(this, "handleTokenSubmitMFA", e => {
                let {
                    mfaType: t,
                    data: n,
                    ticket: s
                } = e;
                return j.ComponentDispatch.dispatch(W.ComponentActions.WAVE_EMPHASIZE), E.default.loginMFAv2({
                    code: n,
                    ticket: s,
                    mfaType: t,
                    source: this.loginSource,
                    giftCodeSKUId: this.giftCodeSKUId
                })
            }), Z(this, "handleForgotPassword", async e => {
                null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
                let t = this.getFullLogin();
                try {
                    j.ComponentDispatch.dispatch(W.ComponentActions.WAVE_EMPHASIZE), await E.default.forgotPassword(t), (0, f.openModal)(e => (0, a.jsx)(f.ConfirmModal, {
                        header: K.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
                        confirmText: K.default.Messages.OKAY,
                        confirmButtonColor: P.Button.Colors.BRAND,
                        className: d.isMobile ? z.mobile : "",
                        ...e,
                        children: (0, a.jsx)(f.Text, {
                            variant: "text-md/normal",
                            children: K.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format({
                                email: t
                            })
                        })
                    }))
                } catch {}
            }), Z(this, "handleResendCode", () => {
                C.default.resendCode(this.getFullLogin())
            }), Z(this, "handleReset", e => {
                null != e && e.preventDefault(), E.default.loginReset(), this.setState({
                    password: "",
                    loginPrefix: "",
                    login: "",
                    code: "",
                    smsCode: "",
                    undelete: !1,
                    checkingHandoff: !1,
                    redirecting: !1
                })
            }), Z(this, "handleCancelAccountDeletion", () => {
                this.setState({
                    undelete: !0
                }, this.handleLogin)
            }), Z(this, "handleGotoRegister", () => {
                let e;
                let {
                    login: t
                } = this.state, {
                    invite: n,
                    giftCode: s,
                    guildTemplate: a,
                    location: i,
                    transitionTo: r,
                    redirectTo: l
                } = this.props, o = null != i ? (0, u.parse)(i.search) : {};
                "" !== t && (o.email = t), null != n ? (o.mode = "register", e = W.Routes.INVITE(n.code)) : null != s ? (o.mode = "register", e = W.Routes.GIFT_CODE(s.code)) : null != a ? e = W.Routes.GUILD_TEMPLATE(a.code) : null != l ? (e = W.Routes.REGISTER, o.redirect_to = l) : e = W.Routes.REGISTER, E.default.loginReset(), r(e, {
                    search: (0, u.stringify)(o)
                }), j.ComponentDispatch.dispatch(W.ComponentActions.WAVE_EMPHASIZE)
            });
            let s = null != e.location ? (0, u.parse)(e.location.search) : {};
            this.state = {
                redirecting: e.authenticated,
                checkingHandoff: e.handoffAvailable,
                loginPrefix: "",
                login: null !== (n = null !== (t = s.email) && void 0 !== t ? t : s.login) && void 0 !== n ? n : "",
                password: "",
                code: "",
                smsCode: "",
                undelete: !1,
                phoneVerifyError: null,
                dismissedChooseAccount: !1,
                conditionalMediationAbortController: new AbortController
            }
        }
    }
    Z(J, "defaultProps", {
        transitionTo: e => n.g.location.assign(e)
    });
    t.default = function(e) {
        let t = (0, c.useStateFromStoresObject)([y.default, U.default, b.default, N.default, O.default], () => ({
                authenticated: b.default.isAuthenticated(),
                handoffAvailable: y.default.isHandoffAvailable(),
                user: y.default.user,
                loginStatus: b.default.getLoginStatus(),
                mfaTicket: b.default.getMFATicket(),
                mfaSMS: b.default.getMFASMS(),
                mfaMethods: b.default.getMFAMethods(),
                maskedPhone: b.default.getMaskedPhone(),
                errors: b.default.getErrors(),
                defaultRoute: U.default.defaultRoute,
                country: O.default.getCountryCode(),
                hasLoggedInAccounts: N.default.getHasLoggedInAccounts()
            })),
            n = M.default.useExperiment({
                location: "login"
            }).enabled;
        return (0, a.jsx)(J, {
            ...e,
            ...t,
            hasPasswordlessExperiment: n
        })
    }
}