function(e, t, n) {
    "use strict";

    function i(e, t, n, i) {
        if (e === t) return !0;
        if (void 0 === e || void 0 === t) return e === t;
        let r = Object.keys(e),
            s = Object.keys(t);
        if (r.length !== s.length) return null != i && i("shallowEqual: unequal key lengths ".concat(r.length, " !=== ").concat(s.length)), !1;
        let a = [];
        for (let s = 0; s < r.length; s++) {
            let o = r[s];
            if (e[o] !== t[o] && (null == n || !n.includes(o))) {
                if (null == i) return !1;
                a.push(o)
            }
        }
        return null != i && a.length > 0 && i("shallowEqual: unequal keys: ".concat(a.join(", "))), 0 === a.length
    }

    function r(e, t) {
        return null != t && e.length === t.length && !e.some((e, n) => t[n] !== e)
    }
    n.r(t), n.d(t, {
        areArraysShallowEqual: function() {
            return r
        },
        default: function() {
            return i
        }
    }), n("653041")
}