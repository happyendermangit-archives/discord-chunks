function(t, r, n) {
    "use strict";
    var e = n("868822"),
        i = n("418855"),
        o = n("47361");
    t.exports = function(t, r, n) {
        var u, a;
        i(t);
        try {
            if (!(u = o(t, "return"))) {
                if ("throw" === r) throw n;
                return n
            }
            u = e(u, t)
        } catch (t) {
            a = !0, u = t
        }
        if ("throw" === r) throw n;
        if (a) throw u;
        return i(u), n
    }
}