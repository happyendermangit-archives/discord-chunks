function(t, e, s) {
    "use strict";
    var r = s("911718")("%Array%"),
        i = !r.isArray && s("314970")("Object.prototype.toString");
    t.exports = r.isArray || function(t) {
        return "[object Array]" === i(t)
    }
}