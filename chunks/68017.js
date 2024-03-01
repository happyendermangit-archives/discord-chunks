function(t, e, s) {
    "use strict";
    e._reverse = function(t) {
        let e = {};
        return Object.keys(t).forEach(function(s) {
            (0 | s) == s && (s |= 0);
            let r = t[s];
            e[r] = s
        }), e
    }, e.der = s("335036")
}