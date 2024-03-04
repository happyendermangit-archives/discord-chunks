function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("298386"),
        s = n("42203"),
        r = n("427953");

    function a(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.default,
            n = t.getChannel(e),
            a = (0, r.isActivitiesInTextEnabled)(n, "isVoiceActivityChannel");
        return null != n && (n.type === i.ChannelTypes.GUILD_VOICE || n.isPrivate() && !a)
    }
}