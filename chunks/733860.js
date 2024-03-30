function(e, t, n) {
    "use strict";
    var r = n("147018"),
        i = n("339718"),
        a = n("49693"),
        o = n("610148"),
        s = n("708517"),
        u = n("886960"),
        c = 1 !== [].unshift(0);
    r({
        target: "Array",
        proto: !0,
        arity: 1,
        forced: c || ! function() {
            try {
                Object.defineProperty([], "length", {
                    writable: !1
                }).unshift()
            } catch (e) {
                return e instanceof TypeError
            }
        }()
    }, {
        unshift: function(e) {
            var t = i(this),
                n = a(t),
                r = arguments.length;
            if (r) {
                u(n + r);
                for (var c = n; c--;) {
                    var l = c + r;
                    c in t ? t[l] = t[c] : s(t, l)
                }
                for (var d = 0; d < r; d++) t[d] = arguments[d]
            }
            return o(t, n + r)
        }
    })
}