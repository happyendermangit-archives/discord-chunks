function(t, r, e) {
    "use strict";
    var n = e("696397").charAt,
        o = e("998270"),
        i = e("515011"),
        a = e("891024"),
        u = e("766739"),
        s = "String Iterator",
        f = i.set,
        c = i.getterFor(s);
    a(String, "String", function(t) {
        f(this, {
            type: s,
            string: o(t),
            index: 0
        })
    }, function() {
        var t, r = c(this),
            e = r.string,
            o = r.index;
        return o >= e.length ? u(void 0, !0) : (t = n(e, o), r.index += t.length, u(t, !1))
    })
}