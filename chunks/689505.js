function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("53867"),
        o = n("335911"),
        i = n("605855");

    function a(e) {
        var t, n;
        return Math.min(e * (n = r.SoundboardSettings.getSetting(), (0, i.amplitudeToPerceptual)(null !== (t = null == n ? void 0 : n.volume) && void 0 !== t ? t : 100) / 100) * Math.min(o.default.getOutputVolume() / 100, 1), 1)
    }
}