function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        a = n("717881"),
        s = n("906732"),
        o = n("158776"),
        l = n("785717"),
        u = n("221292"),
        d = n("981631"),
        _ = n("810480");

    function c(e) {
        let {
            user: t,
            guild: n,
            channelId: c,
            onClose: E
        } = e, {
            analyticsLocations: I,
            newestAnalyticsLocation: T
        } = (0, s.default)(), {
            trackUserProfileAction: f,
            ...S
        } = (0, l.useUserProfileAnalyticsContext)(), h = (0, r.useStateFromStores)([o.default], () => o.default.findActivity(t.id, e => null != e.type && e.type !== d.ActivityTypes.CUSTOM_STATUS), [t]);
        return (0, i.jsx)(a.default, {
            type: a.UserActivityTypes.BITE_SIZE_POPOUT,
            activity: h,
            className: _.activity,
            source: T,
            user: t,
            guildId: null == n ? void 0 : n.id,
            channelId: c,
            onOpenGameProfile: E,
            onAction: () => {
                f({
                    action: "JOIN_ACTIVITY"
                }), (0, u.trackUserProfileActivityJoined)({
                    activity: h,
                    analyticsLocations: I,
                    ...S
                }), null == E || E()
            },
            actionColor: _.buttonColor,
            hideHeader: !0
        })
    }
}