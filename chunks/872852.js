function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("386242"),
        a = n("559610"),
        o = n("130002");

    function i(e) {
        (0, a.default)(1, arguments);
        var t = (0, r.default)(e),
            n = t.getUTCFullYear(),
            i = new Date(0);
        i.setUTCFullYear(n + 1, 0, 4), i.setUTCHours(0, 0, 0, 0);
        var s = (0, o.default)(i),
            u = new Date(0);
        u.setUTCFullYear(n, 0, 4), u.setUTCHours(0, 0, 0, 0);
        var l = (0, o.default)(u);
        return t.getTime() >= s.getTime() ? n + 1 : t.getTime() >= l.getTime() ? n : n - 1
    }
}