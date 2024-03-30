function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setUseSystemTheme: function() {
            return r
        }
    });
    var i = n("570140");

    function r(e) {
        i.default.dispatch({
            type: "UNSYNCED_USER_SETTINGS_UPDATE",
            settings: {
                useSystemTheme: e
            }
        })
    }
    n("541049"), n("740492"), n("874893")
}