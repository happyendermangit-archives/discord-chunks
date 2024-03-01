function(t, e, r) {
    "use strict";
    var n = r("859514"),
        o = r("116180"),
        i = r("308274"),
        c = r("109024"),
        u = r("359529"),
        s = r("664144")(function() {
            return 4294967297 !== [].push.call({
                length: 4294967296
            }, 1)
        });
    n({
        target: "Array",
        proto: !0,
        arity: 1,
        forced: s || ! function() {
            try {
                Object.defineProperty([], "length", {
                    writable: !1
                }).push()
            } catch (t) {
                return t instanceof TypeError
            }
        }()
    }, {
        push: function(t) {
            var e = o(this),
                r = i(e),
                n = arguments.length;
            u(r + n);
            for (var s = 0; s < n; s++) e[r] = arguments[s], r++;
            return c(e, r), r
        }
    })
}