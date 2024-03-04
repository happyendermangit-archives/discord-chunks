function(e, t, n) {
    "use strict";
    n("808653");
    var r, i = n("129752").codes,
        o = i.ERR_MISSING_ARGS,
        s = i.ERR_STREAM_DESTROYED;

    function a(e) {
        if (e) throw e
    }

    function c(e) {
        e()
    }

    function u(e, t) {
        return e.pipe(t)
    }
    e.exports = function() {
        for (var e, t, i = arguments.length, d = Array(i), l = 0; l < i; l++) d[l] = arguments[l];
        var f = (e = d).length && "function" == typeof e[e.length - 1] ? e.pop() : a;
        if (Array.isArray(d[0]) && (d = d[0]), d.length < 2) throw new o("streams");
        var p = d.map(function(e, i) {
            var o, a, u, l, h, v, g, b, m = i < d.length - 1;
            return o = e, a = m, u = i > 0, h = l = function(e) {
                    !t && (t = e), e && p.forEach(c), !m && (p.forEach(c), f(t))
                }, v = !1, l = function() {
                    !v && (v = !0, h.apply(void 0, arguments))
                }, g = !1, o.on("close", function() {
                    g = !0
                }), void 0 === r && (r = n("362796")), r(o, {
                    readable: a,
                    writable: u
                }, function(e) {
                    if (e) return l(e);
                    g = !0, l()
                }), b = !1,
                function(e) {
                    if (!g) {
                        if (!b) {
                            var t;
                            if (b = !0, (t = o).setHeader && "function" == typeof t.abort) return o.abort();
                            if ("function" == typeof o.destroy) return o.destroy();
                            l(e || new s("pipe"))
                        }
                    }
                }
        });
        return d.reduce(u)
    }
}