function(l, o, r) {
    "use strict";

    function n(l, o) {
        if (l.score === o.score) {
            var r, n, t, e, i, u, a = null !== (e = null !== (t = l.sortable) && void 0 !== t ? t : null === (r = l.comparator) || void 0 === r ? void 0 : r.toLocaleLowerCase()) && void 0 !== e ? e : "",
                c = null !== (u = null !== (i = l.sortable) && void 0 !== i ? i : null === (n = o.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== u ? u : "";
            if (a < c) return -1;
            if (a > c) return 1
        }
        return o.score - l.score
    }
    r.r(o), r.d(o, {
        default: function() {
            return n
        }
    })
}