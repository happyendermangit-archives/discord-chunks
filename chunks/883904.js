function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        handleDCDismissed: function() {
            return s
        },
        handleDCShownToUser: function() {
            return r
        },
        overrideDismissibleContentFramework: function() {
            return o
        },
        resetDismissibleContentFrameworkStore: function() {
            return a
        }
    });
    var i = n("570140");
    let r = e => {
            i.default.dispatch({
                type: "DCF_HANDLE_DC_SHOWN",
                dismissibleContent: e
            })
        },
        s = e => {
            i.default.dispatch({
                type: "DCF_HANDLE_DC_DISMISSED",
                dismissibleContent: e
            })
        },
        a = () => {
            i.default.dispatch({
                type: "DCF_RESET"
            })
        },
        o = e => {
            i.default.dispatch({
                type: "DCF_DAILY_CAP_OVERRIDE",
                value: e
            })
        }
}