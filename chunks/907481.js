function(t, e, s) {
    "use strict";
    s("808653");
    var r, i = s("129752").codes,
        n = i.ERR_MISSING_ARGS,
        c = i.ERR_STREAM_DESTROYED;

    function o(t) {
        if (t) throw t
    }

    function f(t) {
        t()
    }

    function u(t, e) {
        return t.pipe(e)
    }
    t.exports = function() {
        for (var t, e, i = arguments.length, a = Array(i), d = 0; d < i; d++) a[d] = arguments[d];
        var p = (t = a).length && "function" == typeof t[t.length - 1] ? t.pop() : o;
        if (Array.isArray(a[0]) && (a = a[0]), a.length < 2) throw new n("streams");
        var b = a.map(function(t, i) {
            var n, o, u, d, h, l, g, v, x = i < a.length - 1;
            return n = t, o = x, u = i > 0, h = d = function(t) {
                    !e && (e = t), t && b.forEach(f), !x && (b.forEach(f), p(e))
                }, l = !1, d = function() {
                    !l && (l = !0, h.apply(void 0, arguments))
                }, g = !1, n.on("close", function() {
                    g = !0
                }), void 0 === r && (r = s("362796")), r(n, {
                    readable: o,
                    writable: u
                }, function(t) {
                    if (t) return d(t);
                    g = !0, d()
                }), v = !1,
                function(t) {
                    if (!g) {
                        if (!v) {
                            var e;
                            if (v = !0, (e = n).setHeader && "function" == typeof e.abort) return n.abort();
                            if ("function" == typeof n.destroy) return n.destroy();
                            d(t || new c("pipe"))
                        }
                    }
                }
        });
        return a.reduce(u)
    }
}