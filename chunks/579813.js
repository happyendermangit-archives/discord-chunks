function(t, r, n) {
    "use strict";
    var e = n("418855"),
        i = n("161323");
    t.exports = function(t, r, n, o) {
        try {
            return o ? r(e(n)[0], n[1]) : r(n)
        } catch (r) {
            i(t, "throw", r)
        }
    }
}