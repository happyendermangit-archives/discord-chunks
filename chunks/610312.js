function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setUseSystemTheme: function() {
            return o
        }
    });
    var r = n("629815");

    function o(e) {
        r.default.dispatch({
            type: "UNSYNCED_USER_SETTINGS_UPDATE",
            settings: {
                useSystemTheme: e
            }
        })
    }
    n("848859"), n("24039"), n("223228")
}