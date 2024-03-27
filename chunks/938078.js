function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("933557"),
        r = n("592125"),
        s = n("699516"),
        a = n("594174"),
        o = n("727785"),
        l = n("981631");

    function u(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.default,
            u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.default,
            d = t.getChannel(e);
        if (null == d) return null;
        let _ = (0, i.computeChannelName)(d, n, u);
        switch (d.type) {
            case l.ChannelTypes.DM: {
                let e = n.getUser(d.getRecipientId());
                if (null == e) return null;
                return {
                    type: o.AutocompleterResultTypes.USER,
                    record: e,
                    score: 0,
                    comparator: _
                }
            }
            case l.ChannelTypes.GROUP_DM:
                return {
                    type: o.AutocompleterResultTypes.GROUP_DM, record: d, score: 0, comparator: _
                };
            case l.ChannelTypes.GUILD_VOICE:
            case l.ChannelTypes.GUILD_STAGE_VOICE:
                return {
                    type: o.AutocompleterResultTypes.VOICE_CHANNEL, record: d, score: 0, comparator: _
                };
            default:
                return {
                    type: o.AutocompleterResultTypes.TEXT_CHANNEL, record: d, score: 0, comparator: _
                }
        }
    }
}