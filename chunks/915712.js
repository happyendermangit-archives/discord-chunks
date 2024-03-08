function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("463848"),
        a = n("777003"),
        s = n("49111"),
        r = n("787678");

    function o(e) {
        let {
            activity: t,
            user: n,
            guild: o,
            channelId: u,
            onClose: d,
            analyticsParams: c
        } = e;
        return (0, i.jsx)(a.default, {
            children: (0, i.jsx)(l.default, {
                type: l.UserActivityTypes.USER_POPOUT_V2,
                activity: t,
                className: r.activity,
                user: n,
                guildId: null == o ? void 0 : o.id,
                channelId: u,
                source: s.AnalyticsLocations.PROFILE_POPOUT,
                onOpenGameProfile: d,
                onAction: d,
                actionColor: r.buttonColor,
                analyticsParams: c
            })
        })
    }
}