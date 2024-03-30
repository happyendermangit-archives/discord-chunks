function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("802498"),
        u = n("266067"),
        s = n("613828"),
        l = n("56300"),
        c = n("898511"),
        f = n("14782"),
        d = n("626399"),
        _ = n("784184"),
        E = n("629815"),
        p = n("991426"),
        m = n("895586"),
        y = n("409616"),
        I = n("887377"),
        h = n("813970"),
        O = n("622780"),
        T = n("86865"),
        S = n("278982"),
        v = n("70778"),
        g = n("738223"),
        A = n("447"),
        b = n("340594"),
        N = n("15949"),
        R = n("565996"),
        C = n("883462"),
        P = n("444376"),
        D = n("177770"),
        L = n("154209"),
        M = n("111534"),
        U = n("282891"),
        w = n("809216"),
        k = n("798206"),
        G = n("854106"),
        B = n("208454"),
        j = n("290976"),
        F = n("283248"),
        V = n("451627"),
        H = n("244749"),
        x = n("310734"),
        Y = n("404411"),
        W = n("845265"),
        K = n("374550"),
        z = n("830721"),
        X = n("586159"),
        q = n("748705"),
        Q = n("637375"),
        J = n("970817"),
        Z = n("603157"),
        $ = n("281767"),
        ee = n("348201"),
        et = n("155118");

    function en(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    n("107908");

    function er(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function eo(e, t) {
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
                if ("string" == typeof e) return en(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return en(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    Promise.resolve().then(n.bind(n, "65017")).then(function(e) {
        K.isPlatformEmbedded ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1) : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1)
    }), (0, d.setDesignConfig)({
        getDefaultLinkInterceptor: I.default
    }), (0, X.makeLazy)({
        createPromise: function() {
            return Promise.all([n.e("99387"), n.e("40326"), n.e("80451"), n.e("33926"), n.e("75906")]).then(n.bind(n, "852286"))
        },
        webpackId: "852286"
    }), (0, X.makeLazy)({
        createPromise: function() {
            return Promise.all([n.e("40326"), n.e("80451"), n.e("33926"), n.e("65429")]).then(n.bind(n, "677856"))
        },
        webpackId: "677856"
    });
    var ei = (0, X.makeLazy)({
            createPromise: function() {
                return Promise.all([n.e("99387"), n.e("30053")]).then(n.bind(n, "424649"))
            },
            webpackId: "424649"
        }),
        ea = r.memo(function(e) {
            var t, n, o = (0, c.useStateFromStores)([j.default], function() {
                return j.default.isFocused()
            });
            return r.createElement(Z.default, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        er(e, t, n[t])
                    })
                }
                return e
            }({}, e), n = (n = {
                focused: o
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))
        });
    t.default = function(e) {
        var t, n = e.children,
            o = e.skipsSettingDefaultPageTitle,
            d = (0, s.useLocation)().pathname,
            I = (0, K.getPlatform)(),
            j = l.isMobile || l.isTablet,
            X = (0, c.useStateFromStores)([k.default], function() {
                return k.default.darkSidebar ? $.ThemeTypes.DARK : void 0
            }),
            Z = (0, c.useStateFromStores)([O.default], function() {
                return O.default.useForcedColors ? "yes" : "no"
            }),
            en = eo((0, c.useStateFromStoresArray)([N.default], function() {
                return [N.default.isEditorOpen, N.default.isCoachmark]
            }), 2),
            eu = en[0],
            es = en[1],
            el = (0, c.useStateFromStores)([g.default], function() {
                return g.default.isEditorOpen
            }),
            ec = U.default.useExperiment({
                location: "client_themes_coachmark_reintro"
            }, {
                autoTrackExposure: !0
            }).enabled,
            ef = (0, c.useStateFromStores)([G.default], function() {
                return G.default.getLayers().includes($.Layers.USER_SETTINGS)
            }),
            ed = (0, c.useStateFromStores)([B.default], function() {
                return z.default.canUseClientThemes(B.default.getCurrentUser())
            }),
            e_ = eu && !ef,
            eE = [];
        e_ && es && ec && !ed && eE.push(f.DismissibleContent.CLIENT_THEMES_COACHMARK);
        var ep = eo((0, D.useSelectedDismissibleContent)(eE, ee.DismissibleContentGroupName.SIDEBAR, !0), 2),
            em = ep[0],
            ey = ep[1];
        eE.push(f.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
        var eI = em === f.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
            eh = em === f.DismissibleContent.CLIENT_THEMES_COACHMARK;
        r.useEffect(function() {
            null == (0, u.matchPath)(d, {
                path: "invite",
                exact: !1,
                strict: !1
            }) && eI && !eh && (E.default.dispatch({
                type: "APP_ICON_EDITOR_OPEN"
            }), E.default.dispatch({
                type: "APP_ICON_TRACK_IMPRESSION",
                markAsDismissed: ey
            }))
        }, [eI, eh, ey, d]);
        var eO = r.useRef(document.body);
        return r.createElement(w.default, {
            key: Z
        }, r.createElement(T.default, null, r.createElement(_.RedesignIconContextProvider, null, r.createElement(q.default, {
            skipsSettingDefaultPageTitle: o
        }), r.createElement(J.default, null, r.createElement(Q.default, null, r.createElement(_.FocusRingScope, {
            containerRef: eO
        }, r.createElement(W.MaskLibrary, null), r.createElement(F.default, null), r.createElement(a.FocusGuard, null), null != I ? r.createElement(ea, {
            type: I,
            themeOverride: X
        }) : null, r.createElement(h.AppWindowContextProvider, {
            appContext: $.AppContext.APP,
            renderWindow: window
        }, r.createElement(H.AppLayerProvider, null, r.createElement("div", {
            className: i()(et.appAsidePanelWrapper, j && et.mobileAppAsidePanelWrapper, er({}, et.allowsScrolling, (t = (0, u.matchPath)(d, {
                path: $.Routes.APPLICATION_DIRECTORY,
                exact: !1,
                strict: !1
            }), (!!l.isMobile || !!l.isTablet) && null != t || !1)))
        }, r.createElement("div", {
            className: et.notAppAsidePanel,
            "data-app-not-dev-tools": !0
        }, r.createElement(C.CommonConfettiCannonContextProvider, null, r.createElement(Y.VerificationLayerProvider, null, r.createElement(V.default.Provider, {
            value: S.default
        }, r.createElement("div", {
            className: i()(j ? et.mobileApp : et.app)
        }, n), r.createElement(L.default, null), r.createElement(b.default, null), r.createElement(m.default, null), r.createElement(_.Modals, null), r.createElement(y.default, null), r.createElement(x.FullScreenLayers, null), r.createElement(H.AppLayerContainer, null), r.createElement(Y.VerificationLayerContainer, null), r.createElement(_.ToastContainer, null), r.createElement(v.default, null), r.createElement(M.default, null), r.createElement(ei, null))))), r.createElement(p.default, null), e_ && !es || eh ? r.createElement(R.default, {
            markAsDismissed: ey
        }) : null, !el || ef || eh ? null : r.createElement(A.default, {
            isCoachmark: eI,
            markAsDismissed: ey
        }), r.createElement(P.default, {
            mobile: j
        })), !1)), r.createElement(a.FocusGuard, null)))))))
    }
}