function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("37295"),
        o = n("935741"),
        i = n("957808"),
        a = n("306912"),
        u = n("965067");

    function s(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            l = (0, r.useStateFromStores)([i.default], function() {
                return null != e ? i.default.getMember(e.id, t) : null
            }, [e, t]),
            c = (0, r.useStateFromStores)([o.default], function() {
                return o.default.getChannel(n)
            }, [n]),
            f = (0, r.useStateFromStores)([o.default], function() {
                return o.default.getChannel(null == c ? void 0 : c.parent_id)
            }, [c]),
            d = (0, r.useStateFromStores)([a.default], function() {
                return null != e ? a.default.getRoles(e.id) : void 0
            });
        return null == e || null == d || null == l ? null : (0, u.getVisibleConnectionsRole)({
            guild: e,
            guildRoles: d,
            guildMember: l,
            channel: null != c && c.isThread() && null != f ? f : c,
            onlyChannelConnectionRoles: s
        })
    }
}