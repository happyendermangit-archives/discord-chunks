function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("567703"),
        a = n("386242"),
        o = n("559610");

    function i(e, t) {
        (0, o.default)(2, arguments);
        var n = (0, a.default)(e),
            i = (0, r.default)(t);
        if (isNaN(i)) return new Date(NaN);
        if (!i) return n;
        var s = n.getDate(),
            u = new Date(n.getTime());
        return (u.setMonth(n.getMonth() + i + 1, 0), s >= u.getDate()) ? u : (n.setFullYear(u.getFullYear(), u.getMonth(), s), n)
    }
}