function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
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

    function a(e) {
        n.default.dispatch({
            type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE",
            activityUrlOverride: e
        })
    }

    function u(e) {
        n.default.dispatch({
            type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED",
            applicationId: e,
            timestamp: new Date().getTime()
        })
    }

    function r(e) {
        n.default.dispatch({
            type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER",
            filter: e
        })
    }
}