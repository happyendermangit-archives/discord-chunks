function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("780384"),
        a = n("607070"),
        o = n("514361"),
        l = n("210887"),
        u = n("231338");

    function d(e) {
        let {
            children: t
        } = e, n = (0, r.useStateFromStores)([l.default], () => l.default.theme), d = (0, r.useStateFromStores)([o.default], () => o.default.gradientPreset), {
            saturation: _,
            contrast: c
        } = (0, r.useStateFromStoresObject)([a.default], () => ({
            saturation: a.default.saturation,
            contrast: a.default.contrast
        })), E = 0;
        return E = (0, s.setThemeFlag)(E, s.ThemeContextFlags.MOBILE_REDESIGN_ENABLED), null != d && (E = d.theme === u.ThemeTypes.LIGHT ? (0, s.setThemeFlag)(E, s.ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED) : (0, s.setThemeFlag)(E, s.ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED)), 1 !== _ && (E = (0, s.setThemeFlag)(E, s.ThemeContextFlags.REDUCE_SATURATION_ENABLED)), (0, i.jsx)(s.RootThemeContextProvider, {
            theme: n,
            flags: E,
            saturation: _,
            contrast: c,
            children: t
        })
    }
}