function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        handleDCDismissed: function() {
            return i
        },
        handleDCShownToUser: function() {
            return o
        },
        overrideDismissibleContentFramework: function() {
            return u
        },
        resetDismissibleContentFrameworkStore: function() {
            return a
        }
    });
    var r = n("629815"),
        o = function(e) {
            r.default.dispatch({
                type: "DCF_HANDLE_DC_SHOWN",
                dismissibleContent: e
            })
        },
        i = function(e) {
            r.default.dispatch({
                type: "DCF_HANDLE_DC_DISMISSED",
                dismissibleContent: e
            })
        },
        a = function() {
            r.default.dispatch({
                type: "DCF_RESET"
            })
        },
        u = function(e) {
            r.default.dispatch({
                type: "DCF_DAILY_CAP_OVERRIDE",
                value: e
            })
        }
}