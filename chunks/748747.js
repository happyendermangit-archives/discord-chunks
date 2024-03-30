function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("898511"),
        o = n("751848"),
        i = n("523263"),
        a = n("390579"),
        u = n("894288"),
        s = n("281767");

    function l(e, t) {
        var n = (0, r.useStateFromStores)([u.default], function() {
                return u.default.getVoiceChannelId()
            }),
            l = (0, r.useStateFromStores)([a.default], function() {
                return null != n ? a.default.getMode(n) : null
            }),
            c = (0, i.default)();
        return null != e ? e : l === s.ChannelModes.VOICE && (0, o.isThemeLight)(c) ? t ? "activeLight" : "primaryLight" : t ? "white" : "primaryDark"
    }
}