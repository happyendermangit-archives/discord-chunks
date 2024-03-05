function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        },
        getCanStartBroadcast: function() {
            return o
        }
    });
    var a = n("446674"),
        r = n("271938"),
        s = n("42203"),
        i = n("18494"),
        l = n("101125");

    function u() {
        let e = (0, a.useStateFromStores)([r.default], () => r.default.getId()),
            t = (0, a.useStateFromStores)([i.default], () => i.default.getVoiceChannelId()),
            n = (0, a.useStateFromStores)([s.default], () => s.default.getChannel(t), [t]),
            u = (0, a.useStateFromStores)([l.default], () => null != l.default.getBroadcast()),
            o = (null == n ? void 0 : n.isOwner(e)) && (null == n ? void 0 : n.isBroadcastChannel()),
            d = o || null == t;
        return !u && d
    }

    function o() {
        if (null != l.default.getBroadcast()) return !1;
        let e = i.default.getVoiceChannelId();
        if (null == e) return !0;
        let t = r.default.getId(),
            n = s.default.getChannel(e),
            a = (null == n ? void 0 : n.isOwner(t)) && (null == n ? void 0 : n.isBroadcastChannel());
        return a
    }
}