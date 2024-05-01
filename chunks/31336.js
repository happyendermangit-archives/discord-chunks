function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearAnalyticsLog: function() {
            return o
        },
        toggleDisplayDevTools: function() {
            return s
        },
        updateDevToolsSettings: function() {
            return a
        }
    });
    var i = n("570140"),
        r = n("19759");

    function a(e) {
        i.default.dispatch({
            type: "DEV_TOOLS_SETTINGS_UPDATE",
            settings: e
        })
    }

    function s() {
        a({
            displayTools: !r.default.displayTools
        })
    }

    function o() {
        i.default.dispatch({
            type: "ANALYTICS_LOG_CLEAR"
        })
    }
}