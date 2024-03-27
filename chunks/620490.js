function(l, o, r) {
    "use strict";

    function n(l, o) {
        if (l.score === o.score) {
            var r, n, t, i, e, u;
            let O = null !== (i = null !== (t = l.sortable) && void 0 !== t ? t : null === (r = l.comparator) || void 0 === r ? void 0 : r.toLocaleLowerCase()) && void 0 !== i ? i : "",
                c = null !== (u = null !== (e = l.sortable) && void 0 !== e ? e : null === (n = o.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== u ? u : "";
            if (O < c) return -1;
            if (O > c) return 1
        }
        return o.score - l.score
    }
    r.r(o), r.d(o, {
        default: function() {
            return n
        }
    })
}