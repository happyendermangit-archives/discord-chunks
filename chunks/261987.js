function(t, e, n) {
    "use strict";
    var r = n("545576"),
        i = n("740362"),
        a = n("251069"),
        o = n("838957"),
        s = n("276321"),
        u = n("381740"),
        c = n("504559"),
        l = n("95948"),
        d = n("892725"),
        f = n("668788"),
        p = n("154154"),
        h = n("325008"),
        _ = n("992051");
    t.exports = function(t, e, n, g) {
        var m = "stackTraceLimit",
            y = g ? 2 : 1,
            v = t.split("."),
            b = v[v.length - 1],
            E = r.apply(null, v);
        if (E) {
            var S = E.prototype;
            if (!_ && i(S, "cause") && delete S.cause, !n) return E;
            var w = r("Error"),
                T = e(function(t, e) {
                    var n = d(g ? e : t, void 0),
                        r = g ? new E(t) : new E;
                    return void 0 !== n && a(r, "message", n), p(r, T, r.stack, 2), this && o(S, this) && l(r, this, T), arguments.length > y && f(r, arguments[y]), r
                });
            if (T.prototype = S, "Error" !== b ? s ? s(T, w) : u(T, w, {
                    name: !0
                }) : h && m in E && (c(T, E, m), c(T, E, "prepareStackTrace")), u(T, E), !_) try {
                S.name !== b && a(S, "name", b), S.constructor = T
            } catch (t) {}
            return T
        }
    }
}