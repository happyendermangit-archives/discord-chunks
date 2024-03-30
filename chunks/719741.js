function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        },
        getCanStartBroadcast: function() {
            return l
        }
    });
    var r = n("898511"),
        o = n("217014"),
        i = n("935741"),
        a = n("894288"),
        u = n("575098");

    function s() {
        var e = (0, r.useStateFromStores)([o.default], function() {
                return o.default.getId()
            }),
            t = (0, r.useStateFromStores)([a.default], function() {
                return a.default.getVoiceChannelId()
            }),
            n = (0, r.useStateFromStores)([i.default], function() {
                return i.default.getChannel(t)
            }, [t]),
            s = (0, r.useStateFromStores)([u.default], function() {
                return null != u.default.getBroadcast()
            }),
            l = (null == n ? void 0 : n.isOwner(e)) && (null == n ? void 0 : n.isBroadcastChannel()) || null == t;
        return !s && l
    }

    function l() {
        if (null != u.default.getBroadcast()) return !1;
        var e = a.default.getVoiceChannelId();
        if (null == e) return !0;
        var t = o.default.getId(),
            n = i.default.getChannel(e);
        return (null == n ? void 0 : n.isOwner(t)) && (null == n ? void 0 : n.isBroadcastChannel())
    }
}