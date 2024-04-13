function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var s = n("735250"),
        a = n("470079"),
        i = n("593473"),
        l = n("990547"),
        r = n("873546"),
        u = n("442837"),
        o = n("570140"),
        d = n("893776"),
        c = n("533307"),
        f = n("447543"),
        E = n("126399"),
        I = n("765717"),
        h = n("267394"),
        _ = n("761305"),
        p = n("698177"),
        T = n("409059"),
        m = n("962220"),
        N = n("637776"),
        g = n("264229"),
        A = n("677760"),
        S = n("314897"),
        v = n("828695"),
        O = n("82142"),
        C = n("701190"),
        R = n("626135"),
        x = n("81063"),
        D = n("449934"),
        P = n("768581"),
        L = n("625054"),
        M = n("645499"),
        b = n("320830"),
        j = n("721751"),
        U = n("718182"),
        B = n("223543"),
        G = n("73906"),
        y = n("299852"),
        F = n("39514"),
        k = n("236446"),
        V = n("9325"),
        H = n("344295"),
        w = n("781428"),
        W = n("209411"),
        Y = n("649156"),
        K = n("109894"),
        z = n("424044"),
        X = n("479495"),
        J = n("881317"),
        Z = n("886806"),
        Q = n("981631"),
        q = n("188785");
    n("179645");
    u.default.initialize();
    let $ = (0, b.default)(w.default),
        ee = (0, b.default)(W.default),
        et = (0, b.default)(H.default),
        en = (0, b.default)(k.default),
        es = (0, b.default)(F.default),
        ea = (0, b.default)(A.default),
        ei = (0, b.default)(K.default),
        el = (0, b.default)(U.default),
        er = (0, b.default)(B.default),
        eu = (0, b.default)(Z.default),
        eo = (0, b.default)(p.default),
        ed = (0, b.default)(X.default),
        ec = (0, b.default)(y.default),
        ef = (0, b.default)(_.default),
        eE = (0, b.default)(N.default),
        eI = (0, b.default)(G.default),
        eh = (0, b.default)(Y.default),
        e_ = (0, b.default)(J.default),
        ep = (0, b.default)(z.default);
    class eT extends a.PureComponent {
        static getDerivedStateFromProps(e, t) {
            var n;
            let {
                invite: s,
                location: a
            } = e, {
                backgroundId: l
            } = t, r = null !== (n = (0, i.parse)(a.search).redirect_to) && void 0 !== n ? n : null;
            (null == r || "" === r || !(0, M.isSafeRedirect)(r) || r.startsWith(Q.Routes.ME)) && (r = null);
            let u = null;
            if (null == s) u = (0, D.getArtForPath)(r);
            else if ((null == s ? void 0 : s.state) === Q.InviteStates.RESOLVED) {
                let {
                    guild: e,
                    target_application: t
                } = s;
                null != t ? null != l && (u = (0, x.getAssetImage)(t.id, l, 1024)) : null != e && "string" == typeof e.splash && (u = P.default.getGuildSplashURL({
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
            null != e && (!t && n && d.default.getExperiments(!0), R.default.track(Q.AnalyticEvents.INVITE_OPENED, {
                invite_code: (0, g.parseInviteCodeFromInviteKey)(e),
                load_time: L.default.getTimeSinceNavigationStart()
            }, {
                flush: !0
            })), (t || q.CONFERENCE_MODE_ENABLED) && this.resolveInvite(), this.resolveGiftCode(), this.resolveGuildTemplate(), E.default.initialize()
        }
        componentDidUpdate(e) {
            var t, n;
            !e.hasLoadedExperiments && this.props.hasLoadedExperiments && !q.CONFERENCE_MODE_ENABLED && this.resolveInvite(), (null === (t = e.invite) || void 0 === t ? void 0 : t.state) !== (null === (n = this.props.invite) || void 0 === n ? void 0 : n.state) && this.maybeFetchApplicationSplash()
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
                null != t && (0, h.updateAuthInvite)(t)
            })(), f.default.openNativeAppModal(e)
        }
        resolveGuildTemplate() {
            let {
                guildTemplateCode: e
            } = this.props;
            null != e && (R.default.track(Q.AnalyticEvents.GUILD_TEMPLATE_OPENED, {
                guild_template_code: e,
                load_time: L.default.getTimeSinceNavigationStart()
            }, {
                flush: !0
            }), m.default.resolveGuildTemplate(e), m.default.openNativeAppModal(e))
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
            return (0, s.jsxs)(j.default, {
                splash: e,
                children: [(0, s.jsx)(I.default, {
                    path: Q.Routes.LOGIN_HANDOFF,
                    render: e => (0, s.jsx)(ee, {
                        ...e,
                        redirectTo: t
                    })
                }), (0, s.jsx)(I.default, {
                    impressionName: l.ImpressionNames.USER_LOGIN,
                    path: Q.Routes.LOGIN,
                    render: e => (0, s.jsx)($, {
                        ...e,
                        redirectTo: t
                    })
                }), (0, s.jsx)(I.default, {
                    impressionName: l.ImpressionNames.USER_REGISTRATION,
                    path: Q.Routes.REGISTER,
                    render: e => q.CONFERENCE_MODE_ENABLED ? (0, s.jsx)(et, {
                        ...e,
                        redirectTo: t,
                        inviteKey: n
                    }) : (0, s.jsx)(ei, {
                        ...e,
                        redirectTo: t
                    })
                }), (0, s.jsx)(I.default, {
                    path: Q.Routes.GIFT_CODE_LOGIN(":giftCode"),
                    render: e => (0, s.jsx)(es, {
                        login: !0,
                        ...e
                    })
                }), (0, s.jsx)(I.default, {
                    path: Q.Routes.GIFT_CODE(":giftCode"),
                    render: e => (0, s.jsx)(es, {
                        ...e
                    })
                }), (0, s.jsx)(I.default, {
                    path: [Q.Routes.INVITE_LOGIN(":inviteCode"), Q.Routes.INVITE(":inviteCode")],
                    render: e => {
                        let {
                            match: {
                                params: {
                                    inviteCode: t
                                },
                                path: n
                            },
                            location: a,
                            transitionTo: i
                        } = e, l = (0, g.generateInviteKeyFromUrlParams)(t, a.search);
                        return r.isMobile || r.isTablet ? (0, s.jsx)(ea, {
                            inviteKey: l,
                            transitionTo: i
                        }, l) : (0, s.jsx)(et, {
                            inviteKey: l,
                            location: a,
                            transitionTo: i,
                            login: n === Q.Routes.INVITE_LOGIN(":inviteCode")
                        })
                    }
                }), (0, s.jsx)(I.default, {
                    path: [Q.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"), Q.Routes.GUILD_TEMPLATE(":guildTemplateCode")],
                    render: e => {
                        let {
                            match: {
                                params: {
                                    guildTemplateCode: t
                                },
                                path: n
                            },
                            location: a,
                            transitionTo: i
                        } = e;
                        return r.isMobile || r.isTablet ? (0, s.jsx)(V.default, {
                            code: t
                        }, t) : (0, s.jsx)(en, {
                            code: t,
                            location: a,
                            transitionTo: i,
                            login: n === Q.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")
                        })
                    }
                }), (0, s.jsx)(I.default, {
                    path: Q.Routes.VERIFY,
                    render: e => (0, s.jsx)(eu, {
                        ...e
                    })
                }), (0, s.jsx)(I.default, {
                    path: Q.Routes.VERIFY_HUB_EMAIL,
                    render: e => (0, s.jsx)(eE, {
                        ...e
                    })
                }), (0, s.jsx)(I.default, {
                    path: Q.Routes.VERIFY_REQUEST,
                    render: e => (0, s.jsx)(eo, {
                        ...e
                    })
                }), (0, s.jsx)(I.default, {
                    path: Q.Routes.DISABLE_EMAIL_NOTIFICATIONS,
                    render: e => (0, s.jsx)(ec, {
                        ...e
                    })
                }), (0, s.jsx)(I.default, {
                    path: Q.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: e => (0, s.jsx)(ef, {
                        ...e
                    })
                }), (0, s.jsx)(I.default, {
                    path: Q.Routes.AUTHORIZE_IP,
                    render: e => (0, s.jsx)(el, {
                        ...e
                    })
                }), (0, s.jsx)(I.default, {
                    path: Q.Routes.REJECT_IP,
                    render: e => (0, s.jsx)(ed, {
                        source: Q.Routes.REJECT_IP,
                        ...e
                    })
                }), (0, s.jsx)(I.default, {
                    path: Q.Routes.REJECT_MFA,
                    render: e => (0, s.jsx)(ed, {
                        source: Q.Routes.REJECT_MFA,
                        ...e
                    })
                }), (0, s.jsx)(I.default, {
                    path: Q.Routes.AUTHORIZE_PAYMENT,
                    render: e => (0, s.jsx)(er, {
                        ...e
                    })
                }), (0, s.jsx)(I.default, {
                    path: Q.Routes.RESET,
                    render: e => (0, s.jsx)(ed, {
                        source: Q.Routes.RESET,
                        ...e
                    })
                }), (0, s.jsx)(I.default, {
                    path: Q.Routes.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: e => (0, s.jsx)(eh, {
                        ...e
                    })
                }), (0, s.jsx)(I.default, {
                    path: Q.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
                    render: e => (0, s.jsx)(eI, {
                        ...e
                    })
                }), (0, s.jsx)(I.default, {
                    path: Q.Routes.REPORT,
                    render: e => (0, s.jsx)(e_, {
                        ...e
                    })
                }), (0, s.jsx)(I.default, {
                    path: Q.Routes.REPORT_SECOND_LOOK,
                    render: e => (0, s.jsx)(ep, {
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
    t.default = u.default.connectStores([S.default, C.default, O.default, v.default, T.default], e => {
        var t, n, s;
        let {
            match: a,
            location: i
        } = e, l = null == a ? void 0 : null === (t = a.params) || void 0 === t ? void 0 : t.inviteCode, r = q.CONFERENCE_MODE_ENABLED ? q.DEFAULT_INVITE_CODE : void 0, u = null != l ? (0, g.generateInviteKeyFromUrlParams)(l, i.search) : r, o = null == a ? void 0 : null === (n = a.params) || void 0 === n ? void 0 : n.giftCode, d = null == a ? void 0 : null === (s = a.params) || void 0 === s ? void 0 : s.guildTemplateCode;
        return {
            inviteKey: u,
            isAuthenticated: S.default.isAuthenticated(),
            giftCode: o,
            guildTemplateCode: d,
            gift: null != o ? O.default.get(o) : null,
            invite: null != u ? C.default.getInvite(u) : null,
            guildTemplate: null != d ? T.default.getGuildTemplate(d) : null,
            hasLoadedExperiments: v.default.hasLoadedExperiments
        }
    })(eT)
}