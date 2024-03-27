function(e, t, n) {
    "use strict";
    var r = n("640767"),
        i = n("393020"),
        a = n("493883"),
        o = n("414916"),
        s = n("383718"),
        u = n("713720"),
        c = n("1213"),
        l = n("124084"),
        d = n("581527"),
        f = n("903390"),
        p = n("163494"),
        h = Object("a"),
        m = "a" !== h[0] || !(0 in h),
        g = f("String.prototype.split");
    e.exports = function(e) {
        var t, n = l(this),
            f = c((m && p(n) ? g(n, "") : n).length);
        if (!u(e)) throw TypeError("Array.prototype.map callback must be a function");
        arguments.length > 1 && (t = arguments[1]);
        for (var h = r(n, f), _ = 0; _ < f;) {
            var b = d(_);
            if (s(n, b)) {
                var v = i(e, t, [o(n, b), _, n]);
                a(h, b, v)
            }
            _ += 1
        }
        return h
    }
}