function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("528734"),
        i = n("780603"),
        a = n("187755"),
        o = n("951516");

    function s(e, t) {
        (0, o.default)(1, arguments);
        var n = (0, r.default)(e);
        return Math.round(((0, i.default)(n, t).getTime() - (0, a.default)(n, t).getTime()) / 6048e5) + 1
    }
}