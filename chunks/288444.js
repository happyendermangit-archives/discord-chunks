function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("846519"),
        r = n("904245"),
        s = n("287734"),
        a = n("147913"),
        o = n("317381"),
        l = n("592125"),
        u = n("885110"),
        d = n("979651"),
        _ = n("938475"),
        c = n("689938");

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let I = 18e4;

    function T() {
        let e = d.default.getCurrentClientVoiceChannelId(null);
        if (null == e) return !1;
        let t = l.default.getChannel(e);
        return !(null == t || !t.isPrivate() || t.recipients.length > 1 || _.default.countVoiceStatesForChannel(e) > 1) && null == o.default.getSelfEmbeddedActivityForChannel(e) && null == u.default.getBroadcast() && !0
    }

    function f() {
        if (!T()) return;
        let e = d.default.getCurrentClientVoiceChannelId(null);
        null != e && (r.default.sendBotMessage(e, c.default.Messages.BOT_CALL_IDLE_DISCONNECT_2.format({
            number: 3
        })), s.default.selectVoiceChannel(null))
    }
    class S extends a.default {
        constructor(...e) {
            super(...e), E(this, "idleTimeout", new i.Timeout), E(this, "handleConnectionClosed", () => {
                this.idleTimeout.stop()
            }), E(this, "handleEmbeddedActivityDisconnect", () => {
                T() && this.idleTimeout.start(I, f, !0)
            }), E(this, "handleVoiceStateUpdates", () => {
                if (!T()) {
                    this.idleTimeout.stop();
                    return
                }
                this.idleTimeout.start(I, f, !1)
            }), E(this, "actions", {
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                CONNECTION_CLOSED: this.handleConnectionClosed,
                EMBEDDED_ACTIVITY_DISCONNECT: this.handleEmbeddedActivityDisconnect
            })
        }
    }
    t.default = new S
}