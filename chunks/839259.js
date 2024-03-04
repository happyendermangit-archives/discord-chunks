function(e, t, n) {
    "use strict";
    var r = n("911718"),
        i = r("%Object.preventExtensions%", !0),
        o = r("%Object.isExtensible%", !0),
        s = n("226797");
    e.exports = i ? function(e) {
        return !s(e) && o(e)
    } : function(e) {
        return !s(e)
    }
}