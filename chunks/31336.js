function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearAnalyticsLog: function() {
            return o
        },
        toggleDisplayDevTools: function() {
            return a
        },
        updateDevToolsSettings: function() {
            return s
        }
    });
    var i = n("570140"),
        r = n("19759");

    function s(e) {
        i.default.dispatch({
            type: "DEV_TOOLS_SETTINGS_UPDATE",
            settings: e
        })
    }

    function a() {
        s({
            displayTools: !r.default.displayTools
        })
    }

    function o() {
        i.default.dispatch({
            type: "ANALYTICS_LOG_CLEAR"
        })
    }
}