function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        transitionToGuild: function() {
            return a
        }
    });
    var i = n("35225"),
        r = n("703656"),
        s = n("981631");

    function a(e, t) {
        (0, r.transitionTo)(s.Routes.CHANNEL(e, (0, i.getChannelIdForGuildTransition)(e)), t)
    }
}