function(t, r, n) {
    "use strict";
    var e = n("566885"),
        o = n("470592"),
        i = n("339718"),
        u = n("49693"),
        f = function(t) {
            var r = 1 === t;
            return function(n, f, c) {
                for (var a, s = i(n), y = o(s), h = e(f, c), p = u(y); p-- > 0;)
                    if (h(a = y[p], p, s)) switch (t) {
                        case 0:
                            return a;
                        case 1:
                            return p
                    }
                return r ? -1 : void 0
            }
        };
    t.exports = {
        findLast: f(0),
        findLastIndex: f(1)
    }
}