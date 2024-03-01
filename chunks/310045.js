function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        shouldImmediatelyRequestVoicePermissions: function() {
            return l
        },
        default: function() {
            return L
        }
    }), E("222007");
    var t = E("689988"),
        o = E("928609"),
        n = E("325861"),
        r = E("808422"),
        i = E("628454"),
        a = E("271938"),
        I = E("42203"),
        s = E("42887"),
        T = E("945956"),
        S = E("850296"),
        N = E("49111"),
        O = E("180524");
    let A = null;

    function R() {
        o.default.requestPermission(O.NativePermissionTypes.AUDIO).then(e => {
            e && (0, S.default)(!0)
        }), s.default.getMode() === N.InputModes.PUSH_TO_TALK && o.default.requestPermission(O.NativePermissionTypes.INPUT_MONITORING)
    }

    function l(e, _) {
        var E;
        let t = null === (E = I.default.getChannel(_)) || void 0 === E ? void 0 : E.isListenModeCapable();
        if (!t) return !0;
        let o = n.default.isSpeaker(e, _);
        return o
    }
    class u extends t.default {
        handleVoiceChannelSelect(e) {
            let {
                channelId: _
            } = e;
            null == _ && (A = null)
        }
        handleVoiceStateUpdates(e) {
            let {
                voiceStates: _
            } = e;
            _.forEach(e => {
                let {
                    userId: _,
                    channelId: E
                } = e;
                if (null == E) return;
                let t = a.default.getId() === _;
                if (!t || null == T.default.getRTCConnectionId() || A === E) return;
                let o = l(_, E);
                if (o) {
                    A = E, R();
                    return
                }
                let n = function(e) {
                    let _ = (0, r.getAudienceRequestToSpeakState)(e),
                        E = _ === r.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                    return E
                }(new i.default(e));
                n && (A = E, R())
            })
        }
        constructor(...e) {
            super(...e), this.actions = {
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
            }
        }
    }
    var L = new u
}