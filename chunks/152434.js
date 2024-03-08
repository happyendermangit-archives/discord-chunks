function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("781738");
    var s = n("37983"),
        a = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("730290"),
        u = n("394846"),
        o = n("446674"),
        d = n("913144"),
        c = n("437822"),
        f = n("457108"),
        E = n("724038"),
        I = n("24287"),
        _ = n("970366"),
        h = n("271938"),
        p = n("124969"),
        T = n("659500"),
        N = n("49111"),
        m = n("782340"),
        g = n("890957");
    o.default.initialize();
    class A extends a.PureComponent {
        componentDidMount() {
            (0, _.trackAppUIViewed)("reset_password")
        }
        renderPasswordReset() {
            let {
                password: e,
                error: t,
                hasCancel: a
            } = this.state, l = this.isSubmitting(), i = null != t ? t : this.renderError("password");
            return (0, s.jsxs)(p.default, {
                onSubmit: this.handleSubmit,
                tag: "form",
                children: [(0, s.jsx)("img", {
                    alt: "",
                    src: null == i ? n("245288") : n("314837"),
                    className: g.marginBottom20
                }), (0, s.jsx)(p.Title, {
                    children: m.default.Messages.RESET_PASSWORD_TITLE
                }), (0, s.jsxs)(p.Block, {
                    className: g.marginTop20,
                    children: [(0, s.jsx)(p.Input, {
                        label: m.default.Messages.FORM_LABEL_NEW_PASSWORD,
                        className: g.marginBottom20,
                        name: "password",
                        value: e,
                        onChange: e => this.setState({
                            password: e
                        }),
                        error: i,
                        type: "password"
                    }), (0, s.jsx)(p.Button, {
                        type: "submit",
                        submitting: l,
                        children: m.default.Messages.CHANGE_PASSWORD
                    }), a ? (0, s.jsx)(p.Button, {
                        className: g.marginTop8,
                        onClick: this.handleGoToLogin,
                        submitting: l,
                        color: p.Button.Colors.PRIMARY,
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
            return (0, s.jsx)(p.default, {
                style: {
                    padding: 0
                },
                children: (0, s.jsx)(I.MFASlides, {
                    mfaFinish: e => {
                        let {
                            mfaType: t,
                            data: n
                        } = e;
                        return this.handleTokenSubmitMFAv2(t, n)
                    },
                    request: e,
                    onEarlyClose: () => {
                        d.default.dispatch({
                            type: "LOGIN_RESET"
                        })
                    },
                    width: 480
                })
            })
        }
        renderSucceeded() {
            return (0, s.jsxs)(p.default, {
                children: [(0, s.jsx)("img", {
                    alt: "",
                    src: n("245288"),
                    className: i(g.marginBottom20, u.isMobile ? g.marginTop20 : "")
                }), (0, s.jsx)(p.Title, {
                    className: g.marginBottom40,
                    children: m.default.Messages.RESET_PASSWORD_SUCCESS_TITLE
                }), (0, s.jsx)(p.Button, {
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
            super(e), this.handleSubmit = async e => {
                let {
                    location: t,
                    onLoginSuccess: n,
                    source: s,
                    resetToken: a
                } = this.props, {
                    password: l,
                    error: i
                } = this.state;
                if (null != e && e.preventDefault(), 0 === l.length) {
                    this.setState({
                        error: m.default.Messages.PASSWORD_REQUIRED
                    }), T.ComponentDispatch.dispatch(N.ComponentActions.WAVE_EMPHASIZE);
                    return
                }
                null != i && this.setState({
                    error: null
                });
                let r = a;
                if (null != t && (r = (0, f.default)(t)), null != r) {
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
                            backup: f
                        } = await c.default.resetPassword(r, l, s);
                        e === c.PasswordResetResult.MFA ? d.default.dispatch({
                            type: "LOGIN_MFA_STEP",
                            ticket: i,
                            sms: t,
                            webauthn: a,
                            totp: o,
                            backup: f
                        }) : null != n ? n(u) : (d.default.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: u
                        }), this.handlePasswordChangeSuccess())
                    } catch (e) {}
                    this.setState({
                        working: !1
                    })
                }
            }, this.handleTokenSubmitMFAv2 = (e, t) => {
                let {
                    location: n,
                    mfaTicket: s,
                    onLoginSuccess: a,
                    resetToken: l,
                    source: i
                } = this.props, {
                    password: r
                } = this.state;
                if (0 === r.length) return d.default.dispatch({
                    type: "LOGIN_RESET"
                }), Promise.reject();
                let u = l;
                return (null != n && (u = (0, f.default)(n)), null == u) ? (d.default.dispatch({
                    type: "LOGIN_RESET"
                }), Promise.reject()) : c.default.resetPasswordMFAv2({
                    method: e,
                    code: t,
                    ticket: s,
                    password: r,
                    token: u,
                    source: i
                }).then(e => {
                    null != a ? a(e) : (d.default.dispatch({
                        type: "LOGIN_SUCCESS",
                        token: e
                    }), this.handlePasswordChangeSuccess())
                })
            }, this.handlePasswordChangeSuccess = () => {
                let {
                    replaceWith: e
                } = this.props;
                if (u.isTablet || u.isMobile) {
                    this.setState({
                        success: !0
                    });
                    return
                }
                e(N.Routes.APP)
            }, this.handleGoToLogin = () => {
                let {
                    transitionTo: e
                } = this.props;
                c.default.loginReset(), e(N.Routes.LOGIN)
            }, this.isSubmitting = () => {
                let {
                    loginStatus: e
                } = this.props, {
                    working: t
                } = this.state;
                return t || e === N.LoginStates.LOGGING_IN_MFA
            }, this.handleOpenApp = () => {
                (0, E.default)("password_reset")
            }, this.hasError = e => null != this.props.errors[e] || null != this.state.error, this.renderError = e => {
                let {
                    errors: t
                } = this.props;
                if (this.hasError(e)) {
                    let n = t[e];
                    return Array.isArray(n) ? n[0] : n
                }
                return null
            };
            let n = (null === (t = this.props.location) || void 0 === t ? void 0 : t.search) != null && "" !== this.props.location.search ? (0, r.parse)(this.props.location.search) : null;
            this.state = {
                method: "",
                password: "",
                code: "",
                error: null,
                hasCancel: null != n && null != n.from_login,
                working: !1,
                success: !1
            }
        }
    }
    A.defaultProps = {
        transitionTo: e => n.g.location.assign(e),
        replaceWith: e => n.g.location.replace(e)
    };
    var S = function(e) {
        let t = (0, o.useStateFromStoresObject)([h.default], () => ({
            loginStatus: h.default.getLoginStatus(),
            mfaTicket: h.default.getMFATicket(),
            errors: h.default.getErrors(),
            mfaMethods: h.default.getMFAMethods()
        }));
        return (0, s.jsx)(A, {
            ...e,
            ...t
        })
    }
}