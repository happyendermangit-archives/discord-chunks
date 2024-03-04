function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i, s = n("201876"),
        r = n("260320"),
        a = n("42887");
    i = class extends s.default {
        getInitialState() {
            return this.getNextState()
        }
        getNextState() {
            let e = r.default.getLobbiesWithVoice();
            return e.length > 0 && (this._hadLobbyVoiceStates = !0), {
                lobbies: e.map(e => ({
                    lobbyId: e.id,
                    selfMute: a.default.isSelfMute(e.application_id),
                    selfDeaf: a.default.isSelfDeaf(e.application_id)
                }))
            }
        }
        shouldCommit() {
            return this._hadLobbyVoiceStates && this.socket.isSessionEstablished()
        }
        didCommit(e) {
            let {
                lobbies: t
            } = e;
            this.socket.lobbyVoiceStatesUpdate(t)
        }
        forceUpdate() {
            this._hadLobbyVoiceStates && super.forceUpdate()
        }
        constructor(e) {
            super(), this.socket = e, this._hadLobbyVoiceStates = !1
        }
    }
}