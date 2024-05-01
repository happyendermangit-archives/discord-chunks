function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("570140"),
        r = n("317770"),
        a = n("358085"),
        s = n("374023"),
        o = n("761274"),
        l = n("981631");
    class u extends r.default {
        isEnabled() {
            return (0, a.isDesktop)() && (0, a.isMac)() && !s.ProcessArgs.isDiscordTestSet()
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