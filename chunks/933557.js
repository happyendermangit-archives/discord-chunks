function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        computeChannelName: function() {
            return c
        },
        default: function() {
            return T
        },
        escapeChannelName: function() {
            return E
        },
        unescapeChannelName: function() {
            return I
        }
    }), n("47120"), n("757143");
    var i = n("442837"),
        r = n("762914"),
        a = n("828695"),
        s = n("699516"),
        o = n("594174"),
        l = n("823379"),
        u = n("51144"),
        d = n("981631"),
        _ = n("689938");

    function c(e, t, n) {
        var i, a;
        let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        switch (e.type) {
            case d.ChannelTypes.DM:
                let [c] = e.recipients.map(t.getUser).filter(l.isNotNullish);
                if (null == c) return "???";
                let I = n.getNickname(c.id),
                    T = null !== (i = null != I ? I : u.default.getName(c)) && void 0 !== i ? i : "???";
                return s ? "@".concat(T) : T;
            case d.ChannelTypes.GROUP_DM:
                let f = (0, r.getIsBroadcastingGDM)(e.id);
                if ("" !== e.name) return e.name;
                if (f && null != e.ownerId && "" !== e.ownerId) {
                    let i = t.getUser(e.ownerId),
                        r = null !== (a = n.getNickname(e.ownerId)) && void 0 !== a ? a : u.default.getName(i);
                    return _.default.Messages.BROADCASTING_CHANNEL_NAME.format({
                        name: r
                    })
                }
                let S = e.recipients.map(t.getUser).filter(l.isNotNullish).map(e => {
                    var t;
                    return null !== (t = n.getNickname(e.id)) && void 0 !== t ? t : u.default.getName(e)
                });
                if (S.length > 0) return S.join(", ");
                return _.default.Messages.GROUP_DM_ALONE.format({
                    name: u.default.getName(t.getCurrentUser())
                });
            case d.ChannelTypes.GUILD_ANNOUNCEMENT:
            case d.ChannelTypes.GUILD_TEXT:
            case d.ChannelTypes.GUILD_FORUM:
            case d.ChannelTypes.GUILD_MEDIA:
                if (s) return "#".concat(e.name);
                return e.name;
            case d.ChannelTypes.PUBLIC_THREAD:
            case d.ChannelTypes.PRIVATE_THREAD:
            case d.ChannelTypes.ANNOUNCEMENT_THREAD:
            case d.ChannelTypes.GUILD_VOICE:
            case d.ChannelTypes.GUILD_STAGE_VOICE:
            case d.ChannelTypes.GUILD_CATEGORY:
                if (o) return '#"'.concat(E(e.name), '"');
                if (s && e.isThread()) return '"'.concat(e.name, '"');
                return e.name;
            default:
                return e.name
        }
    }

    function E(e) {
        return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
    }

    function I(e) {
        return e.replace(/\\"/g, '"').replace(/\\\\/g, "\\")
    }

    function T(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, i.useStateFromStores)([o.default, a.default, s.default], () => null == e ? null : c(e, o.default, s.default, t))
    }
}