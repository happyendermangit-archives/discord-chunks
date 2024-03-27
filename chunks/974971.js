function(t, e, n) {
    "use strict";
    var r = n("525305"),
        i = n("354848"),
        a = n("332916"),
        o = n("641236")("toStringTag"),
        s = Object,
        u = "Arguments" === a(function() {
            return arguments
        }()),
        c = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        };
    t.exports = r ? a : function(t) {
        var e, n, r;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = c(e = s(t), o)) ? n : u ? a(e) : "Object" === (r = a(e)) && i(e.callee) ? "Arguments" : r
    }
}