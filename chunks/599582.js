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
        return isNaN(o) ? new Date(NaN) : o ? (n.setDate(n.getDate() + o), n) : n
    }
}