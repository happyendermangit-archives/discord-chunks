function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("717881"),
        s = n("906732"),
        a = n("785717"),
        o = n("221292"),
        l = n("659101"),
        u = n("981631"),
        d = n("27729");

    function _(e) {
        let {
            activity: t,
            user: n,
            guild: _,
            channelId: c,
            onClose: E,
            analyticsParams: I
        } = e, {
            analyticsLocations: T
        } = (0, s.default)(), {
            trackUserProfileAction: f,
            ...S
        } = (0, a.useUserProfileAnalyticsContext)();
        return (0, i.jsx)(l.default, {
            children: (0, i.jsx)(r.default, {
                type: r.UserActivityTypes.USER_POPOUT_V2,
                activity: t,
                className: d.activity,
                user: n,
                guildId: null == _ ? void 0 : _.id,
                channelId: c,
                source: u.AnalyticsLocations.PROFILE_POPOUT,
                onOpenGameProfile: E,
                onAction: () => {
                    f({
                        action: "JOIN_ACTIVITY"
                    }), (0, o.trackUserProfileActivityJoined)({
                        activity: t,
                        analyticsLocations: T,
                        ...S
                    }), null == E || E()
                },
                actionColor: d.buttonColor,
                analyticsParams: I
            })
        })
    }
}