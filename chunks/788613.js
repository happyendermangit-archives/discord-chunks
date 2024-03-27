function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("217224"),
        i = n("528734"),
        a = n("951516");

    function o(e, t) {
        (0, a.default)(2, arguments);
        var n = (0, i.default)(e),
            o = (0, r.default)(t);
        if (isNaN(o)) return new Date(NaN);
        if (!o) return n;
        var s = n.getDate(),
            u = new Date(n.getTime());
        return (u.setMonth(n.getMonth() + o + 1, 0), s >= u.getDate()) ? u : (n.setFullYear(u.getFullYear(), u.getMonth(), s), n)
    }
}