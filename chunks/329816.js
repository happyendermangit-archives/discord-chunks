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
        A = n("114250"),
        h = n("315263"),
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
        U = n("813744"),
        b = n("904085"),
        G = n("892254"),
        w = n("210887"),
        B = n("819640"),
        k = n("594174"),
        V = n("451478"),
        F = n("672752"),
        x = n("812663"),
        H = n("153850"),
        Y = n("725568"),
        j = n("78415"),
        W = n("806519"),
        K = n("358085"),
        z = n("74538"),
        X = n("663993"),
        Q = n("823453"),
        q = n("628123"),
        J = n("962745"),
        Z = n("151851"),
        $ = n("981631"),
        ee = n("921944"),
        et = n("155118");
    n("792295"), Promise.resolve().then(n.bind(n, "62883")).then(e => {
        K.isPlatformEmbedded ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1) : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1)
    }), (0, E.setDesignConfig)({
        getDefaultLinkInterceptor: h.default
    }), (0, X.makeLazy)({
        createPromise: () => Promise.all([n.e("99387"), n.e("40326"), n.e("80451"), n.e("30634"), n.e("54343")]).then(n.bind(n, "849493")),
        webpackId: "849493"
    }), (0, X.makeLazy)({
        createPromise: () => Promise.all([n.e("40326"), n.e("80451"), n.e("30634"), n.e("81811")]).then(n.bind(n, "80753")),
        webpackId: "80753"
    });
    let en = (0, X.makeLazy)({
            createPromise: () => Promise.all([n.e("99387"), n.e("46369")]).then(n.bind(n, "177741")),
            webpackId: "177741"
        }),
        ei = r.memo(function(e) {
            let t = (0, _.useStateFromStores)([V.default], () => V.default.isFocused());
            return (0, i.jsx)(Z.default, {
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
        } = (0, u.useLocation)(), E = (0, K.getPlatform)(), h = d.isMobile || d.isTablet, V = (0, _.useStateFromStores)([w.default], () => w.default.darkSidebar ? $.ThemeTypes.DARK : void 0), X = (0, _.useStateFromStores)([N.default], () => N.default.useForcedColors ? "yes" : "no"), [Z, er] = (0, _.useStateFromStoresArray)([D.default], () => [D.default.isEditorOpen, D.default.isCoachmark]), es = (0, _.useStateFromStores)([C.default], () => C.default.isEditorOpen), {
            enabled: ea
        } = b.default.useExperiment({
            location: "client_themes_coachmark_reintro"
        }, {
            autoTrackExposure: !0
        }), eo = (0, _.useStateFromStores)([B.default], () => B.default.getLayers().includes($.Layers.USER_SETTINGS)), el = (0, _.useStateFromStores)([k.default], () => z.default.canUseClientThemes(k.default.getCurrentUser())), eu = Z && !eo, ed = [];
        eu && er && ea && !el && ed.push(c.DismissibleContent.CLIENT_THEMES_COACHMARK);
        let [e_, ec] = (0, P.useSelectedDismissibleContent)(ed, ee.DismissibleContentGroupName.SIDEBAR, !0);
        ed.push(c.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
        let eE = e_ === c.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
            eI = e_ === c.DismissibleContent.CLIENT_THEMES_COACHMARK;
        r.useEffect(() => {
            null == (0, l.matchPath)(s, {
                path: "invite",
                exact: !1,
                strict: !1
            }) && eE && !eI && (T.default.dispatch({
                type: "APP_ICON_EDITOR_OPEN"
            }), T.default.dispatch({
                type: "APP_ICON_TRACK_IMPRESSION",
                markAsDismissed: ec
            }))
        }, [eE, eI, ec, s]);
        let eT = r.useRef(document.body);
        return (0, i.jsx)(G.default, {
            children: (0, i.jsx)(O.default, {
                children: (0, i.jsxs)(I.RedesignIconContextProvider, {
                    children: [(0, i.jsx)(Q.default, {
                        skipsSettingDefaultPageTitle: n
                    }), (0, i.jsx)(J.default, {
                        children: (0, i.jsx)(q.default, {
                            children: (0, i.jsxs)(I.FocusRingScope, {
                                containerRef: eT,
                                children: [(0, i.jsx)(W.MaskLibrary, {}), (0, i.jsx)(F.default, {}), (0, i.jsx)(o.FocusGuard, {}), null != E ? (0, i.jsx)(ei, {
                                    type: E,
                                    themeOverride: V
                                }) : null, (0, i.jsx)(m.AppWindowContextProvider, {
                                    appContext: $.AppContext.APP,
                                    renderWindow: window,
                                    children: (0, i.jsxs)(H.AppLayerProvider, {
                                        children: [(0, i.jsxs)("div", {
                                            className: a()(et.appAsidePanelWrapper, h && et.mobileAppAsidePanelWrapper, {
                                                [et.allowsScrolling]: (() => {
                                                    let e = (0, l.matchPath)(s, {
                                                        path: $.Routes.APPLICATION_DIRECTORY,
                                                        exact: !1,
                                                        strict: !1
                                                    });
                                                    return (!!d.isMobile || !!d.isTablet) && null != e || !1
                                                })()
                                            }),
                                            children: [(0, i.jsx)("div", {
                                                className: et.notAppAsidePanel,
                                                "data-app-not-dev-tools": !0,
                                                children: (0, i.jsx)(M.CommonConfettiCannonContextProvider, {
                                                    children: (0, i.jsx)(j.VerificationLayerProvider, {
                                                        children: (0, i.jsxs)(x.default.Provider, {
                                                            value: p.default,
                                                            children: [(0, i.jsx)("div", {
                                                                className: a()(h ? et.mobileApp : et.app),
                                                                children: t
                                                            }), (0, i.jsx)(L.default, {}), (0, i.jsx)(S.default, {}), (0, i.jsx)(I.Modals, {}), (0, i.jsx)(A.default, {}), (0, i.jsx)(Y.FullScreenLayers, {}), (0, i.jsx)(H.AppLayerContainer, {}), (0, i.jsx)(j.VerificationLayerContainer, {}), (0, i.jsx)(I.ToastContainer, {}), (0, i.jsx)(R.default, {}), (0, i.jsx)(U.default, {}), (0, i.jsx)(en, {})]
                                                        })
                                                    })
                                                })
                                            }), (0, i.jsx)(f.default, {}), eu && !er || eI ? (0, i.jsx)(v.default, {
                                                markAsDismissed: ec
                                            }) : null, !es || eo || eI ? null : (0, i.jsx)(g.default, {
                                                isCoachmark: eE,
                                                markAsDismissed: ec
                                            }), (0, i.jsx)(y.default, {
                                                mobile: h
                                            })]
                                        }), !1]
                                    })
                                }), (0, i.jsx)(o.FocusGuard, {})]
                            })
                        })
                    })]
                })
            })
        }, X)
    }
}