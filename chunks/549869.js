function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return eT
        }
    }), n("222007");
    var s = n("37983"),
        a = n("884691"),
        l = n("730290"),
        r = n("759843"),
        i = n("394846"),
        u = n("446674"),
        o = n("913144"),
        d = n("437822"),
        c = n("569272"),
        f = n("970728"),
        E = n("26772"),
        _ = n("73749"),
        I = n("106885"),
        h = n("178116"),
        p = n("759315"),
        m = n("569808"),
        T = n("913645"),
        N = n("777858"),
        g = n("9294"),
        A = n("701662"),
        S = n("271938"),
        C = n("760190"),
        v = n("55411"),
        O = n("337543"),
        R = n("599110"),
        L = n("550368"),
        x = n("831588"),
        M = n("315102"),
        D = n("834030"),
        P = n("315733"),
        j = n("250790"),
        U = n("746040"),
        b = n("504568"),
        G = n("345308"),
        y = n("713177"),
        B = n("773852"),
        F = n("679030"),
        V = n("926593"),
        k = n("683068"),
        H = n("43772"),
        w = n("291850"),
        Y = n("275744"),
        K = n("104110"),
        W = n("860959"),
        z = n("815762"),
        Z = n("152434"),
        X = n("404981"),
        J = n("726206"),
        q = n("49111"),
        Q = n("492397");
    n("527441"), u.default.initialize();
    let $ = (0, j.default)(w.default),
        ee = (0, j.default)(Y.default),
        et = (0, j.default)(H.default),
        en = (0, j.default)(V.default),
        es = (0, j.default)(F.default),
        ea = (0, j.default)(A.default),
        el = (0, j.default)(W.default),
        er = (0, j.default)(b.default),
        ei = (0, j.default)(G.default),
        eu = (0, j.default)(J.default),
        eo = (0, j.default)(p.default),
        ed = (0, j.default)(Z.default),
        ec = (0, j.default)(B.default),
        ef = (0, j.default)(h.default),
        eE = (0, j.default)(N.default),
        e_ = (0, j.default)(y.default),
        eI = (0, j.default)(K.default),
        eh = (0, j.default)(X.default),
        ep = (0, j.default)(z.default);
    class em extends a.PureComponent {
        static getDerivedStateFromProps(e, t) {
            var n;
            let {
                invite: s,
                location: a
            } = e, {
                backgroundId: r
            } = t, i = (0, l.parse)(a.search), u = null !== (n = i.redirect_to) && void 0 !== n ? n : null;
            (null == u || "" === u || !(0, P.isSafeRedirect)(u) || u.startsWith(q.Routes.ME)) && (u = null);
            let o = null;
            if (null == s) o = (0, x.getArtForPath)(u);
            else if ((null == s ? void 0 : s.state) === q.InviteStates.RESOLVED) {
                let {
                    guild: e,
                    target_application: t
                } = s;
                null != t ? null != r && (o = (0, L.getAssetImage)(t.id, r, 1024)) : null != e && "string" == typeof e.splash && (o = M.default.getGuildSplashURL({
                    id: e.id,
                    splash: e.splash
                }))
            }
            return {
                redirectTo: u,
                splash: o
            }
        }
        componentDidMount() {
            let {
                inviteKey: e,
                hasLoadedExperiments: t,
                isAuthenticated: n
            } = this.props;
            null != e && (!t && n && d.default.getExperiments(!0), R.default.track(q.AnalyticEvents.INVITE_OPENED, {
                invite_code: (0, g.parseInviteCodeFromInviteKey)(e),
                load_time: D.default.getTimeSinceNavigationStart()
            }, {
                flush: !0
            })), (t || Q.CONFERENCE_MODE_ENABLED) && this.resolveInvite(), this.resolveGiftCode(), this.resolveGuildTemplate(), E.default.initialize()
        }
        componentDidUpdate(e) {
            var t, n;
            !e.hasLoadedExperiments && this.props.hasLoadedExperiments && !Q.CONFERENCE_MODE_ENABLED && this.resolveInvite(), (null === (t = e.invite) || void 0 === t ? void 0 : t.state) !== (null === (n = this.props.invite) || void 0 === n ? void 0 : n.state) && this.maybeFetchApplicationSplash()
        }
        componentWillUnmount() {
            E.default.terminate()
        }
        maybeFetchApplicationSplash() {
            let {
                invite: e
            } = this.props;
            if ((null == e ? void 0 : e.state) === q.InviteStates.RESOLVED) {
                let {
                    target_application: t
                } = e;
                null != t && (0, L.fetchAssetIds)(t.id, ["embedded_splash"]).then(e => {
                    let [t] = e;
                    return this.setState({
                        backgroundId: t
                    })
                })
            }
        }
        resolveInvite() {
            let {
                inviteKey: e
            } = this.props;
            if (null == e) return;
            let t = async () => {
                let {
                    invite: t
                } = await f.default.resolveInvite(e, q.PageAnalyticsLocations.INVITE);
                null != t && (0, I.updateAuthInvite)(t)
            };
            t(), f.default.openNativeAppModal(e)
        }
        resolveGuildTemplate() {
            let {
                guildTemplateCode: e
            } = this.props;
            null != e && (R.default.track(q.AnalyticEvents.GUILD_TEMPLATE_OPENED, {
                guild_template_code: e,
                load_time: D.default.getTimeSinceNavigationStart()
            }, {
                flush: !0
            }), T.default.resolveGuildTemplate(e), T.default.openNativeAppModal(e))
        }
        resolveGiftCode() {
            let {
                giftCode: e
            } = this.props;
            null != e && c.default.resolveGiftCode(e, !0, !0).then(t => {
                null != t && null == t.giftCode.promotion && o.default.wait(() => c.default.openNativeGiftCodeModal(e))
            })
        }
        render() {
            let {
                splash: e,
                redirectTo: t
            } = this.state, {
                inviteKey: n
            } = this.props;
            return (0, s.jsxs)(U.default, {
                splash: e,
                children: [(0, s.jsx)(_.default, {
                    path: q.Routes.LOGIN_HANDOFF,
                    render: e => (0, s.jsx)(ee, {
                        ...e,
                        redirectTo: t
                    })
                }), (0, s.jsx)(_.default, {
                    impressionName: r.ImpressionNames.USER_LOGIN,
                    path: q.Routes.LOGIN,
                    render: e => (0, s.jsx)($, {
                        ...e,
                        redirectTo: t
                    })
                }), (0, s.jsx)(_.default, {
                    impressionName: r.ImpressionNames.USER_REGISTRATION,
                    path: q.Routes.REGISTER,
                    render: e => Q.CONFERENCE_MODE_ENABLED ? (0, s.jsx)(et, {
                        ...e,
                        redirectTo: t,
                        inviteKey: n
                    }) : (0, s.jsx)(el, {
                        ...e,
                        redirectTo: t
                    })
                }), (0, s.jsx)(_.default, {
                    path: q.Routes.GIFT_CODE_LOGIN(":giftCode"),
                    render: e => (0, s.jsx)(es, {
                        login: !0,
                        ...e
                    })
                }), (0, s.jsx)(_.default, {
                    path: q.Routes.GIFT_CODE(":giftCode"),
                    render: e => (0, s.jsx)(es, {
                        ...e
                    })
                }), (0, s.jsx)(_.default, {
                    path: [q.Routes.INVITE_LOGIN(":inviteCode"), q.Routes.INVITE(":inviteCode")],
                    render: e => {
                        let {
                            match: {
                                params: {
                                    inviteCode: t
                                },
                                path: n
                            },
                            location: a,
                            transitionTo: l
                        } = e, r = (0, g.generateInviteKeyFromUrlParams)(t, a.search);
                        return i.isMobile || i.isTablet ? (0, s.jsx)(ea, {
                            inviteKey: r,
                            transitionTo: l
                        }, r) : (0, s.jsx)(et, {
                            inviteKey: r,
                            location: a,
                            transitionTo: l,
                            login: n === q.Routes.INVITE_LOGIN(":inviteCode")
                        })
                    }
                }), (0, s.jsx)(_.default, {
                    path: [q.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"), q.Routes.GUILD_TEMPLATE(":guildTemplateCode")],
                    render: e => {
                        let {
                            match: {
                                params: {
                                    guildTemplateCode: t
                                },
                                path: n
                            },
                            location: a,
                            transitionTo: l
                        } = e;
                        return i.isMobile || i.isTablet ? (0, s.jsx)(k.default, {
                            code: t
                        }, t) : (0, s.jsx)(en, {
                            code: t,
                            location: a,
                            transitionTo: l,
                            login: n === q.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")
                        })
                    }
                }), (0, s.jsx)(_.default, {
                    path: q.Routes.VERIFY,
                    render: e => (0, s.jsx)(eu, {
                        ...e
                    })
                }), (0, s.jsx)(_.default, {
                    path: q.Routes.VERIFY_HUB_EMAIL,
                    render: e => (0, s.jsx)(eE, {
                        ...e
                    })
                }), (0, s.jsx)(_.default, {
                    path: q.Routes.VERIFY_REQUEST,
                    render: e => (0, s.jsx)(eo, {
                        ...e
                    })
                }), (0, s.jsx)(_.default, {
                    path: q.Routes.DISABLE_EMAIL_NOTIFICATIONS,
                    render: e => (0, s.jsx)(ec, {
                        ...e
                    })
                }), (0, s.jsx)(_.default, {
                    path: q.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: e => (0, s.jsx)(ef, {
                        ...e
                    })
                }), (0, s.jsx)(_.default, {
                    path: q.Routes.AUTHORIZE_IP,
                    render: e => (0, s.jsx)(er, {
                        ...e
                    })
                }), (0, s.jsx)(_.default, {
                    path: q.Routes.REJECT_IP,
                    render: e => (0, s.jsx)(ed, {
                        source: q.Routes.REJECT_IP,
                        ...e
                    })
                }), (0, s.jsx)(_.default, {
                    path: q.Routes.REJECT_MFA,
                    render: e => (0, s.jsx)(ed, {
                        source: q.Routes.REJECT_MFA,
                        ...e
                    })
                }), (0, s.jsx)(_.default, {
                    path: q.Routes.AUTHORIZE_PAYMENT,
                    render: e => (0, s.jsx)(ei, {
                        ...e
                    })
                }), (0, s.jsx)(_.default, {
                    path: q.Routes.RESET,
                    render: e => (0, s.jsx)(ed, {
                        source: q.Routes.RESET,
                        ...e
                    })
                }), (0, s.jsx)(_.default, {
                    path: q.Routes.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: e => (0, s.jsx)(eI, {
                        ...e
                    })
                }), (0, s.jsx)(_.default, {
                    path: q.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
                    render: e => (0, s.jsx)(e_, {
                        ...e
                    })
                }), (0, s.jsx)(_.default, {
                    path: q.Routes.REPORT,
                    render: e => (0, s.jsx)(eh, {
                        ...e
                    })
                }), (0, s.jsx)(_.default, {
                    path: q.Routes.REPORT_SECOND_LOOK,
                    render: e => (0, s.jsx)(ep, {
                        ...e
                    })
                })]
            })
        }
        constructor(...e) {
            super(...e), this.state = {
                splash: null,
                redirectTo: null,
                backgroundId: null
            }
        }
    }
    var eT = u.default.connectStores([S.default, O.default, v.default, C.default, m.default], e => {
        var t, n, s;
        let {
            match: a,
            location: l
        } = e, r = null == a ? void 0 : null === (t = a.params) || void 0 === t ? void 0 : t.inviteCode, i = Q.CONFERENCE_MODE_ENABLED ? Q.DEFAULT_INVITE_CODE : void 0, u = null != r ? (0, g.generateInviteKeyFromUrlParams)(r, l.search) : i, o = null == a ? void 0 : null === (n = a.params) || void 0 === n ? void 0 : n.giftCode, d = null == a ? void 0 : null === (s = a.params) || void 0 === s ? void 0 : s.guildTemplateCode;
        return {
            inviteKey: u,
            isAuthenticated: S.default.isAuthenticated(),
            giftCode: o,
            guildTemplateCode: d,
            gift: null != o ? v.default.get(o) : null,
            invite: null != u ? O.default.getInvite(u) : null,
            guildTemplate: null != d ? m.default.getGuildTemplate(d) : null,
            hasLoadedExperiments: C.default.hasLoadedExperiments
        }
    })(em)
}