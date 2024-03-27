function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("726542"),
        r = n("981631"),
        s = n("616922");

    function a(e) {
        return null != e && e.type === r.ActivityTypes.LISTENING && e.name === i.default.get(r.PlatformTypes.SPOTIFY).name && null != e.party && null != e.party.id && (0, s.isSpotifyParty)(e.party.id)
    }
}