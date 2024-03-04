function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("376556"),
        s = n("49111"),
        r = n("450484");

    function a(e) {
        return null != e && e.type === s.ActivityTypes.LISTENING && e.name === i.default.get(s.PlatformTypes.SPOTIFY).name && null != e.party && null != e.party.id && (0, r.isSpotifyParty)(e.party.id)
    }
}