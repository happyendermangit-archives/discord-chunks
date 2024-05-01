function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        connectToRemote: function() {
            return m
        },
        disconnectRemote: function() {
            return A
        },
        fetchDevices: function() {
            return C
        },
        persistSelectedDeviceId: function() {
            return g
        },
        remoteAudioSettingsUpdate: function() {
            return O
        },
        remoteDisconnect: function() {
            return p
        },
        remoteVoiceStateUpdate: function() {
            return N
        },
        transferToPlayStation: function() {
            return D
        }
    }), n("653041"), n("47120");
    var i = n("434179"),
        r = n("771649"),
        a = n("544891"),
        s = n("570140"),
        o = n("668781"),
        l = n("340332"),
        u = n("19780"),
        d = n("797258"),
        _ = n("626135"),
        c = n("960048"),
        E = n("607214"),
        I = n("258609"),
        T = n("893387"),
        f = n("981631"),
        S = n("689938");

    function h(e, t) {
        var n, i;
        _.default.track(f.AnalyticEvents.REMOTE_COMMAND_SENT, {
            command_type: e,
            remote_platform: null === (i = d.default.getSessionById(t)) || void 0 === i ? void 0 : null === (n = i.clientInfo) || void 0 === n ? void 0 : n.os
        })
    }
    async function A() {
        let e = I.default.getAwaitingRemoteSessionInfo(),
            t = null == e ? void 0 : e.nonce;
        s.default.dispatch({
            type: "REMOTE_SESSION_DISCONNECT"
        });
        let n = [];
        ((null == e ? void 0 : e.type) === f.PlatformTypes.PLAYSTATION || (null == e ? void 0 : e.type) === f.PlatformTypes.PLAYSTATION_STAGING) && (null == e ? void 0 : e.commandId) != null && (null == e ? void 0 : e.deviceId) != null && n.push(v(e.type, e.deviceId, e.commandId)), null != t && n.push(function(e) {
            return a.HTTP.del({
                url: f.Endpoints.CONNECT_REQUEST(e)
            })
        }(t));
        try {
            await Promise.all(n)
        } catch (e) {
            o.default.show({
                title: S.default.Messages.CANCEL_TRANSFER_VOICE_FAILED_TITLE,
                body: S.default.Messages.CANCEL_TRANSFER_VOICE_FAILED_BODY
            })
        }
    }

    function m(e) {
        s.default.dispatch({
            type: "REMOTE_SESSION_CONNECT",
            sessionId: e
        })
    }

    function N(e, t) {
        let {
            selfMute: n,
            selfDeaf: i
        } = t;
        s.default.dispatch({
            type: "REMOTE_COMMAND",
            sessionId: e,
            payload: {
                type: "VOICE_STATE_UPDATE",
                self_mute: n,
                self_deaf: i
            }
        }), h("VOICE_STATE_UPDATE", e)
    }

    function p(e) {
        s.default.dispatch({
            type: "REMOTE_COMMAND",
            sessionId: e,
            payload: {
                type: "DISCONNECT"
            }
        }), h("DISCONNECT", e), A()
    }

    function O(e, t, n, i) {
        let r = (0, l.coerceAudioContextForProto)(n);
        null != r && (s.default.dispatch({
            type: "REMOTE_COMMAND",
            sessionId: e,
            payload: {
                type: "AUDIO_SETTINGS_UPDATE",
                context: r,
                id: t,
                ...i
            }
        }), h("AUDIO_SETTINGS_UPDATE", e))
    }
    async function R() {
        let e;
        try {
            let t = null != u.default.getRTCConnectionId() ? r.ConsoleHandoffType.TRANSFER_EXISTING_CALL : r.ConsoleHandoffType.CREATE_NEW_CALL;
            e = (await a.HTTP.post({
                url: f.Endpoints.CONNECT_REQUEST_CREATE,
                body: {
                    analytics_properties: {
                        handoff_type: t
                    }
                }
            })).body.nonce
        } catch (e) {
            c.default.captureException(e)
        }
        return e
    }
    async function C(e) {
        let t;
        s.default.dispatch({
            type: "GAME_CONSOLE_FETCH_DEVICES_START",
            platform: e
        });
        try {
            t = await a.HTTP.get({
                url: f.Endpoints.CONSOLES_DEVICES(e)
            })
        } catch (t) {
            throw s.default.dispatch({
                type: "GAME_CONSOLE_FETCH_DEVICES_FAIL",
                platform: e,
                error: t
            }), t
        }
        let n = t.body.devices;
        return s.default.dispatch({
            type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS",
            platform: e,
            devices: n
        }), n
    }

    function g(e, t) {
        s.default.dispatch({
            type: "GAME_CONSOLE_SELECT_DEVICE",
            platform: e,
            deviceId: t
        })
    }
    async function L(e, t, n, r) {
        let o;
        s.default.dispatch({
            type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START",
            platform: e
        });
        try {
            o = await a.HTTP.post({
                url: f.Endpoints.CONSOLES_DEVICES_COMMANDS(e, t),
                body: {
                    command: i.ConsoleCommands.CONNECT_VOICE,
                    channel_id: n.id,
                    guild_id: n.guild_id,
                    nonce: r
                }
            })
        } catch (t) {
            throw s.default.dispatch({
                type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL",
                platform: e,
                error: t
            }), t
        }
        let l = o.body.id;
        return s.default.dispatch({
            type: "WAIT_FOR_REMOTE_SESSION",
            sessionType: e,
            nonce: r,
            channelId: n.id,
            deviceId: t,
            commandId: l
        }), l
    }
    async function v(e, t, n) {
        s.default.dispatch({
            type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START",
            platform: e,
            deviceId: t,
            commandId: n
        });
        try {
            await a.HTTP.del({
                url: f.Endpoints.CONSOLES_DEVICES_COMMAND(e, t, n)
            })
        } catch (i) {
            throw s.default.dispatch({
                type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL",
                platform: e,
                deviceId: t,
                commandId: n,
                error: i
            }), i
        }
        s.default.dispatch({
            type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS",
            platform: e,
            deviceId: t,
            commandId: n
        })
    }
    async function D(e, t, n) {
        await E.default.maybeShowPTTAlert(e), await A();
        let i = await R();
        await L(e, t, n, i), (0, T.default)(n.id, e)
    }
}