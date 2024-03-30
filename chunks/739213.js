function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("661961"),
        o = n("224359"),
        i = n("217014"),
        a = n("736381");

    function u(e) {
        var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (null != e) {
            var n = e.streamType,
                u = e.guildId,
                s = e.channelId,
                l = e.ownerId,
                c = (0, a.encodeStreamKey)({
                    streamType: n,
                    guildId: u,
                    channelId: s,
                    ownerId: l
                });
            l === i.default.getId() && r.default.setGoLiveSource(null), o.stopStream(c, t)
        }
    }
}