function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("773336"),
        s = n("56947"),
        r = n("353927");

    function a(e) {
        let {
            ignorePlatformRestriction: t
        } = s.ClipsExperiment.getCurrentConfig({
            location: "isClipsClientCapable"
        }, {
            autoTrackExposure: !1
        });
        return t || i.isDesktop() && e.getMediaEngine().supports(r.Features.CLIPS)
    }
}