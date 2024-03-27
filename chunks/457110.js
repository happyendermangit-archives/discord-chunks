function(e, t, n) {
    "use strict";
    var r = n("24033"),
        i = n("622281"),
        a = n("213897");
    e.exports = function(e, t) {
        if (r(e), i(t) && t.constructor === e) return t;
        var n = a.f(e);
        return (0, n.resolve)(t), n.promise
    }
}