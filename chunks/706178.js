function(e, t, n) {
    "use strict";
    var r = n("444675"),
        i = n("957578").Buffer,
        a = n.g.crypto || n.g.msCrypto;
    a && a.getRandomValues ? e.exports = function(e, t) {
        if (e > 4294967295) throw RangeError("requested too many random bytes");
        var n = i.allocUnsafe(e);
        if (e > 0) {
            if (e > 65536)
                for (var o = 0; o < e; o += 65536) a.getRandomValues(n.slice(o, o + 65536));
            else a.getRandomValues(n)
        }
        return "function" == typeof t ? r.nextTick(function() {
            t(null, n)
        }) : n
    } : e.exports = function() {
        throw Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
    }
}