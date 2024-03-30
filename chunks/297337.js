function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearAnalyticsLog: function() {
            return u
        },
        toggleDisplayDevTools: function() {
            return a
        },
        updateDevToolsSettings: function() {
            return i
        }
    });
    var r = n("629815"),
        o = n("694215");

    function i(e) {
        r.default.dispatch({
            type: "DEV_TOOLS_SETTINGS_UPDATE",
            settings: e
        })
    }

    function a() {
        i({
            displayTools: !o.default.displayTools
        })
    }

    function u() {
        r.default.dispatch({
            type: "ANALYTICS_LOG_CLEAR"
        })
    }
}