function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return en
        }
    }), E("222007"), E("424973");
    var t = E("37983"),
        o = E("884691"),
        n = E("414456"),
        r = E.n(n),
        a = E("965955"),
        i = E("803182"),
        I = E("90915"),
        s = E("394846"),
        T = E("446674"),
        S = E("151426"),
        N = E("143435"),
        O = E("77078"),
        A = E("913144"),
        R = E("916580"),
        l = E("988738"),
        u = E("521735"),
        L = E("572544"),
        C = E("244201"),
        D = E("206230"),
        c = E("320679"),
        d = E("428958"),
        U = E("154403"),
        M = E("805199"),
        h = E("529531"),
        P = E("44164"),
        m = E("714657"),
        G = E("262194"),
        p = E("36773"),
        g = E("374036"),
        y = E("384997"),
        B = E("881889"),
        f = E("234819"),
        H = E("182033"),
        v = E("928741"),
        b = E("161778"),
        w = E("778588"),
        F = E("697218"),
        Y = E("471671"),
        V = E("791106"),
        k = E("542489"),
        W = E("983782"),
        K = E("708169"),
        x = E("668596"),
        j = E("587974"),
        X = E("773336"),
        Q = E("719923"),
        J = E("269936"),
        q = E("302537"),
        z = E("967889"),
        $ = E("102999"),
        Z = E("160139"),
        ee = E("49111"),
        e_ = E("994428"),
        eE = E("414482");
    E("551184"), E.el("573055").then(E.bind(E, "573055")).then(e => {
        X.isPlatformEmbedded ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1) : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1)
    }), (0, N.setDesignConfig)({
        getDefaultLinkInterceptor: L.default
    }), (0, J.makeLazy)({
        createPromise: () => E.el("737511").then(E.bind(E, "737511")),
        webpackId: "737511"
    }), (0, J.makeLazy)({
        createPromise: () => E.el("424797").then(E.bind(E, "424797")),
        webpackId: "424797"
    });
    let et = (0, J.makeLazy)({
            createPromise: () => E.el("406915").then(E.bind(E, "406915")),
            webpackId: "406915"
        }),
        eo = o.memo(function(e) {
            let _ = (0, T.useStateFromStores)([Y.default], () => Y.default.isFocused());
            return (0, t.jsx)(Z.default, {
                ...e,
                focused: _
            })
        });
    var en = function(e) {
        let {
            children: _,
            skipsSettingDefaultPageTitle: E
        } = e, {
            pathname: n
        } = (0, I.useLocation)(), N = (0, X.getPlatform)(), L = s.isMobile || s.isTablet, Y = (0, T.useStateFromStores)([b.default], () => b.default.darkSidebar ? ee.ThemeTypes.DARK : void 0), J = (0, T.useStateFromStores)([D.default], () => D.default.useForcedColors ? "yes" : "no"), [Z, en] = (0, T.useStateFromStoresArray)([m.default], () => [m.default.isEditorOpen, m.default.isCoachmark]), er = (0, T.useStateFromStores)([M.default], () => M.default.isEditorOpen), {
            enabled: ea
        } = H.default.useExperiment({
            location: "client_themes_coachmark_reintro"
        }, {
            autoTrackExposure: !0
        }), ei = (0, T.useStateFromStores)([w.default], () => w.default.getLayers().includes(ee.Layers.USER_SETTINGS)), eI = (0, T.useStateFromStores)([F.default], () => Q.default.canUseClientThemes(F.default.getCurrentUser())), es = Z && !ei, eT = [];
        es && en && ea && !eI && eT.push(S.DismissibleContent.CLIENT_THEMES_COACHMARK);
        let [eS, eN] = (0, y.useSelectedDismissibleContent)(eT, e_.DismissibleContentGroupName.SIDEBAR, !0);
        eT.push(S.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
        let eO = eS === S.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
            eA = eS === S.DismissibleContent.CLIENT_THEMES_COACHMARK;
        o.useEffect(() => {
            let e = (0, i.matchPath)(n, {
                path: "invite",
                exact: !1,
                strict: !1
            });
            null == e && eO && !eA && (A.default.dispatch({
                type: "APP_ICON_EDITOR_OPEN"
            }), A.default.dispatch({
                type: "APP_ICON_TRACK_IMPRESSION",
                markAsDismissed: eN
            }))
        }, [eO, eA, eN, n]);
        let eR = o.useRef(document.body);
        return (0, t.jsx)(v.default, {
            children: (0, t.jsx)(c.default, {
                children: (0, t.jsxs)(O.RedesignIconContextProvider, {
                    children: [(0, t.jsx)(q.default, {
                        skipsSettingDefaultPageTitle: E
                    }), (0, t.jsx)($.default, {
                        children: (0, t.jsx)(z.default, {
                            children: (0, t.jsxs)(O.FocusRingScope, {
                                containerRef: eR,
                                children: [(0, t.jsx)(j.MaskLibrary, {}), (0, t.jsx)(V.default, {}), (0, t.jsx)(a.FocusGuard, {}), null != N ? (0, t.jsx)(eo, {
                                    type: N,
                                    themeOverride: Y
                                }) : null, (0, t.jsx)(C.AppWindowContextProvider, {
                                    appContext: ee.AppContext.APP,
                                    renderWindow: window,
                                    children: (0, t.jsxs)(W.AppLayerProvider, {
                                        children: [(0, t.jsxs)("div", {
                                            className: r(eE.appAsidePanelWrapper, L && eE.mobileAppAsidePanelWrapper, {
                                                [eE.allowsScrolling]: (() => {
                                                    let e = (0, i.matchPath)(n, {
                                                        path: ee.Routes.APPLICATION_DIRECTORY,
                                                        exact: !1,
                                                        strict: !1
                                                    });
                                                    return (!!s.isMobile || !!s.isTablet) && null != e || !1
                                                })()
                                            }),
                                            children: [(0, t.jsx)("div", {
                                                className: eE.notAppAsidePanel,
                                                "data-app-not-dev-tools": !0,
                                                children: (0, t.jsx)(p.CommonConfettiCannonContextProvider, {
                                                    children: (0, t.jsx)(x.VerificationLayerProvider, {
                                                        children: (0, t.jsxs)(k.default.Provider, {
                                                            value: d.default,
                                                            children: [(0, t.jsx)("div", {
                                                                className: r(L ? eE.mobileApp : eE.app),
                                                                children: _
                                                            }), (0, t.jsx)(B.default, {}), (0, t.jsx)(P.default, {}), (0, t.jsx)(l.default, {}), (0, t.jsx)(O.Modals, {}), (0, t.jsx)(u.default, {}), (0, t.jsx)(K.FullScreenLayers, {}), (0, t.jsx)(W.AppLayerContainer, {}), (0, t.jsx)(x.VerificationLayerContainer, {}), (0, t.jsx)(O.ToastContainer, {}), (0, t.jsx)(U.default, {}), (0, t.jsx)(f.default, {}), (0, t.jsx)(et, {})]
                                                        })
                                                    })
                                                })
                                            }), (0, t.jsx)(R.default, {}), es && !en || eA ? (0, t.jsx)(G.default, {
                                                markAsDismissed: eN
                                            }) : null, !er || ei || eA ? null : (0, t.jsx)(h.default, {
                                                isCoachmark: eO,
                                                markAsDismissed: eN
                                            }), (0, t.jsx)(g.default, {
                                                mobile: L
                                            })]
                                        }), !1]
                                    })
                                }), (0, t.jsx)(a.FocusGuard, {})]
                            })
                        })
                    })]
                })
            })
        }, J)
    }
}