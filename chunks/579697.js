function(t, r, n) {
    "use strict";
    var e = n("681802"),
        o = n("47361"),
        i = n("551544"),
        u = n("381250"),
        f = n("174669")("iterator");
    t.exports = function(t) {
        if (!i(t)) return o(t, f) || o(t, "@@iterator") || u[e(t)]
    }
}