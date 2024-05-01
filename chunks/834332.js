function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("275726"),
        r = n("904245"),
        a = n("147913"),
        s = n("314897"),
        o = n("592125"),
        l = n("375954"),
        u = n("496675"),
        d = n("944486"),
        _ = n("594174"),
        c = n("146085"),
        E = n("96052"),
        I = n("981631");
    class T extends a.default {
        handleVoiceStateUpdates(e) {
            let {
                voiceStates: t
            } = e;
            t.forEach(e => {
                let {
                    channelId: t,
                    userId: n,
                    suppress: a,
                    requestToSpeakTimestamp: T
                } = e;
                if (d.default.getVoiceChannelId() === t && !!a && null != t && n !== s.default.getId()) {
                    if (u.default.can(c.MODERATE_STAGE_CHANNEL_PERMISSIONS, o.default.getChannel(t))) {
                        if (null != T) {
                            let e = _.default.getUser(n);
                            null != e && (0, E.sendStageRequestToSpeakEphemeralMessage)(t, e, T)
                        } else {
                            let e = l.default.getMessages(t).findNewest(e => e.type === i.MessageTypes.STAGE_RAISE_HAND && e.hasFlag(I.MessageFlags.EPHEMERAL) && e.author.id === n);
                            null != e && r.default.deleteMessage(t, e.id, !0)
                        }
                    }
                }
            })
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new T
}