function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getThemeClass: function() {
            return s
        }
    });
    var i = n("49111");

    function s(e) {
        if (null == e) return;
        let t = i.ThemeExtends.get(e);
        return null != t ? "theme-".concat(t, " theme-").concat(e) : "theme-".concat(e)
    }
}