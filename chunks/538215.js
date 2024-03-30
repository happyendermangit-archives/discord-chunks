function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("358221"),
        s = n("729052"),
        a = n("592125"),
        o = n("979651"),
        l = n("556076");
    class u extends i.default {
        handleVoiceChannelSelect(e) {
            let {
                channelId: t,
                guildId: n
            } = e;
            if (null == t || null == n) return;
            let i = a.default.getChannel(t);
            if (null != i && (0, s.hasVoiceChannelActivityNotifsEnabled)(i) && i.isGuildVoice()) {
                let e = r.default.getParticipants(t).length,
                    n = o.default.isInChannel(t),
                    i = e === (n ? 1 : 0);
                i ? l.sendVoiceChannelActivityNotification(t, i) : e === (n ? 2 : 1) && l.sendVoiceChannelActivityNotification(t, i)
            }
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new u
}