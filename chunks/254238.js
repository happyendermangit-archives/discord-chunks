function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        connectToRemote: function() {
            return m
        },
        disconnectRemote: function() {
            return h
        },
        fetchDevices: function() {
            return C
        },
        persistSelectedDeviceId: function() {
            return g
        },
        remoteAudioSettingsUpdate: function() {
            return p
        },
        remoteDisconnect: function() {
            return O
        },
        remoteVoiceStateUpdate: function() {
            return N
        },
        transferToPlayStation: function() {
            return v
        }
    }), n("653041"), n("47120");
    var i = n("434179"),
        r = n("771649"),
        s = n("544891"),
        a = n("570140"),
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

    function A(e, t) {
        var n, i;
        _.default.track(f.AnalyticEvents.REMOTE_COMMAND_SENT, {
            command_type: e,
            remote_platform: null === (i = d.default.getSessionById(t)) || void 0 === i ? void 0 : null === (n = i.clientInfo) || void 0 === n ? void 0 : n.os
        })
    }
    async function h() {
        let e = I.default.getAwaitingRemoteSessionInfo(),
            t = null == e ? void 0 : e.nonce;
        a.default.dispatch({
            type: "REMOTE_SESSION_DISCONNECT"
        });
        let n = [];
        ((null == e ? void 0 : e.type) === f.PlatformTypes.PLAYSTATION || (null == e ? void 0 : e.type) === f.PlatformTypes.PLAYSTATION_STAGING) && (null == e ? void 0 : e.commandId) != null && (null == e ? void 0 : e.deviceId) != null && n.push(D(e.type, e.deviceId, e.commandId)), null != t && n.push(function(e) {
            return s.HTTP.del({
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
        a.default.dispatch({
            type: "REMOTE_SESSION_CONNECT",
            sessionId: e
        })
    }

    function N(e, t) {
        let {
            selfMute: n,
            selfDeaf: i
        } = t;
        a.default.dispatch({
            type: "REMOTE_COMMAND",
            sessionId: e,
            payload: {
                type: "VOICE_STATE_UPDATE",
                self_mute: n,
                self_deaf: i
            }
        }), A("VOICE_STATE_UPDATE", e)
    }

    function O(e) {
        a.default.dispatch({
            type: "REMOTE_COMMAND",
            sessionId: e,
            payload: {
                type: "DISCONNECT"
            }
        }), A("DISCONNECT", e), h()
    }

    function p(e, t, n, i) {
        let r = (0, l.coerceAudioContextForProto)(n);
        null != r && (a.default.dispatch({
            type: "REMOTE_COMMAND",
            sessionId: e,
            payload: {
                type: "AUDIO_SETTINGS_UPDATE",
                context: r,
                id: t,
                ...i
            }
        }), A("AUDIO_SETTINGS_UPDATE", e))
    }
    async function R() {
        let e;
        try {
            let t = null != u.default.getRTCConnectionId() ? r.ConsoleHandoffType.TRANSFER_EXISTING_CALL : r.ConsoleHandoffType.CREATE_NEW_CALL;
            e = (await s.HTTP.post({
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
        a.default.dispatch({
            type: "GAME_CONSOLE_FETCH_DEVICES_START",
            platform: e
        });
        try {
            t = await s.HTTP.get({
                url: f.Endpoints.CONSOLES_DEVICES(e)
            })
        } catch (t) {
            throw a.default.dispatch({
                type: "GAME_CONSOLE_FETCH_DEVICES_FAIL",
                platform: e,
                error: t
            }), t
        }
        let n = t.body.devices;
        return a.default.dispatch({
            type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS",
            platform: e,
            devices: n
        }), n
    }

    function g(e, t) {
        a.default.dispatch({
            type: "GAME_CONSOLE_SELECT_DEVICE",
            platform: e,
            deviceId: t
        })
    }
    async function L(e, t, n, r) {
        let o;
        a.default.dispatch({
            type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START",
            platform: e
        });
        try {
            o = await s.HTTP.post({
                url: f.Endpoints.CONSOLES_DEVICES_COMMANDS(e, t),
                body: {
                    command: i.ConsoleCommands.CONNECT_VOICE,
                    channel_id: n.id,
                    guild_id: n.guild_id,
                    nonce: r
                }
            })
        } catch (t) {
            throw a.default.dispatch({
                type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL",
                platform: e,
                error: t
            }), t
        }
        let l = o.body.id;
        return a.default.dispatch({
            type: "WAIT_FOR_REMOTE_SESSION",
            sessionType: e,
            nonce: r,
            channelId: n.id,
            deviceId: t,
            commandId: l
        }), l
    }
    async function D(e, t, n) {
        a.default.dispatch({
            type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START",
            platform: e,
            deviceId: t,
            commandId: n
        });
        try {
            await s.HTTP.del({
                url: f.Endpoints.CONSOLES_DEVICES_COMMAND(e, t, n)
            })
        } catch (i) {
            throw a.default.dispatch({
                type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL",
                platform: e,
                deviceId: t,
                commandId: n,
                error: i
            }), i
        }
        a.default.dispatch({
            type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS",
            platform: e,
            deviceId: t,
            commandId: n
        })
    }
    async function v(e, t, n) {
        await E.default.maybeShowPTTAlert(e), await h();
        let i = await R();
        await L(e, t, n, i), (0, T.default)(n.id, e)
    }
}