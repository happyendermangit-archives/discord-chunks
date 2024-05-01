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
        s = n("314897"),
        a = n("594174"),
        o = n("602992"),
        l = n("619914");

    function u(e) {
        let {
            location: t
        } = e, n = (0, l.useUserIsRecentGamesExperimentEnabled)({
            location: t,
            autoTrackExposure: !0
        }), i = r.RecentGamesEnabled.useSetting(), s = r.ShowCurrentGame.useSetting();
        return n && s && i
    }

    function d(e) {
        let {
            userId: t,
            location: n
        } = e, r = (0, i.useStateFromStores)([a.default], () => {
            let e = a.default.getUser(t);
            return null != e && !e.bot
        }), l = s.default.getId() === t, d = u({
            location: n
        });
        return (0, o.useUserIsRecentGamesExperimentApiEnabled)({
            location: n
        }) && (l ? d && r : r)
    }
}