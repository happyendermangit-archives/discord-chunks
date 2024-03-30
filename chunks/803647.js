function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("846027"),
        r = n("872810"),
        s = n("314897"),
        a = n("569545");

    function o(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (null == e) return;
        let {
            streamType: n,
            guildId: o,
            channelId: l,
            ownerId: u
        } = e, d = (0, a.encodeStreamKey)({
            streamType: n,
            guildId: o,
            channelId: l,
            ownerId: u
        });
        u === s.default.getId() && i.default.setGoLiveSource(null), r.stopStream(d, t)
    }
}