function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canChannelBeDefault: function() {
            return o
        }
    }), n("446674");
    var i = n("203288"),
        s = n("42203"),
        r = n("991170"),
        a = n("49111");

    function o(e, t) {
        return i.default.isChannelGated(e, t) || r.default.canEveryoneRole(a.Permissions.VIEW_CHANNEL, s.default.getChannel(t))
    }
}