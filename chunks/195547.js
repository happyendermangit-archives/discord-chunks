function(D, u, E) {
    "use strict";

    function C(D, u) {
        if (D.score === u.score) {
            var E, C, F, B, A, l;
            let o = null !== (B = null !== (F = D.sortable) && void 0 !== F ? F : null === (E = D.comparator) || void 0 === E ? void 0 : E.toLocaleLowerCase()) && void 0 !== B ? B : "",
                r = null !== (l = null !== (A = D.sortable) && void 0 !== A ? A : null === (C = u.comparator) || void 0 === C ? void 0 : C.toLocaleLowerCase()) && void 0 !== l ? l : "";
            if (o < r) return -1;
            if (o > r) return 1
        }
        return u.score - D.score
    }
    E.r(u), E.d(u, {
        default: function() {
            return C
        }
    })
}