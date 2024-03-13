function(t, r, e) {
    "use strict";
    var n = e("859514"),
        o = e("116180"),
        i = e("308274"),
        a = e("109024"),
        u = e("53489"),
        s = e("359529"),
        f = 1 !== [].unshift(0);
    n({
        target: "Array",
        proto: !0,
        arity: 1,
        forced: f || ! function() {
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
            var r = o(this),
                e = i(r),
                n = arguments.length;
            if (n) {
                s(e + n);
                for (var f = e; f--;) {
                    var c = f + n;
                    f in r ? r[c] = r[f] : u(r, c)
                }
                for (var l = 0; l < n; l++) r[l] = arguments[l]
            }
            return a(r, e + n)
        }
    })
}