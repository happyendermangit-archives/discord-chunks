function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var l = n("446674"),
        i = n("819855"),
        a = n("841098"),
        s = n("191145"),
        r = n("18494"),
        o = n("49111");

    function u(e, t) {
        let n = (0, l.useStateFromStores)([r.default], () => r.default.getVoiceChannelId()),
            u = (0, l.useStateFromStores)([s.default], () => null != n ? s.default.getMode(n) : null),
            d = (0, a.default)();
        return null != e ? e : u === o.ChannelModes.VOICE && (0, i.isThemeLight)(d) ? t ? "activeLight" : "primaryLight" : t ? "white" : "primaryDark"
    }
}