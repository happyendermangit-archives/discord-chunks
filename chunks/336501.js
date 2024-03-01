function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("567703"),
        a = n("386242"),
        o = n("687419"),
        i = n("559610");

    function s(e, t, n) {
        (0, i.default)(2, arguments);
        var s = (0, a.default)(e),
            u = (0, r.default)(t),
            l = (0, o.default)(s, n) - u;
        return s.setUTCDate(s.getUTCDate() - 7 * l), s
    }
}