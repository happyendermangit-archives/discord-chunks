function(e, t, n) {
    "use strict";
    var r = n("81021")("%Array%"),
        i = !r.isArray && n("903390")("Object.prototype.toString");
    e.exports = r.isArray || function(e) {
        return "[object Array]" === i(e)
    }
}