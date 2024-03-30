function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        computeChannelName: function() {
            return _
        },
        default: function() {
            return m
        },
        escapeChannelName: function() {
            return E
        },
        unescapeChannelName: function() {
            return p
        }
    });
    var r = n("898511"),
        o = n("300032"),
        i = n("139890"),
        a = n("776982"),
        u = n("208454"),
        s = n("162677"),
        l = n("830567"),
        c = n("281767"),
        f = n("941504");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        switch (e.type) {
            case c.ChannelTypes.DM:
                var a, u, _, p = (a = e.recipients.map(t.getUser).filter(s.isNotNullish), u = 1, function(e) {
                    if (Array.isArray(e)) return e
                }(a) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                        } catch (e) {
                            u = !0, r = e
                        } finally {
                            try {
                                !a && null != o.return && o.return()
                            } finally {
                                if (u) throw r
                            }
                        }
                        return i
                    }
                }(a, u) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return d(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                    }
                }(a, u) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())[0];
                if (null == p) return "???";
                var m = n.getNickname(p.id),
                    y = null !== (_ = null != m ? m : l.default.getName(p)) && void 0 !== _ ? _ : "???";
                return r ? "@".concat(y) : y;
            case c.ChannelTypes.GROUP_DM:
                var I = (0, o.getIsBroadcastingGDM)(e.id);
                if ("" !== e.name) return e.name;
                if (I && null != e.ownerId && "" !== e.ownerId) {
                    var h, O = t.getUser(e.ownerId),
                        T = null !== (h = n.getNickname(e.ownerId)) && void 0 !== h ? h : l.default.getName(O);
                    return f.default.Messages.BROADCASTING_CHANNEL_NAME.format({
                        name: T
                    })
                }
                var S = e.recipients.map(t.getUser).filter(s.isNotNullish).map(function(e) {
                    var t;
                    return null !== (t = n.getNickname(e.id)) && void 0 !== t ? t : l.default.getName(e)
                });
                if (S.length > 0) return S.join(", ");
                return f.default.Messages.GROUP_DM_ALONE.format({
                    name: l.default.getName(t.getCurrentUser())
                });
            case c.ChannelTypes.GUILD_ANNOUNCEMENT:
            case c.ChannelTypes.GUILD_TEXT:
            case c.ChannelTypes.GUILD_FORUM:
            case c.ChannelTypes.GUILD_MEDIA:
                if (r) return "#".concat(e.name);
                return e.name;
            case c.ChannelTypes.PUBLIC_THREAD:
            case c.ChannelTypes.PRIVATE_THREAD:
            case c.ChannelTypes.ANNOUNCEMENT_THREAD:
            case c.ChannelTypes.GUILD_VOICE:
            case c.ChannelTypes.GUILD_STAGE_VOICE:
            case c.ChannelTypes.GUILD_CATEGORY:
                if (i) return '#"'.concat(E(e.name), '"');
                if (r && e.isThread()) return '"'.concat(e.name, '"');
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

    function m(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, r.useStateFromStores)([u.default, i.default, a.default], function() {
            return null == e ? null : _(e, u.default, a.default, t)
        })
    }
}