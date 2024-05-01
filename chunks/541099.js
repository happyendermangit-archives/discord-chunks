function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("442837"),
        l = n("570140");
    let u = {
        showPopup: !1,
        appDetail: null
    };

    function d() {
        return u.showPopup = !1, u.appDetail = null, !0
    }
    class _ extends(a = o.default.Store) {
        initialize() {}
        shouldShowPopup() {
            return u.showPopup
        }
        getCurrentAppDetail() {
            return u.appDetail
        }
    }
    s = "AppLauncherStore", (r = "displayName") in(i = _) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new _(l.default, {
        APP_LAUNCHER_SHOW_POPUP: function() {
            return u.showPopup = !0, !0
        },
        APP_LAUNCHER_DISMISS_POPUP: d,
        APP_LAUNCHER_SHOW_APP_DETAIL: function(e) {
            let {
                appDetail: t
            } = e;
            return u.appDetail = t, !0
        },
        APP_LAUNCHER_DISMISS_APP_DETAIL: function() {
            return u.appDetail = null, !0
        },
        CONNECTION_OPEN: d,
        LOGOUT: d,
        CHANNEL_SELECT: d,
        APPLICATION_COMMAND_SET_ACTIVE_COMMAND: d,
        APP_LAUNCHER_SET_ACTIVE_COMMAND: d
    })
}