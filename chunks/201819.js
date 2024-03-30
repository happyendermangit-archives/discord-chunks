function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsUserRecentGamesFetchEnabled: function() {
            return l
        }
    });
    var i = n("442837"),
        r = n("695346"),
        s = n("314897"),
        a = n("594174"),
        o = n("602992");

    function l(e) {
        let {
            userId: t,
            location: n
        } = e, l = (0, i.useStateFromStores)([a.default], () => {
            let e = a.default.getUser(t);
            return null != e && !e.bot
        }), u = r.RecentGamesEnabled.useSetting(), d = s.default.getId() === t ? l && u : l;
        return (0, o.useUserIsRecentGamesExperimentApiEnabled)({
            location: n
        }) && d
    }
}