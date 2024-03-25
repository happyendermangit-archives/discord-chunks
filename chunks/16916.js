function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var a = n("629109"),
        r = n("990766"),
        s = n("271938"),
        l = n("374014");

    function i(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (null == e) return;
        let {
            streamType: n,
            guildId: i,
            channelId: u,
            ownerId: o
        } = e, d = (0, l.encodeStreamKey)({
            streamType: n,
            guildId: i,
            channelId: u,
            ownerId: o
        });
        o === s.default.getId() && a.default.setGoLiveSource(null), r.stopStream(d, t)
    }
}