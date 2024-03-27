function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("442837"),
        o = n("922482"),
        l = n("979651"),
        u = n("915863"),
        d = n("689938"),
        _ = n("767970");
    t.default = e => {
        let {
            guildId: t,
            channelId: n,
            color: r,
            look: c,
            isProfile: E
        } = e, I = (0, a.useStateFromStores)([l.default], () => l.default.isInChannel(n), [n]);
        return (0, i.jsx)(u.default, {
            className: s()(_.button, {
                [_.popout]: !E
            }),
            color: r,
            look: c,
            disabled: I,
            onClick: () => o.connectOrLurkStage(t, n),
            fullWidth: !0,
            children: d.default.Messages.STAGE_CHANNEL_JOIN_BUTTON
        }, "stage")
    }
}