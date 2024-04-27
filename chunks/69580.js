function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        OAuth2Authorize: function() {
            return ee
        },
        OAuth2AuthorizeModal: function() {
            return $
        },
        OAuth2AuthorizePage: function() {
            return J
        },
        getOAuth2AuthorizeProps: function() {
            return es
        },
        openOAuth2Modal: function() {
            return er
        },
        openOAuth2ModalWithCreateGuildModal: function() {
            return ei
        },
        useOAuth2AuthorizeForm: function() {
            return et
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
        A = n("367907"),
        m = n("702493"),
        N = n("420582"),
        p = n("728345"),
        O = n("979200"),
        R = n("560067"),
        C = n("341298"),
        g = n("703656"),
        L = n("973616"),
        D = n("598077"),
        v = n("314897"),
        M = n("828695"),
        y = n("700785"),
        P = n("591759"),
        U = n("807675"),
        b = n("489863"),
        G = n("228763"),
        w = n("422559"),
        B = n("713938"),
        k = n("166148"),
        V = n("807989"),
        x = n("260430"),
        F = n("668185"),
        H = n("407546"),
        Y = n("41259"),
        j = n("28752"),
        W = n("787025"),
        K = n("397394"),
        z = n("574384"),
        X = n("981631"),
        Q = n("689938"),
        q = n("876445");
    let Z = "oauth2-authorize-header-id";

    function J() {
        let e = (0, u.useLocation)(),
            t = a.useMemo(() => (0, U.parseOAuth2AuthorizeProps)(e.search), [e.search]);
        return (0, m.default)(), (0, s.jsx)(W.OAuth2Page, {
            children: (0, s.jsx)(ee, {
                ...t,
                showLogout: !0
            })
        })
    }

    function $(e) {
        let {
            transitionState: t,
            ...n
        } = e;
        return (0, s.jsx)(W.OAuth2Modal, {
            transitionState: t,
            "aria-labelledby": Z,
            children: (0, s.jsx)(ee, {
                ...n,
                inApp: !0,
                scrollable: !0
            })
        })
    }

    function ee(e) {
        let {
            scrollable: t,
            ...n
        } = e, {
            header: i,
            body: r,
            footer: a,
            nextStep: o,
            appDetails: u
        } = et(n), d = (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsxs)("div", {
                className: q.content,
                children: [i, r, null == o ? u : null]
            }), a]
        });
        return t ? (0, s.jsx)("div", {
            className: l()(q.authorize, {
                [q.inApp]: n.inApp
            }),
            children: (0, s.jsx)(f.ScrollerThin, {
                orientation: "auto",
                children: d
            })
        }) : (0, s.jsx)("div", {
            className: l()(q.authorize, {
                [q.inApp]: n.inApp
            }),
            children: (0, s.jsx)("div", {
                children: d
            })
        })
    }

    function et(e) {
        var t, n, i, r, o;
        let l, T, f, m, R, C, {
                clientId: W,
                responseType: J,
                redirectUri: $,
                codeChallenge: ee,
                codeChallengeMethod: et,
                state: en,
                nonce: ei,
                prompt: er,
                authorizations: es,
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
                onClose: eA,
                disclosures: em
            } = e,
            eN = null != ed ? null == es ? void 0 : es.get(ed) : void 0,
            ep = (0, u.useLocation)(),
            eO = N.default.useExperiment({
                location: "auth web"
            }).userAppsTreatment === N.UserAppsTreatment.ALLOWED,
            eR = (0, E.useStateFromStores)([M.default], () => M.default.hasLoadedExperiments);
        a.useEffect(() => {
            v.default.isAuthenticated() && !eR && h.default.getExperiments()
        }, [eR]);
        let [eC, eg] = a.useState(null), [eL, eD] = a.useState(null), [ev, eM] = a.useState(null), [ey, eP] = a.useState(!1), eU = null == eC ? void 0 : eC.guilds, [eb, eG] = a.useState(null != el ? el : null), [ew, eB] = a.useState(null != eu ? eu : null), [ek, eV] = a.useState(y.NONE), ex = a.useMemo(() => (null == eC ? void 0 : eC.user) != null ? new D.default(eC.user) : null, [null == eC ? void 0 : eC.user]), eF = a.useMemo(() => null == eU ? void 0 : eU.find(e => e.id === eb), [eU, eb]), [eH, eY] = a.useState(null), ej = a.useMemo(() => {
            var e;
            return eO && null == eN && null == ed && (null !== (e = null == ea ? void 0 : ea.length) && void 0 !== e ? e : 0) === 0 && null == $
        }, [eN, eO, null == ea ? void 0 : ea.length, $, ed]), [eW, eK] = a.useState(null);
        a.useEffect(() => {
            ej && p.default.fetchApplication(W).then(e => eK(L.default.createFromServer(e)))
        }, [W, ej]);
        let ez = a.useMemo(() => {
                var e, t;
                return null == eH ? null : null == eW ? void 0 : null === (t = eW.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eH]) || void 0 === e ? void 0 : e.oauth2InstallParams
            }, [null == eW ? void 0 : eW.integrationTypesConfig, eH]),
            {
                requestedScopes: eX,
                accountScopes: eQ
            } = a.useMemo(() => {
                let e = ej ? null == ez ? void 0 : ez.scopes : ea,
                    t = (0, U.filterScopes)(null != e ? e : []),
                    n = B.OrderedAccountScopes.filter(e => t.includes(e));
                return {
                    requestedScopes: t,
                    accountScopes: n
                }
            }, [null == ez ? void 0 : ez.scopes, ea, ej]),
            eq = a.useMemo(() => {
                var e;
                let t = ej ? c.deserialize(null !== (e = null == ez ? void 0 : ez.permissions) && void 0 !== e ? e : 0) : eo;
                return null != t ? t : y.NONE
            }, [null == ez ? void 0 : ez.permissions, eo, ej]),
            eZ = a.useRef(!1),
            [eJ, e$] = a.useState(null != em ? em : []),
            [e0, e1] = a.useState(null != em && em.length > 0);
        a.useEffect(() => {
            if (eZ.current) return;
            let e = async () => {
                eZ.current = !0;
                try {
                    let {
                        disclosures: e,
                        allAcked: t
                    } = await (0, O.getDisclosures)(W);
                    e1(!t), e$(e)
                } catch (n) {
                    let {
                        status: e,
                        body: t
                    } = n;
                    if (401 === e) {
                        (0, b.logoutWithRedirect)(ep);
                        return
                    }
                    eM(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
                } finally {
                    eZ.current = !1
                }
            };
            if (null == em) {
                if (!v.default.isAuthenticated()) {
                    (0, b.logoutWithRedirect)(ep);
                    return
                }
                e()
            }
        }, [W, ep, em, e$, eM, e1, eD]);
        let e2 = a.useCallback(async e => {
                if (null != eh) {
                    eh(e);
                    return
                }
                if (!e && !eE) {
                    null != eS && (eS({
                        application: null == eC ? void 0 : eC.application,
                        guild: eF
                    }), null == eA || eA());
                    return
                }
                if (null == eH) {
                    eM(Error("No integration type was selected."));
                    return
                }
                try {
                    eP(!0);
                    let t = await (0, b.authorize)({
                        authorize: e,
                        clientId: W,
                        scopes: eX,
                        responseType: J,
                        redirectUri: $,
                        codeChallenge: ee,
                        codeChallengeMethod: et,
                        state: en,
                        nonce: ei,
                        integrationType: eH,
                        permissions: c.remove(eq, ek),
                        guildId: eH === _.ApplicationIntegrationType.GUILD_INSTALL && null != eb ? eb : void 0,
                        channelId: eH === _.ApplicationIntegrationType.GUILD_INSTALL && null != ew ? ew : void 0
                    });
                    if (e && await (0, O.ackDisclosures)(W, eJ), null != eS) eS({
                        application: null == eC ? void 0 : eC.application,
                        location: t.location,
                        guild: eF
                    }), null == eA || eA();
                    else if (null != t.location) {
                        let {
                            host: e,
                            path: n
                        } = d.parse(t.location);
                        P.default.isDiscordHostname(e) && n === X.Routes.OAUTH2_AUTHORIZED ? (0, g.transitionTo)(X.Routes.OAUTH2_AUTHORIZED, {
                            state: {
                                application: null == eC ? void 0 : eC.application,
                                guild: eF
                            }
                        }) : window.location = t.location
                    } else eP(!1)
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && "" !== e.message ? eM(Error(e.message)) : eM(e), eD(1), eP(!1)
                }
            }, [eh, eE, eS, null == eC ? void 0 : eC.application, eF, eA, W, eX, J, $, ee, et, en, ei, eq, ek, eb, eH, ew, eJ]),
            e3 = a.useRef(!1),
            e4 = a.useCallback(async () => {
                if (!v.default.isAuthenticated()) {
                    (0, b.logoutWithRedirect)(ep);
                    return
                }
                if (!eZ.current) {
                    if (!e3.current) {
                        e3.current = !0;
                        try {
                            let e = null != eN ? eN : await (0, b.fetchAuthorization)({
                                clientId: W,
                                scopes: eX,
                                responseType: J,
                                redirectUri: $,
                                codeChallenge: ee,
                                codeChallengeMethod: et,
                                state: en,
                                nonce: ei,
                                integrationType: null != eH ? eH : void 0
                            });
                            eg((0, G.convertOAuth2Authorization)(e)), er === k.OAuth2Prompts.NONE && e.authorized && !e0 && e2(!0), (0, A.trackWithMetadata)(X.AnalyticEvents.OAUTH2_AUTHORIZE_VIEWED, {
                                application_id: e.application.id
                            })
                        } catch (n) {
                            let {
                                status: e,
                                body: t
                            } = n;
                            if (401 === e) {
                                (0, b.logoutWithRedirect)(ep);
                                return
                            }
                            eM(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
                        } finally {
                            e3.current = !1
                        }
                    }
                }
            }, [ep, eN, W, eX, J, $, ee, et, en, ei, eH, er, e2, e0]),
            e6 = a.useMemo(() => {
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
                    if (null != eN) {
                        var e;
                        eY(null !== (e = eN.integration_type) && void 0 !== e ? e : _.ApplicationIntegrationType.GUILD_INSTALL), eD(1)
                    } else e6.length > 1 ? eD(0) : (1 === e6.length ? eY(e6[0]) : null != ed ? eY(ed) : eY(_.ApplicationIntegrationType.GUILD_INSTALL), eD(1))
                }
            }, [eN, e6, eW, eO, ej, ed, eL, eR]), a.useEffect(() => {
                if (null == eH || null != eC || null != ev) return;
                eH === _.ApplicationIntegrationType.USER_INSTALL && (eG(null), eB(null));
                let e = eX.filter(e => !B.ValidScopes.includes(e));
                0 === eX.length ? eM(Error("No scopes were provided.")) : e.length > 0 ? eM(Error("Invalid scope: ".concat(e[0]))) : (0, w.containsDisallowedPermission)(eq) ? eM(Error("Invalid permission(s) provided.")) : e4()
            }, [e0, e4, eX, eq, eH, eC, ev]), ev instanceof Error) return {
            body: (0, s.jsx)(K.OAuth2Error, {
                message: ev.message
            })
        };
        let e7 = !1,
            e5 = !0,
            e8 = !0,
            e9 = !0;
        switch (eL) {
            case null:
                return {
                    body: (0, s.jsx)(S.Spinner, {})
                };
            case 0:
                if (null == eW) return {
                    body: (0, s.jsx)(S.Spinner, {})
                };
                l = (0, s.jsx)(j.default, {
                    inApp: ef,
                    application: eW,
                    onSelect: e => {
                        eY(e), eg(null), eD(1)
                    }
                }), e5 = !1, e8 = !1, e9 = ef;
                break;
            case 1:
                if (null == eC || null == ex || null == eH) return {
                    body: (0, s.jsx)(S.Spinner, {})
                };
                let te = null == ev || ev instanceof Error ? {} : ev,
                    tt = null == eU ? void 0 : eU.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                    tn = eH === _.ApplicationIntegrationType.GUILD_INSTALL && eX.includes(X.OAuth2Scopes.WEBHOOK_INCOMING),
                    ti = tn || eH === _.ApplicationIntegrationType.GUILD_INSTALL && (eX.includes(X.OAuth2Scopes.BOT) || eX.includes(X.OAuth2Scopes.APPLICATIONS_COMMANDS));
                l = (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(x.default, {
                        application: eC.application,
                        accountScopes: eQ,
                        requestedScopes: eX,
                        integrationType: eH,
                        errors: te,
                        isTrustedName: eI
                    }), ti ? (0, s.jsx)(H.default, {
                        error: (null !== (n = null !== (t = te[X.OAuth2Scopes.BOT]) && void 0 !== t ? t : te[X.OAuth2Scopes.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
                        selectedGuildId: eb,
                        onGuildChange: eG,
                        guilds: null != tt ? tt : [],
                        disabled: "" !== eb && null != eb && !0 === e_
                    }) : null, tn ? (0, s.jsx)(z.default, {
                        error: (null !== (i = te[X.OAuth2Scopes.WEBHOOK_INCOMING]) && void 0 !== i ? i : [])[0],
                        selectedChannelId: ew,
                        selectedGuildId: eb,
                        onChannelChange: eB
                    }) : null]
                }), eX.includes(X.OAuth2Scopes.BOT) && !c.equals(eq, y.NONE) && (f = 2), e6.length > 1 && (T = 0), e7 = ti && null == eF || tn && null == ew;
                break;
            case 2:
                if (null == eC) return {
                    body: (0, s.jsx)(S.Spinner, {})
                };
                l = (0, s.jsx)(F.default, {
                    application: eC.application,
                    permissions: eq,
                    deniedPermissions: ek,
                    onPermissionsChange: (e, t) => {
                        eV(n => e ? c.remove(n, t) : c.add(n, t))
                    },
                    guild: eF
                }), T = 1
        }
        if (e5 && null != eC) {
            let e = null === (r = eC.bot) || void 0 === r ? void 0 : r.approximate_guild_count;
            m = (0, s.jsx)(V.default, {
                application: eC.application,
                scopes: eX,
                disclosures: eJ,
                redirectUri: null !== (o = eC.redirect_uri) && void 0 !== o ? o : null,
                approximateGuildCount: void 0 !== e ? e : null,
                isEmbeddedFlow: eT
            })
        }
        return e8 && null != eC && null != ex && (R = (0, s.jsx)(Y.default, {
            id: Z,
            user: ex,
            application: eC.application,
            bot: eC.bot,
            accountScopes: eQ,
            showLogout: ec || !1,
            location: ep,
            isTrustedName: eI
        })), e9 && (C = (0, s.jsxs)("div", {
            className: q.footer,
            children: [null != T ? (0, s.jsx)(I.Button, {
                look: I.Button.Looks.LINK,
                color: I.Button.Colors.PRIMARY,
                onClick: () => eD(T),
                children: Q.default.Messages.BACK
            }) : (0, s.jsx)(I.Button, {
                look: I.Button.Looks.LINK,
                color: I.Button.Colors.PRIMARY,
                onClick: () => e2(!1),
                children: Q.default.Messages.CANCEL
            }), 0 !== eL ? null != f ? (0, s.jsx)(I.Button, {
                onClick: () => eD(f),
                disabled: e7,
                children: Q.default.Messages.CONTINUE
            }) : (0, s.jsx)(I.Button, {
                onClick: () => e2(!0),
                disabled: e7,
                submitting: ey,
                children: Q.default.Messages.AUTHORIZE
            }) : null]
        })), {
            header: R,
            body: l,
            footer: C,
            nextStep: f,
            appDetails: m,
            sendAuthorize: e2
        }
    }

    function en(e, t) {
        if (null == t.location || null != e && e(t)) return;
        let {
            host: n,
            path: i,
            query: r
        } = d.parse(t.location, !0), a = P.default.isDiscordHostname(n) || window.location.host === n;
        if (a && i === X.Routes.OAUTH2_AUTHORIZED)(0, T.openModal)(e => (0, s.jsx)(W.OAuth2Modal, {
            ...e,
            "aria-labelledby": Z,
            children: (0, s.jsx)(K.OAuth2AuthorizedSuccess, {
                guild: t.guild,
                application: t.application,
                onClose: e.onClose
            })
        }));
        else if (a && (null == i ? void 0 : i.startsWith(X.Routes.OAUTH2_ERROR)))(0, T.openModal)(e => {
            let t = r.error_description || r.error || Q.default.Messages.OAUTH2_UNKNOWN_ERROR;
            return Array.isArray(t) && (t = t[0]), (0, s.jsx)(W.OAuth2Modal, {
                ...e,
                "aria-labelledby": Z,
                children: (0, s.jsx)(K.OAuth2Error, {
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

    function ei(e, t) {
        if ((0, C.isMidjourneyOnboardingFlow)("create-guild-and-oauth2-modal")) {
            R.default.openCreateGuildModal({
                onSuccess: n => er({
                    ...e,
                    guildId: n
                }, t)
            });
            return
        }
        er(e, t)
    }

    function er(e, t) {
        (0, T.openModal)(t => (0, s.jsx)($, {
            ...t,
            ...e,
            cancelCompletesFlow: !1,
            callback: en.bind(null, e.callback)
        }), {
            onCloseCallback: t
        })
    }

    function es(e) {
        let {
            hostname: t = "",
            host: n,
            path: i,
            query: r
        } = d.parse(e);
        return null != i && null != r && (P.default.isDiscordHostname(t) || n === window.location.host) && (i.startsWith("/api".concat(X.Endpoints.OAUTH2_AUTHORIZE)) || i.startsWith(X.Routes.OAUTH2_AUTHORIZE)) ? (0, U.parseOAuth2AuthorizeProps)(r) : null
    }(r = i || (i = {}))[r.SELECT_INSTALL_TYPE = 0] = "SELECT_INSTALL_TYPE", r[r.AUTHORIZE_SCOPES = 1] = "AUTHORIZE_SCOPES", r[r.AUTHORIZE_BOT_PERMISSIONS = 2] = "AUTHORIZE_BOT_PERMISSIONS"
}