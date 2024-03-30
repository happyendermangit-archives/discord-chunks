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
        s = n("944486"),
        a = n("981631");

    function o() {
        let e = s.default.getVoiceChannelId();
        return l(i.default.getChannel(e))
    }

    function l(e) {
        if (null == e) return !1;
        if (a.ChannelTypesSets.CALLABLE.has(e.type)) return !0;
        let t = r.default.can(a.Permissions.USE_SOUNDBOARD, e),
            n = r.default.can(a.Permissions.SPEAK, e);
        return e.type === a.ChannelTypes.GUILD_VOICE && t && n
    }
}