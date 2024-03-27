function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("217224"),
        i = n("528734"),
        a = n("984181"),
        o = n("951516");

    function s(e, t) {
        (0, o.default)(2, arguments);
        var n = (0, i.default)(e),
            s = (0, r.default)(t),
            u = n.getFullYear(),
            c = n.getDate(),
            l = new Date(0);
        l.setFullYear(u, s, 15), l.setHours(0, 0, 0, 0);
        var d = (0, a.default)(l);
        return n.setMonth(s, Math.min(c, d)), n
    }
}