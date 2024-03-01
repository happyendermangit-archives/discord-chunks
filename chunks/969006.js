function(t, r, n) {
    "use strict";
    var e = n("422581"),
        o = RangeError;
    t.exports = function(t, r) {
        var n = e(t);
        if (n % r) throw o("Wrong offset");
        return n
    }
}