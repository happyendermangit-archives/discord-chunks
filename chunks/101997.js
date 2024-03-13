function(t, r, e) {
    "use strict";
    var n = e("859514"),
        o = e("503486"),
        i = e("434978"),
        a = e("16447"),
        u = e("541368").f,
        s = e("59393"),
        f = e("88052"),
        c = e("688358"),
        l = e("391358"),
        h = e("60683"),
        p = e("350142"),
        v = e("814026"),
        d = e("140925"),
        g = "DOMException",
        Error = i("Error"),
        b = i(g),
        y = function() {
            f(this, m);
            var t = arguments.length,
                r = l(t < 1 ? void 0 : arguments[0]),
                e = l(t < 2 ? void 0 : arguments[1], "Error"),
                n = new b(r, e),
                o = Error(r);
            return o.name = g, u(n, "stack", a(1, p(o.stack, 1))), c(n, this, y), n
        },
        m = y.prototype = b.prototype,
        w = "stack" in Error(g),
        _ = "stack" in new b(1, 2),
        k = b && v && Object.getOwnPropertyDescriptor(o, g),
        x = !!k && !(k.writable && k.configurable),
        E = w && !x && !_;
    n({
        global: !0,
        constructor: !0,
        forced: d || E
    }, {
        DOMException: E ? y : b
    });
    var S = i(g),
        M = S.prototype;
    if (M.constructor !== S) {
        for (var R in !d && u(M, "constructor", a(1, S)), h)
            if (s(h, R)) {
                var O = h[R],
                    j = O.s;
                !s(S, j) && u(S, j, a(6, O.c))
            }
    }
}