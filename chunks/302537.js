function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return h
        }
    }), E("222007");
    var t = E("37983"),
        o = E("884691"),
        n = E("414456"),
        r = E.n(n),
        a = E("703809"),
        i = E("90915"),
        I = E("394846"),
        s = E("446674"),
        T = E("825573"),
        S = E("77078"),
        N = E("206230"),
        O = E("338733"),
        A = E("584369"),
        R = E("915639"),
        l = E("161778"),
        u = E("471671"),
        L = E("439932"),
        C = E("779601"),
        D = E("69927"),
        c = E("983689"),
        d = E("628922"),
        U = E("49111");
    E("597323");
    let M = new Set([U.Routes.LOGIN, U.Routes.REGISTER]);
    var h = o.memo(function(e) {
        let {
            children: _,
            skipsSettingDefaultPageTitle: n
        } = e;
        (0, D.usePageTitleManager)({
            skipsSettingDefaultPageTitle: n
        });
        let {
            clientThemesClassName: U,
            clientThemesCSS: h
        } = (0, O.default)(), P = o.createElement("style", {
            [O.CLIENT_THEMES_DATA_ATTRIBUTE]: !0
        }, h);
        return (0, t.jsxs)(a.Helmet, {
            children: [function(e) {
                let {
                    locale: _,
                    theme: E
                } = (0, s.useStateFromStoresObject)([l.default, R.default], () => ({
                    locale: R.default.locale,
                    theme: l.default.theme
                })), n = (0, s.useStateFromStores)([u.default], () => u.default.isFocused(), []), {
                    reducedMotion: a,
                    alwaysShowLinkDecorations: T
                } = o.useContext(S.AccessibilityPreferencesContext), {
                    fontScale: O,
                    fontScaleClass: D,
                    keyboardModeEnabled: U,
                    saturation: h,
                    desaturateUserColors: P,
                    useForcedColors: m,
                    systemForcedColors: G
                } = (0, s.useStateFromStoresObject)([N.default], () => {
                    let {
                        fontScale: e,
                        fontScaleClass: _,
                        keyboardModeEnabled: E,
                        saturation: t,
                        desaturateUserColors: o,
                        useForcedColors: n,
                        systemForcedColors: r
                    } = N.default;
                    return {
                        fontScale: e,
                        fontScaleClass: _,
                        keyboardModeEnabled: E,
                        saturation: t,
                        desaturateUserColors: o,
                        useForcedColors: n,
                        systemForcedColors: r
                    }
                }), p = (0, i.useLocation)(), g = o.useMemo(() => M.has(p.pathname), [p.pathname]);
                (0, c.default)(window, g);
                let y = (0, d.default)(window, __OVERLAY__ || n),
                    B = (0, s.useStateFromStores)([A.default], () => A.default.sidebarWidth),
                    f = (0, S.useRedesignIconContext)().enabled;
                return (0, t.jsx)("html", {
                    lang: _,
                    style: "font-size: ".concat(O, "%; --saturation-factor: ").concat(h, "; --devtools-sidebar-width: ").concat(B, "px;"),
                    className: r(e, {
                        overlay: __OVERLAY__,
                        "mouse-mode": y,
                        "keyboard-mode": U,
                        "reduce-motion": a.enabled,
                        "full-motion": !a.enabled,
                        "is-mobile": I.isMobile,
                        "app-focused": n,
                        "low-saturation": h <= S.LOW_SATURATION_THRESHOLD,
                        "decorate-links": T,
                        "desaturate-user-colors": P,
                        "disable-forced-colors": !m && "active" === G,
                        "enable-forced-colors": m,
                        "show-redesigned-icons": f
                    }, (0, L.getThemeClass)(E), (0, C.default)(), D)
                })
            }(U), function() {
                let [e, _] = o.useState([]);
                return o.useEffect(() => {
                    Promise.all(T.fontsToPreload.map(e => E("437087")("@discordapp/tokens/typography/generated/gg-sans/".concat(e, ".woff2").replace("@discordapp/tokens/typography/generated/gg-sans/", "./")).then(e => {
                        let {
                            default: _
                        } = e;
                        return _
                    }))).then(e => _(e))
                }, []), (0, t.jsx)(t.Fragment, {
                    children: e.map((e, _) => (0, t.jsx)("link", {
                        rel: "preload",
                        href: e,
                        as: "font",
                        type: "font/woff2",
                        crossOrigin: "true"
                    }, _))
                })
            }(), P, _]
        })
    })
}