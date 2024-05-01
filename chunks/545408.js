function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackModViewOpened: function() {
            return l
        }
    }), n("470079");
    var i = n("100527"),
        r = n("367907"),
        a = n("626135"),
        s = n("50493"),
        o = n("981631");

    function l(e, t, n) {
        let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default.MEMBER_SAFETY_PAGE,
            u = {
                guild_id: e,
                target_user_id: t,
                subpanel_name: s.ModViewPanelNameMap[n],
                location: l,
                ...(0, r.collectGuildAnalyticsMetadata)(e)
            };
        return a.default.track(o.AnalyticEvents.GUILD_MOD_VIEW_OPENED, u)
    }
}