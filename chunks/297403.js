function(t, r, n) {
    "use strict";
    var e = n("664144"),
        i = n("503486").RegExp;
    t.exports = e(function() {
        var t = i(".", "s");
        return !(t.dotAll && t.exec("\n") && "s" === t.flags)
    })
}