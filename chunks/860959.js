function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return el
        }
    }), n("781738"), n("222007"), n("794252");
    var s = n("37983"),
        a = n("884691"),
        i = n("414456"),
        r = n.n(i),
        l = n("730290"),
        o = n("506838"),
        u = n("759843"),
        d = n("446674"),
        c = n("862337"),
        f = n("77078"),
        h = n("437822"),
        E = n("678916"),
        g = n("816540"),
        m = n("208266"),
        _ = n("428958"),
        p = n("307439"),
        R = n("765825"),
        S = n("715570"),
        A = n("486252"),
        T = n("378020"),
        N = n("980976"),
        I = n("534438"),
        C = n("946859"),
        O = n("791160"),
        v = n("434824"),
        L = n("770032"),
        x = n("165926"),
        M = n("25033"),
        y = n("255403"),
        b = n("2581"),
        D = n("644417"),
        U = n("697543"),
        G = n("79345"),
        P = n("447997"),
        k = n("970366"),
        B = n("271938"),
        j = n("350522"),
        F = n("476108"),
        w = n("124969"),
        H = n("980428"),
        W = n("599110"),
        V = n("659500"),
        Y = n("718517"),
        K = n("159885"),
        z = n("404432"),
        q = n("719451"),
        Z = n("598489"),
        Q = n("49111"),
        X = n("771848"),
        J = n("492397"),
        $ = n("56235"),
        ee = n("935583"),
        et = n("782340"),
        en = n("40571"),
        es = n("890957");
    d.default.initialize();
    let ea = /\.$/,
        ei = e => Array.isArray(e) ? e.map(e => e.replace(ea, "")).join(". ").trim() : e;
    class er extends a.PureComponent {
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
            W.default.track(Q.AnalyticEvents.REGISTER_VIEWED, {
                location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
                registration_source: this.registrationSource,
                ...null != e ? (0, O.default)(e, !1, !1) : {}
            }, {
                flush: !0
            }), null == this.props.consentRequired && h.default.getLocationMetadata(), (0, k.trackAppUIViewed)("register")
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
            }), this._retryTimer.start(this.props.apiErrors.retry_after * Y.default.Millis.SECOND, () => {
                this.setState({
                    isRateLimited: !1
                })
            }))), s && !e.authenticated && ((0, x.setNewUser)($.NewUserTypes.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
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
            } = this.props, f = null != r ? r.code : null, h = null != o ? o.skuId : null, E = p.usePromoEmailConsentStore.getState(), g = (0, K.isNullOrEmpty)(d) ? null : t === d, m = J.CONFERENCE_MODE_ENABLED ? await (0, C.formatUsername)(t) : t;
            V.ComponentDispatch.dispatch(Q.ComponentActions.WAVE_EMPHASIZE);
            try {
                c || null == r ? await (0, S.registerFull)({
                    email: e,
                    username: m,
                    globalName: n,
                    consent: a,
                    password: s,
                    invite: f,
                    usedUsernameSuggestion: g,
                    guildTemplateCode: null == l ? void 0 : l.code,
                    giftCodeSKUId: h,
                    birthday: i,
                    promoEmailConsent: E.required ? E : null
                }) : await (0, S.default)({
                    consent: a,
                    invite: f,
                    giftCodeSKUId: h,
                    usedUsernameSuggestion: g,
                    globalName: n
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
                    hasProminentCopy: a
                }
            } = this.props, i = null, r = null;
            return t ? r = (0, s.jsx)(A.default, {
                value: e,
                onChange: e => this.setState({
                    consent: e
                }),
                subText: et.default.Messages.TERMS_PRIVACY_OPT_IN.format({
                    termsURL: Q.MarketingURLs.TERMS,
                    privacyURL: Q.MarketingURLs.PRIVACY
                })
            }) : i = (0, s.jsx)(w.SubText, {
                isProminent: !!a,
                className: es.marginTop8,
                children: n ? et.default.Messages.TERMS_PRIVACY_ON_REGISTER.format({
                    buttonText: et.default.Messages.CONTINUE,
                    termsURL: Q.MarketingURLs.TERMS,
                    privacyURL: Q.MarketingURLs.PRIVACY
                }) : et.default.Messages.TERMS_PRIVACY.format({
                    termsURL: Q.MarketingURLs.TERMS,
                    privacyURL: Q.MarketingURLs.PRIVACY
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
            return (0, s.jsxs)(w.default, {
                className: e,
                children: [(0, s.jsx)(q.InviteResolvingHeader, {}), (0, s.jsxs)(w.Block, {
                    className: es.marginTop40,
                    children: [(0, s.jsx)(f.FormTitle, {
                        children: et.default.Messages.FORM_LABEL_USERNAME
                    }), (0, s.jsx)(f.Tooltip, {
                        text: et.default.Messages.AUTH_USERNAME_TOOLTIP,
                        position: "right",
                        color: f.Tooltip.Colors.BRAND,
                        children: e => {
                            let {
                                onMouseEnter: a,
                                onMouseLeave: i
                            } = e;
                            return (0, s.jsx)(w.Input, {
                                autoFocus: !0,
                                className: es.marginBottom8,
                                name: "username",
                                value: n,
                                placeholder: et.default.Messages.FORM_PLACEHOLDER_USERNAME,
                                onChange: t,
                                onMouseEnter: a,
                                onMouseLeave: i
                            })
                        }
                    }), (0, s.jsx)(w.Button, {
                        className: es.marginTop20,
                        disabled: !0,
                        children: et.default.Messages.CONTINUE
                    }), (0, s.jsx)(w.SubText, {
                        disabled: !0,
                        className: es.marginTop8,
                        children: et.default.Messages.TERMS_PRIVACY.format({
                            termsURL: Q.MarketingURLs.TERMS,
                            privacyURL: Q.MarketingURLs.PRIVACY
                        })
                    }), J.CONFERENCE_MODE_ENABLED ? null : (0, s.jsx)(w.Button, {
                        look: w.Button.Looks.LINK,
                        color: w.Button.Colors.LINK,
                        disabled: !0,
                        className: es.marginTop20,
                        children: et.default.Messages.ALREADY_HAVE_ACCOUNT
                    })]
                })]
            })
        }
        renderInviteHeader() {
            let {
                invite: e
            } = this.props;
            return (null == e ? void 0 : e.stage_instance) != null && null != e.guild ? (0, s.jsx)(I.default, {
                stageInstance: e.stage_instance,
                guild: e.guild
            }) : (null == e ? void 0 : e.guild_scheduled_event) != null ? (0, s.jsx)(T.GuildScheduledEventInviteHeader, {
                channel: e.channel,
                guildScheduledEvent: e.guild_scheduled_event
            }) : (0, s.jsx)(q.default, {
                invite: e
            })
        }
        renderInviteButton() {
            let {
                invite: e,
                registering: t,
                consentRequired: n
            } = this.props, {
                consent: a
            } = this.state, i = w.Button.Colors.BRAND, r = et.default.Messages.CONTINUE;
            return (null == e ? void 0 : e.stage_instance) != null && (i = w.Button.Colors.GREEN, r = et.default.Messages.INSTANT_INVITE_ACCEPT_STAGE), (0, s.jsx)(f.Tooltip, {
                text: !a && n ? et.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
                children: e => (0, s.jsx)("div", {
                    className: es.marginTop20,
                    ...e,
                    children: (0, s.jsx)(w.Button, {
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
                    global_name: a
                }
            } = this.props, {
                subText: i,
                consentText: r
            } = this.renderConsentComponents(), l = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null, o = e => {
                this.setState({
                    globalName: e
                })
            }, u = this.state.globalName;
            return (0, s.jsxs)("div", {
                children: [(0, s.jsxs)(w.default, {
                    onSubmit: this.handleSubmit,
                    tag: "form",
                    className: t,
                    children: [this.renderInviteHeader(), l ? (0, s.jsx)("div", {
                        className: en.divider
                    }) : null, (0, s.jsxs)(w.Block, {
                        className: l ? void 0 : es.marginTop40,
                        children: [(0, s.jsx)(f.FormTitle, {
                            error: ei(null != a ? a : n),
                            children: et.default.Messages.DISPLAY_NAME
                        }), (0, s.jsx)(f.Tooltip, {
                            text: et.default.Messages.AUTH_USERNAME_TOOLTIP,
                            position: "right",
                            color: f.Tooltip.Colors.BRAND,
                            children: e => {
                                let {
                                    onMouseEnter: t,
                                    onMouseLeave: i
                                } = e;
                                return (0, s.jsx)(w.Input, {
                                    autoFocus: !0,
                                    className: es.marginBottom8,
                                    name: "global_name",
                                    value: u,
                                    placeholder: et.default.Messages.FORM_PLACEHOLDER_USERNAME,
                                    onChange: o,
                                    error: null != n || null != a ? "" : null,
                                    onMouseEnter: t,
                                    onMouseLeave: i
                                })
                            }
                        }), (0, s.jsx)(f.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: et.default.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
                        }), this.renderInviteButton(), i, r, J.CONFERENCE_MODE_ENABLED ? null : (0, s.jsx)(w.Button, {
                            look: w.Button.Looks.LINK,
                            color: w.Button.Colors.LINK,
                            onClick: this.handleGotoLogin,
                            className: es.marginTop20,
                            children: et.default.Messages.ALREADY_HAVE_ACCOUNT
                        })]
                    })]
                }), null != e && l ? (0, s.jsx)(w.default, {
                    className: es.marginTop20,
                    children: (0, s.jsx)(I.StageInviteFooter, {
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
            return "string" != typeof e ? null : (0, s.jsx)(w.SubText, {
                className: r(es.marginTop20, en.errorMessage),
                children: e
            })
        }
        renderFull(e, t) {
            let {
                email: n,
                username: i,
                globalName: l,
                password: o,
                consent: u,
                parsedDateOfBirth: d,
                globalNameFocused: c,
                emailClientError: h,
                usernameClientError: E,
                passwordClientError: g,
                dateOfBirthClientError: _
            } = this.state, {
                registering: p,
                consentRequired: R,
                isMobileWebInviteRegistration: S,
                uniqueUsernameRegistrationConfig: {
                    suggestions: A
                },
                authBoxClassName: T,
                apiErrors: {
                    email: I,
                    username: C,
                    global_name: O,
                    password: v,
                    date_of_birth: L
                } = {},
                hasLoggedInAccounts: x,
                registrationCopyExperimentConfig: {
                    hasCopyAboveButton: M
                }
            } = this.props, {
                subText: D,
                consentText: U
            } = this.renderConsentComponents(), G = this.renderErrorMessage(), k = (0, s.jsx)(f.Tooltip, {
                text: !u && R ? et.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
                children: e => (0, s.jsx)("div", {
                    className: es.marginTop20,
                    ...e,
                    children: (0, s.jsx)(w.Button, {
                        type: "submit",
                        submitting: p,
                        disabled: !this.hasConsent() || this.state.isRateLimited,
                        children: et.default.Messages.CONTINUE
                    })
                })
            }), B = async () => {
                this.setState({
                    usernameFocused: !0
                }), A && l.length > 0 && !b.default.wasRegistrationSuggestionFetched(l) && await y.default.fetchSuggestionsRegistration(l)
            }, j = null != e ? (0, s.jsx)(a.Fragment, {
                children: e()
            }, "custom-header") : (0, s.jsx)(w.Title, {
                children: et.default.Messages.REGISTER_TITLE
            }, "title"), F = (0, s.jsxs)(w.Block, {
                className: es.marginTop20,
                children: [(0, s.jsx)(w.Input, {
                    autoFocus: !0,
                    className: es.marginBottom20,
                    label: et.default.Messages.FORM_LABEL_EMAIL,
                    name: "email",
                    value: n,
                    onChange: e => this.setState({
                        email: e,
                        emailClientError: 0 === e.length ? et.default.Messages.REQUIRED : null
                    }),
                    error: null != h ? h : ei(I),
                    type: "email",
                    setRef: e => {
                        this.emailRef = e
                    },
                    required: !0
                }), (0, s.jsx)(w.Input, {
                    label: et.default.Messages.DISPLAY_NAME,
                    className: es.marginBottom20,
                    name: "global_name",
                    value: l,
                    onChange: e => this.setState({
                        globalName: e
                    }),
                    error: ei(O),
                    maxLength: ee.MAX_DISPLAY_NAME_LENGTH,
                    setRef: e => {
                        this.globalNameRef = e
                    },
                    onFocus: () => this.setState({
                        globalNameFocused: !0
                    }),
                    onBlur: () => this.setState({
                        globalNameFocused: !1
                    })
                }), (0, s.jsx)(P.default, {
                    show: c,
                    top: -12,
                    bottom: 20,
                    children: (0, s.jsx)(f.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        children: et.default.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
                    })
                }), (0, s.jsxs)("div", {
                    onBlur: () => this.setState({
                        usernameFocused: !1
                    }),
                    onFocus: B,
                    tabIndex: -1,
                    children: [(0, s.jsx)(w.Input, {
                        label: et.default.Messages.FORM_LABEL_USERNAME,
                        className: es.marginBottom20,
                        name: "username",
                        value: i,
                        onChange: e => {
                            this.setState({
                                username: e.toLocaleLowerCase(),
                                usernameClientError: 0 === e.length ? et.default.Messages.REQUIRED : null
                            })
                        },
                        error: null != E ? E : ei(C),
                        setRef: e => {
                            this.usernameRef = e
                        },
                        required: !0
                    }), this.renderUsernameValidation()]
                }), (0, s.jsx)(w.Input, {
                    label: et.default.Messages.FORM_LABEL_PASSWORD,
                    name: "password",
                    value: o,
                    onChange: e => this.setState({
                        password: e,
                        passwordClientError: 0 === e.length ? et.default.Messages.REQUIRED : null
                    }),
                    error: null != g ? g : ei(v),
                    type: "password",
                    setRef: e => {
                        this.passwordRef = e
                    },
                    required: !0
                }), (0, s.jsx)(m.default, {
                    label: et.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
                    wrapperClassName: es.marginTop20,
                    name: "date_of_birth",
                    onChange: this.handleBirthdayChange,
                    ref: this.dateOfBirthRef,
                    error: null != _ ? _ : ei(L),
                    value: d,
                    required: !0
                }), M && D, (0, s.jsx)(N.default, {}), k, G, U, !M && D, J.CONFERENCE_MODE_ENABLED ? null : (0, s.jsx)(w.Button, {
                    look: S ? w.Button.Looks.FILLED : w.Button.Looks.LINK,
                    color: S ? w.Button.Colors.PRIMARY : w.Button.Colors.LINK,
                    onClick: this.handleGotoLogin,
                    className: es.marginTop20,
                    children: et.default.Messages.ALREADY_HAVE_ACCOUNT
                })]
            });
            return t ? (0, s.jsx)(Z.default, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: r(T, en.horizontalAuthBox),
                children: () => [j, (0, s.jsxs)("div", {
                    className: en.flex,
                    children: [(0, s.jsx)(w.Title, {
                        className: en.createAccountTemplateHeader,
                        children: et.default.Messages.REGISTER_TITLE
                    }), F]
                }, "register-title")]
            }) : (0, s.jsxs)(w.default, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: T,
                children: [x && !S ? (0, s.jsx)(w.Button, {
                    onClick: this.handleGotoLogin,
                    look: w.Button.Looks.LINK,
                    color: w.Button.Colors.PRIMARY,
                    className: en.goBackButton,
                    children: (0, s.jsxs)("div", {
                        className: en.content,
                        children: [(0, s.jsx)(H.default, {
                            width: 16,
                            height: 16,
                            className: en.caret
                        }), (0, s.jsx)(f.Text, {
                            variant: "text-md/normal",
                            children: et.default.Messages.AGE_GATE_GO_BACK
                        })]
                    })
                }) : null, j, F]
            })
        }
        render() {
            let {
                isUnderage: e,
                isMobileWebInviteRegistration: t
            } = this.props;
            if (e || this.hasError("date_of_birth")) return (0, s.jsx)(g.default, {});
            let {
                invite: n,
                giftCode: a,
                guildTemplate: i
            } = this.props, r = null != n && null == n.guild && null == n.channel && null != n.inviter;
            return null == n || r || t ? null != i ? this.renderFull(() => (0, s.jsx)(v.default, {
                guildTemplate: i
            }), !0) : null != a ? this.renderFull(() => (0, s.jsx)(z.default, {
                giftCode: a
            })) : null != n && r && n.state === Q.InviteStates.RESOLVED && !t ? this.renderFull(() => (0, s.jsx)(q.default, {
                invite: n,
                isRegister: !0
            })) : this.renderFull() : n.state === Q.InviteStates.RESOLVING ? this.renderInviteResolving() : this.renderInvite()
        }
        constructor(e) {
            var t;
            super(e), this.dateOfBirthRef = a.createRef(), this._retryTimer = new c.Timeout, this.handleGotoLogin = e => {
                let t;
                let {
                    email: n
                } = this.state, {
                    giftCode: s,
                    guildTemplate: a,
                    invite: i,
                    location: r,
                    onLoginStart: o,
                    redirectTo: u,
                    transitionTo: d,
                    isMobileWebInviteRegistration: c
                } = this.props;
                if (c) {
                    null == o || o(e);
                    return
                }
                let f = null != r ? (0, l.parse)(r.search) : {};
                null != i ? t = Q.Routes.INVITE_LOGIN(i.code) : null != s ? t = Q.Routes.GIFT_CODE_LOGIN(s.code) : null != a ? t = Q.Routes.GUILD_TEMPLATE_LOGIN(a.code) : null != u ? (t = Q.Routes.LOGIN, f.redirect_to = u) : (t = Q.Routes.LOGIN, "" !== n && (f = {
                    email: n
                })), h.default.loginReset(), d(t, {
                    search: (0, l.stringify)(f)
                }), null == o || o(e), V.ComponentDispatch.dispatch(Q.ComponentActions.WAVE_EMPHASIZE)
            }, this.handleSubmit = e => {
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
                                emailClientError: et.default.Messages.REQUIRED
                            }), e = !0), 0 === n.length && (this.setState({
                                usernameClientError: et.default.Messages.REQUIRED
                            }), e = !0), 0 === s.length && (this.setState({
                                passwordClientError: et.default.Messages.REQUIRED
                            }), e = !0), null == a && (this.setState({
                                dateOfBirthClientError: et.default.Messages.REQUIRED
                            }), e = !0), e) return
                    }
                    this.handleRegister()
                }
            }, this.handleBirthdayChange = e => {
                this.setState({
                    parsedDateOfBirth: e
                }), null != e && this.setState({
                    dateOfBirthClientError: null
                })
            }, this.renderUsernameValidation = () => {
                let {
                    username: e,
                    globalName: t,
                    usernameFocused: n
                } = this.state, {
                    usernameSuggestion: a,
                    uniqueUsernameRegistrationConfig: {
                        livecheckEnabled: i
                    }
                } = this.props;
                return (0, s.jsx)(eo, {
                    username: e,
                    suggestion: a,
                    livecheckEnabled: i,
                    globalName: t,
                    isUsernameFocused: n,
                    onClickSuggestion: () => {
                        null != this.usernameRef && this.usernameRef.focus(), null != a && a.length > 0 && this.setState({
                            username: a
                        })
                    }
                })
            };
            let n = null != e.location ? (0, l.parse)(e.location.search) : {};
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

    function el(e) {
        let t = (0, d.useStateFromStoresObject)([j.default, B.default, E.default, M.default, L.default], () => ({
                consentRequired: j.default.getAuthenticationConsentRequired(),
                registering: B.default.getRegisterStatus() === Q.RegistrationStates.REGISTERING,
                apiErrors: B.default.getErrors(),
                authenticated: B.default.isAuthenticated(),
                isUnderage: E.default.isUnderageAnonymous(),
                country: M.default.getCountryCode(),
                hasLoggedInAccounts: L.default.getHasLoggedInAccounts()
            })),
            n = (0, U.useUURegistrationExperiment)(),
            i = (0, d.useStateFromStores)([b.default], () => b.default.registrationUsernameSuggestion()),
            [r, l] = a.useState(X.RegistrationSteps.FULL);
        return (0, _.default)({
            type: u.ImpressionTypes.VIEW,
            name: u.ImpressionNames.USER_REGISTRATION,
            properties: {
                impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
                step: r
            }
        }, {}, [r]), (0, s.jsx)(er, {
            onChangeStep: e => l(e),
            registrationCopyExperimentConfig: R.default.getCurrentConfig({
                location: "0ba758_2"
            }, {
                autoTrackExposure: !1
            }),
            uniqueUsernameRegistrationConfig: n,
            usernameSuggestion: i,
            ...e,
            ...t
        })
    }

    function eo(e) {
        let t, {
                username: n,
                suggestion: a,
                globalName: i,
                livecheckEnabled: r,
                isUsernameFocused: l,
                onClickSuggestion: u
            } = e,
            d = (0, G.useUsernameStatus)(n, r, !0),
            c = r && n.length > 0;
        return t = c ? (0, o.match)(d).with({
            type: D.NameValidationState.ERROR,
            message: o.P.select()
        }, e => (0, s.jsx)(f.Text, {
            className: en.messageNegative,
            variant: "text-sm/normal",
            children: e
        })).with({
            type: D.NameValidationState.AVAILABLE,
            message: o.P.select()
        }, e => (0, s.jsx)(f.Text, {
            className: en.messagePositive,
            variant: "text-sm/normal",
            children: e
        })).otherwise(() => (0, s.jsx)(f.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: et.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
        })) : null != a && a.length > 0 && i.length > 0 ? (0, s.jsx)(f.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: et.default.Messages.UU_REGISTER_SUGGESTION.format({
                suggestion: a,
                nameOnClick: u
            })
        }) : (0, s.jsx)(f.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: et.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
        }), (0, s.jsx)(P.default, {
            show: c && (null == d ? void 0 : d.type) === D.NameValidationState.ERROR || l,
            top: -12,
            bottom: 20,
            children: t
        })
    }
    er.defaultProps = {
        giftCodeResolved: !1,
        transitionTo: e => n.g.location.assign(e)
    }
}