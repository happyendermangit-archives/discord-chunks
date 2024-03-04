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
                s = e.length;
            for (; i < s;) {
                let r = i + s >>> 1;
                0 > n(e[r], t) ? i = r + 1 : s = r
            }
            return i
        }(e, t, n);
        e.splice(i, 0, t)
    }
}