function(e, t, n) {
    "use strict";
    n.r(t), n("789020"), n("47120");
    var s = n("735250"),
        a = n("470079"),
        i = n("803997"),
        l = n.n(i),
        r = n("533800"),
        u = n("756647"),
        o = n("442837"),
        d = n("298444"),
        c = n("447543"),
        f = n("881052"),
        E = n("899370"),
        I = n("267394"),
        h = n("639946"),
        _ = n("792766"),
        p = n("362762"),
        T = n("978684"),
        m = n("264229"),
        N = n("929809"),
        g = n("703656"),
        A = n("108427"),
        S = n("314897"),
        v = n("896797"),
        O = n("701190"),
        C = n("819570"),
        R = n("626135"),
        x = n("630388"),
        D = n("63063"),
        P = n("782605"),
        L = n("954824"),
        M = n("588705"),
        b = n("781428"),
        j = n("109894"),
        U = n("981631"),
        B = n("188785"),
        G = n("701476"),
        y = n("436620"),
        F = n("689938"),
        k = n("794711");

    function V(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
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
                inviteKey: n
            } = this.props;
            if (R.default.track(U.AnalyticEvents.INVITE_VIEWED, {
                    invite_code: n
                }, {
                    flush: !0
                }), (0, A.trackAppUIViewed)("invite"), !y.IS_APP_COMPATIBLE_BROWSER) {
                let e = this.getInviteKey();
                L.default.launch("discord://" + U.Routes.INVITE(e), () => void 0)
            }
            if (!t && e) {
                let e = this.getInviteKey(),
                    {
                        baseCode: t
                    } = (0, m.parseExtraDataFromInviteKey)(e);
                (0, g.replaceWith)(U.Routes.INVITE_LOGIN(t))
            }
        }
        componentDidUpdate(e) {
            let {
                invite: t,
                nativeAppState: n,
                authenticated: s,
                transitionTo: a
            } = this.props, i = this.getInviteKey();
            if (i !== this.getInviteKey(e)) W(i);
            else if (t.state === U.InviteStates.APP_NOT_OPENED) this.handleContinue();
            else if (this.getMode() === w.LOGIN && s !== e.authenticated && s) {
                let e = S.default.getFingerprint();
                if (null != e) {
                    let t = (0, u.extractId)(e);
                    this.track(U.AnalyticEvents.INVITE_LOGIN_SUCCESSFUL, !0, {
                        prev_user_id: t
                    })
                }
                c.default.acceptInvite({
                    inviteKey: i,
                    context: this.getAcceptInviteContext(H),
                    skipOnboarding: !0,
                    callback: this.handleContinue
                })
            }
            if (n !== e.nativeAppState && n === U.NativeAppStates.OPEN && this.track(U.AnalyticEvents.INVITE_APP_INVOKED, !1), this.getMode() === w.REGISTER && s && !e.authenticated) {
                let {
                    channel: e
                } = t;
                null != e && ((0, N.setNewUser)(G.NewUserTypes.INVITE_UNCLAIMED), null != t.guild ? a(U.Routes.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : c.default.transitionToInvite(t, a))
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
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                {
                    invite: s
                } = this.props,
                a = this.getInviteKey(),
                i = (0, m.parseInviteCodeFromInviteKey)(a),
                l = t ? {
                    guild_id: null != s.guild ? s.guild.id : null,
                    channel_id: null != s.channel ? s.channel.id : null,
                    inviter_id: null != s.inviter ? s.inviter.id : null,
                    invite_code: i
                } : {
                    invite_code: i
                };
            R.default.track(e, {
                ...l,
                ...n
            })
        }
        renderSpinner(e) {
            return (0, s.jsxs)(C.default, {
                children: [(0, s.jsx)(C.Title, {
                    children: e
                }), (0, s.jsx)(C.AuthSpinner, {})]
            })
        }
        renderInvalidInvite() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, s.jsxs)(C.default, {
                children: [(0, s.jsx)(C.Image, {
                    src: n("167969"),
                    className: k.marginBottom8
                }), (0, s.jsx)(C.Title, {
                    className: l()(k.marginTop8, k.marginBottom8),
                    children: F.default.Messages.AUTH_INVALID_INVITE_TITLE
                }), (0, s.jsx)(C.SubTitle, {
                    children: e ? F.default.Messages.AUTH_BANNED_INVITE_BODY : F.default.Messages.AUTH_INVALID_INVITE_BODY
                }), this.renderButton(F.default.Messages.CONTINUE_TO_WEBAPP), (0, s.jsx)(C.Button, {
                    onClick: () => window.open(D.default.getArticleURL(U.HelpdeskArticles.INVALID_INVITES), "_blank"),
                    look: C.Button.Looks.LINK,
                    color: C.Button.Colors.LINK,
                    className: k.marginTop8,
                    children: F.default.Messages.AUTH_INVALID_INVITE_TIP
                })]
            })
        }
        renderErrorInvite() {
            var e, t;
            return (0, s.jsxs)(C.default, {
                children: [(0, s.jsx)(M.default, {
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
            return (0, s.jsxs)(C.default, {
                children: [(0, s.jsx)(C.Title, {
                    className: k.marginBottom8,
                    children: F.default.Messages.APP_OPENED_TITLE
                }), (0, s.jsx)(C.SubTitle, {
                    children: F.default.Messages.APP_OPENED_BODY
                }), this.renderButton(F.default.Messages.CONTINUE_TO_WEBAPP, () => t())]
            })
        }
        renderAuthenticatedHeader() {
            let {
                invite: e
            } = this.props;
            return null != e.stage_instance && null != e.guild ? (0, s.jsx)(_.default, {
                stageInstance: e.stage_instance,
                guild: e.guild
            }) : null != e.guild_scheduled_event ? (0, s.jsx)(h.GuildScheduledEventInviteHeader, {
                channel: e.channel,
                guildScheduledEvent: e.guild_scheduled_event
            }) : (0, s.jsx)(M.default, {
                invite: e
            })
        }
        renderAuthenicatedFooter() {
            let {
                invite: e
            } = this.props;
            return (null != e.stage_instance || null != e.guild_scheduled_event) && null != e.guild ? (0, s.jsx)(C.default, {
                className: k.marginTop20,
                children: (0, s.jsx)(_.StageInviteFooter, {
                    guild: e.guild,
                    onlineCount: e.approximate_presence_count
                })
            }) : null
        }
        renderAuthenticatedOrDownload() {
            let {
                invite: e
            } = this.props, t = null != e.stage_instance ? F.default.Messages.INSTANT_INVITE_ACCEPT_STAGE : F.default.Messages.INSTANT_INVITE_ACCEPT;
            return (0, s.jsxs)("div", {
                children: [(0, s.jsxs)(C.default, {
                    children: [this.renderAuthenticatedHeader(), this.renderButton(t, this.handleAccept)]
                }), this.renderAuthenicatedFooter()]
            })
        }
        renderContinue() {
            return (0, s.jsxs)(C.default, {
                children: [(0, s.jsx)(C.Title, {
                    children: F.default.Messages.APP_NOT_OPENED
                }), this.renderButton(F.default.Messages.CONTINUE_TO_WEBAPP)]
            })
        }
        render() {
            let {
                invite: e,
                nativeAppState: t,
                authenticated: n,
                transitionTo: a,
                location: i
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
                    var l;
                    if (n && (0, x.hasFlag)(null !== (l = e.flags) && void 0 !== l ? l : 0, r.GuildInviteFlags.IS_GUEST_INVITE)) return c.default.openApp(e.code), d.SessionStorage.set(T.GUEST_INVITE_KEY, e.code), this.renderAppOpened(() => a(U.Routes.APP));
                    if (n || !y.IS_APP_COMPATIBLE_BROWSER) return this.renderAuthenticatedOrDownload();
                    else if (this.getMode() === w.LOGIN) return (0, s.jsx)(b.default, {
                        invite: e,
                        transitionTo: a,
                        location: i
                    });
                    else return (0, s.jsx)(j.default, {
                        invite: e,
                        onLoginStart: () => this.track(U.AnalyticEvents.INVITE_LOGIN, !0),
                        location: i,
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
            super(...e), t = this, V(this, "state", {
                error: null
            }), V(this, "getAcceptInviteContext", e => c.default.getInviteContext(e, this.props.invite)), V(this, "handleContinue", e => {
                let {
                    invite: t,
                    transitionTo: n
                } = this.props;
                if (null != t.channel || (null == e ? void 0 : e.channel) != null) {
                    var s;
                    (null === (s = t.guild) || void 0 === s ? void 0 : s.id) != null ? n(U.Routes.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : c.default.transitionToInvite(null != e ? e : t, n)
                }
            }), V(this, "handleAccept", () => {
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
                        let t = (0, P.getInviteError)(e.code);
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
            }), V(this, "handleDefaultTransition", () => {
                let {
                    defaultRoute: e,
                    transitionTo: t
                } = this.props;
                t(e)
            }), V(this, "renderButton", function(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.handleDefaultTransition,
                    {
                        invite: a
                    } = t.props,
                    i = null != a.stage_instance || null != a.guild_scheduled_event;
                return y.IS_APP_COMPATIBLE_BROWSER ? (0, s.jsx)(C.Button, {
                    className: i ? k.marginTop20 : k.marginTop40,
                    onClick: n,
                    color: i ? C.Button.Colors.GREEN : C.Button.Colors.BRAND,
                    children: e
                }) : (0, s.jsx)(C.IncompatibleBrowser, {
                    className: k.marginTop40
                })
            })
        }
    }
    t.default = o.default.connectStores([O.default, v.default, S.default, p.default, E.default], e => {
        var t;
        let {
            inviteKey: n
        } = e;
        return {
            invite: null !== (t = O.default.getInvite(n)) && void 0 !== t ? t : {},
            nativeAppState: p.default.getState(n),
            authenticated: S.default.isAuthenticated(),
            defaultRoute: v.default.defaultRoute,
            isUnderage: E.default.isUnderageAnonymous()
        }
    })(Y)
}