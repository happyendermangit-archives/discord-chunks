function(t, r, n) {
    "use strict";
    var e = n("173850"),
        o = n("526988"),
        i = n("962557"),
        u = e(e.bind);
    t.exports = function(t, r) {
        return o(t), void 0 === r ? t : i ? u(t, r) : function() {
            return t.apply(r, arguments)
        }
    }
}