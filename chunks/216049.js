function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("65597"),
        l = n("42203"),
        a = n("26989"),
        s = n("535013");

    function r(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = (0, i.default)([a.default], () => null != e ? a.default.getMember(e.id, t) : null, [e, t]),
            u = (0, i.default)([l.default], () => l.default.getChannel(n), [n]),
            d = (0, i.default)([l.default], () => l.default.getChannel(null == u ? void 0 : u.parent_id), [u]);
        return null == e || null == o ? null : (0, s.getVisibleConnectionsRole)({
            guild: e,
            guildMember: o,
            channel: null != u && u.isThread() && null != d ? d : u,
            onlyChannelConnectionRoles: r
        })
    }
}