function(e, t, s) {
    "use strict";
    s.r(t), s("757143");
    var n, a = s("735250"),
        l = s("470079"),
        i = s("120356"),
        r = s.n(i),
        u = s("593473"),
        o = s("873546"),
        d = s("442837"),
        c = s("570140"),
        f = s("893776"),
        E = s("129293"),
        I = s("17894"),
        _ = s("124860"),
        h = s("108427"),
        p = s("314897"),
        T = s("819570"),
        N = s("585483"),
        g = s("981631"),
        m = s("689938"),
        A = s("794711");

    function S(e, t, s) {
        return t in e ? Object.defineProperty(e, t, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = s, e
    }
    d.default.initialize();
    class v extends(n = l.PureComponent) {
        componentDidMount() {
            (0, h.trackAppUIViewed)("reset_password")
        }
        renderPasswordReset() {
            let {
                password: e,
                error: t,
                hasCancel: n
            } = this.state, l = this.isSubmitting(), i = null != t ? t : this.renderError("password");
            return (0, a.jsxs)(T.default, {
                onSubmit: this.handleSubmit,
                tag: "form",
                children: [(0, a.jsx)("img", {
                    alt: "",
                    src: null == i ? s("26230") : s("935227"),
                    className: A.marginBottom20
                }), (0, a.jsx)(T.Title, {
                    children: m.default.Messages.RESET_PASSWORD_TITLE
                }), (0, a.jsxs)(T.Block, {
                    className: A.marginTop20,
                    children: [(0, a.jsx)(T.Input, {
                        label: m.default.Messages.FORM_LABEL_NEW_PASSWORD,
                        className: A.marginBottom20,
                        name: "password",
                        value: e,
                        onChange: e => this.setState({
                            password: e
                        }),
                        error: i,
                        type: "password"
                    }), (0, a.jsx)(T.Button, {
                        type: "submit",
                        submitting: l,
                        children: m.default.Messages.CHANGE_PASSWORD
                    }), n ? (0, a.jsx)(T.Button, {
                        className: A.marginTop8,
                        onClick: this.handleGoToLogin,
                        submitting: l,
                        color: T.Button.Colors.PRIMARY,
                        children: m.default.Messages.CANCEL
                    }) : null]
                })]
            })
        }
        renderMFA() {
            let e = {
                ticket: this.props.mfaTicket,
                methods: this.props.mfaMethods
            };
            return (0, a.jsx)(T.default, {
                style: {
                    padding: 0
                },
                children: (0, a.jsx)(_.MFASlides, {
                    mfaFinish: e => {
                        let {
                            mfaType: t,
                            data: s
                        } = e;
                        return this.handleTokenSubmitMFAv2(t, s)
                    },
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
        renderSucceeded() {
            return (0, a.jsxs)(T.default, {
                children: [(0, a.jsx)("img", {
                    alt: "",
                    src: s("26230"),
                    className: r()(A.marginBottom20, o.isMobile ? A.marginTop20 : "")
                }), (0, a.jsx)(T.Title, {
                    className: A.marginBottom40,
                    children: m.default.Messages.RESET_PASSWORD_SUCCESS_TITLE
                }), (0, a.jsx)(T.Button, {
                    onClick: this.handleOpenApp,
                    children: m.default.Messages.VERIFICATION_OPEN_DISCORD
                })]
            })
        }
        render() {
            return this.state.success ? this.renderSucceeded() : null != this.props.mfaTicket && "" !== this.props.mfaTicket ? this.renderMFA() : this.renderPasswordReset()
        }
        constructor(e) {
            var t;
            super(e), S(this, "handleSubmit", async e => {
                let {
                    location: t,
                    onLoginSuccess: s,
                    source: n,
                    resetToken: a
                } = this.props, {
                    password: l,
                    error: i
                } = this.state;
                if (null != e && e.preventDefault(), 0 === l.length) {
                    this.setState({
                        error: m.default.Messages.PASSWORD_REQUIRED
                    }), N.ComponentDispatch.dispatch(g.ComponentActions.WAVE_EMPHASIZE);
                    return
                }
                null != i && this.setState({
                    error: null
                });
                let r = a;
                if (null != t && (r = (0, E.default)(t)), null != r) {
                    this.setState({
                        working: !0
                    });
                    try {
                        let {
                            result: e,
                            sms: t,
                            webauthn: a,
                            ticket: i,
                            token: u,
                            totp: o,
                            backup: d
                        } = await f.default.resetPassword(r, l, n);
                        e === f.PasswordResetResult.MFA ? c.default.dispatch({
                            type: "LOGIN_MFA_STEP",
                            ticket: i,
                            sms: t,
                            webauthn: a,
                            totp: o,
                            backup: d
                        }) : null != s ? s(u) : (c.default.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: u
                        }), this.handlePasswordChangeSuccess())
                    } catch (e) {}
                    this.setState({
                        working: !1
                    })
                }
            }), S(this, "handleTokenSubmitMFAv2", (e, t) => {
                let {
                    location: s,
                    mfaTicket: n,
                    onLoginSuccess: a,
                    resetToken: l,
                    source: i
                } = this.props, {
                    password: r
                } = this.state;
                if (0 === r.length) return c.default.dispatch({
                    type: "LOGIN_RESET"
                }), Promise.reject();
                let u = l;
                return (null != s && (u = (0, E.default)(s)), null == u) ? (c.default.dispatch({
                    type: "LOGIN_RESET"
                }), Promise.reject()) : f.default.resetPasswordMFAv2({
                    method: e,
                    code: t,
                    ticket: n,
                    password: r,
                    token: u,
                    source: i
                }).then(e => {
                    null != a ? a(e) : (c.default.dispatch({
                        type: "LOGIN_SUCCESS",
                        token: e
                    }), this.handlePasswordChangeSuccess())
                })
            }), S(this, "handlePasswordChangeSuccess", () => {
                let {
                    replaceWith: e
                } = this.props;
                if (o.isTablet || o.isMobile) {
                    this.setState({
                        success: !0
                    });
                    return
                }
                e(g.Routes.APP)
            }), S(this, "handleGoToLogin", () => {
                let {
                    transitionTo: e
                } = this.props;
                f.default.loginReset(), e(g.Routes.LOGIN)
            }), S(this, "isSubmitting", () => {
                let {
                    loginStatus: e
                } = this.props, {
                    working: t
                } = this.state;
                return t || e === g.LoginStates.LOGGING_IN_MFA
            }), S(this, "handleOpenApp", () => {
                (0, I.default)("password_reset")
            }), S(this, "hasError", e => null != this.props.errors[e] || null != this.state.error), S(this, "renderError", e => {
                let {
                    errors: t
                } = this.props;
                if (this.hasError(e)) {
                    let s = t[e];
                    return Array.isArray(s) ? s[0] : s
                }
                return null
            });
            let s = (null === (t = this.props.location) || void 0 === t ? void 0 : t.search) != null && "" !== this.props.location.search ? (0, u.parse)(this.props.location.search) : null;
            this.state = {
                method: "",
                password: "",
                code: "",
                error: null,
                hasCancel: null != s && null != s.from_login,
                working: !1,
                success: !1
            }
        }
    }
    S(v, "defaultProps", {
        transitionTo: e => s.g.location.assign(e),
        replaceWith: e => s.g.location.replace(e)
    });
    t.default = function(e) {
        let t = (0, d.useStateFromStoresObject)([p.default], () => ({
            loginStatus: p.default.getLoginStatus(),
            mfaTicket: p.default.getMFATicket(),
            errors: p.default.getErrors(),
            mfaMethods: p.default.getMFAMethods()
        }));
        return (0, a.jsx)(v, {
            ...e,
            ...t
        })
    }
}