function(e, t, n) {
    "use strict";

    function i(e) {
        var t, n;
        let i = null != e["aria-label"];
        return e["aria-hidden"] = null !== (t = e["aria-hidden"]) && void 0 !== t ? t : !i, e.role = null !== (n = e.role) && void 0 !== n ? n : "img", e
    }
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    })
}