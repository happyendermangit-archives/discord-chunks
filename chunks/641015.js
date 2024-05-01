function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canSelectedVoiceChannelUseSoundboard: function() {
            return o
        },
        default: function() {
            return l
        }
    });
    var i = n("592125"),
        r = n("496675"),
        a = n("944486"),
        s = n("981631");

    function o() {
        let e = a.default.getVoiceChannelId();
        return l(i.default.getChannel(e))
    }

    function l(e) {
        if (null == e) return !1;
        if (s.ChannelTypesSets.CALLABLE.has(e.type)) return !0;
        let t = r.default.can(s.Permissions.USE_SOUNDBOARD, e),
            n = r.default.can(s.Permissions.SPEAK, e);
        return e.type === s.ChannelTypes.GUILD_VOICE && t && n
    }
}