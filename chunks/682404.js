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
            n = t.getTime();
        t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
        var a = t.getTime();
        return Math.floor((n - a) / 864e5) + 1
    }
}