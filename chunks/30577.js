function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("222007");
    var i = n("913144"),
        s = n("316272"),
        r = n("248967"),
        a = n("42203"),
        o = n("162771"),
        l = n("449008");
    class u extends s.default {
        _initialize() {
            i.default.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), i.default.subscribe("LOGOUT", this.handleLogout)
        }
        _terminate() {
            i.default.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), i.default.unsubscribe("LOGOUT", this.handleLogout)
        }
        constructor(...e) {
            super(...e), this.handleVoiceChannelSelect = e => {
                let {
                    channelId: t,
                    guildId: n
                } = e;
                if (null != t) {
                    let e = a.default.getChannel(t),
                        n = null == e || e.isGuildStageVoice();
                    if (n) return
                }
                this.terminate();
                this.handleDisconnectFromStageChannel(null == t ? null : null != n ? n : null)
            }, this.handleDisconnectFromStageChannel = e => {
                let t = o.default.getGuildId();
                (0, r.stopLurkingAll)([t, e].filter(l.isNotNullish))
            }, this.handleLogout = () => {
                this.terminate(), this.handleDisconnectFromStageChannel(null)
            }
        }
    }
    var d = new u
}