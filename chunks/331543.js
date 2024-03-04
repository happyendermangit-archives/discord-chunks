function(e, t, n) {
    "use strict";
    n("854508"), n("70102");
    var r = n("685266"),
        i = n("555982"),
        o = n("646414"),
        s = n("992070"),
        a = n("855236"),
        c = n("466917"),
        u = n("618258"),
        d = n("898277"),
        l = n("54409"),
        f = n("314970"),
        p = n("264871"),
        h = Object("a"),
        v = "a" !== h[0] || !(0 in h),
        g = f("String.prototype.split");
    e.exports = function(e) {
        var t, n = d(this),
            f = u((v && p(n) ? g(n, "") : n).length);
        if (!c(e)) throw TypeError("Array.prototype.map callback must be a function");
        arguments.length > 1 && (t = arguments[1]);
        for (var h = r(n, f), b = 0; b < f;) {
            var m = l(b);
            if (a(n, m)) {
                var y = i(e, t, [s(n, m), b, n]);
                o(h, m, y)
            }
            b += 1
        }
        return h
    }
}