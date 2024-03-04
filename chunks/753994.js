function(e, t, n) {
    "use strict";
    var r = n("911718")("%Array%"),
        i = !r.isArray && n("314970")("Object.prototype.toString");
    e.exports = r.isArray || function(e) {
        return "[object Array]" === i(e)
    }
}