function(t, r, n) {
    "use strict";
    var e = n("545576"),
        o = n("581031"),
        i = n("537443"),
        u = n("279129"),
        c = n("24033"),
        s = o([].concat);
    t.exports = e("Reflect", "ownKeys") || function(t) {
        var r = i.f(c(t)),
            n = u.f;
        return n ? s(r, n(t)) : r
    }
}