function(t, r, e) {
    "use strict";
    var n = e("868822"),
        o = e("418855"),
        i = e("47361");
    t.exports = function(t, r, e) {
        var a, u;
        o(t);
        try {
            if (!(a = i(t, "return"))) {
                if ("throw" === r) throw e;
                return e
            }
            a = n(a, t)
        } catch (t) {
            u = !0, a = t
        }
        if ("throw" === r) throw e;
        if (u) throw a;
        return o(a), e
    }
}