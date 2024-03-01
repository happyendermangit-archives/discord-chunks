function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("913144"),
        r = n("316272"),
        s = n("773336"),
        a = n("197881"),
        o = n("180524"),
        l = n("49111");
    class u extends r.default {
        isEnabled() {
            return (0, s.isDesktop)() && (0, s.isMac)() && !a.ProcessArgs.isDiscordTestSet()
        }
        _initialize() {
            this.isEnabled() && i.default.subscribe("AUDIO_SET_MODE", this.handleAudioSetMode)
        }
        _terminate() {
            this.isEnabled() && i.default.unsubscribe("AUDIO_SET_MODE", this.handleAudioSetMode)
        }
        handleAudioSetMode(e) {
            let {
                mode: t
            } = e;
            if (t === l.InputModes.PUSH_TO_TALK) {
                let e = n("928609").default;
                e.requestPermission(o.NativePermissionTypes.INPUT_MONITORING)
            }
        }
    }
    var c = new u
}