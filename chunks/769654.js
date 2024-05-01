function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        transitionToGuild: function() {
            return s
        }
    });
    var i = n("35225"),
        r = n("703656"),
        a = n("981631");

    function s(e, t) {
        (0, r.transitionTo)(a.Routes.CHANNEL(e, (0, i.getChannelIdForGuildTransition)(e)), t)
    }
}