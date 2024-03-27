function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("217224"),
        i = n("528734"),
        a = n("217764"),
        o = n("951516");

    function s(e, t, n) {
        (0, o.default)(2, arguments);
        var s = (0, i.default)(e),
            u = (0, r.default)(t),
            c = (0, a.default)(s, n) - u;
        return s.setUTCDate(s.getUTCDate() - 7 * c), s
    }
}