function(e, t, n) {
    "use strict";

    function i(e, t) {
        if (e.length < 2) return [];
        let n = [],
            i = e[0];
        for (let r = 1; r < e.length; r++) {
            let a = e[r];
            n.push(t(i, a)), i = a
        }
        return n
    }
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("653041")
}