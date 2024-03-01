function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        computeChannelName: function() {
            return f
        },
        escapeChannelName: function() {
            return E
        },
        unescapeChannelName: function() {
            return p
        },
        default: function() {
            return h
        }
    }), n("222007"), n("781738");
    var i = n("446674"),
        r = n("274870"),
        s = n("760190"),
        a = n("27618"),
        o = n("697218"),
        l = n("449008"),
        u = n("158998"),
        c = n("49111"),
        d = n("782340");

    function f(e, t, n) {
        var i, s;
        let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        switch (e.type) {
            case c.ChannelTypes.DM:
                let [f] = e.recipients.map(t.getUser).filter(l.isNotNullish);
                if (null == f) return "???";
                let p = n.getNickname(f.id),
                    h = null !== (i = null != p ? p : u.default.getName(f)) && void 0 !== i ? i : "???";
                return a ? "@".concat(h) : h;
            case c.ChannelTypes.GROUP_DM:
                let _ = (0, r.getIsBroadcastingGDM)(e.id);
                if ("" !== e.name) return e.name;
                if (_ && null != e.ownerId && "" !== e.ownerId) {
                    let i = t.getUser(e.ownerId),
                        r = null !== (s = n.getNickname(e.ownerId)) && void 0 !== s ? s : u.default.getName(i);
                    return d.default.Messages.BROADCASTING_CHANNEL_NAME.format({
                        name: r
                    })
                }
                let S = e.recipients.map(t.getUser).filter(l.isNotNullish),
                    m = S.map(e => {
                        var t;
                        return null !== (t = n.getNickname(e.id)) && void 0 !== t ? t : u.default.getName(e)
                    });
                if (m.length > 0) return m.join(", ");
                return d.default.Messages.GROUP_DM_ALONE.format({
                    name: u.default.getName(t.getCurrentUser())
                });
            case c.ChannelTypes.GUILD_ANNOUNCEMENT:
            case c.ChannelTypes.GUILD_TEXT:
            case c.ChannelTypes.GUILD_FORUM:
            case c.ChannelTypes.GUILD_MEDIA:
                if (a) return "#".concat(e.name);
                return e.name;
            case c.ChannelTypes.PUBLIC_THREAD:
            case c.ChannelTypes.PRIVATE_THREAD:
            case c.ChannelTypes.ANNOUNCEMENT_THREAD:
            case c.ChannelTypes.GUILD_VOICE:
            case c.ChannelTypes.GUILD_STAGE_VOICE:
            case c.ChannelTypes.GUILD_CATEGORY:
                if (o) return '#"'.concat(E(e.name), '"');
                if (a && e.isThread()) return '"'.concat(e.name, '"');
                return e.name;
            default:
                return e.name
        }
    }

    function E(e) {
        return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
    }

    function p(e) {
        return e.replace(/\\"/g, '"').replace(/\\\\/g, "\\")
    }

    function h(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, i.useStateFromStores)([o.default, s.default, a.default], () => null == e ? null : f(e, o.default, a.default, t))
    }
}