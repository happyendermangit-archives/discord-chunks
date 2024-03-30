function(e, t, n) {
    "use strict";
    let i;
    n.r(t);
    var r, s = n("442837"),
        a = n("570140"),
        o = n("353368");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class u extends(r = s.default.PersistedStore) {
        initialize(e) {
            var t;
            i = null !== (t = null == e ? void 0 : e.animationType) && void 0 !== t ? t : o.VoiceChannelEffectAnimationType.PREMIUM
        }
        getState() {
            return {
                animationType: i
            }
        }
    }
    l(u, "displayName", "VoiceChannelEffectsPersistedStore"), l(u, "persistKey", "VoiceChannelEffectsPersistedStore"), t.default = new u(a.default, {
        VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: () => {
            i = i === o.VoiceChannelEffectAnimationType.BASIC ? o.VoiceChannelEffectAnimationType.PREMIUM : o.VoiceChannelEffectAnimationType.BASIC
        }
    })
}