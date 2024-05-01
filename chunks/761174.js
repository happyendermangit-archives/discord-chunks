function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsCurrentUserRecentGamesEnabled: function() {
            return u
        },
        useIsUserRecentGamesEnabled: function() {
            return d
        }
    });
    var i = n("442837"),
        r = n("695346"),
        a = n("314897"),
        s = n("594174"),
        o = n("602992"),
        l = n("619914");

    function u(e) {
        let {
            location: t
        } = e, n = (0, l.useUserIsRecentGamesExperimentEnabled)({
            location: t,
            autoTrackExposure: !0
        }), i = r.RecentGamesEnabled.useSetting(), a = r.ShowCurrentGame.useSetting();
        return n && a && i
    }

    function d(e) {
        let {
            userId: t,
            location: n
        } = e, r = (0, i.useStateFromStores)([s.default], () => {
            let e = s.default.getUser(t);
            return null != e && !e.bot
        }), l = a.default.getId() === t, d = u({
            location: n
        });
        return (0, o.useUserIsRecentGamesExperimentApiEnabled)({
            location: n
        }) && (l ? d && r : r)
    }
}