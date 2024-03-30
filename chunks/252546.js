function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        if (e === t) return !0;
        if (void 0 === e || void 0 === t) return e === t;
        var o = Object.keys(e),
            i = Object.keys(t);
        if (o.length !== i.length) return null != r && r("shallowEqual: unequal key lengths ".concat(o.length, " !=== ").concat(i.length)), !1;
        for (var a = [], u = 0; u < o.length; u++) {
            var s = o[u];
            if (e[s] !== t[s] && (null == n || !n.includes(s))) {
                if (null == r) return !1;
                a.push(s)
            }
        }
        return null != r && a.length > 0 && r("shallowEqual: unequal keys: ".concat(a.join(", "))), 0 === a.length
    }

    function o(e, t) {
        return null != t && e.length === t.length && !e.some(function(e, n) {
            return t[n] !== e
        })
    }
    n.r(t), n.d(t, {
        areArraysShallowEqual: function() {
            return o
        },
        default: function() {
            return r
        }
    })
}