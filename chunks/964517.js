function(e, t, n) {
    "use strict";

    function i(e) {
        if (null != e) {
            if ("analyticsActivitySessionId" in e && null != e.analyticsActivitySessionId && "" !== e.analyticsActivitySessionId) return e.analyticsActivitySessionId;
            if ("instanceId" in e && null != e.instanceId) return e.instanceId;
            if ("activity_id" in e) return e.activity_id
        }
    }
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    })
}