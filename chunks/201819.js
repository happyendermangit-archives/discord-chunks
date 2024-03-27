function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsUserRecentGamesFetchEnabled: function() {
            return a
        }
    });
    var i = n("442837"),
        r = n("594174"),
        s = n("602992");

    function a(e) {
        let t = (0, i.useStateFromStores)([r.default], () => {
            let t = r.default.getUser(e);
            return null != t && !t.bot
        });
        return (0, s.useUserIsRecentGamesExperimentApiEnabled)({
            location: "28tk0bf_1"
        }) && t
    }
}