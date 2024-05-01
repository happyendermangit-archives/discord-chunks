function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        coerceAudioContextForProto: function() {
            return l
        },
        snapVolumeToDefault: function() {
            return o
        }
    });
    var i = n("51407"),
        r = n("46973"),
        s = n("36703"),
        a = n("526761");

    function o(e, t) {
        let n = t === r.MediaEngineContextTypes.STREAM ? i.AudioSettingsDefaultVolumes.STREAM : i.AudioSettingsDefaultVolumes.USER;
        return 1 > Math.abs((0, s.amplitudeToPerceptual)(n) - (0, s.amplitudeToPerceptual)(e)) ? n : e
    }

    function l(e) {
        switch (e) {
            case r.MediaEngineContextTypes.DEFAULT:
                return a.ProtoAudioSettingsContextTypes.USER;
            case r.MediaEngineContextTypes.STREAM:
                return a.ProtoAudioSettingsContextTypes.STREAM;
            default:
                return
        }
    }
}