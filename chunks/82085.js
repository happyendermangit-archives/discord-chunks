function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("703656"),
        r = n("981631");
    t.default = {
        onOpenHubInvite(e) {
            let {
                guild: t
            } = e;
            null != t && (0, i.transitionTo)(r.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(t.id, e.code))
        }
    }
}