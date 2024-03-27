function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("217224"),
        i = n("528734"),
        a = n("138512"),
        o = n("951516");

    function s(e, t) {
        (0, o.default)(2, arguments);
        var n = (0, i.default)(e),
            s = (0, r.default)(t),
            u = Math.floor(n.getMonth() / 3) + 1;
        return (0, a.default)(n, n.getMonth() + 3 * (s - u))
    }
}