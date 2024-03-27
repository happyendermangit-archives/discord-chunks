function(e, t, n) {
    "use strict";

    function r(e) {
        return function(t) {
            var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = r.width,
                a = i && e.matchPatterns[i] || e.matchPatterns[e.defaultMatchWidth],
                o = t.match(a);
            if (!o) return null;
            var s = o[0],
                u = i && e.parsePatterns[i] || e.parsePatterns[e.defaultParseWidth],
                c = Array.isArray(u) ? function(e, t) {
                    for (var n = 0; n < e.length; n++)
                        if (t(e[n])) return n
                }(u, function(e) {
                    return e.test(s)
                }) : function(e, t) {
                    for (var n in e)
                        if (e.hasOwnProperty(n) && t(e[n])) return n
                }(u, function(e) {
                    return e.test(s)
                });
            return n = e.valueCallback ? e.valueCallback(c) : c, {
                value: n = r.valueCallback ? r.valueCallback(n) : n,
                rest: t.slice(s.length)
            }
        }
    }
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    })
}