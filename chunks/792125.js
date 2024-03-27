function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getThemeClass: function() {
            return r
        }
    });
    var i = n("981631");

    function r(e) {
        if (null == e) return;
        let t = i.ThemeExtends.get(e);
        return null != t ? "theme-".concat(t, " theme-").concat(e) : "theme-".concat(e)
    }
}