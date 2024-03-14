function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        toggleUseActivityUrlOverride: function() {
            return l
        },
        setActivityUrlOverride: function() {
            return a
        },
        markActivityUsed: function() {
            return u
        },
        updateFilter: function() {
            return r
        }
    });
    var n = i("913144");

    function l() {
        n.default.dispatch({
            type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE"
        })
    }

    function a(t) {
        n.default.dispatch({
            type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE",
            activityUrlOverride: t
        })
    }

    function u(t) {
        n.default.dispatch({
            type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED",
            applicationId: t,
            timestamp: new Date().getTime()
        })
    }

    function r(t) {
        n.default.dispatch({
            type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER",
            filter: t
        })
    }
}