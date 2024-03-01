function(e, t, n) {
    "use strict";
    var r = n("149384")(),
        a = n("314970")("Object.prototype.toString"),
        i = function(e) {
            return (!r || !e || "object" != typeof e || !(Symbol.toStringTag in e)) && "[object Arguments]" === a(e)
        },
        o = function(e) {
            return !!i(e) || null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Array]" !== a(e) && "[object Function]" === a(e.callee)
        },
        s = function() {
            return i(arguments)
        }();
    i.isLegacyArguments = o, e.exports = s ? i : o
}