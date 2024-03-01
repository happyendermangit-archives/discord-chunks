function(e, t, n) {
    "use strict";
    var r = n("859514"),
        a = n("470984"),
        o = n("80282"),
        i = n("823493"),
        s = n("539536"),
        u = n("148066"),
        l = n("366483"),
        c = n("16447"),
        d = n("561051"),
        f = n("571503"),
        p = n("585034"),
        h = n("391358"),
        m = n("174669")("toStringTag"),
        y = Error,
        _ = [].push,
        g = function(e, t) {
            var n, r = a(v, this);
            i ? n = i(y(), r ? o(this) : v) : l(n = r ? this : u(v), m, "Error"), void 0 !== t && l(n, "message", h(t)), f(n, g, n.stack, 1), arguments.length > 2 && d(n, arguments[2]);
            var s = [];
            return p(e, _, {
                that: s
            }), l(n, "errors", s), n
        };
    i ? i(g, y) : s(g, y, {
        name: !0
    });
    var v = g.prototype = u(y.prototype, {
        constructor: c(1, g),
        message: c(1, ""),
        name: c(1, "AggregateError")
    });
    r({
        global: !0,
        constructor: !0,
        arity: 2
    }, {
        AggregateError: g
    })
}