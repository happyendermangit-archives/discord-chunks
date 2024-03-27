function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("424421"),
        i = n("767629"),
        a = n("951516");

    function o(e, t) {
        (0, a.default)(2, arguments);
        var n = (0, i.default)(e),
            o = (0, i.default)(t);
        return Math.round((n.getTime() - (0, r.default)(n) - (o.getTime() - (0, r.default)(o))) / 864e5)
    }
}