function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("386242"),
        a = n("23771"),
        o = n("559610");

    function i(e) {
        (0, o.default)(1, arguments);
        var t = (0, r.default)(e),
            n = t.getFullYear(),
            i = new Date(0);
        i.setFullYear(n + 1, 0, 4), i.setHours(0, 0, 0, 0);
        var s = (0, a.default)(i),
            u = new Date(0);
        u.setFullYear(n, 0, 4), u.setHours(0, 0, 0, 0);
        var l = (0, a.default)(u);
        return t.getTime() >= s.getTime() ? n + 1 : t.getTime() >= l.getTime() ? n : n - 1
    }
}