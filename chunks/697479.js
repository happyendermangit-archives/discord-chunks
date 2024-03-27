function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        insert: function() {
            return i
        }
    });

    function i(e, t, n) {
        let i = function(e, t, n) {
            let i = 0,
                r = e.length;
            for (; i < r;) {
                let s = i + r >>> 1;
                0 > n(e[s], t) ? i = s + 1 : r = s
            }
            return i
        }(e, t, n);
        e.splice(i, 0, t)
    }
}