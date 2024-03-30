function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isThemeDark: function() {
            return s
        },
        isThemeLight: function() {
            return r
        }
    });
    var i = n("231338");

    function r(e) {
        return e === i.ThemeTypes.LIGHT
    }

    function s(e) {
        switch (e) {
            case i.ThemeTypes.DARK:
            case i.ThemeTypes.MIDNIGHT:
            case i.ThemeTypes.DARKER:
                return !0;
            default:
                return !1
        }
    }
}