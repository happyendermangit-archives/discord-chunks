function(e, t, n) {
    "use strict";

    function i(e, t) {
        if (e.length < 2) return [];
        let n = [],
            i = e[0];
        for (let s = 1; s < e.length; s++) {
            let r = e[s];
            n.push(t(i, r)), i = r
        }
        return n
    }
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("424973")
}