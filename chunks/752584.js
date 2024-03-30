function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("702016"),
        o = n("35523"),
        i = n("374550"),
        a = n("131900");
    (0, r.inject)({
        supported: function() {
            try {
                if (__OVERLAY__);
                else if (i.isPlatformEmbedded) {
                    var e = (0, r.getVoiceEngine)();
                    if (null == e.VoiceConnection || null == e.setVideoOutputSink && null == e.addVideoOutputSink) throw Error("voe function missing");
                    return !0
                }
            } catch (e) {
                new o.default("injectMediaEngine").error("Potentially corrupt installation:", e.message)
            }
            return !1
        },
        supportsFeature: function(e) {
            return a.default.supportsFeature(e)
        },
        setProcessPriority: function(e) {
            a.default.getDiscordUtils().setProcessPriority(e)
        },
        getVoiceEngine: function() {
            return a.default.getVoiceEngine()
        }
    })
}