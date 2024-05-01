function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("399606"),
        r = n("592125"),
        a = n("271383"),
        s = n("430824"),
        o = n("275759");

    function l(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            u = (0, i.useStateFromStores)([a.default], () => null != e ? a.default.getMember(e.id, t) : null, [e, t]),
            d = (0, i.useStateFromStores)([r.default], () => r.default.getChannel(n), [n]),
            _ = (0, i.useStateFromStores)([r.default], () => r.default.getChannel(null == d ? void 0 : d.parent_id), [d]),
            c = (0, i.useStateFromStores)([s.default], () => null != e ? s.default.getRoles(e.id) : void 0);
        return null == e || null == c || null == u ? null : (0, o.getVisibleConnectionsRole)({
            guild: e,
            guildRoles: c,
            guildMember: u,
            channel: null != d && d.isThread() && null != _ ? _ : d,
            onlyChannelConnectionRoles: l
        })
    }
}