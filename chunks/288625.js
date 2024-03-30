function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        dismissAppDetail: function() {
            return u
        },
        dismissAppLauncherPopup: function() {
            return i
        },
        showAppDetail: function() {
            return a
        },
        showAppLauncherPopup: function() {
            return o
        }
    });
    var r = n("629815");

    function o() {
        r.default.dispatch({
            type: "APP_LAUNCHER_SHOW_POPUP"
        })
    }

    function i() {
        r.default.dispatch({
            type: "APP_LAUNCHER_DISMISS_POPUP"
        })
    }

    function a(e) {
        r.default.dispatch({
            type: "APP_LAUNCHER_SHOW_APP_DETAIL",
            appDetail: e
        })
    }

    function u() {
        r.default.dispatch({
            type: "APP_LAUNCHER_DISMISS_APP_DETAIL"
        })
    }
}