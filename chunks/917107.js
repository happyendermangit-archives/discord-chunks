function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("106351"),
        r = n("592125"),
        s = n("944486");

    function a(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.default,
            a = t.getChannel(e),
            o = n.getVoiceChannelId();
        return null != a && (a.type === i.ChannelTypes.GUILD_VOICE || a.isPrivate() && a.id === o)
    }
}