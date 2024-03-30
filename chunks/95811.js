function(e, t, n) {
    "use strict";
    var r = n("700312").charAt,
        i = n("714050"),
        a = n("644659"),
        o = n("828114"),
        s = n("535586"),
        u = "String Iterator",
        c = a.set,
        l = a.getterFor(u);
    o(String, "String", function(e) {
        c(this, {
            type: u,
            string: i(e),
            index: 0
        })
    }, function() {
        var e, t = l(this),
            n = t.string,
            i = t.index;
        return i >= n.length ? s(void 0, !0) : (e = r(n, i), t.index += e.length, s(e, !1))
    })
}