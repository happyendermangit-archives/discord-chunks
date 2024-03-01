function(t, r, n) {
    "use strict";
    var e = n("859514"),
        i = n("116180"),
        o = n("308274"),
        u = n("109024"),
        a = n("53489"),
        f = n("359529"),
        c = 1 !== [].unshift(0);
    e({
        target: "Array",
        proto: !0,
        arity: 1,
        forced: c || ! function() {
            try {
                Object.defineProperty([], "length", {
                    writable: !1
                }).unshift()
            } catch (t) {
                return t instanceof TypeError
            }
        }()
    }, {
        unshift: function(t) {
            var r = i(this),
                n = o(r),
                e = arguments.length;
            if (e) {
                f(n + e);
                for (var c = n; c--;) {
                    var s = c + e;
                    c in r ? r[s] = r[c] : a(r, s)
                }
                for (var l = 0; l < e; l++) r[l] = arguments[l]
            }
            return u(r, n + e)
        }
    })
}