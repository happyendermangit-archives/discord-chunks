function(t, e, s) {
    "use strict";
    s("854508"), s("70102");
    var r = s("685266"),
        i = s("555982"),
        n = s("646414"),
        c = s("992070"),
        o = s("855236"),
        f = s("466917"),
        u = s("618258"),
        a = s("898277"),
        d = s("54409"),
        p = s("314970"),
        b = s("264871"),
        h = Object("a"),
        l = "a" !== h[0] || !(0 in h),
        g = p("String.prototype.split");
    t.exports = function(t) {
        var e, s = a(this),
            p = u((l && b(s) ? g(s, "") : s).length);
        if (!f(t)) throw TypeError("Array.prototype.map callback must be a function");
        arguments.length > 1 && (e = arguments[1]);
        for (var h = r(s, p), v = 0; v < p;) {
            var x = d(v);
            if (o(s, x)) {
                var m = i(t, e, [c(s, x), v, s]);
                n(h, x, m)
            }
            v += 1
        }
        return h
    }
}