function(e, t, n) {
    "use strict";
    n.r(t), n("411104");
    var i = n("992774"),
        r = n("710845"),
        s = n("358085"),
        a = n("998502");
    (0, i.inject)({
        supported() {
            try {
                if (__OVERLAY__);
                else if (s.isPlatformEmbedded) {
                    let e = (0, i.getVoiceEngine)();
                    if (null == e.VoiceConnection || null == e.setVideoOutputSink && null == e.addVideoOutputSink) throw Error("voe function missing");
                    return !0
                }
            } catch (e) {
                new r.default("injectMediaEngine").error("Potentially corrupt installation:", e.message)
            }
            return !1
        },
        supportsFeature: e => a.default.supportsFeature(e),
        setProcessPriority(e) {
            a.default.getDiscordUtils().setProcessPriority(e)
        },
        getVoiceEngine: () => a.default.getVoiceEngine()
    })
}