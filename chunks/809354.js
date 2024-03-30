function(e, t, n) {
    "use strict";

    function r(e, t) {
        for (var n = 0, r = Math.min(e.length, t.length), o = 0; o < r; o++) n |= e.charCodeAt(o) ^ t.charCodeAt(o);
        return 0 === n && e.length === t.length
    }
    n.r(t), n.d(t, {
        constantTimeCompare: function() {
            return r
        }
    })
}