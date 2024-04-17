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
                prompt: es,
                authorization: ea,
                scopes: eo,
                permissions: el,
                guildId: eu,
                channelId: ed,
                integrationType: e_,
                disableGuildSelect: ec = !1,
                showLogout: eE = !1,
                cancelCompletesFlow: eI = !0,
                isTrustedName: eT = !1,
                isEmbeddedFlow: ef = !1,
                inApp: eS = !1,
                callback: eh,
                callbackWithoutPost: eA,
                onClose: em
            } = e,
            eN = (0, u.useLocation)(),
            ep = O.default.useExperiment({
                location: "auth web"
            }).userAppsTreatment === O.UserAppsTreatment.ALLOWED,
            eO = (0, E.useStateFromStores)([y.default], () => y.default.hasLoadedExperiments);
        a.useEffect(() => {
            M.default.isAuthenticated() && !eO && h.default.getExperiments()
        }, [eO]);
        let [eR, eC] = a.useState(null), [eg, eL] = a.useState(null), [eD, ev] = a.useState(null), [eM, ey] = a.useState(!1), eP = null == eR ? void 0 : eR.guilds, [eU, eb] = a.useState(null != eu ? eu : null), [eG, ew] = a.useState(null != ed ? ed : null), [eB, ek] = a.useState(P.NONE), eV = a.useMemo(() => (null == eR ? void 0 : eR.user) != null ? new v.default(eR.user) : null, [null == eR ? void 0 : eR.user]), eF = a.useMemo(() => null == eP ? void 0 : eP.find(e => e.id === eU), [eP, eU]), [ex, eH] = a.useState(null), eY = a.useMemo(() => {
            var e;
            return ep && null == ea && null == e_ && (null !== (e = null == eo ? void 0 : eo.length) && void 0 !== e ? e : 0) === 0 && null == et
        }, [ea, ep, null == eo ? void 0 : eo.length, et, e_]), [ej, eW] = a.useState(null);
        a.useEffect(() => {
            eY && R.default.fetchApplication(K).then(e => eW(D.default.createFromServer(e)))
        }, [K, eY]);
        let eK = a.useMemo(() => {
                var e, t;
                return null == ex ? null : null == ej ? void 0 : null === (t = ej.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[ex]) || void 0 === e ? void 0 : e.oauth2InstallParams
            }, [null == ej ? void 0 : ej.integrationTypesConfig, ex]),
            {
                requestedScopes: ez,
                accountScopes: eX
            } = a.useMemo(() => {
                let e = eY ? null == eK ? void 0 : eK.scopes : eo,
                    t = (0, b.filterScopes)(null != e ? e : []),
                    n = k.OrderedAccountScopes.filter(e => t.includes(e));
                return {
                    requestedScopes: t,
                    accountScopes: n
                }
            }, [null == eK ? void 0 : eK.scopes, eo, eY]),
            eQ = a.useMemo(() => {
                var e;
                let t = eY ? c.deserialize(null !== (e = null == eK ? void 0 : eK.permissions) && void 0 !== e ? e : 0) : el;
                return null != t ? t : P.NONE
            }, [null == eK ? void 0 : eK.permissions, el, eY]),
            eq = (0, E.useStateFromStores)([m.default], () => m.default.getCurrentEmbeddedActivity()),
            eZ = (0, E.useStateFromStoresObject)([A.default, m.default], () => {
                let e;
                let t = A.default.getIsEnabled();
                if (null != eq) {
                    if (e = m.default.getShelfActivities(eq.guildId).find(e => e.application_id === eq.applicationId), t && void 0 === e) {
                        var n;
                        e = null === (n = A.default.getDeveloperShelfItems().find(e => e.id === eq.applicationId)) || void 0 === n ? void 0 : n.embeddedActivityConfig
                    }
                    if (null != e) return {
                        ...q.DEFAULT_EMBEDDED_ACTIVITY_CONFIG,
                        ...e
                    }
                }
                return {}
            }, [eq]),
            eJ = Object.keys(eZ).length > 0 ? eZ : null,
            e$ = a.useCallback(async e => {
                if (null != eA) {
                    eA(e);
                    return
                }
                if (!e && !eI) {
                    null != eh && (eh({
                        application: null == eR ? void 0 : eR.application,
                        guild: eF
                    }), null == em || em());
                    return
                }
                if (null == ex) {
                    ev(Error("No integration type was selected."));
                    return
                }
                try {
                    ey(!0);
                    let t = await (0, G.authorize)({
                        authorize: e,
                        clientId: K,
                        scopes: ez,
                        responseType: ee,
                        redirectUri: et,
                        codeChallenge: en,
                        codeChallengeMethod: ei,
                        state: er,
                        integrationType: ex,
                        permissions: c.remove(eQ, eB),
                        guildId: ex === _.ApplicationIntegrationType.GUILD_INSTALL && null != eU ? eU : void 0,
                        channelId: ex === _.ApplicationIntegrationType.GUILD_INSTALL && null != eG ? eG : void 0
                    });
                    if (null != eh) eh({
                        application: null == eR ? void 0 : eR.application,
                        location: t.location,
                        guild: eF
                    }), null == em || em();
                    else if (null != t.location) {
                        let {
                            host: e,
                            path: n
                        } = d.parse(t.location);
                        U.default.isDiscordHostname(e) && n === Q.Routes.OAUTH2_AUTHORIZED ? (0, L.transitionTo)(Q.Routes.OAUTH2_AUTHORIZED, {
                            state: {
                                application: null == eR ? void 0 : eR.application,
                                guild: eF
                            }
                        }) : window.location = t.location
                    } else ey(!1)
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && "" !== e.message ? ev(Error(e.message)) : ev(e), eL(1), ey(!1)
                }
            }, [eA, eI, eh, null == eR ? void 0 : eR.application, eF, em, K, ez, ee, et, en, ei, er, eQ, eB, eU, ex, eG]),
            e0 = a.useRef(!1),
            e1 = a.useCallback(async () => {
                if (!M.default.isAuthenticated()) {
                    (0, G.logoutWithRedirect)(eN);
                    return
                }
                if (!e0.current) {
                    e0.current = !0;
                    try {
                        let e = null != ea ? ea : await (0, G.fetchAuthorization)({
                            clientId: K,
                            scopes: ez,
                            responseType: ee,
                            redirectUri: et,
                            codeChallenge: en,
                            codeChallengeMethod: ei,
                            state: er,
                            userInstall: ex === _.ApplicationIntegrationType.USER_INSTALL
                        });
                        eC((0, w.convertOAuth2Authorization)(e)), es === V.OAuth2Prompts.NONE && e.authorized && e$(!0), (0, N.trackWithMetadata)(Q.AnalyticEvents.OAUTH2_AUTHORIZE_VIEWED, {
                            application_id: e.application.id
                        })
                    } catch (n) {
                        let {
                            status: e,
                            body: t
                        } = n;
                        if (401 === e) {
                            (0, G.logoutWithRedirect)(eN);
                            return
                        }
                        ev(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
                    } finally {
                        e0.current = !1
                    }
                }
            }, [eN, ea, K, ez, ee, et, en, ei, er, ex, es, e$]),
            e2 = a.useMemo(() => {
                var e;
                return null != ej && eY ? Object.entries(null !== (e = ej.integrationTypesConfig) && void 0 !== e ? e : {}).filter(e => {
                    let [t, n] = e;
                    return null != n.oauth2InstallParams
                }).map(e => {
                    let [t, n] = e;
                    return Number(t)
                }) : []
            }, [ej, eY]);
        if (a.useEffect(() => {
                if (null == eg && (!eY || null != ej) && eO) {
                    if (null != ea) {
                        var e;
                        eH(null !== (e = ea.integration_type) && void 0 !== e ? e : _.ApplicationIntegrationType.GUILD_INSTALL), eL(1)
                    } else e2.length > 1 ? eL(0) : (1 === e2.length ? eH(e2[0]) : ep && null != e_ ? eH(e_) : eH(_.ApplicationIntegrationType.GUILD_INSTALL), eL(1))
                }
            }, [ea, e2, ej, ep, eY, e_, eg, eO]), a.useEffect(() => {
                if (null == ex || null != eR || null != eD) return;
                ex === _.ApplicationIntegrationType.USER_INSTALL && (eb(null), ew(null));
                let e = ez.filter(e => !k.ValidScopes.includes(e));
                0 === ez.length ? ev(Error("No scopes were provided.")) : e.length > 0 ? ev(Error("Invalid scope: ".concat(e[0]))) : (0, B.containsDisallowedPermission)(eQ) ? ev(Error("Invalid permission(s) provided.")) : e1()
            }, [e1, ez, eQ, ex, eR, eD]), eD instanceof Error) return {
            body: (0, s.jsx)(z.OAuth2Error, {
                message: eD.message
            })
        };
        let e3 = !1,
            e4 = !0,
            e6 = !0,
            e7 = !0;
        switch (eg) {
            case null:
                return {
                    body: (0, s.jsx)(S.Spinner, {})
                };
            case 0:
                if (null == ej) return {
                    body: (0, s.jsx)(S.Spinner, {})
                };
                l = (0, s.jsx)(W.default, {
                    inApp: eS,
                    application: ej,
                    onSelect: e => {
                        eH(e), eC(null), eL(1)
                    }
                }), e4 = !1, e6 = !1, e7 = eS;
                break;
            case 1:
                if (null == eR || null == eV || null == ex) return {
                    body: (0, s.jsx)(S.Spinner, {})
                };
                let e5 = null == eD || eD instanceof Error ? {} : eD,
                    e8 = null == eP ? void 0 : eP.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                    e9 = ex === _.ApplicationIntegrationType.GUILD_INSTALL && ez.includes(Q.OAuth2Scopes.WEBHOOK_INCOMING),
                    te = e9 || ex === _.ApplicationIntegrationType.GUILD_INSTALL && (ez.includes(Q.OAuth2Scopes.BOT) || ez.includes(Q.OAuth2Scopes.APPLICATIONS_COMMANDS));
                l = (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(x.default, {
                        application: eR.application,
                        accountScopes: eX,
                        requestedScopes: ez,
                        integrationType: ex,
                        errors: e5,
                        isTrustedName: eT
                    }), te ? (0, s.jsx)(Y.default, {
                        error: (null !== (n = null !== (t = e5[Q.OAuth2Scopes.BOT]) && void 0 !== t ? t : e5[Q.OAuth2Scopes.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
                        selectedGuildId: eU,
                        onGuildChange: eb,
                        guilds: null != e8 ? e8 : [],
                        disabled: "" !== eU && null != eU && !0 === ec
                    }) : null, e9 ? (0, s.jsx)(X.default, {
                        error: (null !== (i = e5[Q.OAuth2Scopes.WEBHOOK_INCOMING]) && void 0 !== i ? i : [])[0],
                        selectedChannelId: eG,
                        selectedGuildId: eU,
                        onChannelChange: ew
                    }) : null]
                }), ez.includes(Q.OAuth2Scopes.BOT) && !c.equals(eQ, P.NONE) && (f = 2), e2.length > 1 && (T = 0), e3 = te && null == eF || e9 && null == eG;
                break;
            case 2:
                if (null == eR) return {
                    body: (0, s.jsx)(S.Spinner, {})
                };
                l = (0, s.jsx)(H.default, {
                    application: eR.application,
                    permissions: eQ,
                    deniedPermissions: eB,
                    onPermissionsChange: (e, t) => {
                        ek(n => e ? c.remove(n, t) : c.add(n, t))
                    },
                    guild: eF
                }), T = 1
        }
        if (e4 && null != eR) {
            let e = null === (r = eR.bot) || void 0 === r ? void 0 : r.approximate_guild_count;
            p = (0, s.jsx)(F.default, {
                embeddedActivityConfig: eJ,
                application: eR.application,
                scopes: ez,
                redirectUri: null !== (o = eR.redirect_uri) && void 0 !== o ? o : null,
                approximateGuildCount: void 0 !== e ? e : null,
                isEmbeddedFlow: ef
            })
        }
        return e6 && null != eR && null != eV && (C = (0, s.jsx)(j.default, {
            id: $,
            user: eV,
            application: eR.application,
            bot: eR.bot,
            accountScopes: eX,
            showLogout: eE || !1,
            location: eN,
            isTrustedName: eT
        })), e7 && (g = (0, s.jsxs)("div", {
            className: J.footer,
            children: [null != T ? (0, s.jsx)(I.Button, {
                look: I.Button.Looks.LINK,
                color: I.Button.Colors.PRIMARY,
                onClick: () => eL(T),
                children: Z.default.Messages.BACK
            }) : (0, s.jsx)(I.Button, {
                look: I.Button.Looks.LINK,
                color: I.Button.Colors.PRIMARY,
                onClick: () => e$(!1),
                children: Z.default.Messages.CANCEL
            }), 0 !== eg ? null != f ? (0, s.jsx)(I.Button, {
                onClick: () => eL(f),
                disabled: e3,
                children: Z.default.Messages.CONTINUE
            }) : (0, s.jsx)(I.Button, {
                onClick: () => e$(!0),
                disabled: e3,
                submitting: eM,
                children: Z.default.Messages.AUTHORIZE
            }) : null]
        })), {
            header: C,
            body: l,
            footer: g,
            nextStep: f,
            appDetails: p,
            sendAuthorize: e$
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
        return null != i && null != r && (U.default.isDiscordHostname(t) || n === window.location.host) && (i.startsWith("/api".concat(Q.Endpoints.OAUTH2_AUTHORIZE)) || i.startsWith(Q.Routes.OAUTH2_AUTHORIZE)) ? (0, b.parseOAuth2AuthorizeProps)(r) : null
    }(r = i || (i = {}))[r.SELECT_INSTALL_TYPE = 0] = "SELECT_INSTALL_TYPE", r[r.AUTHORIZE_SCOPES = 1] = "AUTHORIZE_SCOPES", r[r.AUTHORIZE_BOT_PERMISSIONS = 2] = "AUTHORIZE_BOT_PERMISSIONS"
}