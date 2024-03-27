function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("717881"),
        s = n("785717"),
        a = n("221292"),
        o = n("659101"),
        l = n("981631"),
        u = n("27729");

    function d(e) {
        let {
            activity: t,
            user: n,
            guild: d,
            channelId: _,
            onClose: c,
            analyticsParams: E
        } = e, {
            trackUserProfileAction: I,
            ...T
        } = (0, s.useUserProfileAnalyticsContext)();
        return (0, i.jsx)(o.default, {
            children: (0, i.jsx)(r.default, {
                type: r.UserActivityTypes.USER_POPOUT_V2,
                activity: t,
                className: u.activity,
                user: n,
                guildId: null == d ? void 0 : d.id,
                channelId: _,
                source: l.AnalyticsLocations.PROFILE_POPOUT,
                onOpenGameProfile: c,
                onAction: () => {
                    I({
                        action: "JOIN_ACTIVITY"
                    }), (0, a.trackUserProfileActivityJoined)({
                        activityType: null == t ? void 0 : t.type,
                        applicationId: null == t ? void 0 : t.application_id,
                        ...T
                    }), null == c || c()
                },
                actionColor: u.buttonColor,
                analyticsParams: E
            })
        })
    }
}