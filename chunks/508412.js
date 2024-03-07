function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return P
        }
    }), E("222007");
    var t = E("627445"),
        o = E.n(t),
        n = E("862337"),
        r = E("404118"),
        a = E("629109"),
        i = E("689988"),
        I = E("605250"),
        s = E("271938"),
        T = E("42887"),
        S = E("945956"),
        N = E("235660"),
        O = E("800762"),
        A = E("449008"),
        R = E("700507"),
        l = E("893243"),
        u = E("76393"),
        L = E("209969"),
        C = E("201615"),
        D = E("171644"),
        c = E("353927"),
        d = E("782340");
    let U = new I.default("GameConsoleManager");
    async function M(e) {
        let _ = S.default.getChannelId();
        o(null == _, "Syncing to remote while in voice!"), e.selfMute !== T.default.isSelfMute() && await a.default.toggleSelfMute({
            syncRemote: !1
        }), e.selfDeaf !== T.default.isSelfDeaf() && a.default.toggleSelfDeaf({
            syncRemote: !1
        })
    }
    class h extends i.default {
        constructor(...e) {
            super(...e), this.rollbackCommandTimeout = new n.Timeout, this.awaitRemoteTimeout = new n.Timeout, this.actions = {
                WAIT_FOR_REMOTE_SESSION: () => this.handleWaitForRemoteSession(),
                POST_CONNECTION_OPEN: () => this.handleSessionsChanged(),
                SESSIONS_REPLACE: () => this.handleSessionsChanged(),
                AUDIO_TOGGLE_SELF_DEAF: e => this.handleAudioStateToggle(e),
                AUDIO_TOGGLE_SELF_MUTE: e => this.handleAudioStateToggle(e),
                VOICE_STATE_UPDATES: e => this.handleVoiceStateUpdates(e),
                CONSOLE_COMMAND_UPDATE: e => this.handleConsoleCommandUpdate(e),
                PASSIVE_UPDATE_V1: e => this.handleVoiceStateUpdates(e),
                REMOTE_SESSION_DISCONNECT: () => this.handleRemoteSessionDisconnect()
            }, this.maybeConnect = e => {
                let _ = function(e) {
                    let _ = u.default.getAwaitingRemoteSessionInfo();
                    return e.find(e => {
                        let E = D.GAME_CONSOLE_SESSIONS.has(e.clientInfo.os),
                            t = null != O.default.getVoiceStateForSession(s.default.getId(), e.sessionId),
                            o = null == _ || (0, L.coercePlatformTypeToConsoleType)(_.type) === e.clientInfo.os;
                        return E && o && t
                    })
                }(e);
                if (null == _) return null;
                this.awaitRemoteTimeout.stop(), (0, R.connectToRemote)(_.sessionId);
                let E = O.default.getVoiceStateForSession(s.default.getId(), _.sessionId);
                null != E && M(E)
            }, this.handleAudioStateToggle = e => {
                let {
                    syncRemote: _,
                    context: E
                } = e;
                if (!_ || E !== c.MediaEngineContextTypes.DEFAULT) return;
                let t = T.default.isSelfDeaf(),
                    o = T.default.isSelfMute(),
                    n = s.default.getId(),
                    r = u.default.getRemoteSessionId();
                if (null == r) return;
                let a = O.default.getVoiceStateForSession(n, r);
                if (null != a)(a.selfDeaf !== t || a.selfMute !== o) && ((0, R.remoteVoiceStateUpdate)(r, {
                    selfDeaf: t,
                    selfMute: o
                }), this.rollbackCommandTimeout.start(3e3, () => {
                    M(a)
                }))
            }, this.handleVoiceStateUpdates = e => {
                var _;
                let E = null !== (_ = e.voiceStates) && void 0 !== _ ? _ : [],
                    t = u.default.getRemoteSessionId();
                if (null == t) {
                    let e = E.map(e => {
                        let {
                            sessionId: _
                        } = e;
                        return null != _ ? N.default.getSessionById(_) : null
                    }).filter(A.isNotNullish);
                    return this.maybeConnect(e)
                }
                let o = E.find(e => {
                    let {
                        sessionId: _
                    } = e;
                    return _ === t
                });
                null != o && (this.rollbackCommandTimeout.stop(), M(o))
            }, this.handleSessionsChanged = () => {
                let e = u.default.getRemoteSessionId();
                null != e && null == N.default.getSessionById(e) && (0, R.disconnectRemote)(), null == e && this.maybeConnect(Object.values(N.default.getSessions()))
            }, this.handleWaitForRemoteSession = () => {
                this.awaitRemoteTimeout.start(6e4, () => {
                    (0, R.disconnectRemote)(), r.default.show({
                        title: d.default.Messages.GAME_CONSOLE_TRANSFER_TIMEOUT_TITLE,
                        body: d.default.Messages.GAME_CONSOLE_TRANSFER_TIMEOUT_BODY
                    })
                })
            }, this.handleConsoleCommandUpdate = e => {
                var _;
                let {
                    id: E,
                    result: t,
                    error: o
                } = e;
                if ("failed" !== t && "n/a" !== t || null == o) return;
                U.info("Console command Error result:", t, o);
                let n = u.default.getAwaitingRemoteSessionInfo();
                if ((null == n ? void 0 : n.commandId) !== E) return;
                let r = u.default.getDevice(n.type, null !== (_ = n.deviceId) && void 0 !== _ ? _ : ""),
                    a = (0, C.default)(null != r ? r : {
                        id: "id",
                        platform: d.default.Messages.STATUS_UNKNOWN,
                        name: d.default.Messages.STATUS_UNKNOWN
                    }, t, o);
                null != a && l.default.showSelfDismissableAlert({
                    title: a.title,
                    body: a.body,
                    errorCodeMessage: a.errorCodeMessage,
                    reconnectPlatformType: a.isAccountLinkError ? n.type : void 0
                }), D.USER_ACTION_REQUIRED_ERROR_CODES.has(o.code) && this.awaitRemoteTimeout.isStarted() ? this.awaitRemoteTimeout.start(18e4, () => (0, R.disconnectRemote)(), !0) : "failed" === t && (0, R.disconnectRemote)()
            }, this.handleRemoteSessionDisconnect = () => {
                this.awaitRemoteTimeout.stop()
            }
        }
    }
    var P = new h
}