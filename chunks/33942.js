function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        OAuth2AuthorizePage: function() {
            return ee
        },
        OAuth2AuthorizeModal: function() {
            return et
        },
        OAuth2Authorize: function() {
            return en
        },
        useOAuth2AuthorizeForm: function() {
            return ei
        },
        openOAuth2ModalWithCreateGuildModal: function() {
            return er
        },
        openOAuth2Modal: function() {
            return ea
        },
        getOAuth2AuthorizeProps: function() {
            return eo
        }
    }), n("222007"), n("70102");
    var i, s, r = n("37983"),
        a = n("884691"),
        o = n("414456"),
        l = n.n(o),
        u = n("90915"),
        d = n("746379"),
        c = n.n(d),
        f = n("891189"),
        _ = n("316693"),
        h = n("446674"),
        E = n("271841"),
        g = n("551042"),
        m = n("670914"),
        p = n("242670"),
        S = n("437822"),
        v = n("84460"),
        T = n("191225"),
        I = n("716241"),
        C = n("148217"),
        A = n("970254"),
        y = n("442939"),
        N = n("616265"),
        R = n("894887"),
        O = n("393414"),
        D = n("766274"),
        P = n("271938"),
        L = n("760190"),
        M = n("991170"),
        b = n("253981"),
        U = n("872825"),
        w = n("8222"),
        k = n("164386"),
        V = n("978970"),
        G = n("29479"),
        F = n("357974"),
        x = n("580363"),
        B = n("613070"),
        H = n("530487"),
        Y = n("351205"),
        j = n("223934"),
        W = n("315417"),
        K = n("267570"),
        z = n("941281"),
        q = n("891254"),
        X = n("49111"),
        Q = n("954016"),
        Z = n("782340"),
        J = n("169294");
    let $ = "oauth2-authorize-header-id";

    function ee() {
        let e = (0, u.useLocation)(),
            t = a.useMemo(() => (0, U.parseOAuth2AuthorizeProps)(e.search), [e.search]);
        return (0, C.default)(), a.useEffect(() => {
            P.default.isAuthenticated() && S.default.getExperiments()
        }, []), (0, r.jsx)(K.OAuth2Page, {
            children: (0, r.jsx)(en, {
                ...t,
                showLogout: !0
            })
        })
    }

    function et(e) {
        let {
            transitionState: t,
            ...n
        } = e;
        return (0, r.jsx)(K.OAuth2Modal, {
            transitionState: t,
            "aria-labelledby": $,
            children: (0, r.jsx)(en, {
                ...n,
                inApp: !0,
                scrollable: !0
            })
        })
    }

    function en(e) {
        let {
            scrollable: t,
            ...n
        } = e, {
            header: i,
            body: s,
            footer: a,
            nextStep: o,
            appDetails: u
        } = ei(n), d = (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("div", {
                className: J.content,
                children: [i, s, null == o ? u : null]
            }), a]
        });
        return t ? (0, r.jsx)("div", {
            className: l(J.authorize, {
                [J.inApp]: n.inApp
            }),
            children: (0, r.jsx)(m.ScrollerThin, {
                orientation: "auto",
                children: d
            })
        }) : (0, r.jsx)("div", {
            className: l(J.authorize, {
                [J.inApp]: n.inApp
            }),
            children: (0, r.jsx)("div", {
                children: d
            })
        })
    }

    function ei(e) {
        var t, n, i, s, o;
        let l, d, g, m, S, C, {
                clientId: N,
                responseType: R,
                redirectUri: K,
                codeChallenge: ee,
                codeChallengeMethod: et,
                state: en,
                prompt: ei,
                authorization: es,
                scopes: er,
                permissions: ea,
                guildId: eo,
                channelId: el,
                integrationType: eu,
                disableGuildSelect: ed = !1,
                showLogout: ec = !1,
                cancelCompletesFlow: ef = !0,
                isTrustedName: e_ = !1,
                isEmbeddedFlow: eh = !1,
                inApp: eE = !1,
                callback: eg,
                callbackWithoutPost: em,
                onClose: ep
            } = e,
            eS = (0, u.useLocation)(),
            ev = A.default.useExperiment({
                location: "auth web"
            }),
            eT = ev.userAppsTreatment === A.UserAppsTreatment.ALLOWED,
            eI = (0, h.useStateFromStores)([L.default], () => L.default.hasLoadedExperiments),
            [eC, eA] = a.useState(null),
            [ey, eN] = a.useState(null),
            [eR, eO] = a.useState(null),
            [eD, eP] = a.useState(!1),
            eL = null == eC ? void 0 : eC.guilds,
            [eM, eb] = a.useState(null != eo ? eo : null),
            [eU, ew] = a.useState(null != el ? el : null),
            [ek, eV] = a.useState(M.default.NONE),
            eG = a.useMemo(() => (null == eC ? void 0 : eC.user) != null ? new D.default(eC.user) : null, [null == eC ? void 0 : eC.user]),
            eF = a.useMemo(() => null == eL ? void 0 : eL.find(e => e.id === eM), [eL, eM]),
            [ex, eB] = a.useState(null),
            eH = a.useMemo(() => {
                var e;
                return eT && null == es && null == eu && (null !== (e = null == er ? void 0 : er.length) && void 0 !== e ? e : 0) === 0 && null == K
            }, [es, eT, null == er ? void 0 : er.length, K, eu]),
            eY = (0, y.useGetOrFetchApplication)(eH ? N : null),
            ej = a.useMemo(() => {
                var e, t;
                return null == ex ? null : null == eY ? void 0 : null === (t = eY.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[ex]) || void 0 === e ? void 0 : e.oauth2InstallParams
            }, [null == eY ? void 0 : eY.integrationTypesConfig, ex]),
            {
                requestedScopes: eW,
                accountScopes: eK
            } = a.useMemo(() => {
                let e = eH ? null == ej ? void 0 : ej.scopes : er,
                    t = (0, U.filterScopes)(null != e ? e : []),
                    n = G.OrderedAccountScopes.filter(e => t.includes(e));
                return {
                    requestedScopes: t,
                    accountScopes: n
                }
            }, [null == ej ? void 0 : ej.scopes, er, eH]),
            ez = a.useMemo(() => {
                var e;
                let t = eH ? _.default.deserialize(null !== (e = null == ej ? void 0 : ej.permissions) && void 0 !== e ? e : 0) : ea;
                return null != t ? t : M.default.NONE
            }, [null == ej ? void 0 : ej.permissions, ea, eH]),
            eq = (0, h.useStateFromStores)([T.default], () => T.default.getCurrentEmbeddedActivity()),
            eX = (0, h.useStateFromStoresObject)([v.default, T.default], () => {
                let e;
                let t = v.default.getIsEnabled();
                if (null != eq) {
                    if (e = T.default.getShelfActivities(eq.guildId).find(e => e.application_id === eq.applicationId), t && void 0 === e) {
                        var n;
                        e = null === (n = v.default.getDeveloperShelfItems().find(e => e.id === eq.applicationId)) || void 0 === n ? void 0 : n.embeddedActivityConfig
                    }
                    if (null != e) return {
                        ...Q.DEFAULT_EMBEDDED_ACTIVITY_CONFIG,
                        ...e
                    }
                }
                return {}
            }, [eq]),
            eQ = Object.keys(eX).length > 0 ? eX : null,
            eZ = a.useCallback(async e => {
                if (null != em) {
                    em(e);
                    return
                }
                if (!e && !ef) {
                    null != eg && (eg({
                        application: null == eC ? void 0 : eC.application,
                        guild: eF
                    }), null == ep || ep());
                    return
                }
                if (null == ex) {
                    eO(Error("No integration type was selected."));
                    return
                }
                try {
                    eP(!0);
                    let t = await (0, w.authorize)({
                        authorize: e,
                        clientId: N,
                        scopes: eW,
                        responseType: R,
                        redirectUri: K,
                        codeChallenge: ee,
                        codeChallengeMethod: et,
                        state: en,
                        integrationType: ex,
                        permissions: _.default.remove(ez, ek),
                        guildId: ex === f.ApplicationIntegrationType.GUILD_INSTALL && null != eM ? eM : void 0,
                        channelId: ex === f.ApplicationIntegrationType.GUILD_INSTALL && null != eU ? eU : void 0
                    });
                    if (null != eg) eg({
                        application: null == eC ? void 0 : eC.application,
                        location: t.location,
                        guild: eF
                    }), null == ep || ep();
                    else if (null != t.location) {
                        let {
                            host: e,
                            path: n
                        } = c.parse(t.location);
                        b.default.isDiscordHostname(e) && n === X.Routes.OAUTH2_AUTHORIZED ? (0, O.transitionTo)(X.Routes.OAUTH2_AUTHORIZED, {
                            state: {
                                application: null == eC ? void 0 : eC.application,
                                guild: eF
                            }
                        }) : window.location = t.location
                    } else eP(!1)
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && "" !== e.message ? eO(Error(e.message)) : eO(e), eN(1), eP(!1)
                }
            }, [em, ef, eg, null == eC ? void 0 : eC.application, eF, ep, N, eW, R, K, ee, et, en, ez, ek, eM, ex, eU]),
            eJ = a.useRef(!1),
            e$ = a.useCallback(async () => {
                if (!P.default.isAuthenticated()) {
                    (0, w.logoutWithRedirect)(eS);
                    return
                }
                if (!eJ.current) {
                    eJ.current = !0;
                    try {
                        let e = null != es ? es : await (0, w.fetchAuthorization)({
                            clientId: N,
                            scopes: eW,
                            responseType: R,
                            redirectUri: K,
                            codeChallenge: ee,
                            codeChallengeMethod: et,
                            state: en,
                            userInstall: ex === f.ApplicationIntegrationType.USER_INSTALL
                        });
                        eA((0, k.convertOAuth2Authorization)(e)), ei === F.OAuth2Prompts.NONE && e.authorized && eZ(!0), (0, I.trackWithMetadata)(X.AnalyticEvents.OAUTH2_AUTHORIZE_VIEWED, {
                            application_id: e.application.id
                        })
                    } catch (n) {
                        let {
                            status: e,
                            body: t
                        } = n;
                        if (401 === e) {
                            (0, w.logoutWithRedirect)(eS);
                            return
                        }
                        eO(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
                    } finally {
                        eJ.current = !1
                    }
                }
            }, [eS, es, N, eW, R, K, ee, et, en, ex, ei, eZ]),
            e0 = a.useMemo(() => {
                var e;
                if (null == eY || !eH) return [];
                let t = Object.entries(null !== (e = eY.integrationTypesConfig) && void 0 !== e ? e : {}).filter(e => {
                    let [t, n] = e;
                    return null != n.oauth2InstallParams
                }).map(e => {
                    let [t, n] = e;
                    return Number(t)
                });
                return t
            }, [eY, eH]);
        if (a.useEffect(() => {
                if (null == ey && (!eH || null != eY) && eI) {
                    if (null != es) {
                        var e;
                        eB(null !== (e = es.integration_type) && void 0 !== e ? e : f.ApplicationIntegrationType.GUILD_INSTALL), eN(1)
                    } else e0.length > 1 ? eN(0) : (1 === e0.length ? eB(e0[0]) : eT && null != eu ? eB(eu) : eB(f.ApplicationIntegrationType.GUILD_INSTALL), eN(1))
                }
            }, [es, e0, eY, eT, eH, eu, ey, eI]), a.useEffect(() => {
                if (null == ex || null != eC || null != eR) return;
                ex === f.ApplicationIntegrationType.USER_INSTALL && (eb(null), ew(null));
                let e = eW.filter(e => !G.ValidScopes.includes(e));
                0 === eW.length ? eO(Error("No scopes were provided.")) : e.length > 0 ? eO(Error("Invalid scope: ".concat(e[0]))) : (0, V.containsDisallowedPermission)(ez) ? eO(Error("Invalid permission(s) provided.")) : e$()
            }, [e$, eW, ez, ex, eC, eR]), eR instanceof Error) return {
            body: (0, r.jsx)(z.OAuth2Error, {
                message: eR.message
            })
        };
        let e1 = !1,
            e2 = !0,
            e3 = !0,
            e4 = !0;
        switch (ey) {
            case null:
                return {
                    body: (0, r.jsx)(p.Spinner, {})
                };
            case 0:
                if (null == eY) return {
                    body: (0, r.jsx)(p.Spinner, {})
                };
                l = (0, r.jsx)(W.default, {
                    inApp: eE,
                    application: eY,
                    onSelect: e => {
                        eB(e), eA(null), eN(1)
                    }
                }), e2 = !1, e3 = !1, e4 = eE;
                break;
            case 1:
                if (null == eC || null == eG || null == ex) return {
                    body: (0, r.jsx)(p.Spinner, {})
                };
                let e6 = null == eR || eR instanceof Error ? {} : eR,
                    e9 = null == eL ? void 0 : eL.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                    e8 = ex === f.ApplicationIntegrationType.GUILD_INSTALL && eW.includes(X.OAuth2Scopes.WEBHOOK_INCOMING),
                    e7 = e8 || ex === f.ApplicationIntegrationType.GUILD_INSTALL && (eW.includes(X.OAuth2Scopes.BOT) || eW.includes(X.OAuth2Scopes.APPLICATIONS_COMMANDS));
                l = (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(B.default, {
                        application: eC.application,
                        accountScopes: eK,
                        requestedScopes: eW,
                        integrationType: ex,
                        errors: e6,
                        isTrustedName: e_
                    }), e7 ? (0, r.jsx)(Y.default, {
                        error: (null !== (n = null !== (t = e6[X.OAuth2Scopes.BOT]) && void 0 !== t ? t : e6[X.OAuth2Scopes.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
                        selectedGuildId: eM,
                        onGuildChange: eb,
                        guilds: null != e9 ? e9 : [],
                        disabled: "" !== eM && null != eM && !0 === ed
                    }) : null, e8 ? (0, r.jsx)(q.default, {
                        error: (null !== (i = e6[X.OAuth2Scopes.WEBHOOK_INCOMING]) && void 0 !== i ? i : [])[0],
                        selectedChannelId: eU,
                        selectedGuildId: eM,
                        onChannelChange: ew
                    }) : null]
                }), eW.includes(X.OAuth2Scopes.BOT) && !_.default.equals(ez, M.default.NONE) && (g = 2), e0.length > 1 && (d = 0), e1 = e7 && null == eF || e8 && null == eU;
                break;
            case 2:
                if (null == eC) return {
                    body: (0, r.jsx)(p.Spinner, {})
                };
                l = (0, r.jsx)(H.default, {
                    application: eC.application,
                    permissions: ez,
                    deniedPermissions: ek,
                    onPermissionsChange: (e, t) => {
                        eV(n => e ? _.default.remove(n, t) : _.default.add(n, t))
                    },
                    guild: eF
                }), d = 1
        }
        if (e2 && null != eC) {
            let e = null === (s = eC.bot) || void 0 === s ? void 0 : s.approximate_guild_count;
            m = (0, r.jsx)(x.default, {
                embeddedActivityConfig: eQ,
                application: eC.application,
                scopes: eW,
                redirectUri: null !== (o = eC.redirect_uri) && void 0 !== o ? o : null,
                approximateGuildCount: void 0 !== e ? e : null,
                isEmbeddedFlow: eh
            })
        }
        return e3 && null != eC && null != eG && (S = (0, r.jsx)(j.default, {
            id: $,
            user: eG,
            application: eC.application,
            bot: eC.bot,
            accountScopes: eK,
            showLogout: ec || !1,
            location: eS,
            isTrustedName: e_
        })), e4 && (C = (0, r.jsxs)("div", {
            className: J.footer,
            children: [null != d ? (0, r.jsx)(E.Button, {
                look: E.Button.Looks.LINK,
                color: E.Button.Colors.PRIMARY,
                onClick: () => eN(d),
                children: Z.default.Messages.BACK
            }) : (0, r.jsx)(E.Button, {
                look: E.Button.Looks.LINK,
                color: E.Button.Colors.PRIMARY,
                onClick: () => eZ(!1),
                children: Z.default.Messages.CANCEL
            }), 0 !== ey ? null != g ? (0, r.jsx)(E.Button, {
                onClick: () => eN(g),
                disabled: e1,
                children: Z.default.Messages.CONTINUE
            }) : (0, r.jsx)(E.Button, {
                onClick: () => eZ(!0),
                disabled: e1,
                submitting: eD,
                children: Z.default.Messages.AUTHORIZE
            }) : null]
        })), {
            header: S,
            body: l,
            footer: C,
            nextStep: g,
            appDetails: m,
            sendAuthorize: eZ
        }
    }

    function es(e, t) {
        if (null == t.location || null != e && e(t)) return;
        let {
            host: n,
            path: i,
            query: s
        } = c.parse(t.location, !0), a = b.default.isDiscordHostname(n) || window.location.host === n;
        if (a && i === X.Routes.OAUTH2_AUTHORIZED)(0, g.openModal)(e => (0, r.jsx)(K.OAuth2Modal, {
            ...e,
            "aria-labelledby": $,
            children: (0, r.jsx)(z.OAuth2AuthorizedSuccess, {
                guild: t.guild,
                application: t.application,
                onClose: e.onClose
            })
        }));
        else if (a && (null == i ? void 0 : i.startsWith(X.Routes.OAUTH2_ERROR)))(0, g.openModal)(e => {
            let t = s.error_description || s.error || Z.default.Messages.OAUTH2_UNKNOWN_ERROR;
            return Array.isArray(t) && (t = t[0]), (0, r.jsxs)(K.OAuth2Modal, {
                ...e,
                "aria-labelledby": $,
                children: [(0, r.jsx)(z.OAuth2Error, {
                    message: t,
                    onClose: e.onClose
                }), ";"]
            })
        });
        else {
            var o;
            null === (o = window.open(t.location, "_blank")) || void 0 === o || o.focus()
        }
    }

    function er(e, t) {
        if ((0, R.isMidjourneyOnboardingFlow)("create-guild-and-oauth2-modal")) {
            N.default.openCreateGuildModal({
                onSuccess: n => ea({
                    ...e,
                    guildId: n
                }, t)
            });
            return
        }
        ea(e, t)
    }

    function ea(e, t) {
        (0, g.openModal)(t => (0, r.jsx)(et, {
            ...t,
            ...e,
            cancelCompletesFlow: !1,
            callback: es.bind(null, e.callback)
        }), {
            onCloseCallback: t
        })
    }

    function eo(e) {
        let {
            hostname: t = "",
            host: n,
            path: i,
            query: s
        } = c.parse(e);
        return null != i && null != s && (b.default.isDiscordHostname(t) || n === window.location.host) && (i.startsWith("/api".concat(X.Endpoints.OAUTH2_AUTHORIZE)) || i.startsWith(X.Routes.OAUTH2_AUTHORIZE)) ? (0, U.parseOAuth2AuthorizeProps)(s) : null
    }(s = i || (i = {}))[s.SELECT_INSTALL_TYPE = 0] = "SELECT_INSTALL_TYPE", s[s.AUTHORIZE_SCOPES = 1] = "AUTHORIZE_SCOPES", s[s.AUTHORIZE_BOT_PERMISSIONS = 2] = "AUTHORIZE_BOT_PERMISSIONS"
}