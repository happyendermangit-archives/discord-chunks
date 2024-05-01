function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        markActivityUsed: function() {
            return a
        },
        setActivityUrlOverride: function() {
            return s
        },
        toggleUseActivityUrlOverride: function() {
            return r
        },
        updateFilter: function() {
            return o
        }
    });
    var i = n("570140");

    function r() {
        i.default.dispatch({
            type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE"
        })
    }

    function s(e) {
        i.default.dispatch({
            type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE",
            activityUrlOverride: e
        })
    }

    function a(e) {
        i.default.dispatch({
            type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED",
            applicationId: e,
            timestamp: new Date().getTime()
        })
    }

    function o(e) {
        i.default.dispatch({
            type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER",
            filter: e
        })
    }
}