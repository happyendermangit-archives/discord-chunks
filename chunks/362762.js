function(e, t, s) {
    "use strict";
    s.r(t);
    var n, a, l, i, r = s("442837"),
        u = s("570140"),
        o = s("981631");
    let d = {};
    class c extends(i = r.default.Store) {
        getState(e) {
            return d[e]
        }
    }
    l = "CodedLinkNativeAppStateStore", (a = "displayName") in(n = c) ? Object.defineProperty(n, a, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : n[a] = l, t.default = new c(u.default, {
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