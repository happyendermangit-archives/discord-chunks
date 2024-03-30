function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("104747"),
        s = n("665863"),
        l = n("521862"),
        c = n("941504"),
        f = n("767970");
    t.default = function(e) {
        var t, n, o, d = e.guildId,
            _ = e.channelId,
            E = e.color,
            p = e.look,
            m = e.isProfile,
            y = (0, a.useStateFromStores)([s.default], function() {
                return s.default.isInChannel(_)
            }, [_]);
        return r.createElement(l.default, {
            key: "stage",
            className: i()(f.button, (t = {}, n = f.popout, o = !m, n in t ? Object.defineProperty(t, n, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = o, t)),
            color: E,
            look: p,
            disabled: y,
            onClick: function() {
                return u.connectOrLurkStage(d, _)
            },
            fullWidth: !0
        }, c.default.Messages.STAGE_CHANNEL_JOIN_BUTTON)
    }
}