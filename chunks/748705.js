function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("445131"),
        u = n("613828"),
        s = n("56300"),
        l = n("898511"),
        c = n("112542"),
        f = n("784184"),
        d = n("622780"),
        _ = n("495054"),
        E = n("694215"),
        p = n("225098"),
        m = n("798206"),
        y = n("290976"),
        I = n("153732"),
        h = n("400253"),
        O = n("738700"),
        T = n("347552"),
        S = n("819727"),
        v = n("281767");

    function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    n("309538");
    var A = new Set([v.Routes.LOGIN, v.Routes.REGISTER]);
    t.default = r.memo(function(e) {
        var t, o, v, b, N, R, C, P, D, L, M, U, w, k, G, B, j, F, V, H, x, Y, W, K, z, X, q, Q, J, Z = e.children,
            $ = e.skipsSettingDefaultPageTitle;
        (0, O.usePageTitleManager)({
            skipsSettingDefaultPageTitle: $
        });
        var ee = (0, _.default)(),
            et = ee.clientThemesClassName,
            en = ee.clientThemesCSS;
        var er = r.createElement("style", (t = {}, o = _.CLIENT_THEMES_DATA_ATTRIBUTE, v = !0, o in t ? Object.defineProperty(t, o, {
            value: v,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[o] = v, t), en);
        return r.createElement(a.Helmet, null, (b = et, R = (N = (0, l.useStateFromStoresObject)([m.default, p.default], function() {
            return {
                locale: p.default.locale,
                theme: m.default.theme
            }
        })).locale, C = N.theme, P = (0, l.useStateFromStores)([y.default], function() {
            return y.default.isFocused()
        }, []), L = (D = r.useContext(f.AccessibilityPreferencesContext)).reducedMotion, M = D.alwaysShowLinkDecorations, w = (U = (0, l.useStateFromStoresObject)([d.default], function() {
            return {
                fontScale: d.default.fontScale,
                fontScaleClass: d.default.fontScaleClass,
                keyboardModeEnabled: d.default.keyboardModeEnabled,
                saturation: d.default.saturation,
                desaturateUserColors: d.default.desaturateUserColors,
                useForcedColors: d.default.useForcedColors,
                systemForcedColors: d.default.systemForcedColors
            }
        })).fontScale, k = U.fontScaleClass, G = U.keyboardModeEnabled, B = U.saturation, j = U.desaturateUserColors, F = U.useForcedColors, V = U.systemForcedColors, H = (0, u.useLocation)(), x = r.useMemo(function() {
            return A.has(H.pathname)
        }, [H.pathname]), (0, T.default)(window, x), Y = (0, S.default)(window, __OVERLAY__ || P), W = (0, l.useStateFromStores)([E.default], function() {
            return E.default.sidebarWidth
        }), K = (0, f.useRedesignIconContext)().enabled, r.createElement("html", {
            lang: R,
            style: "font-size: ".concat(w, "%; --saturation-factor: ").concat(B, "; --devtools-sidebar-width: ").concat(W, "px;"),
            className: i()(b, {
                overlay: __OVERLAY__,
                "mouse-mode": Y,
                "keyboard-mode": G,
                "reduce-motion": L.enabled,
                "full-motion": !L.enabled,
                "is-mobile": s.isMobile,
                "app-focused": P,
                "low-saturation": B <= f.LOW_SATURATION_THRESHOLD,
                "decorate-links": M,
                "desaturate-user-colors": j,
                "disable-forced-colors": !F && "active" === V,
                "enable-forced-colors": F,
                "show-redesigned-icons": K
            }, (0, I.getThemeClass)(C), (0, h.default)(), k)
        })), (Q = (q = (z = r.useState([]), X = 2, function(e) {
            if (Array.isArray(e)) return e
        }(z) || function(e, t) {
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
        }(z, X) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return g(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(e, t)
            }
        }(z, X) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()))[0], J = q[1], r.useEffect(function() {
            Promise.all(c.fontsToPreload.map(function(e) {
                return n("651434")("@discordapp/tokens/typography/generated/gg-sans/".concat(e, ".woff2").replace("@discordapp/tokens/typography/generated/gg-sans/", "./")).then(function(e) {
                    return e.default
                })
            })).then(function(e) {
                return J(e)
            })
        }, []), r.createElement(r.Fragment, null, Q.map(function(e, t) {
            return r.createElement("link", {
                key: t,
                rel: "preload",
                href: e,
                as: "font",
                type: "font/woff2",
                crossOrigin: "true"
            })
        }))), er, Z)
    })
}