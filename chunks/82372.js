function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        showAppLauncherPopup: function() {
            return l
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
    var i = n("913144");

    function l() {
        i.default.dispatch({
            type: "APP_LAUNCHER_SHOW_POPUP"
        })
    }

    function a() {
        i.default.dispatch({
            type: "APP_LAUNCHER_DISMISS_POPUP"
        })
    }

    function s(e) {
        i.default.dispatch({
            type: "APP_LAUNCHER_SHOW_APP_DETAIL",
            appDetail: e
        })
    }

    function r() {
        i.default.dispatch({
            type: "APP_LAUNCHER_DISMISS_APP_DETAIL"
        })
    }
}