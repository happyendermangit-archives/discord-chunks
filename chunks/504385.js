function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        snapVolumeToDefault: function() {
            return o
        },
        coerceAudioContextForProto: function() {
            return l
        }
    });
    var i = n("938850"),
        s = n("773364"),
        r = n("829536"),
        a = n("397336");

    function o(e, t) {
        let n = t === s.MediaEngineContextTypes.STREAM ? i.AudioSettingsDefaultVolumes.STREAM : i.AudioSettingsDefaultVolumes.USER;
        return 1 > Math.abs((0, r.amplitudeToPerceptual)(n) - (0, r.amplitudeToPerceptual)(e)) ? n : e
    }

    function l(e) {
        switch (e) {
            case s.MediaEngineContextTypes.DEFAULT:
                return a.ProtoAudioSettingsContextTypes.USER;
            case s.MediaEngineContextTypes.STREAM:
                return a.ProtoAudioSettingsContextTypes.STREAM;
            default:
                return
        }
    }
}