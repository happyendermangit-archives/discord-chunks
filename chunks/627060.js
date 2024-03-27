function(e, t, n) {
    "use strict";
    var r = n("24033"),
        i = n("776245");
    e.exports = function(e, t, n, a) {
        try {
            return a ? t(r(n)[0], n[1]) : t(n)
        } catch (t) {
            i(e, "throw", t)
        }
    }
}