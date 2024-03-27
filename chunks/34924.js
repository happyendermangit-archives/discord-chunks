function(t, r, n) {
    "use strict";
    var e = n("325008"),
        o = n("936940"),
        i = n("722063");
    t.exports = !e && !o(function() {
        return 7 !== Object.defineProperty(i("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}