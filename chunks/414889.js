function(t, r, n) {
    "use strict";
    var e = n("696397").charAt,
        i = n("998270"),
        o = n("515011"),
        u = n("891024"),
        a = n("766739"),
        f = "String Iterator",
        c = o.set,
        s = o.getterFor(f);
    u(String, "String", function(t) {
        c(this, {
            type: f,
            string: i(t),
            index: 0
        })
    }, function() {
        var t, r = s(this),
            n = r.string,
            i = r.index;
        return i >= n.length ? a(void 0, !0) : (t = e(n, i), r.index += t.length, a(t, !1))
    })
}