function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("442837"),
        r = n("780384"),
        s = n("410030"),
        a = n("358221"),
        o = n("944486"),
        l = n("981631");

    function u(e, t) {
        let n = (0, i.useStateFromStores)([o.default], () => o.default.getVoiceChannelId()),
            u = (0, i.useStateFromStores)([a.default], () => null != n ? a.default.getMode(n) : null),
            d = (0, s.default)();
        return null != e ? e : u === l.ChannelModes.VOICE && (0, r.isThemeLight)(d) ? t ? "activeLight" : "primaryLight" : t ? "white" : "primaryDark"
    }
}