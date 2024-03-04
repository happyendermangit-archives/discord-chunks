function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("393414"),
        s = n("49111"),
        r = {
            onOpenHubInvite(e) {
                let {
                    guild: t
                } = e;
                null != t && (0, i.transitionTo)(s.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(t.id, e.code))
            }
        }
}