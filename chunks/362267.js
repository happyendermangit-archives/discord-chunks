function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("442837"),
        r = n("780384"),
        a = n("410030"),
        s = n("358221"),
        o = n("944486"),
        l = n("981631");

    function u(e, t) {
        let n = (0, i.useStateFromStores)([o.default], () => o.default.getVoiceChannelId()),
            u = (0, i.useStateFromStores)([s.default], () => null != n ? s.default.getMode(n) : null),
            d = (0, a.default)();
        return null != e ? e : u === l.ChannelModes.VOICE && (0, r.isThemeLight)(d) ? t ? "activeLight" : "primaryLight" : t ? "white" : "primaryDark"
    }
}