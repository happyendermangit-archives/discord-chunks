function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("751848"),
        a = n("622780"),
        u = n("15949"),
        s = n("895517"),
        l = n("798206"),
        c = n("563090");

    function f(e) {
        var t = e.children,
            n = (0, o.useStateFromStores)([l.default], function() {
                return l.default.theme
            }),
            f = (0, s.useInMainTabsExperiment)(),
            d = (0, o.useStateFromStores)([u.default], function() {
                return u.default.gradientPreset
            }),
            _ = (0, o.useStateFromStoresObject)([a.default], function() {
                return {
                    saturation: a.default.saturation,
                    contrast: a.default.contrast
                }
            }),
            E = _.saturation,
            p = _.contrast,
            m = 0;
        return f && (m = (0, i.setThemeFlag)(m, i.ThemeContextFlags.MOBILE_REDESIGN_ENABLED)), null != d && f && (m = d.theme === c.ThemeTypes.LIGHT ? (0, i.setThemeFlag)(m, i.ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED) : (0, i.setThemeFlag)(m, i.ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED)), 1 !== E && (m = (0, i.setThemeFlag)(m, i.ThemeContextFlags.REDUCE_SATURATION_ENABLED)), r.createElement(i.RootThemeContextProvider, {
            theme: n,
            flags: m,
            saturation: E,
            contrast: p
        }, t)
    }
}