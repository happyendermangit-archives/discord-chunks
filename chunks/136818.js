function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("528734"),
        i = n("780264"),
        a = n("951516");

    function o(e) {
        (0, a.default)(1, arguments);
        var t = (0, r.default)(e),
            n = t.getFullYear(),
            o = new Date(0);
        o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0);
        var s = (0, i.default)(o),
            u = new Date(0);
        u.setFullYear(n, 0, 4), u.setHours(0, 0, 0, 0);
        var c = (0, i.default)(u);
        return t.getTime() >= s.getTime() ? n + 1 : t.getTime() >= c.getTime() ? n : n - 1
    }
}