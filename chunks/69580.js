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
        o = n("120356"),
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
        p = n("702493"),
        O = n("420582"),
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
        B = n("422559"),
        k = n("713938"),
        F = n("166148"),
        V = n("807989"),
        x = n("260430"),
        H = n("668185"),
        Y = n("407546"),
        j = n("41259"),
        W = n("28752"),
        K = n("787025"),
        z = n("397394"),
        X = n("574384"),
        q = n("981631"),
        Q = n("701488"),
        Z = n("689938"),
        J = n("418089");
    let $ = "oauth2-authorize-header-id";

    function ee() {
        let e = (0, u.useLocation)(),
            t = a.useMemo(() => (0, b.parseOAuth2AuthorizeProps)(e.search), [e.search]);
        return (0, p.default)(), (0, s.jsx)(K.OAuth2Page, {
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
                className: J.content,
                children: [i, r, null == o ? u : null]
            }), a]
        });
        return t ? (0, s.jsx)("div", {
            className: l()(J.authorize, {
                [J.inApp]: n.inApp
            }),
            children: (0, s.jsx)(f.ScrollerThin, {
                orientation: "auto",
                children: d
            })
        }) : (0, s.jsx)("div", {
            className: l()(J.authorize, {
                [J.inApp]: n.inApp
            }),
            children: (0, s.jsx)("div", {
                children: d
            })
        })
    }

    function ei(e) {
        var t, n, i, r, o;
        let l, T, f, p, C, g, {
                clientId: K,
                responseType: ee,
                redirectUri: et,
                codeChallenge: en,
                codeChallengeMethod: ei,
                state: er,
                nonce: es,
                prompt: ea,
                authorization: eo,
                scopes: el,
                permissions: eu,
                guildId: ed,
                channelId: e_,
                integrationType: ec,
                disableGuildSelect: eE = !1,
                showLogout: eI = !1,
                cancelCompletesFlow: eT = !0,
                isTrustedName: ef = !1,
                isEmbeddedFlow: eS = !1,
                inApp: eh = !1,
                callback: eA,
                callbackWithoutPost: em,
                onClose: eN
            } = e,
            ep = (0, u.useLocation)(),
            eO = O.default.useExperiment({
                location: "auth web"
            }).userAppsTreatment === O.UserAppsTreatment.ALLOWED,
            eR = (0, E.useStateFromStores)([y.default], () => y.default.hasLoadedExperiments);
        a.useEffect(() => {
            M.default.isAuthenticated() && !eR && h.default.getExperiments()
        }, [eR]);
        let [eC, eg] = a.useState(null), [eL, eD] = a.useState(null), [ev, eM] = a.useState(null), [ey, eP] = a.useState(!1), eU = null == eC ? void 0 : eC.guilds, [eb, eG] = a.useState(null != ed ? ed : null), [ew, eB] = a.useState(null != e_ ? e_ : null), [ek, eF] = a.useState(P.NONE), eV = a.useMemo(() => (null == eC ? void 0 : eC.user) != null ? new v.default(eC.user) : null, [null == eC ? void 0 : eC.user]), ex = a.useMemo(() => null == eU ? void 0 : eU.find(e => e.id === eb), [eU, eb]), [eH, eY] = a.useState(null), ej = a.useMemo(() => {
            var e;
            return eO && null == eo && null == ec && (null !== (e = null == el ? void 0 : el.length) && void 0 !== e ? e : 0) === 0 && null == et
        }, [eo, eO, null == el ? void 0 : el.length, et, ec]), [eW, eK] = a.useState(null);
        a.useEffect(() => {
            ej && R.default.fetchApplication(K).then(e => eK(D.default.createFromServer(e)))
        }, [K, ej]);
        let ez = a.useMemo(() => {
                var e, t;
                return null == eH ? null : null == eW ? void 0 : null === (t = eW.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eH]) || void 0 === e ? void 0 : e.oauth2InstallParams
            }, [null == eW ? void 0 : eW.integrationTypesConfig, eH]),
            {
                requestedScopes: eX,
                accountScopes: eq
            } = a.useMemo(() => {
                let e = ej ? null == ez ? void 0 : ez.scopes : el,
                    t = (0, b.filterScopes)(null != e ? e : []),
                    n = k.OrderedAccountScopes.filter(e => t.includes(e));
                return {
                    requestedScopes: t,
                    accountScopes: n
                }
            }, [null == ez ? void 0 : ez.scopes, el, ej]),
            eQ = a.useMemo(() => {
                var e;
                let t = ej ? c.deserialize(null !== (e = null == ez ? void 0 : ez.permissions) && void 0 !== e ? e : 0) : eu;
                return null != t ? t : P.NONE
            }, [null == ez ? void 0 : ez.permissions, eu, ej]),
            eZ = (0, E.useStateFromStores)([m.default], () => m.default.getCurrentEmbeddedActivity()),
            eJ = (0, E.useStateFromStoresObject)([A.default, m.default], () => {
                let e;
                let t = A.default.getIsEnabled();
                if (null != eZ) {
                    if (e = m.default.getShelfActivities(eZ.guildId).find(e => e.application_id === eZ.applicationId), t && void 0 === e) {
                        var n;
                        e = null === (n = A.default.getDeveloperShelfItems().find(e => e.id === eZ.applicationId)) || void 0 === n ? void 0 : n.embeddedActivityConfig
                    }
                    if (null != e) return {
                        ...Q.DEFAULT_EMBEDDED_ACTIVITY_CONFIG,
                        ...e
                    }
                }
                return {}
            }, [eZ]),
            e$ = Object.keys(eJ).length > 0 ? eJ : null,
            e0 = a.useCallback(async e => {
                if (null != em) {
                    em(e);
                    return
                }
                if (!e && !eT) {
                    null != eA && (eA({
                        application: null == eC ? void 0 : eC.application,
                        guild: ex
                    }), null == eN || eN());
                    return
                }
                if (null == eH) {
                    eM(Error("No integration type was selected."));
                    return
                }
                try {
                    eP(!0);
                    let t = await (0, G.authorize)({
                        authorize: e,
                        clientId: K,
                        scopes: eX,
                        responseType: ee,
                        redirectUri: et,
                        codeChallenge: en,
                        codeChallengeMethod: ei,
                        state: er,
                        nonce: es,
                        integrationType: eH,
                        permissions: c.remove(eQ, ek),
                        guildId: eH === _.ApplicationIntegrationType.GUILD_INSTALL && null != eb ? eb : void 0,
                        channelId: eH === _.ApplicationIntegrationType.GUILD_INSTALL && null != ew ? ew : void 0
                    });
                    if (null != eA) eA({
                        application: null == eC ? void 0 : eC.application,
                        location: t.location,
                        guild: ex
                    }), null == eN || eN();
                    else if (null != t.location) {
                        let {
                            host: e,
                            path: n
                        } = d.parse(t.location);
                        U.default.isDiscordHostname(e) && n === q.Routes.OAUTH2_AUTHORIZED ? (0, L.transitionTo)(q.Routes.OAUTH2_AUTHORIZED, {
                            state: {
                                application: null == eC ? void 0 : eC.application,
                                guild: ex
                            }
                        }) : window.location = t.location
                    } else eP(!1)
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && "" !== e.message ? eM(Error(e.message)) : eM(e), eD(1), eP(!1)
                }
            }, [em, eT, eA, null == eC ? void 0 : eC.application, ex, eN, K, eX, ee, et, en, ei, er, es, eQ, ek, eb, eH, ew]),
            e1 = a.useRef(!1),
            e2 = a.useCallback(async () => {
                if (!M.default.isAuthenticated()) {
                    (0, G.logoutWithRedirect)(ep);
                    return
                }
                if (!e1.current) {
                    e1.current = !0;
                    try {
                        let e = null != eo ? eo : await (0, G.fetchAuthorization)({
                            clientId: K,
                            scopes: eX,
                            responseType: ee,
                            redirectUri: et,
                            codeChallenge: en,
                            codeChallengeMethod: ei,
                            state: er,
                            nonce: es,
                            userInstall: eH === _.ApplicationIntegrationType.USER_INSTALL
                        });
                        eg((0, w.convertOAuth2Authorization)(e)), ea === F.OAuth2Prompts.NONE && e.authorized && e0(!0), (0, N.trackWithMetadata)(q.AnalyticEvents.OAUTH2_AUTHORIZE_VIEWED, {
                            application_id: e.application.id
                        })
                    } catch (n) {
                        let {
                            status: e,
                            body: t
                        } = n;
                        if (401 === e) {
                            (0, G.logoutWithRedirect)(ep);
                            return
                        }
                        eM(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
                    } finally {
                        e1.current = !1
                    }
                }
            }, [ep, eo, K, eX, ee, et, en, ei, er, es, eH, ea, e0]),
            e3 = a.useMemo(() => {
                var e;
                return null != eW && ej ? Object.entries(null !== (e = eW.integrationTypesConfig) && void 0 !== e ? e : {}).filter(e => {
                    let [t, n] = e;
                    return null != n.oauth2InstallParams
                }).map(e => {
                    let [t, n] = e;
                    return Number(t)
                }) : []
            }, [eW, ej]);
        if (a.useEffect(() => {
                if (null == eL && (!ej || null != eW) && eR) {
                    if (null != eo) {
                        var e;
                        eY(null !== (e = eo.integration_type) && void 0 !== e ? e : _.ApplicationIntegrationType.GUILD_INSTALL), eD(1)
                    } else e3.length > 1 ? eD(0) : (1 === e3.length ? eY(e3[0]) : eO && null != ec ? eY(ec) : eY(_.ApplicationIntegrationType.GUILD_INSTALL), eD(1))
                }
            }, [eo, e3, eW, eO, ej, ec, eL, eR]), a.useEffect(() => {
                if (null == eH || null != eC || null != ev) return;
                eH === _.ApplicationIntegrationType.USER_INSTALL && (eG(null), eB(null));
                let e = eX.filter(e => !k.ValidScopes.includes(e));
                0 === eX.length ? eM(Error("No scopes were provided.")) : e.length > 0 ? eM(Error("Invalid scope: ".concat(e[0]))) : (0, B.containsDisallowedPermission)(eQ) ? eM(Error("Invalid permission(s) provided.")) : e2()
            }, [e2, eX, eQ, eH, eC, ev]), ev instanceof Error) return {
            body: (0, s.jsx)(z.OAuth2Error, {
                message: ev.message
            })
        };
        let e4 = !1,
            e6 = !0,
            e7 = !0,
            e5 = !0;
        switch (eL) {
            case null:
                return {
                    body: (0, s.jsx)(S.Spinner, {})
                };
            case 0:
                if (null == eW) return {
                    body: (0, s.jsx)(S.Spinner, {})
                };
                l = (0, s.jsx)(W.default, {
                    inApp: eh,
                    application: eW,
                    onSelect: e => {
                        eY(e), eg(null), eD(1)
                    }
                }), e6 = !1, e7 = !1, e5 = eh;
                break;
            case 1:
                if (null == eC || null == eV || null == eH) return {
                    body: (0, s.jsx)(S.Spinner, {})
                };
                let e8 = null == ev || ev instanceof Error ? {} : ev,
                    e9 = null == eU ? void 0 : eU.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                    te = eH === _.ApplicationIntegrationType.GUILD_INSTALL && eX.includes(q.OAuth2Scopes.WEBHOOK_INCOMING),
                    tt = te || eH === _.ApplicationIntegrationType.GUILD_INSTALL && (eX.includes(q.OAuth2Scopes.BOT) || eX.includes(q.OAuth2Scopes.APPLICATIONS_COMMANDS));
                l = (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(x.default, {
                        application: eC.application,
                        accountScopes: eq,
                        requestedScopes: eX,
                        integrationType: eH,
                        errors: e8,
                        isTrustedName: ef
                    }), tt ? (0, s.jsx)(Y.default, {
                        error: (null !== (n = null !== (t = e8[q.OAuth2Scopes.BOT]) && void 0 !== t ? t : e8[q.OAuth2Scopes.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
                        selectedGuildId: eb,
                        onGuildChange: eG,
                        guilds: null != e9 ? e9 : [],
                        disabled: "" !== eb && null != eb && !0 === eE
                    }) : null, te ? (0, s.jsx)(X.default, {
                        error: (null !== (i = e8[q.OAuth2Scopes.WEBHOOK_INCOMING]) && void 0 !== i ? i : [])[0],
                        selectedChannelId: ew,
                        selectedGuildId: eb,
                        onChannelChange: eB
                    }) : null]
                }), eX.includes(q.OAuth2Scopes.BOT) && !c.equals(eQ, P.NONE) && (f = 2), e3.length > 1 && (T = 0), e4 = tt && null == ex || te && null == ew;
                break;
            case 2:
                if (null == eC) return {
                    body: (0, s.jsx)(S.Spinner, {})
                };
                l = (0, s.jsx)(H.default, {
                    application: eC.application,
                    permissions: eQ,
                    deniedPermissions: ek,
                    onPermissionsChange: (e, t) => {
                        eF(n => e ? c.remove(n, t) : c.add(n, t))
                    },
                    guild: ex
                }), T = 1
        }
        if (e6 && null != eC) {
            let e = null === (r = eC.bot) || void 0 === r ? void 0 : r.approximate_guild_count;
            p = (0, s.jsx)(V.default, {
                embeddedActivityConfig: e$,
                application: eC.application,
                scopes: eX,
                redirectUri: null !== (o = eC.redirect_uri) && void 0 !== o ? o : null,
                approximateGuildCount: void 0 !== e ? e : null,
                isEmbeddedFlow: eS
            })
        }
        return e7 && null != eC && null != eV && (C = (0, s.jsx)(j.default, {
            id: $,
            user: eV,
            application: eC.application,
            bot: eC.bot,
            accountScopes: eq,
            showLogout: eI || !1,
            location: ep,
            isTrustedName: ef
        })), e5 && (g = (0, s.jsxs)("div", {
            className: J.footer,
            children: [null != T ? (0, s.jsx)(I.Button, {
                look: I.Button.Looks.LINK,
                color: I.Button.Colors.PRIMARY,
                onClick: () => eD(T),
                children: Z.default.Messages.BACK
            }) : (0, s.jsx)(I.Button, {
                look: I.Button.Looks.LINK,
                color: I.Button.Colors.PRIMARY,
                onClick: () => e0(!1),
                children: Z.default.Messages.CANCEL
            }), 0 !== eL ? null != f ? (0, s.jsx)(I.Button, {
                onClick: () => eD(f),
                disabled: e4,
                children: Z.default.Messages.CONTINUE
            }) : (0, s.jsx)(I.Button, {
                onClick: () => e0(!0),
                disabled: e4,
                submitting: ey,
                children: Z.default.Messages.AUTHORIZE
            }) : null]
        })), {
            header: C,
            body: l,
            footer: g,
            nextStep: f,
            appDetails: p,
            sendAuthorize: e0
        }
    }

    function er(e, t) {
        if (null == t.location || null != e && e(t)) return;
        let {
            host: n,
            path: i,
            query: r
        } = d.parse(t.location, !0), a = U.default.isDiscordHostname(n) || window.location.host === n;
        if (a && i === q.Routes.OAUTH2_AUTHORIZED)(0, T.openModal)(e => (0, s.jsx)(K.OAuth2Modal, {
            ...e,
            "aria-labelledby": $,
            children: (0, s.jsx)(z.OAuth2AuthorizedSuccess, {
                guild: t.guild,
                application: t.application,
                onClose: e.onClose
            })
        }));
        else if (a && (null == i ? void 0 : i.startsWith(q.Routes.OAUTH2_ERROR)))(0, T.openModal)(e => {
            let t = r.error_description || r.error || Z.default.Messages.OAUTH2_UNKNOWN_ERROR;
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
        return null != i && null != r && (U.default.isDiscordHostname(t) || n === window.location.host) && (i.startsWith("/api".concat(q.Endpoints.OAUTH2_AUTHORIZE)) || i.startsWith(q.Routes.OAUTH2_AUTHORIZE)) ? (0, b.parseOAuth2AuthorizeProps)(r) : null
    }(r = i || (i = {}))[r.SELECT_INSTALL_TYPE = 0] = "SELECT_INSTALL_TYPE", r[r.AUTHORIZE_SCOPES = 1] = "AUTHORIZE_SCOPES", r[r.AUTHORIZE_BOT_PERMISSIONS = 2] = "AUTHORIZE_BOT_PERMISSIONS"
}