function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("528734"),
        i = n("964415"),
        a = n("16291"),
        o = n("951516");

    function s(e) {
        (0, o.default)(1, arguments);
        var t = (0, r.default)(e);
        return Math.round(((0, i.default)(t).getTime() - (0, a.default)(t).getTime()) / 6048e5) + 1
    }
}