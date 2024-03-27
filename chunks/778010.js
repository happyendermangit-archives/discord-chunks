function(e, t, n) {
    "use strict";

    function r(e, t) {
        return null === t ? null === e : Array.isArray(e) ? e.some(function(e) {
            return e === t
        }) : e === t
    }
    n.r(t), n.d(t, {
        matchesType: function() {
            return r
        }
    })
}