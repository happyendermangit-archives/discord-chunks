function(t, r, n) {
    "use strict";
    var e = n("161581"),
        o = n("622281"),
        i = e.document,
        u = o(i) && o(i.createElement);
    t.exports = function(t) {
        return u ? i.createElement(t) : {}
    }
}