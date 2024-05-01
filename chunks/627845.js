function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canEnableForcedColors: function() {
            return A
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("570140"),
        s = n("594174"),
        o = n("626135"),
        l = n("358085"),
        u = n("857595"),
        d = n("607070"),
        _ = n("981631");
    let c = window.matchMedia("(prefers-reduced-motion: reduce)"),
        E = window.matchMedia("(prefers-contrast: more)"),
        I = window.matchMedia("(prefers-contrast: less)"),
        T = window.matchMedia("(prefers-color-scheme: dark)"),
        f = window.matchMedia("(prefers-color-scheme: light)"),
        S = window.matchMedia("(forced-colors: active)"),
        h = 5;

    function A() {
        return "windows" === (0, l.getOS)()
    }
    t.default = {
        initBasic() {
            c.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(c), T.addListener(this.handleSystemColorPreferencesChanged), f.addListener(this.handleSystemColorPreferencesChanged), S.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), E.addListener(this.handleSystemPrefersContrastChanged), I.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged()
        },
        init() {
            this.initBasic(), a.default.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
                o.default.track(_.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
                    colorblind_enabled: d.default.colorblindMode
                })
            }), a.default.subscribe("ACCESSIBILITY_SET_SATURATION", e => {
                o.default.track(_.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
                    saturation_level: e.saturation
                })
            })
        },
        maybeShowKeyboardNavigationExplainerModal() {
            h = Math.max(h - 1, 0), ! function() {
                let e = s.default.getCurrentUser();
                return null == e || Date.now() - +e.createdAt < 864e5
            }() && !d.default.keyboardNavigationExplainerModalSeen && 0 === h && (0, r.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("99387"), n.e("6380"), n.e("73872")]).then(n.bind(n, "461964"));
                return t => (0, i.jsx)(e, {
                    ...t
                })
            })
        },
        handleSystemPrefersReducedMotionChanged(e) {
            a.default.wait(() => {
                u.systemPrefersReducedMotionChanged(e.matches ? "reduce" : "no-preference")
            })
        },
        handleSystemColorPreferencesChanged() {
            let e;
            T.matches ? e = _.ThemeTypes.DARK : f.matches && (e = _.ThemeTypes.LIGHT);
            let t = (!l.isPlatformEmbedded || A()) && S.matches ? "active" : "none";
            a.default.wait(() => {
                u.systemColorPreferencesChanged(e, t)
            })
        },
        handleSystemPrefersContrastChanged() {
            let e = "no-preference";
            E.matches ? e = "more" : I.matches && (e = "less"), a.default.wait(() => {
                u.systemPrefersContrastChanged(e)
            })
        }
    }
}