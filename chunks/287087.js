function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("125036");

    function o() {
        var e = r.default.getFocusedPID();
        return null != e && (r.default.isReady(e) || r.default.isCrashed(e)) ? e : null
    }
}