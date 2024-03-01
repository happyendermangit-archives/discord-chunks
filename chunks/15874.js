function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("446674"),
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
            hangStatusChannel: m
        } = e, p = (0, i.useStateFromStores)([r.default], () => r.default.getChannelId() === m.id);
        return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)(u.default, {
                className: t,
                disabled: p,
                onClick: () => {
                    s.default.can(d.Permissions.CONNECT, m), a.default.selectVoiceChannel(m.id), o.default.track(d.AnalyticEvents.HANG_STATUS_CTA_CLICKED, {
                        source: "UserProfilePopout",
                        guild_id: m.guild_id,
                        channel_id: m.id
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