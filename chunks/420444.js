function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var s = n("298386"),
        i = n("42203"),
        r = n("427953");

    function a(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default,
            n = t.getChannel(e),
            a = (0, r.isActivitiesInTextEnabled)(n, "isVoiceActivityChannel");
        return null != n && (n.type === s.ChannelTypes.GUILD_VOICE || n.isPrivate() && !a)
    }
}