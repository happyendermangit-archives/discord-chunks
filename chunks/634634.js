function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("884691");

    function r(e) {
        let t = (0, i.useRef)(null),
            n = (0, i.useRef)(null);
        return !Object.is(e, n.current) && (t.current = n.current, n.current = e), t.current
    }
}