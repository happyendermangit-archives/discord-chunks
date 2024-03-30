function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("941504");

    function o(e) {
        var t = r.default.getLocale().toLowerCase();
        return t in e ? e[t] : e.default
    }
}