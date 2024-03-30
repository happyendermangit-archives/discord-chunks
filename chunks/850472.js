function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("163291"),
        o = n("281767");
    t.default = {
        onOpenHubInvite: function(e) {
            var t = e.guild;
            null != t && (0, r.transitionTo)(o.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(t.id, e.code))
        }
    }
}