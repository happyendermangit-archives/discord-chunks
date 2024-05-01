function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canChannelBeDefault: function() {
            return o
        }
    }), n("442837");
    var i = n("430198"),
        r = n("592125"),
        a = n("700785"),
        s = n("981631");

    function o(e, t) {
        return i.default.isChannelGated(e, t) || a.canEveryoneRole(s.Permissions.VIEW_CHANNEL, r.default.getChannel(t))
    }
}