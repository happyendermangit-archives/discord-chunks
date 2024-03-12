function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LoginSpinner: function() {
            return Y
        },
        default: function() {
            return K
        }
    });
    var s = n("37983"),
        a = n("884691"),
        r = n("414456"),
        l = n.n(r),
        i = n("730290"),
        o = n("394846"),
        u = n("446674"),
        d = n("77078"),
        c = n("913144"),
        f = n("437822"),
        E = n("697796"),
        h = n("524824"),
        _ = n("21572"),
        g = n("791160"),
        m = n("434824"),
        p = n("24287"),
        I = n("382236"),
        T = n("770032"),
        N = n("724554"),
        A = n("878720"),
        S = n("25033"),
        R = n("589252"),
        C = n("970366"),
        O = n("271938"),
        v = n("72177"),
        L = n("476108"),
        M = n("145131"),
        x = n("124969"),
        y = n("980428"),
        D = n("599110"),
        U = n("659500"),
        b = n("773336"),
        P = n("404432"),
        G = n("719451"),
        F = n("331085"),
        j = n("598489"),
        k = n("49111"),
        B = n("579033"),
        w = n("782340"),
        H = n("699177"),
        V = n("890957");

    function Y() {
        return (0, s.jsx)(x.default, {
            children: (0, s.jsx)(d.Spinner, {})
        })
    }
    class W extends a.PureComponent {
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
            e && !t ? (0, E.handoffBegin)() : t && this.loginOrSSO(t, a, !0), D.default.track(k.AnalyticEvents.LOGIN_VIEWED, {
                location: null != s ? "Invite Login Page" : "Non-Invite Login Page",
                login_source: this.loginSource,
                authenticated: t,
                ...null != n ? (0, g.default)(n, !1, !1) : {}
            }, {
                flush: !0
            }), f.default.getLocationMetadata(), (0, C.trackAppUIViewed)("login")
        }
        componentDidUpdate(e) {
            let {
                authenticated: t,
                location: n
            } = this.props, {
                checkingHandoff: s
            } = this.state;
            if (t && !e.authenticated && !s && this.loginOrSSO(t, n), e.errors !== this.props.errors) {
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
            return null != a ? (0, h.getLoginHandoffSourceFromRedirectTo)(a) : null
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
            } = this.props, a = null != e ? (0, i.parse)(e.search) : {};
            if (delete a.redirect_to, null != n) null != s ? s(n) : t(n);
            else if (null == a.service) t(k.Routes.APP);
            else {
                let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + k.Endpoints.SSO,
                    t = {
                        ...a,
                        token: O.default.getToken()
                    };
                window.location = "".concat(e, "?").concat((0, i.stringify)(t))
            }
        }
        hasError(e) {
            return null != this.props.errors[e]
        }
        renderHandOffAvailable() {
            let {
                authBoxClassName: e
            } = this.props;
            return (0, s.jsxs)(x.default, {
                className: e,
                children: [(0, s.jsx)(x.AuthSpinner, {}), (0, s.jsx)(x.Title, {
                    className: V.marginBottom8,
                    children: w.default.Messages.BROWSER_HANDOFF_DETECTING_TITLE
                }), (0, s.jsx)(x.SubTitle, {
                    children: w.default.Messages.AUTH_BROWSER_HANDOFF_DETECTING_DESCRIPTION
                })]
            })
        }
        renderHandOffContinue() {
            let {
                user: e,
                transitionTo: t,
                authBoxClassName: n
            } = this.props;
            return null == e ? null : (0, s.jsxs)(x.default, {
                className: n,
                children: [(0, s.jsx)(x.Avatar, {
                    src: e.getAvatarURL(void 0, 100),
                    size: d.AvatarSizes.DEPRECATED_SIZE_100,
                    className: V.marginBottom20
                }), (0, s.jsx)(x.Title, {
                    className: V.marginBottom8,
                    children: w.default.Messages.BROWSER_HANDOFF_SUCCESS_TITLE.format({
                        name: e.toString()
                    })
                }), (0, s.jsx)(x.SubTitle, {
                    className: V.marginBottom40,
                    children: w.default.Messages._BROWSER_HANDOFF_SUCCESS_BODY
                }), (0, s.jsxs)(x.Block, {
                    children: [(0, s.jsx)(x.Button, {
                        onClick: () => t(k.Routes.APP),
                        className: V.marginBottom8,
                        children: w.default.Messages.BROWSER_HANDOFF_SUCCESS_ACTION.format({
                            name: e.toString()
                        })
                    }), (0, s.jsx)(x.Button, {
                        look: x.Button.Looks.LINK,
                        color: x.Button.Colors.LINK,
                        onClick: this.handleReset,
                        children: w.default.Messages.BROWSER_HANDOFF_SUCCESS_CANCEL
                    })]
                })]
            })
        }
        renderDisabledAccount() {
            let {
                authBoxClassName: e
            } = this.props, t = this.props.loginStatus === k.LoginStates.ACCOUNT_DISABLED, n = t ? w.default.Messages.ACCOUNT_DISABLED_TITLE : w.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE, a = t ? w.default.Messages.ACCOUNT_DISABLED_DESCRIPTION : w.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
            return (0, s.jsx)(x.default, {
                tag: "form",
                onSubmit: this.handleReset,
                className: e,
                children: (0, s.jsxs)(d.HeadingLevel, {
                    component: (0, s.jsx)(x.Title, {
                        className: V.marginBottom8,
                        children: n
                    }),
                    children: [(0, s.jsx)(x.SubTitle, {
                        className: V.marginBottom20,
                        children: a
                    }), (0, s.jsxs)(x.Block, {
                        children: [(0, s.jsx)(x.Button, {
                            color: x.Button.Colors.BRAND,
                            type: "submit",
                            children: w.default.Messages._RETURN_TO_LOGIN
                        }), (0, s.jsx)("div", {
                            className: l(V.marginTop8, H.needAccount),
                            children: w.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format({
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
            return (0, s.jsxs)(x.default, {
                className: e,
                children: [(0, s.jsx)(G.InviteResolvingHeader, {}), (0, s.jsxs)(x.Block, {
                    className: V.marginTop20,
                    children: [(0, s.jsx)(R.default, {
                        className: V.marginBottom20,
                        alpha2: t.alpha2,
                        countryCode: t.code.split(" ")[0],
                        label: w.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
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
                    }), (0, s.jsx)(x.Input, {
                        className: V.marginBottom20,
                        label: w.default.Messages.FORM_LABEL_PASSWORD,
                        onChange: e => this.setState({
                            password: e
                        }),
                        type: "password",
                        setRef: this.setPasswordRef,
                        autoComplete: "off",
                        spellCheck: "false",
                        value: this.state.password,
                        required: !0
                    }), (0, s.jsx)(x.Button, {
                        className: V.marginBottom8,
                        type: "submit",
                        disabled: !0,
                        children: w.default.Messages._LOGIN
                    }), (0, s.jsx)(x.Button, {
                        disabled: !0,
                        look: x.Button.Looks.LINK,
                        color: x.Button.Colors.LINK,
                        children: w.default.Messages.FORGOT_PASSWORD
                    }), (0, s.jsx)(x.Button, {
                        disabled: !0,
                        className: V.marginTop4,
                        look: x.Button.Looks.LINK,
                        color: x.Button.Colors.LINK,
                        children: w.default.Messages.NEED_ACCOUNT
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
                loginStatus: i,
                country: o,
                showMobileWebHandoff: u,
                disableAutofocusOnDefaultForm: c
            } = this.props, f = !this.hasError("email") && this.hasError("password"), E = (null == a ? void 0 : a.stage_instance) != null;
            return n = null == a || E ? null != r ? (0, s.jsx)(P.default, {
                giftCode: r
            }) : (0, s.jsxs)("div", {
                className: H.header,
                children: [(0, s.jsx)(x.Title, {
                    className: V.marginBottom8,
                    children: w.default.Messages.LOGIN_TITLE
                }, "title"), !1 === (0, b.isAndroidWeb)() ? (0, s.jsx)(x.SubTitle, {
                    children: w.default.Messages.AUTH_LOGIN_BODY
                }, "subtitle") : null]
            }) : (0, s.jsx)(G.default, {
                invite: a
            }), (0, s.jsxs)(M.default, {
                direction: M.default.Direction.HORIZONTAL,
                align: M.default.Align.CENTER,
                children: [(0, s.jsxs)("div", {
                    className: H.mainLoginContainer,
                    children: [this.canShowChooseAccount && this.state.dismissedChooseAccount && (0, s.jsx)(x.Button, {
                        onClick: () => {
                            this.setState(e => ({
                                ...e,
                                dismissedChooseAccount: !1
                            }))
                        },
                        look: x.Button.Looks.LINK,
                        color: x.Button.Colors.PRIMARY,
                        className: H.goBackButton,
                        children: (0, s.jsxs)("div", {
                            className: H.content,
                            children: [(0, s.jsx)(y.default, {
                                width: 16,
                                height: 16,
                                className: H.caret
                            }), (0, s.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: w.default.Messages.AGE_GATE_GO_BACK
                            })]
                        })
                    }), n, (0, s.jsx)(d.HeadingLevel, {
                        children: (0, s.jsxs)(x.Block, {
                            className: V.marginTop20,
                            children: [(0, s.jsx)(R.default, {
                                alpha2: o.alpha2,
                                countryCode: o.code.split(" ")[0],
                                className: V.marginBottom20,
                                label: w.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
                                error: null !== (t = this.renderError("login")) && void 0 !== t ? t : this.renderError("email"),
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
                                autoFocus: !f && !u && !c,
                                required: !0
                            }), (0, s.jsx)(x.Input, {
                                label: w.default.Messages.FORM_LABEL_PASSWORD,
                                error: this.renderError("password"),
                                onChange: e => this.setState({
                                    password: e
                                }),
                                name: "password",
                                type: "password",
                                setRef: this.setPasswordRef,
                                autoComplete: "off",
                                spellCheck: "false",
                                autoFocus: f && !u && !c,
                                value: this.state.password,
                                required: !0
                            }), (0, s.jsx)(x.Button, {
                                onClick: this.handleForgotPassword,
                                look: x.Button.Looks.LINK,
                                color: x.Button.Colors.LINK,
                                className: l(V.marginBottom20, V.marginTop4),
                                children: w.default.Messages.FORGOT_PASSWORD
                            }), (0, s.jsx)(x.Button, {
                                type: "submit",
                                submitting: i === k.LoginStates.LOGGING_IN,
                                color: E ? x.Button.Colors.GREEN : x.Button.Colors.BRAND,
                                className: V.marginBottom8,
                                children: E ? w.default.Messages._LOGIN_STAGE : w.default.Messages._LOGIN
                            }), (0, s.jsxs)("div", {
                                className: V.marginTop4,
                                children: [(0, s.jsx)("span", {
                                    className: H.needAccount,
                                    children: w.default.Messages.NEED_ACCOUNT
                                }), (0, s.jsx)(x.Button, {
                                    onClick: this.handleGotoRegister,
                                    look: x.Button.Looks.LINK,
                                    color: x.Button.Colors.LINK,
                                    className: H.smallRegisterLink,
                                    children: w.default.Messages.REGISTER
                                })]
                            })]
                        })
                    })]
                }), (0, s.jsx)(d.HeadingLevel, {
                    children: e ? (0, s.jsx)(F.default, {
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
                className: H.pageContainer,
                children: [(0, s.jsx)(x.default, {
                    onSubmit: this.handleLogin,
                    tag: "form",
                    className: e,
                    expanded: !0,
                    children: this.renderDefaultForm(!0)
                }), t && (0, s.jsx)(I.default, {})]
            })
        }
        renderGuildTemplate(e) {
            return (0, s.jsx)(j.default, {
                onSubmit: this.handleLogin,
                tag: "form",
                className: l(this.props.authBoxClassName, H.horizontalAuthBox),
                children: () => [(0, s.jsx)(m.default, {
                    guildTemplate: e
                }, "template"), this.renderDefaultForm(!1)]
            })
        }
        renderMFA() {
            let e = {
                ticket: this.props.mfaTicket,
                methods: this.props.mfaMethods
            };
            return (0, s.jsx)(x.default, {
                style: {
                    padding: 0
                },
                children: (0, s.jsx)(p.MFASlides, {
                    mfaFinish: this.handleTokenSubmitMFA,
                    request: e,
                    onEarlyClose: () => {
                        c.default.dispatch({
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
            return (0, s.jsx)(x.default, {
                tag: "form",
                className: e,
                children: (0, s.jsx)(_.default, {
                    title: w.default.Messages.PHONE_IP_AUTHORIZATION_TITLE,
                    subtitle: w.default.Messages.PHONE_IP_AUTHORIZATION_SUBTITLE_RESEND.format({
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
            return (0, s.jsx)(x.default, {
                tag: "form",
                className: e,
                children: (0, s.jsx)(_.default, {
                    title: w.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
                    subtitle: w.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format({
                        onResendClick: this.handleResendCode
                    }),
                    error: t,
                    onSubmit: this.handlePasswordReset,
                    onCancel: f.default.loginReset
                })
            })
        }
        renderChooseAccount() {
            return (0, s.jsx)(N.default, {
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
            if (i || l) return (0, s.jsx)(Y, {});
            if (r) return this.renderHandOffAvailable();
            if (e && l) return this.renderHandOffContinue();
            switch (a) {
                case k.LoginStates.LOGGING_IN_MFA_SMS:
                case k.LoginStates.MFA_SMS_STEP:
                case k.LoginStates.LOGGING_IN_MFA:
                case k.LoginStates.MFA_STEP:
                    return this.renderMFA();
                case k.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION:
                case k.LoginStates.ACCOUNT_DISABLED:
                    return this.renderDisabledAccount();
                case k.LoginStates.PHONE_IP_AUTHORIZATION:
                    return this.renderIPAuthorization();
                case k.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                    return this.renderPasswordRecovery();
                case k.LoginStates.LOGGING_IN:
                case k.LoginStates.NONE:
                default:
                    if (null != t && t.state === k.InviteStates.RESOLVING) return this.renderResolving();
                    if (null != n) {
                        if (n.state === B.GuildTemplateStates.RESOLVING) return this.renderResolving();
                        return this.renderGuildTemplate(n)
                    }
                    if (this.canShowChooseAccount && !this.state.dismissedChooseAccount) return this.renderChooseAccount();
                    return this.renderDefault()
            }
        }
        constructor(e) {
            var t, n;
            super(e), this.handleAuthToken = async e => {
                await f.default.loginToken(e, !1), D.default.track(k.AnalyticEvents.LOGIN_SUCCESSFUL, {
                    source: k.LoginSuccessfulSources.QR_CODE,
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
                }), U.ComponentDispatch.dispatch(k.ComponentActions.WAVE_EMPHASIZE)
            }, this.handleIPAuthorize = async e => {
                let {
                    password: t,
                    undelete: n
                } = this.state, s = this.getFullLogin();
                try {
                    let {
                        token: a
                    } = await A.default.verifyPhone(s, e, !1);
                    await f.default.authorizeIPAddress(a), f.default.login({
                        login: s,
                        password: t,
                        undelete: n,
                        source: this.loginSource,
                        giftCodeSKUId: this.giftCodeSKUId
                    }), U.ComponentDispatch.dispatch(k.ComponentActions.WAVE_EMPHASIZE)
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
                    } = await A.default.verifyPhone(this.getFullLogin(), e, !1);
                    t(k.Routes.RESET, {
                        search: (0, i.stringify)({
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
                return U.ComponentDispatch.dispatch(k.ComponentActions.WAVE_EMPHASIZE), f.default.loginMFAv2({
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
                    U.ComponentDispatch.dispatch(k.ComponentActions.WAVE_EMPHASIZE), await f.default.forgotPassword(t), (0, d.openModal)(e => (0, s.jsx)(d.ConfirmModal, {
                        header: w.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
                        confirmText: w.default.Messages.OKAY,
                        confirmButtonColor: x.Button.Colors.BRAND,
                        className: o.isMobile ? H.mobile : "",
                        ...e,
                        children: (0, s.jsx)(d.Text, {
                            variant: "text-md/normal",
                            children: w.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format({
                                email: t
                            })
                        })
                    }))
                } catch {}
            }, this.handleResendCode = () => {
                A.default.resendCode(this.getFullLogin())
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
                    redirectTo: o
                } = this.props, u = null != r ? (0, i.parse)(r.search) : {};
                "" !== t && (u.email = t), null != n ? (u.mode = "register", e = k.Routes.INVITE(n.code)) : null != s ? (u.mode = "register", e = k.Routes.GIFT_CODE(s.code)) : null != a ? e = k.Routes.GUILD_TEMPLATE(a.code) : null != o ? (e = k.Routes.REGISTER, u.redirect_to = o) : e = k.Routes.REGISTER, f.default.loginReset(), l(e, {
                    search: (0, i.stringify)(u)
                }), U.ComponentDispatch.dispatch(k.ComponentActions.WAVE_EMPHASIZE)
            };
            let a = null != e.location ? (0, i.parse)(e.location.search) : {};
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
                dismissedChooseAccount: !1
            }
        }
    }
    W.defaultProps = {
        transitionTo: e => n.g.location.assign(e)
    };
    var K = function(e) {
        let t = (0, u.useStateFromStoresObject)([v.default, L.default, O.default, T.default, S.default], () => ({
            authenticated: O.default.isAuthenticated(),
            handoffAvailable: v.default.isHandoffAvailable(),
            user: v.default.user,
            loginStatus: O.default.getLoginStatus(),
            mfaTicket: O.default.getMFATicket(),
            mfaSMS: O.default.getMFASMS(),
            mfaMethods: O.default.getMFAMethods(),
            maskedPhone: O.default.getMaskedPhone(),
            errors: O.default.getErrors(),
            defaultRoute: L.default.defaultRoute,
            country: S.default.getCountryCode(),
            hasLoggedInAccounts: T.default.getHasLoggedInAccounts()
        }));
        return (0, s.jsx)(W, {
            ...e,
            ...t
        })
    }
}