function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setDeveloperOptionSettings: function() {
            return s
        }
    });
    var i = n("913144");

    function s(e) {
        i.default.dispatch({
            type: "DEVELOPER_OPTIONS_UPDATE_SETTINGS",
            settings: e
        })
    }
}