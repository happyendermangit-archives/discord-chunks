function(t, e, n) {
    "use strict";

    function r(t) {
        return t.valueOf ? t.valueOf() : Object.prototype.valueOf.call(t)
    }
    n.r(e), n.d(e, {
        default: function() {
            return i
        }
    });
    var i = function t(e, n) {
        if (e === n) return !0;
        if (null == e || null == n) return !1;
        if (Array.isArray(e)) return Array.isArray(n) && e.length === n.length && e.every(function(e, r) {
            return t(e, n[r])
        });
        if ("object" == typeof e || "object" == typeof n) {
            var i = r(e),
                o = r(n);
            return i !== e || o !== n ? t(i, o) : Object.keys(Object.assign({}, e, n)).every(function(r) {
                return t(e[r], n[r])
            })
        }
        return !1
    }
}