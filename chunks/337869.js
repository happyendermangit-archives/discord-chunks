function(e, t, n) {
    "use strict";
    n.r(t), n("411104");
    var i = n("992774"),
        r = n("710845"),
        a = n("358085"),
        s = n("998502");
    (0, i.inject)({
        supported() {
            try {
                if (__OVERLAY__);
                else if (a.isPlatformEmbedded) {
                    let e = (0, i.getVoiceEngine)();
                    if (null == e.VoiceConnection || null == e.setVideoOutputSink && null == e.addVideoOutputSink) throw Error("voe function missing");
                    return !0
                }
            } catch (e) {
                new r.default("injectMediaEngine").error("Potentially corrupt installation:", e.message)
            }
            return !1
        },
        supportsFeature: e => s.default.supportsFeature(e),
        setProcessPriority(e) {
            s.default.getDiscordUtils().setProcessPriority(e)
        },
        getVoiceEngine: () => s.default.getVoiceEngine()
    })
}