function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("782340");

    function s(e) {
        let t = i.default.getLocale().toLowerCase();
        return t in e ? e[t] : e.default
    }
}