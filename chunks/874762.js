function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        Overlay: function() {
            return K
        },
        default: function() {
            return $
        }
    }), t("222007");
    var s = t("37983"),
        d = t("884691"),
        n = t("522632"),
        c = t("803182"),
        i = t("90915"),
        r = t("759843"),
        o = t("817792"),
        f = t("815157"),
        l = t("391679"),
        u = t("446674"),
        p = t("95410"),
        b = t("795137"),
        h = t("837319"),
        j = t("73749"),
        m = t("269936"),
        _ = t("231032"),
        E = t("724349"),
        g = t("883897"),
        I = t("338027"),
        T = t("271938"),
        O = t("599110"),
        R = t("98013"),
        v = t("924822"),
        w = t("773336"),
        S = t("50885"),
        A = t("49111"),
        N = t("492397"),
        C = t("53452");
    t("292687"), t("263901"), t("278163");
    let D = (0, m.makeLazy)({
            createPromise: () => t.el("545169").then(t.bind(t, "545169")),
            webpackId: "545169",
            name: "UnsupportedBrowser"
        }),
        L = (0, m.makeLazy)({
            createPromise: () => t.el("649486").then(t.bind(t, "649486")),
            webpackId: "649486",
            name: "DownloadApps"
        }),
        P = (0, m.makeLazy)({
            createPromise: () => t.el("254936").then(t.bind(t, "254936")),
            webpackId: "254936",
            name: "InviteProxy"
        }),
        y = (0, m.makeLazy)({
            createPromise: () => t.el("456320").then(t.bind(t, "456320")),
            webpackId: "456320",
            name: "VerifyConnectedAccount"
        }),
        M = (0, m.makeLazy)({
            createPromise: () => t.el("176384").then(t.bind(t, "176384")),
            webpackId: "176384",
            name: "LinkConnectedAccount"
        }),
        k = (0, m.makeLazy)({
            createPromise: () => t.el("324202").then(t.bind(t, "324202")),
            webpackId: "324202",
            name: "LinkAuthorize"
        }),
        x = (0, m.makeLazy)({
            createPromise: () => t.el("965179").then(t.bind(t, "965179")),
            webpackId: "965179",
            name: "ActivateDevice"
        }),
        U = (0, m.makeLazy)({
            createPromise: () => t.el("779020").then(t.bind(t, "779020")),
            webpackId: "779020",
            name: "ViewsWithMainInterface",
            memo: !0,
            id: "779020"
        }),
        G = (0, m.makeLazy)({
            createPromise: () => t.el("994509").then(t.bind(t, "994509")),
            webpackId: "994509",
            name: "XboxEdu"
        }),
        V = (0, m.makeLazy)({
            createPromise: () => t.el("225936").then(t.bind(t, "225936")),
            webpackId: "225936",
            name: "XboxPin"
        }),
        H = (0, m.makeLazy)({
            createPromise: () => t.el("549869").then(t.bind(t, "549869")),
            webpackId: "549869",
            name: "ViewsWithAuth"
        }),
        F = (0, m.makeLazy)({
            createPromise: () => t.el("337863").then(t.bind(t, "337863")),
            webpackId: "337863",
            name: "ViewsWithOAuth2"
        }),
        B = (0, m.makeLazy)({
            createPromise: () => t.el("765105").then(t.bind(t, "765105")),
            webpackId: "765105",
            name: "ViewsWithUnauthenticatedApplicationDirectory"
        }),
        W = (0, m.makeLazy)({
            createPromise: () => t.el("143416").then(t.bind(t, "143416")),
            webpackId: "143416",
            name: "BrowserHandoff"
        }),
        z = (0, m.makeLazy)({
            createPromise: () => t.el("995494").then(t.bind(t, "995494")),
            webpackId: "995494",
            name: "MobileWebHandoffFallback"
        }),
        K = (0, m.makeLazy)({
            createPromise: () => t.el("476427").then(t.bind(t, "476427")),
            webpackId: "476427",
            name: "Overlay"
        }),
        Y = (0, m.makeLazy)({
            createPromise: () => t.el("854908").then(t.bind(t, "854908")),
            webpackId: "854908",
            name: "SuspendedUserSafetyHubPage"
        }),
        Z = (0, m.makeLazy)({
            createPromise: () => t.el("816306").then(t.bind(t, "816306")),
            webpackId: "816306",
            name: "QuestsLandingPage"
        }),
        X = () => (0, s.jsx)(U, {}),
        q = new Set([A.Routes.LOGIN, A.Routes.LOGIN_HANDOFF, A.Routes.INVITE_LOGIN(":inviteCode"), A.Routes.GIFT_CODE_LOGIN(":giftCode"), A.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")]);

    function Q(e, a) {
        return a ? e.filter(e => !q.has(e)) : e
    }
    class J extends d.Component {
        componentDidMount() {
            S.default.cleanupDisplaySleep(), I.default.initialize()
        }
        componentWillUnmount() {
            I.default.terminate()
        }
        render() {
            let e;
            let {
                isAuthenticated: a,
                migrationStatus: t,
                skipsSettingDefaultPageTitle: d
            } = this.props;
            return e = t === E.MigrationStatus.IN_PROGRESS ? null : C.IS_APP_COMPATIBLE_BROWSER ? w.isPlatformEmbedded ? (0, s.jsxs)(i.Switch, {
                children: [(0, s.jsx)(i.Route, {
                    exact: !0,
                    path: A.Routes.INDEX,
                    render: () => (0, s.jsx)(b.default, {})
                }), (0, s.jsx)(j.default, {
                    exact: !0,
                    path: A.Routes.APPS,
                    component: L
                }), (0, s.jsx)(i.Route, {
                    path: Q([A.Routes.LOGIN, A.Routes.REGISTER, A.Routes.INVITE(":inviteCode"), A.Routes.INVITE_LOGIN(":inviteCode"), A.Routes.GIFT_CODE(":giftCode"), A.Routes.GIFT_CODE_LOGIN(":giftCode"), A.Routes.RESET], N.CONFERENCE_MODE_ENABLED),
                    component: H
                }), (0, s.jsx)(j.default, {
                    path: A.Routes.INVITE_PROXY(":channelId"),
                    component: P
                }), (0, s.jsx)(i.Redirect, {
                    from: A.Routes.INVITE(""),
                    to: A.Routes.LOGIN
                }), (0, s.jsx)(i.Redirect, {
                    from: A.Routes.GIFT_CODE(""),
                    to: A.Routes.LOGIN
                }), (0, s.jsx)(i.Route, {
                    render: X
                })]
            }) : (0, s.jsxs)(i.Switch, {
                children: [(0, s.jsx)(j.default, {
                    exact: !0,
                    path: A.Routes.INDEX,
                    render: () => (0, s.jsx)(b.default, {})
                }), (0, s.jsx)(i.Route, {
                    path: Q([A.Routes.LOGIN, A.Routes.LOGIN_HANDOFF, A.Routes.REGISTER, A.Routes.BILLING_PREFIX, A.Routes.BILLING_PROMOTION_REDEMPTION(":code"), A.Routes.INVITE(":inviteCode"), A.Routes.INVITE_LOGIN(":inviteCode"), A.Routes.GIFT_CODE(":giftCode"), A.Routes.GIFT_CODE_LOGIN(":giftCode"), A.Routes.GUILD_TEMPLATE(":guildTemplateCode"), A.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"), A.Routes.DISABLE_EMAIL_NOTIFICATIONS, A.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, A.Routes.RESET, A.Routes.REPORT, A.Routes.REPORT_SECOND_LOOK], N.CONFERENCE_MODE_ENABLED),
                    component: H
                }), a ? null : (0, s.jsx)(i.Route, {
                    path: A.Routes.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    component: H
                }), a ? null : (0, s.jsx)(i.Route, {
                    path: A.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
                    component: H
                }), (0, s.jsx)(i.Redirect, {
                    from: A.Routes.INVITE(""),
                    to: A.Routes.LOGIN
                }), (0, s.jsx)(j.default, {
                    path: A.Routes.INVITE_PROXY(":channelId"),
                    component: P
                }), (0, s.jsx)(i.Redirect, {
                    from: A.Routes.GIFT_CODE(""),
                    to: A.Routes.LOGIN
                }), (0, s.jsx)(j.default, {
                    path: A.Routes.QUESTS(":questId"),
                    component: Z,
                    impressionName: r.ImpressionNames.QUESTS_LANDING_PAGE,
                    impressionProperties: e => {
                        let {
                            computedMatch: a
                        } = e;
                        return {
                            quest_id: a.params.questId
                        }
                    }
                }), (0, s.jsx)(j.default, {
                    path: A.Routes.HANDOFF,
                    component: W
                }), (0, s.jsx)(j.default, {
                    path: A.Routes.MOBILE_WEB_HANDOFF,
                    component: z
                }), (0, s.jsx)(j.default, {
                    path: A.Routes.XBOX_EDU,
                    component: G
                }), (0, s.jsx)(j.default, {
                    path: A.Routes.XBOX_PIN,
                    component: V
                }), (0, s.jsx)(j.default, {
                    path: A.Routes.CONNECTION_LINK(":type"),
                    component: M
                }), (0, s.jsx)(j.default, {
                    path: A.Routes.CONNECTION_LINK_AUTHORIZE(":type"),
                    component: k
                }), (0, s.jsx)(j.default, {
                    path: A.Routes.ACTIVATE,
                    component: x
                }), (0, s.jsx)(j.default, {
                    path: A.Routes.CONNECTIONS(":type"),
                    component: y
                }), (0, s.jsx)(j.default, {
                    path: A.Routes.DOWNLOAD_QR_CODE_REDIRECT,
                    render: () => {
                        var e, a, t;
                        let s = null === (e = O.default.getSuperProperties()) || void 0 === e ? void 0 : e.os,
                            d = (0, n.parse)((null !== (t = window.location.search) && void 0 !== t ? t : "").substr(1)),
                            c = null === (a = d.referring_location) || void 0 === a ? void 0 : a.toString();
                        return ("iOS" === s || "Android" === s) && O.default.track(A.AnalyticEvents.DOWNLOAD_APP, {
                            platform: s,
                            ptb: !1,
                            released: !0,
                            has_e_mail: "true" === d.has_e_mail,
                            referring_location: c,
                            qr_code: !0
                        }), window.location.href = (0, R.getMobileDownloadLink)(null != c && "" !== c ? c : "qr_code", s), null
                    }
                }), (0, s.jsx)(j.default, {
                    path: A.Routes.OPEN_APP_FROM_EMAIL,
                    render: () => {
                        var e, a;
                        let t = null === (e = O.default.getSuperProperties()) || void 0 === e ? void 0 : e.os,
                            d = (0, v.getOpenAppFromEmailDestinations)(null !== (a = window.location.search) && void 0 !== a ? a : "");
                        if ("iOS" !== t && "Android" !== t) return (0, s.jsx)(i.Redirect, {
                            to: null != d.desktop ? "".concat(d.desktop.pathname).concat(d.desktop.search) : A.Routes.APP
                        });
                        {
                            let e = (0, R.getMobileDownloadLink)("app_open_from_email", t, d.mobile),
                                a = (0, f.parseDynamicLink)(e);
                            null != a && O.default.track(A.AnalyticEvents.DEEP_LINK_CLICKED, {
                                fingerprint: (0, l.maybeExtractId)(a.fingerprint),
                                attempt_id: a.attemptId,
                                source: a.utmSource,
                                destination: null != d.mobile ? d.mobile.toString() : null
                            }), window.location.href = e
                        }
                    }
                }), (0, s.jsx)(i.Redirect, {
                    from: A.Routes.CONNECT_AUTHORIZE,
                    to: {
                        ...location,
                        pathname: A.Routes.OAUTH2_AUTHORIZE
                    }
                }), (0, s.jsx)(i.Route, {
                    path: [A.Routes.OAUTH2_AUTHORIZED, A.Routes.OAUTH2_AUTHORIZE, A.Routes.OAUTH2_ERROR, A.Routes.OAUTH2_WHITELIST_ACCEPT],
                    component: F
                }), a ? null : (0, s.jsx)(i.Route, {
                    path: [A.Routes.ACCOUNT_STANDING],
                    component: Y
                }), a ? null : (0, s.jsx)(i.Route, {
                    path: A.Routes.APPLICATION_STORE,
                    component: h.default
                }), a ? null : (0, s.jsx)(i.Route, {
                    path: [A.Routes.APPLICATION_DIRECTORY_SEARCH, A.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section?"), A.Routes.APPLICATION_DIRECTORY],
                    component: B
                }), (0, s.jsx)(i.Route, {
                    render: X
                })]
            }) : (0, s.jsx)(i.Switch, {
                children: (0, s.jsx)(j.default, {
                    component: D
                })
            }), (0, s.jsxs)(_.default, {
                skipsSettingDefaultPageTitle: d,
                children: [e, w.isPlatformEmbedded && (t === E.MigrationStatus.NOT_STARTED || t === E.MigrationStatus.IN_PROGRESS) && !0 !== p.Storage.get(o.DOMAIN_MIGRATION_SUCCESS_KEY) ? (0, s.jsx)(g.default, {}) : null]
            })
        }
    }
    var $ = u.default.connectStores([T.default, E.default], () => ({
        isAuthenticated: T.default.isAuthenticated(),
        migrationStatus: E.default.getMigrationStatus()
    }), {
        forwardRef: !0
    })(function(e) {
        let a = function() {
            let {
                pathname: e
            } = (0, i.useLocation)(), a = (0, c.matchPath)(e, {
                path: A.Routes.APPLICATION_DIRECTORY
            });
            return null != a
        }();
        return (0, s.jsx)(J, {
            ...e,
            skipsSettingDefaultPageTitle: a
        })
    })
}