function(t, r, n) {
    "use strict";
    var e = n("974971"),
        o = n("995739"),
        i = n("35179"),
        u = n("874652"),
        f = n("641236")("iterator");
    t.exports = function(t) {
        if (!i(t)) return o(t, f) || o(t, "@@iterator") || u[e(t)]
    }
}