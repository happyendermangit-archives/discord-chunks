function(t, e, r) {
    "use strict";
    var n = r("936940"),
        i = r("161581").RegExp;
    t.exports = n(function() {
        var t = i(".", "s");
        return !(t.dotAll && t.exec("\n") && "s" === t.flags)
    })
}