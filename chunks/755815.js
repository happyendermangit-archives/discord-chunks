function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsUserRecentGamesFetchEnabled: function() {
            return s
        }
    });
    var i = n("446674"),
        l = n("697218"),
        a = n("916355");

    function s(e) {
        let t = (0, i.useStateFromStores)([l.default], () => {
                let t = l.default.getUser(e);
                return null != t && !t.bot
            }),
            n = (0, a.useUserIsRecentGamesExperimentApiEnabled)({
                location: "28tk0bf_1"
            });
        return n && t
    }
}