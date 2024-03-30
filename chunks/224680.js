function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("317955"),
        o = n("935741"),
        i = n("987351");

    function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.default,
            n = t.getChannel(e),
            a = (0, i.isActivitiesInTextEnabled)(n, "isVoiceActivityChannel");
        return null != n && (n.type === r.ChannelTypes.GUILD_VOICE || n.isPrivate() && !a)
    }
}