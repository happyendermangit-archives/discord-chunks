function(t, e, n) {
    "use strict";

    function i(t) {
        if (null != t) {
            if ("activitySessionId" in t) return t.activitySessionId;
            if ("instanceId" in t) return t.instanceId;
            if ("activity_id" in t) return t.activity_id
        }
    }
    n.r(e), n.d(e, {
        default: function() {
            return i
        }
    })
}