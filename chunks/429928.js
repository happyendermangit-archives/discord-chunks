function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var s = n("376556"),
        i = n("49111"),
        r = n("450484");

    function a(e) {
        return null != e && e.type === i.ActivityTypes.LISTENING && e.name === s.default.get(i.PlatformTypes.SPOTIFY).name && null != e.party && null != e.party.id && (0, r.isSpotifyParty)(e.party.id)
    }
}