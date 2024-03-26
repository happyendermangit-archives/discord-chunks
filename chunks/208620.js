function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var s = n("446674"),
        a = n("913144"),
        l = n("49111");
    let r = {};
    class i extends s.default.Store {
        getState(e) {
            return r[e]
        }
    }
    i.displayName = "CodedLinkNativeAppStateStore";
    var u = new i(a.default, {
        NATIVE_APP_MODAL_OPENING: function(e) {
            let {
                code: t
            } = e;
            r[t] = l.NativeAppStates.OPENING
        },
        NATIVE_APP_MODAL_OPENED: function(e) {
            let {
                code: t
            } = e;
            r[t] = l.NativeAppStates.OPEN
        },
        NATIVE_APP_MODAL_OPEN_FAILED: function(e) {
            let {
                code: t
            } = e;
            r[t] = l.NativeAppStates.OPEN_FAIL
        }
    })
}