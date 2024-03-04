function(e, t, n) {
    "use strict";
    var r = n("931472");
    e.exports = function() {
        return String.prototype.trim && "​" === "​".trim() && "᠎" === "᠎".trim() && "_᠎" === "_᠎".trim() && "᠎_" === "᠎_".trim() ? String.prototype.trim : r
    }
}