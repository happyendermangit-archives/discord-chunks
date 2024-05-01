function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("512722"),
        r = n.n(i),
        a = n("846519"),
        s = n("668781"),
        o = n("846027"),
        l = n("147913"),
        u = n("710845"),
        d = n("314897"),
        _ = n("131951"),
        c = n("19780"),
        E = n("797258"),
        I = n("979651"),
        T = n("823379"),
        f = n("254238"),
        S = n("607214"),
        h = n("258609"),
        A = n("565473"),
        m = n("444092"),
        N = n("927923"),
        p = n("65154"),
        O = n("689938");

    function R(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let C = new u.default("GameConsoleManager");
    async function g(e) {
        let t = c.default.getChannelId();
        r()(null == t, "Syncing to remote while in voice!"), e.selfMute !== _.default.isSelfMute() && await o.default.toggleSelfMute({
            syncRemote: !1
        }), e.selfDeaf !== _.default.isSelfDeaf() && o.default.toggleSelfDeaf({
            syncRemote: !1
        })
    }
    class L extends l.default {
        constructor(...e) {
            super(...e), R(this, "rollbackCommandTimeout", new a.Timeout), R(this, "awaitRemoteTimeout", new a.Timeout), R(this, "actions", {
                WAIT_FOR_REMOTE_SESSION: () => this.handleWaitForRemoteSession(),
                POST_CONNECTION_OPEN: () => this.handleSessionsChanged(),
                SESSIONS_REPLACE: () => this.handleSessionsChanged(),
                AUDIO_TOGGLE_SELF_DEAF: e => this.handleAudioStateToggle(e),
                AUDIO_TOGGLE_SELF_MUTE: e => this.handleAudioStateToggle(e),
                VOICE_STATE_UPDATES: e => this.handleVoiceStateUpdates(e),
                CONSOLE_COMMAND_UPDATE: e => this.handleConsoleCommandUpdate(e),
                PASSIVE_UPDATE_V1: e => this.handleVoiceStateUpdates(e),
                REMOTE_SESSION_DISCONNECT: () => this.handleRemoteSessionDisconnect()
            }), R(this, "maybeConnect", e => {
                let t = function(e) {
                    let t = h.default.getAwaitingRemoteSessionInfo();
                    return e.find(e => {
                        let n = N.GAME_CONSOLE_SESSIONS.has(e.clientInfo.os),
                            i = null != I.default.getVoiceStateForSession(d.default.getId(), e.sessionId),
                            r = null == t || (0, A.coercePlatformTypeToConsoleType)(t.type) === e.clientInfo.os;
                        return n && r && i
                    })
                }(e);
                if (null == t) return null;
                this.awaitRemoteTimeout.stop(), (0, f.connectToRemote)(t.sessionId);
                let n = I.default.getVoiceStateForSession(d.default.getId(), t.sessionId);
                null != n && g(n)
            }), R(this, "handleAudioStateToggle", e => {
                let {
                    syncRemote: t,
                    context: n
                } = e;
                if (!t || n !== p.MediaEngineContextTypes.DEFAULT) return;
                let i = _.default.isSelfDeaf(),
                    r = _.default.isSelfMute(),
                    a = d.default.getId(),
                    s = h.default.getRemoteSessionId();
                if (null == s) return;
                let o = I.default.getVoiceStateForSession(a, s);
                if (null != o)(o.selfDeaf !== i || o.selfMute !== r) && ((0, f.remoteVoiceStateUpdate)(s, {
                    selfDeaf: i,
                    selfMute: r
                }), this.rollbackCommandTimeout.start(3e3, () => {
                    g(o)
                }))
            }), R(this, "handleVoiceStateUpdates", e => {
                var t;
                let n = null !== (t = e.voiceStates) && void 0 !== t ? t : [],
                    i = h.default.getRemoteSessionId();
                if (null == i) {
                    let e = n.map(e => {
                        let {
                            sessionId: t
                        } = e;
                        return null != t ? E.default.getSessionById(t) : null
                    }).filter(T.isNotNullish);
                    return this.maybeConnect(e)
                }
                let r = n.find(e => {
                    let {
                        sessionId: t
                    } = e;
                    return t === i
                });
                null != r && (this.rollbackCommandTimeout.stop(), g(r))
            }), R(this, "handleSessionsChanged", () => {
                let e = h.default.getRemoteSessionId();
                null != e && null == E.default.getSessionById(e) && (0, f.disconnectRemote)(), null == e && this.maybeConnect(Object.values(E.default.getSessions()))
            }), R(this, "handleWaitForRemoteSession", () => {
                this.awaitRemoteTimeout.start(6e4, () => {
                    (0, f.disconnectRemote)(), s.default.show({
                        title: O.default.Messages.GAME_CONSOLE_TRANSFER_TIMEOUT_TITLE,
                        body: O.default.Messages.GAME_CONSOLE_TRANSFER_TIMEOUT_BODY
                    })
                })
            }), R(this, "handleConsoleCommandUpdate", e => {
                var t;
                let {
                    id: n,
                    result: i,
                    error: r
                } = e;
                if ("failed" !== i && "n/a" !== i || null == r) return;
                C.info("Console command Error result:", i, r);
                let a = h.default.getAwaitingRemoteSessionInfo();
                if ((null == a ? void 0 : a.commandId) !== n) return;
                let s = h.default.getDevice(a.type, null !== (t = a.deviceId) && void 0 !== t ? t : ""),
                    o = (0, m.default)(null != s ? s : {
                        id: "id",
                        platform: O.default.Messages.STATUS_UNKNOWN,
                        name: O.default.Messages.STATUS_UNKNOWN
                    }, i, r);
                null != o && S.default.showSelfDismissableAlert({
                    title: o.title,
                    body: o.body,
                    errorCodeMessage: o.errorCodeMessage,
                    reconnectPlatformType: o.isAccountLinkError ? a.type : void 0
                }), N.USER_ACTION_REQUIRED_ERROR_CODES.has(r.code) && this.awaitRemoteTimeout.isStarted() ? this.awaitRemoteTimeout.start(18e4, () => (0, f.disconnectRemote)(), !0) : "failed" === i && (0, f.disconnectRemote)()
            }), R(this, "handleRemoteSessionDisconnect", () => {
                this.awaitRemoteTimeout.stop()
            })
        }
    }
    t.default = new L
}