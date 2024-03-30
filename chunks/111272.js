function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canSelectedVoiceChannelUseSoundboard: function() {
            return u
        },
        default: function() {
            return s
        }
    });
    var r = n("935741"),
        o = n("29884"),
        i = n("894288"),
        a = n("281767");

    function u() {
        var e = i.default.getVoiceChannelId();
        return s(r.default.getChannel(e))
    }

    function s(e) {
        if (null == e) return !1;
        if (a.ChannelTypesSets.CALLABLE.has(e.type)) return !0;
        var t = o.default.can(a.Permissions.USE_SOUNDBOARD, e),
            n = o.default.can(a.Permissions.SPEAK, e);
        return e.type === a.ChannelTypes.GUILD_VOICE && t && n
    }
}