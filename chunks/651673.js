function(t, e, r) {
    "use strict";
    var n = r("926515"),
        i = r("24033"),
        o = r("354848"),
        u = r("332916"),
        c = r("213265"),
        a = TypeError;
    t.exports = function(t, e) {
        var r = t.exec;
        if (o(r)) {
            var s = n(r, t, e);
            return null !== s && i(s), s
        }
        if ("RegExp" === u(t)) return n(c, t, e);
        throw a("RegExp#exec called on incompatible receiver")
    }
}