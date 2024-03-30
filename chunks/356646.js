function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("470079");

    function o(e) {
        var t = (0, r.useRef)(null),
            n = (0, r.useRef)(null);
        return !Object.is(e, n.current) && (t.current = n.current, n.current = e), t.current
    }
}