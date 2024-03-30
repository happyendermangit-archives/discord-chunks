function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getThemeClass: function() {
            return o
        }
    });
    var r = n("281767");

    function o(e) {
        if (null != e) {
            var t = r.ThemeExtends.get(e);
            return null != t ? "theme-".concat(t, " theme-").concat(e) : "theme-".concat(e)
        }
    }
}