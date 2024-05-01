function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        a = n("780384"),
        s = n("607070"),
        o = n("514361"),
        l = n("57132"),
        u = n("210887"),
        d = n("231338");

    function _(e) {
        let {
            children: t
        } = e, n = (0, r.useStateFromStores)([u.default], () => u.default.theme), _ = (0, l.useInMainTabsExperiment)(), c = (0, r.useStateFromStores)([o.default], () => o.default.gradientPreset), {
            saturation: E,
            contrast: I
        } = (0, r.useStateFromStoresObject)([s.default], () => ({
            saturation: s.default.saturation,
            contrast: s.default.contrast
        })), T = 0;
        return _ && (T = (0, a.setThemeFlag)(T, a.ThemeContextFlags.MOBILE_REDESIGN_ENABLED)), null != c && (T = c.theme === d.ThemeTypes.LIGHT ? (0, a.setThemeFlag)(T, a.ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED) : (0, a.setThemeFlag)(T, a.ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED)), 1 !== E && (T = (0, a.setThemeFlag)(T, a.ThemeContextFlags.REDUCE_SATURATION_ENABLED)), (0, i.jsx)(a.RootThemeContextProvider, {
            theme: n,
            flags: T,
            saturation: E,
            contrast: I,
            children: t
        })
    }
}