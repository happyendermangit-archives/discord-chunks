function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return eu
        }
    }), n("757143"), n("47120"), n("627341");
    var s, a = n("735250"),
        i = n("470079"),
        r = n("803997"),
        l = n.n(r),
        o = n("593473"),
        u = n("278074"),
        d = n("990547"),
        c = n("442837"),
        f = n("846519"),
        h = n("481060"),
        g = n("893776"),
        E = n("899370"),
        m = n("224841"),
        p = n("13430"),
        _ = n("213609"),
        S = n("882037"),
        R = n("201207"),
        A = n("481230"),
        N = n("853268"),
        T = n("639946"),
        I = n("616952"),
        C = n("792766"),
        O = n("692483"),
        v = n("100159"),
        L = n("473855"),
        x = n("726745"),
        b = n("929809"),
        y = n("541692"),
        M = n("986197"),
        D = n("135200"),
        P = n("219496"),
        U = n("794099"),
        G = n("807369"),
        w = n("180529"),
        j = n("108427"),
        k = n("314897"),
        B = n("480294"),
        F = n("896797"),
        H = n("819570"),
        W = n("292937"),
        V = n("626135"),
        Y = n("585483"),
        K = n("70956"),
        z = n("624138"),
        q = n("481153"),
        Z = n("588705"),
        Q = n("163671"),
        J = n("981631"),
        X = n("355142"),
        $ = n("188785"),
        ee = n("701476"),
        et = n("801461"),
        en = n("689938"),
        es = n("731608"),
        ea = n("794711");

    function ei(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    c.default.initialize();
    let er = /\.$/,
        el = e => Array.isArray(e) ? e.map(e => e.replace(er, "")).join(". ").trim() : e;
    class eo extends(s = i.PureComponent) {
        get registrationSource() {
            let {
                giftCode: e,
                guildTemplate: t,
                invite: n
            } = this.props;
            if (null != e) return "gift";
            if (null != t) return "guild_template";
            if (null != n) {
                if (null != n.guild) return "guild_invite";
                if (null != n.channel) return "dm_invite";
                else if (null != n.inviter) return "friend_invite"
            }
            return null
        }
        hasConsent() {
            let {
                consentRequired: e
            } = this.props, {
                consent: t
            } = this.state;
            return null != e && t
        }
        componentDidMount() {
            this.redirectIfAuthenticated(), R.default.trackExposure({
                location: "0ba758_1"
            });
            let {
                giftCodeSKU: e,
                invite: t
            } = this.props;
            V.default.track(J.AnalyticEvents.REGISTER_VIEWED, {
                location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
                registration_source: this.registrationSource,
                ...null != e ? (0, v.default)(e, !1, !1) : {}
            }, {
                flush: !0
            }), null == this.props.consentRequired && g.default.getLocationMetadata(), (0, j.trackAppUIViewed)("register")
        }
        componentWillUnmount() {
            this._retryTimer.stop()
        }
        static getDerivedStateFromProps(e, t) {
            let {
                consentRequired: n
            } = e, {
                consentRequiredProp: s
            } = t;
            return null == s && null != n ? {
                consent: !n,
                consentRequiredProp: n
            } : {
                consentRequiredProp: n
            }
        }
        componentDidUpdate(e, t) {
            let {
                apiErrors: n,
                authenticated: s,
                isUnderage: a,
                invite: i,
                onChangeStep: r
            } = this.props, {
                parsedDateOfBirth: l
            } = this.state;
            (e.apiErrors !== n || t.parsedDateOfBirth !== l) && (this.hasError("email") || this.hasError("phone") ? null != this.emailRef && this.emailRef.focus() : this.hasError("username") ? null != this.usernameRef && this.usernameRef.focus() : this.hasError("global_name") ? null != this.globalNameRef && this.globalNameRef.focus() : this.hasError("password") ? null != this.passwordRef && this.passwordRef.focus() : null == this.state.parsedDateOfBirth ? null != this.dateOfBirthRef.current && this.dateOfBirthRef.current.focus() : this.hasError("retry_after") && "number" == typeof this.props.apiErrors.retry_after && (this.setState({
                isRateLimited: !0
            }), this._retryTimer.start(this.props.apiErrors.retry_after * K.default.Millis.SECOND, () => {
                this.setState({
                    isRateLimited: !1
                })
            }))), s && !e.authenticated && ((0, b.setNewUser)(ee.NewUserTypes.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
            let o = X.RegistrationSteps.FULL;
            a || this.hasError("date_of_birth") ? o = X.RegistrationSteps.AGE_GATE : null != i && (null != i.guild || null != i.channel) && (o = X.RegistrationSteps.INVITE), r(o)
        }
        redirectIfAuthenticated() {
            let {
                authenticated: e,
                transitionTo: t,
                redirectTo: n
            } = this.props;
            e && t(null != n ? n : F.default.defaultRoute)
        }
        async handleRegister() {
            let {
                email: e,
                username: t,
                globalName: n,
                password: s,
                consent: a,
                parsedDateOfBirth: i
            } = this.state, {
                invite: r,
                guildTemplate: l,
                giftCode: o,
                onRegister: u,
                usernameSuggestion: d,
                isMobileWebInviteRegistration: c
            } = this.props, f = null != r ? r.code : null, h = null != o ? o.skuId : null, g = S.usePromoEmailConsentStore.getState(), E = (0, z.isNullOrEmpty)(d) ? null : t === d, m = $.CONFERENCE_MODE_ENABLED ? await (0, O.formatUsername)(t) : t, p = $.CONFERENCE_MODE_ENABLED ? await (0, O.formatUsername)(n) : n;
            Y.ComponentDispatch.dispatch(J.ComponentActions.WAVE_EMPHASIZE);
            try {
                c || null == r ? await (0, A.registerFull)({
                    email: e,
                    username: m,
                    globalName: p,
                    consent: a,
                    password: s,
                    invite: f,
                    usedUsernameSuggestion: E,
                    guildTemplateCode: null == l ? void 0 : l.code,
                    giftCodeSKUId: h,
                    birthday: i,
                    promoEmailConsent: g.required ? g : null
                }) : await (0, A.default)({
                    consent: a,
                    invite: f,
                    giftCodeSKUId: h,
                    usedUsernameSuggestion: E,
                    globalName: p
                }), null == u || u()
            } catch (e) {}
        }
        hasError(e) {
            return null != this.props.apiErrors[e]
        }
        renderConsentComponents() {
            let {
                consent: e
            } = this.state, {
                consentRequired: t,
                registrationCopyExperimentConfig: {
                    enableNewCopy: n,
                    hasProminentCopy: s
                }
            } = this.props, i = null, r = null;
            return t ? r = (0, a.jsx)(N.default, {
                value: e,
                onChange: e => this.setState({
                    consent: e
                }),
                subText: en.default.Messages.TERMS_PRIVACY_OPT_IN.format({
                    termsURL: J.MarketingURLs.TERMS,
                    privacyURL: J.MarketingURLs.PRIVACY
                })
            }) : i = (0, a.jsx)(H.SubText, {
                isProminent: !!s,
                className: ea.marginTop8,
                children: n ? en.default.Messages.TERMS_PRIVACY_ON_REGISTER.format({
                    buttonText: en.default.Messages.CONTINUE,
                    termsURL: J.MarketingURLs.TERMS,
                    privacyURL: J.MarketingURLs.PRIVACY
                }) : en.default.Messages.TERMS_PRIVACY.format({
                    termsURL: J.MarketingURLs.TERMS,
                    privacyURL: J.MarketingURLs.PRIVACY
                })
            }), {
                subText: i,
                consentText: r
            }
        }
        renderInviteResolving() {
            let {
                authBoxClassName: e
            } = this.props, t = e => {
                this.setState({
                    globalName: e
                })
            }, n = this.state.globalName;
            return (0, a.jsxs)(H.default, {
                className: e,
                children: [(0, a.jsx)(Z.InviteResolvingHeader, {}), (0, a.jsxs)(H.Block, {
                    className: ea.marginTop40,
                    children: [(0, a.jsx)(h.FormTitle, {
                        children: en.default.Messages.FORM_LABEL_USERNAME
                    }), (0, a.jsx)(h.Tooltip, {
                        text: en.default.Messages.AUTH_USERNAME_TOOLTIP,
                        position: "right",
                        color: h.Tooltip.Colors.BRAND,
                        children: e => {
                            let {
                                onMouseEnter: s,
                                onMouseLeave: i
                            } = e;
                            return (0, a.jsx)(H.Input, {
                                autoFocus: !0,
                                className: ea.marginBottom8,
                                name: "username",
                                value: n,
                                placeholder: en.default.Messages.FORM_PLACEHOLDER_USERNAME,
                                onChange: t,
                                onMouseEnter: s,
                                onMouseLeave: i
                            })
                        }
                    }), (0, a.jsx)(H.Button, {
                        className: ea.marginTop20,
                        disabled: !0,
                        children: en.default.Messages.CONTINUE
                    }), (0, a.jsx)(H.SubText, {
                        disabled: !0,
                        className: ea.marginTop8,
                        children: en.default.Messages.TERMS_PRIVACY.format({
                            termsURL: J.MarketingURLs.TERMS,
                            privacyURL: J.MarketingURLs.PRIVACY
                        })
                    }), $.CONFERENCE_MODE_ENABLED ? null : (0, a.jsx)(H.Button, {
                        look: H.Button.Looks.LINK,
                        color: H.Button.Colors.LINK,
                        disabled: !0,
                        className: ea.marginTop20,
                        children: en.default.Messages.ALREADY_HAVE_ACCOUNT
                    })]
                })]
            })
        }
        renderInviteHeader() {
            let {
                invite: e
            } = this.props;
            return (null == e ? void 0 : e.stage_instance) != null && null != e.guild ? (0, a.jsx)(C.default, {
                stageInstance: e.stage_instance,
                guild: e.guild
            }) : (null == e ? void 0 : e.guild_scheduled_event) != null ? (0, a.jsx)(T.GuildScheduledEventInviteHeader, {
                channel: e.channel,
                guildScheduledEvent: e.guild_scheduled_event
            }) : (0, a.jsx)(Z.default, {
                invite: e
            })
        }
        renderInviteButton() {
            let {
                invite: e,
                registering: t,
                consentRequired: n
            } = this.props, {
                consent: s
            } = this.state, i = H.Button.Colors.BRAND, r = en.default.Messages.CONTINUE;
            return (null == e ? void 0 : e.stage_instance) != null && (i = H.Button.Colors.GREEN, r = en.default.Messages.INSTANT_INVITE_ACCEPT_STAGE), (0, a.jsx)(h.Tooltip, {
                text: !s && n ? en.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
                children: e => (0, a.jsx)("div", {
                    className: ea.marginTop20,
                    ...e,
                    children: (0, a.jsx)(H.Button, {
                        type: "submit",
                        submitting: t,
                        disabled: !this.hasConsent(),
                        color: i,
                        children: r
                    })
                })
            })
        }
        renderInvite() {
            let {
                invite: e,
                authBoxClassName: t,
                apiErrors: {
                    username: n,
                    global_name: s
                }
            } = this.props, {
                subText: i,
                consentText: r
            } = this.renderConsentComponents(), l = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null, o = e => {
                this.setState({
                    globalName: e
                })
            }, u = this.state.globalName;
            return (0, a.jsxs)("div", {
                children: [(0, a.jsxs)(H.default, {
                    onSubmit: this.handleSubmit,
                    tag: "form",
                    className: t,
                    children: [this.renderInviteHeader(), l ? (0, a.jsx)("div", {
                        className: es.divider
                    }) : null, (0, a.jsxs)(H.Block, {
                        className: l ? void 0 : ea.marginTop40,
                        children: [(0, a.jsx)(h.FormTitle, {
                            error: el(null != s ? s : n),
                            children: en.default.Messages.DISPLAY_NAME
                        }), (0, a.jsx)(h.Tooltip, {
                            text: en.default.Messages.AUTH_USERNAME_TOOLTIP,
                            position: "right",
                            color: h.Tooltip.Colors.BRAND,
                            children: e => {
                                let {
                                    onMouseEnter: t,
                                    onMouseLeave: i
                                } = e;
                                return (0, a.jsx)(H.Input, {
                                    autoFocus: !0,
                                    className: ea.marginBottom8,
                                    name: "global_name",
                                    value: u,
                                    placeholder: en.default.Messages.FORM_PLACEHOLDER_USERNAME,
                                    onChange: o,
                                    error: null != n || null != s ? "" : null,
                                    onMouseEnter: t,
                                    onMouseLeave: i
                                })
                            }
                        }), (0, a.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: en.default.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
                        }), this.renderInviteButton(), i, r, $.CONFERENCE_MODE_ENABLED ? null : (0, a.jsx)(H.Button, {
                            look: H.Button.Looks.LINK,
                            color: H.Button.Colors.LINK,
                            onClick: this.handleGotoLogin,
                            className: ea.marginTop20,
                            children: en.default.Messages.ALREADY_HAVE_ACCOUNT
                        })]
                    })]
                }), null != e && l ? (0, a.jsx)(H.default, {
                    className: ea.marginTop20,
                    children: (0, a.jsx)(C.StageInviteFooter, {
                        guild: e.guild,
                        onlineCount: e.approximate_presence_count
                    })
                }) : null]
            })
        }
        renderErrorMessage() {
            let {
                apiErrors: {
                    message: e
                }
            } = this.props;
            return "string" != typeof e ? null : (0, a.jsx)(H.SubText, {
                className: l()(ea.marginTop20, es.errorMessage),
                children: e
            })
        }
        renderFull(e, t) {
            let {
                email: n,
                username: s,
                globalName: r,
                password: o,
                consent: u,
                parsedDateOfBirth: d,
                globalNameFocused: c,
                emailClientError: f,
                usernameClientError: g,
                passwordClientError: E,
                dateOfBirthClientError: m
            } = this.state, {
                registering: _,
                consentRequired: S,
                isMobileWebInviteRegistration: R,
                uniqueUsernameRegistrationConfig: {
                    suggestions: A
                },
                authBoxClassName: N,
                apiErrors: {
                    email: T,
                    username: C,
                    global_name: O,
                    password: v,
                    date_of_birth: L
                } = {},
                hasLoggedInAccounts: x,
                registrationCopyExperimentConfig: {
                    hasCopyAboveButton: b
                }
            } = this.props, {
                subText: y,
                consentText: P
            } = this.renderConsentComponents(), U = this.renderErrorMessage(), G = (0, a.jsx)(h.Tooltip, {
                text: !u && S ? en.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
                children: e => (0, a.jsx)("div", {
                    className: ea.marginTop20,
                    ...e,
                    children: (0, a.jsx)(H.Button, {
                        type: "submit",
                        submitting: _,
                        disabled: !this.hasConsent() || this.state.isRateLimited,
                        children: en.default.Messages.CONTINUE
                    })
                })
            }), j = async () => {
                this.setState({
                    usernameFocused: !0
                }), A && r.length > 0 && !D.default.wasRegistrationSuggestionFetched(r) && await M.default.fetchSuggestionsRegistration(r)
            }, k = null != e ? (0, a.jsx)(i.Fragment, {
                children: e()
            }, "custom-header") : (0, a.jsx)(H.Title, {
                children: en.default.Messages.REGISTER_TITLE
            }, "title"), B = (0, a.jsxs)(H.Block, {
                className: ea.marginTop20,
                children: [(0, a.jsx)(H.Input, {
                    autoFocus: !0,
                    className: ea.marginBottom20,
                    label: en.default.Messages.FORM_LABEL_EMAIL,
                    name: "email",
                    value: n,
                    onChange: e => this.setState({
                        email: e,
                        emailClientError: 0 === e.length ? en.default.Messages.REQUIRED : null
                    }),
                    error: null != f ? f : el(T),
                    type: "email",
                    setRef: e => {
                        this.emailRef = e
                    },
                    required: !0
                }), (0, a.jsx)(H.Input, {
                    label: en.default.Messages.DISPLAY_NAME,
                    className: ea.marginBottom20,
                    name: "global_name",
                    value: r,
                    onChange: e => this.setState({
                        globalName: e
                    }),
                    error: el(O),
                    maxLength: et.MAX_DISPLAY_NAME_LENGTH,
                    setRef: e => {
                        this.globalNameRef = e
                    },
                    onFocus: () => this.setState({
                        globalNameFocused: !0
                    }),
                    onBlur: () => this.setState({
                        globalNameFocused: !1
                    })
                }), (0, a.jsx)(w.default, {
                    show: c,
                    top: -12,
                    bottom: 20,
                    children: (0, a.jsx)(h.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        children: en.default.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
                    })
                }), (0, a.jsxs)("div", {
                    onBlur: () => this.setState({
                        usernameFocused: !1
                    }),
                    onFocus: j,
                    tabIndex: -1,
                    children: [(0, a.jsx)(H.Input, {
                        label: en.default.Messages.FORM_LABEL_USERNAME,
                        className: ea.marginBottom20,
                        name: "username",
                        value: s,
                        onChange: e => {
                            this.setState({
                                username: e.toLocaleLowerCase(),
                                usernameClientError: 0 === e.length ? en.default.Messages.REQUIRED : null
                            })
                        },
                        error: null != g ? g : el(C),
                        setRef: e => {
                            this.usernameRef = e
                        },
                        required: !0
                    }), this.renderUsernameValidation()]
                }), (0, a.jsx)(H.Input, {
                    label: en.default.Messages.FORM_LABEL_PASSWORD,
                    name: "password",
                    value: o,
                    onChange: e => this.setState({
                        password: e,
                        passwordClientError: 0 === e.length ? en.default.Messages.REQUIRED : null
                    }),
                    error: null != E ? E : el(v),
                    type: "password",
                    setRef: e => {
                        this.passwordRef = e
                    },
                    required: !0
                }), (0, a.jsx)(p.default, {
                    label: en.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
                    wrapperClassName: ea.marginTop20,
                    name: "date_of_birth",
                    onChange: this.handleBirthdayChange,
                    ref: this.dateOfBirthRef,
                    error: null != m ? m : el(L),
                    value: d,
                    required: !0
                }), b && y, (0, a.jsx)(I.default, {}), G, U, P, !b && y, $.CONFERENCE_MODE_ENABLED ? null : (0, a.jsx)(H.Button, {
                    look: R ? H.Button.Looks.FILLED : H.Button.Looks.LINK,
                    color: R ? H.Button.Colors.PRIMARY : H.Button.Colors.LINK,
                    onClick: this.handleGotoLogin,
                    className: ea.marginTop20,
                    children: en.default.Messages.ALREADY_HAVE_ACCOUNT
                })]
            });
            return t ? (0, a.jsx)(Q.default, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: l()(N, es.horizontalAuthBox),
                children: () => [k, (0, a.jsxs)("div", {
                    className: es.flex,
                    children: [(0, a.jsx)(H.Title, {
                        className: es.createAccountTemplateHeader,
                        children: en.default.Messages.REGISTER_TITLE
                    }), B]
                }, "register-title")]
            }) : (0, a.jsxs)(H.default, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: N,
                children: [x && !R ? (0, a.jsx)(H.Button, {
                    onClick: this.handleGotoLogin,
                    look: H.Button.Looks.LINK,
                    color: H.Button.Colors.PRIMARY,
                    className: es.goBackButton,
                    children: (0, a.jsxs)("div", {
                        className: es.content,
                        children: [(0, a.jsx)(W.default, {
                            width: 16,
                            height: 16,
                            className: es.caret
                        }), (0, a.jsx)(h.Text, {
                            variant: "text-md/normal",
                            children: en.default.Messages.AGE_GATE_GO_BACK
                        })]
                    })
                }) : null, k, B]
            })
        }
        render() {
            let {
                isUnderage: e,
                isMobileWebInviteRegistration: t
            } = this.props;
            if (e || this.hasError("date_of_birth")) return (0, a.jsx)(m.default, {});
            let {
                invite: n,
                giftCode: s,
                guildTemplate: i
            } = this.props, r = null != n && null == n.guild && null == n.channel && null != n.inviter;
            return null == n || r || t ? null != i ? this.renderFull(() => (0, a.jsx)(L.default, {
                guildTemplate: i
            }), !0) : null != s ? this.renderFull(() => (0, a.jsx)(q.default, {
                giftCode: s
            })) : null != n && r && n.state === J.InviteStates.RESOLVED && !t ? this.renderFull(() => (0, a.jsx)(Z.default, {
                invite: n,
                isRegister: !0
            })) : this.renderFull() : n.state === J.InviteStates.RESOLVING ? this.renderInviteResolving() : this.renderInvite()
        }
        constructor(e) {
            var t;
            super(e), ei(this, "emailRef", void 0), ei(this, "usernameRef", void 0), ei(this, "globalNameRef", void 0), ei(this, "passwordRef", void 0), ei(this, "dateOfBirthRef", i.createRef()), ei(this, "_retryTimer", new f.Timeout), ei(this, "handleGotoLogin", e => {
                let t;
                let {
                    email: n
                } = this.state, {
                    giftCode: s,
                    guildTemplate: a,
                    invite: i,
                    location: r,
                    onLoginStart: l,
                    redirectTo: u,
                    transitionTo: d,
                    isMobileWebInviteRegistration: c
                } = this.props;
                if (c) {
                    null == l || l(e);
                    return
                }
                let f = null != r ? (0, o.parse)(r.search) : {};
                null != i ? t = J.Routes.INVITE_LOGIN(i.code) : null != s ? t = J.Routes.GIFT_CODE_LOGIN(s.code) : null != a ? t = J.Routes.GUILD_TEMPLATE_LOGIN(a.code) : null != u ? (t = J.Routes.LOGIN, f.redirect_to = u) : (t = J.Routes.LOGIN, "" !== n && (f = {
                    email: n
                })), g.default.loginReset(), d(t, {
                    search: (0, o.stringify)(f)
                }), null == l || l(e), Y.ComponentDispatch.dispatch(J.ComponentActions.WAVE_EMPHASIZE)
            }), ei(this, "handleSubmit", e => {
                null == e || e.preventDefault();
                let {
                    email: t,
                    username: n,
                    password: s,
                    parsedDateOfBirth: a
                } = this.state, {
                    invite: i,
                    consentRequired: r
                } = this.props;
                if (null !== r) {
                    if (null == i) {
                        let e = !1;
                        if (0 === t.length && (this.setState({
                                emailClientError: en.default.Messages.REQUIRED
                            }), e = !0), 0 === n.length && (this.setState({
                                usernameClientError: en.default.Messages.REQUIRED
                            }), e = !0), 0 === s.length && (this.setState({
                                passwordClientError: en.default.Messages.REQUIRED
                            }), e = !0), null == a && (this.setState({
                                dateOfBirthClientError: en.default.Messages.REQUIRED
                            }), e = !0), e) return
                    }
                    this.handleRegister()
                }
            }), ei(this, "handleBirthdayChange", e => {
                this.setState({
                    parsedDateOfBirth: e
                }), null != e && this.setState({
                    dateOfBirthClientError: null
                })
            }), ei(this, "renderUsernameValidation", () => {
                let {
                    username: e,
                    globalName: t,
                    usernameFocused: n
                } = this.state, {
                    usernameSuggestion: s,
                    uniqueUsernameRegistrationConfig: {
                        livecheckEnabled: i
                    }
                } = this.props;
                return (0, a.jsx)(ed, {
                    username: e,
                    suggestion: s,
                    livecheckEnabled: i,
                    globalName: t,
                    isUsernameFocused: n,
                    onClickSuggestion: () => {
                        null != this.usernameRef && this.usernameRef.focus(), null != s && s.length > 0 && this.setState({
                            username: s
                        })
                    }
                })
            });
            let n = null != e.location ? (0, o.parse)(e.location.search) : {};
            this.state = {
                email: null !== (t = n.email) && void 0 !== t ? t : "",
                username: "",
                globalName: "",
                password: "",
                parsedDateOfBirth: null,
                emailClientError: null,
                usernameClientError: null,
                passwordClientError: null,
                dateOfBirthClientError: null,
                consent: !e.consentRequired,
                consentRequiredProp: e.consentRequired,
                isRateLimited: !1,
                globalNameFocused: !1,
                usernameFocused: !1
            }
        }
    }

    function eu(e) {
        let t = (0, c.useStateFromStoresObject)([B.default, k.default, E.default, y.default, x.default], () => ({
                consentRequired: B.default.getAuthenticationConsentRequired(),
                registering: k.default.getRegisterStatus() === J.RegistrationStates.REGISTERING,
                apiErrors: k.default.getErrors(),
                authenticated: k.default.isAuthenticated(),
                isUnderage: E.default.isUnderageAnonymous(),
                country: y.default.getCountryCode(),
                hasLoggedInAccounts: x.default.getHasLoggedInAccounts()
            })),
            n = (0, U.useUURegistrationExperiment)(),
            s = (0, c.useStateFromStores)([D.default], () => D.default.registrationUsernameSuggestion()),
            [r, l] = i.useState(X.RegistrationSteps.FULL);
        return (0, _.default)({
            type: d.ImpressionTypes.VIEW,
            name: d.ImpressionNames.USER_REGISTRATION,
            properties: {
                impression_group: d.ImpressionGroups.USER_REGISTRATION_FLOW,
                step: r
            }
        }, {}, [r]), (0, a.jsx)(eo, {
            onChangeStep: e => l(e),
            registrationCopyExperimentConfig: R.default.getCurrentConfig({
                location: "0ba758_2"
            }, {
                autoTrackExposure: !1
            }),
            uniqueUsernameRegistrationConfig: n,
            usernameSuggestion: s,
            ...e,
            ...t
        })
    }

    function ed(e) {
        let t, {
                username: n,
                suggestion: s,
                globalName: i,
                livecheckEnabled: r,
                isUsernameFocused: l,
                onClickSuggestion: o
            } = e,
            d = (0, G.useUsernameStatus)(n, r, !0),
            c = r && n.length > 0;
        return t = c ? (0, u.match)(d).with({
            type: P.NameValidationState.ERROR,
            message: u.P.select()
        }, e => (0, a.jsx)(h.Text, {
            className: es.messageNegative,
            variant: "text-sm/normal",
            children: e
        })).with({
            type: P.NameValidationState.AVAILABLE,
            message: u.P.select()
        }, e => (0, a.jsx)(h.Text, {
            className: es.messagePositive,
            variant: "text-sm/normal",
            children: e
        })).otherwise(() => (0, a.jsx)(h.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: en.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
        })) : null != s && s.length > 0 && i.length > 0 ? (0, a.jsx)(h.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: en.default.Messages.UU_REGISTER_SUGGESTION.format({
                suggestion: s,
                nameOnClick: o
            })
        }) : (0, a.jsx)(h.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: en.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
        }), (0, a.jsx)(w.default, {
            show: c && (null == d ? void 0 : d.type) === P.NameValidationState.ERROR || l,
            top: -12,
            bottom: 20,
            children: t
        })
    }
    ei(eo, "defaultProps", {
        giftCodeResolved: !1,
        transitionTo: e => n.g.location.assign(e)
    })
}