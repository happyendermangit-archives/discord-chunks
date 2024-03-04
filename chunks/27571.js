function(e, t, n) {
    "use strict";

    function i(e, t) {
        let n = 0,
            i = Math.min(e.length, t.length);
        for (let s = 0; s < i; s++) n |= e.charCodeAt(s) ^ t.charCodeAt(s);
        return 0 === n && e.length === t.length
    }
    n.r(t), n.d(t, {
        constantTimeCompare: function() {
            return i
        }
    })
}