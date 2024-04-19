function(e, t, n) {
    "use strict";
    n.r(t);
    t.default = function(e) {
        var t = {};
        return function(n) {
            return void 0 === t[n] && (t[n] = e(n)), t[n]
        }
    }
}