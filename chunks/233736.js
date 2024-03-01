function(e, _, E) {
    "use strict";

    function t(e, _, E, t) {
        if (e === _) return !0;
        let o = Object.keys(e),
            n = Object.keys(_);
        if (o.length !== n.length) return null != t && t("shallowEqual: unequal key lengths ".concat(o.length, " !=== ").concat(n.length)), !1;
        let r = [];
        for (let n = 0; n < o.length; n++) {
            let i = o[n];
            if (e[i] !== _[i] && (null == E || !E.includes(i))) {
                if (null == t) return !1;
                r.push(i)
            }
        }
        return null != t && r.length > 0 && t("shallowEqual: unequal keys: ".concat(r.join(", "))), 0 === r.length
    }

    function o(e, _) {
        return null != _ && e.length === _.length && !e.some((e, E) => _[E] !== e)
    }
    E.r(_), E.d(_, {
        default: function() {
            return t
        },
        areArraysShallowEqual: function() {
            return o
        }
    }), E("424973")
}