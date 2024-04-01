function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
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
        A = n("451478"),
        h = n("792125"),
        m = n("597952"),
        N = n("252618"),
        O = n("587061"),
        p = n("392358"),
        R = n("981631");
    n("309538");
    let C = new Set([R.Routes.LOGIN, R.Routes.REGISTER]);
    t.default = r.memo(function(e) {
        let {
            children: t,
            skipsSettingDefaultPageTitle: s
        } = e;
        (0, N.usePageTitleManager)({
            skipsSettingDefaultPageTitle: s
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
                })), s = (0, d.useStateFromStores)([A.default], () => A.default.isFocused(), []), {
                    reducedMotion: o,
                    alwaysShowLinkDecorations: _
                } = r.useContext(c.AccessibilityPreferencesContext), {
                    fontScale: I,
                    fontScaleClass: N,
                    keyboardModeEnabled: R,
                    saturation: g,
                    desaturateUserColors: L,
                    useForcedColors: D,
                    systemForcedColors: v
                } = (0, d.useStateFromStoresObject)([E.default], () => {
                    let {
                        fontScale: e,
                        fontScaleClass: t,
                        keyboardModeEnabled: n,
                        saturation: i,
                        desaturateUserColors: r,
                        useForcedColors: s,
                        systemForcedColors: a
                    } = E.default;
                    return {
                        fontScale: e,
                        fontScaleClass: t,
                        keyboardModeEnabled: n,
                        saturation: i,
                        desaturateUserColors: r,
                        useForcedColors: s,
                        systemForcedColors: a
                    }
                }), M = (0, l.useLocation)(), y = r.useMemo(() => C.has(M.pathname), [M.pathname]);
                (0, O.default)(window, y);
                let P = (0, p.default)(window, __OVERLAY__ || s),
                    U = (0, d.useStateFromStores)([T.default], () => T.default.sidebarWidth),
                    b = (0, c.useRedesignIconContext)().enabled;
                return (0, i.jsx)("html", {
                    lang: t,
                    style: "font-size: ".concat(I, "%; --saturation-factor: ").concat(g, "; --devtools-sidebar-width: ").concat(U, "px;"),
                    className: a()(e, {
                        overlay: __OVERLAY__,
                        "mouse-mode": P,
                        "keyboard-mode": R,
                        "reduce-motion": o.enabled,
                        "full-motion": !o.enabled,
                        "is-mobile": u.isMobile,
                        "app-focused": s,
                        "low-saturation": g <= c.LOW_SATURATION_THRESHOLD,
                        "decorate-links": _,
                        "desaturate-user-colors": L,
                        "disable-forced-colors": !D && "active" === v,
                        "enable-forced-colors": D,
                        "show-redesigned-icons": b
                    }, (0, h.getThemeClass)(n), (0, m.default)(), N)
                })
            }(R), function() {
                let [e, t] = r.useState([]);
                return r.useEffect(() => {
                    Promise.all(_.fontsToPreload.map(e => n("651434")("@discordapp/tokens/typography/generated/gg-sans/".concat(e, ".woff2").replace("@discordapp/tokens/typography/generated/gg-sans/", "./")).then(e => {
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