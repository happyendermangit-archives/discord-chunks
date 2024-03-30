function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isThemeDark: function() {
            return i
        },
        isThemeLight: function() {
            return o
        }
    });
    var r = n("563090");

    function o(e) {
        return e === r.ThemeTypes.LIGHT
    }

    function i(e) {
        switch (e) {
            case r.ThemeTypes.DARK:
            case r.ThemeTypes.MIDNIGHT:
            case r.ThemeTypes.DARKER:
                return !0;
            default:
                return !1
        }
    }
}