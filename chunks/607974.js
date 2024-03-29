function(e, t, n) {
    "use strict";
    var r = n("703825")(),
        i = n("192853")("Object.prototype.toString"),
        a = function(e) {
            return (!r || !e || "object" != typeof e || !(Symbol.toStringTag in e)) && "[object Arguments]" === i(e)
        },
        o = function(e) {
            return !!a(e) || null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Array]" !== i(e) && "[object Function]" === i(e.callee)
        },
        s = function() {
            return a(arguments)
        }();
    a.isLegacyArguments = o, e.exports = s ? a : o
}