function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        snapVolumeToDefault: function() {
            return o
        },
        coerceAudioContextForProto: function() {
            return d
        }
    });
    var s = n("938850"),
        i = n("773364"),
        r = n("829536"),
        a = n("397336");

    function o(e, t) {
        let n = t === i.MediaEngineContextTypes.STREAM ? s.AudioSettingsDefaultVolumes.STREAM : s.AudioSettingsDefaultVolumes.USER;
        return 1 > Math.abs((0, r.amplitudeToPerceptual)(n) - (0, r.amplitudeToPerceptual)(e)) ? n : e
    }

    function d(e) {
        switch (e) {
            case i.MediaEngineContextTypes.DEFAULT:
                return a.ProtoAudioSettingsContextTypes.USER;
            case i.MediaEngineContextTypes.STREAM:
                return a.ProtoAudioSettingsContextTypes.STREAM;
            default:
                return
        }
    }
}