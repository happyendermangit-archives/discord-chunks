function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return l
        }
    }), E("222007");
    var t = E("862337"),
        o = E("819689"),
        n = E("987317"),
        r = E("689988"),
        i = E("191225"),
        a = E("42203"),
        I = E("101125"),
        s = E("800762"),
        T = E("316133"),
        S = E("782340");
    let N = 18e4;

    function O() {
        let e = s.default.getCurrentClientVoiceChannelId(null);
        if (null == e) return !1;
        let _ = a.default.getChannel(e);
        if (null == _ || !_.isPrivate()) return !1;
        let E = _.recipients.length;
        if (E > 1) return !1;
        let t = T.default.countVoiceStatesForChannel(e);
        if (t > 1) return !1;
        let o = i.default.getSelfEmbeddedActivityForChannel(e);
        if (null != o) return !1;
        let n = null != I.default.getBroadcast();
        return !n && !0
    }

    function A() {
        if (!O()) return;
        let e = s.default.getCurrentClientVoiceChannelId(null);
        null != e && (o.default.sendBotMessage(e, S.default.Messages.BOT_CALL_IDLE_DISCONNECT_2.format({
            number: 3
        })), n.default.selectVoiceChannel(null))
    }
    class R extends r.default {
        constructor(...e) {
            super(...e), this.idleTimeout = new t.Timeout, this.handleConnectionClosed = () => {
                this.idleTimeout.stop()
            }, this.handleEmbeddedActivityDisconnect = () => {
                O() && this.idleTimeout.start(N, A, !0)
            }, this.handleVoiceStateUpdates = () => {
                if (!O()) {
                    this.idleTimeout.stop();
                    return
                }
                this.idleTimeout.start(N, A, !1)
            }, this.actions = {
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                CONNECTION_CLOSED: this.handleConnectionClosed,
                EMBEDDED_ACTIVITY_DISCONNECT: this.handleEmbeddedActivityDisconnect
            }
        }
    }
    var l = new R
}