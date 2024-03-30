function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("386823"),
        o = n("281767"),
        i = n("935776");

    function a(e) {
        return null != e && e.type === o.ActivityTypes.LISTENING && e.name === r.default.get(o.PlatformTypes.SPOTIFY).name && null != e.party && null != e.party.id && (0, i.isSpotifyParty)(e.party.id)
    }
}