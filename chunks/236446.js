function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return U
        }
    }), n("47120");
    var s = n("735250"),
        a = n("470079"),
        i = n("803997"),
        l = n.n(i),
        r = n("512722"),
        u = n.n(r),
        o = n("442837"),
        d = n("362762"),
        c = n("409059"),
        f = n("659900"),
        E = n("962220"),
        I = n("473855"),
        h = n("306453"),
        _ = n("929809"),
        p = n("108427"),
        T = n("390885"),
        m = n("314897"),
        N = n("896797"),
        g = n("819570"),
        A = n("954824"),
        S = n("781428"),
        v = n("163671"),
        O = n("109894"),
        C = n("981631"),
        R = n("58346"),
        x = n("701476"),
        D = n("630724"),
        P = n("436620"),
        L = n("689938"),
        M = n("904163"),
        b = n("794711");
    o.default.initialize();
    class j extends a.PureComponent {
        componentDidMount() {
            (0, p.trackAppUIViewed)("guildTemplate"), !P.IS_APP_COMPATIBLE_BROWSER && A.default.launch("discord://" + C.Routes.GUILD_TEMPLATE(this.props.code), () => void 0)
        }
        componentDidUpdate(e) {
            this.props.code !== e.code && E.default.resolveGuildTemplate(this.props.code)
        }
        renderButton(e, t) {
            return P.IS_APP_COMPATIBLE_BROWSER ? (0, s.jsx)(g.Button, {
                className: b.marginTop40,
                onClick: t,
                children: e
            }) : (0, s.jsx)(g.IncompatibleBrowser, {
                className: b.marginTop40
            })
        }
        renderSpinner(e) {
            return (0, s.jsxs)(g.default, {
                children: [(0, s.jsx)(g.Title, {
                    children: e
                }), (0, s.jsx)(g.AuthSpinner, {})]
            })
        }
        renderInvalidGuildTemplate() {
            return (0, s.jsxs)(g.default, {
                children: [(0, s.jsx)(g.Image, {
                    src: n("167969"),
                    className: b.marginBottom8
                }), (0, s.jsx)(g.Title, {
                    className: l()(b.marginTop8, b.marginBottom8),
                    children: L.default.Messages.GUILD_TEMPLATE_INVALID_TITLE
                }), (0, s.jsx)(g.SubTitle, {
                    children: L.default.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE
                }), this.renderButton(L.default.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
            })
        }
        renderAppOpened() {
            return (0, s.jsxs)(g.default, {
                children: [(0, s.jsx)(g.Title, {
                    className: b.marginBottom8,
                    children: L.default.Messages.APP_OPENED_TITLE
                }), (0, s.jsx)(g.SubTitle, {
                    children: L.default.Messages.APP_OPENED_BODY
                }), this.renderButton(L.default.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
            })
        }
        renderAuthenticatedOrDownload() {
            let {
                guildTemplate: e
            } = this.props;
            return (u()(null != e, "guild template must not be null"), e.state === R.GuildTemplateStates.RESOLVING) ? (0, s.jsx)(g.default, {
                className: M.authBox,
                children: (0, s.jsx)(h.default, {
                    guildTemplate: e
                })
            }) : (0, s.jsx)(B, {
                guildTemplate: e
            })
        }
        renderContinue() {
            return (0, s.jsxs)(g.default, {
                children: [(0, s.jsx)(g.Title, {
                    children: L.default.Messages.APP_NOT_OPENED
                }), this.renderButton(L.default.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
            })
        }
        render() {
            let {
                guildTemplate: e,
                nativeAppState: t,
                authenticated: n,
                transitionTo: a,
                location: i
            } = this.props;
            if (null == e) return this.renderSpinner(L.default.Messages.LOADING);
            if (t === C.NativeAppStates.OPEN) return this.renderAppOpened();
            if (t === C.NativeAppStates.OPENING) return this.renderSpinner(L.default.Messages.APP_OPENING);
            switch (e.state) {
                case R.GuildTemplateStates.RESOLVING:
                    return this.renderSpinner(L.default.Messages.APP_OPENING);
                case R.GuildTemplateStates.RESOLVED:
                    if (n || !P.IS_APP_COMPATIBLE_BROWSER) return this.renderAuthenticatedOrDownload();
                    if (this.props.login) return (0, s.jsx)(S.default, {
                        guildTemplate: e,
                        transitionTo: a,
                        location: i
                    });
                    else return (0, s.jsx)(O.default, {
                        guildTemplate: e,
                        transitionTo: a,
                        location: i,
                        onRegister: () => {
                            (0, _.setNewUser)(x.NewUserTypes.ORGANIC_REGISTERED_GUILD_TEMPLATE), T.default.flowStart(D.FlowType.ORGANIC_GUILD_TEMPLATES, D.RegistrationSteps.NUF_STARTED)
                        }
                    });
                case R.GuildTemplateStates.EXPIRED:
                    return this.renderInvalidGuildTemplate();
                default:
                    return null
            }
        }
        constructor(...e) {
            var t, n, s;
            super(...e), t = this, n = "handleContinue", s = () => {
                let {
                    defaultRoute: e,
                    transitionTo: t
                } = this.props;
                t(e)
            }, n in t ? Object.defineProperty(t, n, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = s
        }
    }

    function U(e) {
        let t = {
            guildTemplate: (0, o.useStateFromStores)([c.default], () => c.default.getGuildTemplate(e.code)),
            nativeAppState: (0, o.useStateFromStores)([d.default], () => d.default.getState(e.code)),
            authenticated: (0, o.useStateFromStores)([m.default], () => m.default.isAuthenticated()),
            defaultRoute: (0, o.useStateFromStores)([N.default], () => N.default.defaultRoute)
        };
        return (0, s.jsx)(j, {
            ...e,
            ...t
        })
    }

    function B(e) {
        let {
            guildTemplate: t
        } = e, {
            form: n,
            handleSubmit: a
        } = (0, f.default)(t, !1);
        T.default.flowStep(D.FlowType.ORGANIC_GUILD_TEMPLATES, D.CreateGuildSteps.GUILD_CREATE);
        let i = (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(g.Title, {
                className: M.header,
                children: L.default.Messages.GUILD_TEMPLATE_SETUP_DISCORD
            }), n, (0, s.jsx)(g.Button, {
                className: M.createButton,
                onClick: a,
                children: L.default.Messages.GUILD_TEMPLATE_CREATE_DISCORD
            })]
        });
        return (0, s.jsx)(v.default, {
            className: M.authBox,
            children: () => [(0, s.jsx)(I.default, {
                guildTemplate: t
            }, "template"), (0, s.jsx)("div", {
                className: M.formContainer,
                children: i
            }, "contents")]
        })
    }
}