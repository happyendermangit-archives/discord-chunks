function(e, t, n) {
    "use strict";

    function l(e, t) {
        if (e.score === t.score) {
            var n, l, r, a, i, u;
            let o = null !== (a = null !== (r = e.sortable) && void 0 !== r ? r : null === (n = e.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== a ? a : "",
                s = null !== (u = null !== (i = e.sortable) && void 0 !== i ? i : null === (l = t.comparator) || void 0 === l ? void 0 : l.toLocaleLowerCase()) && void 0 !== u ? u : "";
            if (o < s) return -1;
            if (o > s) return 1
        }
        return t.score - e.score
    }
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    })
}