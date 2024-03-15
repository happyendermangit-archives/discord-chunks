function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        computeChannelName: function() {
            return f
        },
        escapeChannelName: function() {
            return _
        },
        unescapeChannelName: function() {
            return E
        },
        default: function() {
            return h
        }
    }), n("222007"), n("781738");
    var i = n("446674"),
        s = n("274870"),
        r = n("760190"),
        a = n("27618"),
        o = n("697218"),
        l = n("449008"),
        u = n("158998"),
        d = n("49111"),
        c = n("782340");

    function f(e, t, n) {
        var i, r;
        let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        switch (e.type) {
            case d.ChannelTypes.DM:
                let [f] = e.recipients.map(t.getUser).filter(l.isNotNullish);
                if (null == f) return "???";
                let E = n.getNickname(f.id),
                    h = null !== (i = null != E ? E : u.default.getName(f)) && void 0 !== i ? i : "???";
                return a ? "@".concat(h) : h;
            case d.ChannelTypes.GROUP_DM:
                let g = (0, s.getIsBroadcastingGDM)(e.id);
                if ("" !== e.name) return e.name;
                if (g && null != e.ownerId && "" !== e.ownerId) {
                    let i = t.getUser(e.ownerId),
                        s = null !== (r = n.getNickname(e.ownerId)) && void 0 !== r ? r : u.default.getName(i);
                    return c.default.Messages.BROADCASTING_CHANNEL_NAME.format({
                        name: s
                    })
                }
                let m = e.recipients.map(t.getUser).filter(l.isNotNullish),
                    p = m.map(e => {
                        var t;
                        return null !== (t = n.getNickname(e.id)) && void 0 !== t ? t : u.default.getName(e)
                    });
                if (p.length > 0) return p.join(", ");
                return c.default.Messages.GROUP_DM_ALONE.format({
                    name: u.default.getName(t.getCurrentUser())
                });
            case d.ChannelTypes.GUILD_ANNOUNCEMENT:
            case d.ChannelTypes.GUILD_TEXT:
            case d.ChannelTypes.GUILD_FORUM:
            case d.ChannelTypes.GUILD_MEDIA:
                if (a) return "#".concat(e.name);
                return e.name;
            case d.ChannelTypes.PUBLIC_THREAD:
            case d.ChannelTypes.PRIVATE_THREAD:
            case d.ChannelTypes.ANNOUNCEMENT_THREAD:
            case d.ChannelTypes.GUILD_VOICE:
            case d.ChannelTypes.GUILD_STAGE_VOICE:
            case d.ChannelTypes.GUILD_CATEGORY:
                if (o) return '#"'.concat(_(e.name), '"');
                if (a && e.isThread()) return '"'.concat(e.name, '"');
                return e.name;
            default:
                return e.name
        }
    }

    function _(e) {
        return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
    }

    function E(e) {
        return e.replace(/\\"/g, '"').replace(/\\\\/g, "\\")
    }

    function h(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, i.useStateFromStores)([o.default, r.default, a.default], () => null == e ? null : f(e, o.default, a.default, t))
    }
}