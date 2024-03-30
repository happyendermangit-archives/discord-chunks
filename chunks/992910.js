function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("534965"),
        o = n("935741"),
        i = n("776982"),
        a = n("208454"),
        u = n("225342"),
        s = n("281767");

    function l(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.default,
            l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
            c = t.getChannel(e);
        if (null == c) return null;
        var f = (0, r.computeChannelName)(c, n, l);
        switch (c.type) {
            case s.ChannelTypes.DM:
                var d = n.getUser(c.getRecipientId());
                if (null == d) return null;
                return {
                    type: u.AutocompleterResultTypes.USER, record: d, score: 0, comparator: f
                };
            case s.ChannelTypes.GROUP_DM:
                return {
                    type: u.AutocompleterResultTypes.GROUP_DM, record: c, score: 0, comparator: f
                };
            case s.ChannelTypes.GUILD_VOICE:
            case s.ChannelTypes.GUILD_STAGE_VOICE:
                return {
                    type: u.AutocompleterResultTypes.VOICE_CHANNEL, record: c, score: 0, comparator: f
                };
            default:
                return {
                    type: u.AutocompleterResultTypes.TEXT_CHANNEL, record: c, score: 0, comparator: f
                }
        }
    }
}