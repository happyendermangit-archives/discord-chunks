function(t) {
    "use strict";
    t.exports = function(t, e, n, r, i, a, o, s) {
        if (!t) {
            var u;
            if (void 0 === e) u = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var c = [n, r, i, a, o, s],
                    l = 0;
                (u = Error(e.replace(/%s/g, function() {
                    return c[l++]
                }))).name = "Invariant Violation"
            }
            throw u.framesToPop = 1, u
        }
    }
}