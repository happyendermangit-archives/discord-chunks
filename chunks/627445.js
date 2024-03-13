function(t, r, e) {
    "use strict";
    e("70102"), e("781738");
    t.exports = function(t, r, e, n, o, i, a, u) {
        if (!t) {
            var s;
            if (void 0 === r) s = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var f = [e, n, o, i, a, u],
                    c = 0;
                (s = Error(r.replace(/%s/g, function() {
                    return f[c++]
                }))).name = "Invariant Violation"
            }
            throw s.framesToPop = 1, s
        }
    }
}