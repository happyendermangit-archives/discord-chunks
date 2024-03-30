function(e, t, n) {
    "use strict";
    var r = n("938507"),
        i = TypeError;
    e.exports = function(e, t) {
        if (!delete e[t]) throw i("Cannot delete property " + r(t) + " of " + r(e))
    }
}