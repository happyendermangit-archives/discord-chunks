function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canChannelBeDefault: function() {
            return u
        }
    }), n("898511");
    var r = n("291178"),
        o = n("935741"),
        i = n("359017"),
        a = n("281767");

    function u(e, t) {
        return r.default.isChannelGated(e, t) || i.canEveryoneRole(a.Permissions.VIEW_CHANNEL, o.default.getChannel(t))
    }
}