function(e, t, n) {
    "use strict";

    function i(e) {
        if (null != e) {
            if ("analyticsActivitySessionId" in e && null != e.analyticsActivitySessionId && "" !== e.analyticsActivitySessionId) return e.analyticsActivitySessionId;
            if ("launchId" in e && null != e.launchId) return e.launchId;
            if ("activity_id" in e) return e.activity_id
        }
    }
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    })
}