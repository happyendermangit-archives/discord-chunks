function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("445131"),
        l = n("613828"),
        u = n("873546"),
        d = n("442837"),
        _ = n("316792"),
        c = n("481060"),
        E = n("607070"),
        I = n("168551"),
        T = n("19759"),
        f = n("706454"),
        S = n("210887"),
        h = n("451478"),
        A = n("792125"),
        m = n("597952"),
        N = n("252618"),
        p = n("587061"),
        O = n("392358"),
        R = n("981631");
    n("807151");
    let C = new Set([R.Routes.LOGIN, R.Routes.REGISTER]);
    t.default = r.memo(function(e) {
        let {
            children: t,
            skipsSettingDefaultPageTitle: a
        } = e;
        (0, N.usePageTitleManager)({
            skipsSettingDefaultPageTitle: a
        });
        let {
            clientThemesClassName: R,
            clientThemesCSS: g
        } = (0, I.default)(), L = r.createElement("style", {
            [I.CLIENT_THEMES_DATA_ATTRIBUTE]: !0
        }, g);
        return (0, i.jsxs)(o.Helmet, {
            children: [function(e) {
                let {
                    locale: t,
                    theme: n
                } = (0, d.useStateFromStoresObject)([S.default, f.default], () => ({
                    locale: f.default.locale,
                    theme: S.default.theme
                })), a = (0, d.useStateFromStores)([h.default], () => h.default.isFocused(), []), {
                    reducedMotion: o,
                    alwaysShowLinkDecorations: _
                } = r.useContext(c.AccessibilityPreferencesContext), {
                    fontScale: I,
                    fontScaleClass: N,
                    keyboardModeEnabled: R,
                    saturation: g,
                    desaturateUserColors: L,
                    useForcedColors: v,
                    systemForcedColors: D
                } = (0, d.useStateFromStoresObject)([E.default], () => {
                    let {
                        fontScale: e,
                        fontScaleClass: t,
                        keyboardModeEnabled: n,
                        saturation: i,
                        desaturateUserColors: r,
                        useForcedColors: a,
                        systemForcedColors: s
                    } = E.default;
                    return {
                        fontScale: e,
                        fontScaleClass: t,
                        keyboardModeEnabled: n,
                        saturation: i,
                        desaturateUserColors: r,
                        useForcedColors: a,
                        systemForcedColors: s
                    }
                }), M = (0, l.useLocation)(), y = r.useMemo(() => C.has(M.pathname), [M.pathname]);
                (0, p.default)(window, y);
                let P = (0, O.default)(window, __OVERLAY__ || a),
                    U = (0, d.useStateFromStores)([T.default], () => T.default.sidebarWidth),
                    b = (0, c.useRedesignIconContext)().enabled;
                return (0, i.jsx)("html", {
                    lang: t,
                    style: "font-size: ".concat(I, "%; --saturation-factor: ").concat(g, "; --devtools-sidebar-width: ").concat(U, "px;"),
                    className: s()(e, {
                        overlay: __OVERLAY__,
                        "mouse-mode": P,
                        "keyboard-mode": R,
                        "reduce-motion": o.enabled,
                        "full-motion": !o.enabled,
                        "is-mobile": u.isMobile,
                        "app-focused": a,
                        "low-saturation": g <= c.LOW_SATURATION_THRESHOLD,
                        "decorate-links": _,
                        "desaturate-user-colors": L,
                        "disable-forced-colors": !v && "active" === D,
                        "enable-forced-colors": v,
                        "show-redesigned-icons": b
                    }, (0, A.getThemeClass)(n), (0, m.default)(), N)
                })
            }(R), function() {
                let [e, t] = r.useState([]);
                return r.useEffect(() => {
                    Promise.all(_.fontsToPreload.map(e => n("867444")("@discordapp/tokens/typography/generated/gg-sans/".concat(e, ".woff2").replace("@discordapp/tokens/typography/generated/gg-sans/", "./")).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    }))).then(e => t(e))
                }, []), (0, i.jsx)(i.Fragment, {
                    children: e.map((e, t) => (0, i.jsx)("link", {
                        rel: "preload",
                        href: e,
                        as: "font",
                        type: "font/woff2",
                        crossOrigin: "true"
                    }, t))
                })
            }(), L, t]
        })
    })
}