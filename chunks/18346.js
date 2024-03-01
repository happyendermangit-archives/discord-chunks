function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("773336"),
        r = n("56947"),
        s = n("353927");

    function a(e) {
        let {
            ignorePlatformRestriction: t
        } = r.ClipsExperiment.getCurrentConfig({
            location: "isClipsClientCapable"
        }, {
            autoTrackExposure: !1
        });
        return t || i.isDesktop() && e.getMediaEngine().supports(s.Features.CLIPS)
    }
}