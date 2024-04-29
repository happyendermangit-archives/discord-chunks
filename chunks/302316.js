function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("943209"),
        a = n("556084"),
        o = n("659101"),
        l = n("689938"),
        u = n("110734"),
        d = n("795197");

    function _(e) {
        let {
            applicationId: t,
            channelId: n
        } = e, {
            installedIntegrations: _,
            fetched: c
        } = (0, a.usePrivateChannelIntegrationState)({
            channelId: n
        });
        return c && void 0 !== _.find(e => e.application.id === t) ? (0, i.jsxs)(o.default, {
            children: [(0, i.jsx)(r.Heading, {
                variant: "eyebrow",
                className: d.title,
                children: l.default.Messages.BOT_PROFILE_MANAGE_PRIVATE_CHANNEL_INTEGRATION
            }), (0, i.jsx)(r.Button, {
                onClick: () => (0, s.deletePrivateChannelIntegration)(n, t),
                size: r.Button.Sizes.ICON,
                color: r.Button.Colors.RED,
                look: r.Button.Looks.LINK,
                className: u.button,
                children: l.default.Messages.BOT_PROFILE_REMOVE_PRIVATE_CHANNEL_INTEGRATION
            })]
        }) : null
    }
}