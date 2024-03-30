function(t, r, n) {
    "use strict";
    var e = n("147018"),
        o = n("339718"),
        i = n("49693"),
        u = n("610148"),
        f = n("886960"),
        c = n("936940")(function() {
            return 4294967297 !== [].push.call({
                length: 4294967296
            }, 1)
        });
    e({
        target: "Array",
        proto: !0,
        arity: 1,
        forced: c || ! function() {
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
            var r = o(this),
                n = i(r),
                e = arguments.length;
            f(n + e);
            for (var c = 0; c < e; c++) r[n] = arguments[c], n++;
            return u(r, n), n
        }
    })
}