function(e, t, n) {
    "use strict";

    function i(e) {
        if (null != e) {
            if ("activitySessionId" in e) return e.activitySessionId;
            if ("instanceId" in e) return e.instanceId;
            if ("activity_id" in e) return e.activity_id
        }
    }
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    })
}