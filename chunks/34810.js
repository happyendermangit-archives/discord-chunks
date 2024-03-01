function(t, r, n) {
    "use strict";
    var e = n("664144"),
        i = n("503486").RegExp;
    t.exports = e(function() {
        var t = i("(?<a>b)", "g");
        return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c")
    })
}