function(e, t, n) {
    "use strict";
    var r = n("390493");
    n("70102");
    var i = n("912065").Buffer,
        o = n.g.crypto || n.g.msCrypto;
    o && o.getRandomValues ? e.exports = function(e, t) {
        if (e > 4294967295) throw RangeError("requested too many random bytes");
        var n = i.allocUnsafe(e);
        if (e > 0) {
            if (e > 65536)
                for (var s = 0; s < e; s += 65536) o.getRandomValues(n.slice(s, s + 65536));
            else o.getRandomValues(n)
        }
        return "function" == typeof t ? r.nextTick(function() {
            t(null, n)
        }) : n
    } : e.exports = function() {
        throw Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
    }
}