function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        dismissAppDetail: function() {
            return o
        },
        dismissAppLauncherPopup: function() {
            return a
        },
        showAppDetail: function() {
            return s
        },
        showAppLauncherPopup: function() {
            return r
        }
    });
    var i = n("570140");

    function r() {
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

    function o() {
        i.default.dispatch({
            type: "APP_LAUNCHER_DISMISS_APP_DETAIL"
        })
    }
}