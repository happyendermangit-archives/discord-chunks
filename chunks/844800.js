function(e, t, s) {
    "use strict";
    s.r(t);
    var n, a, l, i, r = s("442837"),
        u = s("570140");
    let o = !1,
        d = null,
        c = null;
    class f extends(i = r.default.Store) {
        getState() {
            return {
                verifySuccess: o,
                verifyErrors: d,
                redirectGuildId: c
            }
        }
    }
    l = "HubEmailVerificationStore", (a = "displayName") in(n = f) ? Object.defineProperty(n, a, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : n[a] = l, t.default = new f(u.default, {
        HUB_VERIFY_EMAIL_SUCCESS: function(e) {
            let {
                guildId: t
            } = e;
            o = !0, d = null, c = t
        },
        HUB_VERIFY_EMAIL_FAILURE: function(e) {
            let {
                errors: t
            } = e;
            o = !1, d = t
        }
    })
}