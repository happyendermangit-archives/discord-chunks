function(e, t, n) {
    "use strict";

    function r(e) {
        return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e)
    }
    n.r(t);
    t.default = function e(t, n) {
        if (t === n) return !0;
        if (null == t || null == n) return !1;
        if (Array.isArray(t)) return Array.isArray(n) && t.length === n.length && t.every(function(t, r) {
            return e(t, n[r])
        });
        if ("object" == typeof t || "object" == typeof n) {
            var i = r(t),
                a = r(n);
            return i !== t || a !== n ? e(i, a) : Object.keys(Object.assign({}, t, n)).every(function(r) {
                return e(t[r], n[r])
            })
        }
        return !1
    }
}