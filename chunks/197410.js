function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("386242"),
        a = n("559610");

    function o(e) {
        (0, a.default)(1, arguments);
        var t = (0, r.default)(e),
            n = t.getFullYear(),
            o = t.getMonth(),
            i = new Date(0);
        return i.setFullYear(n, o + 1, 0), i.setHours(0, 0, 0, 0), i.getDate()
    }
}