function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsUserRecentGamesFetchEnabled: function() {
            return s
        }
    });
    var r = n("898511"),
        o = n("53867"),
        i = n("217014"),
        a = n("208454"),
        u = n("956825");

    function s(e) {
        var t = e.userId,
            n = e.location,
            s = (0, r.useStateFromStores)([a.default], function() {
                var e = a.default.getUser(t);
                return null != e && !e.bot
            }),
            l = o.RecentGamesEnabled.useSetting(),
            c = i.default.getId() === t ? s && l : s;
        return (0, u.useUserIsRecentGamesExperimentApiEnabled)({
            location: n
        }) && c
    }
}