function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("570140"),
        r = n("317770"),
        s = n("358085"),
        a = n("374023"),
        o = n("761274"),
        l = n("981631");
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
            t === l.InputModes.PUSH_TO_TALK && n("751571").default.requestPermission(o.NativePermissionTypes.INPUT_MONITORING)
        }
    }
    t.default = new u
}