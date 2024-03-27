function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("874900");

    function i(e) {
        var t = (0, r.default)(e),
            n = t.overflow,
            i = t.overflowX,
            a = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + a + i)
    }
}