function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("528734"),
        i = n("951516"),
        a = n("964415");

    function o(e) {
        (0, i.default)(1, arguments);
        var t = (0, r.default)(e),
            n = t.getUTCFullYear(),
            o = new Date(0);
        o.setUTCFullYear(n + 1, 0, 4), o.setUTCHours(0, 0, 0, 0);
        var s = (0, a.default)(o),
            u = new Date(0);
        u.setUTCFullYear(n, 0, 4), u.setUTCHours(0, 0, 0, 0);
        var c = (0, a.default)(u);
        return t.getTime() >= s.getTime() ? n + 1 : t.getTime() >= c.getTime() ? n : n - 1
    }
}