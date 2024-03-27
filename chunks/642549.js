function(e, t, n) {
    "use strict";
    var r = n("147018"),
        i = n("161581"),
        a = n("545576"),
        o = n("879"),
        s = n("97131").f,
        u = n("740362"),
        c = n("603528"),
        l = n("95948"),
        d = n("892725"),
        f = n("33995"),
        p = n("905145"),
        h = n("325008"),
        m = n("992051"),
        g = "DOMException",
        _ = a("Error"),
        b = a(g),
        v = function() {
            c(this, y);
            var e = arguments.length,
                t = d(e < 1 ? void 0 : arguments[0]),
                n = d(e < 2 ? void 0 : arguments[1], "Error"),
                r = new b(t, n),
                i = _(t);
            return i.name = g, s(r, "stack", o(1, p(i.stack, 1))), l(r, this, v), r
        },
        y = v.prototype = b.prototype,
        E = "stack" in _(g),
        S = "stack" in new b(1, 2),
        x = b && h && Object.getOwnPropertyDescriptor(i, g),
        w = !!x && !(x.writable && x.configurable),
        T = E && !w && !S;
    r({
        global: !0,
        constructor: !0,
        forced: m || T
    }, {
        DOMException: T ? v : b
    });
    var C = a(g),
        D = C.prototype;
    if (D.constructor !== C) {
        for (var O in !m && s(D, "constructor", o(1, C)), f)
            if (u(f, O)) {
                var M = f[O],
                    A = M.s;
                !u(C, A) && s(C, A, o(6, M.c))
            }
    }
}