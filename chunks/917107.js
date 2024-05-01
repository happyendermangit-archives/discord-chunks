function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("106351"),
        r = n("592125"),
        a = n("944486");

    function s(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.default,
            s = t.getChannel(e),
            o = n.getVoiceChannelId();
        return null != s && (s.type === i.ChannelTypes.GUILD_VOICE || s.isPrivate() && s.id === o)
    }
}