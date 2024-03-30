function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("374550"),
        o = n("891387"),
        i = n("439386");

    function a(e) {
        return o.ClipsExperiment.getCurrentConfig({
            location: "isClipsClientCapable"
        }, {
            autoTrackExposure: !1
        }).ignorePlatformRestriction || r.isDesktop() && e.getMediaEngine().supports(i.Features.CLIPS)
    }
}