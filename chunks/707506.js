function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createInterpolator: function() {
            return a
        }
    });
    var r = n("239189"),
        i = n("217348"),
        a = function(e, t, n) {
            if (i.is.fun(e)) return e;
            if (i.is.arr(e)) return a({
                range: e,
                output: t,
                extrapolate: n
            });
            if (i.is.str(e.output[0])) return r.createStringInterpolator(e);
            var o = e.output,
                s = e.range || [0, 1],
                u = e.extrapolateLeft || e.extrapolate || "extend",
                c = e.extrapolateRight || e.extrapolate || "extend",
                l = e.easing || function(e) {
                    return e
                };
            return function(t) {
                var n = function(e, t) {
                    for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
                    return n - 1
                }(t, s);
                return function(e, t, n, r, i, a, o, s, u) {
                    var c = u ? u(e) : e;
                    if (c < t) {
                        if ("identity" === o) return c;
                        "clamp" === o && (c = t)
                    }
                    if (c > n) {
                        if ("identity" === s) return c;
                        "clamp" === s && (c = n)
                    }
                    return r === i ? r : t === n ? e <= t ? r : i : (t === -1 / 0 ? c = -c : n === 1 / 0 ? c -= t : c = (c - t) / (n - t), c = a(c), r === -1 / 0 ? c = -c : i === 1 / 0 ? c += r : c = c * (i - r) + r, c)
                }(t, s[n], s[n + 1], o[n], o[n + 1], l, u, c, e.map)
            }
        }
}