function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("446674"),
        s = n("913144"),
        r = n("665618");
    let a = {};
    class o extends i.default.Store {
        getGuild(e) {
            return a[e]
        }
    }
    o.displayName = "AuthInviteStore";
    var l = new o(s.default, {
        AUTH_INVITE_UPDATE: function(e) {
            let {
                invite: t
            } = e, n = t.guild;
            if (null == n) return !1;
            a[n.id] = (0, r.fromInviteGuild)(n)
        }
    })
}