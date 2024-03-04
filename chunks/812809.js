function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("845579"),
        s = n("42887"),
        r = n("829536");

    function a(e) {
        let t = function() {
                var e;
                let t = i.SoundboardSettings.getSetting();
                return (0, r.amplitudeToPerceptual)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100) / 100
            }(),
            n = Math.min(s.default.getOutputVolume() / 100, 1);
        return Math.min(e * t * n, 1)
    }
}