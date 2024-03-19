function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("463848"),
        a = n("756507"),
        s = n("4462"),
        r = n("777003"),
        o = n("49111"),
        u = n("787678");

    function d(e) {
        let {
            activity: t,
            user: n,
            guild: d,
            channelId: c,
            onClose: f,
            analyticsParams: p
        } = e, {
            trackUserProfileAction: m,
            ...h
        } = (0, a.useUserProfileAnalyticsContext)();
        return (0, i.jsx)(r.default, {
            children: (0, i.jsx)(l.default, {
                type: l.UserActivityTypes.USER_POPOUT_V2,
                activity: t,
                className: u.activity,
                user: n,
                guildId: null == d ? void 0 : d.id,
                channelId: c,
                source: o.AnalyticsLocations.PROFILE_POPOUT,
                onOpenGameProfile: f,
                onAction: () => {
                    m({
                        action: "JOIN_ACTIVITY"
                    }), (0, s.trackUserProfileActivityJoined)({
                        activityType: null == t ? void 0 : t.type,
                        applicationId: null == t ? void 0 : t.application_id,
                        ...h
                    }), null == f || f()
                },
                actionColor: u.buttonColor,
                analyticsParams: p
            })
        })
    }
}