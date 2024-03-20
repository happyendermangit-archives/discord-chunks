function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return ei
        }
    }), n("781738"), n("222007"), n("794252");
    var s = n("37983"),
        a = n("884691"),
        l = n("414456"),
        r = n.n(l),
        i = n("730290"),
        o = n("506838"),
        u = n("759843"),
        d = n("446674"),
        c = n("862337"),
        E = n("77078"),
        f = n("437822"),
        _ = n("678916"),
        h = n("816540"),
        g = n("208266"),
        m = n("428958"),
        T = n("307439"),
        p = n("765825"),
        I = n("715570"),
        A = n("486252"),
        S = n("378020"),
        R = n("980976"),
        N = n("534438"),
        C = n("946859"),
        O = n("791160"),
        L = n("434824"),
        M = n("770032"),
        v = n("165926"),
        D = n("25033"),
        U = n("255403"),
        x = n("2581"),
        y = n("644417"),
        G = n("697543"),
        P = n("79345"),
        b = n("447997"),
        F = n("970366"),
        B = n("271938"),
        j = n("350522"),
        k = n("476108"),
        w = n("124969"),
        H = n("980428"),
        V = n("599110"),
        Y = n("659500"),
        W = n("718517"),
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
        el = e => Array.isArray(e) ? e.map(e => e.replace(ea, "")).join(". ").trim() : e;
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
            this.redirectIfAuthenticated(), p.default.trackExposure({
                location: "0ba758_1"
            });
            let {
                giftCodeSKU: e,
                invite: t
            } = this.props;
            V.default.track(Q.AnalyticEvents.REGISTER_VIEWED, {
                location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
                registration_source: this.registrationSource,
                ...null != e ? (0, O.default)(e, !1, !1) : {}
            }, {
                flush: !0
            }), null == this.props.consentRequired && f.default.getLocationMetadata(), (0, F.trackAppUIViewed)("register")
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
                invite: l,
                onChangeStep: r
            } = this.props, {
                parsedDateOfBirth: i
            } = this.state;
            (e.apiErrors !== n || t.parsedDateOfBirth !== i) && (this.hasError("email") || this.hasError("phone") ? null != this.emailRef && this.emailRef.focus() : this.hasError("username") ? null != this.usernameRef && this.usernameRef.focus() : this.hasError("global_name") ? null != this.globalNameRef && this.globalNameRef.focus() : this.hasError("password") ? null != this.passwordRef && this.passwordRef.focus() : null == this.state.parsedDateOfBirth ? null != this.dateOfBirthRef.current && this.dateOfBirthRef.current.focus() : this.hasError("retry_after") && "number" == typeof this.props.apiErrors.retry_after && (this.setState({
                isRateLimited: !0
            }), this._retryTimer.start(this.props.apiErrors.retry_after * W.default.Millis.SECOND, () => {
                this.setState({
                    isRateLimited: !1
                })
            }))), s && !e.authenticated && ((0, v.setNewUser)($.NewUserTypes.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
            let o = X.RegistrationSteps.FULL;
            a || this.hasError("date_of_birth") ? o = X.RegistrationSteps.AGE_GATE : null != l && (null != l.guild || null != l.channel) && (o = X.RegistrationSteps.INVITE), r(o)
        }
        redirectIfAuthenticated() {
            let {
                authenticated: e,
                transitionTo: t,
                redirectTo: n
            } = this.props;
            e && t(null != n ? n : k.default.defaultRoute)
        }
        async handleRegister() {
            let {
                email: e,
                username: t,
                globalName: n,
                password: s,
                consent: a,
                parsedDateOfBirth: l
            } = this.state, {
                invite: r,
                guildTemplate: i,
                giftCode: o,
                onRegister: u,
                usernameSuggestion: d,
                isMobileWebInviteRegistration: c
            } = this.props, E = null != r ? r.code : null, f = null != o ? o.skuId : null, _ = T.usePromoEmailConsentStore.getState(), h = (0, K.isNullOrEmpty)(d) ? null : t === d, g = J.CONFERENCE_MODE_ENABLED ? await (0, C.formatUsername)(t) : t;
            Y.ComponentDispatch.dispatch(Q.ComponentActions.WAVE_EMPHASIZE);
            try {
                c || null == r ? await (0, I.registerFull)({
                    email: e,
                    username: g,
                    globalName: n,
                    consent: a,
                    password: s,
                    invite: E,
                    usedUsernameSuggestion: h,
                    guildTemplateCode: null == i ? void 0 : i.code,
                    giftCodeSKUId: f,
                    birthday: l,
                    promoEmailConsent: _.required ? _ : null
                }) : await (0, I.default)({
                    consent: a,
                    invite: E,
                    giftCodeSKUId: f,
                    usedUsernameSuggestion: h,
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
            } = this.props, l = null, r = null;
            return t ? r = (0, s.jsx)(A.default, {
                value: e,
                onChange: e => this.setState({
                    consent: e
                }),
                subText: et.default.Messages.TERMS_PRIVACY_OPT_IN.format({
                    termsURL: Q.MarketingURLs.TERMS,
                    privacyURL: Q.MarketingURLs.PRIVACY
                })
            }) : l = (0, s.jsx)(w.SubText, {
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
                subText: l,
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
                    children: [(0, s.jsx)(E.FormTitle, {
                        children: et.default.Messages.FORM_LABEL_USERNAME
                    }), (0, s.jsx)(E.Tooltip, {
                        text: et.default.Messages.AUTH_USERNAME_TOOLTIP,
                        position: "right",
                        color: E.Tooltip.Colors.BRAND,
                        children: e => {
                            let {
                                onMouseEnter: a,
                                onMouseLeave: l
                            } = e;
                            return (0, s.jsx)(w.Input, {
                                autoFocus: !0,
                                className: es.marginBottom8,
                                name: "username",
                                value: n,
                                placeholder: et.default.Messages.FORM_PLACEHOLDER_USERNAME,
                                onChange: t,
                                onMouseEnter: a,
                                onMouseLeave: l
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
            return (null == e ? void 0 : e.stage_instance) != null && null != e.guild ? (0, s.jsx)(N.default, {
                stageInstance: e.stage_instance,
                guild: e.guild
            }) : (null == e ? void 0 : e.guild_scheduled_event) != null ? (0, s.jsx)(S.GuildScheduledEventInviteHeader, {
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
            } = this.state, l = w.Button.Colors.BRAND, r = et.default.Messages.CONTINUE;
            return (null == e ? void 0 : e.stage_instance) != null && (l = w.Button.Colors.GREEN, r = et.default.Messages.INSTANT_INVITE_ACCEPT_STAGE), (0, s.jsx)(E.Tooltip, {
                text: !a && n ? et.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
                children: e => (0, s.jsx)("div", {
                    className: es.marginTop20,
                    ...e,
                    children: (0, s.jsx)(w.Button, {
                        type: "submit",
                        submitting: t,
                        disabled: !this.hasConsent(),
                        color: l,
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
                subText: l,
                consentText: r
            } = this.renderConsentComponents(), i = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null, o = e => {
                this.setState({
                    globalName: e
                })
            }, u = this.state.globalName;
            return (0, s.jsxs)("div", {
                children: [(0, s.jsxs)(w.default, {
                    onSubmit: this.handleSubmit,
                    tag: "form",
                    className: t,
                    children: [this.renderInviteHeader(), i ? (0, s.jsx)("div", {
                        className: en.divider
                    }) : null, (0, s.jsxs)(w.Block, {
                        className: i ? void 0 : es.marginTop40,
                        children: [(0, s.jsx)(E.FormTitle, {
                            error: el(null != a ? a : n),
                            children: et.default.Messages.DISPLAY_NAME
                        }), (0, s.jsx)(E.Tooltip, {
                            text: et.default.Messages.AUTH_USERNAME_TOOLTIP,
                            position: "right",
                            color: E.Tooltip.Colors.BRAND,
                            children: e => {
                                let {
                                    onMouseEnter: t,
                                    onMouseLeave: l
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
                                    onMouseLeave: l
                                })
                            }
                        }), (0, s.jsx)(E.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: et.default.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
                        }), this.renderInviteButton(), l, r, J.CONFERENCE_MODE_ENABLED ? null : (0, s.jsx)(w.Button, {
                            look: w.Button.Looks.LINK,
                            color: w.Button.Colors.LINK,
                            onClick: this.handleGotoLogin,
                            className: es.marginTop20,
                            children: et.default.Messages.ALREADY_HAVE_ACCOUNT
                        })]
                    })]
                }), null != e && i ? (0, s.jsx)(w.default, {
                    className: es.marginTop20,
                    children: (0, s.jsx)(N.StageInviteFooter, {
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
                username: l,
                globalName: i,
                password: o,
                consent: u,
                parsedDateOfBirth: d,
                globalNameFocused: c,
                emailClientError: f,
                usernameClientError: _,
                passwordClientError: h,
                dateOfBirthClientError: m
            } = this.state, {
                registering: T,
                consentRequired: p,
                isMobileWebInviteRegistration: I,
                uniqueUsernameRegistrationConfig: {
                    suggestions: A
                },
                authBoxClassName: S,
                apiErrors: {
                    email: N,
                    username: C,
                    global_name: O,
                    password: L,
                    date_of_birth: M
                } = {},
                hasLoggedInAccounts: v,
                registrationCopyExperimentConfig: {
                    hasCopyAboveButton: D
                }
            } = this.props, {
                subText: y,
                consentText: G
            } = this.renderConsentComponents(), P = this.renderErrorMessage(), F = (0, s.jsx)(E.Tooltip, {
                text: !u && p ? et.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
                children: e => (0, s.jsx)("div", {
                    className: es.marginTop20,
                    ...e,
                    children: (0, s.jsx)(w.Button, {
                        type: "submit",
                        submitting: T,
                        disabled: !this.hasConsent() || this.state.isRateLimited,
                        children: et.default.Messages.CONTINUE
                    })
                })
            }), B = async () => {
                this.setState({
                    usernameFocused: !0
                }), A && i.length > 0 && !x.default.wasRegistrationSuggestionFetched(i) && await U.default.fetchSuggestionsRegistration(i)
            }, j = null != e ? (0, s.jsx)(a.Fragment, {
                children: e()
            }, "custom-header") : (0, s.jsx)(w.Title, {
                children: et.default.Messages.REGISTER_TITLE
            }, "title"), k = (0, s.jsxs)(w.Block, {
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
                    error: null != f ? f : el(N),
                    type: "email",
                    setRef: e => {
                        this.emailRef = e
                    },
                    required: !0
                }), (0, s.jsx)(w.Input, {
                    label: et.default.Messages.DISPLAY_NAME,
                    className: es.marginBottom20,
                    name: "global_name",
                    value: i,
                    onChange: e => this.setState({
                        globalName: e
                    }),
                    error: el(O),
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
                }), (0, s.jsx)(b.default, {
                    show: c,
                    top: -12,
                    bottom: 20,
                    children: (0, s.jsx)(E.Text, {
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
                        value: l,
                        onChange: e => {
                            this.setState({
                                username: e.toLocaleLowerCase(),
                                usernameClientError: 0 === e.length ? et.default.Messages.REQUIRED : null
                            })
                        },
                        error: null != _ ? _ : el(C),
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
                    error: null != h ? h : el(L),
                    type: "password",
                    setRef: e => {
                        this.passwordRef = e
                    },
                    required: !0
                }), (0, s.jsx)(g.default, {
                    label: et.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
                    wrapperClassName: es.marginTop20,
                    name: "date_of_birth",
                    onChange: this.handleBirthdayChange,
                    ref: this.dateOfBirthRef,
                    error: null != m ? m : el(M),
                    value: d,
                    required: !0
                }), D && y, (0, s.jsx)(R.default, {}), F, P, G, !D && y, J.CONFERENCE_MODE_ENABLED ? null : (0, s.jsx)(w.Button, {
                    look: I ? w.Button.Looks.FILLED : w.Button.Looks.LINK,
                    color: I ? w.Button.Colors.PRIMARY : w.Button.Colors.LINK,
                    onClick: this.handleGotoLogin,
                    className: es.marginTop20,
                    children: et.default.Messages.ALREADY_HAVE_ACCOUNT
                })]
            });
            return t ? (0, s.jsx)(Z.default, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: r(S, en.horizontalAuthBox),
                children: () => [j, (0, s.jsxs)("div", {
                    className: en.flex,
                    children: [(0, s.jsx)(w.Title, {
                        className: en.createAccountTemplateHeader,
                        children: et.default.Messages.REGISTER_TITLE
                    }), k]
                }, "register-title")]
            }) : (0, s.jsxs)(w.default, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: S,
                children: [v && !I ? (0, s.jsx)(w.Button, {
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
                        }), (0, s.jsx)(E.Text, {
                            variant: "text-md/normal",
                            children: et.default.Messages.AGE_GATE_GO_BACK
                        })]
                    })
                }) : null, j, k]
            })
        }
        render() {
            let {
                isUnderage: e,
                isMobileWebInviteRegistration: t
            } = this.props;
            if (e || this.hasError("date_of_birth")) return (0, s.jsx)(h.default, {});
            let {
                invite: n,
                giftCode: a,
                guildTemplate: l
            } = this.props, r = null != n && null == n.guild && null == n.channel && null != n.inviter;
            return null == n || r || t ? null != l ? this.renderFull(() => (0, s.jsx)(L.default, {
                guildTemplate: l
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
                    invite: l,
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
                let E = null != r ? (0, i.parse)(r.search) : {};
                null != l ? t = Q.Routes.INVITE_LOGIN(l.code) : null != s ? t = Q.Routes.GIFT_CODE_LOGIN(s.code) : null != a ? t = Q.Routes.GUILD_TEMPLATE_LOGIN(a.code) : null != u ? (t = Q.Routes.LOGIN, E.redirect_to = u) : (t = Q.Routes.LOGIN, "" !== n && (E = {
                    email: n
                })), f.default.loginReset(), d(t, {
                    search: (0, i.stringify)(E)
                }), null == o || o(e), Y.ComponentDispatch.dispatch(Q.ComponentActions.WAVE_EMPHASIZE)
            }, this.handleSubmit = e => {
                null == e || e.preventDefault();
                let {
                    email: t,
                    username: n,
                    password: s,
                    parsedDateOfBirth: a
                } = this.state, {
                    invite: l,
                    consentRequired: r
                } = this.props;
                if (null !== r) {
                    if (null == l) {
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
                        livecheckEnabled: l
                    }
                } = this.props;
                return (0, s.jsx)(eo, {
                    username: e,
                    suggestion: a,
                    livecheckEnabled: l,
                    globalName: t,
                    isUsernameFocused: n,
                    onClickSuggestion: () => {
                        null != this.usernameRef && this.usernameRef.focus(), null != a && a.length > 0 && this.setState({
                            username: a
                        })
                    }
                })
            };
            let n = null != e.location ? (0, i.parse)(e.location.search) : {};
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

    function ei(e) {
        let t = (0, d.useStateFromStoresObject)([j.default, B.default, _.default, D.default, M.default], () => ({
                consentRequired: j.default.getAuthenticationConsentRequired(),
                registering: B.default.getRegisterStatus() === Q.RegistrationStates.REGISTERING,
                apiErrors: B.default.getErrors(),
                authenticated: B.default.isAuthenticated(),
                isUnderage: _.default.isUnderageAnonymous(),
                country: D.default.getCountryCode(),
                hasLoggedInAccounts: M.default.getHasLoggedInAccounts()
            })),
            n = (0, G.useUURegistrationExperiment)(),
            l = (0, d.useStateFromStores)([x.default], () => x.default.registrationUsernameSuggestion()),
            [r, i] = a.useState(X.RegistrationSteps.FULL);
        return (0, m.default)({
            type: u.ImpressionTypes.VIEW,
            name: u.ImpressionNames.USER_REGISTRATION,
            properties: {
                impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
                step: r
            }
        }, {}, [r]), (0, s.jsx)(er, {
            onChangeStep: e => i(e),
            registrationCopyExperimentConfig: p.default.getCurrentConfig({
                location: "0ba758_2"
            }, {
                autoTrackExposure: !1
            }),
            uniqueUsernameRegistrationConfig: n,
            usernameSuggestion: l,
            ...e,
            ...t
        })
    }

    function eo(e) {
        let t, {
                username: n,
                suggestion: a,
                globalName: l,
                livecheckEnabled: r,
                isUsernameFocused: i,
                onClickSuggestion: u
            } = e,
            d = (0, P.useUsernameStatus)(n, r, !0),
            c = r && n.length > 0;
        return t = c ? (0, o.match)(d).with({
            type: y.NameValidationState.ERROR,
            message: o.P.select()
        }, e => (0, s.jsx)(E.Text, {
            className: en.messageNegative,
            variant: "text-sm/normal",
            children: e
        })).with({
            type: y.NameValidationState.AVAILABLE,
            message: o.P.select()
        }, e => (0, s.jsx)(E.Text, {
            className: en.messagePositive,
            variant: "text-sm/normal",
            children: e
        })).otherwise(() => (0, s.jsx)(E.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: et.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
        })) : null != a && a.length > 0 && l.length > 0 ? (0, s.jsx)(E.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: et.default.Messages.UU_REGISTER_SUGGESTION.format({
                suggestion: a,
                nameOnClick: u
            })
        }) : (0, s.jsx)(E.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: et.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
        }), (0, s.jsx)(b.default, {
            show: c && (null == d ? void 0 : d.type) === y.NameValidationState.ERROR || i,
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