function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("106351"),
        r = n("592125"),
        s = n("867176");

    function a(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default,
            n = t.getChannel(e),
            a = (0, s.isActivitiesInTextEnabled)(n, "isVoiceActivityChannel");
        return null != n && (n.type === i.ChannelTypes.GUILD_VOICE || n.isPrivate() && !a)
    }
}