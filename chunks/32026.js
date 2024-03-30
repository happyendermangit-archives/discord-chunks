function(t, r, n) {
    "use strict";
    var e = n("161581"),
        o = n("926515"),
        i = n("192291"),
        u = n("49693"),
        f = n("18316"),
        c = n("339718"),
        a = n("936940"),
        s = e.RangeError,
        y = e.Int8Array,
        h = y && y.prototype,
        p = h && h.set,
        v = i.aTypedArray,
        d = i.exportTypedArrayMethod,
        l = !a(function() {
            var t = new Uint8ClampedArray(2);
            return o(p, t, {
                length: 1,
                0: 3
            }, 1), 3 !== t[1]
        }),
        g = l && i.NATIVE_ARRAY_BUFFER_VIEWS && a(function() {
            var t = new y(2);
            return t.set(1), t.set("2", 1), 0 !== t[0] || 2 !== t[1]
        });
    d("set", function(t) {
        v(this);
        var r = f(arguments.length > 1 ? arguments[1] : void 0, 1),
            n = c(t);
        if (l) return o(p, this, n, r);
        var e = this.length,
            i = u(n),
            a = 0;
        if (i + r > e) throw s("Wrong length");
        for (; a < i;) this[r + a] = n[a++]
    }, !l || g)
}