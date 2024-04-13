function(e, t, n) {
    "use strict";
    n.r(t);
    var s, a, i, l, r = n("442837"),
        u = n("570140"),
        o = n("981631");
    let d = {};
    class c extends(l = r.default.Store) {
        getState(e) {
            return d[e]
        }
    }
    i = "CodedLinkNativeAppStateStore", (a = "displayName") in(s = c) ? Object.defineProperty(s, a, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[a] = i, t.default = new c(u.default, {
        NATIVE_APP_MODAL_OPENING: function(e) {
            let {
                code: t
            } = e;
            d[t] = o.NativeAppStates.OPENING
        },
        NATIVE_APP_MODAL_OPENED: function(e) {
            let {
                code: t
            } = e;
            d[t] = o.NativeAppStates.OPEN
        },
        NATIVE_APP_MODAL_OPEN_FAILED: function(e) {
            let {
                code: t
            } = e;
            d[t] = o.NativeAppStates.OPEN_FAIL
        }
    })
}