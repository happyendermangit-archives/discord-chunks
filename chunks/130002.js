function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("386242"),
        a = n("559610");

    function o(e) {
        (0, a.default)(1, arguments);
        var t = (0, r.default)(e),
            n = t.getUTCDay();
        return t.setUTCDate(t.getUTCDate() - ((n < 1 ? 7 : 0) + n - 1)), t.setUTCHours(0, 0, 0, 0), t
    }
}