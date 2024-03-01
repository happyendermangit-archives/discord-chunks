function(t, r, n) {
    "use strict";
    var e = n("814026"),
        o = n("664144"),
        i = n("382780");
    t.exports = !e && !o(function() {
        return 7 !== Object.defineProperty(i("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}