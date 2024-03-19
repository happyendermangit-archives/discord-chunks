function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsUserRecentGamesEnabled: function() {
            return s
        }
    });
    var i = n("446674"),
        l = n("697218"),
        a = n("75326");

    function s(e) {
        let t = (0, i.useStateFromStores)([l.default], () => {
                let t = l.default.getUser(e);
                return null != t && !t.bot
            }),
            n = (0, a.useUserIsRecentGamesExperimentEnabled)({
                location: "28tk0bf_1",
                autoTrackExposure: !0
            });
        return n && t
    }
}