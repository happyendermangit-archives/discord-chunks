function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        coerceAudioContextForProto: function() {
            return s
        },
        snapVolumeToDefault: function() {
            return u
        }
    });
    var r = n("160600"),
        o = n("384433"),
        i = n("605855"),
        a = n("382021");

    function u(e, t) {
        var n = t === o.MediaEngineContextTypes.STREAM ? r.AudioSettingsDefaultVolumes.STREAM : r.AudioSettingsDefaultVolumes.USER;
        return 1 > Math.abs((0, i.amplitudeToPerceptual)(n) - (0, i.amplitudeToPerceptual)(e)) ? n : e
    }

    function s(e) {
        switch (e) {
            case o.MediaEngineContextTypes.DEFAULT:
                return a.ProtoAudioSettingsContextTypes.USER;
            case o.MediaEngineContextTypes.STREAM:
                return a.ProtoAudioSettingsContextTypes.STREAM;
            default:
                return
        }
    }
}