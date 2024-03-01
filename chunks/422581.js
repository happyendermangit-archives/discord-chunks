function(t, r, n) {
    "use strict";
    var e = n("969708"),
        o = RangeError;
    t.exports = function(t) {
        var r = e(t);
        if (r < 0) throw o("The argument can't be less than 0");
        return r
    }
}