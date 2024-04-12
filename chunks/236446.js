function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return U
        }
    }), s("47120");
    var n = s("735250"),
        a = s("470079"),
        l = s("803997"),
        i = s.n(l),
        r = s("512722"),
        u = s.n(r),
        o = s("442837"),
        d = s("362762"),
        c = s("409059"),
        f = s("659900"),
        E = s("962220"),
        I = s("473855"),
        _ = s("306453"),
        h = s("929809"),
        p = s("108427"),
        T = s("390885"),
        N = s("314897"),
        g = s("896797"),
        m = s("819570"),
        A = s("954824"),
        S = s("781428"),
        v = s("163671"),
        C = s("109894"),
        O = s("981631"),
        R = s("58346"),
        x = s("701476"),
        D = s("630724"),
        L = s("436620"),
        P = s("689938"),
        M = s("904163"),
        j = s("794711");
    o.default.initialize();
    class b extends a.PureComponent {
        componentDidMount() {
            (0, p.trackAppUIViewed)("guildTemplate"), !L.IS_APP_COMPATIBLE_BROWSER && A.default.launch("discord://" + O.Routes.GUILD_TEMPLATE(this.props.code), () => void 0)
        }
        componentDidUpdate(e) {
            this.props.code !== e.code && E.default.resolveGuildTemplate(this.props.code)
        }
        renderButton(e, t) {
            return L.IS_APP_COMPATIBLE_BROWSER ? (0, n.jsx)(m.Button, {
                className: j.marginTop40,
                onClick: t,
                children: e
            }) : (0, n.jsx)(m.IncompatibleBrowser, {
                className: j.marginTop40
            })
        }
        renderSpinner(e) {
            return (0, n.jsxs)(m.default, {
                children: [(0, n.jsx)(m.Title, {
                    children: e
                }), (0, n.jsx)(m.AuthSpinner, {})]
            })
        }
        renderInvalidGuildTemplate() {
            return (0, n.jsxs)(m.default, {
                children: [(0, n.jsx)(m.Image, {
                    src: s("167969"),
                    className: j.marginBottom8
                }), (0, n.jsx)(m.Title, {
                    className: i()(j.marginTop8, j.marginBottom8),
                    children: P.default.Messages.GUILD_TEMPLATE_INVALID_TITLE
                }), (0, n.jsx)(m.SubTitle, {
                    children: P.default.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE
                }), this.renderButton(P.default.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
            })
        }
        renderAppOpened() {
            return (0, n.jsxs)(m.default, {
                children: [(0, n.jsx)(m.Title, {
                    className: j.marginBottom8,
                    children: P.default.Messages.APP_OPENED_TITLE
                }), (0, n.jsx)(m.SubTitle, {
                    children: P.default.Messages.APP_OPENED_BODY
                }), this.renderButton(P.default.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
            })
        }
        renderAuthenticatedOrDownload() {
            let {
                guildTemplate: e
            } = this.props;
            return (u()(null != e, "guild template must not be null"), e.state === R.GuildTemplateStates.RESOLVING) ? (0, n.jsx)(m.default, {
                className: M.authBox,
                children: (0, n.jsx)(_.default, {
                    guildTemplate: e
                })
            }) : (0, n.jsx)(B, {
                guildTemplate: e
            })
        }
        renderContinue() {
            return (0, n.jsxs)(m.default, {
                children: [(0, n.jsx)(m.Title, {
                    children: P.default.Messages.APP_NOT_OPENED
                }), this.renderButton(P.default.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
            })
        }
        render() {
            let {
                guildTemplate: e,
                nativeAppState: t,
                authenticated: s,
                transitionTo: a,
                location: l
            } = this.props;
            if (null == e) return this.renderSpinner(P.default.Messages.LOADING);
            if (t === O.NativeAppStates.OPEN) return this.renderAppOpened();
            if (t === O.NativeAppStates.OPENING) return this.renderSpinner(P.default.Messages.APP_OPENING);
            switch (e.state) {
                case R.GuildTemplateStates.RESOLVING:
                    return this.renderSpinner(P.default.Messages.APP_OPENING);
                case R.GuildTemplateStates.RESOLVED:
                    if (s || !L.IS_APP_COMPATIBLE_BROWSER) return this.renderAuthenticatedOrDownload();
                    if (this.props.login) return (0, n.jsx)(S.default, {
                        guildTemplate: e,
                        transitionTo: a,
                        location: l
                    });
                    else return (0, n.jsx)(C.default, {
                        guildTemplate: e,
                        transitionTo: a,
                        location: l,
                        onRegister: () => {
                            (0, h.setNewUser)(x.NewUserTypes.ORGANIC_REGISTERED_GUILD_TEMPLATE), T.default.flowStart(D.FlowType.ORGANIC_GUILD_TEMPLATES, D.RegistrationSteps.NUF_STARTED)
                        }
                    });
                case R.GuildTemplateStates.EXPIRED:
                    return this.renderInvalidGuildTemplate();
                default:
                    return null
            }
        }
        constructor(...e) {
            var t, s, n;
            super(...e), t = this, s = "handleContinue", n = () => {
                let {
                    defaultRoute: e,
                    transitionTo: t
                } = this.props;
                t(e)
            }, s in t ? Object.defineProperty(t, s, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[s] = n
        }
    }

    function U(e) {
        let t = {
            guildTemplate: (0, o.useStateFromStores)([c.default], () => c.default.getGuildTemplate(e.code)),
            nativeAppState: (0, o.useStateFromStores)([d.default], () => d.default.getState(e.code)),
            authenticated: (0, o.useStateFromStores)([N.default], () => N.default.isAuthenticated()),
            defaultRoute: (0, o.useStateFromStores)([g.default], () => g.default.defaultRoute)
        };
        return (0, n.jsx)(b, {
            ...e,
            ...t
        })
    }

    function B(e) {
        let {
            guildTemplate: t
        } = e, {
            form: s,
            handleSubmit: a
        } = (0, f.default)(t, !1);
        T.default.flowStep(D.FlowType.ORGANIC_GUILD_TEMPLATES, D.CreateGuildSteps.GUILD_CREATE);
        let l = (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(m.Title, {
                className: M.header,
                children: P.default.Messages.GUILD_TEMPLATE_SETUP_DISCORD
            }), s, (0, n.jsx)(m.Button, {
                className: M.createButton,
                onClick: a,
                children: P.default.Messages.GUILD_TEMPLATE_CREATE_DISCORD
            })]
        });
        return (0, n.jsx)(v.default, {
            className: M.authBox,
            children: () => [(0, n.jsx)(I.default, {
                guildTemplate: t
            }, "template"), (0, n.jsx)("div", {
                className: M.formContainer,
                children: l
            }, "contents")]
        })
    }
}