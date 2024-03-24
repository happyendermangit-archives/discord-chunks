function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return W
        }
    }), n("702976"), n("222007");
    var s = n("37983"),
        a = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("498574"),
        u = n("391679"),
        o = n("446674"),
        d = n("444095"),
        c = n("970728"),
        f = n("448993"),
        E = n("678916"),
        _ = n("106885"),
        I = n("378020"),
        h = n("534438"),
        p = n("208620"),
        T = n("129040"),
        m = n("9294"),
        N = n("165926"),
        g = n("393414"),
        A = n("970366"),
        S = n("271938"),
        C = n("476108"),
        v = n("337543"),
        O = n("124969"),
        R = n("599110"),
        L = n("568734"),
        x = n("701909"),
        M = n("883029"),
        D = n("65300"),
        P = n("719451"),
        U = n("291850"),
        j = n("860959"),
        b = n("49111"),
        G = n("492397"),
        y = n("56235"),
        B = n("53452"),
        F = n("782340"),
        V = n("890957");
    o.default.initialize();
    let k = "Accept Invite Page",
        H = {
            REGISTER: "register",
            LOGIN: "login"
        };
    async function w(e) {
        let {
            invite: t
        } = await c.default.resolveInvite(e, k);
        null != t && (0, _.updateAuthInvite)(t)
    }
    class Y extends a.PureComponent {
        componentDidMount() {
            let {
                isUnderage: e,
                login: t,
                inviteKey: n
            } = this.props;
            if (R.default.track(b.AnalyticEvents.INVITE_VIEWED, {
                    invite_code: n
                }, {
                    flush: !0
                }), (0, A.trackAppUIViewed)("invite"), !B.IS_APP_COMPATIBLE_BROWSER) {
                let e = this.getInviteKey();
                D.default.launch("discord://" + b.Routes.INVITE(e), () => void 0)
            }
            if (!t && e) {
                let e = this.getInviteKey(),
                    {
                        baseCode: t
                    } = (0, m.parseExtraDataFromInviteKey)(e);
                (0, g.replaceWith)(b.Routes.INVITE_LOGIN(t))
            }
        }
        componentDidUpdate(e) {
            let {
                invite: t,
                nativeAppState: n,
                authenticated: s,
                transitionTo: a
            } = this.props, l = this.getInviteKey();
            if (l !== this.getInviteKey(e)) w(l);
            else if (t.state === b.InviteStates.APP_NOT_OPENED) this.handleContinue();
            else if (this.getMode() === H.LOGIN && s !== e.authenticated && s) {
                let e = S.default.getFingerprint();
                if (null != e) {
                    let t = (0, u.extractId)(e);
                    this.track(b.AnalyticEvents.INVITE_LOGIN_SUCCESSFUL, !0, {
                        prev_user_id: t
                    })
                }
                c.default.acceptInvite({
                    inviteKey: l,
                    context: this.getAcceptInviteContext(k),
                    skipOnboarding: !0,
                    callback: this.handleContinue
                })
            }
            if (n !== e.nativeAppState && n === b.NativeAppStates.OPEN && this.track(b.AnalyticEvents.INVITE_APP_INVOKED, !1), this.getMode() === H.REGISTER && s && !e.authenticated) {
                let {
                    channel: e
                } = t;
                null != e && ((0, N.setNewUser)(y.NewUserTypes.INVITE_UNCLAIMED), null != t.guild ? a(b.Routes.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : c.default.transitionToInvite(t, a))
            }
        }
        getInviteKey() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
            return e.inviteKey
        }
        getMode() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
            return G.CONFERENCE_MODE_ENABLED ? H.REGISTER : e.login ? H.LOGIN : H.REGISTER
        }
        track(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                {
                    invite: s
                } = this.props,
                a = this.getInviteKey(),
                l = (0, m.parseInviteCodeFromInviteKey)(a),
                i = t ? {
                    guild_id: null != s.guild ? s.guild.id : null,
                    channel_id: null != s.channel ? s.channel.id : null,
                    inviter_id: null != s.inviter ? s.inviter.id : null,
                    invite_code: l
                } : {
                    invite_code: l
                };
            R.default.track(e, {
                ...i,
                ...n
            })
        }
        renderSpinner(e) {
            return (0, s.jsxs)(O.default, {
                children: [(0, s.jsx)(O.Title, {
                    children: e
                }), (0, s.jsx)(O.AuthSpinner, {})]
            })
        }
        renderInvalidInvite() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, s.jsxs)(O.default, {
                children: [(0, s.jsx)(O.Image, {
                    src: n("653240"),
                    className: V.marginBottom8
                }), (0, s.jsx)(O.Title, {
                    className: i(V.marginTop8, V.marginBottom8),
                    children: F.default.Messages.AUTH_INVALID_INVITE_TITLE
                }), (0, s.jsx)(O.SubTitle, {
                    children: e ? F.default.Messages.AUTH_BANNED_INVITE_BODY : F.default.Messages.AUTH_INVALID_INVITE_BODY
                }), this.renderButton(F.default.Messages.CONTINUE_TO_WEBAPP), (0, s.jsx)(O.Button, {
                    onClick: () => window.open(x.default.getArticleURL(b.HelpdeskArticles.INVALID_INVITES), "_blank"),
                    look: O.Button.Looks.LINK,
                    color: O.Button.Colors.LINK,
                    className: V.marginTop8,
                    children: F.default.Messages.AUTH_INVALID_INVITE_TIP
                })]
            })
        }
        renderErrorInvite() {
            var e, t;
            return (0, s.jsxs)(O.default, {
                children: [(0, s.jsx)(P.default, {
                    invite: this.props.invite,
                    error: null === (e = this.state.error) || void 0 === e ? void 0 : e.message
                }), (null === (t = this.state.error) || void 0 === t ? void 0 : t.code) === b.AbortCodes.INVALID_CANNOT_FRIEND_SELF ? this.renderButton(F.default.Messages.CONTINUE_TO_WEBAPP) : this.renderButton(F.default.Messages.INSTANT_INVITE_ACCEPT, this.handleAccept)]
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
            return (0, s.jsxs)(O.default, {
                children: [(0, s.jsx)(O.Title, {
                    className: V.marginBottom8,
                    children: F.default.Messages.APP_OPENED_TITLE
                }), (0, s.jsx)(O.SubTitle, {
                    children: F.default.Messages.APP_OPENED_BODY
                }), this.renderButton(F.default.Messages.CONTINUE_TO_WEBAPP, () => t())]
            })
        }
        renderAuthenticatedHeader() {
            let {
                invite: e
            } = this.props;
            return null != e.stage_instance && null != e.guild ? (0, s.jsx)(h.default, {
                stageInstance: e.stage_instance,
                guild: e.guild
            }) : null != e.guild_scheduled_event ? (0, s.jsx)(I.GuildScheduledEventInviteHeader, {
                channel: e.channel,
                guildScheduledEvent: e.guild_scheduled_event
            }) : (0, s.jsx)(P.default, {
                invite: e
            })
        }
        renderAuthenicatedFooter() {
            let {
                invite: e
            } = this.props;
            return (null != e.stage_instance || null != e.guild_scheduled_event) && null != e.guild ? (0, s.jsx)(O.default, {
                className: V.marginTop20,
                children: (0, s.jsx)(h.StageInviteFooter, {
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
                children: [(0, s.jsxs)(O.default, {
                    children: [this.renderAuthenticatedHeader(), this.renderButton(t, this.handleAccept)]
                }), this.renderAuthenicatedFooter()]
            })
        }
        renderContinue() {
            return (0, s.jsxs)(O.default, {
                children: [(0, s.jsx)(O.Title, {
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
                location: l
            } = this.props;
            if (t === b.NativeAppStates.OPEN) return this.renderAppOpened();
            switch (e.state) {
                case b.InviteStates.APP_OPENED:
                    return this.renderAppOpened();
                case b.InviteStates.APP_NOT_OPENED:
                    return this.renderContinue();
                case b.InviteStates.RESOLVING:
                    return G.CONFERENCE_MODE_ENABLED ? this.renderSpinner(F.default.Messages.DEFAULT_INPUT_PLACEHOLDER) : this.renderSpinner(F.default.Messages.APP_OPENING);
                case b.InviteStates.APP_OPENING:
                    return this.renderSpinner(F.default.Messages.APP_OPENING);
                case b.InviteStates.RESOLVED:
                    var i;
                    if (n && (0, L.hasFlag)(null !== (i = e.flags) && void 0 !== i ? i : 0, r.GuildInviteFlags.IS_GUEST_INVITE)) return c.default.openApp(e.code), d.default.set(T.GUEST_INVITE_KEY, e.code), this.renderAppOpened(() => a(b.Routes.APP));
                    if (n || !B.IS_APP_COMPATIBLE_BROWSER) return this.renderAuthenticatedOrDownload();
                    else if (this.getMode() === H.LOGIN) return (0, s.jsx)(U.default, {
                        invite: e,
                        transitionTo: a,
                        location: l
                    });
                    else return (0, s.jsx)(j.default, {
                        invite: e,
                        onLoginStart: () => this.track(b.AnalyticEvents.INVITE_LOGIN, !0),
                        location: l,
                        transitionTo: a
                    });
                case b.InviteStates.ACCEPTING:
                    return this.renderSpinner(F.default.Messages.INSTANT_INVITE_ACCEPTING);
                case b.InviteStates.EXPIRED:
                    return this.renderExpiredInvite();
                case b.InviteStates.BANNED:
                    return this.renderBannedInvite();
                case b.InviteStates.ERROR:
                    return this.renderErrorInvite();
                case b.InviteStates.ACCEPTED:
                default:
                    return null
            }
        }
        constructor(...e) {
            var t;
            super(...e), t = this, this.state = {
                error: null
            }, this.getAcceptInviteContext = e => c.default.getInviteContext(e, this.props.invite), this.handleContinue = e => {
                let {
                    invite: t,
                    transitionTo: n
                } = this.props;
                if (null != t.channel || (null == e ? void 0 : e.channel) != null) {
                    var s;
                    (null === (s = t.guild) || void 0 === s ? void 0 : s.id) != null ? n(b.Routes.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : c.default.transitionToInvite(null != e ? e : t, n)
                }
            }, this.handleAccept = () => {
                this.setState({
                    error: null
                });
                let e = this.getInviteKey();
                c.default.acceptInvite({
                    inviteKey: e,
                    context: this.getAcceptInviteContext(k),
                    skipOnboarding: !0,
                    callback: t => {
                        (0, _.updateAuthInvite)(t), null != t.channel && c.default.openApp(e, t.channel.id)
                    }
                }).catch(e => {
                    if (e instanceof f.V6OrEarlierAPIError || e instanceof f.APIError) {
                        let t = (0, M.getInviteError)(e.code);
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
            }, this.handleDefaultTransition = () => {
                let {
                    defaultRoute: e,
                    transitionTo: t
                } = this.props;
                t(e)
            }, this.renderButton = function(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.handleDefaultTransition,
                    {
                        invite: a
                    } = t.props,
                    l = null != a.stage_instance || null != a.guild_scheduled_event;
                return B.IS_APP_COMPATIBLE_BROWSER ? (0, s.jsx)(O.Button, {
                    className: l ? V.marginTop20 : V.marginTop40,
                    onClick: n,
                    color: l ? O.Button.Colors.GREEN : O.Button.Colors.BRAND,
                    children: e
                }) : (0, s.jsx)(O.IncompatibleBrowser, {
                    className: V.marginTop40
                })
            }
        }
    }
    var W = o.default.connectStores([v.default, C.default, S.default, p.default, E.default], e => {
        var t;
        let {
            inviteKey: n
        } = e;
        return {
            invite: null !== (t = v.default.getInvite(n)) && void 0 !== t ? t : {},
            nativeAppState: p.default.getState(n),
            authenticated: S.default.isAuthenticated(),
            defaultRoute: C.default.defaultRoute,
            isUnderage: E.default.isUnderageAnonymous()
        }
    })(Y)
}