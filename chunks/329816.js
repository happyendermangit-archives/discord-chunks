function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("653041");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("802498"),
        l = n("266067"),
        u = n("613828"),
        d = n("873546"),
        _ = n("442837"),
        c = n("524437"),
        E = n("335854"),
        I = n("481060"),
        T = n("570140"),
        f = n("721037"),
        S = n("490173"),
        h = n("114250"),
        A = n("315263"),
        m = n("40851"),
        N = n("607070"),
        O = n("545006"),
        p = n("213609"),
        R = n("613413"),
        C = n("327943"),
        g = n("907459"),
        L = n("559407"),
        D = n("514361"),
        v = n("724145"),
        M = n("260035"),
        y = n("947519"),
        P = n("243778"),
        U = n("757042"),
        b = n("813744"),
        G = n("904085"),
        w = n("892254"),
        B = n("210887"),
        k = n("819640"),
        V = n("594174"),
        F = n("451478"),
        x = n("672752"),
        H = n("812663"),
        Y = n("153850"),
        j = n("725568"),
        W = n("78415"),
        K = n("806519"),
        z = n("358085"),
        X = n("74538"),
        Q = n("663993"),
        q = n("823453"),
        J = n("628123"),
        Z = n("962745"),
        $ = n("151851"),
        ee = n("981631"),
        et = n("921944"),
        en = n("155118");
    n("792295"), Promise.resolve().then(n.bind(n, "62883")).then(e => {
        z.isPlatformEmbedded ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1) : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1)
    }), (0, E.setDesignConfig)({
        getDefaultLinkInterceptor: A.default
    }), (0, Q.makeLazy)({
        createPromise: () => Promise.all([n.e("99387"), n.e("40326"), n.e("80451"), n.e("30634"), n.e("54343")]).then(n.bind(n, "849493")),
        webpackId: "849493"
    }), (0, Q.makeLazy)({
        createPromise: () => Promise.all([n.e("40326"), n.e("80451"), n.e("30634"), n.e("81811")]).then(n.bind(n, "80753")),
        webpackId: "80753"
    });
    let ei = (0, Q.makeLazy)({
            createPromise: () => Promise.all([n.e("99387"), n.e("46369")]).then(n.bind(n, "177741")),
            webpackId: "177741"
        }),
        er = r.memo(function(e) {
            let t = (0, _.useStateFromStores)([F.default], () => F.default.isFocused());
            return (0, i.jsx)($.default, {
                ...e,
                focused: t
            })
        });
    t.default = function(e) {
        let {
            children: t,
            skipsSettingDefaultPageTitle: n
        } = e, {
            pathname: s
        } = (0, u.useLocation)(), E = (0, z.getPlatform)(), A = d.isMobile || d.isTablet, F = (0, _.useStateFromStores)([B.default], () => B.default.darkSidebar ? ee.ThemeTypes.DARK : void 0), Q = (0, _.useStateFromStores)([N.default], () => N.default.useForcedColors ? "yes" : "no"), [$, es] = (0, _.useStateFromStoresArray)([D.default], () => [D.default.isEditorOpen, D.default.isCoachmark]), ea = (0, _.useStateFromStores)([C.default], () => C.default.isEditorOpen), {
            enabled: eo
        } = G.default.useExperiment({
            location: "client_themes_coachmark_reintro"
        }, {
            autoTrackExposure: !0
        }), el = (0, _.useStateFromStores)([k.default], () => k.default.getLayers().includes(ee.Layers.USER_SETTINGS)), eu = (0, _.useStateFromStores)([V.default], () => X.default.canUseClientThemes(V.default.getCurrentUser())), ed = $ && !el, e_ = [];
        ed && es && eo && !eu && e_.push(c.DismissibleContent.CLIENT_THEMES_COACHMARK);
        let [ec, eE] = (0, P.useSelectedDismissibleContent)(e_, et.DismissibleContentGroupName.SIDEBAR, !0);
        e_.push(c.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
        let eI = ec === c.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
            eT = ec === c.DismissibleContent.CLIENT_THEMES_COACHMARK;
        r.useEffect(() => {
            null == (0, l.matchPath)(s, {
                path: "invite",
                exact: !1,
                strict: !1
            }) && eI && !eT && (T.default.dispatch({
                type: "APP_ICON_EDITOR_OPEN"
            }), T.default.dispatch({
                type: "APP_ICON_TRACK_IMPRESSION",
                markAsDismissed: eE
            }))
        }, [eI, eT, eE, s]);
        let ef = r.useRef(document.body);
        return (0, i.jsx)(w.default, {
            children: (0, i.jsx)(O.default, {
                children: (0, i.jsxs)(I.RedesignIconContextProvider, {
                    children: [(0, i.jsx)(q.default, {
                        skipsSettingDefaultPageTitle: n
                    }), (0, i.jsx)(Z.default, {
                        children: (0, i.jsx)(J.default, {
                            children: (0, i.jsxs)(I.FocusRingScope, {
                                containerRef: ef,
                                children: [(0, i.jsx)(K.MaskLibrary, {}), (0, i.jsx)(x.default, {}), (0, i.jsx)(o.FocusGuard, {}), null != E ? (0, i.jsx)(er, {
                                    type: E,
                                    themeOverride: F
                                }) : null, (0, i.jsx)(m.AppWindowContextProvider, {
                                    appContext: ee.AppContext.APP,
                                    renderWindow: window,
                                    children: (0, i.jsxs)(Y.AppLayerProvider, {
                                        children: [(0, i.jsxs)("div", {
                                            className: a()(en.appAsidePanelWrapper, A && en.mobileAppAsidePanelWrapper, {
                                                [en.allowsScrolling]: (() => {
                                                    let e = (0, l.matchPath)(s, {
                                                        path: ee.Routes.APPLICATION_DIRECTORY,
                                                        exact: !1,
                                                        strict: !1
                                                    });
                                                    return (!!d.isMobile || !!d.isTablet) && null != e || !1
                                                })()
                                            }),
                                            children: [(0, i.jsx)("div", {
                                                className: en.notAppAsidePanel,
                                                "data-app-not-dev-tools": !0,
                                                children: (0, i.jsx)(M.CommonConfettiCannonContextProvider, {
                                                    children: (0, i.jsx)(W.VerificationLayerProvider, {
                                                        children: (0, i.jsxs)(H.default.Provider, {
                                                            value: p.default,
                                                            children: [(0, i.jsx)("div", {
                                                                className: a()(A ? en.mobileApp : en.app),
                                                                children: t
                                                            }), (0, i.jsx)(U.default, {}), (0, i.jsx)(L.default, {}), (0, i.jsx)(S.default, {}), (0, i.jsx)(I.Modals, {}), (0, i.jsx)(h.default, {}), (0, i.jsx)(j.FullScreenLayers, {}), (0, i.jsx)(Y.AppLayerContainer, {}), (0, i.jsx)(W.VerificationLayerContainer, {}), (0, i.jsx)(I.ToastContainer, {}), (0, i.jsx)(R.default, {}), (0, i.jsx)(b.default, {}), (0, i.jsx)(ei, {})]
                                                        })
                                                    })
                                                })
                                            }), (0, i.jsx)(f.default, {}), ed && !es || eT ? (0, i.jsx)(v.default, {
                                                markAsDismissed: eE
                                            }) : null, !ea || el || eT ? null : (0, i.jsx)(g.default, {
                                                isCoachmark: eI,
                                                markAsDismissed: eE
                                            }), (0, i.jsx)(y.default, {
                                                mobile: A
                                            })]
                                        }), !1]
                                    })
                                }), (0, i.jsx)(o.FocusGuard, {})]
                            })
                        })
                    })]
                })
            })
        }, Q)
    }
}