function(e, t, n) {
    "use strict";
    var r = n("149384")(),
        i = n("314970")("Object.prototype.toString"),
        o = function(e) {
            return (!r || !e || "object" != typeof e || !(Symbol.toStringTag in e)) && "[object Arguments]" === i(e)
        },
        s = function(e) {
            return !!o(e) || null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Array]" !== i(e) && "[object Function]" === i(e.callee)
        },
        a = function() {
            return o(arguments)
        }();
    o.isLegacyArguments = s, e.exports = a ? o : s
}