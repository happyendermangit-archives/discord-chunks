function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldImmediatelyRequestVoicePermissions: function() {
            return S
        }
    }), n("47120");
    var i = n("147913"),
        r = n("751571"),
        a = n("88751"),
        s = n("590415"),
        o = n("189786"),
        l = n("314897"),
        u = n("592125"),
        d = n("131951"),
        _ = n("19780"),
        c = n("876506"),
        E = n("981631"),
        I = n("761274");
    let T = null;

    function f() {
        r.default.requestPermission(I.NativePermissionTypes.AUDIO).then(e => {
            e && (0, c.default)(!0)
        }), d.default.getMode() === E.InputModes.PUSH_TO_TALK && r.default.requestPermission(I.NativePermissionTypes.INPUT_MONITORING)
    }

    function S(e, t) {
        var n;
        return (null === (n = u.default.getChannel(t)) || void 0 === n ? !void 0 : !n.isListenModeCapable()) || a.default.isSpeaker(e, t)
    }
    class h extends i.default {
        handleVoiceChannelSelect(e) {
            let {
                channelId: t
            } = e;
            null == t && (T = null)
        }
        handleVoiceStateUpdates(e) {
            let {
                voiceStates: t
            } = e;
            t.forEach(e => {
                var t;
                let {
                    userId: n,
                    channelId: i
                } = e;
                if (null != i && l.default.getId() === n && null != _.default.getRTCConnectionId() && T !== i) {
                    if (S(n, i)) {
                        T = i, f();
                        return
                    }
                    t = new o.default(e), (0, s.getAudienceRequestToSpeakState)(t) === s.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && (T = i, f())
                }
            })
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new h
}