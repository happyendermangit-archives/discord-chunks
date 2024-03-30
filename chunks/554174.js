function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("808506");

    function r() {
        let e = i.default.getFocusedPID();
        return null != e && (i.default.isReady(e) || i.default.isCrashed(e)) ? e : null
    }
}