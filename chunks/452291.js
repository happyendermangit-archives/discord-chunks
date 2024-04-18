function(e, t, n) {
    "use strict";

    function i(e) {
        if (null == e.location) {
            var t;
            return null !== (t = e.instanceId) && void 0 !== t ? t : ""
        }
        return "i-".concat(e.instanceId, "-").concat(e.location.id)
    }
    n.r(t), n.d(t, {
        getIframeInstanceId: function() {
            return i
        }
    })
}