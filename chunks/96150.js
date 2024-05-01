function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("570140"),
        r = n("317770"),
        a = n("280837"),
        s = n("592125"),
        o = n("914010"),
        l = n("823379");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class d extends r.default {
        _initialize() {
            i.default.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), i.default.subscribe("LOGOUT", this.handleLogout)
        }
        _terminate() {
            i.default.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), i.default.unsubscribe("LOGOUT", this.handleLogout)
        }
        constructor(...e) {
            super(...e), u(this, "handleVoiceChannelSelect", e => {
                let {
                    channelId: t,
                    guildId: n
                } = e;
                if (null != t) {
                    let e = s.default.getChannel(t);
                    if (null == e || e.isGuildStageVoice()) return
                }
                this.terminate();
                this.handleDisconnectFromStageChannel(null == t ? null : null != n ? n : null)
            }), u(this, "handleDisconnectFromStageChannel", e => {
                let t = o.default.getGuildId();
                (0, a.stopLurkingAll)([t, e].filter(l.isNotNullish))
            }), u(this, "handleLogout", () => {
                this.terminate(), this.handleDisconnectFromStageChannel(null)
            })
        }
    }
    t.default = new d
}