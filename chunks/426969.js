function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var l = n("446674"),
        i = n("913144");
    let a = {
        showPopup: !1,
        appDetail: null
    };

    function s() {
        return a.showPopup = !1, a.appDetail = null, !0
    }
    class r extends l.default.Store {
        initialize() {}
        shouldShowPopup() {
            return a.showPopup
        }
        getCurrentAppDetail() {
            return a.appDetail
        }
    }
    r.displayName = "AppLauncherStore";
    var o = new r(i.default, {
        APP_LAUNCHER_SHOW_POPUP: function() {
            return a.showPopup = !0, !0
        },
        APP_LAUNCHER_DISMISS_POPUP: s,
        APP_LAUNCHER_SHOW_APP_DETAIL: function(e) {
            let {
                appDetail: t
            } = e;
            return a.appDetail = t, !0
        },
        APP_LAUNCHER_DISMISS_APP_DETAIL: function() {
            return a.appDetail = null, !0
        },
        CONNECTION_OPEN: s,
        LOGOUT: s,
        CHANNEL_SELECT: s,
        APPLICATION_COMMAND_SET_ACTIVE_COMMAND: s,
        APP_LAUNCHER_SET_ACTIVE_COMMAND: s
    })
}