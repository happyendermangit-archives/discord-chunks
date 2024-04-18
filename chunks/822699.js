function(e, t, s) {
    "use strict";
    s.r(t), s("47120");
    var n = s("735250"),
        a = s("470079"),
        l = s("593473"),
        i = s("990547"),
        r = s("873546"),
        u = s("442837"),
        o = s("570140"),
        d = s("893776"),
        c = s("533307"),
        f = s("447543"),
        E = s("126399"),
        I = s("765717"),
        _ = s("267394"),
        h = s("761305"),
        p = s("698177"),
        T = s("409059"),
        N = s("962220"),
        g = s("637776"),
        m = s("264229"),
        A = s("677760"),
        S = s("314897"),
        v = s("828695"),
        C = s("82142"),
        O = s("701190"),
        R = s("626135"),
        x = s("81063"),
        D = s("449934"),
        L = s("768581"),
        P = s("625054"),
        M = s("645499"),
        j = s("320830"),
        b = s("721751"),
        U = s("718182"),
        B = s("223543"),
        G = s("73906"),
        y = s("299852"),
        F = s("39514"),
        V = s("236446"),
        k = s("9325"),
        H = s("344295"),
        w = s("781428"),
        W = s("209411"),
        Y = s("649156"),
        K = s("109894"),
        z = s("424044"),
        X = s("479495"),
        J = s("881317"),
        Z = s("886806"),
        Q = s("981631"),
        q = s("188785");
    s("179645");
    u.default.initialize();
    let $ = (0, j.default)(w.default),
        ee = (0, j.default)(W.default),
        et = (0, j.default)(H.default),
        es = (0, j.default)(V.default),
        en = (0, j.default)(F.default),
        ea = (0, j.default)(A.default),
        el = (0, j.default)(K.default),
        ei = (0, j.default)(U.default),
        er = (0, j.default)(B.default),
        eu = (0, j.default)(Z.default),
        eo = (0, j.default)(p.default),
        ed = (0, j.default)(X.default),
        ec = (0, j.default)(y.default),
        ef = (0, j.default)(h.default),
        eE = (0, j.default)(g.default),
        eI = (0, j.default)(G.default),
        e_ = (0, j.default)(Y.default),
        eh = (0, j.default)(J.default),
        ep = (0, j.default)(z.default);
    class eT extends a.PureComponent {
        static getDerivedStateFromProps(e, t) {
            var s;
            let {
                invite: n,
                location: a
            } = e, {
                backgroundId: i
            } = t, r = null !== (s = (0, l.parse)(a.search).redirect_to) && void 0 !== s ? s : null;
            (null == r || "" === r || !(0, M.isSafeRedirect)(r) || r.startsWith(Q.Routes.ME)) && (r = null);
            let u = null;
            if (null == n) u = (0, D.getArtForPath)(r);
            else if ((null == n ? void 0 : n.state) === Q.InviteStates.RESOLVED) {
                let {
                    guild: e,
                    target_application: t
                } = n;
                null != t ? null != i && (u = (0, x.getAssetImage)(t.id, i, 1024)) : null != e && "string" == typeof e.splash && (u = L.default.getGuildSplashURL({
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
                isAuthenticated: s
            } = this.props;
            null != e && (!t && s && d.default.getExperiments(!0), R.default.track(Q.AnalyticEvents.INVITE_OPENED, {
                invite_code: (0, m.parseInviteCodeFromInviteKey)(e),
                load_time: P.default.getTimeSinceNavigationStart()
            }, {
                flush: !0
            })), (t || q.CONFERENCE_MODE_ENABLED) && this.resolveInvite(), this.resolveGiftCode(), this.resolveGuildTemplate(), E.default.initialize()
        }
        componentDidUpdate(e) {
            var t, s;
            !e.hasLoadedExperiments && this.props.hasLoadedExperiments && !q.CONFERENCE_MODE_ENABLED && this.resolveInvite(), (null === (t = e.invite) || void 0 === t ? void 0 : t.state) !== (null === (s = this.props.invite) || void 0 === s ? void 0 : s.state) && this.maybeFetchApplicationSplash()
        }
        componentWillUnmount() {
            E.default.terminate()
        }
        maybeFetchApplicationSplash() {
            let {
                invite: e
            } = this.props;
            if ((null == e ? void 0 : e.state) === Q.InviteStates.RESOLVED) {
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
                } = await f.default.resolveInvite(e, Q.PageAnalyticsLocations.INVITE);
                null != t && (0, _.updateAuthInvite)(t)
            })(), f.default.openNativeAppModal(e)
        }
        resolveGuildTemplate() {
            let {
                guildTemplateCode: e
            } = this.props;
            null != e && (R.default.track(Q.AnalyticEvents.GUILD_TEMPLATE_OPENED, {
                guild_template_code: e,
                load_time: P.default.getTimeSinceNavigationStart()
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
                inviteKey: s
            } = this.props;
            return (0, n.jsxs)(b.default, {
                splash: e,
                children: [(0, n.jsx)(I.default, {
                    path: Q.Routes.LOGIN_HANDOFF,
                    render: e => (0, n.jsx)(ee, {
                        ...e,
                        redirectTo: t
                    })
                }), (0, n.jsx)(I.default, {
                    impressionName: i.ImpressionNames.USER_LOGIN,
                    path: Q.Routes.LOGIN,
                    render: e => (0, n.jsx)($, {
                        ...e,
                        redirectTo: t
                    })
                }), (0, n.jsx)(I.default, {
                    impressionName: i.ImpressionNames.USER_REGISTRATION,
                    path: Q.Routes.REGISTER,
                    render: e => q.CONFERENCE_MODE_ENABLED ? (0, n.jsx)(et, {
                        ...e,
                        redirectTo: t,
                        inviteKey: s
                    }) : (0, n.jsx)(el, {
                        ...e,
                        redirectTo: t
                    })
                }), (0, n.jsx)(I.default, {
                    path: Q.Routes.GIFT_CODE_LOGIN(":giftCode"),
                    render: e => (0, n.jsx)(en, {
                        login: !0,
                        ...e
                    })
                }), (0, n.jsx)(I.default, {
                    path: Q.Routes.GIFT_CODE(":giftCode"),
                    render: e => (0, n.jsx)(en, {
                        ...e
                    })
                }), (0, n.jsx)(I.default, {
                    path: [Q.Routes.INVITE_LOGIN(":inviteCode"), Q.Routes.INVITE(":inviteCode")],
                    render: e => {
                        let {
                            match: {
                                params: {
                                    inviteCode: t
                                },
                                path: s
                            },
                            location: a,
                            transitionTo: l
                        } = e, i = (0, m.generateInviteKeyFromUrlParams)(t, a.search);
                        return r.isMobile || r.isTablet ? (0, n.jsx)(ea, {
                            inviteKey: i,
                            transitionTo: l
                        }, i) : (0, n.jsx)(et, {
                            inviteKey: i,
                            location: a,
                            transitionTo: l,
                            login: s === Q.Routes.INVITE_LOGIN(":inviteCode")
                        })
                    }
                }), (0, n.jsx)(I.default, {
                    path: [Q.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"), Q.Routes.GUILD_TEMPLATE(":guildTemplateCode")],
                    render: e => {
                        let {
                            match: {
                                params: {
                                    guildTemplateCode: t
                                },
                                path: s
                            },
                            location: a,
                            transitionTo: l
                        } = e;
                        return r.isMobile || r.isTablet ? (0, n.jsx)(k.default, {
                            code: t
                        }, t) : (0, n.jsx)(es, {
                            code: t,
                            location: a,
                            transitionTo: l,
                            login: s === Q.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")
                        })
                    }
                }), (0, n.jsx)(I.default, {
                    path: Q.Routes.VERIFY,
                    render: e => (0, n.jsx)(eu, {
                        ...e
                    })
                }), (0, n.jsx)(I.default, {
                    path: Q.Routes.VERIFY_HUB_EMAIL,
                    render: e => (0, n.jsx)(eE, {
                        ...e
                    })
                }), (0, n.jsx)(I.default, {
                    path: Q.Routes.VERIFY_REQUEST,
                    render: e => (0, n.jsx)(eo, {
                        ...e
                    })
                }), (0, n.jsx)(I.default, {
                    path: Q.Routes.DISABLE_EMAIL_NOTIFICATIONS,
                    render: e => (0, n.jsx)(ec, {
                        ...e
                    })
                }), (0, n.jsx)(I.default, {
                    path: Q.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: e => (0, n.jsx)(ef, {
                        ...e
                    })
                }), (0, n.jsx)(I.default, {
                    path: Q.Routes.AUTHORIZE_IP,
                    render: e => (0, n.jsx)(ei, {
                        ...e
                    })
                }), (0, n.jsx)(I.default, {
                    path: Q.Routes.REJECT_IP,
                    render: e => (0, n.jsx)(ed, {
                        source: Q.Routes.REJECT_IP,
                        ...e
                    })
                }), (0, n.jsx)(I.default, {
                    path: Q.Routes.REJECT_MFA,
                    render: e => (0, n.jsx)(ed, {
                        source: Q.Routes.REJECT_MFA,
                        ...e
                    })
                }), (0, n.jsx)(I.default, {
                    path: Q.Routes.AUTHORIZE_PAYMENT,
                    render: e => (0, n.jsx)(er, {
                        ...e
                    })
                }), (0, n.jsx)(I.default, {
                    path: Q.Routes.RESET,
                    render: e => (0, n.jsx)(ed, {
                        source: Q.Routes.RESET,
                        ...e
                    })
                }), (0, n.jsx)(I.default, {
                    path: Q.Routes.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: e => (0, n.jsx)(e_, {
                        ...e
                    })
                }), (0, n.jsx)(I.default, {
                    path: Q.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
                    render: e => (0, n.jsx)(eI, {
                        ...e
                    })
                }), (0, n.jsx)(I.default, {
                    path: Q.Routes.REPORT,
                    render: e => (0, n.jsx)(eh, {
                        ...e
                    })
                }), (0, n.jsx)(I.default, {
                    path: Q.Routes.REPORT_SECOND_LOOK,
                    render: e => (0, n.jsx)(ep, {
                        ...e
                    })
                })]
            })
        }
        constructor(...e) {
            var t, s, n;
            super(...e), t = this, n = {
                splash: null,
                redirectTo: null,
                backgroundId: null
            }, (s = "state") in t ? Object.defineProperty(t, s, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[s] = n
        }
    }
    t.default = u.default.connectStores([S.default, O.default, C.default, v.default, T.default], e => {
        var t, s, n;
        let {
            match: a,
            location: l
        } = e, i = null == a ? void 0 : null === (t = a.params) || void 0 === t ? void 0 : t.inviteCode, r = q.CONFERENCE_MODE_ENABLED ? q.DEFAULT_INVITE_CODE : void 0, u = null != i ? (0, m.generateInviteKeyFromUrlParams)(i, l.search) : r, o = null == a ? void 0 : null === (s = a.params) || void 0 === s ? void 0 : s.giftCode, d = null == a ? void 0 : null === (n = a.params) || void 0 === n ? void 0 : n.guildTemplateCode;
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