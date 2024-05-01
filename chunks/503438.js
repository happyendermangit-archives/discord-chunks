function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("726542"),
        r = n("981631"),
        a = n("616922");

    function s(e) {
        return null != e && e.type === r.ActivityTypes.LISTENING && e.name === i.default.get(r.PlatformTypes.SPOTIFY).name && null != e.party && null != e.party.id && (0, a.isSpotifyParty)(e.party.id)
    }
}