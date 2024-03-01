function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        showAppLauncherPopup: function() {
            return i
        },
        dismissAppLauncherPopup: function() {
            return a
        },
        showAppDetail: function() {
            return s
        },
        dismissAppDetail: function() {
            return r
        }
    });
    var l = n("913144");

    function i() {
        l.default.dispatch({
            type: "APP_LAUNCHER_SHOW_POPUP"
        })
    }

    function a() {
        l.default.dispatch({
            type: "APP_LAUNCHER_DISMISS_POPUP"
        })
    }

    function s(e) {
        l.default.dispatch({
            type: "APP_LAUNCHER_SHOW_APP_DETAIL",
            appDetail: e
        })
    }

    function r() {
        l.default.dispatch({
            type: "APP_LAUNCHER_DISMISS_APP_DETAIL"
        })
    }
}