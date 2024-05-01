function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var s = n("735250"),
        a = n("470079"),
        l = n("593473"),
        i = n("990547"),
        r = n("873546"),
        u = n("442837"),
        o = n("570140"),
        d = n("893776"),
        c = n("533307"),
        f = n("447543"),
        E = n("126399"),
        _ = n("765717"),
        I = n("267394"),
        p = n("761305"),
        h = n("698177"),
        T = n("409059"),
        N = n("962220"),
        g = n("637776"),
        m = n("264229"),
        A = n("677760"),
        S = n("314897"),
        v = n("828695"),
        C = n("82142"),
        O = n("701190"),
        R = n("626135"),
        x = n("81063"),
        L = n("449934"),
        M = n("768581"),
        D = n("625054"),
        P = n("645499"),
        j = n("320830"),
        U = n("721751"),
        b = n("718182"),
        G = n("223543"),
        B = n("73906"),
        y = n("299852"),
        F = n("39514"),
        V = n("236446"),
        k = n("9325"),
        w = n("344295"),
        H = n("781428"),
        Y = n("209411"),
        K = n("649156"),
        W = n("109894"),
        z = n("424044"),
        J = n("479495"),
        X = n("881317"),
        Z = n("886806"),
        q = n("981631"),
        Q = n("188785");
    n("179645");
    u.default.initialize();
    let $ = (0, j.default)(H.default),
        ee = (0, j.default)(Y.default),
        et = (0, j.default)(w.default),
        en = (0, j.default)(V.default),
        es = (0, j.default)(F.default),
        ea = (0, j.default)(A.default),
        el = (0, j.default)(W.default),
        ei = (0, j.default)(b.default),
        er = (0, j.default)(G.default),
        eu = (0, j.default)(Z.default),
        eo = (0, j.default)(h.default),
        ed = (0, j.default)(J.default),
        ec = (0, j.default)(y.default),
        ef = (0, j.default)(p.default),
        eE = (0, j.default)(g.default),
        e_ = (0, j.default)(B.default),
        eI = (0, j.default)(K.default),
        ep = (0, j.default)(X.default),
        eh = (0, j.default)(z.default);
    class eT extends a.PureComponent {
        static getDerivedStateFromProps(e, t) {
            var n;
            let {
                invite: s,
                location: a
            } = e, {
                backgroundId: i
            } = t, r = null !== (n = (0, l.parse)(a.search).redirect_to) && void 0 !== n ? n : null;
            (null == r || "" === r || !(0, P.isSafeRedirect)(r) || r.startsWith(q.Routes.ME)) && (r = null);
            let u = null;
            if (null == s) u = (0, L.getArtForPath)(r);
            else if ((null == s ? void 0 : s.state) === q.InviteStates.RESOLVED) {
                let {
                    guild: e,
                    target_application: t
                } = s;
                null != t ? null != i && (u = (0, x.getAssetImage)(t.id, i, 1024)) : null != e && "string" == typeof e.splash && (u = M.default.getGuildSplashURL({
                    id: e.id,
                    splash: e.splash
                }))
            }
            return {
                redirectTo: r,
                splash: u
            }
        }
        componentDidMount() {
            let {
                inviteKey: e,
                hasLoadedExperiments: t,
                isAuthenticated: n
            } = this.props;
            null != e && (!t && n && d.default.getExperiments(!0), R.default.track(q.AnalyticEvents.INVITE_OPENED, {
                invite_code: (0, m.parseInviteCodeFromInviteKey)(e),
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
                null != t && (0, x.fetchAssetIds)(t.id, ["embedded_splash"]).then(e => {
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
            if (null != e)(async () => {
                let {
                    invite: t
                } = await f.default.resolveInvite(e, q.PageAnalyticsLocations.INVITE);
                null != t && (0, I.updateAuthInvite)(t)
            })(), f.default.openNativeAppModal(e)
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
            }), N.default.resolveGuildTemplate(e), N.default.openNativeAppModal(e))
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
                    impressionName: i.ImpressionNames.USER_LOGIN,
                    path: q.Routes.LOGIN,
                    render: e => (0, s.jsx)($, {
                        ...e,
                        redirectTo: t
                    })
                }), (0, s.jsx)(_.default, {
                    impressionName: i.ImpressionNames.USER_REGISTRATION,
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
                        } = e, i = (0, m.generateInviteKeyFromUrlParams)(t, a.search);
                        return r.isMobile || r.isTablet ? (0, s.jsx)(ea, {
                            inviteKey: i,
                            transitionTo: l
                        }, i) : (0, s.jsx)(et, {
                            inviteKey: i,
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
                        return r.isMobile || r.isTablet ? (0, s.jsx)(k.default, {
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
                    render: e => (0, s.jsx)(ei, {
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
                    render: e => (0, s.jsx)(er, {
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
                    render: e => (0, s.jsx)(ep, {
                        ...e
                    })
                }), (0, s.jsx)(_.default, {
                    path: q.Routes.REPORT_SECOND_LOOK,
                    render: e => (0, s.jsx)(eh, {
                        ...e
                    })
                })]
            })
        }
        constructor(...e) {
            var t, n, s;
            super(...e), t = this, s = {
                splash: null,
                redirectTo: null,
                backgroundId: null
            }, (n = "state") in t ? Object.defineProperty(t, n, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = s
        }
    }
    t.default = u.default.connectStores([S.default, O.default, C.default, v.default, T.default], e => {
        var t, n, s;
        let {
            match: a,
            location: l
        } = e, i = null == a ? void 0 : null === (t = a.params) || void 0 === t ? void 0 : t.inviteCode, r = Q.CONFERENCE_MODE_ENABLED ? Q.DEFAULT_INVITE_CODE : void 0, u = null != i ? (0, m.generateInviteKeyFromUrlParams)(i, l.search) : r, o = null == a ? void 0 : null === (n = a.params) || void 0 === n ? void 0 : n.giftCode, d = null == a ? void 0 : null === (s = a.params) || void 0 === s ? void 0 : s.guildTemplateCode;
        return {
            inviteKey: u,
            isAuthenticated: S.default.isAuthenticated(),
            giftCode: o,
            guildTemplateCode: d,
            gift: null != o ? C.default.get(o) : null,
            invite: null != u ? O.default.getInvite(u) : null,
            guildTemplate: null != d ? T.default.getGuildTemplate(d) : null,
            hasLoadedExperiments: v.default.hasLoadedExperiments
        }
    })(eT)
}