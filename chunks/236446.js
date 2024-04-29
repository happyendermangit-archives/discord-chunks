function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return b
        }
    }), n("47120");
    var s = n("735250"),
        a = n("470079"),
        l = n("120356"),
        i = n.n(l),
        r = n("512722"),
        u = n.n(r),
        o = n("442837"),
        d = n("362762"),
        c = n("409059"),
        f = n("659900"),
        E = n("962220"),
        _ = n("473855"),
        I = n("306453"),
        p = n("929809"),
        h = n("108427"),
        T = n("390885"),
        N = n("314897"),
        g = n("896797"),
        m = n("819570"),
        A = n("954824"),
        S = n("781428"),
        v = n("163671"),
        C = n("423527"),
        O = n("981631"),
        R = n("58346"),
        x = n("701476"),
        L = n("630724"),
        M = n("436620"),
        D = n("689938"),
        P = n("146722"),
        j = n("611273");
    o.default.initialize();
    class U extends a.PureComponent {
        componentDidMount() {
            (0, h.trackAppUIViewed)("guildTemplate"), !M.IS_APP_COMPATIBLE_BROWSER && A.default.launch("discord://" + O.Routes.GUILD_TEMPLATE(this.props.code), () => void 0)
        }
        componentDidUpdate(e) {
            this.props.code !== e.code && E.default.resolveGuildTemplate(this.props.code)
        }
        renderButton(e, t) {
            return M.IS_APP_COMPATIBLE_BROWSER ? (0, s.jsx)(m.Button, {
                className: j.marginTop40,
                onClick: t,
                children: e
            }) : (0, s.jsx)(m.IncompatibleBrowser, {
                className: j.marginTop40
            })
        }
        renderSpinner(e) {
            return (0, s.jsxs)(m.default, {
                children: [(0, s.jsx)(m.Title, {
                    children: e
                }), (0, s.jsx)(m.AuthSpinner, {})]
            })
        }
        renderInvalidGuildTemplate() {
            return (0, s.jsxs)(m.default, {
                children: [(0, s.jsx)(m.Image, {
                    src: n("167969"),
                    className: j.marginBottom8
                }), (0, s.jsx)(m.Title, {
                    className: i()(j.marginTop8, j.marginBottom8),
                    children: D.default.Messages.GUILD_TEMPLATE_INVALID_TITLE
                }), (0, s.jsx)(m.SubTitle, {
                    children: D.default.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE
                }), this.renderButton(D.default.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
            })
        }
        renderAppOpened() {
            return (0, s.jsxs)(m.default, {
                children: [(0, s.jsx)(m.Title, {
                    className: j.marginBottom8,
                    children: D.default.Messages.APP_OPENED_TITLE
                }), (0, s.jsx)(m.SubTitle, {
                    children: D.default.Messages.APP_OPENED_BODY
                }), this.renderButton(D.default.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
            })
        }
        renderAuthenticatedOrDownload() {
            let {
                guildTemplate: e
            } = this.props;
            return (u()(null != e, "guild template must not be null"), e.state === R.GuildTemplateStates.RESOLVING) ? (0, s.jsx)(m.default, {
                className: P.authBox,
                children: (0, s.jsx)(I.default, {
                    guildTemplate: e
                })
            }) : (0, s.jsx)(G, {
                guildTemplate: e
            })
        }
        renderContinue() {
            return (0, s.jsxs)(m.default, {
                children: [(0, s.jsx)(m.Title, {
                    children: D.default.Messages.APP_NOT_OPENED
                }), this.renderButton(D.default.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
            })
        }
        render() {
            let {
                guildTemplate: e,
                nativeAppState: t,
                authenticated: n,
                transitionTo: a,
                location: l
            } = this.props;
            if (null == e) return this.renderSpinner(D.default.Messages.LOADING);
            if (t === O.NativeAppStates.OPEN) return this.renderAppOpened();
            if (t === O.NativeAppStates.OPENING) return this.renderSpinner(D.default.Messages.APP_OPENING);
            switch (e.state) {
                case R.GuildTemplateStates.RESOLVING:
                    return this.renderSpinner(D.default.Messages.APP_OPENING);
                case R.GuildTemplateStates.RESOLVED:
                    if (n || !M.IS_APP_COMPATIBLE_BROWSER) return this.renderAuthenticatedOrDownload();
                    if (this.props.login) return (0, s.jsx)(S.default, {
                        guildTemplate: e,
                        transitionTo: a,
                        location: l
                    });
                    else return (0, s.jsx)(C.default, {
                        guildTemplate: e,
                        transitionTo: a,
                        location: l,
                        onRegister: () => {
                            (0, p.setNewUser)(x.NewUserTypes.ORGANIC_REGISTERED_GUILD_TEMPLATE), T.default.flowStart(L.FlowType.ORGANIC_GUILD_TEMPLATES, L.RegistrationSteps.NUF_STARTED)
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

    function b(e) {
        let t = {
            guildTemplate: (0, o.useStateFromStores)([c.default], () => c.default.getGuildTemplate(e.code)),
            nativeAppState: (0, o.useStateFromStores)([d.default], () => d.default.getState(e.code)),
            authenticated: (0, o.useStateFromStores)([N.default], () => N.default.isAuthenticated()),
            defaultRoute: (0, o.useStateFromStores)([g.default], () => g.default.defaultRoute)
        };
        return (0, s.jsx)(U, {
            ...e,
            ...t
        })
    }

    function G(e) {
        let {
            guildTemplate: t
        } = e, {
            form: n,
            handleSubmit: a
        } = (0, f.default)(t, !1);
        T.default.flowStep(L.FlowType.ORGANIC_GUILD_TEMPLATES, L.CreateGuildSteps.GUILD_CREATE);
        let l = (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(m.Title, {
                className: P.header,
                children: D.default.Messages.GUILD_TEMPLATE_SETUP_DISCORD
            }), n, (0, s.jsx)(m.Button, {
                className: P.createButton,
                onClick: a,
                children: D.default.Messages.GUILD_TEMPLATE_CREATE_DISCORD
            })]
        });
        return (0, s.jsx)(v.default, {
            className: P.authBox,
            children: () => [(0, s.jsx)(_.default, {
                guildTemplate: t
            }, "template"), (0, s.jsx)("div", {
                className: P.formContainer,
                children: l
            }, "contents")]
        })
    }
}