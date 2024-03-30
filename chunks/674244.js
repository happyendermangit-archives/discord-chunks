function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("382021");

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var a = (i(r = {}, o.UserSettingsTypes.PRELOADED_USER_SETTINGS, []), i(r, o.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS, []), r);
    t.default = a
}