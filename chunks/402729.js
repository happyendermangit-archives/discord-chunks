function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        markActivityUsed: function() {
            return a
        },
        setActivityUrlOverride: function() {
            return i
        },
        toggleUseActivityUrlOverride: function() {
            return o
        },
        updateFilter: function() {
            return u
        }
    });
    var r = n("629815");

    function o() {
        r.default.dispatch({
            type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE"
        })
    }

    function i(e) {
        r.default.dispatch({
            type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE",
            activityUrlOverride: e
        })
    }

    function a(e) {
        r.default.dispatch({
            type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED",
            applicationId: e,
            timestamp: new Date().getTime()
        })
    }

    function u(e) {
        r.default.dispatch({
            type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER",
            filter: e
        })
    }
}