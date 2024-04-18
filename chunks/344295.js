function(e, t, s) {
    "use strict";
    s.r(t), s("789020"), s("47120");
    var n = s("735250"),
        a = s("470079"),
        l = s("120356"),
        i = s.n(l),
        r = s("533800"),
        u = s("756647"),
        o = s("442837"),
        d = s("298444"),
        c = s("447543"),
        f = s("881052"),
        E = s("899370"),
        I = s("267394"),
        _ = s("639946"),
        h = s("792766"),
        p = s("362762"),
        T = s("978684"),
        N = s("264229"),
        g = s("929809"),
        m = s("703656"),
        A = s("108427"),
        S = s("314897"),
        v = s("896797"),
        C = s("701190"),
        O = s("819570"),
        R = s("626135"),
        x = s("630388"),
        D = s("63063"),
        L = s("782605"),
        P = s("954824"),
        M = s("588705"),
        j = s("781428"),
        b = s("109894"),
        U = s("981631"),
        B = s("188785"),
        G = s("701476"),
        y = s("436620"),
        F = s("689938"),
        V = s("794711");

    function k(e, t, s) {
        return t in e ? Object.defineProperty(e, t, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = s, e
    }
    o.default.initialize();
    let H = "Accept Invite Page",
        w = {
            REGISTER: "register",
            LOGIN: "login"
        };
    async function W(e) {
        let {
            invite: t
        } = await c.default.resolveInvite(e, H);
        null != t && (0, I.updateAuthInvite)(t)
    }
    class Y extends a.PureComponent {
        componentDidMount() {
            let {
                isUnderage: e,
                login: t,
                inviteKey: s
            } = this.props;
            if (R.default.track(U.AnalyticEvents.INVITE_VIEWED, {
                    invite_code: s
                }, {
                    flush: !0
                }), (0, A.trackAppUIViewed)("invite"), !y.IS_APP_COMPATIBLE_BROWSER) {
                let e = this.getInviteKey();
                P.default.launch("discord://" + U.Routes.INVITE(e), () => void 0)
            }
            if (!t && e) {
                let e = this.getInviteKey(),
                    {
                        baseCode: t
                    } = (0, N.parseExtraDataFromInviteKey)(e);
                (0, m.replaceWith)(U.Routes.INVITE_LOGIN(t))
            }
        }
        componentDidUpdate(e) {
            let {
                invite: t,
                nativeAppState: s,
                authenticated: n,
                transitionTo: a
            } = this.props, l = this.getInviteKey();
            if (l !== this.getInviteKey(e)) W(l);
            else if (t.state === U.InviteStates.APP_NOT_OPENED) this.handleContinue();
            else if (this.getMode() === w.LOGIN && n !== e.authenticated && n) {
                let e = S.default.getFingerprint();
                if (null != e) {
                    let t = (0, u.extractId)(e);
                    this.track(U.AnalyticEvents.INVITE_LOGIN_SUCCESSFUL, !0, {
                        prev_user_id: t
                    })
                }
                c.default.acceptInvite({
                    inviteKey: l,
                    context: this.getAcceptInviteContext(H),
                    skipOnboarding: !0,
                    callback: this.handleContinue
                })
            }
            if (s !== e.nativeAppState && s === U.NativeAppStates.OPEN && this.track(U.AnalyticEvents.INVITE_APP_INVOKED, !1), this.getMode() === w.REGISTER && n && !e.authenticated) {
                let {
                    channel: e
                } = t;
                null != e && ((0, g.setNewUser)(G.NewUserTypes.INVITE_UNCLAIMED), null != t.guild ? a(U.Routes.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : c.default.transitionToInvite(t, a))
            }
        }
        getInviteKey() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
            return e.inviteKey
        }
        getMode() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
            return B.CONFERENCE_MODE_ENABLED ? w.REGISTER : e.login ? w.LOGIN : w.REGISTER
        }
        track(e, t) {
            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                {
                    invite: n
                } = this.props,
                a = this.getInviteKey(),
                l = (0, N.parseInviteCodeFromInviteKey)(a),
                i = t ? {
                    guild_id: null != n.guild ? n.guild.id : null,
                    channel_id: null != n.channel ? n.channel.id : null,
                    inviter_id: null != n.inviter ? n.inviter.id : null,
                    invite_code: l
                } : {
                    invite_code: l
                };
            R.default.track(e, {
                ...i,
                ...s
            })
        }
        renderSpinner(e) {
            return (0, n.jsxs)(O.default, {
                children: [(0, n.jsx)(O.Title, {
                    children: e
                }), (0, n.jsx)(O.AuthSpinner, {})]
            })
        }
        renderInvalidInvite() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, n.jsxs)(O.default, {
                children: [(0, n.jsx)(O.Image, {
                    src: s("167969"),
                    className: V.marginBottom8
                }), (0, n.jsx)(O.Title, {
                    className: i()(V.marginTop8, V.marginBottom8),
                    children: F.default.Messages.AUTH_INVALID_INVITE_TITLE
                }), (0, n.jsx)(O.SubTitle, {
                    children: e ? F.default.Messages.AUTH_BANNED_INVITE_BODY : F.default.Messages.AUTH_INVALID_INVITE_BODY
                }), this.renderButton(F.default.Messages.CONTINUE_TO_WEBAPP), (0, n.jsx)(O.Button, {
                    onClick: () => window.open(D.default.getArticleURL(U.HelpdeskArticles.INVALID_INVITES), "_blank"),
                    look: O.Button.Looks.LINK,
                    color: O.Button.Colors.LINK,
                    className: V.marginTop8,
                    children: F.default.Messages.AUTH_INVALID_INVITE_TIP
                })]
            })
        }
        renderErrorInvite() {
            var e, t;
            return (0, n.jsxs)(O.default, {
                children: [(0, n.jsx)(M.default, {
                    invite: this.props.invite,
                    error: null === (e = this.state.error) || void 0 === e ? void 0 : e.message
                }), (null === (t = this.state.error) || void 0 === t ? void 0 : t.code) === U.AbortCodes.INVALID_CANNOT_FRIEND_SELF ? this.renderButton(F.default.Messages.CONTINUE_TO_WEBAPP) : this.renderButton(F.default.Messages.INSTANT_INVITE_ACCEPT, this.handleAccept)]
            })
        }
        renderExpiredInvite() {
            return this.renderInvalidInvite(!1)
        }
        renderBannedInvite() {
            return this.renderInvalidInvite(!0)
        }
        renderAppOpened(e) {
            let t = null != e ? e : this.handleContinue;
            return (0, n.jsxs)(O.default, {
                children: [(0, n.jsx)(O.Title, {
                    className: V.marginBottom8,
                    children: F.default.Messages.APP_OPENED_TITLE
                }), (0, n.jsx)(O.SubTitle, {
                    children: F.default.Messages.APP_OPENED_BODY
                }), this.renderButton(F.default.Messages.CONTINUE_TO_WEBAPP, () => t())]
            })
        }
        renderAuthenticatedHeader() {
            let {
                invite: e
            } = this.props;
            return null != e.stage_instance && null != e.guild ? (0, n.jsx)(h.default, {
                stageInstance: e.stage_instance,
                guild: e.guild
            }) : null != e.guild_scheduled_event ? (0, n.jsx)(_.GuildScheduledEventInviteHeader, {
                channel: e.channel,
                guildScheduledEvent: e.guild_scheduled_event
            }) : (0, n.jsx)(M.default, {
                invite: e
            })
        }
        renderAuthenicatedFooter() {
            let {
                invite: e
            } = this.props;
            return (null != e.stage_instance || null != e.guild_scheduled_event) && null != e.guild ? (0, n.jsx)(O.default, {
                className: V.marginTop20,
                children: (0, n.jsx)(h.StageInviteFooter, {
                    guild: e.guild,
                    onlineCount: e.approximate_presence_count
                })
            }) : null
        }
        renderAuthenticatedOrDownload() {
            let {
                invite: e
            } = this.props, t = null != e.stage_instance ? F.default.Messages.INSTANT_INVITE_ACCEPT_STAGE : F.default.Messages.INSTANT_INVITE_ACCEPT;
            return (0, n.jsxs)("div", {
                children: [(0, n.jsxs)(O.default, {
                    children: [this.renderAuthenticatedHeader(), this.renderButton(t, this.handleAccept)]
                }), this.renderAuthenicatedFooter()]
            })
        }
        renderContinue() {
            return (0, n.jsxs)(O.default, {
                children: [(0, n.jsx)(O.Title, {
                    children: F.default.Messages.APP_NOT_OPENED
                }), this.renderButton(F.default.Messages.CONTINUE_TO_WEBAPP)]
            })
        }
        render() {
            let {
                invite: e,
                nativeAppState: t,
                authenticated: s,
                transitionTo: a,
                location: l
            } = this.props;
            if (t === U.NativeAppStates.OPEN) return this.renderAppOpened();
            switch (e.state) {
                case U.InviteStates.APP_OPENED:
                    return this.renderAppOpened();
                case U.InviteStates.APP_NOT_OPENED:
                    return this.renderContinue();
                case U.InviteStates.RESOLVING:
                    return B.CONFERENCE_MODE_ENABLED ? this.renderSpinner(F.default.Messages.DEFAULT_INPUT_PLACEHOLDER) : this.renderSpinner(F.default.Messages.APP_OPENING);
                case U.InviteStates.APP_OPENING:
                    return this.renderSpinner(F.default.Messages.APP_OPENING);
                case U.InviteStates.RESOLVED:
                    var i;
                    if (s && (0, x.hasFlag)(null !== (i = e.flags) && void 0 !== i ? i : 0, r.GuildInviteFlags.IS_GUEST_INVITE)) return c.default.openApp(e.code), d.SessionStorage.set(T.GUEST_INVITE_KEY, e.code), this.renderAppOpened(() => a(U.Routes.APP));
                    if (s || !y.IS_APP_COMPATIBLE_BROWSER) return this.renderAuthenticatedOrDownload();
                    else if (this.getMode() === w.LOGIN) return (0, n.jsx)(j.default, {
                        invite: e,
                        transitionTo: a,
                        location: l
                    });
                    else return (0, n.jsx)(b.default, {
                        invite: e,
                        onLoginStart: () => this.track(U.AnalyticEvents.INVITE_LOGIN, !0),
                        location: l,
                        transitionTo: a
                    });
                case U.InviteStates.ACCEPTING:
                    return this.renderSpinner(F.default.Messages.INSTANT_INVITE_ACCEPTING);
                case U.InviteStates.EXPIRED:
                    return this.renderExpiredInvite();
                case U.InviteStates.BANNED:
                    return this.renderBannedInvite();
                case U.InviteStates.ERROR:
                    return this.renderErrorInvite();
                case U.InviteStates.ACCEPTED:
                default:
                    return null
            }
        }
        constructor(...e) {
            var t;
            super(...e), t = this, k(this, "state", {
                error: null
            }), k(this, "getAcceptInviteContext", e => c.default.getInviteContext(e, this.props.invite)), k(this, "handleContinue", e => {
                let {
                    invite: t,
                    transitionTo: s
                } = this.props;
                if (null != t.channel || (null == e ? void 0 : e.channel) != null) {
                    var n;
                    (null === (n = t.guild) || void 0 === n ? void 0 : n.id) != null ? s(U.Routes.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : c.default.transitionToInvite(null != e ? e : t, s)
                }
            }), k(this, "handleAccept", () => {
                this.setState({
                    error: null
                });
                let e = this.getInviteKey();
                c.default.acceptInvite({
                    inviteKey: e,
                    context: this.getAcceptInviteContext(H),
                    skipOnboarding: !0,
                    callback: t => {
                        (0, I.updateAuthInvite)(t), null != t.channel && c.default.openApp(e, t.channel.id)
                    }
                }).catch(e => {
                    if (e instanceof f.V6OrEarlierAPIError || e instanceof f.APIError) {
                        let t = (0, L.getInviteError)(e.code);
                        this.setState({
                            error: {
                                code: e.code,
                                message: t
                            }
                        })
                    } else this.setState({
                        error: {
                            code: e.code,
                            message: F.default.Messages.INVITE_MODAL_ERROR_DEFAULT
                        }
                    })
                })
            }), k(this, "handleDefaultTransition", () => {
                let {
                    defaultRoute: e,
                    transitionTo: t
                } = this.props;
                t(e)
            }), k(this, "renderButton", function(e) {
                let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.handleDefaultTransition,
                    {
                        invite: a
                    } = t.props,
                    l = null != a.stage_instance || null != a.guild_scheduled_event;
                return y.IS_APP_COMPATIBLE_BROWSER ? (0, n.jsx)(O.Button, {
                    className: l ? V.marginTop20 : V.marginTop40,
                    onClick: s,
                    color: l ? O.Button.Colors.GREEN : O.Button.Colors.BRAND,
                    children: e
                }) : (0, n.jsx)(O.IncompatibleBrowser, {
                    className: V.marginTop40
                })
            })
        }
    }
    t.default = o.default.connectStores([C.default, v.default, S.default, p.default, E.default], e => {
        var t;
        let {
            inviteKey: s
        } = e;
        return {
            invite: null !== (t = C.default.getInvite(s)) && void 0 !== t ? t : {},
            nativeAppState: p.default.getState(s),
            authenticated: S.default.isAuthenticated(),
            defaultRoute: v.default.defaultRoute,
            isUnderage: E.default.isUnderageAnonymous()
        }
    })(Y)
}