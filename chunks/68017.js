function(e, t, n) {
    "use strict";
    t._reverse = function(e) {
        let t = {};
        return Object.keys(e).forEach(function(n) {
            (0 | n) == n && (n |= 0);
            let r = e[n];
            t[r] = n
        }), t
    }, t.der = n("335036")
}