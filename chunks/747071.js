function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("695346"),
        r = n("131951"),
        a = n("36703");

    function s(e) {
        let t = function() {
            var e;
            let t = i.SoundboardSettings.getSetting();
            return (0, a.amplitudeToPerceptual)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100) / 100
        }();
        return Math.min(e * t * Math.min(r.default.getOutputVolume() / 100, 1), 1)
    }
}