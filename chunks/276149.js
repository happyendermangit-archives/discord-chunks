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
        s = n("287734"),
        a = n("496675"),
        o = n("19780"),
        l = n("626135"),
        u = n("915863"),
        d = n("981631"),
        _ = n("689938");

    function c(e) {
        let {
            className: t,
            color: n,
            look: c,
            hangStatusChannel: E
        } = e, I = (0, r.useStateFromStores)([o.default], () => o.default.getChannelId() === E.id);
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(u.default, {
                className: t,
                disabled: I,
                onClick: () => {
                    a.default.can(d.Permissions.CONNECT, E), s.default.selectVoiceChannel(E.id), l.default.track(d.AnalyticEvents.HANG_STATUS_CTA_CLICKED, {
                        source: "UserProfilePopout",
                        guild_id: E.guild_id,
                        channel_id: E.id
                    })
                },
                color: n,
                look: c,
                fullWidth: !0,
                children: _.default.Messages.PROFILE_JOIN_VOICE_CHANNEL
            }, "join-hang")
        })
    }
}