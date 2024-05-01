function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        },
        getCanStartBroadcast: function() {
            return u
        }
    });
    var i = n("442837"),
        r = n("314897"),
        a = n("592125"),
        s = n("944486"),
        o = n("885110");

    function l() {
        let e = (0, i.useStateFromStores)([r.default], () => r.default.getId()),
            t = (0, i.useStateFromStores)([s.default], () => s.default.getVoiceChannelId()),
            n = (0, i.useStateFromStores)([a.default], () => a.default.getChannel(t), [t]),
            l = (0, i.useStateFromStores)([o.default], () => null != o.default.getBroadcast()),
            u = (null == n ? void 0 : n.isOwner(e)) && (null == n ? void 0 : n.isBroadcastChannel()) || null == t;
        return !l && u
    }

    function u() {
        if (null != o.default.getBroadcast()) return !1;
        let e = s.default.getVoiceChannelId();
        if (null == e) return !0;
        let t = r.default.getId(),
            n = a.default.getChannel(e);
        return (null == n ? void 0 : n.isOwner(t)) && (null == n ? void 0 : n.isBroadcastChannel())
    }
}