function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        OAuth2AuthorizePage: function() {
            return et
        },
        OAuth2AuthorizeModal: function() {
            return en
        },
        OAuth2Authorize: function() {
            return ei
        },
        useOAuth2AuthorizeForm: function() {
            return es
        },
        openOAuth2ModalWithCreateGuildModal: function() {
            return ea
        },
        openOAuth2Modal: function() {
            return eo
        },
        getOAuth2AuthorizeProps: function() {
            return el
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
        E = n("446674"),
        h = n("271841"),
        g = n("551042"),
        m = n("670914"),
        p = n("242670"),
        S = n("437822"),
        v = n("84460"),
        T = n("191225"),
        I = n("716241"),
        A = n("148217"),
        C = n("970254"),
        y = n("651057"),
        N = n("616265"),
        R = n("894887"),
        O = n("393414"),
        D = n("653047"),
        P = n("766274"),
        L = n("271938"),
        M = n("760190"),
        b = n("991170"),
        U = n("253981"),
        w = n("872825"),
        k = n("8222"),
        V = n("164386"),
        G = n("978970"),
        F = n("29479"),
        x = n("357974"),
        B = n("580363"),
        H = n("613070"),
        Y = n("530487"),
        K = n("351205"),
        j = n("223934"),
        W = n("315417"),
        z = n("267570"),
        q = n("941281"),
        X = n("891254"),
        Q = n("49111"),
        Z = n("954016"),
        J = n("782340"),
        $ = n("169294");
    let ee = "oauth2-authorize-header-id";

    function et() {
        let e = (0, u.useLocation)(),
            t = a.useMemo(() => (0, w.parseOAuth2AuthorizeProps)(e.search), [e.search]);
        return (0, A.default)(), a.useEffect(() => {
            L.default.isAuthenticated() && S.default.getExperiments()
        }, []), (0, r.jsx)(z.OAuth2Page, {
            children: (0, r.jsx)(ei, {
                ...t,
                showLogout: !0
            })
        })
    }

    function en(e) {
        let {
            transitionState: t,
            ...n
        } = e;
        return (0, r.jsx)(z.OAuth2Modal, {
            transitionState: t,
            "aria-labelledby": ee,
            children: (0, r.jsx)(ei, {
                ...n,
                inApp: !0,
                scrollable: !0
            })
        })
    }

    function ei(e) {
        let {
            scrollable: t,
            ...n
        } = e, {
            header: i,
            body: s,
            footer: a,
            nextStep: o,
            appDetails: u
        } = es(n), d = (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("div", {
                className: $.content,
                children: [i, s, null == o ? u : null]
            }), a]
        });
        return t ? (0, r.jsx)("div", {
            className: l($.authorize, {
                [$.inApp]: n.inApp
            }),
            children: (0, r.jsx)(m.ScrollerThin, {
                orientation: "auto",
                children: d
            })
        }) : (0, r.jsx)("div", {
            className: l($.authorize, {
                [$.inApp]: n.inApp
            }),
            children: (0, r.jsx)("div", {
                children: d
            })
        })
    }

    function es(e) {
        var t, n, i, s, o;
        let l, d, g, m, S, A, {
                clientId: N,
                responseType: R,
                redirectUri: z,
                codeChallenge: et,
                codeChallengeMethod: en,
                state: ei,
                prompt: es,
                authorization: er,
                scopes: ea,
                permissions: eo,
                guildId: el,
                channelId: eu,
                integrationType: ed,
                disableGuildSelect: ec = !1,
                showLogout: ef = !1,
                cancelCompletesFlow: e_ = !0,
                isTrustedName: eE = !1,
                isEmbeddedFlow: eh = !1,
                inApp: eg = !1,
                callback: em,
                callbackWithoutPost: ep,
                onClose: eS
            } = e,
            ev = (0, u.useLocation)(),
            eT = C.default.useExperiment({
                location: "auth web"
            }),
            eI = eT.userAppsTreatment === C.UserAppsTreatment.ALLOWED,
            eA = (0, E.useStateFromStores)([M.default], () => M.default.hasLoadedExperiments),
            [eC, ey] = a.useState(null),
            [eN, eR] = a.useState(null),
            [eO, eD] = a.useState(null),
            [eP, eL] = a.useState(!1),
            eM = null == eC ? void 0 : eC.guilds,
            [eb, eU] = a.useState(null != el ? el : null),
            [ew, ek] = a.useState(null != eu ? eu : null),
            [eV, eG] = a.useState(b.default.NONE),
            eF = a.useMemo(() => (null == eC ? void 0 : eC.user) != null ? new P.default(eC.user) : null, [null == eC ? void 0 : eC.user]),
            ex = a.useMemo(() => null == eM ? void 0 : eM.find(e => e.id === eb), [eM, eb]),
            [eB, eH] = a.useState(null),
            eY = a.useMemo(() => {
                var e;
                return eI && null == er && null == ed && (null !== (e = null == ea ? void 0 : ea.length) && void 0 !== e ? e : 0) === 0 && null == z
            }, [er, eI, null == ea ? void 0 : ea.length, z, ed]),
            [eK, ej] = a.useState(null);
        a.useEffect(() => {
            eY && y.default.fetchApplication(N).then(e => ej(D.default.createFromServer(e)))
        }, [N, eY]);
        let eW = a.useMemo(() => {
                var e, t;
                return null == eB ? null : null == eK ? void 0 : null === (t = eK.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eB]) || void 0 === e ? void 0 : e.oauth2InstallParams
            }, [null == eK ? void 0 : eK.integrationTypesConfig, eB]),
            {
                requestedScopes: ez,
                accountScopes: eq
            } = a.useMemo(() => {
                let e = eY ? null == eW ? void 0 : eW.scopes : ea,
                    t = (0, w.filterScopes)(null != e ? e : []),
                    n = F.OrderedAccountScopes.filter(e => t.includes(e));
                return {
                    requestedScopes: t,
                    accountScopes: n
                }
            }, [null == eW ? void 0 : eW.scopes, ea, eY]),
            eX = a.useMemo(() => {
                var e;
                let t = eY ? _.default.deserialize(null !== (e = null == eW ? void 0 : eW.permissions) && void 0 !== e ? e : 0) : eo;
                return null != t ? t : b.default.NONE
            }, [null == eW ? void 0 : eW.permissions, eo, eY]),
            eQ = (0, E.useStateFromStores)([T.default], () => T.default.getCurrentEmbeddedActivity()),
            eZ = (0, E.useStateFromStoresObject)([v.default, T.default], () => {
                let e;
                let t = v.default.getIsEnabled();
                if (null != eQ) {
                    if (e = T.default.getShelfActivities(eQ.guildId).find(e => e.application_id === eQ.applicationId), t && void 0 === e) {
                        var n;
                        e = null === (n = v.default.getDeveloperShelfItems().find(e => e.id === eQ.applicationId)) || void 0 === n ? void 0 : n.embeddedActivityConfig
                    }
                    if (null != e) return {
                        ...Z.DEFAULT_EMBEDDED_ACTIVITY_CONFIG,
                        ...e
                    }
                }
                return {}
            }, [eQ]),
            eJ = Object.keys(eZ).length > 0 ? eZ : null,
            e$ = a.useCallback(async e => {
                if (null != ep) {
                    ep(e);
                    return
                }
                if (!e && !e_) {
                    null != em && (em({
                        application: null == eC ? void 0 : eC.application,
                        guild: ex
                    }), null == eS || eS());
                    return
                }
                if (null == eB) {
                    eD(Error("No integration type was selected."));
                    return
                }
                try {
                    eL(!0);
                    let t = await (0, k.authorize)({
                        authorize: e,
                        clientId: N,
                        scopes: ez,
                        responseType: R,
                        redirectUri: z,
                        codeChallenge: et,
                        codeChallengeMethod: en,
                        state: ei,
                        integrationType: eB,
                        permissions: _.default.remove(eX, eV),
                        guildId: eB === f.ApplicationIntegrationType.GUILD_INSTALL && null != eb ? eb : void 0,
                        channelId: eB === f.ApplicationIntegrationType.GUILD_INSTALL && null != ew ? ew : void 0
                    });
                    if (null != em) em({
                        application: null == eC ? void 0 : eC.application,
                        location: t.location,
                        guild: ex
                    }), null == eS || eS();
                    else if (null != t.location) {
                        let {
                            host: e,
                            path: n
                        } = c.parse(t.location);
                        U.default.isDiscordHostname(e) && n === Q.Routes.OAUTH2_AUTHORIZED ? (0, O.transitionTo)(Q.Routes.OAUTH2_AUTHORIZED, {
                            state: {
                                application: null == eC ? void 0 : eC.application,
                                guild: ex
                            }
                        }) : window.location = t.location
                    } else eL(!1)
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && "" !== e.message ? eD(Error(e.message)) : eD(e), eR(1), eL(!1)
                }
            }, [ep, e_, em, null == eC ? void 0 : eC.application, ex, eS, N, ez, R, z, et, en, ei, eX, eV, eb, eB, ew]),
            e0 = a.useRef(!1),
            e1 = a.useCallback(async () => {
                if (!L.default.isAuthenticated()) {
                    (0, k.logoutWithRedirect)(ev);
                    return
                }
                if (!e0.current) {
                    e0.current = !0;
                    try {
                        let e = null != er ? er : await (0, k.fetchAuthorization)({
                            clientId: N,
                            scopes: ez,
                            responseType: R,
                            redirectUri: z,
                            codeChallenge: et,
                            codeChallengeMethod: en,
                            state: ei,
                            userInstall: eB === f.ApplicationIntegrationType.USER_INSTALL
                        });
                        ey((0, V.convertOAuth2Authorization)(e)), es === x.OAuth2Prompts.NONE && e.authorized && e$(!0), (0, I.trackWithMetadata)(Q.AnalyticEvents.OAUTH2_AUTHORIZE_VIEWED, {
                            application_id: e.application.id
                        })
                    } catch (n) {
                        let {
                            status: e,
                            body: t
                        } = n;
                        if (401 === e) {
                            (0, k.logoutWithRedirect)(ev);
                            return
                        }
                        eD(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
                    } finally {
                        e0.current = !1
                    }
                }
            }, [ev, er, N, ez, R, z, et, en, ei, eB, es, e$]),
            e2 = a.useMemo(() => {
                var e;
                if (null == eK || !eY) return [];
                let t = Object.entries(null !== (e = eK.integrationTypesConfig) && void 0 !== e ? e : {}).filter(e => {
                    let [t, n] = e;
                    return null != n.oauth2InstallParams
                }).map(e => {
                    let [t, n] = e;
                    return Number(t)
                });
                return t
            }, [eK, eY]);
        if (a.useEffect(() => {
                if (null == eN && (!eY || null != eK) && eA) {
                    if (null != er) {
                        var e;
                        eH(null !== (e = er.integration_type) && void 0 !== e ? e : f.ApplicationIntegrationType.GUILD_INSTALL), eR(1)
                    } else e2.length > 1 ? eR(0) : (1 === e2.length ? eH(e2[0]) : eI && null != ed ? eH(ed) : eH(f.ApplicationIntegrationType.GUILD_INSTALL), eR(1))
                }
            }, [er, e2, eK, eI, eY, ed, eN, eA]), a.useEffect(() => {
                if (null == eB || null != eC || null != eO) return;
                eB === f.ApplicationIntegrationType.USER_INSTALL && (eU(null), ek(null));
                let e = ez.filter(e => !F.ValidScopes.includes(e));
                0 === ez.length ? eD(Error("No scopes were provided.")) : e.length > 0 ? eD(Error("Invalid scope: ".concat(e[0]))) : (0, G.containsDisallowedPermission)(eX) ? eD(Error("Invalid permission(s) provided.")) : e1()
            }, [e1, ez, eX, eB, eC, eO]), eO instanceof Error) return {
            body: (0, r.jsx)(q.OAuth2Error, {
                message: eO.message
            })
        };
        let e3 = !1,
            e4 = !0,
            e6 = !0,
            e9 = !0;
        switch (eN) {
            case null:
                return {
                    body: (0, r.jsx)(p.Spinner, {})
                };
            case 0:
                if (null == eK) return {
                    body: (0, r.jsx)(p.Spinner, {})
                };
                l = (0, r.jsx)(W.default, {
                    inApp: eg,
                    application: eK,
                    onSelect: e => {
                        eH(e), ey(null), eR(1)
                    }
                }), e4 = !1, e6 = !1, e9 = eg;
                break;
            case 1:
                if (null == eC || null == eF || null == eB) return {
                    body: (0, r.jsx)(p.Spinner, {})
                };
                let e8 = null == eO || eO instanceof Error ? {} : eO,
                    e7 = null == eM ? void 0 : eM.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                    e5 = eB === f.ApplicationIntegrationType.GUILD_INSTALL && ez.includes(Q.OAuth2Scopes.WEBHOOK_INCOMING),
                    te = e5 || eB === f.ApplicationIntegrationType.GUILD_INSTALL && (ez.includes(Q.OAuth2Scopes.BOT) || ez.includes(Q.OAuth2Scopes.APPLICATIONS_COMMANDS));
                l = (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(H.default, {
                        application: eC.application,
                        accountScopes: eq,
                        requestedScopes: ez,
                        integrationType: eB,
                        errors: e8,
                        isTrustedName: eE
                    }), te ? (0, r.jsx)(K.default, {
                        error: (null !== (n = null !== (t = e8[Q.OAuth2Scopes.BOT]) && void 0 !== t ? t : e8[Q.OAuth2Scopes.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
                        selectedGuildId: eb,
                        onGuildChange: eU,
                        guilds: null != e7 ? e7 : [],
                        disabled: "" !== eb && null != eb && !0 === ec
                    }) : null, e5 ? (0, r.jsx)(X.default, {
                        error: (null !== (i = e8[Q.OAuth2Scopes.WEBHOOK_INCOMING]) && void 0 !== i ? i : [])[0],
                        selectedChannelId: ew,
                        selectedGuildId: eb,
                        onChannelChange: ek
                    }) : null]
                }), ez.includes(Q.OAuth2Scopes.BOT) && !_.default.equals(eX, b.default.NONE) && (g = 2), e2.length > 1 && (d = 0), e3 = te && null == ex || e5 && null == ew;
                break;
            case 2:
                if (null == eC) return {
                    body: (0, r.jsx)(p.Spinner, {})
                };
                l = (0, r.jsx)(Y.default, {
                    application: eC.application,
                    permissions: eX,
                    deniedPermissions: eV,
                    onPermissionsChange: (e, t) => {
                        eG(n => e ? _.default.remove(n, t) : _.default.add(n, t))
                    },
                    guild: ex
                }), d = 1
        }
        if (e4 && null != eC) {
            let e = null === (s = eC.bot) || void 0 === s ? void 0 : s.approximate_guild_count;
            m = (0, r.jsx)(B.default, {
                embeddedActivityConfig: eJ,
                application: eC.application,
                scopes: ez,
                redirectUri: null !== (o = eC.redirect_uri) && void 0 !== o ? o : null,
                approximateGuildCount: void 0 !== e ? e : null,
                isEmbeddedFlow: eh
            })
        }
        return e6 && null != eC && null != eF && (S = (0, r.jsx)(j.default, {
            id: ee,
            user: eF,
            application: eC.application,
            bot: eC.bot,
            accountScopes: eq,
            showLogout: ef || !1,
            location: ev,
            isTrustedName: eE
        })), e9 && (A = (0, r.jsxs)("div", {
            className: $.footer,
            children: [null != d ? (0, r.jsx)(h.Button, {
                look: h.Button.Looks.LINK,
                color: h.Button.Colors.PRIMARY,
                onClick: () => eR(d),
                children: J.default.Messages.BACK
            }) : (0, r.jsx)(h.Button, {
                look: h.Button.Looks.LINK,
                color: h.Button.Colors.PRIMARY,
                onClick: () => e$(!1),
                children: J.default.Messages.CANCEL
            }), 0 !== eN ? null != g ? (0, r.jsx)(h.Button, {
                onClick: () => eR(g),
                disabled: e3,
                children: J.default.Messages.CONTINUE
            }) : (0, r.jsx)(h.Button, {
                onClick: () => e$(!0),
                disabled: e3,
                submitting: eP,
                children: J.default.Messages.AUTHORIZE
            }) : null]
        })), {
            header: S,
            body: l,
            footer: A,
            nextStep: g,
            appDetails: m,
            sendAuthorize: e$
        }
    }

    function er(e, t) {
        if (null == t.location || null != e && e(t)) return;
        let {
            host: n,
            path: i,
            query: s
        } = c.parse(t.location, !0), a = U.default.isDiscordHostname(n) || window.location.host === n;
        if (a && i === Q.Routes.OAUTH2_AUTHORIZED)(0, g.openModal)(e => (0, r.jsx)(z.OAuth2Modal, {
            ...e,
            "aria-labelledby": ee,
            children: (0, r.jsx)(q.OAuth2AuthorizedSuccess, {
                guild: t.guild,
                application: t.application,
                onClose: e.onClose
            })
        }));
        else if (a && (null == i ? void 0 : i.startsWith(Q.Routes.OAUTH2_ERROR)))(0, g.openModal)(e => {
            let t = s.error_description || s.error || J.default.Messages.OAUTH2_UNKNOWN_ERROR;
            return Array.isArray(t) && (t = t[0]), (0, r.jsx)(z.OAuth2Modal, {
                ...e,
                "aria-labelledby": ee,
                children: (0, r.jsx)(q.OAuth2Error, {
                    message: t,
                    onClose: e.onClose
                })
            })
        });
        else {
            var o;
            null === (o = window.open(t.location, "_blank")) || void 0 === o || o.focus()
        }
    }

    function ea(e, t) {
        if ((0, R.isMidjourneyOnboardingFlow)("create-guild-and-oauth2-modal")) {
            N.default.openCreateGuildModal({
                onSuccess: n => eo({
                    ...e,
                    guildId: n
                }, t)
            });
            return
        }
        eo(e, t)
    }

    function eo(e, t) {
        (0, g.openModal)(t => (0, r.jsx)(en, {
            ...t,
            ...e,
            cancelCompletesFlow: !1,
            callback: er.bind(null, e.callback)
        }), {
            onCloseCallback: t
        })
    }

    function el(e) {
        let {
            hostname: t = "",
            host: n,
            path: i,
            query: s
        } = c.parse(e);
        return null != i && null != s && (U.default.isDiscordHostname(t) || n === window.location.host) && (i.startsWith("/api".concat(Q.Endpoints.OAUTH2_AUTHORIZE)) || i.startsWith(Q.Routes.OAUTH2_AUTHORIZE)) ? (0, w.parseOAuth2AuthorizeProps)(s) : null
    }(s = i || (i = {}))[s.SELECT_INSTALL_TYPE = 0] = "SELECT_INSTALL_TYPE", s[s.AUTHORIZE_SCOPES = 1] = "AUTHORIZE_SCOPES", s[s.AUTHORIZE_BOT_PERMISSIONS = 2] = "AUTHORIZE_BOT_PERMISSIONS"
}