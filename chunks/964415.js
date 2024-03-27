function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("528734"),
        i = n("951516");

    function a(e) {
        (0, i.default)(1, arguments);
        var t = (0, r.default)(e),
            n = t.getUTCDay();
        return t.setUTCDate(t.getUTCDate() - ((n < 1 ? 7 : 0) + n - 1)), t.setUTCHours(0, 0, 0, 0), t
    }
}