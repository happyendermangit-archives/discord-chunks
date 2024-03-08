function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canSelectedVoiceChannelUseSoundboard: function() {
            return r
        },
        default: function() {
            return o
        }
    });
    var i = n("42203"),
        l = n("957255"),
        a = n("18494"),
        s = n("49111");

    function r() {
        let e = a.default.getVoiceChannelId(),
            t = i.default.getChannel(e);
        return o(t)
    }

    function o(e) {
        if (null == e) return !1;
        if (s.ChannelTypesSets.CALLABLE.has(e.type)) return !0;
        let t = l.default.can(s.Permissions.USE_SOUNDBOARD, e),
            n = l.default.can(s.Permissions.SPEAK, e);
        return e.type === s.ChannelTypes.GUILD_VOICE && t && n
    }
}