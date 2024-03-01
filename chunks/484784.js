function(t, r, n) {
    "use strict";
    var e = n("125359"),
        o = n("541368"),
        i = n("511892"),
        u = n("861850");
    t.exports = function(t, r, n, c) {
        !c && (c = {});
        var s = c.enumerable,
            f = void 0 !== c.name ? c.name : r;
        if (e(n) && i(n, f, c), c.global) s ? t[r] = n : u(r, n);
        else {
            try {
                c.unsafe ? t[r] && (s = !0) : delete t[r]
            } catch (t) {}
            s ? t[r] = n : o.f(t, r, {
                value: n,
                enumerable: !1,
                configurable: !c.nonConfigurable,
                writable: !c.nonWritable
            })
        }
        return t
    }
}