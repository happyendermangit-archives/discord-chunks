function(t, e, s) {
    "use strict";
    var r = s("390493");
    s("70102");
    var i = s("912065").Buffer,
        n = s.g.crypto || s.g.msCrypto;
    n && n.getRandomValues ? t.exports = function(t, e) {
        if (t > 4294967295) throw RangeError("requested too many random bytes");
        var s = i.allocUnsafe(t);
        if (t > 0) {
            if (t > 65536)
                for (var c = 0; c < t; c += 65536) n.getRandomValues(s.slice(c, c + 65536));
            else n.getRandomValues(s)
        }
        return "function" == typeof e ? r.nextTick(function() {
            e(null, s)
        }) : s
    } : t.exports = function() {
        throw Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
    }
}