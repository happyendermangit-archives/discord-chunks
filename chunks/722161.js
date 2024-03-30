function(e, t, n) {
    "use strict";

    function r(e) {
        var t, n, r = null != e["aria-label"];
        return e["aria-hidden"] = null !== (t = e["aria-hidden"]) && void 0 !== t ? t : !r, e.role = null !== (n = e.role) && void 0 !== n ? n : "img", e
    }
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    })
}