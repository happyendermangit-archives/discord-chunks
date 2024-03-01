function(e, t, n) {
    "use strict";
    let l;
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("446674"),
        a = n("913144"),
        s = n("626334");
    class r extends i.default.PersistedStore {
        initialize(e) {
            var t;
            l = null !== (t = null == e ? void 0 : e.animationType) && void 0 !== t ? t : s.VoiceChannelEffectAnimationType.PREMIUM
        }
        getState() {
            return {
                animationType: l
            }
        }
    }
    r.displayName = "VoiceChannelEffectsPersistedStore", r.persistKey = "VoiceChannelEffectsPersistedStore";
    var o = new r(a.default, {
        VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: () => {
            l = l === s.VoiceChannelEffectAnimationType.BASIC ? s.VoiceChannelEffectAnimationType.PREMIUM : s.VoiceChannelEffectAnimationType.BASIC
        }
    })
}