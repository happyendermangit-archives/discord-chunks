function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        OAuth2Authorize: function() {
            return en
        },
        OAuth2AuthorizeModal: function() {
            return et
        },
        OAuth2AuthorizePage: function() {
            return ee
        },
        getOAuth2AuthorizeProps: function() {
            return eo
        },
        openOAuth2Modal: function() {
            return ea
        },
        openOAuth2ModalWithCreateGuildModal: function() {
            return es
        },
        useOAuth2AuthorizeForm: function() {
            return ei
        }
    }), n("47120"), n("411104");
    var i, r, s = n("735250"),
        a = n("470079"),
        o = n("803997"),
        l = n.n(o),
        u = n("613828"),
        d = n("729594"),
        _ = n("373793"),
        c = n("149765"),
        E = n("442837"),
        I = n("693789"),
        T = n("952265"),
        f = n("21340"),
        S = n("922770"),
        h = n("893776"),
        A = n("115130"),
        m = n("317381"),
        N = n("367907"),
        O = n("702493"),
        p = n("420582"),
        R = n("728345"),
        C = n("560067"),
        g = n("341298"),
        L = n("703656"),
        D = n("973616"),
        v = n("598077"),
        M = n("314897"),
        y = n("828695"),
        P = n("700785"),
        U = n("591759"),
        b = n("807675"),
        G = n("489863"),
        w = n("228763"),
        k = n("422559"),
        B = n("713938"),
        V = n("166148"),
        F = n("807989"),
        x = n("260430"),
        H = n("668185"),
        Y = n("407546"),
        j = n("41259"),
        W = n("28752"),
        K = n("787025"),
        z = n("397394"),
        X = n("574384"),
        Q = n("981631"),
        q = n("701488"),
        J = n("689938"),
        Z = n("418089");
    let $ = "oauth2-authorize-header-id";

    function ee() {
        let e = (0, u.useLocation)(),
            t = a.useMemo(() => (0, b.parseOAuth2AuthorizeProps)(e.search), [e.search]);
        return (0, O.default)(), a.useEffect(() => {
            M.default.isAuthenticated() && h.default.getExperiments()
        }, []), (0, s.jsx)(K.OAuth2Page, {
            children: (0, s.jsx)(en, {
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
        return (0, s.jsx)(K.OAuth2Modal, {
            transitionState: t,
            "aria-labelledby": $,
            children: (0, s.jsx)(en, {
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
            body: r,
            footer: a,
            nextStep: o,
            appDetails: u
        } = ei(n), d = (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsxs)("div", {
                className: Z.content,
                children: [i, r, null == o ? u : null]
            }), a]
        });
        return t ? (0, s.jsx)("div", {
            className: l()(Z.authorize, {
                [Z.inApp]: n.inApp
            }),
            children: (0, s.jsx)(f.ScrollerThin, {
                orientation: "auto",
                children: d
            })
        }) : (0, s.jsx)("div", {
            className: l()(Z.authorize, {
                [Z.inApp]: n.inApp
            }),
            children: (0, s.jsx)("div", {
                children: d
            })
        })
    }

    function ei(e) {
        var t, n, i, r, o;
        let l, T, f, h, O, C, {
                clientId: g,
                responseType: K,
                redirectUri: ee,
                codeChallenge: et,
                codeChallengeMethod: en,
                state: ei,
                prompt: er,
                authorization: es,
                scopes: ea,
                permissions: eo,
                guildId: el,
                channelId: eu,
                integrationType: ed,
                disableGuildSelect: e_ = !1,
                showLogout: ec = !1,
                cancelCompletesFlow: eE = !0,
                isTrustedName: eI = !1,
                isEmbeddedFlow: eT = !1,
                inApp: ef = !1,
                callback: eS,
                callbackWithoutPost: eh,
                onClose: eA
            } = e,
            em = (0, u.useLocation)(),
            eN = p.default.useExperiment({
                location: "auth web"
            }).userAppsTreatment === p.UserAppsTreatment.ALLOWED,
            eO = (0, E.useStateFromStores)([y.default], () => y.default.hasLoadedExperiments),
            [ep, eR] = a.useState(null),
            [eC, eg] = a.useState(null),
            [eL, eD] = a.useState(null),
            [ev, eM] = a.useState(!1),
            ey = null == ep ? void 0 : ep.guilds,
            [eP, eU] = a.useState(null != el ? el : null),
            [eb, eG] = a.useState(null != eu ? eu : null),
            [ew, ek] = a.useState(P.NONE),
            eB = a.useMemo(() => (null == ep ? void 0 : ep.user) != null ? new v.default(ep.user) : null, [null == ep ? void 0 : ep.user]),
            eV = a.useMemo(() => null == ey ? void 0 : ey.find(e => e.id === eP), [ey, eP]),
            [eF, ex] = a.useState(null),
            eH = a.useMemo(() => {
                var e;
                return eN && null == es && null == ed && (null !== (e = null == ea ? void 0 : ea.length) && void 0 !== e ? e : 0) === 0 && null == ee
            }, [es, eN, null == ea ? void 0 : ea.length, ee, ed]),
            [eY, ej] = a.useState(null);
        a.useEffect(() => {
            eH && R.default.fetchApplication(g).then(e => ej(D.default.createFromServer(e)))
        }, [g, eH]);
        let eW = a.useMemo(() => {
                var e, t;
                return null == eF ? null : null == eY ? void 0 : null === (t = eY.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eF]) || void 0 === e ? void 0 : e.oauth2InstallParams
            }, [null == eY ? void 0 : eY.integrationTypesConfig, eF]),
            {
                requestedScopes: eK,
                accountScopes: ez
            } = a.useMemo(() => {
                let e = eH ? null == eW ? void 0 : eW.scopes : ea,
                    t = (0, b.filterScopes)(null != e ? e : []),
                    n = B.OrderedAccountScopes.filter(e => t.includes(e));
                return {
                    requestedScopes: t,
                    accountScopes: n
                }
            }, [null == eW ? void 0 : eW.scopes, ea, eH]),
            eX = a.useMemo(() => {
                var e;
                let t = eH ? c.deserialize(null !== (e = null == eW ? void 0 : eW.permissions) && void 0 !== e ? e : 0) : eo;
                return null != t ? t : P.NONE
            }, [null == eW ? void 0 : eW.permissions, eo, eH]),
            eQ = (0, E.useStateFromStores)([m.default], () => m.default.getCurrentEmbeddedActivity()),
            eq = (0, E.useStateFromStoresObject)([A.default, m.default], () => {
                let e;
                let t = A.default.getIsEnabled();
                if (null != eQ) {
                    if (e = m.default.getShelfActivities(eQ.guildId).find(e => e.application_id === eQ.applicationId), t && void 0 === e) {
                        var n;
                        e = null === (n = A.default.getDeveloperShelfItems().find(e => e.id === eQ.applicationId)) || void 0 === n ? void 0 : n.embeddedActivityConfig
                    }
                    if (null != e) return {
                        ...q.DEFAULT_EMBEDDED_ACTIVITY_CONFIG,
                        ...e
                    }
                }
                return {}
            }, [eQ]),
            eJ = Object.keys(eq).length > 0 ? eq : null,
            eZ = a.useCallback(async e => {
                if (null != eh) {
                    eh(e);
                    return
                }
                if (!e && !eE) {
                    null != eS && (eS({
                        application: null == ep ? void 0 : ep.application,
                        guild: eV
                    }), null == eA || eA());
                    return
                }
                if (null == eF) {
                    eD(Error("No integration type was selected."));
                    return
                }
                try {
                    eM(!0);
                    let t = await (0, G.authorize)({
                        authorize: e,
                        clientId: g,
                        scopes: eK,
                        responseType: K,
                        redirectUri: ee,
                        codeChallenge: et,
                        codeChallengeMethod: en,
                        state: ei,
                        integrationType: eF,
                        permissions: c.remove(eX, ew),
                        guildId: eF === _.ApplicationIntegrationType.GUILD_INSTALL && null != eP ? eP : void 0,
                        channelId: eF === _.ApplicationIntegrationType.GUILD_INSTALL && null != eb ? eb : void 0
                    });
                    if (null != eS) eS({
                        application: null == ep ? void 0 : ep.application,
                        location: t.location,
                        guild: eV
                    }), null == eA || eA();
                    else if (null != t.location) {
                        let {
                            host: e,
                            path: n
                        } = d.parse(t.location);
                        U.default.isDiscordHostname(e) && n === Q.Routes.OAUTH2_AUTHORIZED ? (0, L.transitionTo)(Q.Routes.OAUTH2_AUTHORIZED, {
                            state: {
                                application: null == ep ? void 0 : ep.application,
                                guild: eV
                            }
                        }) : window.location = t.location
                    } else eM(!1)
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && "" !== e.message ? eD(Error(e.message)) : eD(e), eg(1), eM(!1)
                }
            }, [eh, eE, eS, null == ep ? void 0 : ep.application, eV, eA, g, eK, K, ee, et, en, ei, eX, ew, eP, eF, eb]),
            e$ = a.useRef(!1),
            e0 = a.useCallback(async () => {
                if (!M.default.isAuthenticated()) {
                    (0, G.logoutWithRedirect)(em);
                    return
                }
                if (!e$.current) {
                    e$.current = !0;
                    try {
                        let e = null != es ? es : await (0, G.fetchAuthorization)({
                            clientId: g,
                            scopes: eK,
                            responseType: K,
                            redirectUri: ee,
                            codeChallenge: et,
                            codeChallengeMethod: en,
                            state: ei,
                            userInstall: eF === _.ApplicationIntegrationType.USER_INSTALL
                        });
                        eR((0, w.convertOAuth2Authorization)(e)), er === V.OAuth2Prompts.NONE && e.authorized && eZ(!0), (0, N.trackWithMetadata)(Q.AnalyticEvents.OAUTH2_AUTHORIZE_VIEWED, {
                            application_id: e.application.id
                        })
                    } catch (n) {
                        let {
                            status: e,
                            body: t
                        } = n;
                        if (401 === e) {
                            (0, G.logoutWithRedirect)(em);
                            return
                        }
                        eD(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
                    } finally {
                        e$.current = !1
                    }
                }
            }, [em, es, g, eK, K, ee, et, en, ei, eF, er, eZ]),
            e1 = a.useMemo(() => {
                var e;
                return null != eY && eH ? Object.entries(null !== (e = eY.integrationTypesConfig) && void 0 !== e ? e : {}).filter(e => {
                    let [t, n] = e;
                    return null != n.oauth2InstallParams
                }).map(e => {
                    let [t, n] = e;
                    return Number(t)
                }) : []
            }, [eY, eH]);
        if (a.useEffect(() => {
                if (null == eC && (!eH || null != eY) && eO) {
                    if (null != es) {
                        var e;
                        ex(null !== (e = es.integration_type) && void 0 !== e ? e : _.ApplicationIntegrationType.GUILD_INSTALL), eg(1)
                    } else e1.length > 1 ? eg(0) : (1 === e1.length ? ex(e1[0]) : eN && null != ed ? ex(ed) : ex(_.ApplicationIntegrationType.GUILD_INSTALL), eg(1))
                }
            }, [es, e1, eY, eN, eH, ed, eC, eO]), a.useEffect(() => {
                if (null == eF || null != ep || null != eL) return;
                eF === _.ApplicationIntegrationType.USER_INSTALL && (eU(null), eG(null));
                let e = eK.filter(e => !B.ValidScopes.includes(e));
                0 === eK.length ? eD(Error("No scopes were provided.")) : e.length > 0 ? eD(Error("Invalid scope: ".concat(e[0]))) : (0, k.containsDisallowedPermission)(eX) ? eD(Error("Invalid permission(s) provided.")) : e0()
            }, [e0, eK, eX, eF, ep, eL]), eL instanceof Error) return {
            body: (0, s.jsx)(z.OAuth2Error, {
                message: eL.message
            })
        };
        let e2 = !1,
            e3 = !0,
            e4 = !0,
            e7 = !0;
        switch (eC) {
            case null:
                return {
                    body: (0, s.jsx)(S.Spinner, {})
                };
            case 0:
                if (null == eY) return {
                    body: (0, s.jsx)(S.Spinner, {})
                };
                l = (0, s.jsx)(W.default, {
                    inApp: ef,
                    application: eY,
                    onSelect: e => {
                        ex(e), eR(null), eg(1)
                    }
                }), e3 = !1, e4 = !1, e7 = ef;
                break;
            case 1:
                if (null == ep || null == eB || null == eF) return {
                    body: (0, s.jsx)(S.Spinner, {})
                };
                let e6 = null == eL || eL instanceof Error ? {} : eL,
                    e5 = null == ey ? void 0 : ey.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                    e8 = eF === _.ApplicationIntegrationType.GUILD_INSTALL && eK.includes(Q.OAuth2Scopes.WEBHOOK_INCOMING),
                    e9 = e8 || eF === _.ApplicationIntegrationType.GUILD_INSTALL && (eK.includes(Q.OAuth2Scopes.BOT) || eK.includes(Q.OAuth2Scopes.APPLICATIONS_COMMANDS));
                l = (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(x.default, {
                        application: ep.application,
                        accountScopes: ez,
                        requestedScopes: eK,
                        integrationType: eF,
                        errors: e6,
                        isTrustedName: eI
                    }), e9 ? (0, s.jsx)(Y.default, {
                        error: (null !== (n = null !== (t = e6[Q.OAuth2Scopes.BOT]) && void 0 !== t ? t : e6[Q.OAuth2Scopes.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
                        selectedGuildId: eP,
                        onGuildChange: eU,
                        guilds: null != e5 ? e5 : [],
                        disabled: "" !== eP && null != eP && !0 === e_
                    }) : null, e8 ? (0, s.jsx)(X.default, {
                        error: (null !== (i = e6[Q.OAuth2Scopes.WEBHOOK_INCOMING]) && void 0 !== i ? i : [])[0],
                        selectedChannelId: eb,
                        selectedGuildId: eP,
                        onChannelChange: eG
                    }) : null]
                }), eK.includes(Q.OAuth2Scopes.BOT) && !c.equals(eX, P.NONE) && (f = 2), e1.length > 1 && (T = 0), e2 = e9 && null == eV || e8 && null == eb;
                break;
            case 2:
                if (null == ep) return {
                    body: (0, s.jsx)(S.Spinner, {})
                };
                l = (0, s.jsx)(H.default, {
                    application: ep.application,
                    permissions: eX,
                    deniedPermissions: ew,
                    onPermissionsChange: (e, t) => {
                        ek(n => e ? c.remove(n, t) : c.add(n, t))
                    },
                    guild: eV
                }), T = 1
        }
        if (e3 && null != ep) {
            let e = null === (r = ep.bot) || void 0 === r ? void 0 : r.approximate_guild_count;
            h = (0, s.jsx)(F.default, {
                embeddedActivityConfig: eJ,
                application: ep.application,
                scopes: eK,
                redirectUri: null !== (o = ep.redirect_uri) && void 0 !== o ? o : null,
                approximateGuildCount: void 0 !== e ? e : null,
                isEmbeddedFlow: eT
            })
        }
        return e4 && null != ep && null != eB && (O = (0, s.jsx)(j.default, {
            id: $,
            user: eB,
            application: ep.application,
            bot: ep.bot,
            accountScopes: ez,
            showLogout: ec || !1,
            location: em,
            isTrustedName: eI
        })), e7 && (C = (0, s.jsxs)("div", {
            className: Z.footer,
            children: [null != T ? (0, s.jsx)(I.Button, {
                look: I.Button.Looks.LINK,
                color: I.Button.Colors.PRIMARY,
                onClick: () => eg(T),
                children: J.default.Messages.BACK
            }) : (0, s.jsx)(I.Button, {
                look: I.Button.Looks.LINK,
                color: I.Button.Colors.PRIMARY,
                onClick: () => eZ(!1),
                children: J.default.Messages.CANCEL
            }), 0 !== eC ? null != f ? (0, s.jsx)(I.Button, {
                onClick: () => eg(f),
                disabled: e2,
                children: J.default.Messages.CONTINUE
            }) : (0, s.jsx)(I.Button, {
                onClick: () => eZ(!0),
                disabled: e2,
                submitting: ev,
                children: J.default.Messages.AUTHORIZE
            }) : null]
        })), {
            header: O,
            body: l,
            footer: C,
            nextStep: f,
            appDetails: h,
            sendAuthorize: eZ
        }
    }

    function er(e, t) {
        if (null == t.location || null != e && e(t)) return;
        let {
            host: n,
            path: i,
            query: r
        } = d.parse(t.location, !0), a = U.default.isDiscordHostname(n) || window.location.host === n;
        if (a && i === Q.Routes.OAUTH2_AUTHORIZED)(0, T.openModal)(e => (0, s.jsx)(K.OAuth2Modal, {
            ...e,
            "aria-labelledby": $,
            children: (0, s.jsx)(z.OAuth2AuthorizedSuccess, {
                guild: t.guild,
                application: t.application,
                onClose: e.onClose
            })
        }));
        else if (a && (null == i ? void 0 : i.startsWith(Q.Routes.OAUTH2_ERROR)))(0, T.openModal)(e => {
            let t = r.error_description || r.error || J.default.Messages.OAUTH2_UNKNOWN_ERROR;
            return Array.isArray(t) && (t = t[0]), (0, s.jsx)(K.OAuth2Modal, {
                ...e,
                "aria-labelledby": $,
                children: (0, s.jsx)(z.OAuth2Error, {
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

    function es(e, t) {
        if ((0, g.isMidjourneyOnboardingFlow)("create-guild-and-oauth2-modal")) {
            C.default.openCreateGuildModal({
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
        (0, T.openModal)(t => (0, s.jsx)(et, {
            ...t,
            ...e,
            cancelCompletesFlow: !1,
            callback: er.bind(null, e.callback)
        }), {
            onCloseCallback: t
        })
    }

    function eo(e) {
        let {
            hostname: t = "",
            host: n,
            path: i,
            query: r
        } = d.parse(e);
        return null != i && null != r && (U.default.isDiscordHostname(t) || n === window.location.host) && (i.startsWith("/api".concat(Q.Endpoints.OAUTH2_AUTHORIZE)) || i.startsWith(Q.Routes.OAUTH2_AUTHORIZE)) ? (0, b.parseOAuth2AuthorizeProps)(r) : null
    }(r = i || (i = {}))[r.SELECT_INSTALL_TYPE = 0] = "SELECT_INSTALL_TYPE", r[r.AUTHORIZE_SCOPES = 1] = "AUTHORIZE_SCOPES", r[r.AUTHORIZE_BOT_PERMISSIONS = 2] = "AUTHORIZE_BOT_PERMISSIONS"
}