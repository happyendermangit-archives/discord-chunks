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
            n = t.getFullYear(),
            a = t.getMonth(),
            o = new Date(0);
        return o.setFullYear(n, a + 1, 0), o.setHours(0, 0, 0, 0), o.getDate()
    }
}