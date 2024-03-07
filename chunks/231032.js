function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return eo
        }
    }), E("222007"), E("424973");
    var t = E("37983"),
        o = E("884691"),
        n = E("414456"),
        r = E.n(n),
        a = E("965955"),
        i = E("803182"),
        I = E("90915"),
        T = E("394846"),
        s = E("446674"),
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
        B = E("234819"),
        f = E("182033"),
        H = E("928741"),
        v = E("161778"),
        b = E("778588"),
        w = E("697218"),
        F = E("471671"),
        Y = E("791106"),
        V = E("542489"),
        k = E("983782"),
        W = E("708169"),
        K = E("668596"),
        x = E("587974"),
        j = E("773336"),
        X = E("719923"),
        Q = E("269936"),
        J = E("302537"),
        q = E("967889"),
        z = E("102999"),
        $ = E("160139"),
        Z = E("49111"),
        ee = E("994428"),
        e_ = E("414482");
    E("551184"), E.el("573055").then(E.bind(E, "573055")).then(e => {
        j.isPlatformEmbedded ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1) : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1)
    }), (0, N.setDesignConfig)({
        getDefaultLinkInterceptor: L.default
    }), (0, Q.makeLazy)({
        createPromise: () => E.el("737511").then(E.bind(E, "737511")),
        webpackId: "737511"
    }), (0, Q.makeLazy)({
        createPromise: () => E.el("424797").then(E.bind(E, "424797")),
        webpackId: "424797"
    });
    let eE = (0, Q.makeLazy)({
            createPromise: () => E.el("406915").then(E.bind(E, "406915")),
            webpackId: "406915"
        }),
        et = o.memo(function(e) {
            let _ = (0, s.useStateFromStores)([F.default], () => F.default.isFocused());
            return (0, t.jsx)($.default, {
                ...e,
                focused: _
            })
        });
    var eo = function(e) {
        let {
            children: _,
            skipsSettingDefaultPageTitle: E
        } = e, {
            pathname: n
        } = (0, I.useLocation)(), N = (0, j.getPlatform)(), L = T.isMobile || T.isTablet, F = (0, s.useStateFromStores)([v.default], () => v.default.darkSidebar ? Z.ThemeTypes.DARK : void 0), Q = (0, s.useStateFromStores)([D.default], () => D.default.useForcedColors ? "yes" : "no"), [$, eo] = (0, s.useStateFromStoresArray)([m.default], () => [m.default.isEditorOpen, m.default.isCoachmark]), en = (0, s.useStateFromStores)([M.default], () => M.default.isEditorOpen), {
            enabled: er
        } = f.default.useExperiment({
            location: "client_themes_coachmark_reintro"
        }, {
            autoTrackExposure: !0
        }), ea = (0, s.useStateFromStores)([b.default], () => b.default.getLayers().includes(Z.Layers.USER_SETTINGS)), ei = (0, s.useStateFromStores)([w.default], () => X.default.canUseClientThemes(w.default.getCurrentUser())), eI = $ && !ea, eT = [];
        eI && eo && er && !ei && eT.push(S.DismissibleContent.CLIENT_THEMES_COACHMARK);
        let [es, eS] = (0, y.useSelectedDismissibleContent)(eT, ee.DismissibleContentGroupName.SIDEBAR, !0);
        eT.push(S.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
        let eN = es === S.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
            eO = es === S.DismissibleContent.CLIENT_THEMES_COACHMARK;
        o.useEffect(() => {
            let e = (0, i.matchPath)(n, {
                path: "invite",
                exact: !1,
                strict: !1
            });
            null == e && eN && !eO && (A.default.dispatch({
                type: "APP_ICON_EDITOR_OPEN"
            }), A.default.dispatch({
                type: "APP_ICON_TRACK_IMPRESSION",
                markAsDismissed: eS
            }))
        }, [eN, eO, eS, n]);
        let eA = o.useRef(document.body);
        return (0, t.jsx)(H.default, {
            children: (0, t.jsx)(c.default, {
                children: (0, t.jsxs)(O.RedesignIconContextProvider, {
                    children: [(0, t.jsx)(J.default, {
                        skipsSettingDefaultPageTitle: E
                    }), (0, t.jsx)(z.default, {
                        children: (0, t.jsx)(q.default, {
                            children: (0, t.jsxs)(O.FocusRingScope, {
                                containerRef: eA,
                                children: [(0, t.jsx)(x.MaskLibrary, {}), (0, t.jsx)(Y.default, {}), (0, t.jsx)(a.FocusGuard, {}), null != N ? (0, t.jsx)(et, {
                                    type: N,
                                    themeOverride: F
                                }) : null, (0, t.jsx)(C.AppWindowContextProvider, {
                                    appContext: Z.AppContext.APP,
                                    renderWindow: window,
                                    children: (0, t.jsxs)(k.AppLayerProvider, {
                                        children: [(0, t.jsxs)("div", {
                                            className: r(e_.appAsidePanelWrapper, L && e_.mobileAppAsidePanelWrapper, {
                                                [e_.allowsScrolling]: (() => {
                                                    let e = (0, i.matchPath)(n, {
                                                        path: Z.Routes.APPLICATION_DIRECTORY,
                                                        exact: !1,
                                                        strict: !1
                                                    });
                                                    return (!!T.isMobile || !!T.isTablet) && null != e || !1
                                                })()
                                            }),
                                            children: [(0, t.jsx)("div", {
                                                className: e_.notAppAsidePanel,
                                                "data-app-not-dev-tools": !0,
                                                children: (0, t.jsx)(p.CommonConfettiCannonContextProvider, {
                                                    children: (0, t.jsx)(K.VerificationLayerProvider, {
                                                        children: (0, t.jsxs)(V.default.Provider, {
                                                            value: d.default,
                                                            children: [(0, t.jsx)("div", {
                                                                className: r(L ? e_.mobileApp : e_.app),
                                                                children: _
                                                            }), (0, t.jsx)(P.default, {}), (0, t.jsx)(l.default, {}), (0, t.jsx)(O.Modals, {}), (0, t.jsx)(u.default, {}), (0, t.jsx)(W.FullScreenLayers, {}), (0, t.jsx)(k.AppLayerContainer, {}), (0, t.jsx)(K.VerificationLayerContainer, {}), (0, t.jsx)(O.ToastContainer, {}), (0, t.jsx)(U.default, {}), (0, t.jsx)(B.default, {}), (0, t.jsx)(eE, {})]
                                                        })
                                                    })
                                                })
                                            }), (0, t.jsx)(R.default, {}), eI && !eo || eO ? (0, t.jsx)(G.default, {
                                                markAsDismissed: eS
                                            }) : null, !en || ea || eO ? null : (0, t.jsx)(h.default, {
                                                isCoachmark: eN,
                                                markAsDismissed: eS
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
        }, Q)
    }
}