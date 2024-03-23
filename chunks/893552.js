function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var s = n("446674"),
        a = n("913144");
    let l = !1,
        i = null,
        r = null;
    class u extends s.default.Store {
        getState() {
            return {
                verifySuccess: l,
                verifyErrors: i,
                redirectGuildId: r
            }
        }
    }
    u.displayName = "HubEmailVerificationStore";
    var o = new u(a.default, {
        HUB_VERIFY_EMAIL_SUCCESS: function(e) {
            let {
                guildId: t
            } = e;
            l = !0, i = null, r = t
        },
        HUB_VERIFY_EMAIL_FAILURE: function(e) {
            let {
                errors: t
            } = e;
            l = !1, i = t
        }
    })
}