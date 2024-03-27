function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("689938");

    function r(e) {
        let t = i.default.getLocale().toLowerCase();
        return t in e ? e[t] : e.default
    }
}