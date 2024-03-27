function(t, r, n) {
    "use strict";
    var e = n("936940");
    t.exports = !e(function() {
        return 7 !== Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    })
}