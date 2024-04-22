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
        k = n("713938"),
        B = n("166148"),
        F = n("807989"),
        V = n("260430"),
        x = n("668185"),
        H = n("407546"),
        Y = n("41259"),
        j = n("28752"),
        W = n("787025"),
        K = n("397394"),
        z = n("574384"),
        X = n("981631"),
        Q = n("689938"),
        q = n("418089");
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
                onClose: eA,
                disclosures: em
            } = e,
            eN = (0, u.useLocation)(),
            ep = N.default.useExperiment({
                location: "auth web"
            }).userAppsTreatment === N.UserAppsTreatment.ALLOWED,
            eO = (0, E.useStateFromStores)([M.default], () => M.default.hasLoadedExperiments);
        a.useEffect(() => {
            v.default.isAuthenticated() && !eO && h.default.getExperiments()
        }, [eO]);
        let [eR, eC] = a.useState(null), [eg, eL] = a.useState(null), [eD, ev] = a.useState(null), [eM, ey] = a.useState(!1), eP = null == eR ? void 0 : eR.guilds, [eU, eb] = a.useState(null != el ? el : null), [eG, ew] = a.useState(null != eu ? eu : null), [ek, eB] = a.useState(y.NONE), eF = a.useMemo(() => (null == eR ? void 0 : eR.user) != null ? new D.default(eR.user) : null, [null == eR ? void 0 : eR.user]), eV = a.useMemo(() => null == eP ? void 0 : eP.find(e => e.id === eU), [eP, eU]), [ex, eH] = a.useState(null), eY = a.useMemo(() => {
            var e;
            return ep && null == es && null == ed && (null !== (e = null == ea ? void 0 : ea.length) && void 0 !== e ? e : 0) === 0 && null == $
        }, [es, ep, null == ea ? void 0 : ea.length, $, ed]), [ej, eW] = a.useState(null);
        a.useEffect(() => {
            eY && p.default.fetchApplication(W).then(e => eW(L.default.createFromServer(e)))
        }, [W, eY]);
        let eK = a.useMemo(() => {
                var e, t;
                return null == ex ? null : null == ej ? void 0 : null === (t = ej.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[ex]) || void 0 === e ? void 0 : e.oauth2InstallParams
            }, [null == ej ? void 0 : ej.integrationTypesConfig, ex]),
            {
                requestedScopes: ez,
                accountScopes: eX
            } = a.useMemo(() => {
                let e = eY ? null == eK ? void 0 : eK.scopes : ea,
                    t = (0, U.filterScopes)(null != e ? e : []),
                    n = k.OrderedAccountScopes.filter(e => t.includes(e));
                return {
                    requestedScopes: t,
                    accountScopes: n
                }
            }, [null == eK ? void 0 : eK.scopes, ea, eY]),
            eQ = a.useMemo(() => {
                var e;
                let t = eY ? c.deserialize(null !== (e = null == eK ? void 0 : eK.permissions) && void 0 !== e ? e : 0) : eo;
                return null != t ? t : y.NONE
            }, [null == eK ? void 0 : eK.permissions, eo, eY]),
            eq = a.useRef(!1),
            [eZ, eJ] = a.useState(null != em ? em : []),
            [e$, e0] = a.useState(null != em && em.length > 0);
        a.useEffect(() => {
            if (eq.current) return;
            let e = async () => {
                eq.current = !0;
                try {
                    let {
                        disclosures: e,
                        allAcked: t
                    } = await (0, O.getDisclosures)(W);
                    e0(!t), eJ(e)
                } catch (t) {
                    let {
                        body: e
                    } = t;
                    ev(Error(null != e.message ? e.message : "".concat(Object.keys(e)[0], ": ").concat(Object.values(e)[0])))
                } finally {
                    eq.current = !1
                }
            };
            null == em && e()
        }, [W, em, eJ, e0, ev, eL]);
        let e1 = a.useCallback(async e => {
                if (null != eh) {
                    eh(e);
                    return
                }
                if (!e && !eE) {
                    null != eS && (eS({
                        application: null == eR ? void 0 : eR.application,
                        guild: eV
                    }), null == eA || eA());
                    return
                }
                if (null == ex) {
                    ev(Error("No integration type was selected."));
                    return
                }
                try {
                    ey(!0);
                    let t = await (0, b.authorize)({
                        authorize: e,
                        clientId: W,
                        scopes: ez,
                        responseType: J,
                        redirectUri: $,
                        codeChallenge: ee,
                        codeChallengeMethod: et,
                        state: en,
                        nonce: ei,
                        integrationType: ex,
                        permissions: c.remove(eQ, ek),
                        guildId: ex === _.ApplicationIntegrationType.GUILD_INSTALL && null != eU ? eU : void 0,
                        channelId: ex === _.ApplicationIntegrationType.GUILD_INSTALL && null != eG ? eG : void 0
                    });
                    if (e && await (0, O.ackDisclosures)(W, eZ), null != eS) eS({
                        application: null == eR ? void 0 : eR.application,
                        location: t.location,
                        guild: eV
                    }), null == eA || eA();
                    else if (null != t.location) {
                        let {
                            host: e,
                            path: n
                        } = d.parse(t.location);
                        P.default.isDiscordHostname(e) && n === X.Routes.OAUTH2_AUTHORIZED ? (0, g.transitionTo)(X.Routes.OAUTH2_AUTHORIZED, {
                            state: {
                                application: null == eR ? void 0 : eR.application,
                                guild: eV
                            }
                        }) : window.location = t.location
                    } else ey(!1)
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && "" !== e.message ? ev(Error(e.message)) : ev(e), eL(1), ey(!1)
                }
            }, [eh, eE, eS, null == eR ? void 0 : eR.application, eV, eA, W, ez, J, $, ee, et, en, ei, eQ, ek, eU, ex, eG, eZ]),
            e2 = a.useRef(!1),
            e3 = a.useCallback(async () => {
                if (!v.default.isAuthenticated()) {
                    (0, b.logoutWithRedirect)(eN);
                    return
                }
                if (!eq.current) {
                    if (!e2.current) {
                        e2.current = !0;
                        try {
                            let e = null != es ? es : await (0, b.fetchAuthorization)({
                                clientId: W,
                                scopes: ez,
                                responseType: J,
                                redirectUri: $,
                                codeChallenge: ee,
                                codeChallengeMethod: et,
                                state: en,
                                nonce: ei,
                                userInstall: ex === _.ApplicationIntegrationType.USER_INSTALL
                            });
                            eC((0, G.convertOAuth2Authorization)(e)), er === B.OAuth2Prompts.NONE && e.authorized && !e$ && e1(!0), (0, A.trackWithMetadata)(X.AnalyticEvents.OAUTH2_AUTHORIZE_VIEWED, {
                                application_id: e.application.id
                            })
                        } catch (n) {
                            let {
                                status: e,
                                body: t
                            } = n;
                            if (401 === e) {
                                (0, b.logoutWithRedirect)(eN);
                                return
                            }
                            ev(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
                        } finally {
                            e2.current = !1
                        }
                    }
                }
            }, [eN, es, W, ez, J, $, ee, et, en, ei, ex, er, e1, e$]),
            e4 = a.useMemo(() => {
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
                    if (null != es) {
                        var e;
                        eH(null !== (e = es.integration_type) && void 0 !== e ? e : _.ApplicationIntegrationType.GUILD_INSTALL), eL(1)
                    } else e4.length > 1 ? eL(0) : (1 === e4.length ? eH(e4[0]) : ep && null != ed ? eH(ed) : eH(_.ApplicationIntegrationType.GUILD_INSTALL), eL(1))
                }
            }, [es, e4, ej, ep, eY, ed, eg, eO]), a.useEffect(() => {
                if (null == ex || null != eR || null != eD) return;
                ex === _.ApplicationIntegrationType.USER_INSTALL && (eb(null), ew(null));
                let e = ez.filter(e => !k.ValidScopes.includes(e));
                0 === ez.length ? ev(Error("No scopes were provided.")) : e.length > 0 ? ev(Error("Invalid scope: ".concat(e[0]))) : (0, w.containsDisallowedPermission)(eQ) ? ev(Error("Invalid permission(s) provided.")) : e3()
            }, [e$, e3, ez, eQ, ex, eR, eD]), eD instanceof Error) return {
            body: (0, s.jsx)(K.OAuth2Error, {
                message: eD.message
            })
        };
        let e6 = !1,
            e7 = !0,
            e5 = !0,
            e8 = !0;
        switch (eg) {
            case null:
                return {
                    body: (0, s.jsx)(S.Spinner, {})
                };
            case 0:
                if (null == ej) return {
                    body: (0, s.jsx)(S.Spinner, {})
                };
                l = (0, s.jsx)(j.default, {
                    inApp: ef,
                    application: ej,
                    onSelect: e => {
                        eH(e), eC(null), eL(1)
                    }
                }), e7 = !1, e5 = !1, e8 = ef;
                break;
            case 1:
                if (null == eR || null == eF || null == ex) return {
                    body: (0, s.jsx)(S.Spinner, {})
                };
                let e9 = null == eD || eD instanceof Error ? {} : eD,
                    te = null == eP ? void 0 : eP.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                    tt = ex === _.ApplicationIntegrationType.GUILD_INSTALL && ez.includes(X.OAuth2Scopes.WEBHOOK_INCOMING),
                    tn = tt || ex === _.ApplicationIntegrationType.GUILD_INSTALL && (ez.includes(X.OAuth2Scopes.BOT) || ez.includes(X.OAuth2Scopes.APPLICATIONS_COMMANDS));
                l = (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(V.default, {
                        application: eR.application,
                        accountScopes: eX,
                        requestedScopes: ez,
                        integrationType: ex,
                        errors: e9,
                        isTrustedName: eI
                    }), tn ? (0, s.jsx)(H.default, {
                        error: (null !== (n = null !== (t = e9[X.OAuth2Scopes.BOT]) && void 0 !== t ? t : e9[X.OAuth2Scopes.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
                        selectedGuildId: eU,
                        onGuildChange: eb,
                        guilds: null != te ? te : [],
                        disabled: "" !== eU && null != eU && !0 === e_
                    }) : null, tt ? (0, s.jsx)(z.default, {
                        error: (null !== (i = e9[X.OAuth2Scopes.WEBHOOK_INCOMING]) && void 0 !== i ? i : [])[0],
                        selectedChannelId: eG,
                        selectedGuildId: eU,
                        onChannelChange: ew
                    }) : null]
                }), ez.includes(X.OAuth2Scopes.BOT) && !c.equals(eQ, y.NONE) && (f = 2), e4.length > 1 && (T = 0), e6 = tn && null == eV || tt && null == eG;
                break;
            case 2:
                if (null == eR) return {
                    body: (0, s.jsx)(S.Spinner, {})
                };
                l = (0, s.jsx)(x.default, {
                    application: eR.application,
                    permissions: eQ,
                    deniedPermissions: ek,
                    onPermissionsChange: (e, t) => {
                        eB(n => e ? c.remove(n, t) : c.add(n, t))
                    },
                    guild: eV
                }), T = 1
        }
        if (e7 && null != eR) {
            let e = null === (r = eR.bot) || void 0 === r ? void 0 : r.approximate_guild_count;
            m = (0, s.jsx)(F.default, {
                application: eR.application,
                scopes: ez,
                disclosures: eZ,
                redirectUri: null !== (o = eR.redirect_uri) && void 0 !== o ? o : null,
                approximateGuildCount: void 0 !== e ? e : null,
                isEmbeddedFlow: eT
            })
        }
        return e5 && null != eR && null != eF && (R = (0, s.jsx)(Y.default, {
            id: Z,
            user: eF,
            application: eR.application,
            bot: eR.bot,
            accountScopes: eX,
            showLogout: ec || !1,
            location: eN,
            isTrustedName: eI
        })), e8 && (C = (0, s.jsxs)("div", {
            className: q.footer,
            children: [null != T ? (0, s.jsx)(I.Button, {
                look: I.Button.Looks.LINK,
                color: I.Button.Colors.PRIMARY,
                onClick: () => eL(T),
                children: Q.default.Messages.BACK
            }) : (0, s.jsx)(I.Button, {
                look: I.Button.Looks.LINK,
                color: I.Button.Colors.PRIMARY,
                onClick: () => e1(!1),
                children: Q.default.Messages.CANCEL
            }), 0 !== eg ? null != f ? (0, s.jsx)(I.Button, {
                onClick: () => eL(f),
                disabled: e6,
                children: Q.default.Messages.CONTINUE
            }) : (0, s.jsx)(I.Button, {
                onClick: () => e1(!0),
                disabled: e6,
                submitting: eM,
                children: Q.default.Messages.AUTHORIZE
            }) : null]
        })), {
            header: R,
            body: l,
            footer: C,
            nextStep: f,
            appDetails: m,
            sendAuthorize: e1
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