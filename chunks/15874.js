function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("446674"),
        a = n("987317"),
        s = n("957255"),
        r = n("945956"),
        o = n("599110"),
        u = n("295999"),
        d = n("49111"),
        c = n("782340");

    function f(e) {
        let {
            className: t,
            color: n,
            look: f,
            hangStatusChannel: p
        } = e, m = (0, l.useStateFromStores)([r.default], () => r.default.getChannelId() === p.id);
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(u.default, {
                className: t,
                disabled: m,
                onClick: () => {
                    s.default.can(d.Permissions.CONNECT, p), a.default.selectVoiceChannel(p.id), o.default.track(d.AnalyticEvents.HANG_STATUS_CTA_CLICKED, {
                        source: "UserProfilePopout",
                        guild_id: p.guild_id,
                        channel_id: p.id
                    })
                },
                color: n,
                look: f,
                fullWidth: !0,
                children: c.default.Messages.PROFILE_JOIN_VOICE_CHANNEL
            }, "join-hang")
        })
    }
}