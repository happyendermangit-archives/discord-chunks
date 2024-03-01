function(t, e, r) {
    "use strict";
    var n = r("664144");
    t.exports = !n(function() {
        function t() {}
        return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    })
}