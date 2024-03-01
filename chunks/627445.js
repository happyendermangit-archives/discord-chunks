function(t, r, n) {
    "use strict";
    n("70102"), n("781738");
    t.exports = function(t, r, n, e, i, o, u, a) {
        if (!t) {
            var f;
            if (void 0 === r) f = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var c = [n, e, i, o, u, a],
                    s = 0;
                (f = Error(r.replace(/%s/g, function() {
                    return c[s++]
                }))).name = "Invariant Violation"
            }
            throw f.framesToPop = 1, f
        }
    }
}