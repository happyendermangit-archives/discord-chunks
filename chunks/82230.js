function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var l = n("446674"),
        a = n("913144"),
        s = n("626334");
    class r extends l.default.PersistedStore {
        initialize(e) {
            var t;
            i = null !== (t = null == e ? void 0 : e.animationType) && void 0 !== t ? t : s.VoiceChannelEffectAnimationType.PREMIUM
        }
        getState() {
            return {
                animationType: i
            }
        }
    }
    r.displayName = "VoiceChannelEffectsPersistedStore", r.persistKey = "VoiceChannelEffectsPersistedStore";
    var o = new r(a.default, {
        VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: () => {
            i = i === s.VoiceChannelEffectAnimationType.BASIC ? s.VoiceChannelEffectAnimationType.PREMIUM : s.VoiceChannelEffectAnimationType.BASIC
        }
    })
}