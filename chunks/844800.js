function(e, t, n) {
    "use strict";
    n.r(t);
    var s, a, i, l, r = n("442837"),
        u = n("570140");
    let o = !1,
        d = null,
        c = null;
    class f extends(l = r.default.Store) {
        getState() {
            return {
                verifySuccess: o,
                verifyErrors: d,
                redirectGuildId: c
            }
        }
    }
    i = "HubEmailVerificationStore", (a = "displayName") in(s = f) ? Object.defineProperty(s, a, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[a] = i, t.default = new f(u.default, {
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