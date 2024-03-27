function(e, t, n) {
    "use strict";
    var r = n("81021"),
        i = r("%Object.preventExtensions%", !0),
        a = r("%Object.isExtensible%", !0),
        o = n("814277");
    e.exports = i ? function(e) {
        return !o(e) && a(e)
    } : function(e) {
        return !o(e)
    }
}