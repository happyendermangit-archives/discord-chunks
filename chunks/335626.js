function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Overlay: function() {
            return Z
        }
    });
    var a = n("470079"),
        r = n("664751"),
        c = n("266067"),
        o = n("613828"),
        i = n("383959"),
        f = n("746825"),
        d = n("296890"),
        u = n("732268"),
        l = n("898511"),
        s = n("242880"),
        b = n("786368"),
        p = n("936594"),
        h = n("41913"),
        m = n("586159"),
        v = n("949375"),
        y = n("614302"),
        E = n("375883"),
        _ = n("194818"),
        g = n("217014"),
        O = n("870331"),
        I = n("73892"),
        w = n("950015"),
        R = n("374550"),
        T = n("131900"),
        S = n("281767"),
        P = n("793633"),
        A = n("681751");
    n("423731"), n("834169"), n("250500");

    function N(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function C(e) {
        return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function D(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                a = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), a.forEach(function(t) {
                var a, r, c;
                a = e, r = t, c = n[t], r in a ? Object.defineProperty(a, r, {
                    value: c,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : a[r] = c
            })
        }
        return e
    }

    function k(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                n.push.apply(n, a)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function L(e, t) {
        return (L = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var M = (0, m.makeLazy)({
            createPromise: function() {
                return Promise.all([n.e("49237"), n.e("22927")]).then(n.bind(n, "503186"))
            },
            webpackId: "503186",
            name: "UnsupportedBrowser"
        }),
        j = (0, m.makeLazy)({
            createPromise: function() {
                return Promise.all([n.e("99387"), n.e("60212")]).then(n.bind(n, "959865"))
            },
            webpackId: "959865",
            name: "DownloadApps"
        }),
        U = (0, m.makeLazy)({
            createPromise: function() {
                return n.e("9648").then(n.bind(n, "78446"))
            },
            webpackId: "78446",
            name: "InviteProxy"
        }),
        G = (0, m.makeLazy)({
            createPromise: function() {
                return Promise.all([n.e("99387"), n.e("37028")]).then(n.bind(n, "555483"))
            },
            webpackId: "555483",
            name: "VerifyConnectedAccount"
        }),
        x = (0, m.makeLazy)({
            createPromise: function() {
                return Promise.all([n.e("99387"), n.e("11814")]).then(n.bind(n, "411819"))
            },
            webpackId: "411819",
            name: "LinkConnectedAccount"
        }),
        V = (0, m.makeLazy)({
            createPromise: function() {
                return n.e("17829").then(n.bind(n, "41470"))
            },
            webpackId: "41470",
            name: "LinkAuthorize"
        }),
        H = (0, m.makeLazy)({
            createPromise: function() {
                return Promise.all([n.e("99387"), n.e("73531"), n.e("42897")]).then(n.bind(n, "867639"))
            },
            webpackId: "867639",
            name: "ActivateDevice"
        }),
        B = (0, m.makeLazy)({
            createPromise: function() {
                return Promise.all([n.e("49237"), n.e("99387"), n.e("23755"), n.e("61613"), n.e("55765"), n.e("63958"), n.e("40874"), n.e("55060"), n.e("30744"), n.e("22999"), n.e("6580"), n.e("17989"), n.e("67944"), n.e("70360"), n.e("13618"), n.e("5475"), n.e("47530"), n.e("45699"), n.e("87321"), n.e("91162"), n.e("75413"), n.e("69662"), n.e("48607"), n.e("91440"), n.e("82047"), n.e("57036"), n.e("68956"), n.e("19649"), n.e("33922"), n.e("27574"), n.e("71300"), n.e("92363"), n.e("6006"), n.e("12545"), n.e("81730"), n.e("81744"), n.e("26752"), n.e("27929"), n.e("38633"), n.e("37461"), n.e("43810"), n.e("58850"), n.e("55624"), n.e("33950"), n.e("44380"), n.e("94804"), n.e("99970"), n.e("57169"), n.e("98208"), n.e("95824"), n.e("18420"), n.e("20087"), n.e("9551"), n.e("61164"), n.e("37319"), n.e("39834"), n.e("63179"), n.e("23569"), n.e("15977"), n.e("87226"), n.e("82159"), n.e("61307"), n.e("88032"), n.e("59023"), n.e("62451"), n.e("13488"), n.e("35350"), n.e("44469"), n.e("38026"), n.e("13109"), n.e("15023"), n.e("21100"), n.e("64295"), n.e("32888")]).then(n.bind(n, "529524"))
            },
            webpackId: "529524",
            name: "ViewsWithMainInterface",
            memo: !0,
            id: "529524"
        }),
        F = (0, m.makeLazy)({
            createPromise: function() {
                return Promise.all([n.e("99387"), n.e("62264"), n.e("8540")]).then(n.bind(n, "333630"))
            },
            webpackId: "333630",
            name: "XboxEdu"
        }),
        W = (0, m.makeLazy)({
            createPromise: function() {
                return Promise.all([n.e("99387"), n.e("62264"), n.e("44428")]).then(n.bind(n, "523556"))
            },
            webpackId: "523556",
            name: "XboxPin"
        }),
        K = (0, m.makeLazy)({
            createPromise: function() {
                return Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("73422"), n.e("75492"), n.e("55060"), n.e("30744"), n.e("22999"), n.e("6580"), n.e("17989"), n.e("9272"), n.e("70360"), n.e("45699"), n.e("69662"), n.e("82047"), n.e("27574"), n.e("38290"), n.e("73531"), n.e("33950"), n.e("92599"), n.e("40735"), n.e("82159"), n.e("21397"), n.e("57497"), n.e("2381"), n.e("31385")]).then(n.bind(n, "768840"))
            },
            webpackId: "768840",
            name: "ViewsWithAuth"
        }),
        z = (0, m.makeLazy)({
            createPromise: function() {
                return n.e("24549").then(n.bind(n, "230030"))
            },
            webpackId: "230030",
            name: "ViewsWithOAuth2"
        }),
        Y = (0, m.makeLazy)({
            createPromise: function() {
                return Promise.all([n.e("49237"), n.e("99387"), n.e("71300"), n.e("92363"), n.e("81730"), n.e("26752"), n.e("55624"), n.e("95824"), n.e("61164"), n.e("87226"), n.e("88032"), n.e("13109"), n.e("9634")]).then(n.bind(n, "494694"))
            },
            webpackId: "494694",
            name: "ViewsWithUnauthenticatedApplicationDirectory"
        }),
        X = (0, m.makeLazy)({
            createPromise: function() {
                return Promise.all([n.e("49237"), n.e("99387"), n.e("30744"), n.e("86536")]).then(n.bind(n, "582049"))
            },
            webpackId: "582049",
            name: "BrowserHandoff"
        }),
        q = (0, m.makeLazy)({
            createPromise: function() {
                return n.e("20403").then(n.bind(n, "25590"))
            },
            webpackId: "25590",
            name: "MobileWebHandoffFallback"
        }),
        Z = (0, m.makeLazy)({
            createPromise: function() {
                return Promise.all([n.e("49237"), n.e("99387"), n.e("23755"), n.e("61613"), n.e("55765"), n.e("40874"), n.e("55060"), n.e("30744"), n.e("22999"), n.e("6580"), n.e("17989"), n.e("67944"), n.e("70360"), n.e("13618"), n.e("5475"), n.e("47530"), n.e("45699"), n.e("87321"), n.e("91162"), n.e("75413"), n.e("69662"), n.e("48607"), n.e("91440"), n.e("82047"), n.e("57036"), n.e("68956"), n.e("19649"), n.e("33922"), n.e("27574"), n.e("71300"), n.e("92363"), n.e("6006"), n.e("12545"), n.e("81730"), n.e("81744"), n.e("26752"), n.e("27929"), n.e("38633"), n.e("37461"), n.e("43810"), n.e("58850"), n.e("33950"), n.e("44380"), n.e("94804"), n.e("99970"), n.e("57169"), n.e("98208"), n.e("95824"), n.e("18420"), n.e("9551"), n.e("61164"), n.e("37319"), n.e("39834"), n.e("63179"), n.e("23569"), n.e("15977"), n.e("61307"), n.e("35350"), n.e("44469"), n.e("64295"), n.e("85302")]).then(n.bind(n, "29196"))
            },
            webpackId: "29196",
            name: "Overlay"
        }),
        Q = (0, m.makeLazy)({
            createPromise: function() {
                return Promise.all([n.e("49237"), n.e("99387"), n.e("94804"), n.e("30462"), n.e("19416"), n.e("74672")]).then(n.bind(n, "192579"))
            },
            webpackId: "192579",
            name: "SuspendedUserSafetyHubPage"
        }),
        J = (0, m.makeLazy)({
            createPromise: function() {
                return Promise.all([n.e("49237"), n.e("99387"), n.e("30744"), n.e("73531"), n.e("36783")]).then(n.bind(n, "37000"))
            },
            webpackId: "37000",
            name: "QuestsLandingPage"
        }),
        $ = function() {
            return a.createElement(B, null)
        },
        ee = new Set([S.Routes.LOGIN, S.Routes.LOGIN_HANDOFF, S.Routes.INVITE_LOGIN(":inviteCode"), S.Routes.GIFT_CODE_LOGIN(":giftCode"), S.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")]);

    function et(e, t) {
        return t ? e.filter(function(e) {
            return !ee.has(e)
        }) : e
    }
    var en = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && L(e, t)
        }(B, e);
        var t, n, c, l, m, g = (t = B, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, a, r, c = C(t);
            if (n) {
                var o = C(this).constructor;
                r = Reflect.construct(c, arguments, o)
            } else r = c.apply(this, arguments);
            return e = this, (a = r) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(a) || "function" == typeof a) ? a : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function B() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, B), g.apply(this, arguments)
        }
        return c = B, l = [{
            key: "componentDidMount",
            value: function() {
                T.default.cleanupDisplaySleep(), _.default.initialize()
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                _.default.terminate()
            }
        }, {
            key: "render",
            value: function() {
                var e, t = this.props,
                    n = t.isAuthenticated,
                    c = t.migrationStatus,
                    l = t.skipsSettingDefaultPageTitle;
                return e = c === y.MigrationStatus.IN_PROGRESS ? null : A.IS_APP_COMPATIBLE_BROWSER ? R.isPlatformEmbedded ? a.createElement(o.Switch, null, a.createElement(o.Route, {
                    exact: !0,
                    path: S.Routes.INDEX,
                    render: function() {
                        return a.createElement(b.default, null)
                    }
                }), a.createElement(h.default, {
                    exact: !0,
                    path: S.Routes.APPS,
                    component: j
                }), a.createElement(o.Route, {
                    path: et([S.Routes.LOGIN, S.Routes.REGISTER, S.Routes.INVITE(":inviteCode"), S.Routes.INVITE_LOGIN(":inviteCode"), S.Routes.GIFT_CODE(":giftCode"), S.Routes.GIFT_CODE_LOGIN(":giftCode"), S.Routes.RESET], P.CONFERENCE_MODE_ENABLED),
                    component: K
                }), a.createElement(h.default, {
                    path: S.Routes.INVITE_PROXY(":channelId"),
                    component: U
                }), a.createElement(o.Redirect, {
                    from: S.Routes.INVITE(""),
                    to: S.Routes.LOGIN
                }), a.createElement(o.Redirect, {
                    from: S.Routes.GIFT_CODE(""),
                    to: S.Routes.LOGIN
                }), a.createElement(o.Route, {
                    render: $
                })) : a.createElement(o.Switch, null, a.createElement(h.default, {
                    exact: !0,
                    path: S.Routes.INDEX,
                    render: function() {
                        return a.createElement(b.default, null)
                    }
                }), a.createElement(o.Route, {
                    path: et([S.Routes.LOGIN, S.Routes.LOGIN_HANDOFF, S.Routes.REGISTER, S.Routes.BILLING_PREFIX, S.Routes.BILLING_PROMOTION_REDEMPTION(":code"), S.Routes.INVITE(":inviteCode"), S.Routes.INVITE_LOGIN(":inviteCode"), S.Routes.GIFT_CODE(":giftCode"), S.Routes.GIFT_CODE_LOGIN(":giftCode"), S.Routes.GUILD_TEMPLATE(":guildTemplateCode"), S.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"), S.Routes.DISABLE_EMAIL_NOTIFICATIONS, S.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, S.Routes.RESET, S.Routes.REPORT, S.Routes.REPORT_SECOND_LOOK], P.CONFERENCE_MODE_ENABLED),
                    component: K
                }), n ? null : a.createElement(o.Route, {
                    path: S.Routes.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    component: K
                }), n ? null : a.createElement(o.Route, {
                    path: S.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
                    component: K
                }), a.createElement(o.Redirect, {
                    from: S.Routes.INVITE(""),
                    to: S.Routes.LOGIN
                }), a.createElement(h.default, {
                    path: S.Routes.INVITE_PROXY(":channelId"),
                    component: U
                }), a.createElement(o.Redirect, {
                    from: S.Routes.GIFT_CODE(""),
                    to: S.Routes.LOGIN
                }), a.createElement(h.default, {
                    path: S.Routes.QUESTS(":questId"),
                    component: J,
                    impressionName: i.ImpressionNames.QUESTS_LANDING_PAGE,
                    impressionProperties: function(e) {
                        return {
                            quest_id: e.computedMatch.params.questId
                        }
                    }
                }), a.createElement(h.default, {
                    path: S.Routes.HANDOFF,
                    component: X
                }), a.createElement(h.default, {
                    path: S.Routes.MOBILE_WEB_HANDOFF,
                    component: q
                }), a.createElement(h.default, {
                    path: S.Routes.XBOX_EDU,
                    component: F
                }), a.createElement(h.default, {
                    path: S.Routes.XBOX_PIN,
                    component: W
                }), a.createElement(h.default, {
                    path: S.Routes.CONNECTION_LINK(":type"),
                    component: x
                }), a.createElement(h.default, {
                    path: S.Routes.CONNECTION_LINK_AUTHORIZE(":type"),
                    component: V
                }), a.createElement(h.default, {
                    path: S.Routes.ACTIVATE,
                    component: H
                }), a.createElement(h.default, {
                    path: S.Routes.CONNECTIONS(":type"),
                    component: G
                }), a.createElement(h.default, {
                    path: S.Routes.DOWNLOAD_QR_CODE_REDIRECT,
                    render: function() {
                        var e, t, n, a = null === (e = O.default.getSuperProperties()) || void 0 === e ? void 0 : e.os,
                            c = (0, r.parse)((null !== (n = window.location.search) && void 0 !== n ? n : "").substr(1)),
                            o = null === (t = c.referring_location) || void 0 === t ? void 0 : t.toString();
                        return ("iOS" === a || "Android" === a) && O.default.track(S.AnalyticEvents.DOWNLOAD_APP, {
                            platform: a,
                            ptb: !1,
                            released: !0,
                            has_e_mail: "true" === c.has_e_mail,
                            referring_location: o,
                            qr_code: !0
                        }), window.location.href = (0, I.getMobileDownloadLink)(null != o && "" !== o ? o : "qr_code", a), null
                    }
                }), a.createElement(h.default, {
                    path: S.Routes.OPEN_APP_FROM_EMAIL,
                    render: function() {
                        var e, t, n = null === (e = O.default.getSuperProperties()) || void 0 === e ? void 0 : e.os,
                            r = (0, w.getOpenAppFromEmailDestinations)(null !== (t = window.location.search) && void 0 !== t ? t : "");
                        if ("iOS" !== n && "Android" !== n) return a.createElement(o.Redirect, {
                            to: null != r.desktop ? "".concat(r.desktop.pathname).concat(r.desktop.search) : S.Routes.APP
                        });
                        var c = (0, I.getMobileDownloadLink)("app_open_from_email", n, r.mobile),
                            i = (0, d.parseDynamicLink)(c);
                        null != i && O.default.track(S.AnalyticEvents.DEEP_LINK_CLICKED, {
                            fingerprint: (0, u.maybeExtractId)(i.fingerprint),
                            attempt_id: i.attemptId,
                            source: i.utmSource,
                            destination: null != r.mobile ? r.mobile.toString() : null
                        }), window.location.href = c
                    }
                }), a.createElement(o.Redirect, {
                    from: S.Routes.CONNECT_AUTHORIZE,
                    to: k(D({}, location), {
                        pathname: S.Routes.OAUTH2_AUTHORIZE
                    })
                }), a.createElement(o.Route, {
                    path: [S.Routes.OAUTH2_AUTHORIZED, S.Routes.OAUTH2_AUTHORIZE, S.Routes.OAUTH2_ERROR, S.Routes.OAUTH2_WHITELIST_ACCEPT],
                    component: z
                }), n ? null : a.createElement(o.Route, {
                    path: [S.Routes.ACCOUNT_STANDING],
                    component: Q
                }), n ? null : a.createElement(o.Route, {
                    path: S.Routes.APPLICATION_STORE,
                    component: p.default
                }), n ? null : a.createElement(o.Route, {
                    path: [S.Routes.APPLICATION_DIRECTORY_SEARCH, S.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section?"), S.Routes.APPLICATION_DIRECTORY],
                    component: Y
                }), a.createElement(o.Route, {
                    render: $
                })) : a.createElement(o.Switch, null, a.createElement(h.default, {
                    component: M
                })), a.createElement(v.default, {
                    skipsSettingDefaultPageTitle: l
                }, e, R.isPlatformEmbedded && (c === y.MigrationStatus.NOT_STARTED || c === y.MigrationStatus.IN_PROGRESS) && !0 !== s.Storage.get(f.DOMAIN_MIGRATION_SUCCESS_KEY) ? a.createElement(E.default, null) : null)
            }
        }], N(c.prototype, l), m && N(c, m), B
    }(a.Component);
    t.default = l.default.connectStores([g.default, y.default], function() {
        return {
            isAuthenticated: g.default.isAuthenticated(),
            migrationStatus: y.default.getMigrationStatus()
        }
    }, {
        forwardRef: !0
    })(function(e) {
        var t, n = (t = (0, o.useLocation)().pathname, null != (0, c.matchPath)(t, {
            path: S.Routes.APPLICATION_DIRECTORY
        }));
        return a.createElement(en, k(D({}, e), {
            skipsSettingDefaultPageTitle: n
        }))
    })
}