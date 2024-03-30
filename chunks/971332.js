function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        OAuth2Authorize: function() {
            return ef
        },
        OAuth2AuthorizeModal: function() {
            return ec
        },
        OAuth2AuthorizePage: function() {
            return el
        },
        getOAuth2AuthorizeProps: function() {
            return em
        },
        openOAuth2Modal: function() {
            return ep
        },
        openOAuth2ModalWithCreateGuildModal: function() {
            return eE
        },
        useOAuth2AuthorizeForm: function() {
            return ed
        }
    });
    var r, o, i = n("470079"),
        a = n("803997"),
        u = n.n(a),
        s = n("613828"),
        l = n("729594"),
        c = n("571979"),
        f = n("22287"),
        d = n("898511"),
        _ = n("608036"),
        E = n("67381"),
        p = n("175071"),
        m = n("680799"),
        y = n("493174"),
        I = n("361729"),
        h = n("632142"),
        O = n("140817"),
        T = n("731790"),
        S = n("415253"),
        v = n("625864"),
        g = n("646140"),
        A = n("241536"),
        b = n("163291"),
        N = n("338140"),
        R = n("428009"),
        C = n("217014"),
        P = n("139890"),
        D = n("359017"),
        L = n("822853"),
        M = n("845804"),
        U = n("390897"),
        w = n("473677"),
        k = n("934387"),
        G = n("485250"),
        B = n("13363"),
        j = n("861163"),
        F = n("863728"),
        V = n("854782"),
        H = n("264461"),
        x = n("848366"),
        Y = n("794473"),
        W = n("96176"),
        K = n("367595"),
        z = n("17405"),
        X = n("281767"),
        q = n("997133"),
        Q = n("941504"),
        J = n("418089");

    function Z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function $(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function ee(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    $(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    $(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function et(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function en(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }

    function er(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                et(e, t, n[t])
            })
        }
        return e
    }

    function eo(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function ei(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) {
                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
        }
        return o
    }

    function ea(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return Z(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Z(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function eu(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }
    var es = "oauth2-authorize-header-id";

    function el() {
        var e = (0, s.useLocation)(),
            t = i.useMemo(function() {
                return (0, M.parseOAuth2AuthorizeProps)(e.search)
            }, [e.search]);
        return (0, T.default)(), i.createElement(W.OAuth2Page, null, i.createElement(ef, eo(er({}, t), {
            showLogout: !0
        })))
    }

    function ec(e) {
        var t = e.transitionState,
            n = ei(e, ["transitionState"]);
        return i.createElement(W.OAuth2Modal, {
            transitionState: t,
            "aria-labelledby": es
        }, i.createElement(ef, eo(er({}, n), {
            inApp: !0,
            scrollable: !0
        })))
    }

    function ef(e) {
        var t = e.scrollable,
            n = ei(e, ["scrollable"]),
            r = ed(n),
            o = r.header,
            a = r.body,
            s = r.footer,
            l = r.nextStep,
            c = r.appDetails,
            f = i.createElement(i.Fragment, null, i.createElement("div", {
                className: J.content
            }, o, a, null == l ? c : null), s);
        return t ? i.createElement("div", {
            className: u()(J.authorize, et({}, J.inApp, n.inApp))
        }, i.createElement(p.ScrollerThin, {
            orientation: "auto"
        }, f)) : i.createElement("div", {
            className: u()(J.authorize, et({}, J.inApp, n.inApp))
        }, i.createElement("div", null, f))
    }

    function ed(e) {
        var t = e.clientId,
            n = e.responseType,
            r = e.redirectUri,
            o = e.codeChallenge,
            a = e.codeChallengeMethod,
            u = e.state,
            E = e.prompt,
            p = e.authorization,
            T = e.scopes,
            g = e.permissions,
            A = e.guildId,
            W = e.channelId,
            Z = e.integrationType,
            $ = e.disableGuildSelect,
            et = e.showLogout,
            eo = e.cancelCompletesFlow,
            ei = void 0 === eo || eo,
            el = e.isTrustedName,
            ec = void 0 !== el && el,
            ef = e.isEmbeddedFlow,
            ed = e.inApp,
            e_ = void 0 !== ed && ed,
            eE = e.callback,
            ep = e.callbackWithoutPost,
            em = e.onClose,
            ey = (0, s.useLocation)(),
            eI = S.default.useExperiment({
                location: "auth web"
            }).userAppsTreatment === S.UserAppsTreatment.ALLOWED,
            eh = (0, d.useStateFromStores)([P.default], function() {
                return P.default.hasLoadedExperiments
            });
        i.useEffect(function() {
            C.default.isAuthenticated() && !eh && y.default.getExperiments()
        }, [eh]);
        var eO = ea(i.useState(null), 2),
            eT = eO[0],
            eS = eO[1],
            ev = ea(i.useState(null), 2),
            eg = ev[0],
            eA = ev[1],
            eb = ea(i.useState(null), 2),
            eN = eb[0],
            eR = eb[1],
            eC = ea(i.useState(!1), 2),
            eP = eC[0],
            eD = eC[1],
            eL = null == eT ? void 0 : eT.guilds,
            eM = ea(i.useState(null != A ? A : null), 2),
            eU = eM[0],
            ew = eM[1],
            ek = ea(i.useState(null != W ? W : null), 2),
            eG = ek[0],
            eB = ek[1],
            ej = ea(i.useState(D.NONE), 2),
            eF = ej[0],
            eV = ej[1],
            eH = i.useMemo(function() {
                return (null == eT ? void 0 : eT.user) != null ? new R.default(eT.user) : null
            }, [null == eT ? void 0 : eT.user]),
            ex = i.useMemo(function() {
                return null == eL ? void 0 : eL.find(function(e) {
                    return e.id === eU
                })
            }, [eL, eU]),
            eY = ea(i.useState(null), 2),
            eW = eY[0],
            eK = eY[1],
            ez = i.useMemo(function() {
                var e;
                return eI && null == p && null == Z && (null !== (e = null == T ? void 0 : T.length) && void 0 !== e ? e : 0) === 0 && null == r
            }, [p, eI, null == T ? void 0 : T.length, r, Z]),
            eX = ea(i.useState(null), 2),
            eq = eX[0],
            eQ = eX[1];
        i.useEffect(function() {
            ez && v.default.fetchApplication(t).then(function(e) {
                return eQ(N.default.createFromServer(e))
            })
        }, [t, ez]);
        var eJ = i.useMemo(function() {
                var e, t;
                return null == eW ? null : null == eq ? void 0 : null === (t = eq.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eW]) || void 0 === e ? void 0 : e.oauth2InstallParams
            }, [null == eq ? void 0 : eq.integrationTypesConfig, eW]),
            eZ = i.useMemo(function() {
                var e = ez ? null == eJ ? void 0 : eJ.scopes : T,
                    t = (0, M.filterScopes)(null != e ? e : []),
                    n = G.OrderedAccountScopes.filter(function(e) {
                        return t.includes(e)
                    });
                return {
                    requestedScopes: t,
                    accountScopes: n
                }
            }, [null == eJ ? void 0 : eJ.scopes, T, ez]),
            e$ = eZ.requestedScopes,
            e0 = eZ.accountScopes,
            e1 = i.useMemo(function() {
                var e, t = ez ? f.deserialize(null !== (e = null == eJ ? void 0 : eJ.permissions) && void 0 !== e ? e : 0) : g;
                return null != t ? t : D.NONE
            }, [null == eJ ? void 0 : eJ.permissions, g, ez]),
            e2 = (0, d.useStateFromStores)([h.default], function() {
                return h.default.getCurrentEmbeddedActivity()
            }),
            e3 = (0, d.useStateFromStoresObject)([I.default, h.default], function() {
                var e, t, n = I.default.getIsEnabled();
                return null != e2 && (e = h.default.getShelfActivities(e2.guildId).find(function(e) {
                    return e.application_id === e2.applicationId
                }), n && void 0 === e && (e = null === (t = I.default.getDeveloperShelfItems().find(function(e) {
                    return e.id === e2.applicationId
                })) || void 0 === t ? void 0 : t.embeddedActivityConfig), null != e) ? er({}, q.DEFAULT_EMBEDDED_ACTIVITY_CONFIG, e) : {}
            }, [e2]),
            e4 = Object.keys(e3).length > 0 ? e3 : null;
        var e6 = i.useCallback((tr = ee(function(e) {
                var i, s, d, _, E;
                return eu(this, function(p) {
                    switch (p.label) {
                        case 0:
                            if (null != ep) return ep(e), [2];
                            if (!e && !ei) return null != eE && (eE({
                                application: null == eT ? void 0 : eT.application,
                                guild: ex
                            }), null == em || em()), [2];
                            if (null == eW) return eR(Error("No integration type was selected.")), [2];
                            p.label = 1;
                        case 1:
                            return p.trys.push([1, 3, , 4]), eD(!0), [4, (0, U.authorize)({
                                authorize: e,
                                clientId: t,
                                scopes: e$,
                                responseType: n,
                                redirectUri: r,
                                codeChallenge: o,
                                codeChallengeMethod: a,
                                state: u,
                                integrationType: eW,
                                permissions: f.remove(e1, eF),
                                guildId: eW === c.ApplicationIntegrationType.GUILD_INSTALL && null != eU ? eU : void 0,
                                channelId: eW === c.ApplicationIntegrationType.GUILD_INSTALL && null != eG ? eG : void 0
                            })];
                        case 2:
                            return i = p.sent(), null != eE ? (eE({
                                application: null == eT ? void 0 : eT.application,
                                location: i.location,
                                guild: ex
                            }), null == em || em()) : null != i.location ? (d = (s = l.parse(i.location)).host, _ = s.path, L.default.isDiscordHostname(d) && _ === X.Routes.OAUTH2_AUTHORIZED ? (0, b.transitionTo)(X.Routes.OAUTH2_AUTHORIZED, {
                                state: {
                                    application: null == eT ? void 0 : eT.application,
                                    guild: ex
                                }
                            }) : window.location = i.location) : eD(!1), [3, 4];
                        case 3:
                            return (null == (E = p.sent().body) ? void 0 : E.message) != null && "" !== E.message ? eR(Error(E.message)) : eR(E), eA(1), eD(!1), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            }), function(e) {
                return tr.apply(this, arguments)
            }), [ep, ei, eE, null == eT ? void 0 : eT.application, ex, em, t, e$, n, r, o, a, u, e1, eF, eU, eW, eG]),
            e8 = i.useRef(!1),
            e7 = i.useCallback(ee(function() {
                var e, i, s, l, f;
                return eu(this, function(d) {
                    switch (d.label) {
                        case 0:
                            if (!C.default.isAuthenticated()) return (0, U.logoutWithRedirect)(ey), [2];
                            if (e8.current) return [2];
                            e8.current = !0, d.label = 1;
                        case 1:
                            if (d.trys.push([1, 5, 6, 7]), !(null != p)) return [3, 2];
                            return i = p, [3, 4];
                        case 2:
                            return [4, (0, U.fetchAuthorization)({
                                clientId: t,
                                scopes: e$,
                                responseType: n,
                                redirectUri: r,
                                codeChallenge: o,
                                codeChallengeMethod: a,
                                state: u,
                                userInstall: eW === c.ApplicationIntegrationType.USER_INSTALL
                            })];
                        case 3:
                            i = d.sent(), d.label = 4;
                        case 4:
                            return e = i, eS((0, w.convertOAuth2Authorization)(e)), E === B.OAuth2Prompts.NONE && e.authorized && e6(!0), (0, O.trackWithMetadata)(X.AnalyticEvents.OAUTH2_AUTHORIZE_VIEWED, {
                                application_id: e.application.id
                            }), [3, 7];
                        case 5:
                            if (l = (s = d.sent()).status, f = s.body, 401 === l) return (0, U.logoutWithRedirect)(ey), [2];
                            return eR(Error(null != f.message ? f.message : "".concat(Object.keys(f)[0], ": ").concat(Object.values(f)[0]))), [3, 7];
                        case 6:
                            return e8.current = !1, [7];
                        case 7:
                            return [2]
                    }
                })
            }), [ey, p, t, e$, n, r, o, a, u, eW, E, e6]),
            e9 = i.useMemo(function() {
                var e;
                if (null == eq || !ez) return [];
                return Object.entries(null !== (e = eq.integrationTypesConfig) && void 0 !== e ? e : {}).filter(function(e) {
                    var t = ea(e, 2);
                    return null != (t[0], t[1]).oauth2InstallParams
                }).map(function(e) {
                    var t = ea(e, 2),
                        n = t[0];
                    return t[1], Number(n)
                })
            }, [eq, ez]);
        if (i.useEffect(function() {
                if (null == eg && (!ez || null != eq) && eh) {
                    if (null != p) {
                        var e;
                        eK(null !== (e = p.integration_type) && void 0 !== e ? e : c.ApplicationIntegrationType.GUILD_INSTALL), eA(1)
                    } else e9.length > 1 ? eA(0) : (1 === e9.length ? eK(e9[0]) : eI && null != Z ? eK(Z) : eK(c.ApplicationIntegrationType.GUILD_INSTALL), eA(1))
                }
            }, [p, e9, eq, eI, ez, Z, eg, eh]), i.useEffect(function() {
                if (null != eW && null == eT && null == eN) {
                    eW === c.ApplicationIntegrationType.USER_INSTALL && (ew(null), eB(null));
                    var e = e$.filter(function(e) {
                        return !G.ValidScopes.includes(e)
                    });
                    0 === e$.length ? eR(Error("No scopes were provided.")) : e.length > 0 ? eR(Error("Invalid scope: ".concat(e[0]))) : (0, k.containsDisallowedPermission)(e1) ? eR(Error("Invalid permission(s) provided.")) : e7()
                }
            }, [e7, e$, e1, eW, eT, eN]), en(eN, Error)) return {
            body: i.createElement(K.OAuth2Error, {
                message: eN.message
            })
        };
        var e5 = !1,
            te = !0,
            tt = !0,
            tn = !0;
        switch (eg) {
            case null:
                return {
                    body: i.createElement(m.Spinner, null)
                };
            case 0:
                if (null == eq) return {
                    body: i.createElement(m.Spinner, null)
                };
                to = i.createElement(Y.default, {
                    inApp: e_,
                    application: eq,
                    onSelect: function(e) {
                        eK(e), eS(null), eA(1)
                    }
                }), te = !1, tt = !1, tn = e_;
                break;
            case 1:
                if (null == eT || null == eH || null == eW) return {
                    body: i.createElement(m.Spinner, null)
                };
                var tr, to, ti, ta, tu, ts, tl, tc = null == eN || en(eN, Error) ? {} : eN,
                    tf = null == eL ? void 0 : eL.sort(function(e, t) {
                        return e.name.toLowerCase().localeCompare(t.name.toLowerCase())
                    }),
                    td = eW === c.ApplicationIntegrationType.GUILD_INSTALL && e$.includes(X.OAuth2Scopes.WEBHOOK_INCOMING),
                    t_ = td || eW === c.ApplicationIntegrationType.GUILD_INSTALL && (e$.includes(X.OAuth2Scopes.BOT) || e$.includes(X.OAuth2Scopes.APPLICATIONS_COMMANDS));
                to = i.createElement(i.Fragment, null, i.createElement(F.default, {
                    application: eT.application,
                    accountScopes: e0,
                    requestedScopes: e$,
                    integrationType: eW,
                    errors: tc,
                    isTrustedName: ec
                }), t_ ? i.createElement(H.default, {
                    error: (null !== (ts = null !== (tu = tc[X.OAuth2Scopes.BOT]) && void 0 !== tu ? tu : tc[X.OAuth2Scopes.APPLICATIONS_COMMANDS]) && void 0 !== ts ? ts : [])[0],
                    selectedGuildId: eU,
                    onGuildChange: ew,
                    guilds: null != tf ? tf : [],
                    disabled: "" !== eU && null != eU && !0 === (void 0 !== $ && $)
                }) : null, td ? i.createElement(z.default, {
                    error: (null !== (tl = tc[X.OAuth2Scopes.WEBHOOK_INCOMING]) && void 0 !== tl ? tl : [])[0],
                    selectedChannelId: eG,
                    selectedGuildId: eU,
                    onChannelChange: eB
                }) : null), e$.includes(X.OAuth2Scopes.BOT) && !f.equals(e1, D.NONE) && (ta = 2), e9.length > 1 && (ti = 0), e5 = t_ && null == ex || td && null == eG;
                break;
            case 2:
                if (null == eT) return {
                    body: i.createElement(m.Spinner, null)
                };
                to = i.createElement(V.default, {
                    application: eT.application,
                    permissions: e1,
                    deniedPermissions: eF,
                    onPermissionsChange: function(e, t) {
                        eV(function(n) {
                            return e ? f.remove(n, t) : f.add(n, t)
                        })
                    },
                    guild: ex
                }), ti = 1
        }
        if (te && null != eT) {
            var tE, tp, tm, ty, tI, th = null === (ty = eT.bot) || void 0 === ty ? void 0 : ty.approximate_guild_count;
            tE = i.createElement(j.default, {
                embeddedActivityConfig: e4,
                application: eT.application,
                scopes: e$,
                redirectUri: null !== (tI = eT.redirect_uri) && void 0 !== tI ? tI : null,
                approximateGuildCount: void 0 !== th ? th : null,
                isEmbeddedFlow: void 0 !== ef && ef
            })
        }
        return tt && null != eT && null != eH && (tp = i.createElement(x.default, {
            id: es,
            user: eH,
            application: eT.application,
            bot: eT.bot,
            accountScopes: e0,
            showLogout: void 0 !== et && et || !1,
            location: ey,
            isTrustedName: ec
        })), tn && (tm = i.createElement("div", {
            className: J.footer
        }, null != ti ? i.createElement(_.Button, {
            look: _.Button.Looks.LINK,
            color: _.Button.Colors.PRIMARY,
            onClick: function() {
                return eA(ti)
            }
        }, Q.default.Messages.BACK) : i.createElement(_.Button, {
            look: _.Button.Looks.LINK,
            color: _.Button.Colors.PRIMARY,
            onClick: function() {
                return e6(!1)
            }
        }, Q.default.Messages.CANCEL), 0 !== eg ? null != ta ? i.createElement(_.Button, {
            onClick: function() {
                return eA(ta)
            },
            disabled: e5
        }, Q.default.Messages.CONTINUE) : i.createElement(_.Button, {
            onClick: function() {
                return e6(!0)
            },
            disabled: e5,
            submitting: eP
        }, Q.default.Messages.AUTHORIZE) : null)), {
            header: tp,
            body: to,
            footer: tm,
            nextStep: ta,
            appDetails: tE,
            sendAuthorize: e6
        }
    }

    function e_(e, t) {
        if (null != t.location) {
            if (!(null != e && e(t))) {
                var n, r = l.parse(t.location, !0),
                    o = r.host,
                    a = r.path,
                    u = r.query,
                    s = L.default.isDiscordHostname(o) || window.location.host === o;
                s && a === X.Routes.OAUTH2_AUTHORIZED ? (0, E.openModal)(function(e) {
                    return i.createElement(W.OAuth2Modal, eo(er({}, e), {
                        "aria-labelledby": es
                    }), i.createElement(K.OAuth2AuthorizedSuccess, {
                        guild: t.guild,
                        application: t.application,
                        onClose: e.onClose
                    }))
                }) : s && (null == a ? void 0 : a.startsWith(X.Routes.OAUTH2_ERROR)) ? (0, E.openModal)(function(e) {
                    var t = u.error_description || u.error || Q.default.Messages.OAUTH2_UNKNOWN_ERROR;
                    return Array.isArray(t) && (t = t[0]), i.createElement(W.OAuth2Modal, eo(er({}, e), {
                        "aria-labelledby": es
                    }), i.createElement(K.OAuth2Error, {
                        message: t,
                        onClose: e.onClose
                    }))
                }) : null === (n = window.open(t.location, "_blank")) || void 0 === n || n.focus()
            }
        }
    }

    function eE(e, t) {
        if ((0, A.isMidjourneyOnboardingFlow)("create-guild-and-oauth2-modal")) {
            g.default.openCreateGuildModal({
                onSuccess: function(n) {
                    return ep(eo(er({}, e), {
                        guildId: n
                    }), t)
                }
            });
            return
        }
        ep(e, t)
    }

    function ep(e, t) {
        (0, E.openModal)(function(t) {
            return i.createElement(ec, eo(er({}, t, e), {
                cancelCompletesFlow: !1,
                callback: e_.bind(null, e.callback)
            }))
        }, {
            onCloseCallback: t
        })
    }

    function em(e) {
        var t = l.parse(e),
            n = t.hostname,
            r = t.host,
            o = t.path,
            i = t.query;
        return null != o && null != i && (L.default.isDiscordHostname(void 0 === n ? "" : n) || r === window.location.host) && (o.startsWith("/api".concat(X.Endpoints.OAUTH2_AUTHORIZE)) || o.startsWith(X.Routes.OAUTH2_AUTHORIZE)) ? (0, M.parseOAuth2AuthorizeProps)(i) : null
    }(r = o || (o = {}))[r.SELECT_INSTALL_TYPE = 0] = "SELECT_INSTALL_TYPE", r[r.AUTHORIZE_SCOPES = 1] = "AUTHORIZE_SCOPES", r[r.AUTHORIZE_BOT_PERMISSIONS = 2] = "AUTHORIZE_BOT_PERMISSIONS"
}