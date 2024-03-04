function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("860957");

    function s() {
        let e = i.default.getFocusedPID();
        return null != e && (i.default.isReady(e) || i.default.isCrashed(e)) ? e : null
    }
}