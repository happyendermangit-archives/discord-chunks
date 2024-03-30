function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("928801"),
        r = n("157305"),
        s = n("131951");

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class o extends i.default {
        getInitialState() {
            return this.getNextState()
        }
        getNextState() {
            let e = r.default.getLobbiesWithVoice();
            return e.length > 0 && (this._hadLobbyVoiceStates = !0), {
                lobbies: e.map(e => ({
                    lobbyId: e.id,
                    selfMute: s.default.isSelfMute(e.application_id),
                    selfDeaf: s.default.isSelfDeaf(e.application_id)
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
            super(), a(this, "socket", void 0), a(this, "_hadLobbyVoiceStates", void 0), this.socket = e, this._hadLobbyVoiceStates = !1
        }
    }
}