function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("65597"),
        l = n("42203"),
        a = n("26989"),
        s = n("305961"),
        r = n("535013");

    function o(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            u = (0, i.useStateFromStores)([a.default], () => null != e ? a.default.getMember(e.id, t) : null, [e, t]),
            d = (0, i.useStateFromStores)([l.default], () => l.default.getChannel(n), [n]),
            c = (0, i.useStateFromStores)([l.default], () => l.default.getChannel(null == d ? void 0 : d.parent_id), [d]),
            f = (0, i.useStateFromStores)([s.default], () => null != e ? s.default.getRoles(e.id) : void 0);
        return null == e || null == f || null == u ? null : (0, r.getVisibleConnectionsRole)({
            guild: e,
            guildRoles: f,
            guildMember: u,
            channel: null != d && d.isThread() && null != c ? c : d,
            onlyChannelConnectionRoles: o
        })
    }
}