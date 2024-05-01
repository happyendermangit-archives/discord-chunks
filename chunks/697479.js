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
                let a = i + r >>> 1;
                0 > n(e[a], t) ? i = a + 1 : r = a
            }
            return i
        }(e, t, n);
        e.splice(i, 0, t)
    }
}