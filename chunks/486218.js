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
            n = t.getMonth();
        return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
    }
}