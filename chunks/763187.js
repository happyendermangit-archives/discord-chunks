function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setDeveloperOptionSettings: function() {
            return o
        }
    });
    var r = n("629815");

    function o(e) {
        r.default.dispatch({
            type: "DEVELOPER_OPTIONS_UPDATE_SETTINGS",
            settings: e
        })
    }
}