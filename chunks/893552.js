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
        r = null,
        i = null;
    class u extends s.default.Store {
        getState() {
            return {
                verifySuccess: l,
                verifyErrors: r,
                redirectGuildId: i
            }
        }
    }
    u.displayName = "HubEmailVerificationStore";
    var o = new u(a.default, {
        HUB_VERIFY_EMAIL_SUCCESS: function(e) {
            let {
                guildId: t
            } = e;
            l = !0, r = null, i = t
        },
        HUB_VERIFY_EMAIL_FAILURE: function(e) {
            let {
                errors: t
            } = e;
            l = !1, r = t
        }
    })
}