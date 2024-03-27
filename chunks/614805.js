function(e, t, n) {
    "use strict";
    var r, i = n("531478").codes,
        a = i.ERR_MISSING_ARGS,
        o = i.ERR_STREAM_DESTROYED;

    function s(e) {
        if (e) throw e
    }

    function u(e) {
        e()
    }

    function c(e, t) {
        return e.pipe(t)
    }
    e.exports = function() {
        for (var e, t, i = arguments.length, l = Array(i), d = 0; d < i; d++) l[d] = arguments[d];
        var f = (e = l).length && "function" == typeof e[e.length - 1] ? e.pop() : s;
        if (Array.isArray(l[0]) && (l = l[0]), l.length < 2) throw new a("streams");
        var p = l.map(function(e, i) {
            var a, s, c, d, h, m, g, _, b = i < l.length - 1;
            return a = e, s = b, c = i > 0, h = d = function(e) {
                    !t && (t = e), e && p.forEach(u), !b && (p.forEach(u), f(t))
                }, m = !1, d = function() {
                    !m && (m = !0, h.apply(void 0, arguments))
                }, g = !1, a.on("close", function() {
                    g = !0
                }), void 0 === r && (r = n("133495")), r(a, {
                    readable: s,
                    writable: c
                }, function(e) {
                    if (e) return d(e);
                    g = !0, d()
                }), _ = !1,
                function(e) {
                    if (!g) {
                        if (!_) {
                            var t;
                            if (_ = !0, (t = a).setHeader && "function" == typeof t.abort) return a.abort();
                            if ("function" == typeof a.destroy) return a.destroy();
                            d(e || new o("pipe"))
                        }
                    }
                }
        });
        return l.reduce(c)
    }
}