function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("358085"),
        r = n("924557"),
        s = n("65154");

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