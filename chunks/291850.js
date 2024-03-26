function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LoginSpinner: function() {
            return q
        },
        default: function() {
            return Q
        }
    });
    var s = n("37983"),
        a = n("884691"),
        r = n("837291"),
        l = n("414456"),
        i = n.n(l),
        o = n("730290"),
        u = n("394846"),
        d = n("446674"),
        c = n("77078"),
        E = n("913144"),
        f = n("437822"),
        _ = n("697796"),
        h = n("49671"),
        g = n("524824"),
        m = n("21572"),
        T = n("791160"),
        p = n("434824"),
        I = n("24287"),
        A = n("382236"),
        S = n("770032"),
        R = n("724554"),
        N = n("878720"),
        C = n("25033"),
        O = n("589252"),
        L = n("970366"),
        M = n("113665"),
        v = n("425922"),
        D = n("271938"),
        x = n("72177"),
        U = n("476108"),
        y = n("145131"),
        b = n("124969"),
        P = n("980428"),
        G = n("599110"),
        F = n("659500"),
        B = n("773336"),
        j = n("404432"),
        w = n("719451"),
        k = n("331085"),
        H = n("598489"),
        V = n("49111"),
        Y = n("579033"),
        W = n("782340"),
        K = n("699177"),
        z = n("890957");

    function q() {
        return (0, s.jsx)(b.default, {
            children: (0, s.jsx)(c.Spinner, {})
        })
    }
    class Z extends a.PureComponent {
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
            e && !t ? (0, _.handoffBegin)() : t && this.loginOrSSO(t, a, !0), G.default.track(V.AnalyticEvents.LOGIN_VIEWED, {
                location: null != s ? "Invite Login Page" : "Non-Invite Login Page",
                login_source: this.loginSource,
                authenticated: t,
                ...null != n ? (0, T.default)(n, !1, !1) : {}
            }, {
                flush: !0
            }), null == h.default && this.props.hasPasswordlessExperiment && window.PublicKeyCredential && PublicKeyCredential.isConditionalMediationAvailable && PublicKeyCredential.isConditionalMediationAvailable().then(e => {
                e && (0, v.fetchWebAuthnConditionalChallenge)().then(e => {
                    let {
                        challenge: t,
                        ticket: n
                    } = e, s = JSON.parse(t);
                    s.signal = this.state.conditionalMediationAbortController.signal, (0, r.get)((0, r.parseRequestOptionsFromJSON)(s)).then(e => {
                        f.default.loginWebAuthn({
                            ticket: n,
                            credential: JSON.stringify(e),
                            source: this.loginSource,
                            giftCodeSKUId: this.giftCodeSKUId
                        }).then(e => {
                            E.default.dispatch({
                                type: "LOGIN_SUCCESS",
                                token: e
                            })
                        })
                    })
                })
            }), f.default.getLocationMetadata(), (0, L.trackAppUIViewed)("login")
        }
        componentDidUpdate(e) {
            let {
                authenticated: t,
                location: n
            } = this.props, {
                checkingHandoff: s
            } = this.state;
            if (t && !e.authenticated && !s && (this.state.conditionalMediationAbortController.abort(), this.loginOrSSO(t, n)), e.errors !== this.props.errors) {
                var a, r, l;
                this.hasError("password") ? null === (a = this.passwordRef) || void 0 === a || a.focus() : this.hasError("email") || this.hasError("login") ? null === (r = this.loginRef) || void 0 === r || r.focus() : this.hasError("code") && (null === (l = this.codeRef) || void 0 === l || l.focus())
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
            return null != a ? (0, g.getLoginHandoffSourceFromRedirectTo)(a) : null
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
            }), n ? f.default.verifySSOToken().then(() => this.transitionSSO(t)) : this.transitionSSO(t))
        }
        transitionSSO(e) {
            let {
                transitionTo: t,
                redirectTo: n,
                replaceWith: s
            } = this.props, a = null != e ? (0, o.parse)(e.search) : {};
            if (delete a.redirect_to, null != n) null != s ? s(n) : t(n);
            else if (null == a.service) t(V.Routes.APP);
            else {
                let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + V.Endpoints.SSO,
                    t = {
                        ...a,
                        token: D.default.getToken()
                    };
                window.location = "".concat(e, "?").concat((0, o.stringify)(t))
            }
        }
        hasError(e) {
            return null != this.props.errors[e]
        }
        renderHandOffAvailable() {
            let {
                authBoxClassName: e
            } = this.props;
            return (0, s.jsxs)(b.default, {
                className: e,
                children: [(0, s.jsx)(b.AuthSpinner, {}), (0, s.jsx)(b.Title, {
                    className: z.marginBottom8,
                    children: W.default.Messages.BROWSER_HANDOFF_DETECTING_TITLE
                }), (0, s.jsx)(b.SubTitle, {
                    children: W.default.Messages.AUTH_BROWSER_HANDOFF_DETECTING_DESCRIPTION
                })]
            })
        }
        renderHandOffContinue() {
            let {
                user: e,
                transitionTo: t,
                authBoxClassName: n
            } = this.props;
            return null == e ? null : (0, s.jsxs)(b.default, {
                className: n,
                children: [(0, s.jsx)(b.Avatar, {
                    src: e.getAvatarURL(void 0, 100),
                    size: c.AvatarSizes.DEPRECATED_SIZE_100,
                    className: z.marginBottom20
                }), (0, s.jsx)(b.Title, {
                    className: z.marginBottom8,
                    children: W.default.Messages.BROWSER_HANDOFF_SUCCESS_TITLE.format({
                        name: e.toString()
                    })
                }), (0, s.jsx)(b.SubTitle, {
                    className: z.marginBottom40,
                    children: W.default.Messages._BROWSER_HANDOFF_SUCCESS_BODY
                }), (0, s.jsxs)(b.Block, {
                    children: [(0, s.jsx)(b.Button, {
                        onClick: () => t(V.Routes.APP),
                        className: z.marginBottom8,
                        children: W.default.Messages.BROWSER_HANDOFF_SUCCESS_ACTION.format({
                            name: e.toString()
                        })
                    }), (0, s.jsx)(b.Button, {
                        look: b.Button.Looks.LINK,
                        color: b.Button.Colors.LINK,
                        onClick: this.handleReset,
                        children: W.default.Messages.BROWSER_HANDOFF_SUCCESS_CANCEL
                    })]
                })]
            })
        }
        renderDisabledAccount() {
            let {
                authBoxClassName: e
            } = this.props, t = this.props.loginStatus === V.LoginStates.ACCOUNT_DISABLED, n = t ? W.default.Messages.ACCOUNT_DISABLED_TITLE : W.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE, a = t ? W.default.Messages.ACCOUNT_DISABLED_DESCRIPTION : W.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
            return (0, s.jsx)(b.default, {
                tag: "form",
                onSubmit: this.handleReset,
                className: e,
                children: (0, s.jsxs)(c.HeadingLevel, {
                    component: (0, s.jsx)(b.Title, {
                        className: z.marginBottom8,
                        children: n
                    }),
                    children: [(0, s.jsx)(b.SubTitle, {
                        className: z.marginBottom20,
                        children: a
                    }), (0, s.jsxs)(b.Block, {
                        children: [(0, s.jsx)(b.Button, {
                            color: b.Button.Colors.BRAND,
                            type: "submit",
                            children: W.default.Messages._RETURN_TO_LOGIN
                        }), (0, s.jsx)("div", {
                            className: i(z.marginTop8, K.needAccount),
                            children: W.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format({
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
            return (0, s.jsxs)(b.default, {
                className: e,
                children: [(0, s.jsx)(w.InviteResolvingHeader, {}), (0, s.jsxs)(b.Block, {
                    className: z.marginTop20,
                    children: [(0, s.jsx)(O.default, {
                        className: z.marginBottom20,
                        alpha2: t.alpha2,
                        countryCode: t.code.split(" ")[0],
                        label: W.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
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
                    }), (0, s.jsx)(b.Input, {
                        className: z.marginBottom20,
                        label: W.default.Messages.FORM_LABEL_PASSWORD,
                        onChange: e => this.setState({
                            password: e
                        }),
                        type: "password",
                        setRef: this.setPasswordRef,
                        autoComplete: "off",
                        spellCheck: "false",
                        value: this.state.password,
                        required: !0
                    }), (0, s.jsx)(b.Button, {
                        className: z.marginBottom8,
                        type: "submit",
                        disabled: !0,
                        children: W.default.Messages._LOGIN
                    }), (0, s.jsx)(b.Button, {
                        disabled: !0,
                        look: b.Button.Looks.LINK,
                        color: b.Button.Colors.LINK,
                        children: W.default.Messages.FORGOT_PASSWORD
                    }), (0, s.jsx)(b.Button, {
                        disabled: !0,
                        className: z.marginTop4,
                        look: b.Button.Looks.LINK,
                        color: b.Button.Colors.LINK,
                        children: W.default.Messages.NEED_ACCOUNT
                    })]
                })]
            })
        }
        renderDefaultForm(e) {
            var t;
            let n;
            let {
                invite: a,
                giftCode: r,
                loginStatus: l,
                country: o,
                showMobileWebHandoff: u,
                disableAutofocusOnDefaultForm: d
            } = this.props, E = !this.hasError("email") && this.hasError("password"), f = (null == a ? void 0 : a.stage_instance) != null;
            return n = null == a || f ? null != r ? (0, s.jsx)(j.default, {
                giftCode: r
            }) : (0, s.jsxs)("div", {
                className: K.header,
                children: [(0, s.jsx)(b.Title, {
                    className: z.marginBottom8,
                    children: W.default.Messages.LOGIN_TITLE
                }, "title"), !1 === (0, B.isAndroidWeb)() ? (0, s.jsx)(b.SubTitle, {
                    children: W.default.Messages.AUTH_LOGIN_BODY
                }, "subtitle") : null]
            }) : (0, s.jsx)(w.default, {
                invite: a
            }), (0, s.jsxs)(y.default, {
                direction: y.default.Direction.HORIZONTAL,
                align: y.default.Align.CENTER,
                children: [(0, s.jsxs)("div", {
                    className: K.mainLoginContainer,
                    children: [this.canShowChooseAccount && this.state.dismissedChooseAccount && (0, s.jsx)(b.Button, {
                        onClick: () => {
                            this.setState(e => ({
                                ...e,
                                dismissedChooseAccount: !1
                            }))
                        },
                        look: b.Button.Looks.LINK,
                        color: b.Button.Colors.PRIMARY,
                        className: K.goBackButton,
                        children: (0, s.jsxs)("div", {
                            className: K.content,
                            children: [(0, s.jsx)(P.default, {
                                width: 16,
                                height: 16,
                                className: K.caret
                            }), (0, s.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: W.default.Messages.AGE_GATE_GO_BACK
                            })]
                        })
                    }), n, (0, s.jsx)(c.HeadingLevel, {
                        children: (0, s.jsxs)(b.Block, {
                            className: z.marginTop20,
                            children: [(0, s.jsx)(O.default, {
                                alpha2: o.alpha2,
                                countryCode: o.code.split(" ")[0],
                                className: z.marginBottom20,
                                label: W.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
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
                                autoFocus: !E && !u && !d,
                                required: !0
                            }), (0, s.jsx)(b.Input, {
                                label: W.default.Messages.FORM_LABEL_PASSWORD,
                                error: this.renderError("password"),
                                onChange: e => this.setState({
                                    password: e
                                }),
                                name: "password",
                                type: "password",
                                setRef: this.setPasswordRef,
                                autoComplete: "off",
                                spellCheck: "false",
                                autoFocus: E && !u && !d,
                                value: this.state.password,
                                required: !0
                            }), (0, s.jsx)(b.Button, {
                                onClick: this.handleForgotPassword,
                                look: b.Button.Looks.LINK,
                                color: b.Button.Colors.LINK,
                                className: i(z.marginBottom20, z.marginTop4),
                                children: W.default.Messages.FORGOT_PASSWORD
                            }), (0, s.jsx)(b.Button, {
                                type: "submit",
                                submitting: l === V.LoginStates.LOGGING_IN,
                                color: f ? b.Button.Colors.GREEN : b.Button.Colors.BRAND,
                                className: z.marginBottom8,
                                children: f ? W.default.Messages._LOGIN_STAGE : W.default.Messages._LOGIN
                            }), (0, s.jsxs)("div", {
                                className: z.marginTop4,
                                children: [(0, s.jsx)("span", {
                                    className: K.needAccount,
                                    children: W.default.Messages.NEED_ACCOUNT
                                }), (0, s.jsx)(b.Button, {
                                    onClick: this.handleGotoRegister,
                                    look: b.Button.Looks.LINK,
                                    color: b.Button.Colors.LINK,
                                    className: K.smallRegisterLink,
                                    children: W.default.Messages.REGISTER
                                })]
                            })]
                        })
                    })]
                }), (0, s.jsx)(c.HeadingLevel, {
                    children: e ? (0, s.jsx)(k.default, {
                        authTokenCallback: this.handleAuthToken
                    }) : null
                })]
            }, "form-wrapper")
        }
        renderDefault() {
            let {
                authBoxClassName: e,
                showMobileWebHandoff: t
            } = this.props;
            return (0, s.jsxs)("div", {
                className: K.pageContainer,
                children: [(0, s.jsx)(b.default, {
                    onSubmit: this.handleLogin,
                    tag: "form",
                    className: e,
                    expanded: !0,
                    children: this.renderDefaultForm(!0)
                }), t && (0, s.jsx)(A.default, {})]
            })
        }
        renderGuildTemplate(e) {
            return (0, s.jsx)(H.default, {
                onSubmit: this.handleLogin,
                tag: "form",
                className: i(this.props.authBoxClassName, K.horizontalAuthBox),
                children: () => [(0, s.jsx)(p.default, {
                    guildTemplate: e
                }, "template"), this.renderDefaultForm(!1)]
            })
        }
        renderMFA() {
            let e = {
                ticket: this.props.mfaTicket,
                methods: this.props.mfaMethods
            };
            return (0, s.jsx)(b.default, {
                style: {
                    padding: 0
                },
                children: (0, s.jsx)(I.MFASlides, {
                    mfaFinish: this.handleTokenSubmitMFA,
                    request: e,
                    onEarlyClose: () => {
                        E.default.dispatch({
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
            return (0, s.jsx)(b.default, {
                tag: "form",
                className: e,
                children: (0, s.jsx)(m.default, {
                    title: W.default.Messages.PHONE_IP_AUTHORIZATION_TITLE,
                    subtitle: W.default.Messages.PHONE_IP_AUTHORIZATION_SUBTITLE_RESEND.format({
                        onResendClick: this.handleResendCode
                    }),
                    error: t,
                    onSubmit: this.handleIPAuthorize,
                    onCancel: f.default.loginReset
                })
            })
        }
        renderPasswordRecovery() {
            let {
                authBoxClassName: e
            } = this.props, {
                phoneVerifyError: t
            } = this.state;
            return (0, s.jsx)(b.default, {
                tag: "form",
                className: e,
                children: (0, s.jsx)(m.default, {
                    title: W.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
                    subtitle: W.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format({
                        onResendClick: this.handleResendCode
                    }),
                    error: t,
                    onSubmit: this.handlePasswordReset,
                    onCancel: f.default.loginReset
                })
            })
        }
        renderChooseAccount() {
            return (0, s.jsx)(R.default, {
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
                loginStatus: a,
                handoffAvailable: r
            } = this.props, {
                checkingHandoff: l,
                redirecting: i
            } = this.state;
            if (i || l) return (0, s.jsx)(q, {});
            if (r) return this.renderHandOffAvailable();
            if (e && l) return this.renderHandOffContinue();
            switch (a) {
                case V.LoginStates.LOGGING_IN_MFA_SMS:
                case V.LoginStates.MFA_SMS_STEP:
                case V.LoginStates.LOGGING_IN_MFA:
                case V.LoginStates.MFA_STEP:
                    return this.renderMFA();
                case V.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION:
                case V.LoginStates.ACCOUNT_DISABLED:
                    return this.renderDisabledAccount();
                case V.LoginStates.PHONE_IP_AUTHORIZATION:
                    return this.renderIPAuthorization();
                case V.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                    return this.renderPasswordRecovery();
                case V.LoginStates.LOGGING_IN:
                case V.LoginStates.NONE:
                default:
                    if (null != t && t.state === V.InviteStates.RESOLVING) return this.renderResolving();
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
            super(e), this.handleAuthToken = async e => {
                await f.default.loginToken(e, !1), G.default.track(V.AnalyticEvents.LOGIN_SUCCESSFUL, {
                    source: V.LoginSuccessfulSources.QR_CODE,
                    login_source: this.loginSource,
                    gift_code_sku_id: this.giftCodeSKUId,
                    is_new_user: !1
                })
            }, this.setLoginRef = e => {
                this.loginRef = e
            }, this.setPasswordRef = e => {
                this.passwordRef = e
            }, this.setCodeRef = e => {
                this.codeRef = e
            }, this.getFullLogin = () => {
                let {
                    loginPrefix: e,
                    login: t
                } = this.state;
                return e + t
            }, this.renderError = e => {
                let {
                    errors: t
                } = this.props;
                if (this.hasError(e)) {
                    let n = t[e];
                    return Array.isArray(n) ? n[0] : n
                }
                return null
            }, this.handleLogin = e => {
                let {
                    password: t,
                    undelete: n
                } = this.state;
                null != e && e.preventDefault(), f.default.login({
                    login: this.getFullLogin(),
                    password: t,
                    undelete: n,
                    source: this.loginSource,
                    giftCodeSKUId: this.giftCodeSKUId,
                    invite: this.props.invite
                }), F.ComponentDispatch.dispatch(V.ComponentActions.WAVE_EMPHASIZE)
            }, this.handleIPAuthorize = async e => {
                let {
                    password: t,
                    undelete: n
                } = this.state, s = this.getFullLogin();
                try {
                    let {
                        token: a
                    } = await N.default.verifyPhone(s, e, !1);
                    await f.default.authorizeIPAddress(a), f.default.login({
                        login: s,
                        password: t,
                        undelete: n,
                        source: this.loginSource,
                        giftCodeSKUId: this.giftCodeSKUId
                    }), F.ComponentDispatch.dispatch(V.ComponentActions.WAVE_EMPHASIZE)
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({
                        phoneVerifyError: e.body.message
                    })
                }
            }, this.handlePasswordReset = async e => {
                let {
                    transitionTo: t
                } = this.props;
                this.setState({
                    phoneVerifyError: null
                });
                try {
                    let {
                        token: n
                    } = await N.default.verifyPhone(this.getFullLogin(), e, !1);
                    t(V.Routes.RESET, {
                        search: (0, o.stringify)({
                            token: n,
                            from_login: "true"
                        })
                    })
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({
                        phoneVerifyError: e.body.message
                    })
                }
            }, this.handleTokenSubmitMFA = e => {
                let {
                    mfaType: t,
                    data: n,
                    ticket: s
                } = e;
                return F.ComponentDispatch.dispatch(V.ComponentActions.WAVE_EMPHASIZE), f.default.loginMFAv2({
                    code: n,
                    ticket: s,
                    mfaType: t,
                    source: this.loginSource,
                    giftCodeSKUId: this.giftCodeSKUId
                })
            }, this.handleForgotPassword = async e => {
                null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
                let t = this.getFullLogin();
                try {
                    F.ComponentDispatch.dispatch(V.ComponentActions.WAVE_EMPHASIZE), await f.default.forgotPassword(t), (0, c.openModal)(e => (0, s.jsx)(c.ConfirmModal, {
                        header: W.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
                        confirmText: W.default.Messages.OKAY,
                        confirmButtonColor: b.Button.Colors.BRAND,
                        className: u.isMobile ? K.mobile : "",
                        ...e,
                        children: (0, s.jsx)(c.Text, {
                            variant: "text-md/normal",
                            children: W.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format({
                                email: t
                            })
                        })
                    }))
                } catch {}
            }, this.handleResendCode = () => {
                N.default.resendCode(this.getFullLogin())
            }, this.handleReset = e => {
                null != e && e.preventDefault(), f.default.loginReset(), this.setState({
                    password: "",
                    loginPrefix: "",
                    login: "",
                    code: "",
                    smsCode: "",
                    undelete: !1,
                    checkingHandoff: !1,
                    redirecting: !1
                })
            }, this.handleCancelAccountDeletion = () => {
                this.setState({
                    undelete: !0
                }, this.handleLogin)
            }, this.handleGotoRegister = () => {
                let e;
                let {
                    login: t
                } = this.state, {
                    invite: n,
                    giftCode: s,
                    guildTemplate: a,
                    location: r,
                    transitionTo: l,
                    redirectTo: i
                } = this.props, u = null != r ? (0, o.parse)(r.search) : {};
                "" !== t && (u.email = t), null != n ? (u.mode = "register", e = V.Routes.INVITE(n.code)) : null != s ? (u.mode = "register", e = V.Routes.GIFT_CODE(s.code)) : null != a ? e = V.Routes.GUILD_TEMPLATE(a.code) : null != i ? (e = V.Routes.REGISTER, u.redirect_to = i) : e = V.Routes.REGISTER, f.default.loginReset(), l(e, {
                    search: (0, o.stringify)(u)
                }), F.ComponentDispatch.dispatch(V.ComponentActions.WAVE_EMPHASIZE)
            };
            let a = null != e.location ? (0, o.parse)(e.location.search) : {};
            this.state = {
                redirecting: e.authenticated,
                checkingHandoff: e.handoffAvailable,
                loginPrefix: "",
                login: null !== (n = null !== (t = a.email) && void 0 !== t ? t : a.login) && void 0 !== n ? n : "",
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
    Z.defaultProps = {
        transitionTo: e => n.g.location.assign(e)
    };
    var Q = function(e) {
        let t = (0, d.useStateFromStoresObject)([x.default, U.default, D.default, S.default, C.default], () => ({
                authenticated: D.default.isAuthenticated(),
                handoffAvailable: x.default.isHandoffAvailable(),
                user: x.default.user,
                loginStatus: D.default.getLoginStatus(),
                mfaTicket: D.default.getMFATicket(),
                mfaSMS: D.default.getMFASMS(),
                mfaMethods: D.default.getMFAMethods(),
                maskedPhone: D.default.getMaskedPhone(),
                errors: D.default.getErrors(),
                defaultRoute: U.default.defaultRoute,
                country: C.default.getCountryCode(),
                hasLoggedInAccounts: S.default.getHasLoggedInAccounts()
            })),
            n = M.default.useExperiment({
                location: "login"
            }).enabled;
        return (0, s.jsx)(Z, {
            ...e,
            ...t,
            hasPasswordlessExperiment: n
        })
    }
}