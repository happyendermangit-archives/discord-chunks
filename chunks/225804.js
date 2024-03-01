function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (null == e) throw TypeError("assign requires that input parameter not be null or undefined");
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e
    }
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("70102")
}