function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (e.length < 2) return [];
        for (var n = [], r = e[0], o = 1; o < e.length; o++) {
            var i = e[o];
            n.push(t(r, i)), r = i
        }
        return n
    }
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    })
}